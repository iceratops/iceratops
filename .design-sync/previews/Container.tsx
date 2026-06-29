import { Container } from 'iceratops-website'

const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  paddingTop: 24,
  paddingBottom: 24,
  borderRadius: 12,
}
const inner: React.CSSProperties = {
  border: '1px dashed rgba(255,255,255,0.25)',
  borderRadius: 8,
  padding: '16px 20px',
  color: '#cbd5e1',
  fontSize: 14,
  lineHeight: 1.6,
}

export function Default() {
  return (
    <div style={surface}>
      <Container>
        <div style={inner}>Default container (max-w-6xl). Centers page content with responsive side gutters.</div>
      </Container>
    </div>
  )
}

export function Narrow() {
  return (
    <div style={surface}>
      <Container size="narrow">
        <div style={inner}>Narrow container (max-w-4xl). For focused, reading-width sections like a closing CTA.</div>
      </Container>
    </div>
  )
}

export function Wide() {
  return (
    <div style={surface}>
      <Container size="wide">
        <div style={inner}>Wide container (max-w-7xl). For full-bleed grids and dense layouts.</div>
      </Container>
    </div>
  )
}
