export type ServiceAreaCity = string

export const site = {
  name: 'Iceratops',
  url: 'https://iceratops.com',
  shortDescription: 'Founder-led web and workflow studio in Pflugerville, TX.',
  longDescription:
    'We build clean websites and simple inquiry and follow-up workflows for small businesses.',
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

export const homePage = {
  hero: {
    eyebrow: 'Pflugerville, TX | Founder-led',
    heading: 'Clean websites and simple inquiry workflows',
    highlightedPhrase: 'inquiry workflows',
    description:
      'Iceratops builds modern websites and simple inquiry and follow-up systems for small businesses, so you capture more leads and reply faster. A person stays in the loop.',
  },
  whatWeDo: {
    eyebrow: 'What we do',
    title: 'Websites and workflows that fit a small business.',
    description:
      'We keep the work focused on what moves your business: a clear website, a simple way to capture inquiries, and less repetitive admin.',
    items: [
      {
        title: 'Modern websites',
        text: 'Fast, clear sites that show your services and make it easy to get in touch.',
      },
      {
        title: 'Inquiry and follow-up',
        text: 'Capture leads from forms, texts, and DMs in one place, and reply before they go cold.',
      },
      {
        title: 'Less repetitive admin',
        text: 'Simple, human-reviewed automation that takes routine tasks off your plate.',
      },
    ] as const,
  },
  process: {
    eyebrow: 'Process',
    title: 'A simple path from review to handoff.',
    description:
      'Four clear steps. We start small, show work early, and leave you with a system you understand.',
  },
  whyIceratops: {
    eyebrow: 'Why Iceratops',
    title: 'A founder you can actually reach.',
    description:
      'You work directly with the person building your site and workflows, in plain language, start to finish.',
  },
  finalCta: {
    eyebrow: 'Ready when you are',
    title: 'Start with a free workflow review.',
    description:
      'Tell us what you want cleaned up. We reply within one business day with a clear next step.',
  },
} as const

export const contactPage = {
  title: 'Request a free workflow review.',
  description: "Tell us what you want cleaned up. We'll reply within one business day.",
  success: {
    title: 'Thanks, we received your request.',
    description: "We'll reply within one business day.",
  },
} as const

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Services for websites and simple workflows.',
  description:
    'Start with the workflow that needs help first. We build clean websites and simple, human-reviewed workflows that fit the business you already run.',
  closingCta: {
    title: 'Start with a free workflow review.',
    reassurance: 'We reply within one business day.',
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

export type Site = typeof site
export type HomePageContent = typeof homePage
export type ContactPageContent = typeof contactPage
export type ServicesPageContent = typeof servicesPage
export type AboutPageContent = typeof aboutPage
