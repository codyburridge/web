'use client'

import { useState } from 'react'

// Cody's star (the Psychedelic tag). Sits at the bottom of the pages and always goes to the shop.
const BLACK = 'https://static1.squarespace.com/static/5eeb2c93738e693280f39e07/t/67a641addb81e5583d83eccf/1738949037483/Psychedelic+and+Star+Blk.png'
const PINK = 'https://static1.squarespace.com/static/5eeb2c93738e693280f39e07/t/67a641ad6d84db21b0b69de5/1738949037459/Psychedelic+and+Star+Pink.png'
const SHOP = 'https://qnjaf1-se.myshopify.com'

export default function StarLink({ dark = false }: { dark?: boolean }) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={SHOP}
      target="_blank"
      rel="noopener"
      aria-label="C STUDiO shop"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-block', lineHeight: 0 }}
    >
      <img
        src={hover ? PINK : BLACK}
        alt=""
        style={{ height: '44px', width: 'auto', display: 'block', filter: !hover && dark ? 'invert(1)' : 'none' }}
      />
    </a>
  )
}
