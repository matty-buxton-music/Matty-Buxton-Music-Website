import type { Metadata, Viewport } from 'next'
import { Outfit, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Matty Buxton | Neo Soul • Hip-Hop • Funk from Mount Maunganui',
  description: 'Matty Buxton is an independent neo soul, hip-hop, and funk artist from Mount Maunganui, New Zealand. Original music, unforgettable live performances, and premium entertainment for weddings and events.',
  keywords: ['Matty Buxton', 'Neo Soul', 'Hip-Hop', 'Funk', 'Mount Maunganui', 'New Zealand', 'Wedding Band', 'Live Music', 'The Buxtones'],
  authors: [{ name: 'Matty Buxton' }],
  openGraph: {
    title: 'Matty Buxton | Neo Soul • Hip-Hop • Funk from Mount Maunganui',
    description: 'Original music, unforgettable live performances, and premium entertainment for events across New Zealand.',
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matty Buxton | Neo Soul • Hip-Hop • Funk',
    description: 'Original music and premium live entertainment from Mount Maunganui, New Zealand.',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f3ef',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
        <body className={`${outfit.variable} ${fraunces.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
