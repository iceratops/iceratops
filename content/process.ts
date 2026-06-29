export type ProcessStep = {
  step: number
  name: string
  summary: string
  detail: string
}

export const processSteps = [
  {
    step: 1,
    name: 'Review',
    summary: 'A short, free workflow review.',
    detail:
      'We look at how your website, inquiries, and admin work today, and say plainly where we can help. No pressure.',
  },
  {
    step: 2,
    name: 'Plan',
    summary: 'A clear scope and timeline.',
    detail:
      'We agree on one outcome, a fixed scope, and a real timeline, so you know what you are getting before we start.',
  },
  {
    step: 3,
    name: 'Build',
    summary: 'Work you can see early.',
    detail:
      'We build in small steps and show working drafts as we go, so nothing is a surprise and you stay in the loop.',
  },
  {
    step: 4,
    name: 'Handoff',
    summary: 'A documented system you own.',
    detail:
      'Everything we build is yours. We write down how it works so you, or anyone you bring in later, can run it.',
  },
] as const satisfies readonly ProcessStep[]

export type ProcessStepItem = (typeof processSteps)[number]
