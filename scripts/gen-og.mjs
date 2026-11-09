#!/usr/bin/env node
/**
 * scripts/gen-og.mjs — generates public/og.png (1200×630)
 * Dark background, nickname + handle in text. No external fonts needed.
 * Run once; commit the output.
 */
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../public');
const outFile = path.join(outDir, 'og.png');

const W = 1200;
const H = 630;
const BG = '#0a0c10';
const ACCENT = '#2dd4bf';
const MUTED = '#8b95a5';

// Build SVG
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${BG}"/>

  <!-- grid accent lines -->
  <line x1="60" y1="0" x2="60" y2="${H}" stroke="${ACCENT}" stroke-opacity="0.06" stroke-width="1"/>
  <line x1="0" y1="60" x2="${W}" y2="60" stroke="${ACCENT}" stroke-opacity="0.06" stroke-width="1"/>
  <line x1="${W-60}" y1="0" x2="${W-60}" y2="${H}" stroke="${ACCENT}" stroke-opacity="0.06" stroke-width="1"/>
  <line x1="0" y1="${H-60}" x2="${W}" y2="${H-60}" stroke="${ACCENT}" stroke-opacity="0.06" stroke-width="1"/>

  <!-- accent bar -->
  <rect x="80" y="${H/2 - 90}" width="4" height="180" fill="${ACCENT}" rx="2"/>

  <!-- nickname -->
  <text x="112" y="${H/2 - 20}"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="72" font-weight="700"
    fill="#e6e9ee" letter-spacing="-2">Samindra Samiya</text>

  <!-- handle -->
  <text x="114" y="${H/2 + 48}"
    font-family="'Courier New', Courier, monospace"
    font-size="32" font-weight="400"
    fill="${ACCENT}">a.k.a. kalialucard</text>

  <!-- tagline -->
  <text x="114" y="${H/2 + 102}"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="22" font-weight="400"
    fill="${MUTED}">Security researcher: web, API, network and smart contract security.</text>

  <!-- domain badge -->
  <rect x="${W - 340}" y="${H - 90}" width="260" height="36" rx="6"
    fill="${ACCENT}" fill-opacity="0.1" stroke="${ACCENT}" stroke-opacity="0.3" stroke-width="1"/>
  <text x="${W - 210}" y="${H - 67}"
    font-family="'Courier New', Courier, monospace"
    font-size="16" fill="${ACCENT}" text-anchor="middle">samindrasamiya.site</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(outFile);

console.log(`og.png written → ${outFile}`);
