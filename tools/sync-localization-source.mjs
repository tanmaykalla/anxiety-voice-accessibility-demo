#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFile, rename, writeFile } from "node:fs/promises";
import { basename, dirname, resolve } from "node:path";

const sourcePath = resolve("localization/game.en-US.json");
const catalogPath = resolve("localization/catalog.hi-IN.json");
const source = JSON.parse(await readFile(sourcePath, "utf8"));
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const clean = (value) => String(value).replace(/#\w+#/g, "").replace(/[*_~^]/g, "").replace(/\s+/g, " ").trim();
const canonical = (value) => {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
};
const fnv1a = (value) => { let hash = 0x811c9dc5; for (let index = 0; index < value.length; index++) { hash ^= value.charCodeAt(index); hash = Math.imul(hash, 0x01000193); } return (hash >>> 0).toString(16).padStart(8, "0"); };
const sourceHash = (entry) => fnv1a(canonical({ text: clean(entry.text), speaker: entry.speaker || null, emotion: entry.emotion || null, intent: entry.intent || null }));
const atomicJson = async (path, value) => { const temporary = resolve(dirname(path), `.${basename(path)}.tmp`); await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`); await rename(temporary, path); };

const existing = new Set((source.lines || []).map((line) => line.id));
let added = 0;
for (const scene of ["intro", "act1", "intermission", "act2", "act3", "act4", "credits"]) {
  const markdown = (await readFile(resolve("scenes", `${scene}.md`), "utf8")).replace(/\r/g, "");
  let section = "";
  const occurrences = new Map();
  for (const block of markdown.split(/\n\n+/)) {
    const header = block.match(/^#\s*(.+)$/);
    if (header) { section = header[1].trim().toLowerCase(); continue; }
    const choice = block.match(/\[([^\]]+)\]\(([^)]*)\)/);
    if (!choice) continue;
    const text = clean(choice[1]);
    if (!text) continue;
    const identity = `${section}\0${text}`;
    const occurrence = (occurrences.get(identity) || 0) + 1;
    occurrences.set(identity, occurrence);
    const digest = createHash("sha256").update(`${scene}\0${identity}\0${occurrence}`).digest("hex").slice(0, 12);
    const id = `${scene}-choice-${digest}`;
    if (existing.has(id)) continue;
    const line = { id, scene, section, category: "choice", speaker: "meta", text, emotion: "neutral" };
    source.lines.push(line); existing.add(id);
    catalog.entries[id] = { sourceText: text, text: "", speaker: "meta", emotion: "neutral", spokenLabel: "", aliases: [], sourceHash: sourceHash(line), reviewStatus: "needs-review" };
    added++;
  }
}

await atomicJson(sourcePath, source);
await atomicJson(catalogPath, catalog);
console.log(`Localization source synchronized: ${added} choices added, ${source.lines.length} total entries`);
