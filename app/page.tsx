import { BeforeAfter } from '@/components/marketing/home/BeforeAfter'
import { FinalCta } from '@/components/marketing/home/FinalCta'
import { FlagshipOffer } from '@/components/marketing/home/FlagshipOffer'
import { FounderLed } from '@/components/marketing/home/FounderLed'
import { Hero } from '@/components/marketing/home/Hero'
import { HumanReviewedAi } from '@/components/marketing/home/HumanReviewedAi'
import { InquiryDemo } from '@/components/marketing/home/InquiryDemo'
import { Pricing } from '@/components/marketing/home/Pricing'
import { ProcessSteps } from '@/components/marketing/home/ProcessSteps'
import { WhatWeBuild } from '@/components/marketing/home/WhatWeBuild'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Iceratops',
  description:
    'A clean website and a human-reviewed system that captures every inquiry, replies fast, and follows up until it books. Founder-led, for small businesses in Pflugerville, Austin, and beyond.',
  path: '/',
  absoluteTitle: true,
})

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <BeforeAfter />
      <FlagshipOffer />
      <HumanReviewedAi />
      <InquiryDemo />
      <ProcessSteps />
      <FounderLed />
      <Pricing />
      <FinalCta />
    </>
  )
}
