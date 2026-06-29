export type NavItem = {
  href: string
  label: string
}

export const primaryCta = {
  href: '/contact?ref=workflow-review',
  label: 'Free workflow review',
} as const satisfies NavItem

export const secondaryCta = {
  href: '/services',
  label: 'See how we help',
} as const satisfies NavItem

export const primaryNavItems = [
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const satisfies readonly NavItem[]

export type PrimaryNavItem = (typeof primaryNavItems)[number]
