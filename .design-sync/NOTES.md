# design-sync notes — iceratops-website

This repo is a Next.js marketing site, not a published component library. The sync
imports a hand-scoped **reusable subset** (9 components) as the design system. The
page-specific sections (`home/*`, `services/*`, `Header`, `Footer`, `SiteLayout`,
`LocalBusinessJsonLd`) are intentionally excluded.

## How the build is wired (package shape, no dist)

- **No library build.** There is only `next build`. The converter runs from an
  **explicit entry** `.design-sync/entry.ts` that re-exports exactly the 9 synced
  components (+ `ButtonLink`, `CardTitle`, `CardText`). Pass it via `--entry`.
  The synced set is defined in **two** places that must stay in agreement:
  `entry.ts` (what the bundle exports) and `componentSrcMap` (what gets a card).
- **`@/` path alias + Next shims** resolve via `.design-sync/tsconfig.build.json`
  (`cfg.tsconfig`). The converter reads `compilerOptions.paths` from that file.
- **Next.js coupling is shimmed.** `next/link` and `next/navigation` are aliased to
  `.design-sync/shims/` (a styled `<a>` and a no-op router). Without this the real
  `next/link` gets bundled, drags in `process.env.__NEXT_*`, and every preview dies
  with `ReferenceError: process is not defined`. If a newly-synced component imports
  another `next/*` module, add a shim file + a `paths` entry.
- **`tsconfig.build.json` must contain NO comments / no `"//"` keys.** The converter's
  comment-stripper mangles `//`, breaks `JSON.parse`, and silently returns a null
  paths plugin — then the Next shims don't apply and you get the `process` crash above.
- **CSS** is Tailwind v3, compiled by `cfg.buildCmd` to `.design-sync/assets/styles.css`
  (`cfg.cssEntry`). Re-run buildCmd after adding components or previews. The output
  carries the dark `body` background + the custom layer (`.font-orbitron`,
  `.glass-card`, `.gradient-text`). `assets/` is gitignored — a fresh clone must run
  buildCmd before the converter.
- **`dtsPropsFor` is hand-written.** There is no dist `.d.ts`, and the source prop
  types are non-exported inline aliases, so auto-extraction produced
  `[key: string]: unknown`. The real contracts live in `cfg.dtsPropsFor`. Keep them in
  sync when component props change.
- **`guidelinesGlob: []`** on purpose — `docs/` holds compliance docs
  (data-breach-response, data-processing-register), not design guidance.
- Run the converter **from the repo root** (a one-time playwright install `cd`'d into
  `.ds-sync`; the shell cwd can drift).

## Dark-theme previews

Components use light text on translucent fills and only read correctly on the dark
app background (shipped to real designs via the `styles.css` `body` rule). Preview
cards render on white, so every `.design-sync/previews/<Name>.tsx` wraps its content
in the brand surface gradient. Layout glue uses inline styles (no Tailwind classes),
so previews add nothing to the Tailwind purge set.

## Known render warns

- **Orbitron + Inter load via a remote Google Fonts `@import`** (`[FONT_REMOTE]`). The
  offline render check can't fetch them, so display titles fall back to a system font
  in the local screenshots. They load correctly in claude.ai/design. Not a defect.

## Re-sync risks (watch-list)

- **Next shims track the real `next` API.** A synced component that starts using a
  next feature the shim doesn't implement will render wrong. Extend the shim.
- **`dtsPropsFor` drifts silently** if source props change — re-verify on re-sync.
- **`entry.ts` + `componentSrcMap`** both define the synced set; update both together
  when adding/removing a component.
- **`cssEntry` is generated**; on a fresh clone run `cfg.buildCmd` before the converter.
- **Previews assume inline-styled layout.** If a future preview uses Tailwind utility
  classes, confirm `.design-sync/previews/**` is in `tailwind.config.mjs` `content` and
  re-run buildCmd so those classes survive the purge.
