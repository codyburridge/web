import { seo } from '../seo'

export const metadata = seo('the-magic-hour')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
