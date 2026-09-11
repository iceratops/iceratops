# Iceratops website

A multilingual marketing site built with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 3, and Biome. Netlify hosts the app and handles inquiry submissions through Netlify Forms.

[AGENTS.md](AGENTS.md) maps the source and change boundaries. [WEBSITE_BRIEF.md](WEBSITE_BRIEF.md) owns product and brand direction; [CHANGELOG.md](CHANGELOG.md) records past work.

## Local development

Use Node.js 24 LTS from `.nvmrc` and pnpm `10.29.1` from `package.json`. Both Netlify and GitHub Actions read `.nvmrc`; `package.json` declares the same supported Node major. With nvm installed, `nvm install` and `nvm use` select it locally. Patch releases within Node 24 remain available without changing the major-version policy.

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

Open `http://localhost:3000`. No environment variables, database, authentication service, or API keys are required for the default site. Next's Google font loader downloads fonts during an uncached build and serves them locally to visitors, so a fresh build needs font-host access.

The optional demo configuration is described below. Keep personal environment values in `.env.local`, which Git ignores; do not overwrite an existing file when copying [.env.example](.env.example).

## Commands

Run from the repository root. The scripts in [package.json](package.json) are authoritative.

| Command | Purpose |
| --- | --- |
| `pnpm install --frozen-lockfile` | Install the versions in `pnpm-lock.yaml` without updating it. |
| `pnpm run dev` | Next development server, port 3000 by default. |
| `pnpm run build` | Production build and Next's type validation. Does not run the repository's Biome/copy/translation pipeline. |
| `pnpm run start` | Serve the existing production build. Run build first. |
| `pnpm run check` | Run lint, typecheck, and Node tests in sequence. Used by CI and the Netlify build. |
| `pnpm test` | Contact-validation regression tests and server-rendered design-preview smoke tests using existing TypeScript/React packages. |
| `pnpm run lint` | Biome check, then copy lint, then translation assertions; stops at the first failure. |
| `pnpm run lint:copy` | Scan `.ts`, `.tsx`, and `.mdx` in `app`, `components`, `content`, and `lib` for em dashes. |
| `pnpm run validate:translations` | Check all nine JSON catalogs, placeholders, literal translation calls, and locale routing/direction helpers. Also rejects em dashes in catalogs. |
| `pnpm run typecheck` | Strict TypeScript check without emitting code. |
| `pnpm run validate:site` | Read-only HTTP checks against a running production build; see below. |
| `node scripts/monitor-site.mjs` | Lightweight read-only canary; defaults to production, or uses `BASE_URL`. |
| `pnpm run format` | Write Biome formatting across the repository. For focused edits, use `pnpm exec biome check path/to/file` and format only affected files if needed. |

For a focused test run, use `pnpm exec node --test scripts/contact-form.test.mjs` or `pnpm exec node --test scripts/design-previews.test.mjs`. The small test source loader compiles repository TypeScript using the existing compiler and applies the design-sync Next shims for preview tests. There is no browser test suite; these tests do not exercise hydrated submission, timeout, duplicate-click handling, or Netlify delivery. Biome excludes Markdown, `docs`, and public assets; TypeScript excludes auxiliary preview code and includes generated `.next/types`.

### Site validation

In one terminal:

```bash
pnpm run build
pnpm run start --hostname 127.0.0.1
```

In another, from the same checkout:

```bash
pnpm run validate:site
```

The validator defaults to `http://127.0.0.1:3000`. For another port, start with `pnpm run start --hostname 127.0.0.1 --port 3100` and run:

```bash
BASE_URL=http://127.0.0.1:3100 pnpm run validate:site
```

`BASE_URL` can also point to a Netlify deploy preview. Use the checkout that produced that deployment: the script compares served pages with local route files, catalogs, and the Netlify detector.

Checks cover 54 public pages across nine languages, route inventory, retired URLs, internal links, metadata, JSON-LD, form fields, server-rendered mobile fallbacks, and security headers. Requests use GET/HEAD; no inquiries are submitted. These checks do not measure layout, run browser interactions, or verify Netlify delivery. Use the viewport checklist in `AGENTS.md` for UI changes.

### Environment and deployment

| Variable | Consumer | Behavior |
| --- | --- | --- |
| `WORKING_DEMO_URL` | Next build and site validator | Optional absolute HTTPS demo URL. HTTP is accepted only for `localhost`, `127.0.0.1`, or `[::1]`. Blank, invalid, and credential-bearing URLs hide the app's demo links. The validator rejects invalid configured expectations. |
| `BASE_URL` | Site validator only | Target origin; defaults to `http://127.0.0.1:3000`. Does not change the site's canonical origin. |

Next loads `.env.local`; the standalone validation script does **not**. If the build enables demo links, supply the same `WORKING_DEMO_URL` to validation. For example, in the shell used to build and validate:

```bash
export WORKING_DEMO_URL=https://demo.iceratops.com/
pnpm run build
# Start the production server, then run with the same exported value:
pnpm run validate:site
```

In Netlify, set that variable in the site environment and redeploy. Demo links on Home and Services are rendered at build time; restarting an existing build does not update them.

[netlify.toml](netlify.toml) runs `pnpm run check && pnpm run build`, publishes `.next`, and enables `@netlify/plugin-nextjs`. Next and Netlify both define security headers; preserve their production alignment and the intentional development CSP exception.

