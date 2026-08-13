#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const source = JSON.parse(await readFile(resolve("localization/game.en-US.json"), "utf8"));
const catalog = JSON.parse(await readFile(resolve("localization/catalog.hi-IN.json"), "utf8"));
const report = JSON.parse(await readFile(resolve("localization/build/hi-IN/build-report.json"), "utf8"));
const errors = [];
const templateTokens = (value) => (String(value).match(/\{\{[^}]+\}\}/g) || []).sort().join("|");

if (report.translated !== (source.lines || []).length) errors.push(`build contains ${report.translated}/${source.lines.length} entries`);
if (report.missing?.length) errors.push(`${report.missing.length} source entries were not mapped`);
if (report.unusable?.length) errors.push(`${report.unusable.length} catalog entries were not usable`);
for (const line of source.lines || []) {
  const entry = catalog.entries?.[line.id];
  if (!entry) errors.push(`missing catalog entry ${line.id}`);
  else if (templateTokens(line.text) !== templateTokens(entry.text)) errors.push(`template variables changed in ${line.id}`);
}
for (const scene of new Set((source.lines || []).map((line) => line.scene))) {
  const original = await readFile(resolve("scenes", `${scene}.md`), "utf8");
  const localized = await readFile(resolve("localization/build/hi-IN/scenes", `${scene}.md`), "utf8");
  const sectionIds = (value) => [...value.matchAll(/^#\s*(.+)$/gm)].map((match) => match[1].trim().toLowerCase());
  if (JSON.stringify(sectionIds(original)) !== JSON.stringify(sectionIds(localized))) errors.push(`branch sections changed in ${scene}`);
  const destinations = (value) => [...value.matchAll(/\]\(([^)]*)\)/g)].map((match) => match[1]);
  if (JSON.stringify(destinations(original)) !== JSON.stringify(destinations(localized))) errors.push(`choice destinations changed in ${scene}`);
  const runtimeTokens = (value) => [...value.matchAll(/\{\{[^}]+\}\}/g)].map((match) => match[0]);
  if (JSON.stringify(runtimeTokens(original)) !== JSON.stringify(runtimeTokens(localized))) errors.push(`runtime template tokens changed in ${scene}`);
}

if (errors.length) { console.error(errors.join("\n")); process.exit(2); }
console.log(`Hindi build valid: ${report.translated}/${source.lines.length} entries; branch sections, choice destinations, and runtime tokens preserved`);
