import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Use Cases',
  description:
    'See common ways Iceratops helps service teams, venues, studios, creators, and consultants.',
  path: '/use-cases',
})

export default function UseCasesPage() {
  return (
    <RouteShell
      description="Use case shell for future approved scenarios."
      eyebrow="Use Cases"
      path="/use-cases"
      title="Use Cases"
    />
  )
}
