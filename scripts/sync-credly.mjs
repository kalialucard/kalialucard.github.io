#!/usr/bin/env node
/**
 * scripts/sync-credly.mjs
 * Fetches the public Credly badge list for the user, writes src/data/credly.json,
 * and downloads badge images to public/badges/<id>.png.
 *
 * Usage (Windows & Linux):
 *   node scripts/sync-credly.mjs
 *
 * Requires Node 18+ (fetch built-in). No npm deps.
 * Run manually; never runs at build time. Commit the output.
 */

import { createWriteStream, mkdirSync, existsSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_JSON = join(ROOT, 'src', 'data', 'credly.json');
const BADGES_DIR = join(ROOT, 'public', 'badges');
const CREDLY_USER = 'samindra-sanjaya';

// Identity fields that must NEVER appear in the written file
const PRIVATE_FIELDS = new Set([
  'issued_to', 'recipient_name', 'recipient_email',
  'earner_path', 'earner_photo_url', 'user_is_earner',
]);

mkdirSync(BADGES_DIR, { recursive: true });

async function downloadImage(url, destPath) {
  if (existsSync(destPath)) {
    console.log(`  skip (exists): ${destPath}`);
    return;
  }
  const res = await fetch(url, { headers: { 'User-Agent': 'samindrasamiya.site/sync-credly' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching image ${url}`);
  const ws = createWriteStream(destPath);
  await pipeline(Readable.fromWeb(res.body), ws);
  console.log(`  downloaded: ${destPath}`);
}

async function main() {
  const url = `https://www.credly.com/users/${CREDLY_USER}/badges.json`;
  console.log(`Fetching ${url} …`);

  let raw;
  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json', 'User-Agent': 'samindrasamiya.site/sync-credly' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    raw = await res.json();
  } catch (e) {
    console.error(`Failed: ${e.message}`);
    process.exit(1);
  }

  const items = raw.data ?? raw.badges ?? raw ?? [];
  const output = [];

  for (const item of items) {
    const tmpl = item.badge_template ?? {};
    const issuerEntities = item.issuer?.entities ?? [];
    const issuerName = issuerEntities.find(e => e.primary)?.entity?.name
      ?? issuerEntities[0]?.entity?.name
      ?? null;

    const imageUrl = tmpl.image_url ?? tmpl.image?.url ?? null;

    const record = {
      id:              item.id,
      name:            tmpl.name ?? 'Unknown',
      issuer:          issuerName,
      issued_at_date:  item.issued_at_date ?? null,
      expires_at_date: item.expires_at_date ?? null,
      level:           tmpl.level ?? null,
      url:             `https://www.credly.com/badges/${item.id}`,
      local_image:     null,
    };

    // Safety check — ensure no private fields slipped through
    for (const f of PRIVATE_FIELDS) {
      if (f in record) {
        console.warn(`WARN: stripping private field ${f} from ${record.id}`);
        delete record[f];
      }
    }

    // Download badge image
    if (imageUrl) {
      const dest = join(BADGES_DIR, `${item.id}.png`);
      try {
        await downloadImage(imageUrl, dest);
        record.local_image = `/badges/${item.id}.png`;
      } catch (e) {
        console.warn(`  WARN: image download failed for ${item.id}: ${e.message}`);
      }
    }

    output.push(record);
  }

  // Final verification — no private fields in stringified output
  const json = JSON.stringify(output, null, 2) + '\n';
  for (const f of PRIVATE_FIELDS) {
    if (json.includes(`"${f}"`)) {
      console.error(`FATAL: private field "${f}" found in output — aborting.`);
      process.exit(1);
    }
  }

  writeFileSync(OUT_JSON, json, 'utf8');
  console.log(`\nWrote ${output.length} badge(s) to src/data/credly.json`);
  console.log('Done. Commit src/data/credly.json and public/badges/.');
}

main().catch(e => { console.error(e); process.exit(1); });
