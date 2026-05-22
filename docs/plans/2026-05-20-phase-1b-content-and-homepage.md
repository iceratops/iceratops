# Phase 1B Plan: Content model + homepage skeleton

**Date:** 2026-05-20
**Owner:** Claude (architecture, content, review). Codex executes implementation.
**Status:** Approved for handoff to Codex. No implementation has started.

## 1. Phase 1B scope summary

Phase 1B converts the Phase 1A route shells into a real, content-driven homepage. All visible site copy moves into typed `content/*.ts` modules so future copy edits are content changes, not code changes. The homepage gains nine production sections wired to that content. `/contact` gains a form UI shell with no backend behavior. Route metadata is upgraded from Phase 1A placeholders to brief-aligned titles and descriptions.

In scope: content modules, homepage sections, contact form shell, route metadata polish.

Out of scope for 1B: contact form server action / email integration, LocalBusiness JSON-LD, OG image route, per-service detail content, per-use-case detail content, About page rewrite, pricing UI, case studies, demos content, new routes, animation polish, dark/light theme work, accessibility audit beyond baseline.

## 2. Proposed file changes

Create:

- `content/site.ts` — site-wide constants (name, location, service area, response commitment, email, primary CTA).
- `content/navigation.ts` — canonical nav data; replaces `components/nav/navigation.ts` as source of truth.
- `content/services.ts` — six approved services with slug, name, outcome, summary, highlights.
- `content/use-cases.ts` — six homepage-preview audiences with slug, name, summary, helpful workflows.
- `content/process.ts` — three-step engagement process (review, pilot, handoff).
- `components/marketing/home/Hero.tsx`
- `components/marketing/home/ProblemSection.tsx`
- `components/marketing/home/ServicesOverview.tsx`
- `components/marketing/home/HumanInLoopSection.tsx`
- `components/marketing/home/LocalPositioning.tsx`
- `components/marketing/home/UseCasesPreview.tsx`
- `components/marketing/home/ProcessSection.tsx`
- `components/marketing/home/TrustSection.tsx`
- `components/marketing/home/FinalCta.tsx`
- `components/marketing/ContactFormShell.tsx` — server component, no submission behavior.

Modify:

- `app/page.tsx` — replace `RouteShell` with composed home sections; update metadata.
- `app/contact/page.tsx` — replace `RouteShell` body with intro copy + `ContactFormShell`; keep metadata wired through `buildMetadata`.
- `app/about/page.tsx` — metadata description only (no body content change in 1B).
- `app/services/page.tsx` — metadata description only.
- `app/use-cases/page.tsx` — metadata description only.
- `app/services/ai-workflow-audit/page.tsx` — metadata description only.
- `app/services/website-refresh/page.tsx` — metadata description only.
- `app/services/inquiry-follow-up-systems/page.tsx` — metadata description only.
- `components/nav/Header.tsx` — switch import to `content/navigation`.
- `components/nav/Footer.tsx` — switch import to `content/navigation`; pull tagline text from `content/site`.
- `lib/seo.ts` — pull `siteConfig.description` from `content/site` (single source of truth); leave the rest of `buildMetadata` alone.
- `CHANGELOG.md` — append a "Phase 1B" entry under `## Unreleased`.

Delete:

- `components/nav/navigation.ts` — superseded by `content/navigation.ts`. Update all imports in the same commit.

No new routes. No deleted routes. No new top-level docs.

## 3. Recommended content model structure

All content modules are pure TypeScript with `as const` and explicit types. No JSX. No runtime side effects. Strings are short enough for sixth-grade reading level and free of em dashes.

