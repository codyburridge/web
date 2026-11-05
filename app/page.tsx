'use client'

import Link from 'next/link'

const collections = [
  {
    slug: 'the-convention',
    title: 'The Convention',
    year: '2026',
    pieces: 12,
    description: 'Fine art from the floor of the world\'s greatest conventions.',
  },
  {
    slug: 'a-different-view',
    title: 'A Different View',
    year: '2023 – Ongoing',
    pieces: 6,
    description: 'Intimate scenes caught in the quiet between moments — light, colour, and stillness.',
  },
  {
    slug: 'the-magic-hour',
    title: 'The Magic Hour',
    year: '2023',
    pieces: 12,
    description: 'Streets, faces and architecture caught in the last gold of the day.',
  },
  {
    slug: 'green-vs-grey',
    title: 'Green vs Grey',
    year: '2023',
    pieces: 8,
    description: 'Nature forcing its way through concrete — the quiet war between organic and built.',
  },
  {
    slug: 'in-time-we-rust',
    title: 'In Time We Rust',
    year: '2024',
    pieces: 8,
    description: 'Decay as beauty — industrial relics and forgotten steel at the edge of collapse.',
  },
  {
    slug: 'neon-numbers',
    title: 'Neon Numbers',
    year: '2024',
    pieces: 6,
    description: 'Electric signage and the language of light — numerals illuminated against the dark city.',
  },
  {
    slug: 'end-of-an-easel',
    title: 'End of an Easel',
    year: '2024',
    pieces: 8,
    description: 'Fine art photographed inside the gallery — where the work meets the wall.',
  },
  {
    slug: 'reminiscence',
    title: 'Reminiscence',
    year: 'Ongoing',
    pieces: 2,
    description: 'A meditation on memory, identity and the passage of time.',
  },
  {
    slug: 'book',
    title: 'A Different View — The Book',
    year: 'Ongoing',
    pieces: 8,
    description: 'The collector edition — Vol. I in print. Limited run, signed and numbered.',
  },
]

const FOOTER_LINKS = [
  { label: 'Exhibition', href: '/exhibition' },
  { label: 'About', href: '/bio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Instagram', href: 'https://www.instagram.com/codyburridgestudio', external: true },
  { label: 'Shop', href: 'https://qnjaf1-se.myshopify.com', external: true },
]

export default function Home() {
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
    }}>
      {/* Logo */}
      <Link href="/" style={{ marginBottom: '80px', opacity: 0.9, display: 'block' }}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/36ccec98-077c-482e-9a8e-cf3d20fa0f61/Cody+Burridge_Logo_1000+small.png?format=400w"
          alt="Cody Burridge C.STUDIO"
          style={{ height: '42px', width: 'auto', filter: 'invert(1)', display: 'block' }}
        />
      </Link>

      {/* Collections */}
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
                  {col.title}
                </p>
                <p style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.04em',
                }}>
                  {col.description}
                </p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                  {col.pieces} pieces
                </p>
                <p style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)', marginTop: '4px' }}>
                  {col.year}
                </p>
              </div>
            </div>
          </Link>
        ))}

        <a href="https://qnjaf1-se.myshopify.com" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
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
                C STUDiO
              </p>
              <p style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.04em',
              }}>
                Prints of Cody Burridge&apos;s work, available for sale.
              </p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
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
    </main>
  )
}
