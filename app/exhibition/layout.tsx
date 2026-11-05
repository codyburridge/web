import { seo } from '../seo'

export const metadata = seo('exhibition')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
