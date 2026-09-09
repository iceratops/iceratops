import { countries } from '@/content/countries'

export const fieldLimits = {
  'first-name': 100,
  'last-name': 100,
  email: 254,
  business: 200,
  region: 100,
  'preferred-language': 100,
  website: 2048,
  message: 5000,
} as const

export type ContactField = keyof typeof fieldLimits
export type ContactValues = Record<ContactField, string>
export type ContactErrors = Partial<Record<ContactField, string>>

const countryNames = new Set<string>(countries.map((country) => country.name))

// Normalize international domain names for delivery while preserving the mailbox.
// Unicode mailbox names need SMTPUTF8 support from the receiving mail service.
export function normalizeContactEmail(value: string) {
  const parts = value.trim().split('@')
  if (parts.length !== 2 || /[\s/:?#[\]\\%]/u.test(parts[1])) return value.trim()
  try {
    return `${parts[0]}@${new URL(`https://${parts[1]}`).hostname}`
  } catch {
    return value.trim()
  }
}

function isEmail(value: string) {
  const parts = normalizeContactEmail(value).split('@')
  if (parts.length !== 2) return false
  const [local, domain] = parts
  if (
    local.length > 64 ||
    !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(local) ||
    local.startsWith('.') ||
    local.endsWith('.') ||
    local.includes('..')
  ) {
    return false
  }
  const labels = domain.split('.')
  return (
    labels.length >= 2 &&
    labels.every((label) => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label)) &&
    !/^\d+$/.test(labels[labels.length - 1])
  )
}

export function validateContactField(field: ContactField, rawValue: string): string | undefined {
  const value = rawValue.trim()
  if (!value) {
    if (field === 'first-name') return 'Enter your first name.'
    if (field === 'email') return 'Enter your email address.'
    if (field === 'message') return 'Tell us what you want to build or improve.'
    return
  }
  if (value.length > fieldLimits[field]) {
    return 'Use {limit} characters or fewer.'
  }
  if (field === 'email' && !isEmail(value)) {
    if (Array.from(value.split('@')[0]).some((character) => character.charCodeAt(0) > 127)) {
      return 'Use an email address with Latin letters before the @ sign. International domain names are supported.'
    }
    return 'Enter a valid email address, such as name@example.com.'
  }
  if (field === 'region' && !countryNames.has(value)) {
    return 'Choose a country or region from the list.'
  }
  if (field === 'website') {
    try {
      const url = new URL(value)
      if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
        return 'Enter an http:// or https:// website address without login details.'
      }
    } catch {
      return 'Enter a full website address, such as https://example.com.'
    }
  }
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  for (const field of Object.keys(fieldLimits) as ContactField[]) {
    const error = validateContactField(field, values[field])
    if (error) errors[field] = error
  }
  return errors
}
