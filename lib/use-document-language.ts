'use client'

import { useEffect, useState } from 'react'

// Follow the rendered page language, including changes made by a translator.
// The initial value matches the server-rendered document to avoid hydration drift.
export function useDocumentLanguage() {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    function updateLanguage() {
      try {
        const [locale] = Intl.getCanonicalLocales(document.documentElement.lang || 'en')
        setLanguage(locale)
      } catch {
        setLanguage('en')
      }
    }
    updateLanguage()
    const observer = new MutationObserver(updateLanguage)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] })
    return () => observer.disconnect()
  }, [])

  return language
}
