import { seo } from '../seo'

export const metadata = seo('intro')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
