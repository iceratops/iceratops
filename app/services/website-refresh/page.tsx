import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Website Refresh',
  description: 'Service route shell for Website Refresh.',
  path: '/services/website-refresh',
})

export default function WebsiteRefreshPage() {
  return (
    <RouteShell
      description="Service route shell for Website Refresh."
      eyebrow="Service"
      path="/services/website-refresh"
      title="Website Refresh"
    />
  )
}
