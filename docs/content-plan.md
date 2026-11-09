# Content Plan: kalialucard.github.io → samindrasamiya.site

> Status key: **KEEP** · **MOVE** · **REMOVE** · **NEEDS-MY-REVIEW**
> Pre-approved removals are marked `(pre-approved)`.
> Items marked `NEEDS-MY-REVIEW` will be **excluded from the build** until you approve them.

---

## A. Page Shells (Root HTML)

| File | Status | Reason / Notes |
|---|---|---|
| `index.html` | **MOVE** | Rewritten as `src/pages/index.astro`. Hero, platform links, latest posts, methodology. |
| `about.html` | **MOVE** | Rewritten as `src/pages/about.astro`. Profile data sourced from `src/data/profile.ts`. |
| `contact.html` | **MOVE** | Rewritten as `src/pages/contact.astro`. Mailto only; no fake form. |
| `writeups.html` | **MOVE** | Becomes `/labs/` listing page. |
| `devhub.html` | **MOVE** | Becomes `/notes/` listing page (tools + commands merged). |
| `certificates.html` | **MOVE** | Merged into `/about/#certs`. Redirect stub at `/certificates.html`. Only Google IT Support cert rendered. |
| `blogs.html` | **REMOVE** | No real blog content; `testing-cms.md` removed. The one real article moves to Research. |
| `projects.html` | **REMOVE** `(pre-approved)` | All content is AI-hallucinated with `github:"#"` links. |
| `documentation.html` | **REMOVE** | Placeholder; no real content. |
| `forensics.html` | **REMOVE** | Placeholder; no real content. |
| `success.html` | **REMOVE** | Old form submission page; contact form is removed. |

---

## B. Projects Section (All Pre-Approved for Removal)

| File | Status |
|---|---|
| `projects.html` | **REMOVE** `(pre-approved)` |
| `projects/application-web-security.html` | **REMOVE** `(pre-approved)` |
| `projects/cloud-secure-development-operations.html` | **REMOVE** `(pre-approved)` |
| `projects/cybersecurity-investigation-analysis.html` | **REMOVE** `(pre-approved)` |
| `projects/ethical-hacking-vulnerability-testing.html` | **REMOVE** `(pre-approved)` |
| `projects/network-system-protection.html` | **REMOVE** `(pre-approved)` |
| `projects/security-policies-risk-management.html` | **REMOVE** `(pre-approved)` |
| `projects/threat-monitoring-incident-response.html` | **REMOVE** `(pre-approved)` |

---

## C. Content Source: Fake / AI-Generated Projects

> All `content/projects/` files are AI-hallucinated portfolio items with `github: "#"` and `report: "#"` placeholder links. All are pre-approved for removal.

| File | Status |
|---|---|
| `content/projects/application-web-security/api-security-gateway.md` | **REMOVE** `(pre-approved)` |
| `content/projects/application-web-security/web-audit.md` | **REMOVE** `(pre-approved)` |
| `content/projects/cloud-secure-development-operations/cloud-pipeline.md` | **REMOVE** `(pre-approved)` |
| `content/projects/cloud-secure-development-operations/serverless-security.md` | **REMOVE** `(pre-approved)` |
| `content/projects/cybersecurity-investigation-analysis/forensics-investigation.md` | **REMOVE** `(pre-approved)` |
| `content/projects/cybersecurity-investigation-analysis/memory-forensics-tool.md` | **REMOVE** `(pre-approved)` |
| `content/projects/ethical-hacking-vulnerability-testing/offensive-assessment.md` | **REMOVE** `(pre-approved)` |
| `content/projects/ethical-hacking-vulnerability-testing/red-team-financial.md` | **REMOVE** `(pre-approved)` |
| `content/projects/example-project.md` | **REMOVE** `(pre-approved)` |
| `content/projects/network-system-protection/network-hardening.md` | **REMOVE** `(pre-approved)` |
| `content/projects/network-system-protection/zero-trust-impl.md` | **REMOVE** `(pre-approved)` |
| `content/projects/security-policies-risk-management/iso27001-compliance.md` | **REMOVE** `(pre-approved)` |
| `content/projects/security-policies-risk-management/risk-management.md` | **REMOVE** `(pre-approved)` |
| `content/projects/threat-monitoring-incident-response/ransomware-playbook.md` | **REMOVE** `(pre-approved)` |
| `content/projects/threat-monitoring-incident-response/soc-monitoring.md` | **REMOVE** `(pre-approved)` |

---

