import { defineCollection, z } from 'astro:content';

/** Shared base for all content types */
const base = z.object({
  title: z.string(),
  // date is optional — migrated content may not have one
  date: z.coerce.date().optional(),
  description: z.string().optional(),
  // tags may come as "tag1, tag2" string from old CMS — coerce to array
  // Also sanitize corrupted YAML sequences like ["[tag1", "tag2]"]
  tags: z.union([
    z.array(z.string()),
    z.string().transform(s => s.split(',').map(t => t.trim()).filter(Boolean)),
  ])
    .transform(arr => arr.map(t => t.replace(/^\[+/, '').replace(/\]+$/, '').trim()).filter(Boolean))
    .default([]),
  draft: z.boolean().default(false),
});

/**
 * research/ — bounty and pentest write-ups.
 * Only posts with disclosure_ok: true are built.
 */
const research = defineCollection({
  type: 'content',
  schema: base.extend({
    /** Must be explicitly set to true before a post is built. Default: false. */
    disclosure_ok: z.boolean().default(false),
    target_class: z.string().optional(), // e.g. "Web application", "API"
    vuln_class: z.string().optional(),   // e.g. "SQLi", "IDOR", "SSRF"
    severity: z.enum(['info', 'low', 'medium', 'high', 'critical']).optional(),
    status: z.enum(['draft', 'published', 'redacted']).default('draft'),
    platform: z.string().optional(),     // e.g. "HackenProof", "HackerOne", "VDP"
  }),
});

/**
 * labs/ — CTF / HTB / THM write-ups.
 * disclosure_ok defaults to false; shown regardless (CTF rooms are public).
 */
const LAB_SECTION_IDS = ['tryhackme', 'hackthebox', 'solidity', 'web3', 'personal', 'hobby'] as const;

const labs = defineCollection({
  type: 'content',
  schema: base.extend({
    disclosure_ok: z.boolean().default(false),
    /** Section this post belongs to — drives /labs/<section>/<slug>/ routing. */
    section: z.enum(LAB_SECTION_IDS).default('tryhackme'),
    // old CMS uses `category` field; normalise to `platform`
    platform: z.string().optional(),
    category: z.string().optional(),   // legacy alias
    difficulty: z.string().optional(), // e.g. "Easy", "Medium"
    slug: z.string().optional(),       // legacy field — ignored
    enrich: z.boolean().optional(),    // legacy field — ignored
    last_enriched: z.string().optional(), // legacy field — ignored
    image: z.string().optional(),
  }),
});

/**
 * notes/ — tool references and command cheatsheets.
 */
const notes = defineCollection({
  type: 'content',
  schema: base.extend({
    tool_url: z.string().url().optional(), // upstream tool homepage
    category: z.string().optional(),       // legacy field — kept for grouping
    enrich: z.boolean().optional(),        // legacy field — ignored
    last_enriched: z.string().optional(),  // legacy field — ignored
  }),
});

export const collections = { research, labs, notes };
