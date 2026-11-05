import { seo } from '../seo'

export const metadata = seo('reminiscence')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
