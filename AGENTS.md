# AGENTS.md

Conventions and ownership for AI agents (Codex, Claude, ChatGPT) working in this repo.

## Repo overview

Iceratops marketing website. Founder-led web and AI automation studio in Pflugerville, TX. The rebuild migrates the existing Vite + React Router SPA to a Next.js App Router site while preserving the brand identity.

Authoritative direction lives in `WEBSITE_BRIEF.md`. Read it before substantive work.

## Stack (target)

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- React 18+
- MDX for case studies and demos
- Server actions for the contact form
- Biome for lint and formatting (replaces ESLint and Prettier)
- Resend or Postmark for transactional email
- Plausible or Netlify Analytics
- Netlify for hosting (deploy previews and production), via the
  `@netlify/plugin-nextjs` Next.js runtime

The current branch may still be running the legacy Vite stack. Confirm the current state before assuming Next.js paths exist. ESLint and Prettier are not used. Phase 0 of the migration removes their dependencies and installs Biome in their place.

## Agent ownership

| Area | Owner | Notes |
| --- | --- | --- |
| Positioning, services list, tone | Founder + Claude | Codified in `WEBSITE_BRIEF.md`. Codex does not change without approval. |
| Site architecture, IA, URLs | Claude | Reversible-at-cost decisions land in the brief or CHANGELOG. |
| Copy direction and content strategy | Claude | Drafted in chat or in `content/*.ts`. |
| SEO strategy and metadata posture | Claude | Per-page metadata reviewed against the brief. |
| Component implementation and refactors | Codex | Reusable, typed, accessible. |
| Pages, layouts, routing | Codex | Follows IA in the brief. |
| Forms, server actions, integrations | Codex | Validates with Zod, handles errors, never logs PII. |
| Tests, lint, typecheck, build | Codex | Must pass before merge. |
| Commits, branches, PRs | Codex | Follows commit conventions below. |
| Implementation review | Claude | Reads diffs, verifies brief alignment. |
| `CHANGELOG.md` entries for shipped batches | Codex | Append on merge. |

### Codex must not

- Change positioning, services, tone, or pricing direction without the founder updating `WEBSITE_BRIEF.md` first.
- Invent testimonials, clients, logos, case studies, metrics, or partnerships.
- Use em dashes in any visible website copy.
- Introduce a competing primary CTA. The single primary CTA is "Free workflow review."
- Replace the brand visual language. Keep slate-900 to purple-900 gradient, yellow `#fbbf24` accent, Orbitron headings, Inter body, glass cards.
- Add new top-level documentation files. If guidance is needed, extend an existing doc.
- Commit secrets, real customer data, or unredacted draft client work.

### Claude must not

- Bulk-edit the codebase. Recommend changes and let Codex execute.
- Open PRs or push branches without an explicit ask.
- Create doc sprawl. New top-level `*.md` files require a real reason.

## Build, lint, typecheck

Until the Next.js migration lands, the legacy Vite scripts still apply. Use whichever set matches the current `package.json`.

Vite (legacy, current):

```bash
npm install
npm run dev
npm run build
npm run lint           # currently runs lint:copy only (em-dash check)
npm run lint:copy      # em-dash check on its own
```

Next.js + Biome (target, post Phase 0):

```bash
npm install
npm run dev            # next dev
npm run build          # next build
npm run start          # next start
npm run lint           # biome check + lint:copy
npm run lint:copy      # em-dash check on its own
npm run format         # biome format --write
npm run typecheck      # tsc --noEmit
```

All of `lint`, `typecheck`, and `build` must pass before merge. CI runs them on every PR.

## Em dash CI rule

The em dash rule is enforced in lint via `scripts/check-em-dashes.mjs`. The check scans `.ts`, `.tsx`, and `.mdx` files in `src/`, `app/`, `components/`, and `content/`, including untracked-but-not-ignored files. Any match fails the build. Top-level `*.md` docs are intentionally excluded.

Em dashes should never appear in user-facing copy. If source code genuinely needs one (rare), extend `scripts/check-em-dashes.mjs` to honor a documented suppression marker. Reviewers will push back.

## Quality gates before merge

For any PR that ships user-visible code:

1. `lint`, `typecheck`, `build` pass.
2. No em dashes in `app/`, `components/`, `content/`.
3. No banned hype words (see brief).
4. No invented social proof or pricing.
5. New routes have metadata, canonical, and OG image.
6. New routes appear in `sitemap.ts` if they should be indexed.
7. Accessibility: forms have labels, images have alt text, focus states are visible, color contrast passes.
8. Lighthouse target on changed pages: 90+ Performance, 100 Accessibility, 100 Best Practices, 95+ SEO.
9. `CHANGELOG.md` updated under "Unreleased" if the change is meaningful (see CHANGELOG rules).

## Commit conventions

- Short, imperative subject under 72 characters.
- Body explains the why, not the what, when not obvious.
- One logical change per commit when reasonable.
- Reference page or component name when scoped: `home: tighten hero copy`, `services: add ai-workflow-audit page`, `seo: add LocalBusiness JSON-LD`.

Examples:

```
home: replace global hero with Pflugerville positioning
services: scaffold six service detail pages
contact: wire server action to Resend
seo: add per-page OG image route
chore: enforce em dash lint
```

## Branch and PR conventions

- Branches: `feature/<short-name>`, `fix/<short-name>`, `chore/<short-name>`.
- PR title matches the eventual squash commit subject.
- PR description: one paragraph on what shipped, one paragraph on why, screenshots for visible changes, a "verified" checklist for the quality gates.
- Squash merge to `master` (current default branch on this repo).

## Secrets and environment

- Real secrets only in Netlify environment variables or a local `.env.local` (never committed).
- `.env.example` lists required keys with placeholder values.
- Never paste real API keys, customer emails, or form submissions into chat or commits.

## When direction is unclear

Do not guess. Ask one focused question, defaulting to the brief. Prefer the smaller change. If the founder is not available, hold the change rather than ship something off-brief.