[Verify site](.github/workflows/verify.yml) runs on pull requests, pushes to `master`, and manual dispatch. It installs the frozen lockfile, runs checks/build, starts a local production server, and runs the HTTP validator with a matching empty demo URL. The validator times out each request after 15 seconds. The workflow becomes active once pushed; Netlify's stronger build gate takes effect on the next deployment using this configuration. Making the GitHub check mandatory for merging is a separate repository branch-protection setting.

## Architecture and common edits

- **Routing:** `app/(english)` serves unprefixed English; `app/[locale]` statically generates eight translated variants. Both delegate to `components/pages`. `RootDocument` supplies fonts, language/direction, the language provider, and site shell. The experimental global 404 owns a separate document. The brief lists current and retired routes.
- **Copy and translation:** shared source copy lives in `content/site.ts`, `content/services.ts`, and `content/navigation.ts`, with additional literals in components and `lib/page-metadata.ts`. Catalog keys are English source strings, not abstract IDs. Changing a key requires updating every `content/locales/*.json` file and preserving placeholders. Server components use `getTranslator`; client components use `useI18n`. Missing keys fall back to their English source.
- **Links and SEO:** use `LocalizedLink` or `localizedPath` to retain the current language. A route change can affect both route trees, `content/navigation.ts`, `lib/page-metadata.ts`, `lib/seo.ts`'s `publicRoutes`, and the independent route expectations in `scripts/check-site.mjs`. Sitemap and language alternatives derive from the SEO/locale helpers.
- **State and integrations:** interaction state stays in React hooks/reducers, with locale/messages supplied through context. There is no application API route, server action, database/data-access layer, authentication, or external state-management package. The inquiry form is the network integration; the homepage inquiry story is a fictional local demonstration.
- **Inquiry contract:** `ContactForm` validates through `lib/contact-form.ts`, normalizes email, and posts URL-encoded data to `/__forms.html`. Keep `public/__forms.html` and the site validator in sync with field changes. Preserve the `contact` form name, combined `name`, country/code, and language fields. Loopback previews validate without posting or showing a receipt. Actual receipt requires Netlify; submission stays disabled until hydration, with an email fallback when JavaScript is unavailable.
- **Design:** reusable UI is in `components/primitives`; marketing sections compose it. Brand CSS and animation rules live in `app/globals.css`; Tailwind scans `app` and `components`. The optional `.design-sync` exports use a preview-only language provider and Next shims; see their [notes](.design-sync/NOTES.md).

## Monitoring and alerts

CI and deployment checks run around code changes; they are not continuous live-site monitoring. At the September 2026 audit, the Netlify site had GitHub status/check/comment hooks for deploy failures, plus email hooks for deploy approval events. No outage-alert or form-submission hook was found in that site-hook inventory. This does not establish whether someone has configured an independent monitoring account elsewhere.

The [Production canary](.github/workflows/monitor.yml) runs every five minutes and supports manual dispatch. It checks the homepage, inquiry page, an Arabic RTL inquiry page, the Netlify form contract, and a referenced JavaScript asset. Requests time out after 15 seconds; a failed check is retried after 30 seconds before the workflow fails. It uses Node's built-in HTTP client and needs no dependency installation, secrets, or paid service. CI also runs the same canary against its local production build.

Enable failed-workflow email notifications in [GitHub notification settings](https://github.com/settings/notifications) for the account responsible for the schedule. GitHub documents how [workflow notifications](https://docs.github.com/en/actions/concepts/workflows-and-actions/notifications-for-workflow-runs) depend on the triggering user and notification preferences. This repository does not configure an email recipient or verify inbox delivery. The schedule becomes active on `master`; GitHub may delay scheduled jobs and may disable schedules in public repositories after 60 days of inactivity. This is a basic canary, with no guaranteed detection time or recovery notification, rather than a dedicated uptime service.

Browser submission, timeout, duplicate-click behavior, and actual Netlify receipt remain separate checks. The canary does not execute JavaScript or submit inquiries. A dedicated external monitor with confirmed email delivery and a browser canary is the next operational step. [Netlify deploy notifications](https://docs.netlify.com/deploy/deploy-notifications/) cover deployment events, not general uptime.

## Focused follow-ups

Remaining findings from the repository bootstrap and validation work. Each can be a separate task; no P0 correctness/security issue was established by this audit.

| Priority | Evidence and value | Scope / risk |
| --- | --- | --- |
| P1 | Contact validation now has regression coverage, but hydrated submission, timeout, and duplicate-click behavior still need browser coverage. Netlify receipt also needs a synthetic delivery check. | Medium scope; test-data/recipient decisions required for live delivery. Any new testing dependency needs approval. |
| P1 | CI and a scheduled production HTTP canary are configured. Failed-workflow email preferences and inbox delivery still need confirmation; a dedicated monitor would provide more dependable timing. | No new service required for the basic canary. Browser/delivery checks and dedicated alert routing remain operational follow-ups. |
| P2 | Requests such as `/contact`, `/free-workflow-review`, and `/route-that-does-not-exist` return the required branded HTTP 404 but log `NoFallbackError`. This matches the confirmed, open [Next.js issue #90537](https://github.com/vercel/next.js/issues/90537) for rejected static parameters. | Upstream log-noise issue; not a broken route. Retain static locale restrictions and global 404 behavior. Recheck when an upstream fix ships; do not suppress general server errors. |
