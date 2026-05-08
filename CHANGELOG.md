# Changelog

This project follows a lightweight changelog. We track meaningful work during the website rebuild so future Claude, Codex, and ChatGPT sessions can quickly understand what changed without reading every commit. Entries are short, written in plain language, and grouped by batch.

We do not track tiny copy edits, formatting-only changes, experimental work that is reverted immediately, or agent conversation summaries unless they affect the repo.

## Unreleased

### Phase 1A site foundation
- Added the shared marketing site shell with header, footer, primary navigation, footer navigation, and the Free workflow review CTA path.
- Added reusable button, card, container, section, and route shell primitives for the Next.js App Router rebuild.
- Added placeholder route shells for `/`, `/services`, approved service detail pages, `/use-cases`, `/about`, `/contact`, `/case-studies`, `/demos`, and `/resources`.
- Added reusable SEO metadata helpers plus `robots.ts` and `sitemap.ts` for the planned public site.

### Build, lint, deploy
- Added `scripts/check-em-dashes.mjs` and wired it into `npm run lint` via a new `lint:copy` script. The check scans `.ts`, `.tsx`, and `.mdx` files in `src/`, `app/`, `components/`, and `content/`, including untracked-but-not-ignored files. Top-level `*.md` docs are intentionally excluded.
- `npm run lint` currently runs `lint:copy` only. The legacy Vite ESLint script never had a config and has been broken since the initial commit; we are not fixing it because Phase 0 replaces ESLint and Prettier with Biome. Phase 0 will re-introduce `npm run lint` as `biome check && lint:copy`.
- Migrated the application shell from Vite to Next.js 15 App Router with pnpm scripts, TypeScript, Tailwind CSS, and a small branded placeholder page.
- Replaced the legacy ESLint/Vite dependency set with Biome and Next.js build, lint, typecheck, and start scripts.
- Updated `netlify.toml` for Next.js on Netlify using `pnpm run build`, `.next`, and `@netlify/plugin-nextjs`.

### Content and positioning
- Locked the hosting decision to Netlify only (deploy previews and production). Removed Vercel references from `AGENTS.md`. Phase 0 keeps `netlify.toml` and rewrites it for the Next.js runtime (`@netlify/plugin-nextjs`).

## 0.1.0 — Documentation setup

Initial repo documentation for the rebuild. No code or content changes yet.

- Added `WEBSITE_BRIEF.md` as the canonical source of truth for positioning, services, tone, content rules, pricing direction, and trust posture.
- Added `CLAUDE.md` describing Claude's role (architecture, content strategy, copy review, SEO review, implementation review) and what Claude does not do in this repo.
- Added `AGENTS.md` describing agent ownership, target stack (Next.js App Router, TypeScript, Tailwind), build and lint commands, em dash CI rule, quality gates, commit conventions, and branch and PR conventions.
- Added `CHANGELOG.md` with the format guide below.

## How to add a future entry

When a meaningful batch ships, add it under `## Unreleased` and move it to a versioned section on release. Use this shape:

```
## X.Y.Z — Short batch title

One or two lines on the goal of the batch and any notes that future agents should know.

### Pages
- Added /services overview with six service cards
- Updated /about with new founder paragraph

### Components
- Added Hero, ServiceCardGrid, IndustryCardGrid
- Refactored NavBar to use shared Link primitive

### Content and positioning
- Replaced global hero copy with Pflugerville-led positioning
- Removed banned hype words from /services copy

### SEO
- Added LocalBusiness JSON-LD with Pflugerville and service-area cities
- Wired sitemap.ts and robots.ts
- Added per-page OG image route at /og

### Forms and integrations
- Contact form server action wired to Resend
- Added confirmation page at /contact/thanks

### Design system
- Ported Tailwind theme to Next.js (Orbitron + Inter, slate-to-purple gradient, yellow #fbbf24)
- Added glass-card and gradient-text utility classes

### Build, lint, deploy
- Added em dash lint check
- CI runs lint, typecheck, build on every PR
- Configured Netlify deploy previews
```

Sections that do not apply in a given batch can be omitted. Keep entries short. If a section needs more than a handful of bullets, the batch is probably too big.

## What to track

- Pages added, removed, or substantially changed
- Components added, removed, or substantially refactored
- SEO updates (metadata, JSON-LD, sitemap, OG, robots)
- Content and positioning changes that affect more than one page
- Contact form, server action, or integration changes
- Design system changes (theme, utilities, primitives)
- Build, lint, typecheck, or deployment fixes that change developer workflow

## What not to track

- Tiny copy edits (typo fixes, single-word swaps)
- Formatting-only changes (whitespace, import order)
- Experimental changes that are reverted within the same batch
- Agent conversation summaries unless they affect repo state
- Internal refactors that do not change behavior or structure
