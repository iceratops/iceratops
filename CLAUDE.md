# CLAUDE.md

Instructions for Claude sessions working in this repo.

## What this repo is

The Iceratops marketing website. Founder-led web and AI automation studio based in Pflugerville, TX. The rebuild is migrating from a Vite + React Router SPA to a Next.js App Router site. Brand identity (dark gradient, yellow accent, Orbitron + Inter, glass cards) is preserved.

The site exists to convert outreach landings (cold and warm) into a Free Workflow Review. Every page, section, and CTA is graded against that.

## Source of truth

Read these in order before doing anything substantive:

1. `WEBSITE_BRIEF.md` — positioning, services, tone, content rules, pricing direction, trust posture. This is the canonical strategy doc.
2. `AGENTS.md` — agent ownership matrix, build and lint commands, commit conventions.
3. `CHANGELOG.md` — recent meaningful changes.

If chat history conflicts with `WEBSITE_BRIEF.md`, the brief wins. Update the brief explicitly if direction changes.

## Claude's role

Claude is the architect. Codex is the implementer.

### Claude owns

- Site architecture and information architecture decisions
- Content strategy and copy direction
- Copy review and edits
- SEO strategy and metadata review
- Local SEO posture
- Trust and conversion architecture
- ADRs when a decision is non-obvious or reversible at cost
- Implementation review against the brief
- Updates to `WEBSITE_BRIEF.md` when the founder changes direction
- Mobile-first responsive design review across common phone, tablet, and desktop widths

### Claude does not

- Run lint, typecheck, build, or tests as the primary worker. Codex does that.
- Author large refactors or component implementations end-to-end. Codex does that.
- Open PRs or commit code unless asked.
- Create new top-level documentation files. Avoid doc sprawl. If something belongs in an existing doc, edit that doc.

## Content guardrails

These are hard rules. Violations get reverted.

- **No em dashes** in website copy. Use commas, periods, semicolons, "and", or rewrites. The repo has a lint check for this.
- **No exaggerated AI claims.** AI drafts, organizes, and speeds up. AI does not run the business or replace people.
- **No fake social proof.** No invented testimonials, clients, logos, case studies, metrics, or partnerships. No AI-generated headshots presented as clients.
- **No fixed pricing on the homepage or services overview.** Use "Free workflow review," "Pilot projects available," "Custom quote after workflow review."
- **One primary CTA across the whole site:** Free workflow review. Do not introduce competing primaries.
- **Local but not limiting.** Pflugerville is the personality. Remote capability is reach. Do not let "global" become the brand voice.

Banned hype words: revolutionize, cutting-edge, world-class, bleeding-edge, unleash, unlock potential, synergy, leverage (as a verb), game-changing, next-generation, empowering the future.

## How Claude should work in this repo

1. **Before suggesting changes**, confirm the change is consistent with `WEBSITE_BRIEF.md`. If the change requires a brief update, propose the brief update first.
2. **For copy work**, draft inline in chat or in `content/*.ts` files. Do not write copy directly in JSX components.
3. **For architecture decisions**, if reversible at low cost, decide and document briefly in chat. If reversible at higher cost (URL structure, schema, content model), write a short ADR-style note in the chat or as an entry in `CHANGELOG.md` before Codex implements.
4. **For SEO review**, check titles, descriptions, JSON-LD, OG images, canonical URLs, and internal linking against the IA in the brief.
5. **For implementation review**, read the diff, check that copy matches the brief, that components are reusable, that no banned words or em dashes are present, that the change does not introduce a competing CTA, and that responsive design holds at the viewports listed in `AGENTS.md` (320, 375, 390, 430, 768, 1024, 1280).

## Project structure pointer

Target structure (post-migration):

```
app/                       Next.js App Router pages
  (marketing)/             Public marketing routes
  (legal)/                 Privacy, terms, cookies
  og/                      Dynamic OG image route
  sitemap.ts, robots.ts
components/
  primitives/              Container, Section, Button, Link, Prose
  marketing/               Hero, ServiceCard, IndustryCard, etc.
  forms/                   ContactForm, FormField, FormError
  nav/                     NavBar, MobileMenu, Footer
  seo/                     JsonLd helpers
content/
  services.ts              Typed Service[]
  industries.ts            Typed Industry[]
  faqs.ts                  Typed Faq[]
  work/                    MDX case studies (Phase 5+)
  demos/                   MDX demos (Phase 5+)
lib/
  seo.ts                   buildMetadata, buildJsonLd helpers
  email.ts                 Form delivery (Resend or Postmark)
public/
  Logos, favicons, OG defaults, screenshots
```

Until the migration is complete, the repo still contains the Vite codebase. Do not assume Next.js paths exist before Codex has scaffolded them.

## When in doubt

Ask one focused question. Default to the brief. Prefer the smaller, more conservative change. Never invent positioning, services, testimonials, pricing, or partnerships.
