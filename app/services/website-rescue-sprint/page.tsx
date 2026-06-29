import { ServiceDetailPage } from '@/components/marketing/ServiceDetailPage'
import { serviceDetailMap } from '@/content/service-details'
import { buildMetadata } from '@/lib/seo'

const detail = serviceDetailMap['website-rescue-sprint']

export const metadata = buildMetadata({
  title: detail.name,
  description: detail.summary,
  path: '/services/website-rescue-sprint',
})

export default function WebsiteRescueSprintPage() {
  return <ServiceDetailPage detail={detail} />
}
