import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Anyone landing on an old preview address (e.g. web-beta-cyan-67.vercel.app) goes to the same page on www.codyburridge.com
export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  if (host.endsWith('.vercel.app')) {
    const url = new URL(req.nextUrl.pathname + req.nextUrl.search, 'https://www.codyburridge.com')
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

export const config = { matcher: '/((?!_next/|favicon).*)' }
