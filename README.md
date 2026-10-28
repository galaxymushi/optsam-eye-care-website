# Optsam Eye Care and Optical Workshop Store — Website

The official website for **Optsam**, a primary eye care clinic and optical workshop in Mbagala, Dar es Salaam, Tanzania. The site presents the clinic's services, eyewear, community outreach work and contact details, and is built to be fast, lightweight and easy to maintain.

**Live site:** https://galaxymushi.github.io/optsam-eye-care-website/

> The account was renamed from `galaxymushizo-netizen` to `galaxymushi`, so the old
> `galaxymushizo-netizen.github.io/optsam-eye-care-website/` address no longer resolves. Always link the URL above.

## About the business

| | |
|---|---|
| Founded | 2017 (business identity registered 2019) |
| Founder | Optometrist J.M. Samwel |
| Location | Mianzini Street, Mbagala, Dar es Salaam, Tanzania |
| Phone / WhatsApp | +255 755 477 225 |
| Email | optsamtz@gmail.com |
| Socials | [Instagram](https://www.instagram.com/optsam/) · [YouTube](https://www.youtube.com/channel/UC0IVKzUwwL8PBH_Df7-uiDQ) · [Blog](https://optsam.blogspot.com/) |

## Pages

- **Home** — the clinic at a glance: services, workshop and community work
- **About** — the founder's story and the clinic's mission
- **Services** — eye examinations, prescription spectacles, optical workshop, contact lenses, and referrals
- **Eyewear** — frames, lenses and the workshop behind every pair
- **Our work** — community outreach: school screenings, mobile clinics and Rotary events
- **Contact** — enquiry form, phone, WhatsApp, email and Google Maps directions
- **Sources** — the references behind the published information, for transparency

## Tech stack

- [Astro](https://astro.build/) 5 — fully static output, TypeScript
- `sharp` for image processing
- Self-hosted fonts via Fontsource (Manrope + Instrument Serif)

## Features

- Fully static and lightweight — no client-side framework, no tracking
- Responsive layout with SEO meta tags and Open Graph image
- Custom 404 page, favicon and apple-touch-icon
- Privacy-friendly enquiry form: composes an email or WhatsApp message in the visitor's own app — nothing is sent from or stored by the website
- All business information (contact details, services, social links) lives in one place: `src/data/site.ts`

## Getting started

Requires Node.js 18+ (developed on Node 24).

```bash
npm install       # install dependencies
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # preview the production build
npm run check     # type-check with astro check
```

## Deployment

The site is hosted on GitHub Pages. The production build in `dist/` is published to the `gh-pages` branch, which GitHub Pages serves at:

- **Project site:** `https://galaxymushi.github.io/optsam-eye-care-website/`

The GitHub account was renamed from `galaxymushizo-netizen` to `galaxymushi`, so the Pages address follows the new username. The repository was also renamed from `galaxymushizo-netizen.github.io` (a user-site) to `optsam-eye-care-website`, so `base` must stay in sync in `astro.config.mjs` (`base: '/optsam-eye-care-website/'`).

### Manual deploy steps

```bash
npm run build
git worktree add dist-tree gh-pages   # or use any method to check out gh-pages
rm -rf dist-tree/* && cp -r dist/* dist-tree/ && touch dist-tree/.nojekyll
cd dist-tree && git add -A && git commit -m "Deploy" && git push
```

## Project structure

```
src/
  assets/        images used across the site
  components/    reusable Astro components (header, footer, forms, gallery…)
  data/          site.ts (business facts) and sources.ts (references)
  layouts/       Base.astro page shell
  pages/         one .astro file per route
  styles/        global.css
public/          favicon, og image and other static assets
research/        source materials gathered while building the site
```

## License

All rights reserved. This is the website of a real business — content, branding and photography belong to Optsam Eye Care.
