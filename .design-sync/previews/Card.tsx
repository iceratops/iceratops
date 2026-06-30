import { ButtonLink, Card, CardText, CardTitle } from 'iceratops-website'

// Brand dark surface — see Button.tsx note. Cards use light text on translucent
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
          Fast, clear sites that show your services and make it easy to get in touch.
        </CardText>
      </Card>
    </div>
  )
}

export function WithAction() {
  return (
    <div style={surface}>
      <Card>
        <CardTitle as="h3">Inquiry and follow-up</CardTitle>
        <CardText>
          Capture leads from forms, texts, and DMs in one place, and reply before they go cold.
        </CardText>
        <div style={{ marginTop: 20 }}>
          <ButtonLink href="/services" variant="secondary">
            See how we help
          </ButtonLink>
        </div>
      </Card>
    </div>
  )
}

export function Grid() {
  const items = [
    {
      title: 'Modern websites',
      text: 'Fast, clear sites that show your services and make it easy to get in touch.',
    },
    {
      title: 'Inquiry and follow-up',
      text: 'Capture leads from forms, texts, and DMs in one place, and reply before they go cold.',
    },
    {
      title: 'Less repetitive admin',
      text: 'Simple, human-reviewed automation that takes routine tasks off your plate.',
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
