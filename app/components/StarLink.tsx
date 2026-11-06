'use client'

import { useState } from 'react'

// Cody's star (the Psychedelic tag). Sits at the bottom of the pages and always goes to the shop.
const BLACK = 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/site-star-psychedelic-and-star-blk.png?v=1793961765'
const PINK = 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/site-star-psychedelic-and-star-pink.png?v=1793961764'
const SHOP = 'https://shop.codyburridge.com'

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
