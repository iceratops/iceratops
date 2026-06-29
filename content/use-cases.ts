export type UseCaseService = {
  slug: string
  label: string
}

export type UseCase = {
  slug: string
  name: string
  summary: string
  services: readonly UseCaseService[]
}

export const useCases = [
  {
    slug: 'local-service-businesses',
    name: 'Local service businesses',
    summary:
      'Pest control, cleaning, electrical, and similar trades that want to reply faster without hiring a full-time admin.',
    services: [
      { slug: 'inquiry-follow-up-systems', label: 'Inquiry and Follow-Up System' },
      { slug: 'booking-requests', label: 'Booking or Request Workflow' },
    ],
  },
  {
    slug: 'home-services',
    name: 'Home services',
    summary:
      'HVAC, landscaping, drainage, and remodeling teams that get site-visit requests and need each one captured and quoted.',
    services: [
      { slug: 'modern-website', label: 'Modern Website Build' },
      { slug: 'booking-requests', label: 'Booking or Request Workflow' },
    ],
  },
  {
    slug: 'custom-order-businesses',
    name: 'Custom order businesses',
    summary:
      'Cake makers, makers, and shops taking custom orders by DM and text who want a clear order form and an easier way to track them.',
    services: [
      { slug: 'inquiry-follow-up-systems', label: 'Inquiry and Follow-Up System' },
      { slug: 'admin-automation', label: 'Admin Automation Sprint' },
    ],
  },
  {
    slug: 'studios-and-classes',
    name: 'Studios and classes',
    summary:
      'Yoga, fitness, dance, and art studios that want a calmer booking flow and a site that matches the brand.',
    services: [
      { slug: 'website-refresh', label: 'Website Refresh' },
      { slug: 'booking-requests', label: 'Booking or Request Workflow' },
    ],
  },
  {
    slug: 'consultants-and-creators',
    name: 'Consultants and creators',
    summary:
      'Solo owners who want a polished site, a working contact path, and AI help that still sounds like them.',
    services: [
      { slug: 'modern-website', label: 'Modern Website Build' },
      { slug: 'ai-workflow-audit', label: 'AI Workflow Audit' },
    ],
  },
  {
    slug: 'admin-bottlenecks',
    name: 'Small teams with admin bottlenecks',
    summary:
      'Small teams stuck on repeat data entry, updates, and copy-paste work that slows the week.',
    services: [
      { slug: 'admin-automation', label: 'Admin Automation Sprint' },
      { slug: 'ai-workflow-audit', label: 'AI Workflow Audit' },
    ],
  },
] as const satisfies readonly UseCase[]

export type UseCaseItem = (typeof useCases)[number]
