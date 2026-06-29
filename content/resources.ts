export type ResourceSummary = {
  slug: string
  name: string
  category: string
  summary: string
}

export const resources = [
  {
    slug: 'website-audit-checklist',
    name: 'Website Audit Checklist',
    category: 'Checklist',
    summary:
      'A quick, honest checklist to score your current website on clarity, mobile, trust, SEO, and inquiry capture.',
  },
] as const satisfies readonly ResourceSummary[]

export type ResourceItem = (typeof resources)[number]

export type ChecklistSection = {
  title: string
  description: string
  items: readonly string[]
}

export type ScoringTier = {
  range: string
  label: string
  text: string
}

export type Checklist = {
  slug: string
  title: string
  intro: string
  howTo: string
  sections: readonly ChecklistSection[]
  scoring: readonly ScoringTier[]
}

export const websiteAuditChecklist: Checklist = {
  slug: 'website-audit-checklist',
  title: 'Website Audit Checklist',
  intro:
    'Score your website the way a new visitor would. Go through each item on a phone first, then on a laptop. Give yourself one point for every box you can honestly check.',
  howTo:
    'There are 28 checks across seven sections. Be honest. A low score is not a failure, it is a clear to-do list.',
  sections: [
    {
      title: 'Website clarity',
      description: 'A visitor should understand what you do within a few seconds.',
      items: [
        'The headline says what you do and who you help',
        'Your main services are easy to find',
        'There is no jargon a first-time visitor would not know',
        'A stranger could explain your business after ten seconds',
      ],
    },
    {
      title: 'Mobile experience',
      description: 'Most visitors arrive on a phone. The phone view is the real test.',
      items: [
        'Text is readable without zooming',
        'Buttons and links are easy to tap',
        'Nothing scrolls sideways or runs off the screen',
        'The page loads in a few seconds on mobile data',
      ],
    },
    {
      title: 'Calls to action',
      description: 'Every page should make the next step obvious.',
      items: [
        'There is one clear main action on each page',
        'The main button stands out and repeats down the page',
        'The action matches what the visitor wants to do next',
        'You are not competing with five buttons at once',
      ],
    },
    {
      title: 'Trust signals',
      description: 'Visitors decide quickly whether you are real and credible.',
      items: [
        'Your location or service area is clearly shown',
        'There is a real way to reach a person',
        'The site looks current, not abandoned',
        'Claims are specific and honest, not vague hype',
      ],
    },
    {
      title: 'SEO basics',
      description: 'The fundamentals that help people find you at all.',
      items: [
        'Each page has a clear, descriptive title',
        'Headings describe the content below them',
        'Images have alt text describing them',
        'Your business name, area, and services appear in the copy',
      ],
    },
    {
      title: 'Inquiry capture',
      description: 'A visitor ready to act should be able to reach you without friction.',
      items: [
        'A contact form or clear contact method is easy to find',
        'The form asks only for what you actually need',
        'Your email or phone is visible, not hidden',
        'The form works and is easy to use on a phone',
      ],
    },
    {
      title: 'Follow-up readiness',
      description: 'Capturing an inquiry only helps if you can act on it.',
      items: [
        'New inquiries land somewhere you check daily',
        'You have a consistent way to reply within a day',
        'Warm leads get a follow-up if they go quiet',
        'You can tell which inquiries still need a response',
      ],
    },
  ],
  scoring: [
    {
      range: '24 to 28',
      label: 'Strong',
      text: 'Your site is doing its job. Small tune-ups will sharpen it further.',
    },
    {
      range: '16 to 23',
      label: 'Solid with gaps',
      text: 'The basics are there. A focused refresh would close the gaps that cost you leads.',
    },
    {
      range: '8 to 15',
      label: 'Needs work',
      text: 'A few clear problems are likely costing you inquiries. A rescue sprint is a good fit.',
    },
    {
      range: '0 to 7',
      label: 'Time to rebuild',
      text: 'A modern, mobile-first rebuild will do more than patching the current site.',
    },
  ],
}
