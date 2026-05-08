import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://iceratops.com'),
  title: {
    default: 'Iceratops',
    template: '%s | Iceratops',
  },
  description: 'Iceratops website rebuild placeholder.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Iceratops',
    description: 'Iceratops website rebuild placeholder.',
    url: '/',
    siteName: 'Iceratops',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Iceratops logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
