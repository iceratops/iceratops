# AGENTS.md

Iceratops is a multilingual marketing site: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 3, and Netlify. This is a single app.

## Sources of truth

- [WEBSITE_BRIEF.md](WEBSITE_BRIEF.md): founder-owned positioning, copy, brand, CTA, and route policy. Changes to that direction require the founder's explicit approval.
- [README.md](README.md): setup, commands, architecture boundaries, environment, and verification details.
- [CHANGELOG.md](CHANGELOG.md): meaningful batches, newest first under Unreleased. Older entries describe history, not current requirements.
- [CLAUDE.md](CLAUDE.md): Claude's architecture and content review role. Codex owns implementation and validation.

## Repository map

| Path | Responsibility |
| --- | --- |
| `app/(english)/`, `app/[locale]/` | Thin route wrappers for unprefixed English and statically generated translations; each has a root layout. |
| `app/global-not-found.tsx`, `app/sitemap.ts`, `app/robots.ts` | Global 404 and metadata routes. The 404 owns its document because the app has multiple root layouts. |
| `components/pages/` | Shared page implementations used by both route trees. `ContactPage.tsx` serves `/start-a-project`. |
| `components/layout/`, `components/nav/`, `components/i18n/` | Document, fonts, site shell, navigation, language provider, and localized links. |
| `components/marketing/`, `components/primitives/`, `components/seo/` | Marketing sections, reusable UI, and JSON-LD. |
| `content/` | Site copy, services, navigation/CTA, country data, and saved translation catalogs in `locales/`. Some copy also lives in components and metadata helpers. |
| `lib/` | SEO/page metadata, locale routing and translation, contact validation, demo URL validation, and small shared helpers. |
| `app/globals.css`, `public/` | Brand styles/animations and static assets, including Netlify's `__forms.html` detector. |
| `scripts/` | Copy lint, translation assertions, contact/preview tests, and HTTP site validation. |
| `.design-sync/` | Auxiliary component-preview inputs, outside the app build/typecheck; `pnpm test` checks preview rendering. Read its [notes](.design-sync/NOTES.md) before reuse. |

## Change boundaries

- Keep page bodies shared in `components/pages/`; route wrappers supply locale and metadata. English URLs stay unprefixed. Retired routes stay 404 as specified in the brief.
- When English source copy changes, update its keys and translations across all nine `content/locales/*.json` catalogs; preserve placeholders. Use `getTranslator` in server components and `useI18n` in client components. Use `LocalizedLink` or `localizedPath` for internal links; Arabic and Urdu are RTL.
- Contact field changes span `components/marketing/ContactForm.tsx`, `lib/contact-form.ts`, `public/__forms.html`, and `scripts/check-site.mjs`. Preserve the `contact` form name and compatibility fields; never log inquiry PII.
- Security headers exist in both `next.config.ts` and `netlify.toml`. Keep production policies aligned; development permits script evaluation for Next tooling.
- Preserve the brief's dark slate/purple gradient, yellow accent, Orbitron/Inter typography, mobile-first layout, and single primary CTA, **Start a project**. No invented social proof or em dashes in website copy.

## Development and verification

Use Node 24 from `.nvmrc` and pnpm `10.29.1` from `package.json`: `pnpm install --frozen-lockfile`, then `pnpm run dev`. Netlify and GitHub Actions read the same Node version file. See the [command reference](README.md#commands) for targeted checks and production startup.

- Before handing off application changes, run `pnpm run check` (lint, typecheck, and tests), then `pnpm run build`. Lint includes copy and translation checks. Build alone does not run those repository checks.
- For routes, metadata, navigation, translations, forms, headers, or demo-link configuration, also run `pnpm run validate:site` against a built server. Match `WORKING_DEMO_URL` to the build; the validator does not load `.env.local`. See [site validation](README.md#site-validation).
- `pnpm test` uses Node's built-in runner and the existing TypeScript/React packages for contact validation and preview render tests. There is no browser test suite; current automated checks do not exercise hydrated submission behavior or Netlify delivery.
- For route/component changes, check 320, 375, 390, 430, 768, 1024, and 1280px: no horizontal scrolling, usable header/nav and CTA, stacked mobile cards, and usable forms. Include RTL, keyboard access, and reduced motion when affected.
- For docs-only changes, inspect the full diff and verify links/commands; rerun executable checks if their behavior changed. Do not run repository-wide formatting for a focused edit.

## Repository workflow

- Work linearly on regular branches off `master` in the main checkout. Do not create worktrees or touch `.claude/worktrees/` unless explicitly requested.
- Do not add dependencies without approval. Prefer existing documentation; create new top-level docs only when requested.
- Start with the relevant files. Skip `.next/`, `node_modules/`, `.pnpm-store/`, `.claude/`, `.ds-sync/`, `ds-bundle/`, and `tsconfig.tsbuildinfo` unless directly relevant. Cap command output.
- Record meaningful batches in `CHANGELOG.md`. Handoff: changed paths, validation results (including unrun/failed checks), and material risks or follow-ups.
