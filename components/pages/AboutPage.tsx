import Image from 'next/image'
import { CheckList } from '@/components/marketing/CheckList'
import { PageHero } from '@/components/marketing/PageHero'
import { Card } from '@/components/primitives/Card'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { aboutPage, site } from '@/content/site'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

export default function AboutPage({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslator(locale)
  return (
    <>
      <PageHero
        description={t(aboutPage.description)}
        eyebrow={t(aboutPage.eyebrow)}
        title={t(aboutPage.title)}
      />

      <Section className="pb-16 pt-8 sm:pb-24 sm:pt-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="reveal max-w-2xl space-y-5">
              {aboutPage.story.map((paragraph) => (
                <p className="text-base leading-7 text-slate-200" key={paragraph.slice(0, 24)}>
                  {t(paragraph)}
                </p>
              ))}
            </div>
            <Card className="reveal h-full" style={{ transitionDelay: '120ms' }}>
              <div className="border-b border-white/10 pb-5">
                <Image
                  alt="Iceratops"
                  className="h-16 w-auto"
                  height={144}
                  src="/iceratops_logo.svg"
                  width={350}
                />
                <p className="font-orbitron mt-4 text-base font-semibold leading-snug text-white">
                  {t('Founder-led. Direct from the start.')}
                </p>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-300">{t(site.availability)}</p>
              <p className="mt-6 text-sm font-semibold text-white">{t('What you can count on')}</p>
              <CheckList className="mt-4" items={site.commitments.map((value) => t(value))} />
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}
