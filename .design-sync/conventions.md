# Iceratops design previews

[WEBSITE_BRIEF.md](../WEBSITE_BRIEF.md) owns brand and product direction. Current component source owns behavior and props. This auxiliary preview bundle is not a published component library or part of the production app build.

## Rendering context

- Use the brand dark surface: `linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)`. Production supplies it through `AmbientBackground`; light text and translucent cards need that backdrop.
- The app loads Orbitron, Inter, and script-specific fonts through `next/font`. Standalone previews do not run the font loader and may use system fallbacks. Do not add remote font imports.
- Components using `useI18n`, including `ContactForm` and `ButtonLink` through `LocalizedLink`, require the app's `I18nProvider` and matching messages. Wrap those previews in the exported `PreviewProvider` helper. See [NOTES.md](NOTES.md).
- The primary CTA is **Start a project**, targeting `/start-a-project` in English and the corresponding localized URL in other languages.

## Styling and contracts

Compose the existing `Container`, `Section`, `Card`, and marketing components. Extend supported `className` props without replacing their visual roles. Use the classes defined in `app/globals.css`, including `font-orbitron` and `gradient-text`, alongside the existing Tailwind utilities.

Read the source component's prop type before changing a preview. `entry.ts` lists exports; `config.json` maps source files and contains manually maintained prop descriptions. Keep those descriptions aligned with the source; `pnpm test` checks preview rendering.

The generated `assets/styles.css` comes from `app/globals.css` and the preview Tailwind configuration. Rebuild it through `config.json`'s `buildCmd`; do not hand-edit it.
