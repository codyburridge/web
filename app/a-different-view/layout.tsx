import { seo } from '../seo'

export const metadata = seo('a-different-view')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
