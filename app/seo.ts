import type { Metadata } from 'next'
import { IMG, SITE_NAME } from './site'

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
    description: 'The Convention by Cody Burridge: fine art photographs of comic con characters caught in real city streets, including Fag Break, No Parking and Stand Pipe. Limited editions, 2026.',
    image: '72b110b9-f74f-4de9-8a9e-ee7a7ef480b2/Fag+Break+FIN+FLAT+copy.jpg',
  },
  'a-different-view': {
    title: 'A Different View',
    description: 'A Different View by Cody Burridge: everyday scenes turned abstract through angle, focus and light. Fine art photographs and limited edition prints, ongoing since 2023.',
    image: '1775464457183-UFBVCV0TEXOFGIZHX6TG/Off+Grid+Original.jpeg',
  },
  'the-magic-hour': {
    title: 'The Magic Hour',
    description: 'The Magic Hour by Cody Burridge: late night petrol stations and French garages frozen in neon and silence. Fine art photographs, 2022.',
    image: '1738781219424-O1YP57AGWCTG6N9B9IUR/_C9A5876.jpg',
  },
  'green-vs-grey': {
    title: 'Green vs Grey',
    description: 'Green vs Grey by Cody Burridge: nature forcing its way through concrete, the quiet war between the organic and the built. Fine art photographs, 2023.',
    image: '1738850753650-OXJ53JQ3WVX8P1EGZGA2/S0400001.jpg',
  },
  'in-time-we-rust': {
    title: 'In Time We Rust',
    description: 'In Time We Rust by Cody Burridge: decay as beauty, industrial relics and forgotten steel photographed at the edge of collapse. Fine art photographs, 2022.',
    image: '1740583598017-ZXUH5UPFOJ0NY2N5DB6U/_H6R0262+CB+copy.jpg',
  },
  'neon-numbers': {
    title: 'Neon Numbers',
    description: 'Neon Numbers by Cody Burridge: electric signage and the language of light, numerals glowing against the dark city. Fine art photographs, 2023.',
    image: '1740593183577-NWHQ87P95UA6BS1V9DD7/_H6R0018.jpg',
  },
  'end-of-an-easel': {
    title: 'End of an Easel',
    description: 'End of an Easel by Cody Burridge: fine art photographed inside the gallery, where the work meets the wall. 2022.',
    image: '1740148196507-SABHVD2G8YYG9PYRW4VR/99projects_CodyBurridge_Exhibition2_001.jpg',
  },
  reminiscence: {
    title: 'Reminiscence',
    description: 'Reminiscence by Cody Burridge: a meditation on memory, identity and the passage of time, including Death of a Clown and Vivian Maier.',
    image: '1740145738967-4H06G5BY0AUV9112NVPN/Death+of+a+Clown+Fin+16+bit+Crop+Grade+CB.jpg',
  },
  psychedelic: {
    title: 'Psychedelic',
    description: 'Psychedelic by Cody Burridge: screen print and pop colour versions of his photographs, including Psychedelic Trellick and Psychedelic Power Station. Limited edition prints.',
    image: '1738944701596-BAMIII6ZA7ENW9RBQCIO/Screenshot%2B2025-01-15%2Bat%2B19.12.30.png',
  },
  book: {
    title: 'A Different View: The Book',
    description: 'A Different View, Volume 1: the collector book by Cody Burridge. Limited run, signed and numbered.',
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
  const image = p.image ? `${IMG}${p.image}?format=1200w` : undefined
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
