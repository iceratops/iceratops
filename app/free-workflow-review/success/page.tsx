import { ButtonLink } from '@/components/primitives/Button'
import { Container } from '@/components/primitives/Container'
import { Section } from '@/components/primitives/Section'
import { contactPage } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Free Workflow Review',
  description: 'Thanks for requesting a free workflow review. We reply within one business day.',
  path: '/free-workflow-review/success',
  noIndex: true,
})

export default function FreeWorkflowReviewSuccessPage() {
  return (
    <Section className="pb-20 pt-16 sm:pb-28 sm:pt-24">
      <Container size="narrow">
        <div className="reveal mx-auto max-w-lg rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur sm:p-12">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/[0.12] text-amber-300">
            <svg
              aria-hidden="true"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h1 className="font-orbitron mt-6 break-words text-2xl font-bold leading-snug text-white sm:text-3xl">
            {contactPage.success.title}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-300">
            {contactPage.success.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href="/">
              Back to home
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href="/services" variant="secondary">
              View services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}
