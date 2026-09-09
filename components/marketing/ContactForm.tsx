'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type FocusEvent, type FormEvent, useEffect, useRef, useState } from 'react'
import { CountrySelect } from '@/components/marketing/CountrySelect'
import { Button } from '@/components/primitives/Button'
import { site } from '@/content/site'
import {
  type ContactErrors,
  type ContactField,
  type ContactValues,
  fieldLimits,
  validateContact,
  validateContactField,
} from '@/lib/contact-form'

type SubmitState = 'idle' | 'submitting' | 'error' | 'preview'

const fieldClasses =
  'mt-2 w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-white transition-colors placeholder:text-slate-400 hover:border-white/25 focus:border-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-300/40'
const labelClasses = 'block text-sm font-semibold text-white'

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export function ContactForm() {
  const router = useRouter()
  const [isInteractive, setIsInteractive] = useState(false)
  const [isLocalPreview, setIsLocalPreview] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errors, setErrors] = useState<ContactErrors>({})
  const [messageLength, setMessageLength] = useState(0)
  const submittingRef = useRef(false)

  useEffect(() => {
    setIsLocalPreview(['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname))
    setIsInteractive(true)
  }, [])

  function handleBlur(event: FocusEvent<HTMLFormElement>) {
    const field = event.target
    if (
      !(field instanceof HTMLInputElement) &&
      !(field instanceof HTMLSelectElement) &&
      !(field instanceof HTMLTextAreaElement)
    )
      return
    if (!Object.hasOwn(fieldLimits, field.name)) return
    const name = field.name as ContactField
    setErrors((current) => ({ ...current, [name]: validateContactField(name, field.value) }))
  }

  function fieldError(name: ContactField) {
    return errors[name] ? (
      <p className="mt-2 text-sm leading-6 text-amber-200" id={`${name}-error`}>
        {errors[name]}
      </p>
    ) : null
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submittingRef.current || submitState === 'submitting') return
    const form = event.currentTarget
    const data = new FormData(form)
    const values = Object.fromEntries(
      Object.keys(fieldLimits).map((field) => [field, String(data.get(field) ?? '').trim()]),
    ) as ContactValues
    const validationErrors = validateContact(values)
    setErrors(validationErrors)
    setSubmitState('idle')
    const firstInvalidField = Object.keys(validationErrors)[0]
    if (firstInvalidField) {
      const input = form.elements.namedItem(firstInvalidField) as HTMLElement | null
      requestAnimationFrame(() => input?.focus())
      return
    }
    // Local Next.js cannot deliver Netlify Forms submissions. Validate without
    // posting or redirecting to a receipt page that would imply delivery.
    if (isLocalPreview) {
      setSubmitState('preview')
      return
    }
    const payload: Record<string, string> = { 'form-name': 'contact' }
    data.forEach((value, key) => {
      payload[key] = typeof value === 'string' ? value : ''
    })
    Object.assign(payload, values)
    // Preserve the original full-name field for existing Netlify integrations.
    payload.name = [values['first-name'], values['last-name']].filter(Boolean).join(' ')

    submittingRef.current = true
    setSubmitState('submitting')
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
        signal: controller.signal,
      })
      if (!response.ok) {
        throw new Error('Request failed')
      }
      router.push('/free-workflow-review/success')
    } catch {
      setSubmitState('error')
    } finally {
      clearTimeout(timeout)
      submittingRef.current = false
    }
  }

  return (
    // Netlify's Next.js runtime requires this submission to use AJAX. Keep the
    // submit control disabled until hydration so the form cannot imply a
    // supported full-page fallback; the noscript message provides email instead.
    <form
      action="/__forms.html"
      aria-busy={submitState === 'submitting'}
      className="space-y-5"
      data-netlify="true"
      method="POST"
      name="contact"
      netlify-honeypot="bot-field"
      noValidate
      onBlur={handleBlur}
      onInput={() => {
        if (submitState === 'error' || submitState === 'preview') setSubmitState('idle')
      }}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="name" />
      {/* Spam honeypot: hidden from humans and assistive tech, only bots fill it. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="bot-field">Leave this field empty</label>
        <input autoComplete="off" id="bot-field" name="bot-field" tabIndex={-1} />
      </div>

      <div>
        <label className={labelClasses} htmlFor="first-name">
          First name
        </label>
        <input
          aria-describedby={errors['first-name'] ? 'first-name-error' : undefined}
          aria-invalid={Boolean(errors['first-name'])}
          autoComplete="given-name"
          className={fieldClasses}
          id="first-name"
          maxLength={fieldLimits['first-name']}
          name="first-name"
          required
          type="text"
        />
        {fieldError('first-name')}
      </div>

      <div>
        <label className={labelClasses} htmlFor="last-name">
          Last name <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input
          aria-describedby={errors['last-name'] ? 'last-name-error' : undefined}
          aria-invalid={Boolean(errors['last-name'])}
          autoComplete="family-name"
          className={fieldClasses}
          id="last-name"
          maxLength={fieldLimits['last-name']}
          name="last-name"
          type="text"
        />
        {fieldError('last-name')}
      </div>

      <div>
        <label className={labelClasses} htmlFor="email">
          Email
        </label>
        <input
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={Boolean(errors.email)}
          autoCapitalize="none"
          autoComplete="email"
          className={fieldClasses}
          id="email"
          maxLength={fieldLimits.email}
          name="email"
          required
          spellCheck={false}
          type="email"
        />
        {fieldError('email')}
      </div>

      <div>
        <label className={labelClasses} htmlFor="business">
          Company or organization <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input
          aria-describedby={errors.business ? 'business-error' : undefined}
          aria-invalid={Boolean(errors.business)}
          autoComplete="organization"
          className={fieldClasses}
          id="business"
          maxLength={fieldLimits.business}
          name="business"
          type="text"
        />
        {fieldError('business')}
      </div>

      <div>
        <label className={labelClasses} htmlFor="region">
          Country or region <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <CountrySelect
          className={fieldClasses}
          error={errors.region}
          onValueChange={(value) => {
            setErrors((current) => ({
              ...current,
              region: current.region ? validateContactField('region', value) : undefined,
            }))
            if (submitState === 'error' || submitState === 'preview') setSubmitState('idle')
          }}
        />
        {fieldError('region')}
      </div>

      <div>
        <label className={labelClasses} htmlFor="website">
          Website URL <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input
          aria-describedby={errors.website ? 'website-error' : undefined}
          aria-invalid={Boolean(errors.website)}
          autoCapitalize="none"
          autoComplete="url"
          className={fieldClasses}
          id="website"
          maxLength={fieldLimits.website}
          name="website"
          placeholder="https://example.com"
          spellCheck={false}
          type="url"
        />
        {fieldError('website')}
      </div>

      <div>
        <label className={labelClasses} htmlFor="message">
          What are you trying to build or improve?
        </label>
        <p className="mt-1 text-sm leading-6 text-slate-400" id="message-help">
          Share the current situation, the outcome you want, and any important constraints.
        </p>
        <textarea
          aria-describedby={`message-help message-count${errors.message ? ' message-error' : ''}`}
          aria-invalid={Boolean(errors.message)}
          className={fieldClasses}
          id="message"
          maxLength={fieldLimits.message}
          name="message"
          onChange={(event) => setMessageLength(event.target.value.length)}
          required
          rows={5}
        />
        <p className="mt-2 text-sm text-slate-400" id="message-count">
          {messageLength.toLocaleString('en-US')} / {fieldLimits.message.toLocaleString('en-US')}{' '}
          characters
        </p>
        {fieldError('message')}
      </div>

      <p className="text-sm leading-6 text-slate-400">
        We use these details to review your request and reply. Read the{' '}
        <Link className="font-semibold text-amber-200 underline underline-offset-4" href="/privacy">
          privacy notice
        </Link>
        .
      </p>

      <noscript>
        <p className="text-sm leading-6 text-amber-200">
          JavaScript is required to submit this form online. Email{' '}
          <a
            className="font-semibold underline underline-offset-4"
            href={`mailto:${site.contact.email}?subject=${site.contact.projectSubject}`}
          >
            {site.contact.email}
          </a>{' '}
          instead.
        </p>
      </noscript>

      <div>
        {isLocalPreview && (
          <p className="mb-3 text-sm leading-6 text-slate-400">
            Local preview: check your entries here. Inquiries are sent from the live site.
          </p>
        )}
        <Button
          className="w-full sm:w-auto"
          disabled={!isInteractive || submitState === 'submitting'}
          type="submit"
        >
          {submitState === 'submitting'
            ? 'Sending...'
            : isLocalPreview
              ? 'Check inquiry'
              : 'Send project inquiry'}
        </Button>
      </div>

      {submitState === 'preview' && (
        <p className="text-sm leading-6 text-amber-200" role="status">
          Your entries passed validation. This is a local preview, so no inquiry was sent.
        </p>
      )}

      {submitState === 'error' && (
        <p className="text-sm leading-6 text-amber-200" role="alert">
          Something went wrong sending your note. Please email{' '}
          <a
            className="font-semibold underline underline-offset-4"
            href={`mailto:${site.contact.email}`}
          >
            {site.contact.email}
          </a>{' '}
          and we will reply within one business day.
        </p>
      )}
    </form>
  )
}
