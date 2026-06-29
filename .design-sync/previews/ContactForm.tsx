import { ContactForm } from 'iceratops-website'

const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: 24,
  borderRadius: 12,
}

export function Default() {
  return (
    <div style={surface}>
      <div style={{ maxWidth: 560 }}>
        <ContactForm />
      </div>
    </div>
  )
}
