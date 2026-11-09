# Site Audit: kalialucard.github.io → samindrasamiya.site

> Branch: `redesign/astro-v2` · Audited: 2026-11-09 · No edits made yet.

---

## 1. Stack & Build Pipeline

### Current Stack
| Layer | Technology |
|---|---|
| **Markup** | Plain HTML files at repo root (index.html, about.html, etc.) |
| **Styling** | Tailwind CSS loaded via **CDN** (`cdn.tailwindcss.com`) — not compiled |
| **Fonts** | Inter + JetBrains Mono via **Google Fonts CDN** — not self-hosted |
| **Icons** | Font Awesome 6.4.0 via **cdnjs CDN** |
| **Custom CSS** | `css/custom.css` (672 lines) |
| **JS** | `js/main.js` (264 lines) + inline scripts per-page |
| **Build Engine** | Custom Python CMS: `manage.py` |
| **Deployment** | GitHub Actions → pushes built files back to `main` |
| **Hosting** | GitHub Pages, custom domain `samindrasamiya.site` |

### No Build Step for the HTML Shell
The page-shell HTML files (`index.html`, `about.html`, `writeups.html`, etc.) are **handwritten and committed directly to `main`**. They are not generated — they contain hardcoded nav, hardcoded card grids, and inline styles/config duplicated across every page.

### Python CMS (`manage.py`) — What It Actually Does
1. **Input**: Scans `content/**/*.md` recursively (Obsidian vault format, YAML front matter + Markdown body).
2. **AI Enrichment**: If `enrich: true` in front matter → calls Google Gemini API (key stored in GitHub Secret `GOOGLE_API_KEY`) to expand the content. Strips artefacts with `re.sub`.
3. **Output**: Generates `posts/*.html` for each source `.md` file. Runs `shutil.rmtree("posts/")` at the start of each build — `posts/` is **build output, not source**.
4. **Card injection**: Does NOT update `writeups.html` or `devhub.html` automatically — those contain **hardcoded card grids** that require manual updates or a separate injection step.
5. **Bot commit**: After build, the GitHub Action bot commits and pushes built files back to `main` with the message `auto: deploy intelligence update [skip ci]`.

### How `/posts/*.html` Are Generated
- Each `content/commands/*.md` → `posts/{slug}-command-list.html`
- Each `content/writeups/**/*.md` → `posts/{slug}.html`
- Posts use an inline HTML template defined inside `manage.py` with `PAGE_TEMPLATE_PATH`.
- Styles are **embedded** in every generated post via a large `<style>` block (not shared CSS).

### How `writeups.html` Loads Content
- **Not server-side rendered.** `writeups.html` contains a hardcoded grid of `<a>` cards.
- Clicking a card fires a JS `fetch()` for the linked `posts/*.html` URL and renders its `.markdown-content` div inside a right-side reader panel.
- Filtering is pure JS (`data-category`, `data-tags` attributes).
- Search is plain JS string matching on card title + tags.
- **Problem**: the card grid is out of sync with actual `posts/` content — cards must be added manually.

### Deployment Trigger
`.github/workflows/update-site.yml` triggers on push to `main` for changes in `content/**` or `manage.py`. It runs `python manage.py build`, then commits the output. No separate Pages deploy step — the branch IS the served content.

---

## 2. What Needs to Change for the Migration

### Why Migrate to Astro
| Issue | Current | Astro Target |
|---|---|---|
| Tailwind | CDN (no purge, slow, CSP-hostile) | Compiled, purged, self-hosted |
| Fonts | Google Fonts CDN (privacy, perf) | Self-hosted via `@fontsource` |
| Font Awesome | CDN | Replaced by inline SVGs (no CDN) |
| Pages | 10+ hand-duplicate HTML shells | Single layouts, components |
| Search | Primitive JS string match | Pagefind (index-based, offline) |
| Code blocks | No syntax highlighting | Shiki (server-side, no JS) |
| RSS | None | `@astrojs/rss` |
| Sitemap | None | `@astrojs/sitemap` |
| OG images | None | Static OG per page |
| `disclosure_ok` gate | No concept | Build-time filter on content collections |
| Cross-platform build | Python-only scripts | Node.js scripts + Astro |
| Broken link CI | None | `lychee` link checker in Actions |
| Dependabot | None | Added for npm + GH Actions |

---

