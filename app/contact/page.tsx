'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ENQUIRY_GROUPS } from '../data/artworks'

const LOGO = 'https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/36ccec98-077c-482e-9a8e-cf3d20fa0f61/Cody+Burridge_Logo_1000+small.png?format=400w'

const NAV_LINKS = [
  { label: 'Collections', href: '/' },
  { label: 'About', href: '/bio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Shop', href: 'https://qnjaf1-se.myshopify.com', external: true },
]

const FOOTER_LINKS = [
  { label: 'Collections', href: '/' },
  { label: 'Exhibition', href: '/exhibition' },
  { label: 'About', href: '/bio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Instagram', href: 'https://www.instagram.com/codyburridgestudio', external: true },
  { label: 'Shop', href: 'https://qnjaf1-se.myshopify.com', external: true },
]

const s = {
  nav: { color: 'rgba(255,255,255,0.45)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, textDecoration: 'none' },
  eyebrow: { fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: '20px', display: 'block' as const },
  footer: { background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '48px 24px', display: 'flex' as const, flexDirection: 'column' as const, alignItems: 'center' as const, gap: '24px' },
  footerLink: { color: 'rgba(255,255,255,0.25)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, textDecoration: 'none' },
}

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', artwork: '', message: '' })

  // Pre-select the artwork when arriving from a lightbox "Enquire about this piece" link.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const art = q.get('artwork')
    const col = q.get('collection')
    if (!art) return
    const group = ENQUIRY_GROUPS.find(g => g.collection === col && g.works.includes(art))
      ?? ENQUIRY_GROUPS.find(g => g.works.includes(art))
    if (group) setForm(f => ({ ...f, artwork: `${group.collection}: ${art}` }))
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { firstName, lastName, email, artwork, message } = form
    const subject = encodeURIComponent(artwork ? `Enquiry: ${artwork}` : 'Studio enquiry')
    const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}${artwork ? `\nArtwork: ${artwork}` : ''}\n\n${message}`)
    window.location.href = `mailto:hello@codyburridge.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '2px',
    color: '#fff',
    padding: '14px 16px',
    fontSize: '13px',
    fontFamily: "'Poppins', system-ui, sans-serif",
    fontWeight: 300,
    outline: 'none',
    marginBottom: '16px',
  }

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
        <span style={s.eyebrow}>Get in Touch</span>
        <h1 style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          lineHeight: 0.95,
          marginBottom: '56px',
        }}>Contact</h1>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '48px' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', fontWeight: 300, marginBottom: '8px' }}>
            For exhibition and project enquiries, please email
          </p>
          <a href="mailto:hello@codyburridge.com" style={{
            display: 'inline-block',
            fontFamily: "'Jost', sans-serif",
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '0.02em',
            color: '#fff',
            textDecoration: 'none',
            marginBottom: '8px',
          }}>hello@codyburridge.com</a>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '56px' }}>London, UK</p>

          {sent ? (
            <div style={{ padding: '32px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2px', textAlign: 'center' }}>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}>Your email client should have opened. If not, email directly at hello@codyburridge.com</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                <input type="text" placeholder="First name" value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} style={inputStyle} />
                <input type="text" placeholder="Last name" value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} style={inputStyle} />
              </div>
              <input type="email" placeholder="Email address" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inputStyle} />
              <select
                aria-label="Which piece is this about?"
                value={form.artwork}
                onChange={e => setForm(f => ({ ...f, artwork: e.target.value }))}
                style={{ ...inputStyle, appearance: 'none' as const, color: form.artwork ? '#fff' : 'rgba(255,255,255,0.45)', cursor: 'pointer' }}
              >
                <option value="">Which piece is this about? (optional)</option>
                {ENQUIRY_GROUPS.map(g => (
                  <optgroup key={g.collection} label={g.collection} style={{ color: '#111' }}>
                    {g.works.map(w => (
                      <option key={w} value={`${g.collection}: ${w}`} style={{ color: '#111' }}>{w}</option>
                    ))}
                  </optgroup>
                ))}
                <option value="Something else" style={{ color: '#111' }}>Something else</option>
              </select>
              <textarea placeholder="Message" required rows={6} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ ...inputStyle, resize: 'vertical' as const }} />
              <button type="submit" style={{
                background: '#fff', color: '#0a0a0a', border: 'none', padding: '14px 40px',
                fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase',
                fontFamily: "'Poppins', system-ui, sans-serif", fontWeight: 400, cursor: 'pointer', borderRadius: '2px',
              }}>Send Message</button>
            </form>
          )}
        </div>
      </main>

      <footer style={s.footer}>
        <Link href="/"><img src={LOGO} alt="Cody Burridge" style={{ height: '18px', filter: 'invert(1)', opacity: 0.4, display: 'block' }} /></Link>
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
