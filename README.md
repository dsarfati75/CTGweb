# CinemaTech — Next.js + Tailwind (Vercel-ready)

This repo contains your single-page marketing site built with **Next.js (App Router)** and **TailwindCSS**.

## Quick Start (Local)

```bash
npm i
# Put your full data URI into: data/cinematech_logo_datauri_full.txt
npm run prepare-logo
npm run dev
# open http://localhost:3000
```

## Deploy to GitHub + Vercel

1. **Create the repo** (or use an existing one):
   ```bash
   git init
   git add .
   git commit -m "Initial commit — CinemaTech site"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **On Vercel**: Import the repo → Framework: **Next.js** → Build command: `npm run build` → Output dir: `.next`.

3. **Domain**:
   - Root/apex (`cinematechgroup.com`) → A record to Vercel's apex IPs (or use Vercel-managed DNS).
   - `www.cinematechgroup.com` → CNAME to `cname.vercel-dns.com`.
   - In Vercel, add both domains and let it provision SSL.

## Notes

- Tailwind is wired via `app/globals.css` and `tailwind.config.ts`.
- Inline SVG icons; no external deps.
- `SmokeTests` logs to the browser console if key content is missing.
- Brand colors are at the top of `app/page.tsx`.
