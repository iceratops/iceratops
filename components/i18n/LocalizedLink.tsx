'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { useI18n } from '@/components/i18n/I18nProvider'
import { localizedPath } from '@/lib/i18n'

export default function LocalizedLink({ href, ...props }: ComponentProps<typeof Link>) {
  const { locale } = useI18n()
  const target = typeof href === 'string' ? localizedPath(href, locale) : href
  return <Link href={target} {...props} />
}