```ts
// content/site.ts
export type ServiceAreaCity = string

export const site = {
  name: 'Iceratops',
  url: 'https://iceratops.com',
  shortDescription:
    'Founder-led web and AI automation studio in Pflugerville, TX.',
  longDescription:
    'We build modern websites and practical, AI-assisted workflows for local and remote businesses. Human-reviewed. Outcome-focused.',
  city: 'Pflugerville',
  state: 'Texas',
  stateAbbr: 'TX',
  serviceArea: [
    'Pflugerville',
    'Austin',
    'Round Rock',
    'Hutto',
    'Cedar Park',
    'Georgetown',
    'Leander',
    'Manor',
  ] as readonly ServiceAreaCity[],
  contact: {
    email: 'hello@iceratops.com',
    responseCommitment: 'We reply within one business day.',
  },
  commitments: [
    'No long contracts to start.',
    'Everything we build is yours, with documentation.',
    'A human reviews every AI-drafted response.',
  ] as const,
} as const

export type Site = typeof site
```

```ts
// content/navigation.ts
export const primaryCta = {
  href: '/contact?ref=workflow-review',
  label: 'Get a free workflow review',
} as const

export const secondaryCta = {
  href: '/services',
  label: 'See how we help',
} as const

export const primaryNavItems = [
  { href: '/services', label: 'Services' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export const footerNavGroups = [
  {
    title: 'Navigate',
    items: primaryNavItems,
  },
  {
    title: 'Services',
    items: [
      { href: '/services/ai-workflow-audit', label: 'AI Workflow Audit' },
      { href: '/services/website-refresh', label: 'Website Refresh' },
      {
        href: '/services/inquiry-follow-up-systems',
        label: 'Inquiry and Follow-Up System',
      },
    ],
  },
  {
    title: 'More',
    items: [
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/demos', label: 'Demos' },
      { href: '/resources', label: 'Resources' },
    ],
  },
] as const
```

```ts
// content/services.ts
export type Service = {
  slug: string
  name: string
  outcome: string          // one sentence, business-owner phrasing
  summary: string          // one to two sentences
  highlights: readonly string[] // three short bullets
}

export const services: readonly Service[] = [
  {
    slug: 'ai-workflow-audit',
    name: 'AI Workflow Audit',
    outcome: 'See where AI can quietly remove busywork from your week.',
    summary:
      'We walk your current inquiry, booking, and admin flows and show you exactly where AI can help and where it should stay out.',
    highlights: [
      'Plain-English map of your workflows',
      'Two or three concrete AI-assisted fixes',
      'No tools sold during the audit',
    ],
  },
  {
    slug: 'website-refresh',
    name: 'Website Refresh',
    outcome: 'Tighten your existing site without starting over.',
    summary:
      'Keep what works, fix the rest. We refresh copy, layout, and mobile feel so your site finally matches the business you run today.',
    highlights: [
      'Mobile-first redesign on your current platform',
      'Clearer copy and stronger CTAs',
      'Faster pages and cleaner forms',
    ],
  },
  {
    slug: 'modern-website',
    name: 'Modern Website Build',
    outcome: 'A new website that earns trust on the first scroll.',
    summary:
      'A modern, mobile-first site built around your real services, with the kind of conversion path a busy local owner can keep up with.',
    highlights: [
      'Mobile-first responsive design',
      'Copy written for your audience',
      'Lead capture wired in from day one',
    ],
  },
  {
    slug: 'inquiry-follow-up',
    name: 'Inquiry and Follow-Up System',
    outcome: 'Catch every inquiry and follow up before the lead goes cold.',
    summary:
      'AI-assisted drafts, a simple tracker, and a human-in-the-loop review step so nothing slips and every reply still sounds like you.',
    highlights: [
      'AI-drafted replies, you approve before send',
      'Lightweight tracker for new leads',
      'Reminders so warm leads do not go quiet',
    ],
  },
  {
    slug: 'booking-requests',
    name: 'Booking or Request Workflow',
    outcome: 'Turn booking and request questions into real appointments.',
    summary:
      'A booking or request workflow tuned to your service, with the right inputs, the right confirmations, and a clear handoff to your calendar.',
    highlights: [
      'Mobile-friendly request or booking form',
      'Confirmations that read like a person sent them',
      'Clean handoff to your calendar or CRM',
    ],
  },
  {
    slug: 'admin-automation',
    name: 'Admin Automation Sprint',
    outcome: 'Quiet, repetitive admin work, gently automated.',
    summary:
      'A short sprint to remove the small repetitive tasks that drain your week, with documentation so you stay in control of every step.',
    highlights: [
      'Two-week scoped sprint',
      'Automation you can read and edit',
      'Documented handoff at the end',
    ],
  },
] as const
```

