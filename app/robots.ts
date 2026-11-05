import type { MetadataRoute } from 'next'
import { SITE_LIVE, SITE_URL } from './site'

// Until launch, keep search engines off the beta address.
export default function robots(): MetadataRoute.Robots {
  if (!SITE_LIVE) return { rules: { userAgent: '*', disallow: '/' } }
  return { rules: { userAgent: '*', allow: '/', disallow: ['/collections-trial', '/intro'] }, sitemap: `${SITE_URL}/sitemap.xml` }
}
