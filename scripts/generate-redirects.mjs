// scripts/generate-redirects.mjs
// Cross-platform (Node.js). Generates HTML meta-refresh redirect stubs for old URLs.
// Run: node scripts/generate-redirects.mjs

import fs from 'node:fs';
import path from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function redirectHtml(to) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${to}">
  <link rel="canonical" href="${to}">
  <title>Redirecting…</title>
</head>
<body>
  <p>Redirecting to <a href="${to}">${to}</a>…</p>
  <script>window.location.replace(${JSON.stringify(to)});</script>
</body>
</html>
`;
}

function writeRedirect(fromPath, to) {
  const full = path.join(ROOT, 'public', fromPath);
  ensureDir(path.dirname(full));
  fs.writeFileSync(full, redirectHtml(to), 'utf8');
  console.log(`  ${fromPath} → ${to}`);
}

// ── Top-level page redirects ─────────────────────────────────────────────────
writeRedirect('about.html', '/about/');
writeRedirect('writeups.html', '/labs/');
writeRedirect('devhub.html', '/notes/');
writeRedirect('certificates.html', '/credentials/');
writeRedirect('contact.html', '/contact/');

// ── posts/*.html — scan src/content/labs and src/content/notes ───────────────

const labsDir = path.join(ROOT, 'src', 'content', 'labs');
const notesDir = path.join(ROOT, 'src', 'content', 'notes');

let count = 0;

if (fs.existsSync(labsDir)) {
  for (const file of fs.readdirSync(labsDir)) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    // Old URL /posts/<slug>.html → new /labs/tryhackme/<slug>/
    writeRedirect(`posts/${slug}.html`, `/labs/tryhackme/${slug}/`);
    count++;
  }
}

if (fs.existsSync(notesDir)) {
  for (const file of fs.readdirSync(notesDir)) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    // Both old URLs: tool.html and tool-command-list.html → /notes/tool/
    writeRedirect(`posts/${slug}.html`, `/notes/${slug}/`);
    writeRedirect(`posts/${slug}-command-list.html`, `/notes/${slug}/`);
    count++;
  }
}

// ── Projects pages (removed — redirect to home) ──────────────────────────────
writeRedirect('projects.html', '/');
const projectSlugs = [
  'personal-projects', 'web-development', 'mobile-apps', 'data-science',
  'machine-learning', 'devops', 'open-source',
];
for (const s of projectSlugs) {
  writeRedirect(`projects/${s}.html`, '/');
}

console.log(`\n✓ Generated ${count + 5 + projectSlugs.length + 1} redirect stubs`);
