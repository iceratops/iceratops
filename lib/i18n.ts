export const locales = ['en', 'ar', 'ur', 'hi', 'es', 'fr', 'pt', 'zh-Hans', 'zh-Hant'] as const
export type Locale = (typeof locales)[number]
export type Messages = Record<string, string>

export const localeInfo: Record<
  Locale,
  { name: string; tag: string; dir: 'ltr' | 'rtl'; og: string }
> = {
  en: { name: 'English', tag: 'en', dir: 'ltr', og: 'en_US' },
  ar: { name: 'العربية', tag: 'ar-SA', dir: 'rtl', og: 'ar_SA' },
  ur: { name: 'اردو', tag: 'ur', dir: 'rtl', og: 'ur_PK' },
  hi: { name: 'हिन्दी', tag: 'hi', dir: 'ltr', og: 'hi_IN' },
  es: { name: 'Español', tag: 'es', dir: 'ltr', og: 'es_ES' },
  fr: { name: 'Français', tag: 'fr', dir: 'ltr', og: 'fr_FR' },
  pt: { name: 'Português', tag: 'pt-BR', dir: 'ltr', og: 'pt_BR' },
  'zh-Hans': { name: '简体中文', tag: 'zh-Hans', dir: 'ltr', og: 'zh_CN' },
  'zh-Hant': { name: '繁體中文', tag: 'zh-Hant', dir: 'ltr', og: 'zh_TW' },
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function unlocalizedPath(path: string) {
  const [pathname, ...rest] = path.split(/(?=[?#])/)
  const first = pathname.split('/')[1]
  return `${isLocale(first) ? pathname.slice(first.length + 1) || '/' : pathname}${rest.join('')}`
}

export function localizedPath(path: string, locale: Locale) {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  const base = unlocalizedPath(path)
  return locale === 'en'
    ? base
    : `/${locale}${base === '/' ? '' : /^\/[?#]/.test(base) ? base.slice(1) : base}`
}

export function createTranslator(messages: Messages) {
  return (source: string, values: Record<string, string | number> = {}) => {
    const key = source.trim()
    const translated = messages[key] ?? key
    const text = translated.replace(/\{(\w+)\}/g, (match, name: string) =>
      Object.hasOwn(values, name) ? String(values[name]) : match,
    )
    return `${source.match(/^\s*/)?.[0] ?? ''}${text}${source.match(/\s*$/)?.[0] ?? ''}`
  }
}
