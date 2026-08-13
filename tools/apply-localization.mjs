#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, dirname, resolve } from "node:path";

const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index < 0 ? fallback : args[index + 1];
};
const sourcePath = resolve(option("--source", "localization/game.en-US.json"));
const catalogPath = resolve(option("--catalog", "localization/catalog.hi-IN.json"));
const scenesPath = resolve(option("--scenes", "scenes"));
const outputPath = resolve(option("--output", "localization/build/hi-IN/scenes"));
const allowDrafts = args.includes("--allow-drafts");

const source = JSON.parse(await readFile(sourcePath, "utf8"));
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const usable = (entry) => entry && (entry.reviewStatus === "approved" || allowDrafts && entry.reviewStatus !== "rejected");
const clean = (value) => String(value)
  .replace(/\{\{(?:if|\/if)[^}]*\}\}/g, " ").trim()
  .replace(/^(?:n|h|b|a|s|r|d|k|i)\d*:\s*/i, "")
  .replace(/^\[([^\]]*)\]\([^)]*\)(?:\s+`[\s\S]*`)?$/, "$1")
  .replace(/#\w+#/g, "").replace(/<[^>]*>/g, "").replace(/[*_~^]/g, "")
  .replace(/\\([\\`*{}\[\]()#+.!_-])/g, "$1").replace(/&amp;/g, "&")
  .replace(/\s+/g, " ").trim();

function replaceBlock(block, translated) {
  const rawTokens = [...block.matchAll(/\{\{(?!\/?if\b)[^}]+\}\}/g)].map((match) => match[0]);
  const translatedTokens = [...translated.matchAll(/\{\{(?!\/?if\b)[^}]+\}\}/g)].map((match) => match[0]);
  if (rawTokens.length !== translatedTokens.length) throw new Error(`Template token count changed in: ${clean(block)}`);
  translatedTokens.forEach((token, index) => { translated = translated.replace(token, rawTokens[index]); });
  const dialogue = block.match(/(^|\n)((?:n|h|b|a|s|r|d|k|i)\d*:\s*)([^\n]*)(?=\n|$)/i);
  if (dialogue) return block.slice(0, dialogue.index) + dialogue[1] + dialogue[2] + translated + block.slice(dialogue.index + dialogue[0].length);
  const choice = block.match(/\[([^\]]*)\](\([^)]*\))/);
  if (choice) {
    const leading = choice[1].match(/^(?:#\w+#\s*)+/)?.[0] || "";
    const trailing = choice[1].match(/(?:\s*#\w+#)+$/)?.[0] || "";
    return block.slice(0, choice.index) + `[${leading}${translated}${trailing}]${choice[2]}` + block.slice(choice.index + choice[0].length);
  }
  const wrapper = block.match(/^(\{\{if[^}]*\}\}\s*)([\s\S]*?)(\s*\{\{\/if\}\})$/);
  if (wrapper) return wrapper[1] + translated + wrapper[3];
  return translated;
}

function sectionRanges(markdown) {
  const ranges = [];
  const matcher = /^#\s*(.+)$/gm;
  let match;
  while ((match = matcher.exec(markdown))) ranges.push({ id: match[1].trim().toLowerCase(), start: match.index, bodyStart: matcher.lastIndex });
  return ranges.map((range, index) => ({ ...range, end: ranges[index + 1]?.start ?? markdown.length }));
}

function candidates(markdown, sectionId) {
  const ranges = sectionRanges(markdown);
  const preferred = ranges.filter((range) => range.id === sectionId);
  const ordered = preferred.concat(ranges.filter((range) => range.id !== sectionId));
  const result = [];
  for (const range of ordered) {
    const body = markdown.slice(range.bodyStart, range.end);
    let offset = 0;
    for (const block of body.split(/\n\n+/)) {
      const local = body.indexOf(block, offset);
      offset = local + block.length;
      result.push({ block, start: range.bodyStart + local, preferred: range.id === sectionId });
    }
  }
  return result;
}

const linesByScene = {};
for (const line of source.lines || []) (linesByScene[line.scene] ||= []).push(line);
const report = { locale: catalog.locale, allowDrafts, translated: 0, scenes: {}, missing: [], unusable: [] };
const localizedIndex = { version: 2, locale: catalog.locale, byText: {}, lines: {} };

for (const [scene, lines] of Object.entries(linesByScene)) {
  const input = resolve(scenesPath, `${scene}.md`);
  let markdown = await readFile(input, "utf8");
  const used = new Set();
  let translated = 0;
  for (const line of lines) {
    const entry = catalog.entries?.[line.id];
    if (!usable(entry) || !String(entry.text || "").trim()) { report.unusable.push(line.id); continue; }
    const possible = candidates(markdown, String(line.section || "").toLowerCase())
      .filter((candidate) => clean(candidate.block) === clean(line.text) && !used.has(candidate.start))
      .sort((a, b) => Number(b.preferred) - Number(a.preferred));
    const target = possible[0];
    if (!target) { report.missing.push(line.id); continue; }
    const replacement = replaceBlock(target.block, entry.text.trim());
    markdown = markdown.slice(0, target.start) + replacement + markdown.slice(target.start + target.block.length);
    // Offsets after this replacement changed, so identify used blocks by ID only.
    used.clear();
    translated++; report.translated++;
    const indexKey = entry.text.toLocaleLowerCase(catalog.locale).replace(/[^\p{L}\p{M}\p{N}]+/gu, "");
    (localizedIndex.byText[indexKey] ||= []).push(line.id);
    localizedIndex.lines[line.id] = { ...line, text: entry.text, spokenLabel: entry.spokenLabel || entry.text, aliases: entry.aliases || [] };
  }
  report.scenes[scene] = { entries: lines.length, translated };
  await mkdir(outputPath, { recursive: true });
  await writeFile(resolve(outputPath, `${scene}.md`), markdown);
}

if (report.missing.length || report.unusable.length) {
  console.error(JSON.stringify(report, null, 2));
  throw new Error(`Localization build refused: ${report.missing.length} unmapped and ${report.unusable.length} unusable entries`);
}

const buildRoot = dirname(outputPath);
await writeFile(resolve(buildRoot, "voice-index.js"), `window.VOICE_INDEX = ${JSON.stringify(localizedIndex)};\n`);
await writeFile(resolve(buildRoot, "build-report.json"), `${JSON.stringify(report, null, 2)}\n`);
console.log(`Built ${report.translated} ${catalog.locale} entries in ${outputPath}`);
