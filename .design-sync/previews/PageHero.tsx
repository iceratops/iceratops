import { PageHero } from 'iceratops-website'

const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: '0 24px',
  borderRadius: 12,
}

export function Default() {
  return (
    <div style={surface}>
      <PageHero
        eyebrow="Services"
        title="Services for websites and simple workflows."
        description="Start with the workflow that needs help first. We build clean websites and simple, human-reviewed workflows that fit the business you already run."
      />
    </div>
  )
}

export function About() {
  return (
    <div style={surface}>
      <PageHero
        eyebrow="About"
        title="A founder-led studio in Pflugerville, TX."
        description="Iceratops is a small, founder-led studio. We build clean websites and simple, human-reviewed workflows for owner-led businesses in the Austin area and remotely."
      />
    </div>
  )
}
