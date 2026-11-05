'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import StarLink from '../components/StarLink'

const LOGO = 'https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/36ccec98-077c-482e-9a8e-cf3d20fa0f61/Cody+Burridge_Logo_1000+small.png?format=400w'

const NAV_LINKS = [
  { label: 'Collections', href: '/' },
  { label: 'About', href: '/bio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Shop', href: 'https://qnjaf1-se.myshopify.com', external: true },
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

const SECTIONS = [
  {
    title: '1. Introduction',
    body: 'At C Studio Ltd, d/b/a C.STUDIO, we value your privacy and the importance of safeguarding your data. This Privacy Policy describes our privacy practices for activities relating to our websites, domains, applications, services and products.\n\nWe are committed to protecting your privacy in accordance with applicable regulations including GDPR (EU), UK GDPR, CCPA/CPRA (California), and other applicable data protection laws.',
  },
  {
    title: '2. Personal Data We Collect',
    body: 'When you make a purchase or enquiry, we may collect: your name, email address, billing address, phone number, and payment information. When you visit our website, we may automatically collect device and usage data through standard web technologies.',
  },
  {
    title: '3. How We Use Your Data',
    body: 'We use your personal data to process orders, respond to enquiries, send collector communications (where you have opted in), and improve our services. We do not sell your data to third parties.',
  },
  {
    title: '4. Cookies',
    body: 'We do not use cookies on our website beyond those strictly necessary for its operation.',
  },
  {
    title: '5. Data Retention',
    body: 'We retain personal data only as long as necessary for the purpose it was collected and as required by applicable law.',
  },
  {
    title: '6. Your Rights',
    body: 'Depending on your location, you may have the right to access, correct, delete, or port your personal data, and to object to or restrict its processing. To exercise any of these rights, please contact us at hello@codyburridge.com.',
  },
  {
    title: '7. Children\'s Privacy',
    body: 'We do not knowingly collect personal data from children under the age of 16.',
  },
  {
    title: '8. Changes to This Policy',
    body: 'We may update this policy from time to time. The current version will always be available at this page.',
  },
  {
    title: '9. Contact',
    body: 'Data Privacy Officer, C.STUDIO\nUnit 3, 2 Cleveland Gardens, London W2 6HA\nhello@codyburridge.com\n\nLast updated: April 2026',
  },
]

const s = {
  nav: { color: 'rgba(255,255,255,0.45)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, textDecoration: 'none' },
  eyebrow: { fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: '20px', display: 'block' as const },
  footer: { background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '48px 24px', display: 'flex' as const, flexDirection: 'column' as const, alignItems: 'center' as const, gap: '24px' },
  footerLink: { color: 'rgba(255,255,255,0.25)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, textDecoration: 'none' },
}

export default function PrivacyPage() {
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
        }}>Privacy<br />Policy</h1>

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
              {sec.body.split('\n\n').map((para, j) => (
                <p key={j} style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontWeight: 300, marginBottom: j < sec.body.split('\n\n').length - 1 ? '16px' : 0 }}>
                  {para.split('\n').map((line, k, arr) => (
                    <span key={k}>{line}{k < arr.length - 1 ? <br /> : null}</span>
                  ))}
                </p>
              ))}
            </div>
          ))}
        </div>
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
        <StarLink dark />
        <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em' }}>© 2026 Cody Burridge. All rights reserved.</p>
      </footer>
    </div>
  )
}
