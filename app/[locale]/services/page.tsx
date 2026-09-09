import { notFound } from 'next/navigation'
import ServicesPage from '@/components/pages/ServicesPage'
import { isLocale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/page-metadata'

type Props = { params: Promise<{ locale: string }> }
export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) return pageMetadata('/404', 'en')
  return pageMetadata('/services', locale)
}
export default async function Page({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <ServicesPage locale={locale} />
}
