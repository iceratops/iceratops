'use client'

import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'
import { Button } from '@/components/primitives/Button'
import { site } from '@/content/site'

type SubmitState = 'idle' | 'submitting' | 'error'

const fieldClasses =
  'mt-2 w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-white focus:border-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-300/40'
const labelClasses = 'block text-sm font-semibold text-white'

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export function ContactForm() {
  const router = useRouter()
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

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
      router.push('/contact/success')
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <form
      action="/contact/success"
      className="space-y-5"
      data-netlify="true"
      method="POST"
      name="contact"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Do not fill this out if you are human: <input name="bot-field" />
        </label>
      </p>

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
          Business name <span className="font-normal text-slate-400">(optional)</span>
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
        <label className={labelClasses} htmlFor="message">
          What do you want cleaned up?
        </label>
        <textarea className={fieldClasses} id="message" name="message" required rows={5} />
      </div>

      <div>
        <Button className="w-full sm:w-auto" disabled={submitState === 'submitting'} type="submit">
          {submitState === 'submitting' ? 'Sending...' : 'Send request'}
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
