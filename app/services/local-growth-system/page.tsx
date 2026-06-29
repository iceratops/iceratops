import { ServiceDetailPage } from '@/components/marketing/ServiceDetailPage'
import { serviceDetailMap } from '@/content/service-details'
import { buildMetadata } from '@/lib/seo'

const detail = serviceDetailMap['local-growth-system']

export const metadata = buildMetadata({
  title: detail.name,
  description: detail.summary,
  path: '/services/local-growth-system',
})

export default function LocalGrowthSystemPage() {
  return <ServiceDetailPage detail={detail} />
}
