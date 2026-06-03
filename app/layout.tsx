import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SeoHeadLinks } from '@/components/seo/head-links'
import { GlobalJsonLd } from '@/components/seo/json-ld'
import { ROOT_METADATA } from '@/lib/seo/metadata'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-barlow-condensed',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = ROOT_METADATA

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${barlowCondensed.variable} ${inter.variable} bg-[#0A0A0A]`}>
      <head>
        <SeoHeadLinks />
      </head>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white">
        <GlobalJsonLd />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
