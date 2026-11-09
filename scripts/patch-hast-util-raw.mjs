#!/usr/bin/env node
// scripts/patch-hast-util-raw.mjs
// Patches hast-util-raw to guard against missing flushCharacters (parse5 v8 compat).
// This fixes: "state.parser.tokenizer.flushCharacters is not a function"
// Run automatically via package.json postinstall.

import fs from 'node:fs';
import path from 'node:path';

const target = new URL(
  '../node_modules/hast-util-raw/lib/index.js',
  import.meta.url
).pathname;

if (!fs.existsSync(target)) {
  console.log('[patch-hast-util-raw] file not found — skipping');
  process.exit(0);
}

const src = fs.readFileSync(target, 'utf8');
const original = 'state.parser.tokenizer.flushCharacters()';
const patched =
  'if (typeof state?.parser?.tokenizer?.flushCharacters === "function") ' +
  'state.parser.tokenizer.flushCharacters()';

if (src.includes(patched)) {
  console.log('[patch-hast-util-raw] already patched — skipping');
  process.exit(0);
}

if (!src.includes(original)) {
  console.log('[patch-hast-util-raw] pattern not found — may already be fixed upstream');
  process.exit(0);
}

const fixed = src.replaceAll(original, patched);
fs.writeFileSync(target, fixed, 'utf8');
const count = (fixed.match(/flushCharacters === "function"/g) || []).length;
console.log(`[patch-hast-util-raw] patched ${count} occurrence(s) in ${path.basename(target)}`);
