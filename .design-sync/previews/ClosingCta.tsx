import { ClosingCta, PreviewProvider } from 'iceratops-website'

const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: '0 24px',
  borderRadius: 12,
}

export function Default() {
  return (
    <PreviewProvider>
      <div style={surface}>
        <ClosingCta />
      </div>
    </PreviewProvider>
  )
}

export function CustomCopy() {
  return (
    <PreviewProvider>
      <div style={surface}>
        <ClosingCta
          title="Ready to simplify the workflow that keeps getting stuck?"
          reassurance="Tell us where inquiries, follow-up, or repetitive admin work gets stuck. We reply within one business day."
        />
      </div>
    </PreviewProvider>
  )
}
