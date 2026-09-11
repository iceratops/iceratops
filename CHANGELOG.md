# Changelog

This project follows a lightweight changelog. We track meaningful work during the website rebuild so future Claude, Codex, and ChatGPT sessions can quickly understand what changed without reading every commit. Entries are short, written in plain language, and grouped by batch.

We do not track tiny copy edits, formatting-only changes, experimental work that is reverted immediately, or agent conversation summaries unless they affect the repo.

## Unreleased

### Verification and preview regression coverage

- Added Node tests for multilingual contact validation and all design preview exports, using existing TypeScript and React dependencies. Reproduced and repaired five previews missing language context; refreshed preview CTA and form metadata.
- Added a shared `check` command and a GitHub Actions workflow for lint, typecheck, tests, build, and HTTP site validation. Netlify now runs checks before building, and HTTP validation has a per-request timeout.
- Selected Node 24 LTS through `.nvmrc` and the package engines policy, shared by local development, GitHub Actions, and Netlify.
- Documented the existing Netlify notification hooks and a small live-monitoring plan. Continuous uptime alerts, browser submission checks, and actual Netlify delivery monitoring still require operational setup.
- Validated on Node 24.21.0: all 28 tests, lint, typecheck, production build, and the workflow's 54-page HTTP check passed locally. GitHub-hosted execution and deployment remain pending.

### Repository development guide

- Replaced the root agent guide with a concise source map and current routing, translation, form, and verification boundaries; shortened Claude's guide to its review role.
- Added a README covering setup, existing commands, build-time environment behavior, Netlify integration, validation limits, and focused follow-up tasks.
- Corrected stale design-preview instructions and simplified the changelog entry template. Application source, dependencies, and deployment configuration are unchanged.
- Baseline and final lint, typecheck, build, and 54-page site validation passed. Recorded existing 404 server diagnostics and preview integration gaps for separate work.

### Search identity and service metadata

- Added the documented Pflugerville founding city to Organization structured data and a stable business identifier. This describes company origin, not a public office address.
- Added homepage WebSite data and translated Service data on Services, linked to the same business identity and drawn from existing visible copy.
- Aligned sitemap language alternatives with the page metadata's English fallback and added rendered structured-data checks across all nine languages.
- Preserved the visual design, visible copy, navigation, and worldwide positioning. City-specific acquisition content and Business Profile setup still depend on the target market and in-person service model.

### Navigation and URL consistency

- Aligned the menu and browser titles around Services (`/services`), Approach (`/approach`), About (`/about`), and Start a project (`/start-a-project`).
- Replaced the Approach anchor with a dedicated page covering each project stage and its deliverable, translated into all nine languages. The homepage keeps its short overview and links to the full page.
- Moved the inquiry form and confirmation to `/start-a-project` and `/start-a-project/success`. Removed the old contact redirects and workflow-review routes entirely; both retired route families return 404 in every language at the founder's request.
- Updated the sitemap to 54 public pages and added checks for navigation labels, active states, and removed URLs.

### Static website translations

- Added English, Arabic, Urdu, Hindi, Spanish, French, Portuguese, Simplified Chinese, and Traditional Chinese across public pages, metadata, navigation, the inquiry form, confirmation, and the fictional workflow demo. Arabic uses Saudi-oriented wording and the simple selector label العربية.
- Added a native-name language selector, saved translation catalogs, static language URLs, reciprocal language metadata, and a 45-page multilingual sitemap. No translation subscription, runtime AI calls, or new package dependencies are required.
- Added right-to-left Arabic and Urdu layouts, self-hosted script fonts, and wrapping for longer translated copy. Country search displays local names while preserving English names and country codes in submissions.
- Inquiry forms suggest the current language for written replies and include the site language in the Netlify payload. Replies themselves remain part of the team's operational workflow; the website does not automatically translate correspondence.
- Added a static multilingual 404 with native-language home links that work without JavaScript. This uses Next.js 15’s experimental `globalNotFound` convention for multiple root layouts.
- Added catalog, placeholder, routing, rendered-copy, and multilingual form-contract checks. Translations are initial drafts, ready for native-speaker editorial review.

### Multilingual inquiry readiness

