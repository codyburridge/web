import { seo } from '../seo'

export const metadata = seo('bio')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
