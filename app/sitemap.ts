import type { MetadataRoute } from 'next'
import { absoluteUrl, publicRoutes } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.path === '/' ? 'weekly' : 'monthly',
    priority: route.path === '/' ? 1 : 0.7,
  }))
}
