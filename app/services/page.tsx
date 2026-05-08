import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Services',
  description: 'Service overview shell for the approved Iceratops offerings.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <RouteShell
      description="Service overview shell for the approved Iceratops offerings."
      eyebrow="Services"
      path="/services"
      secondaryAction={{
        href: '/use-cases',
        label: 'See how we help',
      }}
      title="Services"
    />
  )
}
