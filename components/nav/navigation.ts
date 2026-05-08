export const primaryCta = {
  href: '/contact?ref=workflow-review',
  label: 'Get a free workflow review',
} as const

export const primaryNavItems = [
  { href: '/services', label: 'Services' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export const serviceNavItems = [
  { href: '/services/ai-workflow-audit', label: 'AI Workflow Audit' },
  { href: '/services/website-refresh', label: 'Website Refresh' },
  { href: '/services/inquiry-follow-up-systems', label: 'Inquiry and Follow-Up System' },
] as const

export const footerNavGroups = [
  {
    title: 'Navigate',
    items: primaryNavItems,
  },
  {
    title: 'Service Shells',
    items: serviceNavItems,
  },
  {
    title: 'More',
    items: [
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/demos', label: 'Demos' },
      { href: '/resources', label: 'Resources' },
    ],
  },
] as const
