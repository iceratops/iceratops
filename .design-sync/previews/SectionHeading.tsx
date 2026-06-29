import { SectionHeading } from 'iceratops-website'

const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: 24,
  borderRadius: 12,
}

export function Full() {
  return (
    <div style={surface}>
      <SectionHeading
        eyebrow="Why Iceratops"
        title="A founder you can actually reach."
        description="You work directly with the person building your site and workflows, in plain language, start to finish."
      />
    </div>
  )
}

export function TitleOnly() {
  return (
    <div style={surface}>
      <SectionHeading title="Start with the workflow, not the tool." />
    </div>
  )
}

export function EyebrowAndTitle() {
  return (
    <div style={surface}>
      <SectionHeading eyebrow="Process" title="A simple path from review to handoff." />
    </div>
  )
}
