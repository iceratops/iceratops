import { notFound } from 'next/navigation'
import AboutPage from '@/components/pages/AboutPage'
import { isLocale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/page-metadata'

type Props = { params: Promise<{ locale: string }> }
export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) return pageMetadata('/404', 'en')
  return pageMetadata('/about', locale)
}
export default async function Page({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <AboutPage locale={locale} />
}
