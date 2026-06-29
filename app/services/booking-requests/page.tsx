import { ServiceDetailPage } from '@/components/marketing/ServiceDetailPage'
import { serviceDetailMap } from '@/content/service-details'
import { buildMetadata } from '@/lib/seo'

const detail = serviceDetailMap['booking-requests']

export const metadata = buildMetadata({
  title: detail.name,
  description: detail.summary,
  path: '/services/booking-requests',
})

export default function BookingRequestsPage() {
  return <ServiceDetailPage detail={detail} />
}
