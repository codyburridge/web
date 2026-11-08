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

const SECTIONS = [
  {
    title: 'General',
    body: 'By placing an order with C.STUDIO, you agree to the terms outlined below.',
  },
  {
    title: 'Artwork & Editions',
    body: 'All works are sold as limited editions and are studio stamped and editioned as stated on the product page. Once an edition is sold out, no further prints will be produced in that size and format.',
  },
  {
    title: 'Production',
    body: 'All works are made to order. As such, slight variations may occur between pieces and are considered part of the nature of the work.',
  },
  {
    title: 'Pricing',
    body: 'All prices are listed in GBP (£) unless otherwise stated and may change without notice.',
  },
  {
    title: 'Shipping',
    body: 'Delivery timeframes are estimates and not guaranteed. C.STUDIO is not responsible for delays caused by couriers, customs, or events outside of our control.',
  },
  {
    title: 'Import Duties & Taxes',
    body: 'Orders shipped internationally may be subject to import duties, taxes and customs fees. These charges are determined by the destination country and are the responsibility of the customer.',
  },
  {
    title: 'Returns & Exchanges',
    body: 'As all works are made to order, returns or exchanges are not accepted. If your order arrives damaged, please contact us within 48 hours of delivery with supporting images.',
  },
  {
    title: 'Liability',
    body: 'C.STUDIO is not liable for any indirect or consequential loss arising from the use or purchase of our work.',
  },
  {
    title: 'Contact',
    body: 'For all enquiries: hello@codyburridge.com',
  },
]

const s = {
  nav: { color: 'rgba(255,255,255,0.45)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, textDecoration: 'none' },
  eyebrow: { fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: '20px', display: 'block' as const },
  footer: { background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '48px 24px', display: 'flex' as const, flexDirection: 'column' as const, alignItems: 'center' as const, gap: '24px' },
  footerLink: { color: 'rgba(255,255,255,0.25)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, textDecoration: 'none' },
}

export default function TermsPage() {
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

      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '120px 32px 100px' }}>
        <span style={s.eyebrow}>Legal</span>
        <h1 style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: 'clamp(32px, 5vw, 60px)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          lineHeight: 0.95,
          marginBottom: '56px',
        }}>Terms &amp;<br />Conditions</h1>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '48px' }}>
          {SECTIONS.map((sec, i) => (
            <div key={i} style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#fff',
                marginBottom: '12px',
              }}>{sec.title}</h2>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>{sec.body}</p>
            </div>
          ))}
        </div>
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
