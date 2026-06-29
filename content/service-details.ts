export type ProcessPhase = {
  name: string
  detail: string
}

export type ServiceDetail = {
  slug: string
  kind: 'service' | 'package'
  eyebrow: string
  name: string
  summary: string
  whoFor: readonly string[]
  problems: readonly string[]
  included: readonly string[]
  notIncluded: readonly string[]
  process: readonly ProcessPhase[]
  pricingNote: string
}

const sharedPricingNote =
  'You get a custom quote after your free workflow review. No long contracts to start.'

export const serviceDetails = [
  {
    slug: 'ai-workflow-audit',
    kind: 'service',
    eyebrow: 'Service',
    name: 'AI Workflow Audit',
    summary:
      'We map how inquiries, bookings, and admin work move through your business today, then show where AI can help and where it should stay out.',
    whoFor: [
      'Owners who feel buried in repeat tasks but are not sure what to fix first',
      'Teams curious about AI who want a practical plan, not hype',
      'Businesses about to rebuild a site or workflow and want to start in the right place',
    ],
    problems: [
      'You sense time is leaking, but you cannot point to where',
      'AI tools look promising and overwhelming at the same time',
      'Past tools were bought before anyone understood the workflow',
    ],
    included: [
      'A working call to walk your current inquiry, booking, and admin flows',
      'A plain-English map of how the work moves today',
      'Two or three concrete fixes, ranked by effort and payoff',
      'A short written summary you keep, with clear next steps',
    ],
    notIncluded: [
      'No tools sold during the audit',
      'No pressure to start a project',
      'No fully autonomous AI recommendations',
    ],
    process: [
      { name: 'Walkthrough', detail: 'We talk through how the work happens now, step by step.' },
      {
        name: 'Map',
        detail: 'We write down the workflow in plain language so the gaps are visible.',
      },
      { name: 'Recommend', detail: 'You get a short, ranked list of practical fixes you can own.' },
    ],
    pricingNote: sharedPricingNote,
  },
  {
    slug: 'website-refresh',
    kind: 'service',
    eyebrow: 'Service',
    name: 'Website Refresh',
    summary:
      'Keep what already works and fix the rest. We refresh copy, layout, and mobile feel so your current site matches the business you run today.',
    whoFor: [
      'Owners with a site that is dated but not worth rebuilding from scratch',
      'Businesses whose services have changed since the site was built',
      'Anyone whose site looks rough or slow on a phone',
    ],
    problems: [
      'Your site no longer matches your real services or prices',
      'It looks fine on a laptop and breaks on a phone',
      'Visitors cannot quickly tell what to do next',
    ],
    included: [
      'A mobile-first cleanup on your current platform',
      'Clearer copy and a stronger path to contact you',
      'Faster pages and tidier forms',
      'A short list of anything better handled by a full rebuild',
    ],
    notIncluded: [
      'No forced platform migration',
      'No custom photography or new brand assets',
      'No full rebuild unless the refresh is not enough',
    ],
    process: [
      {
        name: 'Review',
        detail: 'We audit your current site against what your business needs now.',
      },
      { name: 'Refresh', detail: 'We tighten copy, layout, and mobile feel where it counts most.' },
      { name: 'Handoff', detail: 'You get the updated site plus notes on how to keep it current.' },
    ],
    pricingNote: sharedPricingNote,
  },
  {
    slug: 'modern-website',
    kind: 'service',
    eyebrow: 'Service',
    name: 'Modern Website Build',
    summary:
      'A new, mobile-first website built around your real services, with a clear conversion path a busy owner can keep up with.',
    whoFor: [
      'Owners launching, rebranding, or outgrowing a template site',
      'Businesses that need a site to earn trust on the first scroll',
      'Teams that want lead capture wired in from day one',
    ],
    problems: [
      'Your current site does not reflect how good the work really is',
      'New visitors leave before they understand what you offer',
      'Inquiries arrive in scattered places with no clear path',
    ],
    included: [
      'Mobile-first responsive design in your brand',
      'Copy written for your real audience',
      'Lead capture and contact paths built in',
      'Documentation so you can run the site yourself',
    ],
    notIncluded: [
      'No brand or logo design from scratch',
      'No ongoing ad management',
      'No e-commerce store setup in this pass',
    ],
    process: [
      {
        name: 'Plan',
        detail: 'We agree on pages, structure, and the one action visitors should take.',
      },
      { name: 'Build', detail: 'We design and build mobile-first, showing working drafts early.' },
      { name: 'Launch', detail: 'We ship the site, wire up contact, and hand over documentation.' },
    ],
    pricingNote: sharedPricingNote,
  },
  {
    slug: 'inquiry-follow-up-systems',
    kind: 'service',
    eyebrow: 'Service',
    name: 'Inquiry and Follow-Up System',
    summary:
      'Catch every inquiry and follow up before the lead goes cold. AI-assisted drafts and a simple tracker keep replies fast and still sounding like you.',
    whoFor: [
      'Owners losing leads in inboxes, texts, and DMs',
      'Teams that reply late because the day gets away from them',
      'Businesses that want faster follow-up without a bigger team',
    ],
    problems: [
      'Good leads land in too many places and slip through',
      'Follow-up depends on remembering, so warm leads go quiet',
      'Writing the same first reply over and over eats your time',
    ],
    included: [
      'A simple tracker so no new lead is missed',
      'AI-drafted replies you approve before they send',
      'Reminders so warm leads get a timely nudge',
      'A short guide so your team can run it without us',
    ],
    notIncluded: [
      'No replies sent without your review',
      'No autonomous AI acting on its own',
      'No spammy bulk messaging',
    ],
    process: [
      { name: 'Capture', detail: 'We bring scattered inquiries into one place you check daily.' },
      { name: 'Assist', detail: 'We set up AI drafts and reminders, with a human approval step.' },
      { name: 'Own', detail: 'We document the flow so your team keeps it running.' },
    ],
    pricingNote: sharedPricingNote,
  },
  {
    slug: 'booking-requests',
    kind: 'service',
    eyebrow: 'Service',
    name: 'Booking or Request Workflow',
    summary:
      'Turn booking and request questions into real appointments. A workflow tuned to your service, with clear inputs and a clean handoff to your calendar.',
    whoFor: [
      'Service businesses that schedule jobs, tours, or consults',
      'Studios and classes that need a calmer booking flow',
      'Owners taking requests by phone and DM who want them in one place',
    ],
    problems: [
      'Back-and-forth messages slow every booking down',
      'Requests arrive without the details you need to act',
      'Confirmations are manual, so some never go out',
    ],
    included: [
      'A mobile-friendly request or booking form',
      'The right questions so each request is ready to act on',
      'Confirmations that read like a person sent them',
      'A clean handoff to your calendar or CRM',
    ],
    notIncluded: [
      'No payment processing setup in this pass',
      'No complex enterprise scheduling tools',
      'No removing the human from final scheduling',
    ],
    process: [
      { name: 'Scope', detail: 'We define what a complete request looks like for your service.' },
      { name: 'Build', detail: 'We set up the form, confirmations, and calendar handoff.' },
      { name: 'Handoff', detail: 'We document it so your team can adjust it later.' },
    ],
    pricingNote: sharedPricingNote,
  },
  {
    slug: 'admin-automation',
    kind: 'service',
    eyebrow: 'Service',
    name: 'Admin Automation Sprint',
    summary:
      'A short, scoped sprint that removes small repetitive tasks from your week, with documentation so you stay in control of every step.',
    whoFor: [
      'Owners doing the same copy-paste tasks every week',
      'Small teams stuck on manual data entry and updates',
      'Businesses that want automation they can read and edit',
    ],
    problems: [
      'Repeat tasks pile up and crowd out real work',
      'Information lives in too many disconnected places',
      'Past automations were a black box no one could maintain',
    ],
    included: [
      'A focused two-week scope on one or two clear tasks',
      'Automation built so you can read and edit it',
      'A human review step where judgment matters',
      'A documented handoff at the end',
    ],
    notIncluded: [
      'No sprawling all-in-one platform build',
      'No automation that hides how it works',
      'No automating decisions that need a person',
    ],
    process: [
      { name: 'Pick', detail: 'We choose one or two repetitive tasks worth removing first.' },
      { name: 'Sprint', detail: 'We build and test the automation over about two weeks.' },
      { name: 'Document', detail: 'We hand it over with notes so you stay in control.' },
    ],
    pricingNote: sharedPricingNote,
  },
  {
    slug: 'local-growth-system',
    kind: 'package',
    eyebrow: 'Productized package',
    name: 'Local Growth System',
    summary:
      'A premium package for local service businesses that need a better website, steady inquiry capture, faster follow-up, and a simpler admin workflow, set up together.',
    whoFor: [
      'Established local service businesses ready to look the part',
      'Owners who want website, inquiries, and follow-up handled as one system',
      'Teams that lose leads today and want a dependable path to fix it',
    ],
    problems: [
      'A dated site, scattered inquiries, and slow follow-up all at once',
      'Each fix in isolation never quite sticks',
      'You want one partner to set the whole path up cleanly',
    ],
    included: [
      'A modern, mobile-first website built around your services',
      'Inquiry capture that brings leads into one place',
      'AI-assisted follow-up with a human approval step',
      'One admin workflow tidied up and documented',
      'A handoff guide so your team can run it all',
    ],
    notIncluded: [
      'No ongoing ad management',
      'No social media management',
      'No autonomous AI running your business',
    ],
    process: [
      { name: 'Review', detail: 'We start with a free workflow review to confirm the fit.' },
      {
        name: 'Build',
        detail: 'We set up the site, inquiry capture, and follow-up as one system.',
      },
      { name: 'Handoff', detail: 'We document everything and hand you a system you own.' },
    ],
    pricingNote:
      'A premium package scoped to your business. You get a custom quote after your free workflow review.',
  },
  {
    slug: 'website-rescue-sprint',
    kind: 'package',
    eyebrow: 'Productized package',
    name: 'Website Rescue Sprint',
    summary:
      'An entry package for businesses with an outdated, confusing, slow, or weak-on-mobile website. A focused sprint to make your site clear and trustworthy again.',
    whoFor: [
      'Owners whose site no longer reflects the quality of their work',
      'Businesses whose site is slow or hard to use on a phone',
      'Anyone who needs a quick, honest fix before a bigger rebuild',
    ],
    problems: [
      'Your site looks dated next to the work you actually do',
      'It loads slowly or breaks on common phones',
      'Visitors cannot tell what you offer or how to reach you',
    ],
    included: [
      'A focused sprint on your highest-impact pages',
      'A mobile-first cleanup of layout and speed',
      'Clearer copy and an obvious way to make contact',
      'A short list of what a full rebuild would add later',
    ],
    notIncluded: [
      'No full ground-up rebuild in this package',
      'No brand or logo design from scratch',
      'No new photography or brand assets',
    ],
    process: [
      { name: 'Triage', detail: 'We find the pages and problems hurting you most right now.' },
      { name: 'Fix', detail: 'We clean up layout, speed, copy, and contact paths.' },
      { name: 'Handoff', detail: 'We hand back a clearer site and notes on what is next.' },
    ],
    pricingNote:
      'An entry package with a fixed, focused scope. You get a custom quote after your free workflow review.',
  },
] as const satisfies readonly ServiceDetail[]

export type ServiceDetailItem = (typeof serviceDetails)[number]

export const serviceDetailMap: Record<string, ServiceDetailItem> = Object.fromEntries(
  serviceDetails.map((detail) => [detail.slug, detail]),
)

export const packages = serviceDetails.filter((detail) => detail.kind === 'package')
