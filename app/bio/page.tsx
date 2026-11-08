'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import StarLink from '../components/StarLink'

const LOGO = 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/site-36ccec98-077c-482e-9a8e-cf3d20fa0f61-cody-burridge-logo-1000-small.png?v=1793961746&width=400'

const NAV_LINKS = [
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/bio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Shop', href: 'https://shop.codyburridge.com', external: true },
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

const BIO_PARAS = [
  'I grew up in a West London family of artists.',
  'Shape and colour ranked highly in our house, and I was lucky enough to develop my own heightened way of seeing, relishing small things like light on a surface and colours sitting together.',
  "We drew constantly as kids and I got very good at drawing things exactly. Photography allowed me to realise that wasn't the point, as I began treating light and colour as something to shape, not just capture.",
  "My dad, Roger, was a sculptor, painter and art director. We'd meet in the afternoons at Café Rouge, drink rosé and talk about art. Learning how he used his eye to craft as well as stage was invaluable.",
  "At Central Saint Martins, someone told me that unlike other mediums, people believe a photograph is real. I've been exploring that ever since.",
  "My career started in fashion, music and advertising, but I was always building images rather than just shooting them, pushing things further than they needed to go.",
  "I'm fascinated by quantum mechanics. The idea that what is real can be determined by how we observe and perceive it makes complete sense to me. It's a concept I play with through my work.",
  'Most of what I do comes from nostalgia, not necessarily in a sentimental way, just in how things stay with you and shape how you think and see. I was obsessed with breakdancing and graffiti as a teenager; that urban feel and graphic use of colour can come through in a lot of my projects.',
  'If I had to choose one camera, it would be the Mamiya RZ67. It felt like an extension of myself.',
  'At the end of the day, I think the best work is an attempt to understand what it feels like to be human.',
  'This is mine.',
]

const s = {
  nav: { color: 'rgba(255,255,255,0.45)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, textDecoration: 'none' },
  eyebrow: { fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: '20px', display: 'block' as const },
  body: { fontSize: '15px', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', fontWeight: 300 as const },
  bio: { fontSize: '14px', lineHeight: 1.85, color: 'rgba(255,255,255,0.6)', fontWeight: 300 as const, marginBottom: '22px' },
  footer: { background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '48px 24px', display: 'flex' as const, flexDirection: 'column' as const, alignItems: 'center' as const, gap: '24px' },
  footerLink: { color: 'rgba(255,255,255,0.25)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, textDecoration: 'none' },
}

export default function BioPage() {
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
        <Link href="/collections">
          <img src={LOGO} alt="C.STUDIO" style={{ height: '38px', filter: 'invert(1)', opacity: 0.9, display: 'block' }} />
        </Link>
        <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {NAV_LINKS.map(l => l.external
            ? <a key={l.label} href={l.href} target="_blank" rel="noopener" style={s.nav}>{l.label}</a>
            : <Link key={l.label} href={l.href} style={s.nav}>{l.label}</Link>
          )}
        </nav>
      </header>

      <main style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 32px 100px' }}>
        <span style={s.eyebrow}>About</span>
        <h1 style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          lineHeight: 0.95,
          marginBottom: '56px',
        }}>Cody<br />Burridge</h1>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '48px', marginBottom: '64px' }}>
          <p style={s.body}>Cody Burridge is a British artist exploring perception through observed and constructed realities, working across still and moving image.</p>
          <p style={{ ...s.body, marginTop: '20px' }}>His projects move between large-scale narrative works and more focused, abstract pieces. Rather than a fixed style, his work is driven by a consistent line of enquiry: using photography to shape and reframe reality. Alongside gallery-led projects, he also releases smaller editioned works through C.STUDIO.</p>
        </div>

        <span style={{ ...s.eyebrow, marginBottom: '40px' }}>Bio</span>
        {BIO_PARAS.map((p, i) => <p key={i} style={s.bio}>{p}</p>)}
      </main>

      <footer style={s.footer}>
        <Link href="/collections">
          <img src={LOGO} alt="Cody Burridge" style={{ height: '18px', filter: 'invert(1)', opacity: 0.4, display: 'block' }} />
        </Link>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {FOOTER_LINKS.map(l => l.external
            ? <a key={l.label} href={l.href} target="_blank" rel="noopener" style={s.footerLink}>{l.label}</a>
            : <Link key={l.label} href={l.href} style={s.footerLink}>{l.label}</Link>
          )}
        </div>
        <StarLink dark />
        <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em' }}>© 2026 Cody Burridge. All rights reserved.</p>
      </footer>
    </div>
  )
}