```ts
// content/use-cases.ts
export type UseCase = {
  slug: string
  name: string
  summary: string
  helpfulWorkflows: readonly string[]
}

export const useCases: readonly UseCase[] = [
  {
    slug: 'local-service-businesses',
    name: 'Local service businesses',
    summary:
      'Pest control, cleaning, HVAC, and home services that want to reply faster without hiring a full-time admin.',
    helpfulWorkflows: ['Inquiry and follow-up', 'Booking or request workflow'],
  },
  {
    slug: 'event-venues',
    name: 'Event venues',
    summary:
      'Venues that get inquiry bursts and need every tour request captured and answered the same day.',
    helpfulWorkflows: ['Inquiry and follow-up', 'Modern website build'],
  },
  {
    slug: 'boutique-studios',
    name: 'Boutique studios',
    summary:
      'Yoga, fitness, dance, and art studios that want a calmer booking flow and a website that matches the brand.',
    helpfulWorkflows: ['Website refresh', 'Booking or request workflow'],
  },
  {
    slug: 'custom-food-businesses',
    name: 'Custom cake and food businesses',
    summary:
      'Owners taking custom orders by DM and text who want a clear order form and an easier way to keep track.',
    helpfulWorkflows: ['Inquiry and follow-up', 'Admin automation sprint'],
  },
  {
    slug: 'gyms-and-education',
    name: 'Gyms and education programs',
    summary:
      'Memberships, classes, and trial-to-join paths that need fewer dropped inquiries.',
    helpfulWorkflows: ['Inquiry and follow-up', 'Modern website build'],
  },
  {
    slug: 'creators-and-consultants',
    name: 'Creators and consultants',
    summary:
      'Solo owners who want a polished site, a working contact path, and AI help that still sounds like them.',
    helpfulWorkflows: ['Modern website build', 'AI workflow audit'],
  },
] as const
```

```ts
// content/process.ts
export type ProcessStep = {
  step: number
  name: string
  summary: string
  detail: string
}

export const processSteps: readonly ProcessStep[] = [
  {
    step: 1,
    name: 'Free workflow review',
    summary: 'A short call to see where we can actually help.',
    detail:
      'We look at how inquiries, bookings, or admin work today and we say plainly whether we are a fit. No pitch deck, no pressure.',
  },
  {
    step: 2,
    name: 'Pilot project',
    summary: 'A small, scoped project with a clear timeline.',
    detail:
      'We agree on one outcome, a fixed scope, and a real timeline. You see working drafts early and stay in the loop the whole way.',
  },
  {
    step: 3,
    name: 'Handoff with documentation',
    summary: 'You keep what we build, fully documented.',
    detail:
      'Everything we build is yours. We write down how it works so you, or anyone you bring in later, can run it without us.',
  },
] as const
```

Naming rules for content:
- Always `as const`.
- Always export a TypeScript type alongside arrays (so the homepage components type their props from content).
- No JSX, no React imports.
- All strings free of em dashes, banned hype words, and exaggerated AI claims.

## 4. Recommended homepage component structure

`app/page.tsx` becomes a thin composition:

```tsx
import { Hero } from '@/components/marketing/home/Hero'
import { ProblemSection } from '@/components/marketing/home/ProblemSection'
import { ServicesOverview } from '@/components/marketing/home/ServicesOverview'
import { HumanInLoopSection } from '@/components/marketing/home/HumanInLoopSection'
import { LocalPositioning } from '@/components/marketing/home/LocalPositioning'
import { UseCasesPreview } from '@/components/marketing/home/UseCasesPreview'
import { ProcessSection } from '@/components/marketing/home/ProcessSection'
import { TrustSection } from '@/components/marketing/home/TrustSection'
import { FinalCta } from '@/components/marketing/home/FinalCta'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesOverview />
      <HumanInLoopSection />
      <LocalPositioning />
      <UseCasesPreview />
      <ProcessSection />
      <TrustSection />
      <FinalCta />
    </>
  )
}
```

