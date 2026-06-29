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
  services: {
    eyebrow: 'Services',
    title: 'Start with the workflow that needs help first.',
    description:
      'Each service is scoped around a real business task, not a tool list. Start small and keep what we build.',
    ctaLabel: 'See all services',
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
    points: [
      {
        title: 'Founder-led',
        text: 'You work directly with the person doing the work, with no account layers in between.',
      },
      {
        title: 'Human-reviewed AI',
        text: 'AI helps with drafts and routine steps. A person approves what goes out.',
      },
      {
        title: 'Yours to keep',
        text: 'Everything we build is documented and handed off, so you own it.',
      },
      {
        title: 'Local and remote',
        text: 'Based in Pflugerville, working across the Austin area and with remote clients.',
      },
    ] as const,
  },
  finalCta: {
    eyebrow: 'Ready when you are',
    title: 'Start with a free workflow review.',
    description:
      'Tell us what you want cleaned up. We reply within one business day with a clear next step.',
    emailFallbackLabel: 'Email hello@iceratops.com',
  },
} as const

export const contactPage = {
  eyebrow: 'Contact',
  title: 'Request a free workflow review.',
  description:
    'Tell us what you want cleaned up, and we will reply with the best next step. Prefer email? Reach us directly at hello@iceratops.com.',
  formNote: 'We reply within one business day.',
  success: {
    eyebrow: 'Thank you',
    title: 'Thanks, we have your note.',
    description:
      'We reply within one business day with a clear next step. If it is urgent, email hello@iceratops.com.',
  },
} as const

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Services for websites, inquiries, bookings, and admin work.',
  description:
    'Start with the workflow that needs help first. We build clean websites and simple, human-reviewed workflows that fit the business you already run.',
  secondaryCta: {
    href: '/process',
    label: 'See our process',
  },
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
    'We do not force a one-size-fits-all package.',
    'We do not replace your team with AI.',
    'We do not start building before the workflow is clear.',
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
  eyebrow: 'Packages',
  title: 'Prefer to start from a package?',
  description:
    'When a single service is not quite the shape of the problem, these two packages cover the most common needs for local businesses.',
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

export const demosPage = {
  eyebrow: 'Example builds',
  title: 'Example builds by Iceratops.',
  description:
    'Example local-service website concepts by Iceratops. They show how we structure services, service areas, and a clear inquiry path.',
} as const

export const resourcesPage = {
  eyebrow: 'Resources',
  title: 'Practical guides for owner-led businesses.',
  description: 'Short, useful resources you can act on today. No sign-up, no fluff.',
} as const

export const caseStudiesPage = {
  eyebrow: 'Client stories',
  title: 'Client stories.',
  description:
    'We share client stories here as projects ship and owners are happy to feature their work.',
  meantimeTitle: 'In the meantime',
} as const

export type Site = typeof site
export type HomePageContent = typeof homePage
export type ContactPageContent = typeof contactPage
export type ServicesPageContent = typeof servicesPage
export type UseCasesPageContent = typeof useCasesPage
export type AboutPageContent = typeof aboutPage
