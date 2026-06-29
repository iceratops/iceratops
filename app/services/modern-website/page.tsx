import { ServiceDetailPage } from '@/components/marketing/ServiceDetailPage'
import { serviceDetailMap } from '@/content/service-details'
import { buildMetadata } from '@/lib/seo'

const detail = serviceDetailMap['modern-website']

export const metadata = buildMetadata({
  title: detail.name,
  description: detail.summary,
  path: '/services/modern-website',
})

export default function ModernWebsitePage() {
  return <ServiceDetailPage detail={detail} />
}
