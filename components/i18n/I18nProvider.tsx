'use client'

import { createContext, type ReactNode, useContext, useMemo } from 'react'
import { createTranslator, type Locale, type Messages } from '@/lib/i18n'

const I18nContext = createContext<{ locale: Locale; messages: Messages } | null>(null)

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale
  messages: Messages
  children: ReactNode
}) {
  const value = useMemo(() => ({ locale, messages }), [locale, messages])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error('The language provider is missing.')
  const t = useMemo(() => createTranslator(value.messages), [value.messages])
  return { locale: value.locale, t }
}
