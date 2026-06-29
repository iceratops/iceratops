import { Card, CardText, CardTitle, Section } from 'iceratops-website'

const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: '0 24px',
  borderRadius: 12,
}

export function WithHeader() {
  return (
    <div style={surface}>
      <Section
        eyebrow="What we do"
        title="Websites and workflows that fit a small business."
        description="We keep the work focused on what moves your business: a clear website, a simple way to capture inquiries, and less repetitive admin."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          <Card>
            <CardTitle as="h3">Modern websites</CardTitle>
            <CardText>Fast, clear sites that make it easy to get in touch.</CardText>
          </Card>
          <Card>
            <CardTitle as="h3">Inquiry and follow-up</CardTitle>
            <CardText>Capture leads in one place and reply before they go cold.</CardText>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export function ContentOnly() {
  return (
    <div style={surface}>
      <Section>
        <p style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
          A Section with no header props is just vertical rhythm (py-14 to py-20) around whatever you nest inside it.
        </p>
      </Section>
    </div>
  )
}
