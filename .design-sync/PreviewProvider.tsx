import type { ReactNode } from 'react'
import { I18nProvider } from '@/components/i18n/I18nProvider'
import { getMessages } from '@/lib/translations'

// Preview-only context. Production gets this from RootDocument.
export function PreviewProvider({ children }: { children: ReactNode }) {
  return (
    <I18nProvider locale="en" messages={getMessages('en')}>
      {children}
    </I18nProvider>
  )
}
