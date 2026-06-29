import { Button, ButtonLink } from 'iceratops-website'

// Iceratops components are built for the site's dark app background (shipped via
// the styles.css body rule). Preview cards render on white, so each cell wraps
// its content in the brand surface to match how the components actually appear.
const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: 24,
  borderRadius: 12,
}
const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }

export function Variants() {
  return (
    <div style={surface}>
      <div style={row}>
        <Button variant="primary">Free workflow review</Button>
        <Button variant="secondary">See how we help</Button>
        <Button variant="ghost">Learn more</Button>
      </div>
    </div>
  )
}

export function Sizes() {
  return (
    <div style={surface}>
      <div style={row}>
        <Button size="sm">Small button</Button>
        <Button size="md">Medium button</Button>
      </div>
    </div>
  )
}

export function Disabled() {
  return (
    <div style={surface}>
      <div style={row}>
        <Button disabled>Sending...</Button>
        <Button variant="secondary" disabled>
          Unavailable
        </Button>
      </div>
    </div>
  )
}

export function AsLink() {
  return (
    <div style={surface}>
      <div style={row}>
        <ButtonLink href="/contact">Free workflow review</ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          See how we help
        </ButtonLink>
      </div>
    </div>
  )
}
