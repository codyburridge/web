/** @type {import('next').NextConfig} */
const SHOP = 'https://shop.codyburridge.com'

// Old Squarespace addresses, sent permanently to their new home so Google rankings carry over.
const to = (destination, sources) => sources.map(source => ({ source, destination, permanent: true }))

const nextConfig = {
  async redirects() {
    return [
      { source: '/favicon.ico', destination: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/cody-burridge-cb-icon-32.png?v=1794484512', permanent: false },
      ...to('/the-convention', ['/convention', '/comic-con-new', '/cc-about', '/details-cc', '/cs:n(\\d+)', '/cs:n(\\d+)-:m(\\d+)',
        '/fag-break', '/for-rent', '/no-parking', '/waiting-for-batman', '/i-am-sure-he-said-214', '/no-standing',
        '/stand-pipe', '/i-rest-my-case', '/lost-bunny', '/did-you-hear-something', '/shadow-of-doubt', '/delayed']),
      ...to('/a-different-view', ['/a-different-view-new', '/different-view-about', '/details-diff', '/db:n(\\d+)', '/db:n(\\d+)-:m(\\d+)']),
      ...to('/the-magic-hour', ['/magic-about', '/details-magic', '/magic-hour-:n(\\d+)']),
      ...to('/green-vs-grey', ['/greevsgrey', '/green-about', '/details-green', '/green-:n(\\d+)', '/grey-:n(\\d+)']),
      ...to('/in-time-we-rust', ['/in-time-we-rust-new', '/in-time-about', '/details-in-time', '/itwr-:n(\\d+)', '/itwr-:n(\\d+)-:m(\\d+)',
        '/mustard', '/drip', '/song', '/single', '/rust', '/fleck', '/klien', '/n32']),
      ...to('/neon-numbers', ['/neon-about', '/details-neon']),
      ...to('/end-of-an-easel', ['/end-of-an-easel-new', '/end-about', '/details-end', '/el:n(\\d+)', '/el:n(\\d+)-:m(\\d+)']),
      ...to('/reminiscence', ['/reminiscence-new', '/rem-about', '/details-rem', '/the-clown', '/vivian-mayer', '/clown-pop-up', '/viv-pop-up']),
      ...to('/book', ['/books']),
      ...to('/bio', ['/info', '/info2', '/info-1-1']),
      ...to('/collections', ['/home', '/home/artwork', '/home1', '/home7', '/home-:x*', '/home1-:x*', '/gallery-1', '/artonwalls', '/eventimages', '/new-page']),
      ...to('/edit', ['/schon-magazine', '/schon-magazine-1', '/:slug-clone-:id(\\d+)', '/:slug-clone-:id(\\d+)-clone-:id2(\\d+)',
        '/bb:n(\\d+)', '/bn:n(\\d+)', '/bn:n(\\d+)-:m(\\d+)', '/mm:n(\\d+)', '/l-to-g:n(\\d+)', '/l-to-g:n(\\d+)-:m(\\d+)', '/gc:n(\\d+)', '/gc:n(\\d+)-:m(\\d+)']),
      ...to('https://www.instagram.com/codyburridgestudio', ['/social']),
      ...to(SHOP, ['/shop', '/shop/a', '/size-guide']),
      ...to(`${SHOP}/collections/a-different-view`, ['/shop/a-different-view']),
      ...to(`${SHOP}/collections/psychedelic`, ['/shop/psychedelic-shop']),
      ...to(`${SHOP}/collections/the-book`, ['/shop/a/books']),
      ...to(`${SHOP}/products/:slug`, ['/shop/p/:slug']),
      ...to(`${SHOP}/pages/in-context`, ['/in-context']),
    ]
  },
}

module.exports = nextConfig
