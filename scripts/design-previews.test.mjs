import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createSourceLoader } from './test-source-loader.mjs'

const load = createSourceLoader({
  'iceratops-website': '.design-sync/entry.ts',
  'next/link': '.design-sync/shims/next-link.tsx',
  'next/navigation': '.design-sync/shims/next-navigation.ts',
})

for (const file of readdirSync('.design-sync/previews').filter((name) => name.endsWith('.tsx'))) {
  for (const [name, Preview] of Object.entries(load(`.design-sync/previews/${file}`))) {
    test(`design preview renders: ${file} / ${name}`, () => {
      const html = renderToStaticMarkup(createElement(Preview))
      assert.ok(html.length > 0)
      assert.ok(!html.includes('href="/free-workflow-review"'), 'retired CTA route')
      if (file === 'ContactForm.tsx') {
        assert.match(html, /name="contact"/)
        assert.match(html, /name="website-language" value="en"/)
      }
    })
  }
}
