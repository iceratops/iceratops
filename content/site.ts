export type ServiceAreaCity = string

export const site = {
  name: 'Iceratops',
  url: 'https://iceratops.com',
  shortDescription: 'Founder-led web and workflow studio in Pflugerville, TX.',
  footerTagline:
    'Founder-led in Pflugerville, TX. Clean websites and simple inquiry and follow-up workflows for small businesses.',
  city: 'Pflugerville',
  state: 'Texas',
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
  ] as readonly ServiceAreaCity[],
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
  description: "Tell us what you want cleaned up. We'll reply within one business day.",
  success: {
    title: 'Thanks, your workflow review request is in.',
    description: "We'll reply within one business day with a clear, no-pressure next step.",
  },
} as const

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Services for websites and simple workflows.',
  description:
    'Start with the workflow that needs help first. We build clean websites and simple, human-reviewed workflows that fit the business you already run.',
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
    'Iceratops is a small, founder-led studio. We build clean websites and simple, human-reviewed workflows for owner-led businesses, in the Austin area and remotely.',
  story: [
    'We work the way a good local partner should. We learn how your business runs, fix the workflow that hurts most, and explain every step in plain language.',
    'We use AI where it removes busywork, like drafting replies or summarizing requests. A person always reviews the work before it reaches your customers. Every system we build is documented, so you can see how it runs.',
    'When a project ends, you own everything we build, with documentation so you or anyone you bring in later can run it.',
  ] as const,
  valuesTitle: 'How we operate',
  values: [
    {
      title: 'Founder-led',
      text: 'You work directly with the person doing the work, with no account layers in between.',
    },
    {
      title: 'Human-reviewed AI',
      text: 'AI helps with drafts and busywork. A person approves what goes out the door.',
    },
    {
      title: 'Clear ownership',
      text: 'Everything we build is yours, documented, with a clean handoff at the end.',
    },
    {
      title: 'Local and remote',
      text: 'Based in Pflugerville, working across the Austin area and with remote clients.',
    },
  ] as const,
} as const
