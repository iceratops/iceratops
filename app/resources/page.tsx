import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Resources',
  description: 'Resources shell for future approved guides.',
  path: '/resources',
})

export default function ResourcesPage() {
  return (
    <RouteShell
      description="Resources shell for future approved guides."
      eyebrow="Resources"
      path="/resources"
      title="Resources"
    />
  )
}
