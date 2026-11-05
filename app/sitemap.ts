import type { MetadataRoute } from 'next'
import { SITE_URL } from './site'
import { SITEMAP_PAGES } from './seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    ...SITEMAP_PAGES.map(p => ({
      url: `${SITE_URL}/${p}`,
      changeFrequency: (p === 'collections' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: p === 'collections' ? 0.9 : ['terms', 'privacy'].includes(p) ? 0.2 : 0.8,
    })),
  ]
}