- Replaced the remaining English-only recommendation wording and recorded the founder's language-inclusive direction in the website brief.
- Added an optional preferred written reply language, Unicode-friendly free-text fields, and automatic right-to-left input direction. International email domains are normalized for delivery; Unicode mailbox names still require a different email address.
- Localized country labels follow the document language while submissions retain the English country name and a stable country code. Country search accepts localized names, English names, and codes.
- Updated the Netlify form detector, form-contract validation, and privacy disclosure. This initial form-readiness work was followed by the static website translations above. Written correspondence still needs an operational reply workflow.

### Project inquiry form improvements

- Split first and last names, with last name optional, while preserving the combined name in Netlify submissions for existing integrations.
- Replaced free-text country entry with a searchable country-and-territory selector with keyboard navigation, and added inline validation, field length limits, and a project-details counter.
- Added submission timeout and duplicate-submit protection. Local previews validate entries without posting or implying an inquiry was received.
- Updated the Netlify detector, form-contract validation, and privacy copy to match the fields.

### Broader offers and worldwide availability

- Simplified the hero, footer, About, and metadata around founder-led delivery and worldwide project availability. Kept the factual Texas founding sentence on About and founding-location metadata.
- Replaced public service prices and detailed pilot terms with focused projects, custom software and systems, and ongoing support.
- Broadened the hero and Services visuals to applications, integrations, and data. Moved the booking demonstration below the main company story and made it expandable on demand.
- Replaced blanket ownership promises with clear deliverables, documentation, and agreed ownership and software licensing terms.
- Updated the founder-approved website brief, retaining the four capability groups and reserving product-specific pricing and pages for concrete ready-made software offerings.

### Global technology positioning

- Repositioned Iceratops as a Texas-founded, founder-led technology company available to clients in the United States, Saudi Arabia, and worldwide.
- Expanded visible capabilities to custom software and digital products, websites and digital experiences, workflow automation and AI, and systems and integrations.
- Reframed the global CTA around starting a project while retaining the free workflow review as an optional entry point on the existing inquiry route.
- Separated transparent defined-project starting prices from custom engagements that require an initial technical review.
- Updated About, contact, privacy, footer, metadata, and Organization JSON-LD to match the new positioning without claiming an international office or legal presence.

### Reference-led hero motion

- Turned the homepage hero mockup into a restrained website-to-inquiry-to-booked signal flow, adapting the reference document's ordered transformation idea without adding a canvas sequence or animation dependency.
- Kept the effect decorative, tablet-and-desktop only, and fully static when reduced motion is preferred.

### Conversion bridge and working-demo readiness

Added the final conversion-focused offer and intake updates without changing the site structure or visual system.

#### Content and conversion
- Added a neutral One-Workflow Pilot offer at $1,250 while preserving the $5,000 flagship treatment and the approved premium pricing anchors.
- Added restrained anonymous founder credibility on About and conditional pilot language on Services and the Free workflow review page.
- Added conditional secondary working-demo links near the homepage example and Services workflow section. The links stay hidden until a safe `WORKING_DEMO_URL` is configured at build time.

#### Forms and privacy
- Added an optional website URL field to the Netlify workflow-review form contract and updated the privacy disclosure.
- Extended the site validation check to cover the new field and require consistent working-demo links across both configured surfaces.

### Sequential homepage inquiry story

Replaced the dense multi-surface inquiry demo with one contained story that moves from customer question to scheduled service without changing the rest of the homepage.

#### Components and interaction
- Added an explicit eight-scene, 25-second sequence for composing, sending, inbox arrival, an approved reply, customer confirmation, calendar booking, technician handoff, and the final outcome. Slowed the type-on effect and delayed the blinking cursor until the message is complete so every scene has time to register. The service-state progress animation now reaches its complete state and holds before the final payoff.
- Added a compact Inquiry, Reply, Confirmed, and Service progress track plus subtle Pause, Resume, and Replay controls.
- Kept AI behavior bounded by an approved response rule and made the fictional business's control over automatic sending explicit.
- Aligned the Services workflow and offer copy with that model: AI drafts and sends routine replies through owner-approved rules, while sensitive or unusual replies can still receive human review.

