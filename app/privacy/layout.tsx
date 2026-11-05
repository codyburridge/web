import { seo } from '../seo'

export const metadata = seo('privacy')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
