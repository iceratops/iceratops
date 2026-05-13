# AGENTS.md

Lean operating guide for AI agents working in this repo. Keep this file focused on workflow, commands, and safe context discovery. Product strategy, positioning, services, voice, CTA rules, and information architecture live in `WEBSITE_BRIEF.md`.

## Current Repo

Iceratops marketing website for a founder-led web and AI automation studio in Pflugerville, TX.

Current stack:

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Biome for linting and formatting
- Netlify hosting via `@netlify/plugin-nextjs`
- pnpm `10.29.1`

This is a single-app repo, not a monorepo.

## Source Of Truth

- `WEBSITE_BRIEF.md`: canonical product, positioning, content, services, CTA, brand, and IA direction.
- `CHANGELOG.md`: meaningful shipped batches and recent repo history.
- `CLAUDE.md`: Claude-specific architecture and content review role.
- `AGENTS.md`: this operating guide.

Do not change positioning, services, tone, pricing direction, CTA strategy, or brand rules unless `WEBSITE_BRIEF.md` is explicitly updated by the founder.

## Repo Map

- `app/`: Next.js App Router pages, metadata routes, global CSS.
- `components/`: layout, nav, marketing, and primitive UI components.
- `lib/`: shared helpers such as SEO and class utilities.
- `public/`: static images, favicons, logos, manifests.
- `scripts/`: repo validation scripts, including copy lint.
- `docs/`: legal/compliance docs. Review only when the task asks for them.

Generated, dependency, or local-heavy paths to avoid unless directly relevant:

- `.next/`
- `node_modules/`
- `.pnpm-store/`
- `.claude/worktrees/`
- `tsconfig.tsbuildinfo`
- `dist/`, `out/`, `.netlify/` if present

## Commands

Use pnpm.

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run start
pnpm run lint
pnpm run lint:copy
pnpm run format
pnpm run typecheck
```

Command meanings:

- `pnpm run dev`: start Next dev server.
- `pnpm run build`: production Next build.
- `pnpm run start`: serve a built Next app.
- `pnpm run lint`: `biome check .` plus copy lint.
- `pnpm run lint:copy`: checks website source for em dashes.
- `pnpm run format`: apply Biome formatting.
- `pnpm run typecheck`: `tsc --noEmit`.

No test script currently exists. Do not report tests as run unless a test command is added or the user asks for a specific manual check.

## Validation

For user-visible code changes, run before handoff when feasible:

```bash
pnpm run lint
pnpm run typecheck
pnpm run build
```

For docs-only instruction changes, a focused diff/readback is usually enough. Run heavier checks only if the doc change affects commands, generated source, or validation behavior.

The copy lint scans `.ts`, `.tsx`, and `.mdx` files in source/content paths for em dashes. Top-level Markdown docs are intentionally excluded, but website copy should still avoid em dashes.

## Context Discipline

Start with the smallest useful context:

- Inspect the relevant file, route, component, symbol, diff, log, or command output first.
- Prefer `rg`, `rg --files`, focused file reads, and targeted snippets.
- Avoid broad repo scans unless the task needs them.
- Do not read full large files when headings, nearby lines, or a narrow search answer the question.
- Do not copy deep product or architecture content into this file. Link to the owning doc instead.
- Ignore generated and dependency directories unless debugging their output directly.

Unknown or potentially large command output must be scoped and byte-capped. Prefer:

```bash
COMMAND 2>&1 | head -c 4000
COMMAND 2>&1 | tail -c 4000
```

When using tools that support output limits, set a small output cap first and increase only if needed.

## Implementation Guardrails

- Follow existing Next.js App Router, TypeScript, Tailwind, and component patterns.
- Keep reusable UI in `components/`; keep shared helpers in `lib/`.
- Preserve the brand system from `WEBSITE_BRIEF.md`: dark slate-to-purple gradient, yellow `#fbbf24` accent, Orbitron headings, Inter body, glass-card feel.
- The single primary CTA is "Free workflow review."
- Do not invent testimonials, clients, logos, case studies, metrics, partnerships, pricing, or customer data.
- Do not log PII from contact forms or integrations.
- Do not add new top-level docs unless the user explicitly asks. Prefer updating existing docs.
- Do not touch `.claude/worktrees/` unless the user specifically asks.
- Do not create new git worktrees. The project operates linearly on branches off `master`. Existing entries under `.claude/worktrees/` are being phased out; new work goes on a regular branch in the main checkout.

## Responsive Design

The site is mobile-first. Most first impressions come from phones (see `WEBSITE_BRIEF.md` → Primary surface).

Implementation rules:

- Build the mobile layout first, then add `sm:`, `md:`, `lg:`, `xl:` Tailwind variants for larger screens. Do not start from a desktop layout and shrink it down.
- No fixed pixel widths that can break narrow viewports. Use `max-w-*`, `w-full`, percentages, or fluid utilities.
- No horizontal scrolling at any common width.
- No hover-only interactions for primary actions. Anything reachable by hover on desktop is reachable by tap on mobile.
- The primary CTA stays visible and usable on a 375px viewport without zoom.
- Cards collapse to a single column at mobile widths. Multi-column grids only above `md:`.
- Forms use a single column on mobile with comfortable spacing, native input types, and no horizontal overflow.
- Hero sections are compact on mobile. Avoid 100vh heroes on small screens.

Required viewport checks before returning a route or component:

- 320px (small phones)
- 375px (iPhone SE class, common baseline)
- 390px (iPhone 13/14/15 class)
- 430px (iPhone Pro Max class)
- 768px (tablet portrait)
- 1024px (tablet landscape, small laptop)
- 1280px (desktop)

At each width verify: no horizontal scroll, header and nav function cleanly, primary CTA is visible and tappable, cards stack as expected, and forms are usable. Manual visual checks in browser devtools are enough for Phase 1B guidance. Note any tradeoffs in the PR description.

## Agent Roles

- Founder plus Claude own positioning, services, tone, content strategy, IA, SEO posture, and changes to `WEBSITE_BRIEF.md`.
- Codex owns component implementation, routing, refactors, forms, integrations, validation, build health, and changelog entries for shipped batches.
- Claude reviews implementation against the brief and should not bulk-edit code unless explicitly asked.

## Final Response Expectations

End with:

- What changed, with file paths.
- Validation run, or why it was not run.
- Any residual risk, blocker, or follow-up that matters.

Keep the final response concise and concrete. Do not imply unrun checks passed.