#### Accessibility, motion, and mobile
- Added stage-level viewport gating, browser-tab and window visibility pausing, remaining-time preservation, and complete observer, listener, and timeout cleanup.
- Added a same-height four-card server fallback that also becomes the static `prefers-reduced-motion` experience, plus a stable screen-reader transcript and native keyboard controls.
- Rebuilt the stage mobile-first with compact progress dots, 44px controls, 16px control text, and no internal horizontal scrolling.
- Kept the production content security policy strict while allowing the Next.js development runtime needed for the animated example to hydrate during local previews.

### Customer-readiness audit and consolidation

Comprehensive route, content, conversion, accessibility, privacy, and production-surface cleanup that preserves the existing Iceratops visual identity.

#### Content and conversion
- Reduced the homepage from ten sections to seven distinct jobs. Removed the duplicate Before and After, Flagship Offer, and Human Reviewed AI sections while retaining the interactive example, pricing context, process, founder-led trust, and primary CTA.
- Replaced absolute outcome promises with practical capability language, aligned the four-step process to Review, Plan, Build, and Handoff, and standardized conversion labels around the Free workflow review.
- Tightened About to one studio story plus concrete commitments. Renamed the approved Admin Automation Sprint consistently.

#### Forms and privacy
- Expanded the Free workflow review page to explain what is reviewed, what the customer receives, what happens next, and the one-business-day response window.
- Added clearer form guidance, an announced busy state, consistent submit copy, a visible privacy notice, and an explicit email fallback when JavaScript is unavailable. The online submit control waits for hydration because Netlify's current Next.js runtime requires AJAX form submission.
- Added a public `/privacy` route based on the site's actual Netlify Forms flow and linked it from the form and footer. Production form receipt and the success redirect were verified on July 13, 2026 with one clearly marked test submission.

#### Accessibility, SEO, and security
- Added a pause control and interaction-aware auto-pause to the interactive demo, strengthened small-text contrast, corrected Services heading levels, trapped focus inside the open mobile drawer, and kept the primary CTA visible in the mobile header.
- Added a no-JavaScript mobile navigation fallback and made scroll-reveal content fully visible before hydration or if the client bundle fails.
- Added a branded, noindex 404 and removed inherited canonicals from noindex utility pages by separating global and route metadata ownership.
- Added security headers to both Next-rendered routes and Netlify static assets, kept scripts and connections first-party, allowed only Netlify's app origin to frame its deploy-preview review drawer, removed the `X-Powered-By` header, served the manifest with the correct media type, and aligned browser theme color with the dark visual identity.

#### Validation and cleanup
- Removed three verified-dead homepage components and added a no-dependency `validate:site` check for route inventory, internal links, redirects, metadata, the Netlify form contract, and response headers.
- Removed two abandoned legal/compliance templates that contained placeholders and false Google Analytics and UK regulator assumptions.
- Pinned the transitive PostCSS runtime to patched version 8.5.14 after the production dependency audit found a moderate advisory in Next.js's older bundled version.
- Reconciled `WEBSITE_BRIEF.md` with the intentionally small public route surface so obsolete placeholder routes are not treated as launch requirements.

### Production-readiness pass (architecture, mobile UX, cleanup)

Full architecture verification and mobile UX repair ahead of deploy. Keeps the approved visual direction and offer; fixes structural and responsive defects.

#### Mobile UX
- Fixed real horizontal overflow on the homepage: grid items containing truncated or carousel content (`InquiryDemo` columns and cards, `BeforeAfter` cards) now carry `min-w-0` so their intrinsic width can no longer push the page wider than the viewport. Verified zero overflow at 320/360/375/390/414/430 on all five routes.
- Demo mock inputs render at 16px on phones (11px kept from `sm:` up) so iOS Safari no longer auto-zooms on focus. Channel dock is a 2x2 grid with 44px tap targets on phones (compact 4-across from `sm:` up); mock send buttons got taller phone tap areas; tiny demo captions bumped to readable sizes; demo inputs and dock buttons got `aria-label`/`aria-pressed`.
- Header: menu toggle enlarged to 44px, drawer closes on any route change (including the logo link) and on crossing the desktop breakpoint, body scroll locks while the drawer is open, Escape and backdrop dismissal return focus to the toggle. Active-nav matching is exact instead of `startsWith`. Footer links gained padded tap areas.
- The demo's auto-advance interval now pauses while the section is off screen.

