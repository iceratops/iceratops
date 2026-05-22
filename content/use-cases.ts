export type UseCase = {
  slug: string
  name: string
  summary: string
  helpfulWorkflows: readonly string[]
}

export const useCases = [
  {
    slug: 'local-service-businesses',
    name: 'Local service businesses',
    summary:
      'Pest control, cleaning, HVAC, and home services that want to reply faster without hiring a full-time admin.',
    helpfulWorkflows: ['Inquiry and follow-up', 'Booking or request workflow'],
  },
  {
    slug: 'event-venues',
    name: 'Event venues',
    summary:
      'Venues that get inquiry bursts and need every tour request captured and answered the same day.',
    helpfulWorkflows: ['Inquiry and follow-up', 'Modern website build'],
  },
  {
    slug: 'boutique-studios',
    name: 'Boutique studios',
    summary:
      'Yoga, fitness, dance, and art studios that want a calmer booking flow and a site that matches the brand.',
    helpfulWorkflows: ['Website refresh', 'Booking or request workflow'],
  },
  {
    slug: 'custom-food-businesses',
    name: 'Custom cake and food businesses',
    summary:
      'Owners taking custom orders by DM and text who want a clear order form and an easier way to keep track.',
    helpfulWorkflows: ['Inquiry and follow-up', 'Admin automation sprint'],
  },
  {
    slug: 'gyms-and-education',
    name: 'Gyms and education programs',
    summary: 'Memberships, classes, and trial-to-join paths that need fewer dropped inquiries.',
    helpfulWorkflows: ['Inquiry and follow-up', 'Modern website build'],
  },
  {
    slug: 'creators-and-consultants',
    name: 'Creators and consultants',
    summary:
      'Solo owners who want a polished site, a working contact path, and AI help that still sounds like them.',
    helpfulWorkflows: ['Modern website build', 'AI workflow audit'],
  },
] as const satisfies readonly UseCase[]

export type UseCaseItem = (typeof useCases)[number]
