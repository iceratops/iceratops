import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Demos',
  description: 'Demos shell for future approved examples.',
  path: '/demos',
})

export default function DemosPage() {
  return (
    <RouteShell
      description="Demos shell for future approved examples."
      eyebrow="Demos"
      path="/demos"
      title="Demos"
    />
  )
}
