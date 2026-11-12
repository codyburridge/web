import type { Metadata } from 'next'
import './globals.css'
import Analytics from './components/Analytics'
import { SITE_LIVE, SITE_URL, SITE_NAME } from './site'
import { imgUrl } from './img'

const DESCRIPTION = 'Cody Burridge is a British fine art photographer. Limited edition series including The Convention, A Different View, The Magic Hour and Psychedelic, with prints from C STUDiO.'
const SHARE_IMAGE = imgUrl('72b110b9-f74f-4de9-8a9e-ee7a7ef480b2/Fag+Break+FIN+FLAT+copy.jpg', 1200)

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Cody Burridge | C STUDiO', template: '%s | Cody Burridge' },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  // The CB icon from the old Squarespace site
  icons: {
    icon: [
      { url: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/cody-burridge-cb-icon-32.png?v=1794484512', sizes: '32x32', type: 'image/png' },
      { url: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/cody-burridge-cb-icon-192.png?v=1794484522', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/cody-burridge-cb-icon-180.png?v=1794484517', sizes: '180x180' }],
  },
  authors: [{ name: 'Cody Burridge' }],
  keywords: ['Cody Burridge', 'C STUDiO', 'fine art photography', 'British photographer', 'limited edition prints', 'The Convention', 'comic con photography', 'A Different View', 'The Magic Hour', 'Psychedelic Trellick', 'art prints London'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: SITE_NAME,
    title: 'Cody Burridge | C STUDiO',
    description: DESCRIPTION,
    url: '/',
    images: [{ url: SHARE_IMAGE, width: 1200, alt: 'Fag Break from The Convention by Cody Burridge' }],
  },
  twitter: { card: 'summary_large_image', title: 'Cody Burridge | C STUDiO', description: DESCRIPTION, images: [SHARE_IMAGE] },
  robots: SITE_LIVE ? { index: true, follow: true } : { index: false, follow: false },
}

// Tells Google who the artist is and links his accounts together.
const PERSON = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#cody`,
      name: 'Cody Burridge',
      jobTitle: 'Artist and photographer',
      nationality: 'British',
      url: SITE_URL,
      sameAs: ['https://www.instagram.com/codyburridgestudio', 'https://www.instagram.com/codyburridgephoto'],
    },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#site`, name: SITE_NAME, url: SITE_URL, publisher: { '@id': `${SITE_URL}/#cody` } },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;700&family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON) }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
