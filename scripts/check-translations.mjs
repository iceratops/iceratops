#!/usr/bin/env node
import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import ts from 'typescript'

// Exercise the real dependency-free routing and translation helpers.
const source = await readFile('lib/i18n.ts', 'utf8')
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText
const { locales, localeInfo, localizedPath, unlocalizedPath, createTranslator } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
)
const english = JSON.parse(await readFile('content/locales/en.json', 'utf8'))
const keys = Object.keys(english).sort()
const placeholders = (value) => [...value.matchAll(/\{\w+\}/g)].map(([key]) => key).sort()
for (const locale of locales) {
  const messages = JSON.parse(await readFile(`content/locales/${locale}.json`, 'utf8'))
  assert.deepEqual(Object.keys(messages).sort(), keys, `${locale}: missing or extra messages`)
  for (const [key, value] of Object.entries(messages)) {
    assert.equal(typeof value, 'string', `${locale}: ${key}`)
    assert.ok(value.trim(), `${locale}: empty translation for ${key}`)
    assert.ok(!value.includes('\u2014'), `${locale}: em dash in ${key}`)
    assert.deepEqual(placeholders(value), placeholders(key), `${locale}: placeholders in ${key}`)
  }
  const prefix = locale === 'en' ? '' : `/${locale}`
  assert.equal(localizedPath('/services', locale), `${prefix}/services`)
  assert.equal(
    localizedPath('/ar/services?from=nav#details', locale),
    `${prefix}/services?from=nav#details`,
  )
  assert.equal(localizedPath('/#approach', locale), `${prefix || '/'}#approach`)
  assert.equal(localizedPath('mailto:hello@example.com', locale), 'mailto:hello@example.com')
  assert.equal(localizedPath('//example.com/path', locale), '//example.com/path')
  assert.equal(unlocalizedPath(`${prefix}/start-a-project`), '/start-a-project')
  assert.equal(localeInfo[locale].dir, ['ar', 'ur'].includes(locale) ? 'rtl' : 'ltr')
  assert.equal(
    createTranslator(messages)('Use {limit} characters or fewer.', { limit: 100 }),
    messages['Use {limit} characters or fewer.'].replace('{limit}', '100'),
  )
}
assert.equal(localeInfo.ar.name, 'العربية')

// Literal translation calls must exist in every catalog. Data-driven copy is
// additionally checked against the actual rendered pages by validate:site.
const invariant = /^(?:[\d\s:.,/]+|Iceratops|https?:\/\/\S+|\S+@\S+)$/
async function checkSource(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = `${directory}/${entry.name}`
    if (entry.isDirectory()) await checkSource(file)
    else if (/\.tsx?$/.test(file)) {
      const ast = ts.createSourceFile(
        file,
        await readFile(file, 'utf8'),
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX,
      )
      function checkArgument(node) {
        if (ts.isStringLiteral(node)) {
          const key = node.text.trim()
          assert.ok(
            !key || key in english || invariant.test(key),
            `${file}: missing translation key ${key}`,
          )
        } else if (ts.isConditionalExpression(node)) {
          checkArgument(node.whenTrue)
          checkArgument(node.whenFalse)
        }
      }
      function visit(node) {
        if (
          ts.isCallExpression(node) &&
          ts.isIdentifier(node.expression) &&
          node.expression.text === 't' &&
          node.arguments[0]
        )
          checkArgument(node.arguments[0])
        ts.forEachChild(node, visit)
      }
      visit(ast)
    }
  }
}
await checkSource('components')
await checkSource('app')
console.log(
  `translation check: passed (${locales.length} locales, ${keys.length} messages each, placeholders, source keys, routing and direction)`,
)
