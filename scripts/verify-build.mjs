#!/usr/bin/env node
/**
 * scripts/verify-build.mjs
 * Scans dist/ for banned strings. Exits 1 if any are found.
 * Run after `npm run build` in CI.
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '../dist');

const BANNED = [
  'Access_Level',
  'Technical Intelligence',
  'Beginner Analysis',
  'Certifications',       // word must not appear anywhere
  'issued_to',            // credly privacy field
  'No public write-ups yet',
  'aspiring professionals',
  'profile.positioning',  // unexpanded template ref
];

// Exceptions: file paths where a hit is expected/acceptable
const EXCEPTIONS = new Map([
  // 'Certifications' in the credentials page title context — none expected; kept empty
]);

let failures = 0;

function scanDir(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const st = statSync(fullPath);
    if (st.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.endsWith('.html') || entry.endsWith('.xml') || entry.endsWith('.txt')) {
      const content = readFileSync(fullPath, 'utf8');
      for (const banned of BANNED) {
        if (content.includes(banned)) {
          console.error(`FAIL [banned string] "${banned}" found in ${fullPath}`);
          failures++;
        }
      }
    }
  }
}

console.log(`Scanning ${distDir} for banned strings…`);
scanDir(distDir);

if (failures === 0) {
  console.log('✓ verify-build: all checks passed');
  process.exit(0);
} else {
  console.error(`✗ verify-build: ${failures} violation(s) found`);
  process.exit(1);
}
