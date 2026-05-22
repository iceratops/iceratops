import { ButtonLink } from '@/components/primitives/Button'
import { Card } from '@/components/primitives/Card'
import { services } from '@/content/services'
import { contactPage, site } from '@/content/site'

const fieldClassName =
  'mt-2 min-h-11 w-full rounded-lg border border-white/15 bg-slate-950/55 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/30'

const radioClassName =
  'mt-1 h-4 w-4 border-white/30 bg-slate-950 text-amber-300 focus:ring-2 focus:ring-amber-300/40'

export function ContactFormShell() {
  return (
    <Card>
      <form aria-describedby="contact-submission-note" aria-label={contactPage.formTitle}>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white" htmlFor="contact-name">
              Name
            </label>
            <input className={fieldClassName} id="contact-name" name="name" required type="text" />
          </div>

          <div>
            <label className="text-sm font-semibold text-white" htmlFor="contact-email">
              Email
            </label>
            <input
              className={fieldClassName}
              id="contact-email"
              name="email"
              required
              type="email"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-white" htmlFor="contact-phone">
              Phone
            </label>
            <input className={fieldClassName} id="contact-phone" name="phone" type="tel" />
          </div>

          <div>
            <label className="text-sm font-semibold text-white" htmlFor="contact-business">
              Business name
            </label>
            <input className={fieldClassName} id="contact-business" name="business" type="text" />
          </div>
        </div>

        <fieldset className="mt-7">
          <legend className="text-sm font-semibold text-white">{contactPage.helpLabel}</legend>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {services.map((service) => (
              <label
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-200"
                htmlFor={`contact-service-${service.slug}`}
                key={service.slug}
              >
                <input
                  className={radioClassName}
                  id={`contact-service-${service.slug}`}
                  name="service"
                  type="radio"
                  value={service.name}
                />
                <span>{service.name}</span>
              </label>
            ))}
            <label
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-200"
              htmlFor="contact-service-unsure"
            >
              <input
                className={radioClassName}
                id="contact-service-unsure"
                name="service"
                type="radio"
                value={contactPage.unsureLabel}
              />
              <span>{contactPage.unsureLabel}</span>
            </label>
          </div>
        </fieldset>

        <div className="mt-7">
          <label className="text-sm font-semibold text-white" htmlFor="contact-business-story">
            {contactPage.businessLabel}
          </label>
          <textarea
            className={`${fieldClassName} min-h-36 resize-y`}
            id="contact-business-story"
            name="business-story"
            rows={6}
          />
        </div>

        <fieldset className="mt-7">
          <legend className="text-sm font-semibold text-white">
            {contactPage.preferredContactLabel}
          </legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-200"
              htmlFor="contact-preferred-email"
            >
              <input
                className={radioClassName}
                id="contact-preferred-email"
                name="preferred-contact"
                type="radio"
                value="email"
              />
              <span>Email</span>
            </label>
            <label
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-200"
              htmlFor="contact-preferred-phone"
            >
              <input
                className={radioClassName}
                id="contact-preferred-phone"
                name="preferred-contact"
                type="radio"
                value="phone"
              />
              <span>Phone</span>
            </label>
          </div>
        </fieldset>

        <div
          className="mt-8 rounded-lg border border-amber-300/30 bg-amber-300/10 p-5"
          id="contact-submission-note"
        >
          <p className="text-sm leading-6 text-amber-50">{contactPage.submissionNote}</p>
          <div className="mt-4">
            <ButtonLink
              className="w-full sm:w-auto"
              href={`mailto:${site.contact.email}?subject=${site.contact.reviewSubject}`}
            >
              Email {site.contact.email}
            </ButtonLink>
          </div>
        </div>
      </form>
    </Card>
  )
}
