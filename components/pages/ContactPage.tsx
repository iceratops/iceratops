import { ContactForm } from '@/components/marketing/ContactForm'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { workflowReviewFormId } from '@/content/navigation'
import { contactPage, site } from '@/content/site'
import type { Locale } from '@/lib/i18n'
import { getTranslator } from '@/lib/translations'

export default function ContactPage({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslator(locale)
  return (
    <Section className="pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pt-20">
      <Container size="narrow">
        <div className="reveal max-w-2xl">
          <h1 className="font-orbitron break-words text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t(contactPage.title)}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg">
            {t(contactPage.description)}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contactPage.reviewDetails.map((item, index) => (
            <div
              className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              key={item.title}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h2 className="font-orbitron text-sm font-semibold text-white">{t(item.title)}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{t(item.text)}</p>
            </div>
          ))}
        </div>

        <div
          className="reveal mt-10 scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8"
          id={workflowReviewFormId}
        >
          <ContactForm />
          <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
            {t('Prefer email?')}{' '}
            <a
              className="font-semibold text-amber-200 underline underline-offset-4"
              href={`mailto:${site.contact.email}?subject=${site.contact.projectSubject}`}
            >
              {t(site.contact.email)}
            </a>
          </p>
        </div>
      </Container>
    </Section>
  )
}