#### Motion and performance
- Fonts moved from a render-blocking Google Fonts CSS `@import` to self-hosted `next/font` (also removes the only third-party runtime request).
- Reveal animation is JS-failure safe: content remains fully visible before hydration, JavaScript adds only a small vertical offset, and a 3s fallback removes that offset if the bundle never runs.
- Smooth anchor scrolling behind `prefers-reduced-motion: no-preference`; the demo carousel slide honors reduced motion.

#### Architecture and cleanup
- Shared `workflowReviewFormId` constant so the header CTA anchor and the form card id cannot drift.
- Added a static `/__forms.html` detector for Netlify form discovery. The later customer-readiness audit replaced its unsupported no-JavaScript full-page submission claim with an explicit email fallback because the current Next.js runtime requires AJAX submission.
- SEO: twitter card downgraded to `summary` to match the square logo image, canonical omitted on noindex pages, success page retitled "Request received", sitemap no longer stamps `lastModified` on every build, home title now carries the studio descriptor and locality.
- Baseline security headers added in `netlify.toml` (nosniff, frame deny, referrer policy, permissions policy).
- Dead code removed: `.glass-card` CSS and unused CSS variables, all unused Tailwind theme extensions, `Section` header props, `PageHero` CTA machinery, `Button` ghost variant, `Container` wide size, `CheckList` tones, `Eyebrow` centered variant, `site.state`, `ServiceAreaCity`; em-dash script scan list corrected.

#### Content
- "Most chosen" pricing badge replaced with "Flagship" (no invented popularity claims). Demo business renamed to the clearly fictional "Acme Plumbing Co." with a reserved `.example` domain.
- Human-review copy reconciled to one tiered posture site-wide: AI handles routine busywork, a person approves anything that matters. `WEBSITE_BRIEF.md` pricing direction updated to record the already-approved homepage "from" pricing anchors.

### Cohesion refinement pass (navigation, motion, conversion route)

Targeted fixes after reviewing the Polish Preview build, keeping the approved visual direction, homepage structure, flagship offer, privacy posture, and cleanup discipline.

#### Navigation and CTA
- Collapsed nav to one shared source (`headerNavItems`): desktop header and mobile drawer now show the same intent, Services and About plus the Free workflow review CTA. Contact is no longer a nav item anywhere (removed from the mobile drawer and the footer). The footer now lists Services, About, a Free workflow review link, and the email.
- The header CTA no longer disappears on the conversion page. On the form page it stays visible and scrolls to the form (`#workflow-review-form`) instead of navigating away; same behavior on desktop and mobile.
- The mobile drawer now opens and closes with a smooth height-and-opacity transition plus a fading backdrop, closes on link click and on Escape, uses `inert` while collapsed, and respects reduced motion.

#### Conversion route
- Renamed the contact route to the conversion-framed `/free-workflow-review` (plus `/free-workflow-review/success`). `/contact` and `/contact/success` 301-redirect to the new paths. The Netlify form name stays `contact` internally (form mechanic). Public labels, headings, and metadata now read Free workflow review, and the success copy acknowledges the workflow review request.
- Hardened the spam honeypot: hidden from humans and assistive tech (`aria-hidden`, `tabIndex={-1}`, `autoComplete="off"`), with neutral label text.

#### Motion and ambient polish
- Promoted the homepage twinkle and glow to a shared `AmbientBackground` rendered once at the shell level, so every route carries the same starfield and drifting glow (removed the hero-local copy). Added an `app/template.tsx` page-entrance transition so navigations fade and lift in consistently. Extended scroll reveals to the Services, About, and Free workflow review pages. All of it respects `prefers-reduced-motion`.

#### Inquiry channel copy
- Broadened the demo and hero language so the shown platforms read as examples, not the full scope. The demo labels its tabs "Sample channels (+ WhatsApp, Instagram, Google, and more)" and names the broader set (website forms, calls, texts, email, WhatsApp, Instagram, Facebook, Google Business Profile, booking tools, and more), framed as "we map the places your real requests already come from."

