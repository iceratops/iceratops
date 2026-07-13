import { Card, CardText, CardTitle, Container, Section, SectionHeading } from 'iceratops-website'

const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: '0 24px',
  borderRadius: 12,
}

export function WithHeading() {
  return (
    <div style={surface}>
      <Section surface="panel">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="A clear website, organized inquiries, and less repetitive admin."
            description="We connect the parts that help a customer find you, reach out, and get a useful response."
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 16,
              marginTop: 40,
            }}
          >
            <Card>
              <CardTitle as="h3">Modern websites</CardTitle>
              <CardText>
                Fast, clear sites built around your real services and contact paths.
              </CardText>
            </Card>
            <Card>
              <CardTitle as="h3">Inquiry capture &amp; follow-up</CardTitle>
              <CardText>Bring request channels into a workflow you can see.</CardText>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export function ContentOnly() {
  return (
    <div style={surface}>
      <Section>
        <p style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
          A plain Section provides responsive vertical rhythm around its children. Compose it with
          Container and SectionHeading when the content needs a heading.
        </p>
      </Section>
    </div>
  )
}
