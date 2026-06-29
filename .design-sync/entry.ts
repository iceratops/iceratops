// Explicit bundle entry for design-sync. Re-exports ONLY the reusable subset
// of components synced to claude.ai/design (the marketing site's page-specific
// sections are intentionally excluded). Passed to the converter via --entry so
// it bundles exactly this surface instead of synthesizing from the whole tree.
export { Button, ButtonLink } from '@/components/primitives/Button'
export { Card, CardTitle, CardText } from '@/components/primitives/Card'
export { Container } from '@/components/primitives/Container'
export { Section } from '@/components/primitives/Section'
export { SectionHeading } from '@/components/marketing/SectionHeading'
export { CheckList } from '@/components/marketing/CheckList'
export { PageHero } from '@/components/marketing/PageHero'
export { ClosingCta } from '@/components/marketing/ClosingCta'
export { ContactForm } from '@/components/marketing/ContactForm'
