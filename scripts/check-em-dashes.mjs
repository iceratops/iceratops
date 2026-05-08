#!/usr/bin/env node
/**
 * Em-dash lint check.
 *
 * Per WEBSITE_BRIEF.md (Content rules), website copy must not contain em
 * dashes (U+2014). This script scans the source and content directories for
 * em dashes in .ts, .tsx, and .mdx files, and exits non-zero if any are
 * found. Top-level *.md docs (this script, README, brief, etc.) are
 * intentionally not scanned — they are documentation, not website copy.
 *
 * If a future feature genuinely requires an em dash in source code, suppress
 * with an explicit eslint-disable line and a justification comment, then
 * extend this script to honor it.
 */

import { readFileSync, statSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { relative } from 'node:path'

const SCAN_DIRS = ['src', 'app', 'components', 'content']
const SCAN_EXTS = ['.ts', '.tsx', '.mdx']
const EM_DASH = '—'

function isDir(path) {
  try {
    return statSync(path).isDirectory()
  } catch {
    return false
  }
}

const existing = SCAN_DIRS.filter(isDir)

if (existing.length === 0) {
  console.log('em-dash check: no source directories found, skipping')
  process.exit(0)
}

let files = []
try {
  // Include tracked files AND untracked-but-not-ignored files so the check
  // catches new files before they are committed.
  const out = execSync(
    `git ls-files --cached --others --exclude-standard -- ${existing.map((d) => `'${d}'`).join(' ')}`,
    { encoding: 'utf8' }
  )
  files = Array.from(
    new Set(
      out
        .split('\n')
        .map((f) => f.trim())
        .filter((f) => f && SCAN_EXTS.some((ext) => f.endsWith(ext)))
    )
  )
} catch (err) {
  console.error('em-dash check: failed to list files via git')
  console.error(err.message)
  process.exit(2)
}

const offenders = []
for (const file of files) {
  let content
  try {
    content = readFileSync(file, 'utf8')
  } catch {
    continue
  }
  const lines = content.split('\n')
  lines.forEach((line, idx) => {
    if (line.includes(EM_DASH)) {
      offenders.push({
        file: relative(process.cwd(), file),
        line: idx + 1,
        text: line.trim(),
      })
    }
  })
}

if (offenders.length > 0) {
  console.error('Em dashes found in website copy.')
  console.error('Replace with commas, periods, semicolons, "and", or a rewrite.')
  console.error('See WEBSITE_BRIEF.md (Content rules) for context.')
  console.error('')
  for (const o of offenders) {
    console.error(`  ${o.file}:${o.line}: ${o.text}`)
  }
  console.error('')
  console.error(`em-dash check: failed (${offenders.length} occurrence${offenders.length === 1 ? '' : 's'} in ${new Set(offenders.map((o) => o.file)).size} file${new Set(offenders.map((o) => o.file)).size === 1 ? '' : 's'})`)
  process.exit(1)
}

console.log(`em-dash check: passed (${files.length} file${files.length === 1 ? '' : 's'} scanned)`)
