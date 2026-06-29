import { ServiceDetailPage } from '@/components/marketing/ServiceDetailPage'
import { serviceDetailMap } from '@/content/service-details'
import { buildMetadata } from '@/lib/seo'

const detail = serviceDetailMap['inquiry-follow-up-systems']

export const metadata = buildMetadata({
  title: detail.name,
  description: detail.summary,
  path: '/services/inquiry-follow-up-systems',
})

export default function InquiryFollowUpSystemsPage() {
  return <ServiceDetailPage detail={detail} />
}
