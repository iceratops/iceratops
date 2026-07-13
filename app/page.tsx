import { FinalCta } from '@/components/marketing/home/FinalCta'
import { FounderLed } from '@/components/marketing/home/FounderLed'
import { Hero } from '@/components/marketing/home/Hero'
import { InquiryDemo } from '@/components/marketing/home/InquiryDemo'
import { Pricing } from '@/components/marketing/home/Pricing'
import { ProcessSteps } from '@/components/marketing/home/ProcessSteps'
import { WhatWeBuild } from '@/components/marketing/home/WhatWeBuild'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Iceratops | Web & Workflow Studio in Pflugerville, TX',
  description:
    'Clean websites and practical, human-reviewed follow-up systems for small businesses in Pflugerville, Austin, and beyond.',
  path: '/',
  absoluteTitle: true,
})

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <InquiryDemo />
      <ProcessSteps />
      <FounderLed />
      <Pricing />
      <FinalCta />
    </>
  )
}
