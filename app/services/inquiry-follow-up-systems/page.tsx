import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Inquiry and Follow-Up System',
  description:
    'Catch inquiries, draft follow-ups for review, and keep warm leads from going quiet.',
  path: '/services/inquiry-follow-up-systems',
})

export default function InquiryFollowUpSystemsPage() {
  return (
    <RouteShell
      description="Service route shell for Inquiry and Follow-Up System."
      eyebrow="Service"
      path="/services/inquiry-follow-up-systems"
      title="Inquiry and Follow-Up System"
    />
  )
}
