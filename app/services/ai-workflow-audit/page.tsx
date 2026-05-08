import { RouteShell } from '@/components/marketing/RouteShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'AI Workflow Audit',
  description: 'Service route shell for AI Workflow Audit.',
  path: '/services/ai-workflow-audit',
})

export default function AiWorkflowAuditPage() {
  return (
    <RouteShell
      description="Service route shell for AI Workflow Audit."
      eyebrow="Service"
      path="/services/ai-workflow-audit"
      title="AI Workflow Audit"
    />
  )
}
