import assert from 'node:assert/strict'
import test from 'node:test'
import { createSourceLoader } from './test-source-loader.mjs'

const { normalizeContactEmail, validateContact, validateContactField } =
  createSourceLoader()('lib/contact-form.ts')
const validInquiry = {
  'first-name': 'أحمد',
  'last-name': '',
  email: 'person@example.com',
  business: '',
  region: '',
  'preferred-language': 'العربية',
  website: '',
  message: 'أريد مناقشة مشروع جديد.',
}

test('accepts a multilingual inquiry with optional fields empty', () => {
  assert.deepEqual(validateContact(validInquiry), {})
})

test('reports all missing required fields, including whitespace-only values', () => {
  const errors = validateContact({
    ...validInquiry,
    'first-name': '  ',
    email: '',
    message: '\n\t',
  })
  assert.deepEqual(Object.keys(errors).sort(), ['email', 'first-name', 'message'])
})

test('preserves mailbox case and normalizes international domain names', () => {
  assert.equal(normalizeContactEmail('  Person@bücher.de  '), 'Person@xn--bcher-kva.de')
  assert.equal(validateContactField('email', 'Person@bücher.de'), undefined)
  assert.equal(normalizeContactEmail('person@example.com/path'), 'person@example.com/path')
})

test('accepts common mailbox forms and rejects malformed or unsupported addresses', () => {
  for (const email of ['person+project@example.com', "o'connor@example.co.uk"]) {
    assert.equal(validateContactField('email', email), undefined, email)
  }
  for (const email of [
    'person',
    'person@@example.com',
    '.person@example.com',
    'person..name@example.com',
    'person@example',
    'person@-example.com',
    'person@example.123',
    'person@example.com/path',
    'person name@example.com',
    `${'a'.repeat(65)}@example.com`,
  ]) {
    assert.ok(validateContactField('email', email), email)
  }
  assert.match(validateContactField('email', 'أحمد@example.com'), /Latin letters before the @/)
})

test('enforces text limits at the boundary without counting surrounding whitespace', () => {
  for (const [field, limit] of [
    ['first-name', 100],
    ['last-name', 100],
    ['business', 200],
    ['preferred-language', 100],
    ['message', 5000],
  ]) {
    assert.equal(validateContactField(field, `  ${'x'.repeat(limit)}  `), undefined, field)
    assert.ok(validateContactField(field, 'x'.repeat(limit + 1)), field)
  }
})

test('country values must match the canonical submission names', () => {
  assert.equal(validateContactField('region', 'Saudi Arabia'), undefined)
  assert.equal(validateContactField('region', 'United States'), undefined)
  assert.ok(validateContactField('region', 'SA'))
  assert.ok(validateContactField('region', 'Not a country'))
})

test('accepts web URLs and rejects credentials, non-web protocols, and excessive length', () => {
  for (const website of ['https://example.com/path?x=1', 'http://example.com']) {
    assert.equal(validateContactField('website', website), undefined, website)
  }
  for (const website of [
    'example.com',
    'javascript:alert(1)',
    'ftp://example.com',
    'https://user:password@example.com',
    `https://example.com/${'x'.repeat(2048)}`,
  ]) {
    assert.ok(validateContactField('website', website), website)
  }
})
