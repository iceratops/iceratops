import { FinalCta } from '@/components/marketing/home/FinalCta'
import { Hero } from '@/components/marketing/home/Hero'
import { ProcessSection } from '@/components/marketing/home/ProcessSection'
import { WhatWeDo } from '@/components/marketing/home/WhatWeDo'
import { WhyIceratops } from '@/components/marketing/home/WhyIceratops'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Iceratops',
  description:
    'Clean websites and simple inquiry and follow-up workflows for small businesses in Pflugerville, Austin, and beyond.',
  path: '/',
  absoluteTitle: true,
})

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ProcessSection />
      <WhyIceratops />
      <FinalCta />
    </>
  )
}
