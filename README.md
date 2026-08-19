# Linestory Studio

Marketing & portfolio website for **Linestory Studio** — an architecture and interior design practice. _Every line tells a story._

Built as a fully static **Next.js** site (no database, no backend) with GSAP motion, a woven brand motif drawn from the logo, and a complete SEO setup.

🔗 **Live:** https://www.linestorystudio.in <!-- update once deployed -->

---

## Tech stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, `output: 'export'` — static) |
| Language | TypeScript, React 19 |
| Styling | Tailwind CSS v4 (CSS-first tokens) |
| Motion | GSAP + `@gsap/react`, Lenis smooth scroll |
| Fonts | Fraunces (display) + Manrope (text), self-hosted via `next/font` |
| Analytics | Plausible (privacy-friendly, cookieless) |
| Forms | Formspree (no backend) |
| Hosting | Any static host (Vercel / Netlify / Cloudflare Pages) |

## Features

- Woven line-draw hero + per-route page transitions (GSAP)
- Filterable project **index** with cursor-tracked preview
- Cinematic project detail pages (`generateStaticParams`)
- Studio, Clients, Contact, custom 404, Privacy & Terms
- SEO: Open Graph + Twitter cards, build-time branded OG image, `sitemap.xml`, `robots.txt`, JSON-LD (Organization + per-project)
- Accessibility: WCAG-AA contrast, focus rings, full `prefers-reduced-motion` support
- Deterministic online image placeholders (swap for real photos anytime)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # static site → ./out
```

Deploy the `out/` folder to any static host, or connect the repo to Vercel/Netlify (framework auto-detected).

## Editing content

All content lives in plain data files — no CMS needed. Edit and redeploy.

| What | Where |
|------|-------|
| Projects | `src/data/projects.ts` |
| Studio info, clients, testimonials, team, awards | `src/data/site.ts` |
| Site name / URL / contact | `src/data/site.ts` |

### Drop-in assets (three swaps)

1. **Logo** — add `/public/logo.png`, set `LOGO_SRC = "/logo.png"` in `src/components/Logo.tsx` (currently a woven-mark stand-in).
2. **Project photos** — add files under `/public/projects/<slug>/` and list them in each project's `images[]`. Until then, deterministic architecture placeholders render automatically (`src/lib/images.ts`).
3. **Contact form** — set `FORM_ENDPOINT` in `src/components/contact/ContactForm.tsx` to your Formspree endpoint.

Also fill the `[bracketed]` placeholders in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`, and confirm the domain in `src/data/site.ts`.

## Project structure

```
src/
  app/            routes (home, work, studio, clients, contact, privacy, terms)
    work/[slug]/  project detail (static-generated)
    sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg
  components/     Nav, Footer, Hero, WeaveMark, Media, Reveal, Cursor, …
  data/           projects.ts, site.ts   (all editable content)
  lib/            images.ts (placeholder pipeline)
```

## Notes

- `output: 'export'` means images are unoptimized — pre-compress real photos to WebP before adding.
- Privacy/Terms are generic starters; have them reviewed by a legal professional before publishing.
- Plausible requires a site registered at plausible.io for `linestorystudio.in`, or the script simply no-ops.

---

© Linestory Studio. All rights reserved.
