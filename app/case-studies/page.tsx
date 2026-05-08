import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: 'Placeholder shell for future approved case studies.',
  path: '/case-studies',
})

export default function CaseStudiesPage() {
  return (
    <RouteShell
      description="Placeholder shell for future approved case studies."
      eyebrow="Case Studies"
      path="/case-studies"
      title="Case Studies"
    />
  )
}
