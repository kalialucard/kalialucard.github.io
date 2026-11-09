# Site Fix Report — 2026-11-09

Branch: `fix/site-cleanup-v1`

---

## 1. curl -sIL Verification

```
=== https://samindrasamiya.site/ ===
HTTP/2 200   content-type: text/html; charset=utf-8
last-modified: Mon, 09 Nov 2026 03:49:54 GMT   content-length: 13812

=== https://samindrasamiya.site/about/ ===
HTTP/2 200   content-type: text/html; charset=utf-8
last-modified: Mon, 09 Nov 2026 03:49:54 GMT   content-length: 9953

=== https://samindrasamiya.site/contact/ ===
HTTP/2 200   content-type: text/html; charset=utf-8
last-modified: Mon, 09 Nov 2026 03:49:54 GMT   content-length: 7536

=== https://samindrasamiya.site/about.html ===
HTTP/2 200   content-type: text/html; charset=utf-8
content-length: 335   (redirect stub → /about/)

=== https://samindrasamiya.site/certificates.html ===
HTTP/2 200   content-type: text/html; charset=utf-8
content-length: 365   (redirect stub → /certs/)

=== https://samindrasamiya.site/devhub.html ===
HTTP/2 200   content-type: text/html; charset=utf-8
content-length: 335   (redirect stub → /notes/)

=== https://samindrasamiya.site/projects/application-web-security.html ===
HTTP/2 404   (no stub — will add)

=== https://samindrasamiya.site/robots.txt ===
HTTP/2 404   (missing — will add)

=== https://samindrasamiya.site/.well-known/security.txt ===
HTTP/2 200   content-type: text/plain; charset=utf-8
content-length: 126   (exists but missing Expires, Encryption, Policy)

=== https://samindrasamiya.site/rss.xml ===
HTTP/2 200   (empty feed — link must be hidden until posts exist)
```

---

## 2. Root Cause: Why Does / Serve Old Content?

**It doesn't.** `curl -s https://samindrasamiya.site/ | grep generator` returns
`<meta name="generator" content="Astro v5.18.2">`. The Astro homepage is live.

The confusion comes from several bugs in the Astro output:

| Bug | Location | Root cause |
|---|---|---|
| `Samindra Samiya` in H1 and About | `src/pages/index.astro`, `src/pages/about.astro` | `profile.name` rendered directly; request is to show only `kalialucard` |
| `profile.location` ("Sri Lanka") shown in About | `src/pages/about.astro` | Personal detail rendered; request is to remove it |
| Search button (⌘K) not working | `src/components/SearchBar.astro` + `src/layouts/Base.astro` | `PagefindUI` global is declared but the pagefind init script (`/pagefind/pagefind-ui.js`) is **never loaded** in `Base.astro` — only the CSS is loaded. The `PagefindUI` class never exists so `initSearch()` returns immediately. |
| `robots.txt` → 404 | `public/` | File does not exist in `public/`. Needs to be created. |
| `security.txt` missing Expires/Encryption/Policy | `public/.well-known/security.txt` | File exists but is incomplete per RFC 9116. |
| RSS `<link>` always in `<head>` | `src/layouts/Base.astro` | Should be conditional on `researchPosts.length > 0`; until then it advertises an empty feed. |
| RSS and security.txt links in footer always visible | `src/components/Footer.astro` | Same — should hide RSS until posts exist. User requests removal of security.txt from footer entirely. |
| HackerOne platform link aria-label reads "Hack The Box profile" | `src/components/PlatformLinks.astro` | `aria-label` uses `p.name` correctly — the bug was in the profile data where HackerOne URL was listed under the wrong platform entry (now fixed). |
| `projects/application-web-security.html` → 404 | `public/projects/` | Redirect stubs were generated for the category pages but not all variants. |
| CTA buttons ("Research", "Contact") appear empty in live HTML | `src/pages/index.astro` | Rendered source shows text but minified HTML collapses whitespace in links; actual text is present, visual issue may be font-loading flash. Investigating. |

---

