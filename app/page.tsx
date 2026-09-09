import { Engagements } from '@/components/marketing/home/Engagements'
import { FinalCta } from '@/components/marketing/home/FinalCta'
import { FounderLed } from '@/components/marketing/home/FounderLed'
import { Hero } from '@/components/marketing/home/Hero'
import { InquiryDemo } from '@/components/marketing/home/InquiryDemo'
import { ProcessSteps } from '@/components/marketing/home/ProcessSteps'
import { WhatWeBuild } from '@/components/marketing/home/WhatWeBuild'
import { site } from '@/content/site'
import { buildMetadata } from '@/lib/seo'
import { getWorkingDemoUrl } from '@/lib/working-demo'

export const metadata = buildMetadata({
  title: 'Iceratops | Custom Software, Websites & Workflow Automation',
  description: site.shortDescription,
  path: '/',
  absoluteTitle: true,
})

export default function Home() {
  const workingDemoUrl = getWorkingDemoUrl()

  return (
    <>
      <Hero />
      <WhatWeBuild />
      <ProcessSteps />
      <FounderLed />
      <Engagements />
      <InquiryDemo workingDemoUrl={workingDemoUrl} />
      <FinalCta />
    </>
  )
}
