import type { MetadataRoute } from 'next'
import { localeInfo, locales, localizedPath } from '@/lib/i18n'
import { absoluteUrl, publicRoutes } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    publicRoutes.map((route) => ({
      url: absoluteUrl(localizedPath(route.path, locale)),
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((language) => [
            localeInfo[language].tag,
            absoluteUrl(localizedPath(route.path, language)),
          ]),
          ['x-default', absoluteUrl(route.path)],
        ]),
      },
      changeFrequency: route.path === '/' ? 'weekly' : 'monthly',
      priority: route.path === '/' ? 1 : 0.7,
    })),
  )
}
