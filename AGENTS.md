# AGENTS.md — Optsam Eye Care website

Static Astro 5 site for Optsam Eye Care & Optical Workshop (Mbagala, Dar es Salaam).
Owner: galaxymushizo-netizen. Content language: mix of English (site chrome) and Swahili (blog posts).

## Live site & branches

- Live: https://galaxymushizo-netizen.github.io/optsam-eye-care-website/
- `main` — source code (this branch)
- `gh-pages` — built output ONLY. GitHub Pages build_type is "legacy" with source branch `gh-pages`.
- **There is NO CI (no GitHub Actions). Every deploy is a manual build + push to `gh-pages`.**
- Commit source changes to `main` first, then deploy the build to `gh-pages`.

## Commands

```bash
npm ci                 # install (flaky network: add --fetch-retries=6 --fetch-timeout=600000 --no-audit --no-fund)
npx astro build        # build → dist/
npx astro preview --port 4322   # serves at http://localhost:4322/optsam-eye-care-website/
```

If the build fails with `Cannot resolve entry module astro/entrypoints/prerender` or node_modules
looks partial, do a clean reinstall: `rm -rf node_modules && npm ci`.

## Critical rules

1. `base` in `astro.config.mjs` MUST stay `/optsam-eye-care-website/` (matches repo name). Never remove it.
2. The `gh-pages` branch MUST keep its `.nojekyll` file. When replacing its contents, delete everything
   EXCEPT `.git` and `.nojekyll` — never `rm -rf` with a glob that could match them.
3. Post dates are rendered with UTC getters (`getUTCDate`/`getUTCMonth`/`getUTCFullYear`) — keep it that
   way, the build machine timezone differs from East Africa Time.
4. A new post becomes the featured "New update" (blog hero card + homepage top banner + site-wide
   floating notification) automatically by having the LATEST `pubDate`. Give new posts a later timestamp,
   e.g. `"2026-11-01T12:00:00Z"`.

## Adding a blog post

Create `src/content/blog/<slug>.md`:

```markdown
---
title: "Kichwa cha makala"
description: "Maelezo mafupi (meta description)."
pubDate: "2026-11-01T12:00:00Z"
author: "J.M. Samwel"
authorRole: "Optometrist & Mwanzilishi, Optsam Eye Care"
---

Maudhui kwa markdown. `##` vitowe ni sections.
```

Then rebuild. Nothing else needs editing — the banner, floating card and blog index pick it up automatically.

## Deploy (manual, run after every change)

```bash
# 1. Commit source to main first
git add <files> && git commit -m "..." && git push origin main

# 2. Build
npx astro build

# 3. Publish dist/ to gh-pages
git fetch origin gh-pages:gh-pages
git worktree add ../ghpages-deploy gh-pages
cd ../ghpages-deploy
find . -mindepth 1 -maxdepth 1 -not -name '.git' -not -name '.nojekyll' -exec rm -rf {} +
cp -r ../optsam-eye-care-website/dist/. .
git add -A && git commit -m "Deploy: <what changed>" && git push origin gh-pages
cd ../optsam-eye-care-website
git worktree remove --force ../ghpages-deploy || git worktree prune

# 4. Verify
gh api repos/galaxymushizo-netizen/optsam-eye-care-website/pages/builds/latest --jq '{status, commit}'
```

GitHub Pages CDN may serve stale pages for up to ~10 minutes after deploy.

## Structure

- `src/pages/` — routes (index, about, services, eyewear, work, blog/, contact, sources, privacy)
- `src/content/blog/` — markdown posts (content collection defined in `src/content.config.ts`)
- `src/components/` — `LatestPostBanner.astro` (homepage strip), `FloatingUpdate.astro` (site-wide
  floating "New update" card, dismissible via sessionStorage, hidden on the latest post's own page)
- `src/data/site.ts` — nav, contact details, service rows
- `src/styles/global.css` — design tokens (ink/paper/teal/brass palette, Instrument Serif + Manrope)
