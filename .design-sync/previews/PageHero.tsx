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
        eyebrow="Pflugerville, TX | Founder-led"
        title="Clean websites and simple inquiry workflows"
        highlight="inquiry workflows"
        description="Iceratops builds modern websites and simple inquiry and follow-up systems for small businesses, so you capture more leads and reply faster. A person stays in the loop."
        primaryAction={{ href: '/contact', label: 'Free workflow review' }}
        secondaryAction={{ href: '/services', label: 'See how we help' }}
        note="We reply within one business day."
      />
    </div>
  )
}

export function NoHighlightSingleCta() {
  return (
    <div style={surface}>
      <PageHero
        eyebrow="About"
        title="A founder-led studio in Pflugerville, TX."
        description="Iceratops is a small, founder-led studio. We build clean websites and simple, human-reviewed workflows for owner-led businesses, in the Austin area and remotely."
        primaryAction={{ href: '/contact', label: 'Free workflow review' }}
      />
    </div>
  )
}
