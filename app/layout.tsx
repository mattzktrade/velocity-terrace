import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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

export const metadata: Metadata = {
  title: 'Velocity Terrace | Premium F1 Hospitality Experience',
  description: 'The ultimate F1 party hospitality experience. World-class views, open bars, live DJs at Monaco, Singapore & Abu Dhabi Grand Prix 2026.',
  keywords: 'F1 hospitality, Monaco Grand Prix, Singapore Grand Prix, Abu Dhabi Grand Prix, VIP F1 experience, Formula 1 party',
  openGraph: {
    title: 'Velocity Terrace | Premium F1 Hospitality Experience',
    description: 'This is not hospitality. This is a party. Experience F1 like never before.',
    type: 'website',
    images: ['/monaco/page4-img15.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable} bg-[#0A0A0A]`}>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
