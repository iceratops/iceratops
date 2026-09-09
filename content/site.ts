export const site = {
  name: 'Iceratops',
  url: 'https://iceratops.com',
  shortDescription:
    'Iceratops builds software, digital products, websites, and connected systems for organizations worldwide.',
  footerTagline:
    'Founder-led software, websites, automation, and connected systems. Available for projects worldwide.',
  origin: {
    city: 'Pflugerville',
    state: 'Texas',
    country: 'United States',
  },
  availability: 'Available for projects worldwide.',
  contact: {
    email: 'hello@iceratops.com',
    responseCommitment: 'We reply within one business day.',
    projectSubject: 'Project%20inquiry',
  },
  commitments: [
    'No long contracts to start.',
    'Clear deliverables, documentation, and ownership terms.',
    'A human stays in the loop for AI-assisted work.',
    'We explain the approach before we build.',
  ] as const,
} as const

export const contactPage = {
  title: 'Start a project',
  description:
    "Tell us what you are trying to build or improve. We'll reply within one business day with a practical next step.",
  reviewDetails: [
    {
      title: 'What to share',
      text: 'The product, website, workflow, or connected system you want to build or improve.',
    },
    {
      title: 'What you receive',
      text: 'A clear first recommendation, likely scope, and an honest fit check. A free workflow review is available when that is the right starting point.',
    },
    {
      title: 'What happens next',
      text: 'We reply within one business day. If a short call or technical review would help, we will suggest one. Scope, timing, and cost are agreed before work begins.',
    },
  ] as const,
  success: {
    title: 'Thanks, your project inquiry is in.',
    description:
      "We'll review what you shared and reply within one business day with a practical next step.",
  },
} as const

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Software and systems built around your goals.',
  description:
    'From focused website and automation projects to custom software and connected platforms, Iceratops builds systems that fit how your organization works.',
  closingCta: {
    title: 'Let us talk about what you need to build.',
  },
} as const

export const servicesHowWeWork = {
  eyebrow: 'How we work',
  title: 'Built to fit your team and your systems.',
  description:
    'A useful system fits the people who use it and the tools they rely on. We plan for both, with clear deliverables and documentation. Ownership and any software licenses are agreed as part of the project scope.',
} as const

export const approachPage = {
  title: 'Approach',
  description: 'A clear path from first conversation to handoff.',
  steps: [
    {
      name: 'Understand',
      text: 'We talk through your goals, current tools, and the people who will use the system. Together, we identify the problem worth solving and what a useful first outcome looks like.',
      outcome: 'A shared understanding of the need and the next step.',
    },
    {
      name: 'Scope',
      text: 'We define the deliverables, integrations, and technical boundaries. Scope, timing, cost, ownership, and software licensing terms are agreed before work begins.',
      outcome: 'An agreed scope with clear responsibilities and deliverables.',
    },
    {
      name: 'Build',
      text: 'We share working drafts in small stages so you can give feedback as the system takes shape. We test how it works for your team and with your existing tools before it goes live.',
      outcome: 'Working software reviewed against the agreed scope.',
    },
    {
      name: 'Handoff',
      text: 'We walk your team through the finished work and provide documentation for using and maintaining it. If you need ongoing support or further improvements, we agree those next steps together.',
      outcome: 'A documented handoff and a clear plan for what comes next.',
    },
  ],
} as const

export const aboutPage = {
  eyebrow: 'About',
  title: 'A founder-led technology company built for practical execution.',
  description:
    'Iceratops combines software-engineering depth with practical business understanding. Available for projects worldwide.',
  story: [
    'Clients work directly with the person designing and building the system. That keeps requirements clear, decisions close to the work, and technical tradeoffs easy to understand.',
    'The work draws on software engineering, cloud infrastructure, security, automation, and large-scale technical delivery. Each project is shaped around a real operational need, then built and tested in understandable stages.',
    'Systems are documented and designed to remain maintainable after handoff. AI is used selectively, with human review for judgment, pricing, commitments, or sensitive decisions.',
    'Iceratops was founded in Pflugerville, Texas, and is available to work with clients internationally.',
  ] as const,
} as const
