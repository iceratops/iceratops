import { CheckList } from 'iceratops-website'

const surface: React.CSSProperties = {
  background: 'linear-gradient(160deg,#0f172a 0%,#2a1a4a 58%,#0f172a 100%)',
  padding: 24,
  borderRadius: 12,
}

export function Included() {
  return (
    <div style={surface}>
      <CheckList
        items={[
          'No long contracts to start.',
          'Everything we build is yours, with documentation.',
          'A human stays in the loop for AI-assisted work.',
          'We explain the workflow before we build it.',
        ]}
        tone="check"
      />
    </div>
  )
}

export function Excluded() {
  return (
    <div style={surface}>
      <CheckList
        items={[
          'No long lock-in contracts',
          'No mystery account managers',
          'No undocumented black boxes',
        ]}
        tone="cross"
      />
    </div>
  )
}

export function Neutral() {
  return (
    <div style={surface}>
      <CheckList
        items={['Free workflow review', 'Small scoped pilot', 'Documented handoff you own']}
        tone="dot"
      />
    </div>
  )
}
