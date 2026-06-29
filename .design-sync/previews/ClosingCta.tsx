import { ClosingCta } from 'iceratops-website'

const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: '0 24px',
  borderRadius: 12,
}

export function Default() {
  return (
    <div style={surface}>
      <ClosingCta />
    </div>
  )
}

export function CustomCopy() {
  return (
    <div style={surface}>
      <ClosingCta
        title="Ready to clean up your inquiry workflow?"
        reassurance="Tell us what you want cleaned up. We reply within one business day with a clear next step."
      />
    </div>
  )
}
