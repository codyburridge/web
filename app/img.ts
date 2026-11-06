import { IMAGE_MAP, SHOP_FILES } from './data/imageMap'

const SQUARESPACE = 'https://images.squarespace-cdn.com/content/v1/5eeb2c93738e693280f39e07/'

// Turns an image path into a resized image address on Shopify's image service.
export function imgUrl(path: string, width = 1500): string {
  if (path.startsWith('http')) return path
  const f = IMAGE_MAP[path]
  if (f) return `${SHOP_FILES}${f}${f.includes('?') ? '&' : '?'}width=${width}`
  return `${SQUARESPACE}${path}?format=${width}w`
}
