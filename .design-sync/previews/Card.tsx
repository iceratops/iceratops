import { ButtonLink, Card, CardText, CardTitle, PreviewProvider } from 'iceratops-website'

// Brand dark surface. Cards use light text on translucent
// fills, so they only read correctly on the app's dark background.
const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: 24,
  borderRadius: 12,
}

export function Default() {
  return (
    <div style={surface}>
      <Card>
        <CardTitle as="h3">Modern websites</CardTitle>
        <CardText>
          Fast, clear sites built around your real services, with contact paths a busy owner can
          keep up with.
        </CardText>
      </Card>
    </div>
  )
}

export function WithAction() {
  return (
    <PreviewProvider>
      <div style={surface}>
        <Card>
          <CardTitle as="h3">Inquiry capture &amp; follow-up</CardTitle>
          <CardText>
            Bring forms, texts, calls, DMs, and other request channels into a workflow you can see.
          </CardText>
          <div style={{ marginTop: 20 }}>
            <ButtonLink href="/services" variant="secondary">
              View services
            </ButtonLink>
          </div>
        </Card>
      </div>
    </PreviewProvider>
  )
}

export function Grid() {
  const items = [
    {
      title: 'Modern websites',
      text: 'Fast, clear sites built around your real services, with contact paths a busy owner can keep up with.',
    },
    {
      title: 'Inquiry capture & follow-up',
      text: 'Bring forms, texts, calls, DMs, and other request channels into a workflow you can see.',
    },
    {
      title: 'Less scattered admin',
      text: 'Sort requests, update trackers, and send reminders with rules you understand and control.',
    },
  ]
  return (
    <div style={surface}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}
      >
        {items.map((it) => (
          <Card key={it.title}>
            <CardTitle as="h3">{it.title}</CardTitle>
            <CardText>{it.text}</CardText>
          </Card>
        ))}
      </div>
    </div>
  )
}
