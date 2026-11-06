'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './collection.module.css'
import StarLink from './StarLink'
import { imgUrl } from '../img'


export interface Artwork {
  file: string
  title: string
  objPos?: string
  /** Optional in-situ image (the work framed on a wall). Full URL, or a Squarespace file path. */
  insitu?: string
}

interface CollectionPageProps {
  title: string
  year: string
  pieces: number
  description: string
  artworks: Artwork[]
  heroBgFile?: string
  titleImage?: string
}

export default function CollectionPage({
  title,
  year,
  pieces,
  description,
  artworks,
  heroBgFile,
  titleImage,
}: CollectionPageProps) {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lightbox, setLightbox] = useState<{ art: Artwork; view: 'art' | 'insitu' } | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index))
  }

  const openLightbox = (art: Artwork) => {
    setLightbox({ art, view: 'art' })
  }

  const artSrc = (art: Artwork, size = '1500w') => imgUrl(art.file, parseInt(size))
  const insituSrc = (art: Artwork) =>
    art.insitu ? (art.insitu.startsWith('http') ? art.insitu : imgUrl(art.insitu)) : ''
  const enquireHref = (art: Artwork) =>
    `/contact?collection=${encodeURIComponent(title)}&artwork=${encodeURIComponent(art.title)}`

  const bgFile = heroBgFile ?? artworks[0]?.file
  const bgUrl = bgFile ? imgUrl(bgFile, 1200) : ''

  const titleWords = title.split(' ')
  const titleDisplay = titleWords.length >= 3
    ? <>{titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ')}<br />{titleWords.slice(Math.ceil(titleWords.length / 2)).join(' ')}</>
    : <>{title}</>

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <button
          className={`${styles.hamburger} ${navOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>
        <Link className={styles.headerLogo} href="/collections">
          <img
            src="https://cdn.shopify.com/s/files/1/1093/5432/0212/files/site-36ccec98-077c-482e-9a8e-cf3d20fa0f61-cody-burridge-logo-1000-small.png?v=1793961746&width=400"
            alt="Cody Burridge C.STUDIO"
          />
        </Link>
        <a className={styles.shopBtn} href="https://shop.codyburridge.com" target="_blank" rel="noopener" aria-label="Shop">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8L5 8z" />
            <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
          </svg>
        </a>
      </header>

      <nav className={`${styles.navOverlay} ${navOpen ? styles.navOverlayOpen : ''}`} aria-hidden={!navOpen}>
        <Link href="/collections" onClick={() => setNavOpen(false)}>Collections</Link>
        <Link href="/bio" onClick={() => setNavOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setNavOpen(false)}>Contact</Link>
        <a href="https://shop.codyburridge.com" target="_blank" rel="noopener" onClick={() => setNavOpen(false)}>Shop</a>
        <a href="#signup" onClick={() => setNavOpen(false)}>Join Preview List</a>
      </nav>

      <section className={styles.hero}>
        {bgUrl && (
          <div
            className={styles.heroBg}
            aria-hidden="true"
            style={{ backgroundImage: `url('${bgUrl}')` }}
          />
        )}
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Fine Art Photography · Limited Editions</p>
          <h1>{titleImage
            ? <img src={titleImage} alt={title} style={{ width: 'clamp(260px, 50vw, 620px)', height: 'auto', display: 'inline-block', verticalAlign: 'middle' }} />
            : titleDisplay}</h1>
          <p className={styles.heroSub}>{description}</p>
          <a className={styles.heroCta} href="#gallery">View the Series</a>
          <a className={styles.heroJoin} href="#signup">Join the Preview List</a>
        </div>
        <p className={styles.scrollHint} aria-hidden="true">↓&nbsp;&nbsp;Scroll</p>
      </section>

      <section className={styles.gallerySection} id="gallery">
        <div className={styles.galleryHeader}>
          <span className={styles.galleryLabel}>The Works</span>
          <span className={styles.galleryCount}>{pieces} Pieces · Limited Editions</span>
        </div>
        <div className={styles.galleryGrid}>
          {artworks.map((art, i) => (
            <div
              key={art.file}
              className={styles.galleryItem}
              onClick={() => openLightbox(art)}
            >
              <img
                src={imgUrl(art.file, 800)}
                alt={`${art.title}, from ${title} by Cody Burridge, fine art photograph`}
                loading="lazy"
                decoding="async"
                className={loadedImages.has(i) ? styles.imgLoaded : ''}
                style={art.objPos ? { objectPosition: art.objPos } : undefined}
                onLoad={() => handleImageLoad(i)}
              />
              {art.title && <div className={styles.galleryCaption}>{art.title}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.signupSection} id="signup">
        <p className={styles.signupEyebrow}>Collector Access</p>
        <h2>Join the<br />Preview List</h2>
        <p className={styles.signupSub}>
          First access to new works, collector editions and releases, before they go public.
        </p>
        <form
          className={styles.signupForm}
          action="https://codyburridge.us1.list-manage.com/subscribe/post?u=de5025904fc1d6605d1c621b1&id=1283185285&f_id=00577fe1f0"
          method="post"
          target="_blank"
          noValidate
          onSubmit={() => {
            ;(window as any).fbq?.('track', 'Lead', { content_name: 'Preview list' })
            ;(window as any).clarity?.('event', 'preview_list_signup')
          }}
        >
          <input type="text" name="FNAME" placeholder="First name" autoComplete="given-name" />
          <input type="email" name="EMAIL" placeholder="Email address" required autoComplete="email" />
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_de5025904fc1d6605d1c621b1_1283185285" tabIndex={-1} defaultValue="" />
          </div>
          <button type="submit">Join the List</button>
        </form>
        <p className={styles.signupNote}>No spam. Unsubscribe at any time.</p>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.footerLogo} href="/collections">
          <img
            src="https://cdn.shopify.com/s/files/1/1093/5432/0212/files/site-36ccec98-077c-482e-9a8e-cf3d20fa0f61-cody-burridge-logo-1000-small.png?v=1793961746&width=200"
            alt="Cody Burridge"
          />
        </Link>
        <div className={styles.footerLinks}>
          <Link href="/exhibition">Exhibition</Link>
          <Link href="/bio">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <a href="https://www.instagram.com/codyburridgestudio" target="_blank" rel="noopener">Instagram</a>
          <a href="https://shop.codyburridge.com" target="_blank" rel="noopener">Shop</a>
        </div>
        <StarLink />
        <p style={{ fontSize: '9px', color: 'rgba(0,0,0,0.2)', letterSpacing: '0.06em' }}>
          © 2026 Cody Burridge. All rights reserved.
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: `${title} by Cody Burridge`,
          description,
          author: { '@type': 'Person', name: 'Cody Burridge' },
          image: artworks.map(art => ({
            '@type': 'ImageObject',
            contentUrl: imgUrl(art.file),
            name: art.title,
            caption: `${art.title}, ${title}, Cody Burridge`,
            creator: { '@type': 'Person', name: 'Cody Burridge' },
          })),
        }) }}
      />

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)} role="dialog" aria-label={lightbox.art.title}>
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <div className={styles.lightboxFrame} onClick={(e) => e.stopPropagation()}>
            <img
              className={styles.lightboxMain}
              src={lightbox.view === 'insitu' ? insituSrc(lightbox.art) : artSrc(lightbox.art)}
              alt={lightbox.view === 'insitu' ? `${lightbox.art.title}, framed in situ` : lightbox.art.title}
            />
            <div className={styles.lightboxBar}>
              <div className={styles.lightboxInfo}>
                <p className={styles.lightboxCaption}>{lightbox.art.title}</p>
                <Link className={styles.lightboxEnquire} href={enquireHref(lightbox.art)}>Enquire</Link>
              </div>
              {lightbox.art.insitu && (
                <button
                  className={styles.lightboxThumb}
                  onClick={() => setLightbox({ art: lightbox.art, view: lightbox.view === 'art' ? 'insitu' : 'art' })}
                  aria-label={lightbox.view === 'art' ? 'Show it framed in situ' : 'Show the artwork'}
                >
                  <img src={lightbox.view === 'art' ? insituSrc(lightbox.art) : artSrc(lightbox.art, '300w')} alt="" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
