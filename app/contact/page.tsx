import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Contact page shell for the free workflow review path.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <RouteShell
      description="Contact page shell for the free workflow review path."
      eyebrow="Contact"
      path="/contact"
      secondaryAction={{
        href: 'mailto:hello@iceratops.com',
        label: 'Email Iceratops',
      }}
      title="Contact"
    />
  )
}
