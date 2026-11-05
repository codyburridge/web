import { seo } from '../seo'

export const metadata = seo('the-convention')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
