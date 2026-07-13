import { CheckList } from 'iceratops-website'

const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: 24,
  borderRadius: 12,
}

export function Commitments() {
  return (
    <div style={surface}>
      <CheckList
        items={[
          'No long contracts to start.',
          'Everything we build is yours, with documentation.',
          'A human stays in the loop for AI-assisted work.',
          'We explain the workflow before we build it.',
        ]}
      />
    </div>
  )
}

export function WorkflowReview() {
  return (
    <div style={surface}>
      <CheckList
        items={[
          'A plain-English first recommendation.',
          'Likely scope and an honest fit check.',
          'A suggested call only when it would help.',
        ]}
      />
    </div>
  )
}
