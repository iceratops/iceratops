import ar from '@/content/locales/ar.json'
import en from '@/content/locales/en.json'
import es from '@/content/locales/es.json'
import fr from '@/content/locales/fr.json'
import hi from '@/content/locales/hi.json'
import pt from '@/content/locales/pt.json'
import ur from '@/content/locales/ur.json'
import zhHans from '@/content/locales/zh-Hans.json'
import zhHant from '@/content/locales/zh-Hant.json'
import { createTranslator, type Locale, type Messages } from '@/lib/i18n'

const catalogs: Record<Locale, Messages> = {
  en,
  ar,
  ur,
  hi,
  es,
  fr,
  pt,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
}
export function getMessages(locale: Locale) {
  return catalogs[locale]
}
export function getTranslator(locale: Locale) {
  return createTranslator(getMessages(locale))
}
