export type NavItem = {
  href: string
  label: string
}

/**
 * Single conversion action for the whole site. The header, mobile drawer, and
 * footer all read this so the CTA target and label never drift apart.
 */
export const primaryCta = {
  href: '/free-workflow-review',
  label: 'Free workflow review',
} as const satisfies NavItem

/**
 * The one nav list. Desktop header and the mobile drawer both render this, so
 * their intent is identical: two destinations plus the Free workflow review
 * CTA. Contact is not a nav destination; the CTA carries the conversion path.
 */
export const headerNavItems = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
] as const satisfies readonly NavItem[]
