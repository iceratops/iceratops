export const site = {
  name: 'Iceratops',
  url: 'https://iceratops.com',
  shortDescription:
    'Iceratops builds custom software, digital platforms, modern websites, workflow automation, and AI-assisted systems for organizations in the U.S. and worldwide.',
  footerTagline:
    'Texas-founded and founder-led. Practical software, websites, automation, and connected systems for clients worldwide.',
  origin: {
    city: 'Pflugerville',
    state: 'Texas',
    country: 'United States',
  },
  availability: 'Working with clients in the United States, Saudi Arabia, and worldwide.',
  contact: {
    email: 'hello@iceratops.com',
    responseCommitment: 'We reply within one business day.',
    projectSubject: 'Project%20inquiry',
  },
  commitments: [
    'No long contracts to start.',
    'Everything we build is yours, with documentation.',
    'A human stays in the loop for AI-assisted work.',
    'We explain the workflow before we build it.',
  ] as const,
} as const

export const contactPage = {
  title: 'Start a conversation.',
  description:
    "Tell us what you are trying to build or improve. We'll reply within one business day with a practical next step.",
  reviewDetails: [
    {
      title: 'What to share',
      text: 'The product, website, workflow, or connected system you want to build or improve.',
    },
    {
      title: 'What you receive',
      text: 'A plain-English first recommendation, likely scope, and an honest fit check. A free workflow review is available when that is the right starting point.',
    },
    {
      title: 'What happens next',
      text: 'We reply within one business day. If a short call or technical review would help, we will suggest one. Defined projects and custom engagements are scoped separately.',
    },
  ] as const,
  success: {
    title: 'Thanks, your project inquiry is in.',
    description:
      "We'll review what you shared and reply within one business day with a practical next step.",
  },
} as const

export const servicesPage = {
  eyebrow: 'Capabilities',
  title: 'Technology services built around real operational needs.',
  description:
    'From focused website and automation projects to custom software and connected platforms, Iceratops builds systems that fit how your organization works.',
  closingCta: {
    title: 'Let us talk about what you need to build.',
  },
} as const

export const servicesHowWeWork = {
  eyebrow: 'How we work',
  title: 'Start with the workflow, not the tool.',
  description:
    'We define the operational need, build in small testable stages, and show working drafts early. The finished system is documented, maintainable, and yours to keep.',
} as const

export const aboutPage = {
  eyebrow: 'About',
  title: 'A founder-led technology company built for practical execution.',
  description:
    'Iceratops combines software-engineering depth with practical business understanding for organizations in the United States and worldwide.',
  story: [
    'Clients work directly with the person designing and building the system. That keeps requirements clear, decisions close to the work, and technical tradeoffs easy to understand.',
    'The work draws on software engineering, cloud infrastructure, security, automation, and large-scale technical delivery. Each project is shaped around a real operational need, then built and tested in understandable stages.',
    'Systems are documented and designed to remain maintainable after handoff. AI is used selectively, with human review for judgment, pricing, commitments, or sensitive decisions.',
    'Iceratops was founded in Pflugerville, Texas, and is available to work with clients internationally.',
  ] as const,
} as const