## D. Example / Test Posts (Pre-Approved for Removal)

| Source MD | Generated Post | Status |
|---|---|---|
| `content/blogs/testing-cms.md` | `posts/testing-the-new-cms.html` | **REMOVE** `(pre-approved)` — CMS test |
| `content/cheatsheet/example-sheet.md` | `posts/example-cheatsheet-regex.html` | **REMOVE** `(pre-approved)` — Example placeholder |
| `content/docs/example-doc.md` | `posts/example-doc-api-v1.html` | **REMOVE** `(pre-approved)` — Example placeholder |
| `content/commands/example-command.md` | `posts/example-command-tar.html` | **REMOVE** `(pre-approved)` — Example placeholder |
| *(no source, build artefact)* | `posts/example-test-login-flow.html` | **REMOVE** `(pre-approved)` — Example placeholder |
| `content/writeups/test-log.md` | `posts/test-raw-log.html` | **REMOVE** `(pre-approved)` — Test log file |

---

## E. AI-Generated Fake Project Posts (Pre-Approved for Removal)

These posts were generated from the fake `content/projects/` markdown files.

| Post | Status |
|---|---|
| `posts/web-application-security-audit.html` | **REMOVE** `(pre-approved)` |
| `posts/api-security-gateway-analysis.html` | **REMOVE** `(pre-approved)` |
| `posts/advanced-memory-forensics-tool.html` | **REMOVE** `(pre-approved)` |
| `posts/digital-forensics-investigation.html` | **REMOVE** `(pre-approved)` |
| `posts/enterprise-network-hardening.html` | **REMOVE** `(pre-approved)` |
| `posts/fintech-red-team-engagement.html` | **REMOVE** `(pre-approved)` |
| `posts/isms-framework-alignment.html` | **REMOVE** `(pre-approved)` |
| `posts/iso-27001-compliance-roadmap.html` | **REMOVE** `(pre-approved)` |
| `posts/neural-network-visualizer.html` | **REMOVE** `(pre-approved)` |
| `posts/offensive-security-assessment.html` | **REMOVE** `(pre-approved)` |
| `posts/ransomware-defense-playbook.html` | **REMOVE** `(pre-approved)` |
| `posts/secure-cloud-ci-cd-pipeline.html` | **REMOVE** `(pre-approved)` |
| `posts/serverless-security-framework.html` | **REMOVE** `(pre-approved)` |
| `posts/soc-threat-monitoring.html` | **REMOVE** `(pre-approved)` |
| `posts/zero-trust-network-implementation.html` | **REMOVE** `(pre-approved)` |

---

## F. TryHackMe Writeups → `/labs/`

> All have `disclosure_ok: false` added by default. Descriptions are generic AI stubs ("Detailed technical walkthrough and security analysis…") — the actual writeup bodies contain real work. Flagged stubs are marked NEEDS-MY-REVIEW.

