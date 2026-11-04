'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './page.module.css'

const BASE = 'https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/'

const artworks = [
  { file: '72b110b9-f74f-4de9-8a9e-ee7a7ef480b2/Fag+Break+FIN+FLAT+copy.jpg', title: 'Fag Break' },
  { file: 'b864f8cb-9412-4f32-956b-5a5f044749cf/For+Rent+FIN+FLAT.jpg', title: 'For Rent', objPos: 'center 72%' },
  { file: '8b96c245-f2c0-40aa-8ea1-627ce11e9686/No+Parking+FIN+FLAT.jpg', title: 'No Parking' },
  { file: '50ef7b9c-cb65-4891-8612-e06598e79a59/Waiting+For+BatMan+FIN+FLAT.jpg', title: 'Waiting For Batman' },
  { file: 'e3e4cd8b-091e-43d3-9e40-b8bd7def43a5/I+am+sure+he+said+214+FIN+FLAT.jpg', title: 'I Am Sure He Said 214' },
  { file: '63ef2542-c26d-447e-9282-7600deafeaa6/No+Standing+SQUARE+FIN+FLAT.jpg', title: 'No Standing' },
  { file: 'b508a63f-7838-4df0-9b16-f66b7f5b9f36/Chained+to+the+Job+FIN+FLAT.jpg', title: 'Chained to the Job' },
  { file: '2e37d4e4-ff3c-41b8-b85f-d6c537482679/Stand+Pipe+FIN+FLAT.jpg', title: 'Stand Pipe' },
  { file: '69af5177-c3c9-4344-bbcd-3d8ddaf5d4c7/Lost+Bunny+FIN+FLAT+.jpg', title: 'Lost Bunny' },
  { file: '430bd48c-b119-4a36-8adb-39454e52cadb/Did+you+hear+something%3F+FIN+FLAT.jpg', title: 'Did You Hear Something?' },
  { file: 'd3b6cebb-0f9a-47e7-8827-dee669370560/Shadow+of+Doubt+FIN+FLAT.jpg', title: 'Shadow of Doubt' },
  { file: 'cd694742-40a8-46ad-878a-7b55ff1cce32/Delayed+FIN+FLAT.jpg', title: 'Delayed', objPos: 'left center' },
]

export default function TheConvention() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null)
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

  const openLightbox = (art: typeof artworks[0]) => {
    setLightbox({
      src: `${BASE}${art.file}?format=1200w`,
      title: art.title,
    })
  }

  return (
    <>
      {/* HEADER */}
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <button
          className={`${styles.hamburger} ${navOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>

        <a className={styles.headerLogo} href="https://www.codyburridge.com">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/36ccec98-077c-482e-9a8e-cf3d20fa0f61/Cody+Burridge_Logo_1000+small.png?format=400w"
            alt="Cody Burridge C.STUDIO"
          />
        </a>

        <a className={styles.shopBtn} href="https://www.codyburridge.com/shop" target="_blank" rel="noopener">
          Shop
        </a>
      </header>

      {/* MOBILE NAV */}
      <nav className={`${styles.navOverlay} ${navOpen ? styles.navOverlayOpen : ''}`} aria-hidden={!navOpen}>
        <a href="https://www.codyburridge.com/shop" target="_blank" rel="noopener" onClick={() => setNavOpen(false)}>Shop Prints</a>
        <a href="https://www.codyburridge.com/collections" onClick={() => setNavOpen(false)}>Collections</a>
        <a href="https://www.codyburridge.com/bio" onClick={() => setNavOpen(false)}>About</a>
        <a href="https://www.codyburridge.com/contact" onClick={() => setNavOpen(false)}>Contact</a>
        <a href="#signup" onClick={() => setNavOpen(false)}>Join Preview List</a>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Fine Art Photography · Limited Editions</p>
          <h1>The<br />Convention</h1>
          <p className={styles.heroSub}>
            Where costume meets convention. A fine art series capturing the human theatre behind the mask.
          </p>
          <a className={styles.heroCta} href="#gallery">View the Series</a>
          <a className={styles.heroJoin} href="#signup">Join the Preview List</a>
        </div>
        <p className={styles.scrollHint} aria-hidden="true">↓&nbsp;&nbsp;Scroll</p>
      </section>

      {/* GALLERY */}
      <section className={styles.gallerySection} id="gallery">
        <div className={styles.galleryHeader}>
          <span className={styles.galleryLabel}>The Works</span>
          <span className={styles.galleryCount}>12 Pieces · Limited Editions</span>
        </div>
        <div className={styles.galleryGrid}>
          {artworks.map((art, i) => (
            <div
              key={art.file}
              className={styles.galleryItem}
              onClick={() => openLightbox(art)}
            >
              <img
                src={`${BASE}${art.file}?format=800w`}
                alt={art.title}
                loading="lazy"
                decoding="async"
                className={loadedImages.has(i) ? styles.imgLoaded : ''}
                style={art.objPos ? { objectPosition: art.objPos } : undefined}
                onLoad={() => handleImageLoad(i)}
              />
              <div className={styles.galleryCaption}>{art.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNUP */}
      <section className={styles.signupSection} id="signup">
        <p className={styles.signupEyebrow}>Collector Access</p>
        <h2>Join the<br />Preview List</h2>
        <p className={styles.signupSub}>
          First access to new works, collector editions and releases — before they go public.
        </p>
        <form
          className={styles.signupForm}
          action="https://codyburridge.us1.list-manage.com/subscribe/post?u=de5025904fc1d6605d1c621b1&id=1283185285&f_id=00577fe1f0"
          method="post"
          target="_blank"
          noValidate
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

      {/* FOOTER */}
      <footer className={styles.footer}>
        <a className={styles.footerLogo} href="https://www.codyburridge.com">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/36ccec98-077c-482e-9a8e-cf3d20fa0f61/Cody+Burridge_Logo_1000+small.png?format=200w"
            alt="Cody Burridge"
          />
        </a>
        <div className={styles.footerLinks}>
          <a href="https://www.codyburridge.com/shop" target="_blank" rel="noopener">Shop</a>
          <a href="https://www.codyburridge.com/collections" target="_blank" rel="noopener">Collections</a>
          <a href="https://www.codyburridge.com/contact" target="_blank" rel="noopener">Contact</a>
          <a href="https://www.instagram.com/codyburridge" target="_blank" rel="noopener">Instagram</a>
        </div>
        <p style={{ fontSize: '9px', color: 'rgba(0,0,0,0.2)', letterSpacing: '0.06em' }}>
          © 2026 Cody Burridge. All rights reserved.
        </p>
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <img
            src={lightbox.src}
            alt={lightbox.title}
            onClick={(e) => e.stopPropagation()}
          />
          <p className={styles.lightboxCaption}>{lightbox.title}</p>
        </div>
      )}
    </>
  )
}
