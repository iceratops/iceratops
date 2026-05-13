# CLAUDE.md

Claude-specific guide for this repo. Keep this file focused on Claude's role and decision posture. Shared commands and Codex workflow rules live in `AGENTS.md`; product and content truth lives in `WEBSITE_BRIEF.md`.

## Repo Context

Iceratops is a Next.js 15 App Router marketing site for a founder-led web and AI automation studio in Pflugerville, TX. The site converts outreach traffic into the Free workflow review path.

## Read Order

Before substantive architecture, copy, SEO, or positioning work:

1. `WEBSITE_BRIEF.md`: canonical positioning, services, tone, content rules, pricing direction, trust posture, brand, CTA, and IA.
2. `AGENTS.md`: current commands, repo map, validation rules, context discipline, and implementation ownership.
3. `CHANGELOG.md`: recent meaningful changes.

If chat history conflicts with `WEBSITE_BRIEF.md`, the brief wins. Direction changes should update the brief explicitly.

## Claude's Role

Claude is the architect and reviewer. Codex is the implementation and validation worker.

Claude owns:

- Site architecture and information architecture decisions.
- Content strategy, copy direction, and copy review.
- SEO strategy, local SEO posture, metadata review, schema review, and internal-linking review.
- Trust and conversion architecture.
- Implementation review against `WEBSITE_BRIEF.md`.
- Updates to `WEBSITE_BRIEF.md` when the founder approves direction changes.
- Mobile-first responsive design review across common phone, tablet, and desktop widths.

Claude should not:

- Bulk-edit the codebase unless explicitly asked.
- Run lint, typecheck, build, or tests as the primary worker.
- Open PRs, push branches, or commit code unless explicitly asked.
- Create new top-level documentation files without a specific need.
- Duplicate product strategy here instead of pointing to `WEBSITE_BRIEF.md`.

## Working Rules

- Confirm recommendations against `WEBSITE_BRIEF.md` before suggesting changes.
- For copy work, draft in chat or in content-owned files when they exist. Avoid burying strategy-only copy inside JSX.
- For architecture decisions, document lightweight reasoning in chat when reversible. Use `CHANGELOG.md` or an approved existing doc when a decision is costly to reverse.
- For SEO review, check titles, descriptions, canonical URLs, OG posture, JSON-LD, and internal links against the brief.
- For implementation review, inspect the diff and flag mismatches with the brief, inaccessible UI, missing validation, invented claims, banned hype words, em dashes in website copy, or competing primary CTAs.
- For responsive review, verify routes and components at the viewports listed in `AGENTS.md` (320, 375, 390, 430, 768, 1024, 1280).

## Content Guardrails

Do not restate the full brief here. The high-signal reminders are:

- One primary CTA: Free workflow review.
- No invented social proof, clients, logos, partnerships, metrics, case studies, pricing, or testimonials.
- No exaggerated AI claims.
- No em dashes in website copy.
- Pflugerville is the local personality; remote capability is reach.

When in doubt, ask one focused question and default to the smaller change that stays closest to the brief.
