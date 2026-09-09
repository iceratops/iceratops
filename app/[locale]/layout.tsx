import RootDocument from '@/components/layout/RootDocument'
import { isLocale, locales } from '@/lib/i18n'

export { metadata, viewport } from '@/components/layout/RootDocument'
export const dynamicParams = false
export function generateStaticParams() {
  return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale }))
}
export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <RootDocument locale={isLocale(locale) ? locale : 'en'}>{children}</RootDocument>
}
