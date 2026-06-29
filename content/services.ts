export type Service = {
  slug: string
  name: string
  outcome: string
  summary: string
  highlights: readonly string[]
}

export const services = [
  {
    slug: 'ai-workflow-audit',
    name: 'AI Workflow Audit',
    outcome: 'See where AI can quietly remove busywork from your week.',
    summary:
      'We walk your current inquiry, booking, and admin flows and show where AI can help and where it should stay out.',
    highlights: [
      'Plain-English map of your workflows',
      'Two or three concrete AI-assisted fixes',
      'No tools sold during the audit',
    ],
  },
  {
    slug: 'website-refresh',
    name: 'Website Refresh',
    outcome: 'Tighten your existing site without starting over.',
    summary:
      'Keep what works and fix the rest. We refresh copy, layout, and mobile feel so your site matches the business you run today.',
    highlights: [
      'Mobile-first redesign on your current platform',
      'Clearer copy and stronger contact paths',
      'Faster pages and cleaner forms',
    ],
  },
  {
    slug: 'modern-website',
    name: 'Modern Website Build',
    outcome: 'A new website that earns trust on the first scroll.',
    summary:
      'A modern, mobile-first site built around your real services, with a conversion path a busy local owner can keep up with.',
    highlights: [
      'Mobile-first responsive design',
      'Copy written for your audience',
      'Lead capture wired in from day one',
    ],
  },
  {
    slug: 'inquiry-follow-up-systems',
    name: 'Inquiry and Follow-Up System',
    outcome: 'Catch every inquiry and follow up before the lead goes cold.',
    summary:
      'AI-assisted drafts, a simple tracker, and a human review step help every reply still sound like you.',
    highlights: [
      'AI-drafted replies you approve before send',
      'Lightweight tracker for new leads',
      'Reminders so warm leads do not go quiet',
    ],
  },
  {
    slug: 'booking-requests',
    name: 'Booking or Request Workflow',
    outcome: 'Turn booking and request questions into real appointments.',
    summary:
      'A booking or request workflow tuned to your service, with clear inputs, useful confirmations, and a clean handoff.',
    highlights: [
      'Mobile-friendly request or booking form',
      'Confirmations that read like a person sent them',
      'Clean handoff to your calendar or CRM',
    ],
  },
  {
    slug: 'admin-automation',
    name: 'Admin Automation Sprint',
    outcome: 'Quietly reduce repetitive admin work.',
    summary:
      'A short sprint removes small repetitive tasks from your week, with documentation so you stay in control of every step.',
    highlights: [
      'Two-week scoped sprint',
      'Automation you can read and edit',
      'Documented handoff at the end',
    ],
  },
] as const satisfies readonly Service[]

export type ServiceItem = (typeof services)[number]
