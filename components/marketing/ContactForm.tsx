'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type FormEvent, useEffect, useState } from 'react'
import { Button } from '@/components/primitives/Button'
import { site } from '@/content/site'

type SubmitState = 'idle' | 'submitting' | 'error'

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
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  useEffect(() => {
    setIsInteractive(true)
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload: Record<string, string> = { 'form-name': 'contact' }
    data.forEach((value, key) => {
      payload[key] = typeof value === 'string' ? value : ''
    })

    setSubmitState('submitting')
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })
      if (!response.ok) {
        throw new Error('Request failed')
      }
      router.push('/free-workflow-review/success')
    } catch {
      setSubmitState('error')
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
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      {/* Spam honeypot: hidden from humans and assistive tech, only bots fill it. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="bot-field">Leave this field empty</label>
        <input autoComplete="off" id="bot-field" name="bot-field" tabIndex={-1} />
      </div>

      <div>
        <label className={labelClasses} htmlFor="name">
          Your name
        </label>
        <input
          autoComplete="name"
          className={fieldClasses}
          id="name"
          name="name"
          required
          type="text"
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="email">
          Email
        </label>
        <input
          autoComplete="email"
          className={fieldClasses}
          id="email"
          name="email"
          required
          type="email"
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="business">
          Company or organization <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input
          autoComplete="organization"
          className={fieldClasses}
          id="business"
          name="business"
          type="text"
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="region">
          Country or region <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input
          autoComplete="country-name"
          className={fieldClasses}
          id="region"
          name="region"
          type="text"
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="website">
          Website URL <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input autoComplete="url" className={fieldClasses} id="website" name="website" type="url" />
      </div>

      <div>
        <label className={labelClasses} htmlFor="message">
          What are you trying to build or improve?
        </label>
        <p className="mt-1 text-sm leading-6 text-slate-400" id="message-help">
          Share the current situation, the outcome you want, and any important constraints.
        </p>
        <textarea
          aria-describedby="message-help"
          className={fieldClasses}
          id="message"
          name="message"
          required
          rows={5}
        />
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
        <Button
          className="w-full sm:w-auto"
          disabled={!isInteractive || submitState === 'submitting'}
          type="submit"
        >
          {submitState === 'submitting' ? 'Sending...' : 'Send project inquiry'}
        </Button>
      </div>

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
