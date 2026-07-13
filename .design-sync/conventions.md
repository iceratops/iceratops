# Iceratops design system

Founder-led web and workflow studio brand. A small, dark-themed React set: layout
primitives (`Container`, `Section`, `Card`), actions (`Button`, `ButtonLink`), and
marketing blocks (`PageHero`, `SectionHeading`, `CheckList`, `ClosingCta`,
`ContactForm`). Styling is Tailwind utilities plus a few brand classes.

## Dark surface is required

The component set is designed for the brand **dark background**; its marketing blocks use light
text and translucent fills. The production app supplies that background with its fixed
`AmbientBackground` layer. Standalone previews should wrap the component in the brand gradient
`background: linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)`. On a white
background, those translucent surfaces lose their intended contrast. No React provider is needed.

The app self-hosts **Orbitron** and **Inter** through `next/font`. The standalone design-sync
bundle does not run that loader, so previews may use the configured system fallbacks. Do not add
a remote font import to compensate.

## Styling idiom

Tailwind utility classes, with a brand vocabulary. For your own layout glue, use these
real names (all present in `styles.css`):

| Need | Use |
|---|---|
| Display heading font | class `font-orbitron` |
| Gold gradient text accent | class `gradient-text` |
| Accent / CTA color | `text-amber-300`, `bg-amber-400`, `border-amber-300` |
| Body text | `text-slate-200`, `text-slate-300`, muted `text-slate-400` |
| Translucent surface / border | `bg-white/5`, `bg-white/10`, `border-white/10`, `hover:border-white/15` |

The components themselves are **prop-driven** and intentionally narrow:

- `Button`/`ButtonLink`: `variant` (`primary` | `secondary`) and `size` (`sm` | `md`).
- `Container`: `size` (`default` | `narrow`).
- `Section`: `surface` (`plain` | `panel`). It provides vertical rhythm and surface treatment,
  not heading content.
- `CheckList`: `items`; every item uses the standard check marker.
- `SectionHeading`: optional `eyebrow`, `title`, and `description`.
- `PageHero`: required `eyebrow`, `title`, and `description`. Supporting-page heroes deliberately
  have no CTA so they do not compete with the sticky header action.
- `ClosingCta`: optional `title` and `reassurance`.
- `ContactForm`: no props.

Pass `className` where supported to extend layout, not to replace the component's visual role.
Compose `Section`, `Container`, and `SectionHeading` when a section needs a heading.

One CTA convention: the brand uses a single primary action, "Free workflow review," linking to
`/free-workflow-review`.

## Where the truth lives

Read before styling: the component source is authoritative for behavior and visual treatment;
`config.json` mirrors the reusable prop contracts for design-sync. `styles.css` is generated from
`app/globals.css` and Tailwind and should not be hand-edited.

## Build snippet

```tsx
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  Card,
  CardTitle,
  CardText,
} from '<ds>'

// Render on the brand dark backdrop. PageHero lays out supporting-page copy only.
<PageHero
  eyebrow="Services"
  title="Services for websites and simple workflows."
  description="Start with the workflow that needs help first. We build clean websites and simple, human-reviewed workflows that fit the business you already run."
/>

<Section surface="panel">
  <Container>
    <SectionHeading
      eyebrow="What we build"
      title="A clear website, organized inquiries, and less repetitive admin."
      description="We connect the parts that help a customer find you, reach out, and get a useful response."
    />
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      <Card>
        <CardTitle as="h3">Modern websites</CardTitle>
        <CardText>
          Fast, clear sites built around your real services, with contact paths a busy owner can
          keep up with.
        </CardText>
      </Card>
    </div>
  </Container>
</Section>
```
