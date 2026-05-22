export type NavItem = {
  href: string
  label: string
}

export type FooterNavGroup = {
  title: string
  items: readonly NavItem[]
}

export const primaryCta = {
  href: '/contact?ref=workflow-review',
  label: 'Get a free workflow review',
} as const satisfies NavItem

export const secondaryCta = {
  href: '/services',
  label: 'See how we help',
} as const satisfies NavItem

export const primaryNavItems = [
  { href: '/services', label: 'Services' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const satisfies readonly NavItem[]

export const serviceNavItems = [
  { href: '/services/ai-workflow-audit', label: 'AI Workflow Audit' },
  { href: '/services/website-refresh', label: 'Website Refresh' },
  {
    href: '/services/inquiry-follow-up-systems',
    label: 'Inquiry and Follow-Up System',
  },
] as const satisfies readonly NavItem[]

export const footerNavGroups = [
  {
    title: 'Navigate',
    items: primaryNavItems,
  },
  {
    title: 'Services',
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
] as const satisfies readonly FooterNavGroup[]

export type PrimaryNavItem = (typeof primaryNavItems)[number]
export type ServiceNavItem = (typeof serviceNavItems)[number]
