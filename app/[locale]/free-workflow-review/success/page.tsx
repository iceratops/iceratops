import { notFound } from 'next/navigation'
import SuccessPage from '@/components/pages/SuccessPage'
import { isLocale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/page-metadata'

type Props = { params: Promise<{ locale: string }> }
export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) return pageMetadata('/404', 'en')
  return pageMetadata('/free-workflow-review/success', locale)
}
export default async function Page({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <SuccessPage locale={locale} />
}
