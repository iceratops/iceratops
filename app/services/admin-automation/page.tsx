import { ServiceDetailPage } from '@/components/marketing/ServiceDetailPage'
import { serviceDetailMap } from '@/content/service-details'
import { buildMetadata } from '@/lib/seo'

const detail = serviceDetailMap['admin-automation']

export const metadata = buildMetadata({
  title: detail.name,
  description: detail.summary,
  path: '/services/admin-automation',
})

export default function AdminAutomationPage() {
  return <ServiceDetailPage detail={detail} />
}