### Implement the Iceratops Polish Preview design

Implemented the approved `Iceratops Polish Preview.dc.html` Claude Design project as the production marketing site. The Claude Design preview is the visual and copy source of truth for this batch.

#### Pages
- Rebuilt the homepage as ten faithful sections: hero (capture command center visual), what we build, before and after, flagship offer (the Website + Follow-Up System), human-reviewed AI, an interactive how-it-works demo, a five-step process (Review, Map, Build, Test, Handoff), founder-led trust, pricing anchors, and a final CTA.
- Trimmed the `/services` page to match the design: removed the extra "Six ways we usually help" heading so the hero leads straight into the service grid, and dropped the hero CTA button.
- Kept `/about`, `/contact`, and `/contact/success` as-is; they already matched the new design language.

#### Components
- Added home sections: `Hero` (rewritten), `WhatWeBuild`, `BeforeAfter`, `FlagshipOffer`, `HumanReviewedAi`, `InquiryDemo` (interactive client component), `ProcessSteps`, `FounderLed`, `Pricing`, and a rewritten `FinalCta`.
- Added `RevealOnScroll`, a small client controller that fades sections in on scroll, respects `prefers-reduced-motion`, re-scans on navigation, and has a noscript fallback so content is always visible.
- Removed the now-unused `WhatWeDo`, `ProcessSection`, `WhyIceratops`, and `HeroPreview` components.

#### Content and positioning
- Used the approved flagship offer (the Website + Follow-Up System) and pricing anchors from the design: from $5,000 for the system; Website Refresh from $1,500; Modern Website Build from $3,500; Admin and Workflow Automation from $2,500; ongoing support from $300 per month. No fixed prices on the homepage hero, in line with the brief.
- Aligned the Admin Automation service entry to the design copy. Removed the unused `homePage` content object, `content/process.ts`, and dead content fields and type aliases.
- Kept credibility studio-level and anonymous: no founder name, photo, social links, or biography. No invented testimonials, clients, logos, metrics, or case studies.

#### Navigation
- Split nav sources: the desktop header shows Services and About plus the Free workflow review CTA; the footer and mobile drawer keep Services, About, Contact, and the email.

#### SEO
- Refreshed the homepage title and description to the new positioning and wired favicons and the web manifest into metadata. Updated `site.webmanifest` to drop stale naming.

#### Design system
- Added scroll-reveal and interactive-demo motion utilities to `globals.css`, all gated behind `prefers-reduced-motion`.

#### Build, lint, deploy
- Validated with `pnpm run lint`, `pnpm run lint:copy`, `pnpm run typecheck`, and `pnpm run build`, plus desktop and mobile (390px) preview checks.
- Removed unused public assets: `linktree.svg`, `thevillageforher-preview.svg`, and the legacy `browserconfig.xml` and `mstile-150x150.png` tile pair.

### Simplify the homepage into a front door
- Cut the homepage to five sections: hero, three-card "what we help with", short "how it works", brief founder-led trust, final CTA.
- Removed the homepage Services overview section (full service grid plus "See all services" CTA) so the homepage no longer duplicates `/services`. Deleted the now-unused `ServicesOverview` component and the unused `homePage.services` content.
- Trimmed the homepage process section to step names and one-line summaries; the full Review, Plan, Build, Handoff detail stays on `/process`.
- Reduced the homepage founder-led trust section to a short narrative and removed its four-card grid, which duplicated the `/about` "How we operate" values. Dropped the now-unused `homePage.whyIceratops.points` content. The values grid stays on `/about`.
- Updated `WEBSITE_BRIEF.md` with the homepage scope and the short-vs-full process rule.

### Demote Process from global navigation
- Removed Process from the global nav and footer. Nav is now three items: Services, About, Contact. The `/process` page stays reachable and in the sitemap but is no longer linked from nav.
- Reordered `/services` to lead with the offers (services grid, then packages). Removed the duplicated four-step process card module from the top of the page and the hero "See our process" CTA.
- Kept process on `/services` only as a brief "How we work" narrative placed lower on the page, so the full Review, Plan, Build, Handoff module is not duplicated across nearby pages or made to feel circular.
- Updated `WEBSITE_BRIEF.md` navigation and information-architecture rules to match.

