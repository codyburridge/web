import type { Metadata } from 'next'
import { SITE_NAME } from './site'
import { imgUrl } from './img'

type Entry = { title: string; description: string; image?: string; noindex?: boolean }

// One entry per page: the title Google shows, the line under it, and the picture used when a link is shared.
const PAGES: Record<string, Entry> = {
  collections: {
    title: 'Collections',
    description: 'Fine art photography by British artist Cody Burridge. Limited edition series including The Convention, A Different View, The Magic Hour, In Time We Rust and Psychedelic.',
    image: '72b110b9-f74f-4de9-8a9e-ee7a7ef480b2/Fag+Break+FIN+FLAT+copy.jpg',
  },
  'the-convention': {
    title: 'The Convention',
    description: 'The Convention by Cody Burridge. Fine art inspired by the Comic-Con phenomenon. Limited editions, 2026.',
    image: '72b110b9-f74f-4de9-8a9e-ee7a7ef480b2/Fag+Break+FIN+FLAT+copy.jpg',
  },
  'a-different-view': {
    title: 'A Different View',
    description: 'A Different View by Cody Burridge. Studies of colour, shape and light in the everyday. Fine art photographs, ongoing since 2023.',
    image: '1775464457183-UFBVCV0TEXOFGIZHX6TG/Off+Grid+Original.jpeg',
  },
  'the-magic-hour': {
    title: 'The Magic Hour',
    description: 'The Magic Hour by Cody Burridge. As daylight fades, artificial light gives familiar places a cinematic quality. Fine art photographs, 2022.',
    image: '1738781219424-O1YP57AGWCTG6N9B9IUR/_C9A5876.jpg',
  },
  'green-vs-grey': {
    title: 'Green vs Grey',
    description: 'Green vs Grey by Cody Burridge. A study in light and structure, abstracting Tokyo\'s architecture. Fine art photographs, 2023.',
    image: '1738850753650-OXJ53JQ3WVX8P1EGZGA2/S0400001.jpg',
  },
  'in-time-we-rust': {
    title: 'In Time We Rust',
    description: 'In Time We Rust by Cody Burridge. Layers of paint and iron, eroded and repainted over time, where decay becomes abstract beauty. Fine art photographs, 2022.',
    image: '1740583598017-ZXUH5UPFOJ0NY2N5DB6U/_H6R0262+CB+copy.jpg',
  },
  'neon-numbers': {
    title: 'Neon Numbers',
    description: 'Neon Numbers by Cody Burridge. Graphic road markings seen in isolation form compositions of line and colour, echoing the language of early street culture. Fine art photographs, 2023.',
    image: '1740593183577-NWHQ87P95UA6BS1V9DD7/_H6R0018.jpg',
  },
  'end-of-an-easel': {
    title: 'End of an Easel',
    description: 'End of an Easel by Cody Burridge. Portraits of a colourist, found in the magnified traces of my father\'s easel. Fine art photographs, 2022.',
    image: '1740148196507-SABHVD2G8YYG9PYRW4VR/99projects_CodyBurridge_Exhibition2_001.jpg',
  },
  reminiscence: {
    title: 'Reminiscence',
    description: 'Reminiscence by Cody Burridge. Cinematic portraiture reimagining moments from the stories of recognised figures, with clues hidden in the frame.',
    image: '1740145738967-4H06G5BY0AUV9112NVPN/Death+of+a+Clown+Fin+16+bit+Crop+Grade+CB.jpg',
  },
  psychedelic: {
    title: 'Psychedelic',
    description: 'Psychedelic by Cody Burridge. Photographs reworked in bold, saturated colour, influenced by screen print, pop art and the beautiful accident of misprinted colour proofs. Limited edition prints.',
    image: '1738944701596-BAMIII6ZA7ENW9RBQCIO/Screenshot%2B2025-01-15%2Bat%2B19.12.30.png',
  },
  book: {
    title: 'A Different View: The Book',
    description: 'A Different View, Volume 1 by Cody Burridge. An early selection from A Different View, where shifts in angle, focus and light transform the everyday into abstraction. Collector Edition, limited run, signed and numbered.',
    image: '6024c81a-6df1-48f7-8fbd-e72f800b19b6/Front+copy+A+Different+View.jpg',
  },
  bio: {
    title: 'About',
    description: 'Cody Burridge is a British artist exploring perception through observed and constructed realities, working across still and moving image.',
  },
  contact: {
    title: 'Contact',
    description: 'Contact the studio of Cody Burridge for artwork, exhibition and project enquiries. London, UK.',
  },
  exhibition: {
    title: 'Exhibitions',
    description: 'Exhibitions by Cody Burridge, including The Magic Hour at 99 Projects London and Altered State on Golborne Road.',
  },
  edit: {
    title: 'Edit',
    description: 'Commissioned and editorial photography by Cody Burridge, including work for the BBC, Esquire and Stylist.',
  },
  terms: { title: 'Terms', description: 'Terms and conditions for codyburridge.com.' },
  privacy: { title: 'Privacy', description: 'Privacy policy for codyburridge.com.' },
  'collections-trial': { title: 'Collections (trial)', description: 'Trial layout.', noindex: true },
  intro: { title: 'Intro (trial)', description: 'Trial intro page.', noindex: true },
}

export function seo(key: string): Metadata {
  const p = PAGES[key]
  const image = p.image ? imgUrl(p.image, 1200) : undefined
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/${key}` },
    openGraph: {
      title: `${p.title} | ${SITE_NAME}`,
      description: p.description,
      url: `/${key}`,
      ...(image ? { images: [{ url: image, width: 1200, alt: `${p.title} by Cody Burridge` }] } : {}),
    },
    twitter: { card: 'summary_large_image', title: `${p.title} | ${SITE_NAME}`, description: p.description, ...(image ? { images: [image] } : {}) },
    ...(p.noindex ? { robots: { index: false, follow: false } } : {}),
  }
}

export const SITEMAP_PAGES = Object.entries(PAGES).filter(([, p]) => !p.noindex).map(([k]) => k)