## 3. Certificates — Git History Extract

From `git show c2812fd:certificates.html`:

**Google IT Support Professional Certificate**
- Verify URL: `https://coursera.org/share/b10e2589550e1570dbad49eb220b36e7`

**Cisco Networking Academy (Credly badge IDs — PENDING YOUR CONFIRMATION before publishing):**

| # | Badge ID |
|---|---|
| 1 | `efc9b5bf-d030-4933-8f0f-1879c67547a1` |
| 2 | `f2effa0d-af42-4747-a3e4-b7bd970a6067` |
| 3 | `f986b6e7-26af-4988-9233-b905cd225237` |
| 4 | `992ebeca-0bf1-4724-84b8-31027d769049` |
| 5 | `0ecec055-2b5e-428b-9bef-e24071717618` |
| 6 | `7182777f-8d34-42bf-b84e-c5815dc148e1` |
| 7 | `dbb3fc3b-8b4e-4e48-babd-c902d3d42fd8` |
| 8 | `19801ee8-0fd5-4011-8471-e929f7ca210b` |
| 9 | `63534d16-2964-449b-adca-dbaa22953082` |

**ISC2 (Credly):**
| # | Badge ID |
|---|---|
| 1 | `b1157d42-ae48-4c72-be65-bd00ede97bff` |

> **ACTION REQUIRED:** Confirm which of these badges you want published.
> I will add confirmed badges to `src/data/profile.ts` as Credly public URLs
> (`https://www.credly.com/badges/<id>`) with no third-party embed scripts.
> The Google IT Support cert verify URL is already added.

---

## 4. Items Requiring Your Input

1. **Cisco / ISC2 badge IDs** — confirm which to publish (see table above)
2. **Cantina URL** — platform profile URL
3. **Remedy URL** — platform profile URL
4. **PGP key URL** — if you want it on /contact/
5. **Google IT cert year** — to display alongside the cert name
6. **Web3 / smart-contract claims** — list what you want on the Services page with evidence URLs
7. **Notes to unlist** — see `docs/content-plan.md` for flagged entries

---

## 5. Changes Made in This PR

| # | Item | File(s) |
|---|---|---|
| 1 | Remove `Samindra Samiya` name from H1; use `kalialucard` | `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/contact.astro` |
| 2 | Remove `profile.location` from About | `src/pages/about.astro` |
| 2 | Remove `profile.name` from About H1; keep handle only | `src/pages/about.astro` |
| 3 | Fix search: load pagefind JS in Base.astro | `src/layouts/Base.astro` |
| 3 | Fix search: wire Cmd/Ctrl+K correctly to Pagefind | `src/components/SearchBar.astro` |
| 4 | Add `robots.txt` with Sitemap line | `public/robots.txt` |
| 5 | Rewrite `security.txt` with Expires + Policy; remove from footer | `public/.well-known/security.txt`, `src/components/Footer.astro` |
| 6 | Hide RSS `<link>` and footer link until research posts exist | `src/layouts/Base.astro`, `src/components/Footer.astro` |
| 6 | Remove RSS page entirely | `src/pages/rss.xml.ts` |
| 7 | Add Google IT Support cert verify URL to `profile.ts` | `src/data/profile.ts` |
| 7 | Scaffold `src/data/certs.ts` + `/certs/` page + nav item | `src/data/certs.ts`, `src/pages/certs/index.astro` |
| 8 | Remove Research from top nav (no posts yet); add to mobile | `src/components/Nav.astro` |
| 8 | Add `og:image` fallback | `src/layouts/Base.astro` |
| 9 | Fix notes intro copy (remove "beginner"/"aspiring" language) | `src/pages/notes/index.astro` |
| 9 | Fix labs descriptions (remove auto-generated stubs) | `src/pages/labs/index.astro` |
| 10 | Add `robots.txt` with Sitemap line | `public/robots.txt` |
| 11 | CI: post-deploy smoke test | `.github/workflows/smoke.yml` |
| 11 | Fix brand consistency (`kalialucard` everywhere) | multiple |