### Emergency credibility cleanup
- Simplified global navigation to Services, Process, About, Contact, and reduced the footer to those four links plus the hello@iceratops.com email.
- Added a `/process` page and standardized the process to four steps: Review, Plan, Build, Handoff.
- Replaced the contact email shell with a working Netlify Forms submission (static form definition in `public/__forms.html`, honeypot, and a `/contact/success` thank-you page), with a visible email fallback under the form and in the footer.
- Shortened the homepage to six sections: Hero, What we do, Services, Process, Why Iceratops, CTA. Removed the problem, human-in-loop, local, use-cases preview, and defensive trust sections.
- Removed defensive, shame-based, and internal or roadmap copy across the site. Renamed the demo pattern to Example builds with calm, honest framing. Removed the "What we do not do" section from the services overview and replaced fake-proof exclusions on detail pages with real scope items.
- Unlinked Demos, Case Studies, Resources, Use Cases, and packages from global navigation and footer. Those pages remain reachable but are not pointed at until they are strong enough to help sales.
- Toned down the background gradient, glow, and card shadows for a calmer, more editorial feel.
- Validated with `pnpm run lint`, `pnpm run lint:copy`, `pnpm run typecheck`, and `pnpm run build`, plus local viewport checks.
- Follow-up: confirm Netlify Forms submission and the thank-you redirect on a Netlify deploy.

### Phase 1C services and use cases pages
- Replaced the `/services` placeholder with a content-driven overview page showing all six services.
- Replaced the `/use-cases` placeholder with a content-driven overview page showing all six use cases.
- Added four shared service and use-case card/grid components for overview pages and homepage previews.
- Refactored the homepage services and use-case previews to use the shared card/grid components.
- Validated with `pnpm install`, `pnpm run lint`, `pnpm run typecheck`, and `pnpm run build`.

### Phase 1B content and homepage
- Added typed content modules for site constants, navigation, services, use cases, and process steps.
- Replaced the placeholder homepage with nine content-driven marketing sections and shared CTA wiring.
- Added the `/contact` form UI shell with visible labels, service radio options, and a mailto fallback only.
- Polished route metadata for home, contact, about, services, use cases, and existing service detail pages.
- Validated with `pnpm install`, `pnpm run lint`, `pnpm run typecheck`, `pnpm run build`, and local viewport checks.

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

### Documentation
- Refined repo docs to make mobile-first responsive design an explicit project requirement. Added a "Primary surface" section to `WEBSITE_BRIEF.md`, a "Responsive design requirements" section and viewport testing checklist to `AGENTS.md`, and mobile review responsibilities to `CLAUDE.md`. Visitors will arrive mostly from phone-based outreach (Instagram DMs, text, email, local search), so mobile browser UX is treated as the first impression.
- Refactored `AGENTS.md` into a compact operating guide and `CLAUDE.md` into a focused role guide, folding the mobile-first additions into the new structure.
- Switched the project workflow to a single linear branch model off `master`. Agents must not create new git worktrees; existing entries under `.claude/worktrees/` are being phased out. Recorded in `AGENTS.md` (Implementation Guardrails) and `CLAUDE.md` (Claude should not).

## 0.1.0 — Documentation setup

Initial repo documentation for the rebuild. No code or content changes yet.

- Added `WEBSITE_BRIEF.md` as the canonical source of truth for positioning, services, tone, content rules, pricing direction, and trust posture.
- Added `CLAUDE.md` describing Claude's role (architecture, content strategy, copy review, SEO review, implementation review) and what Claude does not do in this repo.
- Added `AGENTS.md` describing agent ownership, target stack (Next.js App Router, TypeScript, Tailwind), build and lint commands, em dash CI rule, quality gates, commit conventions, and branch and PR conventions.
- Added `CHANGELOG.md` with the format guide below.

## How to add a future entry

When a meaningful batch ships, add a `### Short batch title` under `## Unreleased` and move it to a versioned section on release. Use a few bullets describing the resulting behavior, affected areas, and any lasting migration or validation limitation. Older entries preserve historical decisions; current architecture and commands live in `README.md` and `AGENTS.md`.

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
