export type ServiceAreaCity = string

export const site = {
  name: 'Iceratops',
  url: 'https://iceratops.com',
  shortDescription: 'Founder-led web and AI automation studio in Pflugerville, TX.',
  longDescription:
    'We build modern websites and practical, human-reviewed AI-assisted workflows for owner-led businesses.',
  footerTagline:
    'Founder-led in Pflugerville, TX. Practical websites and human-reviewed AI-assisted workflows for busy owners.',
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
    heading: 'Iceratops builds websites and practical AI workflows',
    highlightedPhrase: 'practical AI workflows',
    description:
      'We help owner-led businesses capture inquiries, reply faster, and reduce repetitive admin work with human-reviewed systems.',
  },
  problems: {
    eyebrow: 'Why it matters',
    title: 'Busy teams need cleaner paths for the work they already do.',
    description:
      'If this is your week, you are not alone. Small workflow fixes can make the whole business feel calmer.',
    items: [
      {
        title: 'Missed inquiries',
        text: 'Good leads land in inboxes, texts, and DMs, then get hard to track.',
      },
      {
        title: 'Repeating admin',
        text: 'The same small tasks come back every week, even when they should be simple.',
      },
      {
        title: 'An outdated website',
        text: 'Your site may no longer match your services, forms, or customer questions.',
      },
    ] as const,
  },
  services: {
    eyebrow: 'Services',
    title: 'Start with the workflow that needs help first.',
    description:
      'Each service is scoped around a real business task, not a tool list. We keep the work useful and easy to own.',
    ctaLabel: 'See all services',
  },
  humanInLoop: {
    eyebrow: 'Human in the loop',
    title: 'AI helps with drafts, not final decisions.',
    description:
      'AI can help with drafts, summaries, and reminders. We keep each step visible so your team decides what goes out.',
    reassurances: [
      'You see every reply before it goes out.',
      'AI removes busywork, not your team.',
      'Nothing autonomous without your permission.',
    ] as const,
  },
  local: {
    eyebrow: 'Local and remote',
    title: 'Based in Pflugerville, built for practical owners.',
    description:
      'Iceratops is based in Pflugerville, Texas. We work with businesses around Austin that need a practical web and workflow partner.',
    remote:
      'We also work remotely with businesses across the U.S. and globally when the fit is clear.',
  },
  useCases: {
    eyebrow: 'Use cases',
    title: 'Built around the way small teams already sell and serve.',
    description:
      'These are common starting points. The free workflow review helps us find the cleanest first step for your business.',
    ctaLabel: 'See all use cases',
  },
  process: {
    eyebrow: 'Process',
    title: 'A simple path from review to handoff.',
    description:
      'We start small, show work early, and leave you with a documented system you can understand.',
  },
  trust: {
    eyebrow: 'Trust',
    title: 'Clear work, clear ownership.',
    description:
      'We build trust with plain process, honest limits, and practical handoff. No fake proof, no mystery systems.',
    notDoTitle: 'What we do not do',
    notDoText: 'We do not run fully autonomous AI. We do not claim clients we do not have.',
  },
  finalCta: {
    eyebrow: 'Ready when you are',
    title: 'Start with a free workflow review.',
    description:
      'Tell us what is slowing your team down. We will reply within one business day with a clear next step.',
    emailFallbackLabel: 'Email hello@iceratops.com',
  },
} as const

export const contactPage = {
  eyebrow: 'Contact',
  title: 'Start your free workflow review.',
  description:
    'Tell us what is slowing your team down. We will reply within one business day with a clear next step.',
  formTitle: 'Workflow review request',
  helpLabel: "What you'd like help with",
  unsureLabel: 'Not sure yet',
  businessLabel: 'Tell us about your business',
  preferredContactLabel: 'Preferred way to be contacted',
  submissionNote:
    'We are finishing the secure submission flow. To start your free workflow review today, email hello@iceratops.com. We reply within one business day.',
} as const

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Services for websites, inquiries, bookings, and admin work.',
  description:
    'Start with the workflow that needs help first. We build practical websites and human-reviewed AI-assisted systems that fit the business you already run.',
  secondaryCta: {
    href: '/use-cases',
    label: 'See use cases',
  },
  notDoBullets: [
    'We do not run fully autonomous AI.',
    'We do not sell tools before we understand the workflow.',
    'We do not promise pricing before a review.',
  ] as const,
  closingCta: {
    title: 'Start with a free workflow review.',
    reassurance: 'We reply within one business day.',
    emailFallbackLabel: 'Email hello@iceratops.com',
  },
} as const

export const useCasesPage = {
  eyebrow: 'Use cases',
  title: 'Use cases for owner-led teams.',
  description:
    'See where Iceratops usually helps first. We start with the workflow, then choose the service that fits.',
  secondaryCta: {
    href: '/services',
    label: 'View services',
  },
  notDoBullets: [
    'We do not claim client results we do not have.',
    'We do not force a generic industry package.',
    'We do not replace people with AI.',
  ] as const,
  closingCta: {
    title: 'Start with a free workflow review.',
    reassurance: 'We reply within one business day.',
    emailFallbackLabel: 'Email hello@iceratops.com',
  },
} as const

export const servicesHowWeWork = {
  eyebrow: 'How we work',
  title: 'Start with the workflow, not the tool.',
  description:
    'Every project starts with a free workflow review. We find the cleanest first step, build a small scoped pilot, then hand you a documented system you own.',
} as const

export const servicesPackages = {
  eyebrow: 'Productized packages',
  title: 'Prefer to start from a package?',
  description:
    'When a single service is not quite the shape of the problem, these two packages cover the most common needs for local businesses.',
} as const

export const aboutPage = {
  eyebrow: 'About',
  title: 'A founder-led studio in Pflugerville, TX.',
  description:
    'Iceratops is a small, founder-led studio. We build practical websites and human-reviewed AI-assisted workflows for owner-led businesses, in the Austin area and remotely.',
  story: [
    'We work the way a good local partner should. We learn how your business runs, fix the workflow that hurts most, and explain every step in plain language.',
    'We use AI where it removes busywork, like drafting replies or summarizing requests. A person always reviews the work before it reaches your customers. No mystery systems, no autonomous AI making calls on its own.',
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

export const demosPage = {
  eyebrow: 'Demos',
  title: 'Examples of what we can build.',
  description:
    'These demos show the kind of website and inquiry flow we build for local businesses. They are illustrative examples, not real client work.',
  disclaimer:
    'Every demo is fictional and for illustration only. Business names, services, and reviews shown are examples, not real customers.',
} as const

export const resourcesPage = {
  eyebrow: 'Resources',
  title: 'Practical guides for owner-led businesses.',
  description: 'Short, useful resources you can act on today. No sign-up, no fluff.',
} as const

export const caseStudiesPage = {
  eyebrow: 'Case studies',
  title: 'Selected client stories are coming soon.',
  description:
    'We are early, and we will not invent results we do not have. As projects ship and owners are glad to share, real stories will live here.',
  meantimeTitle: 'In the meantime',
} as const

export type Site = typeof site
export type HomePageContent = typeof homePage
export type ContactPageContent = typeof contactPage
export type ServicesPageContent = typeof servicesPage
export type UseCasesPageContent = typeof useCasesPage
export type AboutPageContent = typeof aboutPage
