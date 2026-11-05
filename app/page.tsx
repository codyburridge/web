'use client'

import Link from 'next/link'

// TRIAL intro page: full-screen moving image with an Enter button that goes to Collections.
// To change the film, swap VIDEO (and POSTER, the still shown while it loads).
const VIDEO = 'https://cdn.shopify.com/videos/c/vp/7f826cbfb06a48ba885004e9c8b1a927/7f826cbfb06a48ba885004e9c8b1a927.HD-720p-1.6Mbps-100139938.mp4'
const POSTER = 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/cstudio-intro-poster.jpg?v=1793884506'
const LOGO = 'https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/36ccec98-077c-482e-9a8e-cf3d20fa0f61/Cody+Burridge_Logo_1000+small.png?format=400w'

export default function Intro() {
  return (
    <main style={{
      position: 'fixed',
      inset: 0,
      background: '#111111',
      overflow: 'hidden',
      fontFamily: "'Poppins', system-ui, sans-serif",
      WebkitFontSmoothing: 'antialiased',
    }}>
      <video
        src={VIDEO}
        poster={POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.35) 100%)' }} />

      <Link href="/collections" aria-label="Collections" style={{ position: 'absolute', top: '28px', left: '50%', transform: 'translateX(-50%)', lineHeight: 0 }}>
        <img
          src={LOGO}
          alt="Cody Burridge"
          style={{ height: '32px', width: 'auto', filter: 'invert(1)', display: 'block' }}
        />
      </Link>

      <Link
        href="/collections"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '12vh',
          transform: 'translateX(-50%)',
          color: '#ffffff',
          textDecoration: 'none',
          fontFamily: "'Jost', sans-serif",
          fontWeight: 400,
          fontSize: '13px',
          letterSpacing: '0.42em',
          textTransform: 'uppercase',
          padding: '16px 34px 16px 40px',
          border: '1px solid rgba(255,255,255,0.7)',
          backdropFilter: 'blur(2px)',
        }}
      >
        Enter
      </Link>
    </main>
  )
}
