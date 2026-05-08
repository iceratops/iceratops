import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Iceratops',
  description: 'Iceratops site foundation for the Next.js rebuild.',
  path: '/',
  absoluteTitle: true,
})

export default function Home() {
  return (
    <RouteShell
      description="Reusable layout, navigation, and route shells are in place."
      eyebrow="Phase 1A"
      path="/"
      secondaryAction={{
        href: '/services',
        label: 'View services',
      }}
      title="Iceratops site foundation"
    />
  )
}
