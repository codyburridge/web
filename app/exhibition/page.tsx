'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const LOGO = 'https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/36ccec98-077c-482e-9a8e-cf3d20fa0f61/Cody+Burridge_Logo_1000+small.png?format=400w'
const SHOP = 'https://qnjaf1-se.myshopify.com'

const NAV_LINKS = [
  { label: 'Collections', href: '/' },
  { label: 'About', href: '/bio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Shop', href: SHOP, external: true },
]

const FOOTER_LINKS = [
  { label: 'Exhibition', href: '/exhibition' },
  { label: 'About', href: '/bio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Instagram', href: 'https://www.instagram.com/codyburridgestudio', external: true },
  { label: 'Shop', href: SHOP, external: true },
]

// Newest first. Add new shows to the top of this list.
const EXHIBITIONS = [
  {
    title: 'Altered State',
    date: '2 February 2023',
    venue: '140 Golborne Road, London W11',
    kind: 'Joint exhibition',
    image: 'https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/1775658734204-WZAVAU9JYRZGAY56AA2G/image001.png?format=1500w',
    enquiry: 'Altered State (2023)',
  },
  {
    title: 'The Magic Hour',
    date: '10 June 2022',
    venue: '99 Projects, 99 Chamberlayne Road, London NW10',
    kind: 'Solo exhibition',
    image: 'https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/1775659021902-J9ZKOJ77OSXSI1OMRZQJ/99+Projects+Flier_Cody_Pool_PV+Evite+Small.jpg?format=1500w',
    enquiry: 'The Magic Hour (2022)',
  },
]

const s = {
  nav: { color: 'rgba(255,255,255,0.45)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, textDecoration: 'none' },
  eyebrow: { fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: '20px', display: 'block' as const },
  meta: { fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.4)' },
  footer: { background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '48px 24px', display: 'flex' as const, flexDirection: 'column' as const, alignItems: 'center' as const, gap: '24px' },
  footerLink: { color: 'rgba(255,255,255,0.25)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, textDecoration: 'none' },
}

export default function ExhibitionPage() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: "'Poppins', system-ui, sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px', height: '64px',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.3s',
      }}>
        <Link href="/">
          <img src={LOGO} alt="C.STUDIO" style={{ height: '32px', filter: 'invert(1)', opacity: 0.9, display: 'block' }} />
        </Link>
        <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {NAV_LINKS.map(l => l.external
            ? <a key={l.label} href={l.href} target="_blank" rel="noopener" style={s.nav}>{l.label}</a>
            : <Link key={l.label} href={l.href} style={s.nav}>{l.label}</Link>
          )}
        </nav>
      </header>

      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '120px 32px 100px' }}>
        <span style={s.eyebrow}>Shows</span>
        <h1 style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          lineHeight: 0.95,
          marginBottom: '56px',
        }}>Exhibitions</h1>

        {EXHIBITIONS.map(ex => (
          <article key={ex.title} style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '48px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}>
            <img src={ex.image} alt={`${ex.title} exhibition invitation`} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', background: 'rgba(255,255,255,0.04)' }} />
            <div>
              <h2 style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 'clamp(26px, 3.6vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                lineHeight: 1,
                marginBottom: '20px',
              }}>{ex.title}</h2>
              <p style={{ ...s.meta, marginBottom: '6px' }}>{ex.date}</p>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', fontWeight: 300, marginBottom: '6px' }}>{ex.venue}</p>
              <p style={{ ...s.meta, marginBottom: '28px' }}>{ex.kind}</p>
              <Link
                href={`/contact?collection=Exhibitions&artwork=${encodeURIComponent(ex.enquiry)}`}
                style={{
                  display: 'inline-block', border: '1px solid rgba(255,255,255,0.35)', color: '#fff',
                  padding: '12px 28px', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none',
                }}
              >Enquire</Link>
            </div>
          </article>
        ))}
      </main>

      <footer style={s.footer}>
        <Link href="/">
          <img src={LOGO} alt="Cody Burridge" style={{ height: '18px', filter: 'invert(1)', opacity: 0.4, display: 'block' }} />
        </Link>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {FOOTER_LINKS.map(l => l.external
            ? <a key={l.label} href={l.href} target="_blank" rel="noopener" style={s.footerLink}>{l.label}</a>
            : <Link key={l.label} href={l.href} style={s.footerLink}>{l.label}</Link>
          )}
        </div>
        <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em' }}>© 2026 Cody Burridge. All rights reserved.</p>
      </footer>
    </div>
  )
}
