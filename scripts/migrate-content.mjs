// scripts/migrate-content.mjs
// Cross-platform (Node.js). Copies MD from the old CMS layout into Astro content collections.
// Run: node scripts/migrate-content.mjs

import fs from 'node:fs';
import path from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

// ── helpers ─────────────────────────────────────────────────────────────────

function slugify(name) {
  return name
    .replace(/\.md$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readFile(p) {
  return fs.readFileSync(p, 'utf8');
}

function writeFile(p, content) {
  fs.writeFileSync(p, content, 'utf8');
  console.log('  wrote', path.relative(ROOT, p));
}

/** Inject `disclosure_ok: false` into YAML frontmatter if not present. */
function ensureDisclosureOk(raw) {
  if (raw.startsWith('---')) {
    // Has frontmatter
    const end = raw.indexOf('---', 3);
    if (end === -1) return raw;
    const fm = raw.slice(3, end);
    if (/disclosure_ok\s*:/i.test(fm)) return raw; // already set
    return `---${fm}disclosure_ok: false\n${raw.slice(end)}`;
  }
  // No frontmatter — wrap the whole file
  return `---\ntitle: "${path.basename(raw.slice(0, 40)).replace(/"/g, '')}"\ndisclosure_ok: false\n---\n\n${raw}`;
}

// ── NEEDS-MY-REVIEW list (excluded from migration) ───────────────────────────
// Match by prefix/contains so variants like "borderlands-done-not-finish-walkin" are caught
const SKIP_LABS_PREFIXES = [
  'borderlands',
  'brooklyn-nine-nine',
  'cct2019',
  'crocc-crew',
  'cyborg',
  'daves-blog',
  "dave-s-blog",
  'enterprise',
  'envizon',
  'frosteau',
  'iron-corp',
  'misguided-ghosts',
  'opacity',
  'ra',
  'retro',
  'sea-surfer',
  'squid-game',
  'theseus',
  'thesus',
  'vulnnet-internal',
  'walkin',
  'year-of-the-rabbit',
];

/** Returns true if slug matches any skip prefix */
function shouldSkipLab(slug) {
  return SKIP_LABS_PREFIXES.some(p => slug === p || slug.startsWith(p + '-') || slug.startsWith(p));
}

// Duplicate capitalised files to skip
const SKIP_NOTES = new Set([
  'example-command',
  'dirbuster',    // keep lowercase version; skip capitalised duplicate
  'gobuster',     // same
]);

// ── Migrate labs (writeups/tryhackme → src/content/labs) ────────────────────

const labsSrc = path.join(ROOT, 'content', 'writeups', 'tryhackme');
const labsDst = path.join(ROOT, 'src', 'content', 'labs');
ensureDir(labsDst);

let labsCount = 0, labsSkipped = 0;

if (fs.existsSync(labsSrc)) {
  for (const file of fs.readdirSync(labsSrc)) {
    if (!file.endsWith('.md')) continue;
    const slug = slugify(file);

    if (shouldSkipLab(slug)) {
      console.log(`  skip (needs-review) ${file}`);
      labsSkipped++;
      continue;
    }

    const raw = readFile(path.join(labsSrc, file));
    const content = ensureDisclosureOk(raw);
    writeFile(path.join(labsDst, `${slug}.md`), content);
    labsCount++;
  }
} else {
  console.warn('  [warn] content/writeups/tryhackme not found, skipping labs');
}

// ── Migrate notes (commands → src/content/notes) ────────────────────────────
// For each tool, merge overview page and command-list page into one note.

const notesSrc = path.join(ROOT, 'content', 'commands');
const notesDst = path.join(ROOT, 'src', 'content', 'notes');
ensureDir(notesDst);

let notesCount = 0, notesSkipped = 0;

if (fs.existsSync(notesSrc)) {
  // Build a map: slug → { overview?, commands? }
  const noteMap = {};

  for (const file of fs.readdirSync(notesSrc)) {
    if (!file.endsWith('.md')) continue;
    const slug = slugify(file);

    // Skip examples and known capitalised duplicates
    if (SKIP_NOTES.has(slug)) {
      console.log(`  skip (excluded) ${file}`);
      notesSkipped++;
      continue;
    }

    // Also skip capitalised duplicates: if file starts with uppercase letter
    if (/^[A-Z]/.test(file) && fs.existsSync(path.join(notesSrc, file[0].toLowerCase() + file.slice(1)))) {
      console.log(`  skip (capitalised duplicate) ${file}`);
      notesSkipped++;
      continue;
    }

    if (slug.endsWith('-command-list')) {
      const baseSlug = slug.replace(/-command-list$/, '');
      noteMap[baseSlug] = noteMap[baseSlug] ?? {};
      noteMap[baseSlug].commands = readFile(path.join(notesSrc, file));
    } else {
      noteMap[slug] = noteMap[slug] ?? {};
      noteMap[slug].overview = readFile(path.join(notesSrc, file));
    }
  }

  // Write merged notes
  for (const [slug, parts] of Object.entries(noteMap)) {
    const { overview = '', commands = '' } = parts;

    // Extract frontmatter from overview if present
    let fm = `---\ntitle: "${slug}"\ntags: []\n---\n`;
    let overviewBody = overview;

    if (overview.startsWith('---')) {
      const end = overview.indexOf('---', 3);
      if (end !== -1) {
        fm = overview.slice(0, end + 3) + '\n';
        overviewBody = overview.slice(end + 3).trim();
      }
    }

    // Strip frontmatter from commands section, keep body
    let commandsBody = commands;
    if (commands.startsWith('---')) {
      const end = commands.indexOf('---', 3);
      if (end !== -1) {
        commandsBody = commands.slice(end + 3).trim();
      }
    }

    const merged = [
      fm,
      overviewBody,
      commandsBody ? `\n\n## Commands\n\n${commandsBody}` : '',
    ].join('\n').trim() + '\n';

    writeFile(path.join(notesDst, `${slug}.md`), merged);
    notesCount++;
  }
} else {
  console.warn('  [warn] content/commands not found, skipping notes');
}

console.log(`\n✓ Labs migrated: ${labsCount} (skipped ${labsSkipped})`);
console.log(`✓ Notes migrated: ${notesCount} (skipped ${notesSkipped})`);
