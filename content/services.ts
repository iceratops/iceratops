export type Service = {
  slug: string
  name: string
  outcome: string
  summary: string
  highlights: readonly string[]
}

export const services = [
  {
    slug: 'custom-software-digital-products',
    name: 'Custom Software & Digital Products',
    outcome: 'Build the focused software your organization actually needs.',
    summary:
      'Purpose-built applications and platforms for customer, operational, and product needs, scoped around a clear outcome.',
    highlights: [
      'Web applications and internal tools',
      'Customer and operational platforms',
      'Product prototypes and focused MVPs',
    ],
  },
  {
    slug: 'websites-digital-experiences',
    name: 'Websites & Digital Experiences',
    outcome: 'Create a clear, credible experience on every screen.',
    summary:
      'Modern websites and front ends built to communicate clearly, support useful inquiry paths, and stay maintainable.',
    highlights: [
      'Responsive websites and redesigns',
      'Conversion and inquiry paths',
      'Accessible, maintainable front ends',
    ],
  },
  {
    slug: 'workflow-automation-ai',
    name: 'Workflow Automation & AI',
    outcome: 'Reduce repetitive work without removing human judgment.',
    summary:
      'Practical automation and AI-assisted systems that make requests, routine administration, and handoffs easier to manage.',
    highlights: [
      'Inquiry and request workflows',
      'AI-assisted responses with human controls',
      'Process visibility and documented handoffs',
    ],
  },
  {
    slug: 'systems-integrations',
    name: 'Systems & Integrations',
    outcome: 'Connect fragmented tools and data into a clearer system.',
    summary:
      'Integrations and cloud-connected applications that move information reliably between the platforms your team uses.',
    highlights: [
      'API and platform integrations',
      'Reliable data flows',
      'Modernization of fragmented processes',
    ],
  },
] as const satisfies readonly Service[]
