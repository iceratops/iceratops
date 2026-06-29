export type DemoSummary = {
  slug: string
  name: string
  category: string
  summary: string
}

export const demos = [
  {
    slug: 'austin-drainage-lawn-leveling',
    name: 'Austin Drainage and Lawn Leveling',
    category: 'Home services',
    summary:
      'A sample site for a fictional drainage and lawn leveling business, showing services, service areas, and a clear inquiry path.',
  },
] as const satisfies readonly DemoSummary[]

export type DemoItem = (typeof demos)[number]

export type DemoFeature = {
  title: string
  text: string
}

export type DemoSite = {
  slug: string
  businessName: string
  eyebrow: string
  tagline: string
  heroDescription: string
  services: readonly DemoFeature[]
  drainage: {
    title: string
    intro: string
    items: readonly DemoFeature[]
  }
  lawnLeveling: {
    title: string
    intro: string
    items: readonly DemoFeature[]
  }
  serviceAreas: readonly string[]
  exampleReviews: readonly { quote: string; name: string }[]
  inquiry: {
    title: string
    description: string
  }
}

export const demoSites: Record<string, DemoSite> = {
  'austin-drainage-lawn-leveling': {
    slug: 'austin-drainage-lawn-leveling',
    businessName: 'Austin Drainage and Lawn Leveling',
    eyebrow: 'Home services',
    tagline: 'Fix the water. Level the yard. Keep your foundation safe.',
    heroDescription:
      'A fictional drainage and lawn leveling company serving the greater Austin area. This is an example site built to show what Iceratops can build for a local service business.',
    services: [
      {
        title: 'Yard drainage',
        text: 'French drains, surface drains, and grading to move water away from your home.',
      },
      {
        title: 'Lawn leveling',
        text: 'Topdressing and regrading to smooth low spots, ruts, and uneven ground.',
      },
      {
        title: 'Foundation grading',
        text: 'Soil grading around the foundation to reduce pooling and protect your slab.',
      },
    ],
    drainage: {
      title: 'Drainage solutions',
      intro:
        'Standing water and soggy spots usually point to a drainage problem. We find the cause and route water away for good.',
      items: [
        {
          title: 'French drains',
          text: 'Buried gravel and pipe systems that collect and carry water away.',
        },
        {
          title: 'Surface drains',
          text: 'Catch basins and channel drains for patios, driveways, and low spots.',
        },
        {
          title: 'Downspout extensions',
          text: 'Carry roof runoff well past the foundation instead of beside it.',
        },
        {
          title: 'Regrading',
          text: 'Reshape the slope of the yard so water flows where it should.',
        },
      ],
    },
    lawnLeveling: {
      title: 'Lawn leveling',
      intro:
        'A bumpy lawn is hard to mow and easy to trip on. We level the surface so the yard is safe and usable again.',
      items: [
        {
          title: 'Topdressing',
          text: 'A sand and soil blend spread to fill shallow dips and ruts.',
        },
        { title: 'Low spot repair', text: 'Build up sunken areas that collect water after rain.' },
        {
          title: 'Full regrade',
          text: 'Reshape larger yards that have settled or washed out over time.',
        },
        { title: 'Reseeding', text: 'Seed or sod over leveled areas so the lawn grows back even.' },
      ],
    },
    serviceAreas: ['Pflugerville', 'Austin', 'Round Rock', 'Hutto', 'Cedar Park', 'Georgetown'],
    exampleReviews: [
      {
        quote:
          'They found where the water was pooling and fixed it in a day. The backyard finally drains.',
        name: 'Example homeowner, Pflugerville',
      },
      {
        quote: 'Our lawn was full of ruts. After leveling it is smooth and easy to mow again.',
        name: 'Example homeowner, Round Rock',
      },
    ],
    inquiry: {
      title: 'Request a free yard assessment',
      description:
        'Tell us what is happening in your yard and we will follow up to schedule a visit.',
    },
  },
}