| Source MD | New URL | Status | Notes |
|---|---|---|---|
| `content/writeups/tryhackme/0day.md` | `/labs/0day/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/agent-sudo.md` | `/labs/agent-sudo/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/anonforce.md` | `/labs/anonforce/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/anonymous.md` | `/labs/anonymous/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/archangel.md` | `/labs/archangel/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/b3dr0ck.md` | `/labs/b3dr0ck/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/basic-pentesting.md` | `/labs/basic-pentesting/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/Borderlands (done  not finish walkin).md` | — | **NEEDS-MY-REVIEW** | Filename says "not finish walkin" — incomplete writeup. Excluded from build until approved. |
| `content/writeups/tryhackme/Brooklyn Nine Nine.md` | `/labs/brooklyn-nine-nine/` | **NEEDS-MY-REVIEW** | No frontmatter title/desc found — verify content. |
| `content/writeups/tryhackme/c4ptur3-th3-fl4g.md` | `/labs/c4ptur3-th3-fl4g/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/CCT2019.md` | `/labs/cct2019/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/Cherry Blossom.md` | `/labs/cherry-blossom/` | **KEEP** | Has custom description |
| `content/writeups/tryhackme/CherryBlossom.md` | — | **NEEDS-MY-REVIEW** | Duplicate of Cherry Blossom? Confirm which is canonical. |
| `content/writeups/tryhackme/crack-the-hash.md` | `/labs/crack-the-hash/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/Crocc Crew.md` | `/labs/crocc-crew/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/cyberheroes.md` | `/labs/cyberheroes/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/cyberlens.md` | `/labs/cyberlens/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/Cyborg.md` | `/labs/cyborg/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/Dave's Blog.md` | `/labs/daves-blog/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/dig-dug.md` | `/labs/dig-dug/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/Enterprise.md` | `/labs/enterprise/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/envizon.md` | `/labs/envizon/` | **NEEDS-MY-REVIEW** | No frontmatter description — check if stub. |
| `content/writeups/tryhackme/Frosteau Busy with Vim.md` | `/labs/frosteau-busy-with-vim/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/ghostcat.md` | `/labs/ghostcat/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/hack-smarter-security.md` | `/labs/hack-smarter-security/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/ignite.md` | `/labs/ignite/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/Iron Corp.md` | `/labs/iron-corp/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/jax-sucks-alot.md` | `/labs/jax-sucks-alot/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/kiba.md` | `/labs/kiba/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/library.md` | `/labs/library/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/mindgames.md` | `/labs/mindgames/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/Misguided Ghosts.md` | `/labs/misguided-ghosts/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/mr-robot-ctf.md` | `/labs/mr-robot-ctf/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/mustacchio.md` | `/labs/mustacchio/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/Opacity.md` | `/labs/opacity/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/plotted-tms.md` | `/labs/plotted-tms/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/poster.md` | `/labs/poster/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/rabit-hole.md` | `/labs/rabit-hole/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/Ra.md` | `/labs/ra/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/Retro.md` | `/labs/retro/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/Sea Surfer.md` | `/labs/sea-surfer/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/simple-ctf.md` | `/labs/simple-ctf/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/spring.md` | `/labs/spring/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/Squid Game.md` | `/labs/squid-game/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/startup.md` | `/labs/startup/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/team.md` | `/labs/team/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/techsupp0rt1.md` | `/labs/techsupp0rt1/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/thesus.md` | `/labs/thesus/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/u.a.-high-school.md` | `/labs/ua-high-school/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/ultratech.md` | `/labs/ultratech/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/unstable-twin.md` | `/labs/unstable-twin/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/valley.md` | `/labs/valley/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/VulnNet-Internal.md` | `/labs/vulnnet-internal/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |
| `content/writeups/tryhackme/vulnnet---roasted.md` | `/labs/vulnnet-roasted/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/walkin.md` | — | **NEEDS-MY-REVIEW** | Description says "Walkin machine" — unclear if complete. |
| `content/writeups/tryhackme/wekor.md` | `/labs/wekor/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/whiterose.md` | `/labs/whiterose/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/wordpress---cve-2021-29447.md` | `/labs/wordpress-cve-2021-29447/` | **KEEP** | Has body content |
| `content/writeups/tryhackme/Year of the Rabbit.md` | `/labs/year-of-the-rabbit/` | **NEEDS-MY-REVIEW** | No frontmatter found — verify content. |

---

## G. Research Section → `/research/`

> Empty for now. Build will show a clean empty-state. Template and schema are live.

| Item | Status | Notes |
|---|---|---|
| `content/blogs/example-dev-log.md` ("The Death of Traditional Passwords") | **NEEDS-MY-REVIEW** | Real educational article, not a vuln writeup. Good candidate for `/research/` once you add `disclosure_ok: true`. Currently excluded from build. |

---

## H. Notes (Tools + Commands) → `/notes/`

> Both the tool overview page (`posts/nmap.html`) and the command-list page (`posts/nmap-command-list.html`) are merged into a single `/notes/nmap/` page. Duplicate capitalised files removed.

| Source MD | New URL | Status | Notes |
|---|---|---|---|
| `content/commands/amass.md` | `/notes/amass/` | **KEEP** | |
| `content/commands/assetfinder.md` | `/notes/assetfinder/` | **KEEP** | |
| `content/commands/bloodhound.md` | `/notes/bloodhound/` | **KEEP** | |
| `content/commands/chaos.md` | `/notes/chaos/` | **KEEP** | |
| `content/commands/chisel.md` | `/notes/chisel/` | **KEEP** | |
| `content/commands/commix.md` | `/notes/commix/` | **KEEP** | |
| `content/commands/dirbuster.md` | `/notes/dirbuster/` | **KEEP** | Canonical lowercase copy |
| `content/commands/Dirbuster.md` | *(merged)* | **REMOVE** | Duplicate — capitalised copy |
| `content/commands/dirsearch.md` | `/notes/dirsearch/` | **KEEP** | |
| `content/commands/docker.md` | `/notes/docker/` | **KEEP** | |
| `content/commands/evil-winrm.md` | `/notes/evil-winrm/` | **KEEP** | |
| `content/commands/example-command.md` | — | **REMOVE** `(pre-approved)` | Placeholder |
| `content/commands/feroxbuster.md` | `/notes/feroxbuster/` | **KEEP** | |
| `content/commands/ffuf.md` | `/notes/ffuf/` | **KEEP** | |
| `content/commands/finalrecon.md` | `/notes/finalrecon/` | **KEEP** | |
| `content/commands/findomain.md` | `/notes/findomain/` | **KEEP** | |
| `content/commands/gh.md` | `/notes/gh/` | **KEEP** | |
| `content/commands/gobuster.md` | `/notes/gobuster/` | **KEEP** | Canonical lowercase copy |
| `content/commands/Gobuster.md` | *(merged)* | **REMOVE** | Duplicate — capitalised copy |
| `content/commands/gospider.md` | `/notes/gospider/` | **KEEP** | |
| `content/commands/gowitness.md` | `/notes/gowitness/` | **KEEP** | |
| `content/commands/hakrawler.md` | `/notes/hakrawler/` | **KEEP** | |
| `content/commands/hashcat.md` | `/notes/hashcat/` | **KEEP** | |
| `content/commands/hydra.md` | `/notes/hydra/` | **KEEP** | |
| `content/commands/impacket.md` | `/notes/impacket/` | **KEEP** | |
| `content/commands/john.md` | `/notes/john/` | **KEEP** | |
| `content/commands/katana.md` | `/notes/katana/` | **KEEP** | |
| `content/commands/knockpy.md` | `/notes/knockpy/` | **KEEP** | |
| `content/commands/kubernetes.md` | `/notes/kubernetes/` | **KEEP** | |
| `content/commands/linpeas.md` | `/notes/linpeas/` | **KEEP** | |
| `content/commands/metasploit.md` | `/notes/metasploit/` | **KEEP** | |
| `content/commands/msfvenom.md` | `/notes/msfvenom/` | **KEEP** | |
| `content/commands/netcat.md` | `/notes/netcat/` | **KEEP** | |
| `content/commands/netexec.md` | `/notes/netexec/` | **KEEP** | |
| `content/commands/nikto.md` | `/notes/nikto/` | **KEEP** | |
| `content/commands/nmap.md` | `/notes/nmap/` | **KEEP** | |
| `content/commands/nuclei.md` | `/notes/nuclei/` | **KEEP** | |
| `content/commands/proxychains.md` | `/notes/proxychains/` | **KEEP** | |
| `content/commands/python-venv.md` | `/notes/python-venv/` | **KEEP** | |
| `content/commands/recon-ng.md` | `/notes/recon-ng/` | **KEEP** | |
| `content/commands/responder.md` | `/notes/responder/` | **KEEP** | |
| `content/commands/searchsploit.md` | `/notes/searchsploit/` | **KEEP** | |
| `content/commands/sn1per.md` | `/notes/sn1per/` | **KEEP** | |
| `content/commands/sniper.md` | `/notes/sniper/` | **NEEDS-MY-REVIEW** | Possibly duplicate of sn1per — verify |
| `content/commands/socat.md` | `/notes/socat/` | **KEEP** | |
| `content/commands/spiderfoot.md` | `/notes/spiderfoot/` | **KEEP** | |
| `content/commands/sqlmap.md` | `/notes/sqlmap/` | **KEEP** | |
| `content/commands/sshuttle.md` | `/notes/sshuttle/` | **KEEP** | |
| `content/commands/sublist3r.md` | `/notes/sublist3r/` | **KEEP** | |
| `content/commands/tcpdump.md` | `/notes/tcpdump/` | **KEEP** | |
| `content/commands/tmux.md` | `/notes/tmux/` | **KEEP** | |
| `content/commands/wapiti.md` | `/notes/wapiti/` | **KEEP** | |
| `content/commands/waybackurls.md` | `/notes/waybackurls/` | **KEEP** | |
| `content/commands/wazuh.md` | `/notes/wazuh/` | **KEEP** | |
| `content/commands/wfuzz.md` | `/notes/wfuzz/` | **KEEP** | |
| `content/commands/winpeas.md` | `/notes/winpeas/` | **KEEP** | |
| `content/commands/wireshark.md` | `/notes/wireshark/` | **KEEP** | |
| `content/commands/WordPress Command List.md` | `/notes/wordpress/` | **KEEP** | Rename to `wordpress.md` |
| `content/commands/wpscan.md` | `/notes/wpscan/` | **KEEP** | |

---

## I. Summary Counts

| Category | Count |
|---|---|
| **REMOVE** (pre-approved) | 36 source files + 24 generated posts |
| **NEEDS-MY-REVIEW** (excluded from build) | 20 items |
| **KEEP → `/labs/`** | 32 THM writeups |
| **KEEP → `/notes/`** | 56 tool/command files |
| **KEEP → `/research/`** | 0 (template ready, empty state shown) |
| **New pages** | index, research, labs, notes, about, contact, 404 |

---

## J. Items Awaiting Your Input

1. **"What I test" list** — Brief says "confirm list with me". Proposed: Web applications, APIs, Network & infrastructure. Reply to confirm or amend.
2. **PGP key** — Contact page will show `kalialucard@proton.me`. Add your PGP public key if you want it displayed.
3. **Platform URLs** — Cantina and Remedy URLs not found publicly. Add to `src/data/profile.ts` when ready.
4. **Borderlands writeup** — Confirm delete or finish and re-approve.
5. **walkin.md** — Confirm keep or delete.
6. **The Death of Traditional Passwords** — Confirm: move to `/research/` with `disclosure_ok: true`, or discard?
7. **CherryBlossom.md vs Cherry Blossom.md** — Confirm which is canonical.
8. **sn1per.md vs sniper.md** — Are these the same tool? Confirm canonical.
9. **20 writeups with no frontmatter** (Borderlands, Brooklyn Nine Nine, CCT2019, Crocc Crew, Cyborg, Dave's Blog, Enterprise, Envizon, Iron Corp, Misguided Ghosts, Opacity, Ra, Retro, Sea Surfer, Squid Game, Thesus, VulnNet-Internal, Walkin, Year of the Rabbit) — Review and add frontmatter, or they remain excluded.
10. **Certificates** — Credly link or image for Google IT Support cert, if you have it.

---

## Notes — Flagged for Review (added 2026-11-09)

The following notes have issues. They are **not deleted** — they appear in the site but are flagged here for your attention. Tell me which ones to unlist (I will add `listed: false` to the frontmatter) or rewrite.

| File | Issue | Recommendation |
|---|---|---|
| `wordpress.md` | Mixed nmap+wpscan walkthrough with tutorial tone; originally labelled "beginner" | Rewrite as a clean reference or unlist |
| `sn1per.md` + `sniper.md` | Two files for the same tool — different capitalisation | Keep one, unlist the other; confirm which |
| `wpscan.md` | Title was "Wpscan Command List" (now fixed to "WPScan"); description was boilerplate | Fixed — confirm the new description is acceptable |
| Any note with description `"Top 10 essential commands and a master guide…"` | AI-generated boilerplate description | Will replace with one-line tool description on your request |
| Notes with tag `beginner` only | Tag stripped from filter chips; tag remains in frontmatter | Let me know if you want it fully removed from source files |


---

## K. Research Pages — Deleted (2026-11-09, feat/site-overhaul-v2)

The following pages were part of the old research section. The `src/content/research/` directory was empty (no posts), so no content was lost. Pages deleted and replaced with a redirect `/research/*` → `/policy/`.

| File | Action |
|---|---|
| `src/pages/research/index.astro` | **DELETED** — replaced by `/policy/` page |
| `src/pages/research/[...slug].astro` | **DELETED** — no posts existed; redirect to `/policy/` |

Redirect: any visitor hitting `/research/` or `/research/*` now lands at `/policy/`.

---

## L. Suspicious Lab Title Spellings — Flagged for Your Review (2026-11-09)

These filenames / titles look like they may contain typos or intentional alternate spellings. No posts deleted or renamed. Review and confirm.

| Slug / File | Displayed Title | Issue |
|---|---|---|
| `rabit-hole.md` | Rabit Hole | Likely "Rabbit Hole" — confirm |
| `plotted-tms.md` | Plotted Tms | Likely "Plotted TMS" or abbreviation — confirm |
| `u-a-high-school.md` | U.a. High School | Likely "U.A. High School" (My Hero Academia room) — confirm capitalisation |
| `jax-sucks-alot.md` | Jax Sucks Alot | "A lot" is two words — confirm intentional |
| `hack-smarter-security.md` | Hack Smarter Security | Confirm this is the room's actual name |
| `c4ptur3-th3-fl4g.md` | C4ptur3 Th3 Fl4g | Leet-speak — confirm intentional (matches THM room) |
