# samindrasamiya.site

Personal security-research website for [kalialucard](https://github.com/kalialucard).  
Live at **[samindrasamiya.site](https://samindrasamiya.site)**.

Built with [Astro](https://astro.build) · Tailwind CSS · MDX · Pagefind · GitHub Pages.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS + CSS variables |
| Content | MDX content collections |
| Search | Pagefind |
| Fonts | Inter + JetBrains Mono (self-hosted via @fontsource) |
| Deploy | GitHub Actions → GitHub Pages |

---

## Local Development

### bash / zsh
```bash
npm install
npm run migrate    # copy existing content into src/content/
npm run redirects  # generate redirect stubs in public/posts/
npm run dev        # start dev server at localhost:4321
```

### PowerShell (Windows)
```powershell
npm install
npm run migrate
npm run redirects
npm run dev
```

## Production Build

### bash
```bash
npm run build      # outputs to dist/
npm run preview    # preview dist/ locally
```

### PowerShell
```powershell
npm run build
npm run preview
```

---

## Content

| Collection | Location | Purpose |
|---|---|---|
| `research` | `src/content/research/` | Bounty / pentest write-ups (`disclosure_ok: true` required to publish) |
| `labs` | `src/content/labs/` | HTB / THM walkthroughs |
| `notes` | `src/content/notes/` | Tool references & command cheatsheets |

All personal data (name, profiles, certs) is in a single file: [`src/data/profile.ts`](src/data/profile.ts).  
Fields set to `undefined` are **never rendered**.

---

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml` which runs `migrate → redirects → build` and deploys `dist/` to GitHub Pages.

Pull requests run `.github/workflows/link-check.yml` to catch broken links before merge.

---

## License

MIT © kalialucard
