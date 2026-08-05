import { FinalCta } from '@/components/marketing/home/FinalCta'
import { FounderLed } from '@/components/marketing/home/FounderLed'
import { Hero } from '@/components/marketing/home/Hero'
import { InquiryDemo } from '@/components/marketing/home/InquiryDemo'
import { Pricing } from '@/components/marketing/home/Pricing'
import { ProcessSteps } from '@/components/marketing/home/ProcessSteps'
import { WhatWeBuild } from '@/components/marketing/home/WhatWeBuild'
import { buildMetadata } from '@/lib/seo'
import { getWorkingDemoUrl } from '@/lib/working-demo'

export const metadata = buildMetadata({
  title: 'Iceratops | Custom Software, Websites & Workflow Automation',
  description:
    'Iceratops builds custom software, digital platforms, modern websites, workflow automation, and AI-assisted systems for organizations in the U.S. and worldwide.',
  path: '/',
  absoluteTitle: true,
})

export default function Home() {
  const workingDemoUrl = getWorkingDemoUrl()

  return (
    <>
      <Hero />
      <WhatWeBuild />
      <InquiryDemo workingDemoUrl={workingDemoUrl} />
      <ProcessSteps />
      <FounderLed />
      <Pricing />
      <FinalCta />
    </>
  )
}