## 3. Content Honesty Issues Found

### Fake / AI-Generated Content (pre-approved for removal)
- **`content/projects/`** (all 15 files) — AI-hallucinated "projects" with `github: "#"`, `report: "#"`, fake client names. None of these represent real work.
- **`projects.html`** and **`projects/*.html`** (8 files) — renders the above fake projects.
- Fake project posts in `posts/`: `web-application-security-audit`, `api-security-gateway-analysis`, `advanced-memory-forensics-tool`, `digital-forensics-investigation`, `enterprise-network-hardening`, `fintech-red-team-engagement`, `isms-framework-alignment`, `iso-27001-compliance-roadmap`, `neural-network-visualizer`, `offensive-security-assessment`, `ransomware-defense-playbook`, `secure-cloud-ci-cd-pipeline`, `serverless-security-framework`, `soc-threat-monitoring`, `zero-trust-network-implementation`.

### Fake UI Elements (to remove)
| Element | Location | Issue |
|---|---|---|
| `Access_Level`, `Encryption`, `Signal_Strength`, `System_Status` panel | `index.html` L353+, `about.html` L278+ | Fabricated metrics |
| `"Technical Intelligence Labs"` branding | Post `<title>` tags, CI bot email | Never disclosed to be a real org |
| `"Powered by kalialucard"` | Footer of index + about | Meaningless noise |
| `href="#"` links | Throughout nav, project cards | Dead links |
| New York coordinates | `about.html` (confirmed not present in final HTML but was in earlier versions; checked clean) | N/A |
| Empty Cisco credential section | `certificates.html` L177–223 | 9 commented-out Credly embed slots, no actual badges |
| Empty ISC2 credential section | `certificates.html` L224+ | Same — placeholder slots |

### Duplicate Tool Files
Two near-identical `.md` files exist for some tools:
- `content/commands/dirbuster.md` AND `content/commands/Dirbuster.md`
- `content/commands/gobuster.md` AND `content/commands/Gobuster.md`

Lower-cased version is the canonical one; capitalised copies are duplicates.

### Bot Commit Pattern
The CI bot uses `bot@technicalintelligence.labs` as the git email. This will be replaced by the standard GitHub Actions `github-actions[bot]` identity in the new workflow.

---

## 4. URL Structure (Current → New)

| Current URL | New URL | Method |
|---|---|---|
| `/` | `/` | Rewritten |
| `/about.html` | `/about/` | Rewritten + redirect stub |
| `/writeups.html` | `/labs/` | Rewritten + redirect stub |
| `/devhub.html` | `/notes/` | Rewritten + redirect stub |
| `/certificates.html` | `/about/#certs` | Redirect stub |
| `/contact.html` | `/contact/` | Rewritten + redirect stub |
| `/blogs.html` | removed (no content) | 404 |
| `/documentation.html` | removed | 404 |
| `/forensics.html` | removed | 404 |
| `/success.html` | removed | 404 |
| `/projects.html` | 404 (pre-approved removal) | 404 |
| `/projects/*.html` | 404 (pre-approved removal) | 404 |
| `/posts/{writeup}.html` | `/labs/{writeup}/` | Redirect stub in `public/posts/` |
| `/posts/{tool}-command-list.html` | `/notes/{tool}/` | Redirect stub |
| `/posts/{tool}.html` | `/notes/{tool}/` | Redirect stub (merged with above) |

---

## 5. Missing Infrastructure
- No `robots.txt`
- No `sitemap.xml`
- No RSS feed
- No `/.well-known/security.txt`
- No `404.html` custom page
- No OG/Twitter meta on most pages
- No `viewport` scaling meta on some posts
- No `lang` attribute on some posts
- Tailwind CDN emits a console warning in production

---

## 6. Performance & Accessibility Notes
- Tailwind CDN: downloads ~350 KB of CSS, generates all utilities client-side — not suitable for production.
- Font Awesome CDN: ~75 KB, renders icons as CSS pseudo-elements (slow first paint, invisible on FOIC).
- No `prefers-reduced-motion` guard on any animation.
- Focus states: `outline: none` appears in `custom.css` — WCAG AA violation.
- Colour contrast: some muted text (`#64748b` on `#0f172a`) is below 4.5:1 for small text.
- No `alt` text on most images.
- Code blocks have no copy button in generated posts.
- No skip-to-content link.
