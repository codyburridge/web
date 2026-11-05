import { seo } from '../seo'

export const metadata = seo('terms')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
