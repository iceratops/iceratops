export type ProcessStep = {
  step: number
  name: string
  summary: string
  detail: string
}

export const processSteps = [
  {
    step: 1,
    name: 'Free workflow review',
    summary: 'A short call to see where we can actually help.',
    detail:
      'We look at how inquiries, bookings, or admin work today and say plainly whether we are a fit. No pressure.',
  },
  {
    step: 2,
    name: 'Pilot project',
    summary: 'A small, scoped project with a clear timeline.',
    detail:
      'We agree on one outcome, a fixed scope, and a real timeline. You see working drafts early and stay in the loop.',
  },
  {
    step: 3,
    name: 'Handoff with documentation',
    summary: 'You keep what we build, fully documented.',
    detail:
      'Everything we build is yours. We write down how it works so you, or anyone you bring in later, can run it.',
  },
] as const satisfies readonly ProcessStep[]

export type ProcessStepItem = (typeof processSteps)[number]
