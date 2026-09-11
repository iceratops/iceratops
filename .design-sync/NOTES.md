# Design-sync notes

This optional tooling exports nine reusable components from the marketing site. Page-specific sections, navigation, layout, and SEO components remain outside the exported set. The production build and root TypeScript check do not validate these preview entry points.

## Rendering context

`ContactForm` calls `useI18n`, and `ButtonLink` renders `LocalizedLink`, which also needs `I18nProvider`. A preview-only `PreviewProvider` export supplies English messages to the affected previews. Production continues to receive its provider through `RootDocument`.

`pnpm test` renders every exported preview with the design-sync Next shims, catching missing context and retired CTA links. This is a server-render smoke check, not a converter build or browser interaction check. Recheck manual prop descriptions and rendered previews when re-syncing. Product and CTA guidance lives in [WEBSITE_BRIEF.md](../WEBSITE_BRIEF.md), with rendering guidance in [conventions.md](conventions.md).

## Build wiring

- There is no library build. The converter uses the explicit `.design-sync/entry.ts` via `--entry`; it re-exports nine components plus `ButtonLink`, `CardTitle`, `CardText`, and the preview-only `PreviewProvider` helper. The helper does not get a component card.
- `entry.ts` and `config.json`'s `componentSrcMap` must stay aligned. `dtsPropsFor` is hand-maintained and must match source prop types when components change.
- The `@/` alias and `next/link` / `next/navigation` shims resolve through `tsconfig.build.json`. New Next imports may need matching shims and path entries. The shims do not supply application context such as the language provider.
- Keep `tsconfig.build.json` strict JSON with no comments or `"//"` keys. The converter's comment stripper previously broke path parsing and caused real Next modules to reach standalone previews.
- `config.json`'s `buildCmd` compiles Tailwind 3 CSS to `.design-sync/assets/styles.css`. This generated file is ignored by Git; build it before converting a fresh clone, and rebuild after changing styles or previews.
- `guidelinesGlob: []` is intentional: product guidance lives in the website brief, not a separate design document tree.
- Run the converter from the repository root. `.ds-sync/` and `ds-bundle/` are ignored local tooling/output, not app source.

## Preview checks

Previews use an inline dark backdrop because the app's `AmbientBackground` is outside the exported set. Their inline layout styles do not need Tailwind scanning. If a preview adds utility classes, check the preview Tailwind content paths and regenerate CSS.

The standalone bundle does not run Next's font loader, so font fallbacks can differ from production. Verify provider setup, shims, prop descriptions, and actual rendered previews when re-syncing.