Each section is a server component that:
- Imports its slice of content from `content/*`.
- Wraps content in the existing `Section` + `Container` primitives.
- Uses existing `Card`, `CardTitle`, `CardText`, `ButtonLink` primitives.
- Reads `primaryCta` and `secondaryCta` from `content/navigation.ts`.
- Receives no props (content lookup happens inside the component, so the homepage stays a thin list).

Section-by-section responsibility:

- **Hero** — eyebrow chip ("Pflugerville, TX · Founder-led"), H1, supporting line, two CTAs (primary + secondary), micro trust line ("We reply within one business day").
- **ProblemSection** — three short stacked "if this is your week, you are not alone" callouts (missed inquiries, repetitive admin, a website that no longer matches the business).
- **ServicesOverview** — heading + intro + 6-card grid wired to `services`. Each card shows name, outcome, summary, three highlights. Section CTA "See all services" links to `/services`. Per-card links are not rendered in 1B (avoids sending users to placeholder detail pages).
- **HumanInLoopSection** — anchors AI framing. One paragraph plus three short reassurances ("You see every reply before it goes out", "AI removes busywork, not your team", "Nothing autonomous without your permission").
- **LocalPositioning** — Pflugerville-led paragraph, list of service-area cities (rendered as plain inline text or chips), one sentence about remote work being available without it being the headline.
- **UseCasesPreview** — heading + 6-card grid wired to `useCases`. Per-card links not rendered in 1B (same reasoning). Section CTA "See all use cases" links to `/use-cases`.
- **ProcessSection** — three numbered steps from `processSteps`. Vertical stack on mobile, three-column row from `md:` up.
- **TrustSection** — four short trust callouts pulled from `site.commitments` plus a quiet "What we do not do" line ("We do not run fully autonomous AI. We do not claim clients we do not have."). No logos, no testimonials, no metrics.
- **FinalCta** — single-card section, repeats the primary CTA + email fallback. Same primary CTA target.

Server-component default everywhere. No `use client` in any home section. `ContactFormShell` is also a server component because it has no submit handler in 1B.

## 5. Mobile-first guidance for each homepage section

Global rules that bind every section:
- Build at 320 to 430 px first, then scale up with `sm:`, `md:`, `lg:`, `xl:`.
- No hero or section is full-height on mobile. Use `py-12 sm:py-16 lg:py-20` rhythm; the existing `Section` primitive already uses `py-14 sm:py-16 lg:py-20` which is fine.
- All grids are single-column at `< md:` and only fan out at `md:` and `lg:`.
- All buttons are full-width inside their parent on mobile (`w-full sm:w-auto`) and inherit `min-h-11` from `Button`. The primary CTA renders above the fold on a 375 px viewport.
- No fixed pixel widths. Use `max-w-*`, `w-full`, percentages.
- No horizontal scroll at 320 px. Test by setting devtools to 320 px and scrolling vertically only.

Per section:

- **Hero**: H1 is `text-3xl sm:text-4xl lg:text-5xl` to stay readable at 320 px. Eyebrow chip, H1, lede, then CTAs. CTAs stack vertically on mobile, sit side by side from `sm:`. Trust line sits directly under CTAs, not floated. No background video, no parallax.
- **ProblemSection**: Three callouts stack as a single column on mobile with comfortable spacing (`space-y-4` minimum). Optional 3-column on `lg:` only. Leaving `md:` single-column avoids cramped tablet portrait.
- **ServicesOverview**: One column on mobile, two on `md:`, three on `lg:`. Card body never exceeds a small-screen reading width. Highlights bullet list is `list-disc list-inside text-sm leading-6 text-slate-300`. The "See all services" link is its own full-width button below the grid on mobile.
- **HumanInLoopSection**: Paragraph plus three short reassurance items. Single column on mobile, two columns from `lg:` only if it visually balances; otherwise keep single.
- **LocalPositioning**: Service-area cities render as inline `text-sm` chips with `gap-2 flex-wrap`. They wrap cleanly at 320 px. No map embed in 1B.
- **UseCasesPreview**: Same grid behavior as ServicesOverview. Six cards on mobile is a long scroll, but acceptable for Phase 1B; this is preview content, not the deep-dive page.
- **ProcessSection**: Numbered step circles `h-10 w-10` minimum so they read on small screens. Vertical stack on mobile, three-column from `md:`. On mobile, each step is its own card with the number, name, and summary. Detail text sits directly under summary inside the card.
- **TrustSection**: Two-column from `sm:` for the four callouts so it does not feel sparse, single column at 320 px. Keep each callout to one short sentence.
- **FinalCta**: Single centered card. CTAs stack on mobile, side by side from `sm:`. Always above the footer with comfortable padding so the CTA is not crushed against the footer border.

