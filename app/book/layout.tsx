import { seo } from '../seo'

export const metadata = seo('book')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
