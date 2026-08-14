#!/usr/bin/env node

import { readFile, rename, writeFile } from "node:fs/promises";
import { basename, dirname, resolve } from "node:path";

const args = process.argv.slice(2);
const reviewerIndex = args.indexOf("--reviewer");
const reviewer = reviewerIndex >= 0 ? args[reviewerIndex + 1]?.trim() : "";
if (!args.includes("--confirm-reviewed") || !reviewer) {
  throw new Error("Approval requires --confirm-reviewed and --reviewer <name>");
}

const path = resolve("localization/catalog.hi-IN.json");
const catalog = JSON.parse(await readFile(path, "utf8"));
const reviewedAt = new Date().toISOString();
let approved = 0;
for (const entry of Object.values(catalog.entries || {})) {
  if (!String(entry.text || "").trim()) throw new Error("Cannot approve a catalog containing an empty translation");
  if (entry.reviewStatus === "rejected") throw new Error("Cannot bulk-approve a catalog containing rejected entries");
  entry.reviewStatus = "approved";
  delete entry.reviewedBy;
  delete entry.reviewedAt;
  approved++;
}
catalog.review = { status: "approved", reviewedBy: reviewer, reviewedAt, entries: approved };
const temporary = resolve(dirname(path), `.${basename(path)}.tmp`);
await writeFile(temporary, `${JSON.stringify(catalog, null, 2)}\n`);
await rename(temporary, path);
console.log(`Approved ${approved} entries as reviewed by ${reviewer}`);
