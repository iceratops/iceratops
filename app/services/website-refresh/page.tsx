import { ServiceDetailPage } from '@/components/marketing/ServiceDetailPage'
import { serviceDetailMap } from '@/content/service-details'
import { buildMetadata } from '@/lib/seo'

const detail = serviceDetailMap['website-refresh']

export const metadata = buildMetadata({
  title: detail.name,
  description: detail.summary,
  path: '/services/website-refresh',
})

export default function WebsiteRefreshPage() {
  return <ServiceDetailPage detail={detail} />
}
