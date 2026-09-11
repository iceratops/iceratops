import { Engagements } from '@/components/marketing/home/Engagements'
import { FinalCta } from '@/components/marketing/home/FinalCta'
import { FounderLed } from '@/components/marketing/home/FounderLed'
import { Hero } from '@/components/marketing/home/Hero'
import { InquiryDemo } from '@/components/marketing/home/InquiryDemo'
import { ProcessSteps } from '@/components/marketing/home/ProcessSteps'
import { WhatWeBuild } from '@/components/marketing/home/WhatWeBuild'
import { WebsiteJsonLd } from '@/components/seo/WebsiteJsonLd'
import type { Locale } from '@/lib/i18n'
import { getWorkingDemoUrl } from '@/lib/working-demo'

export default function HomePage({ locale = 'en' }: { locale?: Locale }) {
  const workingDemoUrl = getWorkingDemoUrl()

  return (
    <>
      <WebsiteJsonLd />
      <Hero locale={locale} />
      <WhatWeBuild locale={locale} />
      <ProcessSteps locale={locale} />
      <FounderLed locale={locale} />
      <Engagements locale={locale} />
      <InquiryDemo workingDemoUrl={workingDemoUrl} />
      <FinalCta locale={locale} />
    </>
  )
}