Viewport pass before sign-off (per `AGENTS.md` checklist): 320, 375, 390, 430, 768, 1024, 1280. At each width verify: no horizontal scroll, header and primary CTA visible and tappable, cards stack as expected, no orphan headings, form fields are usable.

## 6. Copy and content guidance for Codex

Tone:
- Plain, warm, specific. Sixth-grade reading level. Sentences under 25 words.
- Active voice, present tense. Use "we" as the studio. Save "I" for the founder voice (not used in 1B copy).
- One local mention early (hero or trust section). Do not sprinkle "Pflugerville" through every paragraph.

Hard bans (the em-dash check enforces #1; the rest are Codex's responsibility):
1. **No em dashes (U+2014).** Replace with commas, periods, semicolons, "and", or rewrites.
2. **No banned hype words anywhere in visible copy.** Avoid: revolutionize, cutting-edge, world-class, bleeding-edge, unleash, unlock potential, synergy, leverage (as a verb), game-changing, next-generation, empowering the future.
3. **No exaggerated AI claims.** Never say AI "runs your business," "replaces your team," "thinks for itself," or operates fully autonomously.
4. **No invented social proof.** No client names, testimonials, logos, metrics, partnerships, or case studies. No stock-photo team grids. No AI-generated headshot rows.
5. **No pricing figures on the homepage.** Use "Free workflow review," "Pilot projects available," and "Custom quote after workflow review."
6. **No competing primary CTAs.** The only primary CTA is "Get a free workflow review" linking to `/contact?ref=workflow-review`. Secondary is "See how we help" linking to `/services`. Email fallback is allowed in the footer and final CTA card.

Framing rules:
- AI is **practical, AI-assisted, human-reviewed**. Always pair AI mentions with a human-in-the-loop reassurance.
- Outcome-led headlines beat tool-led headlines ("Catch every inquiry" beats "AI-powered lead capture").
- Local is personality, remote is reach. Lead with Pflugerville on trust surfaces; mention remote once in the local section as a quiet reach statement, not the headline.

When in doubt, choose the smaller change that stays closer to the brief. If a copy choice feels hypey or vague, rewrite it as a concrete promise.

## 7. Acceptance criteria

Functional:
- `app/page.tsx` renders nine sections in order with no console errors and no client components.
- All visible homepage copy is sourced from `content/*` modules, not hardcoded in JSX.
- `Header` and `Footer` continue to render correctly after the navigation source-of-truth move.
- `/contact` renders the form shell with all listed fields. The submit affordance is not active; the page displays a clear note that submission opens in a later phase and shows the `hello@iceratops.com` mailto CTA.
- Every modified `app/*` page exposes `metadata` via `buildMetadata` with a brief-aligned `description`.

Content and brand:
- Zero em dashes in any `.ts`, `.tsx`, or `.mdx` file under `app/`, `components/`, or `content/`.
- Zero banned hype words anywhere in homepage or contact copy.
- Zero invented testimonials, clients, logos, metrics, partnerships, or pricing figures.
- Primary CTA appears in: header, hero, final CTA section, footer. No other primary CTAs anywhere.
- The phrase "human in the loop," or an equivalent, appears in either the hero or the human-in-the-loop section, and again in the trust section.
- Pflugerville and the service-area cities appear in the local positioning section. Service area cities match `site.serviceArea` exactly.

Mobile-first:
- At 320, 375, 390, 430, 768, 1024, 1280 px there is no horizontal scroll on the homepage or `/contact`.
- The primary CTA in the hero is fully visible and tappable on a 375 px viewport without zoom.
- All buttons hit `min-h-11` (tap target).
- No element relies on hover for a primary action.

Technical:
- `components/nav/navigation.ts` is deleted and no imports of `@/components/nav/navigation` remain.
- No new dependencies added.
- No new routes added or removed.
- No backend code, no server actions, no environment variables introduced.
- No Git worktree was created or used during implementation.

## 8. Required checks Codex should run

Before handoff, run in order, all from the repo root with pnpm:

```bash
pnpm install
pnpm run lint        # biome check . && lint:copy (em-dash scan over app/, components/, content/)
pnpm run typecheck   # tsc --noEmit
pnpm run build       # full Next production build
pnpm run dev         # then walk the homepage and /contact in devtools at 320, 375, 390, 430, 768, 1024, 1280
```

All must pass. If `lint:copy` flags an em dash, fix the offending content file, do not bypass the script. If `typecheck` fails because a content type and a component prop disagree, fix the component, not the content type (content is the source of truth).

Manual visual check on the seven viewports is required. Note any tradeoffs in the PR description as the "Responsive Design" section in `AGENTS.md` requires.

After checks pass, update `CHANGELOG.md` under `## Unreleased` with a `### Phase 1B content and homepage` block listing pages, components, content, and any noteworthy build or lint adjustments.

## 9. Risks and scope creep to avoid

Risks (treat as risks only; do **not** implement fixes for these in Phase 1B):
- **Route slug divergence between brief and code.** `WEBSITE_BRIEF.md` lists `/industries`, `/industries/[slug]`, and `/work`. The repo has `/use-cases` and `/case-studies`. Phase 1B follows the existing slugs. Reconciling against the brief is a separate decision that should happen in a follow-up phase before any real industry or case-study content lands.
- **Missing service detail routes.** The brief lists six service detail pages; only three exist (`/services/ai-workflow-audit`, `/services/website-refresh`, `/services/inquiry-follow-up-systems`). Phase 1B does not add the other three. The service overview section therefore does not link individual cards out, only the section CTA to `/services`.
- **Service slug mismatch.** `inquiry-follow-up-systems` in the existing route differs from the brief's `inquiry-follow-up`. Phase 1B keeps the existing route. Treat as a separate rename decision.
- **Form posture.** A visible form with no active submission can confuse some users. Mitigation: the note above the submit affordance must be clear and the email fallback must be prominent.
- **Founder identity.** The homepage does not name the founder in 1B. The About page does, and that copy is out of scope for 1B. Confirm founder display name before About is written.

Scope creep to refuse during 1B:
- Adding a real contact form server action, email integration, spam protection, or analytics.
- LocalBusiness JSON-LD or any structured data beyond the existing metadata.
- New routes, including `/industries`, `/work`, or missing service detail pages.
- Pricing copy of any kind on the homepage.
- Testimonial UI, logo strip, or "trusted by" sections, even as placeholders.
- Animation work beyond what falls out of static layout.
- Design-system additions (new colors, new fonts, new utilities).
- Accessibility deep-pass beyond baseline (labels, alt text, focus rings, contrast). A full a11y audit is a separate phase.
- Editing the brief or other top-level docs.
- Creating or using a Git worktree.

## 10. Single polished Codex prompt

Copy and paste this to Codex as-is:

---

> You are implementing Phase 1B of the Iceratops marketing site. Phase 0 and Phase 1A are merged; mobile-first documentation is merged.
>
> **Branching rule:** Create or use a normal Phase 1B branch off `master` in the main checkout. **Do not create or use a Git worktree.** Existing entries under `.claude/worktrees/` are being phased out per `AGENTS.md` and `CLAUDE.md`. All Phase 1B work happens on a regular branch in the main checkout.
>
> **Read first**, in order:
> 1. `WEBSITE_BRIEF.md`
> 2. `AGENTS.md`
> 3. `CLAUDE.md`
> 4. `CHANGELOG.md`
>
> Treat the brief as the source of truth. If anything in this prompt conflicts with the brief, follow the brief and pause for guidance.
>
> **Goal:** Build the typed content model and a real, content-driven homepage. Add a `/contact` form UI shell with no backend behavior. Improve route metadata. No new routes, no backend, no integrations.
>
> **Create the following content modules** (pure TypeScript, `as const`, no JSX, no em dashes, no banned hype words, no exaggerated AI claims, no invented social proof, no pricing figures):
> - `content/site.ts` — site-wide constants (name, url, descriptions, city, state, stateAbbr, serviceArea, contact.email, contact.responseCommitment, commitments).
> - `content/navigation.ts` — `primaryCta`, `secondaryCta`, `primaryNavItems`, `footerNavGroups`. This replaces `components/nav/navigation.ts` as the single source of truth.
> - `content/services.ts` — exactly six approved services (AI Workflow Audit, Website Refresh, Modern Website Build, Inquiry and Follow-Up System, Booking or Request Workflow, Admin Automation Sprint), each with `slug`, `name`, `outcome`, `summary`, `highlights` (three short bullets).
> - `content/use-cases.ts` — six homepage-preview audiences covering local service businesses, event venues, boutique studios, custom cake and food businesses, gyms and education programs, and creators and consultants. Each has `slug`, `name`, `summary`, `helpfulWorkflows`.
> - `content/process.ts` — three steps: free workflow review, pilot project, handoff with documentation. Each has `step`, `name`, `summary`, `detail`.
>
> Export typed shapes alongside arrays so components can type their props from content.
>
> **Update navigation and SEO source-of-truth**:
> - Delete `components/nav/navigation.ts`. Update `components/nav/Header.tsx` and `components/nav/Footer.tsx` to import from `@/content/navigation`.
> - In `lib/seo.ts`, change `siteConfig.description` to read from `content/site` (single source of truth). Leave the rest of `buildMetadata` alone.
>
> **Build homepage sections under `components/marketing/home/`**, all server components, no `use client`, no client-side state. Use existing primitives (`Section`, `Container`, `Card`, `CardTitle`, `CardText`, `Button`, `ButtonLink`) and the existing `glass-card`, `gradient-text`, `font-orbitron` utilities.
> 1. `Hero.tsx` — eyebrow ("Pflugerville, TX · Founder-led"), H1, supporting line, primary + secondary CTAs from `content/navigation`, micro trust line from `site.contact.responseCommitment`.
> 2. `ProblemSection.tsx` — three short stacked callouts (missed inquiries, repetitive admin, outdated website).
> 3. `ServicesOverview.tsx` — heading + intro + 6-card grid wired to `services`. Single column on mobile, two columns at `md:`, three at `lg:`. Cards show `name`, `outcome`, `summary`, three `highlights`. Per-card links are not rendered in 1B; the section CTA "See all services" links to `/services`.
> 4. `HumanInLoopSection.tsx` — paragraph + three reassurances ("You see every reply before it goes out", "AI removes busywork, not your team", "Nothing autonomous without your permission").
> 5. `LocalPositioning.tsx` — Pflugerville-led paragraph, the service-area cities rendered as wrapping chips, one quiet sentence about remote work being available.
> 6. `UseCasesPreview.tsx` — heading + 6-card grid wired to `useCases`. Same per-card linking rule as ServicesOverview. Section CTA "See all use cases" links to `/use-cases`.
> 7. `ProcessSection.tsx` — three numbered steps from `processSteps`. Vertical stack on mobile, three-column from `md:`.
> 8. `TrustSection.tsx` — four short callouts from `site.commitments` plus a quiet "What we do not do" line. No logos, no testimonials, no metrics.
> 9. `FinalCta.tsx` — single centered card, primary CTA + email fallback.
>
> Replace `app/page.tsx` so it composes these nine sections in order and exposes brief-aligned metadata via `buildMetadata`.
>
> **Contact form UI shell**:
> - Create `components/marketing/ContactFormShell.tsx` as a server component. No `use client`. No `onSubmit`. No server action.
> - Fields: Name (required), Email (required, `type="email"`), Phone (optional, `type="tel"`), Business name (optional), "What you'd like help with" (radio group with the six services, plus "Not sure yet"), "Tell us about your business" (textarea), "Preferred way to be contacted" (radio, email or phone).
> - All labels are visible. All inputs have associated `htmlFor`/`id` pairs and ARIA where needed.
> - Where the submit button would go, render a clear note: "We are finishing the secure submission flow. To start your free workflow review today, email hello@iceratops.com. We reply within one business day." Below the note, render a primary `ButtonLink` to `mailto:hello@iceratops.com?subject=Free%20workflow%20review`.
> - Replace the body of `app/contact/page.tsx` with intro copy plus the form shell. Keep `buildMetadata`.
>
> **Route metadata polish** (modify `metadata` only; do not touch route bodies for these):
> - `/`, `/contact`, `/about`, `/services`, `/use-cases`, `/services/ai-workflow-audit`, `/services/website-refresh`, `/services/inquiry-follow-up-systems` — give each a brief-aligned `description` via `buildMetadata`.
>
> **Content and brand rules** (enforce in every visible string):
> - No em dashes anywhere in `.ts`, `.tsx`, `.mdx` under `app/`, `components/`, `content/`. The `lint:copy` script will catch them.
> - No banned hype words: revolutionize, cutting-edge, world-class, bleeding-edge, unleash, unlock potential, synergy, leverage (as a verb), game-changing, next-generation, empowering the future.
> - No exaggerated AI claims. AI is practical, AI-assisted, and human-reviewed. Pair every AI mention with a human-in-the-loop reassurance.
> - No invented testimonials, clients, logos, metrics, partnerships, or pricing figures.
> - One primary CTA across the site: "Get a free workflow review" linking to `/contact?ref=workflow-review`. No competing primary CTAs.
> - Plain language, sixth-grade reading level, sentences under 25 words, active voice.
> - "We" is the studio. Do not introduce a named founder in 1B.
>
> **Mobile-first rules** (must hold at 320, 375, 390, 430, 768, 1024, 1280 px):
> - Build mobile layouts first, then add `sm:`, `md:`, `lg:`, `xl:` variants.
> - No horizontal scroll at any listed width.
> - Hero CTA visible and tappable on a 375 px viewport without zoom.
> - All buttons keep `min-h-11`. CTAs are `w-full sm:w-auto` inside their parent.
> - Grids are single-column at `< md:`. No fixed pixel widths.
>
> **Required checks before handoff**, run from repo root:
> ```
> pnpm install
> pnpm run lint
> pnpm run typecheck
> pnpm run build
> pnpm run dev   # walk homepage and /contact in devtools at 320, 375, 390, 430, 768, 1024, 1280
> ```
> All must pass cleanly. Manual visual check on the seven viewports is required. Do not bypass `lint:copy`.
>
> **Changelog**: append a `### Phase 1B content and homepage` block under `## Unreleased` in `CHANGELOG.md` listing pages updated, components added, content added, and any noteworthy build or lint adjustments.
>
> **Out of scope for 1B**: contact form server action, email integration, LocalBusiness JSON-LD, OG image route, per-service or per-use-case detail content, About page rewrite, pricing UI, new routes, the `/industries` rename, the `/work` rename, the `inquiry-follow-up-systems` slug rename, animation polish, full accessibility audit. If you notice issues in any of those areas, note them in the PR description, do not implement.
>
> **Process rules**:
> - Do not create or use a Git worktree at any point. All work stays on the regular Phase 1B branch in the main checkout.
> - Do not touch `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`, `biome.json`, `next.config.ts`, or `netlify.toml` unless a check fails and the fix is unambiguous. If a config change looks needed, pause and ask.
> - Small, frequent, conventional commits (`feat:`, `chore:`, `docs:`). Commit content modules before components that consume them, and the homepage composition last.
> - Keep PR scope to Phase 1B only.
