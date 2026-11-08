'use client'

import Link from 'next/link'
import StarLink from '../components/StarLink'

const collections = [
  {
    slug: 'the-convention',
    title: 'The Convention',
    year: '2026',
    pieces: 12,
    description: 'Fine art inspired by the Comic-Con phenomenon.',
  },
  {
    slug: 'a-different-view',
    title: 'A Different View',
    year: '2013, Ongoing',
    pieces: 6,
    description: 'Studies of colour, shape and light in the everyday.',
  },
  {
    slug: 'the-magic-hour',
    title: 'The Magic Hour',
    year: '2022',
    pieces: 12,
    description: 'As daylight fades, artificial light gives familiar places a cinematic quality.',
  },
  {
    slug: 'green-vs-grey',
    title: 'Green vs Grey',
    year: '2023',
    pieces: 8,
    description: 'A study in light and structure, abstracting Tokyo\'s architecture.',
  },
  {
    slug: 'in-time-we-rust',
    title: 'In Time We Rust',
    year: '2022',
    pieces: 8,
    description: 'Layers of paint and iron, eroded and repainted over time, where decay becomes abstract beauty.',
  },
  {
    slug: 'neon-numbers',
    title: 'Neon Numbers',
    year: '2023',
    pieces: 6,
    description: 'Graphic road markings seen in isolation form compositions of line and colour, echoing the language of early street culture.',
  },
  {
    slug: 'end-of-an-easel',
    title: 'End of an Easel',
    year: '2022',
    pieces: 8,
    description: 'Portraits of a colourist, found in the magnified traces of my father\'s easel.',
  },
  {
    slug: 'reminiscence',
    title: 'Reminiscence',
    year: 'Ongoing',
    pieces: 2,
    description: 'Cinematic portraiture reimagining moments from the stories of recognised figures, with clues hidden in the frame.',
  },
  {
    slug: 'psychedelic',
    title: 'Psychedelic',
    year: 'Ongoing',
    pieces: 4,
    description: 'Photographs reworked in bold, saturated colour, influenced by screen print, pop art and the beautiful accident of misprinted colour proofs.',
  },
  {
    slug: 'book',
    title: 'A Different View: The Book',
    year: 'Volume One',
    pieces: 0,
    description: 'An early selection from A Different View, where shifts in angle, focus and light transform the everyday into abstraction. Collector Edition, limited run, signed and numbered.',
  },
]

const FOOTER_LINKS = [
  { label: 'Exhibition', href: '/exhibition' },
  { label: 'About', href: '/bio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Edit', href: '/edit' },
  { label: 'Instagram', href: 'https://www.instagram.com/codyburridgephoto', external: true },
  { label: 'Shop', href: 'https://shop.codyburridge.com', external: true },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
]

export default function Collections() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#111111',
      color: '#ffffff',
      fontFamily: "'Poppins', system-ui, sans-serif",
      fontWeight: 300,
      WebkitFontSmoothing: 'antialiased',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px',
    }} className="collMain">
      {/* Phones: more room above the logo so it is never cropped after the bounce */}
      <style>{`@media (max-width: 860px){.collMain{padding-top:120px !important}}`}</style>
      {/* Logo */}
      <Link href="/collections" style={{ marginBottom: '40px', opacity: 0.9, display: 'block' }}>
        <img
          src="https://cdn.shopify.com/s/files/1/1093/5432/0212/files/site-36ccec98-077c-482e-9a8e-cf3d20fa0f61-cody-burridge-logo-1000-small.png?v=1793961746&width=400"
          alt="Cody Burridge C.STUDIO"
          style={{ height: '50px', width: 'auto', filter: 'invert(1)', display: 'block' }}
        />
      </Link>

      {/* Collections */}
      <style>{`.psyTag img{display:block}.psyTag .psyPink{display:none}a:hover .psyTag .psyWhite{display:none}a:hover .psyTag .psyPink{display:block}.convTitle{transition:color .2s}a:hover .convTitle{color:#e3120b !important}`}</style>
      <div style={{ width: '100%', maxWidth: '640px' }}>
        <p style={{
          fontSize: '9px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
          marginBottom: '32px',
        }}>
          Collections
        </p>

        {collections.map((col) => (
          <Link key={col.slug} href={`/${col.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              padding: '28px 0',
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '24px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = col.slug === 'psychedelic' || col.slug === 'the-convention' ? '1' : '0.6')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <div>
                <p className={col.slug === 'the-convention' ? 'convTitle' : undefined} style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 'clamp(22px, 4vw, 36px)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  marginBottom: '6px',
                }}>
                  {col.slug === 'psychedelic'
                    ? <span className="psyTag" style={{ display: 'block' }}><img className="psyWhite" src="https://cdn.shopify.com/s/files/1/1093/5432/0212/files/psychedelic-tag-white.png?v=1793960308" alt="Psychedelic" style={{ height: 'clamp(40px, 7vw, 68px)', width: 'auto' }} /><img className="psyPink" src="https://cdn.shopify.com/s/files/1/1093/5432/0212/files/psychedelic-tag-pink.png?v=1793960303" alt="" aria-hidden="true" style={{ height: 'clamp(40px, 7vw, 68px)', width: 'auto' }} /></span>
                    : col.title}
                </p>
                <p style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.55)',
                  letterSpacing: '0.04em',
                }}>
                  {col.description}
                </p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                {col.pieces > 0 && <p style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                  {col.pieces} pieces
                </p>}
                <p style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                  {col.year}
                </p>
              </div>
            </div>
          </Link>
        ))}

        <a href="https://shop.codyburridge.com" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '28px 0',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '24px',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <div>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 'clamp(22px, 4vw, 36px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '6px',
              }}>
                C.STUDiO
              </p>
              <p style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.04em',
              }}>
                Limited edition fine art prints by Cody Burridge, available to collect.
              </p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                Shop ↗
              </p>
            </div>
          </div>
        </a>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '80px',
        display: 'flex',
        gap: '28px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {FOOTER_LINKS.map((link) => (
          link.external
            ? <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                color: 'rgba(255,255,255,0.25)',
                textDecoration: 'none',
                fontSize: '9px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.25)')}
            >{link.label}</a>
            : <Link key={link.label} href={link.href} style={{
                color: 'rgba(255,255,255,0.25)',
                textDecoration: 'none',
                fontSize: '9px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.25)')}
            >{link.label}</Link>
        ))}
      </div>
      <div style={{ marginTop: '40px' }}><StarLink dark /></div>
    </main>
  )
}
