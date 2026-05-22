import { FinalCta } from '@/components/marketing/home/FinalCta'
import { Hero } from '@/components/marketing/home/Hero'
import { HumanInLoopSection } from '@/components/marketing/home/HumanInLoopSection'
import { LocalPositioning } from '@/components/marketing/home/LocalPositioning'
import { ProblemSection } from '@/components/marketing/home/ProblemSection'
import { ProcessSection } from '@/components/marketing/home/ProcessSection'
import { ServicesOverview } from '@/components/marketing/home/ServicesOverview'
import { TrustSection } from '@/components/marketing/home/TrustSection'
import { UseCasesPreview } from '@/components/marketing/home/UseCasesPreview'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Iceratops',
  description:
    'Modern websites and human-reviewed AI-assisted workflows for owner-led businesses in Pflugerville, Austin, and beyond.',
  path: '/',
  absoluteTitle: true,
})

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesOverview />
      <HumanInLoopSection />
      <LocalPositioning />
      <UseCasesPreview />
      <ProcessSection />
      <TrustSection />
      <FinalCta />
    </>
  )
}
