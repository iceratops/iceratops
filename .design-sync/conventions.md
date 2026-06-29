# Iceratops design system

Founder-led web/workflow studio brand. A small, dark-themed React set: layout
primitives (`Container`, `Section`, `Card`), actions (`Button`, `ButtonLink`), and
marketing blocks (`PageHero`, `SectionHeading`, `CheckList`, `ClosingCta`,
`ContactForm`). Styling is Tailwind utilities plus a few brand classes.

## Dark surface is required

Every component uses **light text on translucent fills** and is only legible on the
brand **dark background**. That background ships in `styles.css` as a `body` rule
(near-black `#0f172a` with a violet gradient, text `#f8fafc`). Keep your screens on it:
render on the default dark `body`, or wrap a region in the brand gradient
`background: linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)`. On a white
background these components disappear. No React provider/wrapper is needed.

Fonts load from a remote `@import` in `styles.css`: **Orbitron** for display headings
(applied via the `font-orbitron` class) and **Inter** for body. Don't re-import them.

## Styling idiom

Tailwind utility classes, with a brand vocabulary. For your own layout glue, use these
real names (all present in `styles.css`):

| Need | Use |
|---|---|
| Display heading font | class `font-orbitron` |
| Gold gradient text accent | class `gradient-text` |
| Glass panel surface | class `glass-card` |
| Accent / CTA color | `text-amber-300`, `bg-amber-400`, `border-amber-300` |
| Body text | `text-slate-200`, `text-slate-300`, muted `text-slate-400` |
| Translucent surface / border | `bg-white/5`, `bg-white/10`, `border-white/10`, `hover:border-white/15` |

The components themselves are **prop-driven** — compose them via props, not classes:
`Button`/`ButtonLink` take `variant` (`primary` | `secondary` | `ghost`) and `size`
(`sm` | `md`); `Container` takes `size` (`default` | `wide` | `narrow`); `CheckList`
takes `items` + `tone` (`check` | `cross` | `dot`); `Section`/`SectionHeading`/`PageHero`
take `eyebrow` / `title` / `description`. Pass `className` to extend, never to restyle.

One CTA convention: the brand uses a single primary action, "Free workflow review."

## Where the truth lives

Read before styling: the design system's `styles.css` (tokens, brand classes, the dark
`body` rule) and each component's `.d.ts` (exact prop contract) and `.prompt.md`
(usage). Those are authoritative; this header is the summary.

## Build snippet

```tsx
import { PageHero, Section, Card, CardTitle, CardText } from '<ds>'

// On the dark body. PageHero already lays out eyebrow/title/CTAs.
<PageHero
  eyebrow="Pflugerville, TX | Founder-led"
  title="Clean websites and simple inquiry workflows"
  highlight="inquiry workflows"            // rendered in the gold gradient-text accent
  description="Modern sites and simple inquiry workflows for small businesses."
  primaryAction={{ href: '/contact', label: 'Free workflow review' }}
/>

<Section eyebrow="What we do" title="Websites and workflows that fit a small business.">
  <div className="grid gap-4 sm:grid-cols-2">
    <Card>
      <CardTitle as="h3">Modern websites</CardTitle>
      <CardText>Fast, clear sites that make it easy to get in touch.</CardText>
    </Card>
  </div>
</Section>
```
