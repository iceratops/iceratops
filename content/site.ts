export const site = {
  name: 'Iceratops',
  url: 'https://iceratops.com',
  shortDescription: 'Founder-led web and workflow studio in Pflugerville, TX.',
  footerTagline:
    'Founder-led in Pflugerville, TX. Clean websites and simple inquiry and follow-up workflows for small businesses.',
  city: 'Pflugerville',
  stateAbbr: 'TX',
  serviceArea: [
    'Pflugerville',
    'Austin',
    'Round Rock',
    'Hutto',
    'Cedar Park',
    'Georgetown',
    'Leander',
    'Manor',
  ] as readonly string[],
  contact: {
    email: 'hello@iceratops.com',
    responseCommitment: 'We reply within one business day.',
    reviewSubject: 'Free%20workflow%20review',
  },
  commitments: [
    'No long contracts to start.',
    'Everything we build is yours, with documentation.',
    'A human stays in the loop for AI-assisted work.',
    'We explain the workflow before we build it.',
  ] as const,
} as const

export const contactPage = {
  title: 'Request a free workflow review.',
  description:
    "Tell us where inquiries, follow-up, or repetitive admin work gets stuck. We'll reply within one business day.",
  reviewDetails: [
    {
      title: 'What we review',
      text: 'Your website, inquiry flow, follow-up, or one repetitive admin workflow.',
    },
    {
      title: 'What you receive',
      text: 'A plain-English first recommendation, likely scope, and an honest fit check.',
    },
    {
      title: 'What happens next',
      text: 'We reply within one business day. If a short call would help, we will suggest one. No pressure and no tools sold.',
    },
  ] as const,
  success: {
    title: 'Thanks, your workflow review request is in.',
    description:
      "We'll review what you shared and reply within one business day. If a short call would help, we will include that option in the email.",
  },
} as const

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Services for websites and simple workflows.',
  description:
    'Start with the workflow that needs help first. We build clean websites and simple, owner-controlled workflows that fit the business you already run.',
  closingCta: {
    title: 'Start with a free workflow review.',
  },
} as const

export const servicesHowWeWork = {
  eyebrow: 'How we work',
  title: 'Start with the workflow, not the tool.',
  description:
    'Every project starts with a free workflow review. We find the cleanest first step, build a small scoped pilot, then hand you a documented system you own.',
} as const

export const aboutPage = {
  eyebrow: 'About',
  title: 'A founder-led studio in Pflugerville, TX.',
  description:
    'Iceratops is a small, founder-led studio. We build clean websites and simple, human-reviewed workflows for owner-led businesses in the Austin area and remotely.',
  story: [
    'You work directly with the person mapping and building the system. We learn how the business runs, focus on the workflow that hurts most, and explain each step in plain language.',
    'AI can help with routine work such as drafting replies or summarizing requests. You set the rules, and a person can review anything sensitive, unusual, or tied to a price or promise. The finished work is documented and yours to keep.',
  ] as const,
} as const
