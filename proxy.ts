import { NextResponse, type NextRequest } from 'next/server'

const PRIMARY_HOST = 'www.velocity-terrace.com'
const REDIRECT_HOSTS = new Set(['velocity-terrace.com'])

export function proxy(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase()

  if (!host) return NextResponse.next()

  const shouldRedirect =
    REDIRECT_HOSTS.has(host) || (host.endsWith('.vercel.app') && host !== PRIMARY_HOST)

  if (!shouldRedirect) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.protocol = 'https'
  url.hostname = PRIMARY_HOST

  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: '/:path*',
}
