import { seo } from '../seo'

export const metadata = seo('collections')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
