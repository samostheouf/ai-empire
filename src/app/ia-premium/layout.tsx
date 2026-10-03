import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-serif',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif-alt',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire.vercel.app'),
  title: {
    default: 'IA Premium — Prompts IA avancés pour entrepreneurs',
    template: '%s | IA Premium',
  },
  description:
    'Accédez à une collection exclusive de prompts IA avancés, frameworks stratégiques et templates businesses. Téléchargement immédiat, mises à jour à vie.',
  keywords: ['prompts IA', 'IA avancée', 'entrepreneurs', 'business', 'productivité'],
  openGraph: {
    title: 'IA Premium — Prompts IA avancés pour entrepreneurs',
    description: 'Collection exclusive de prompts IA avancés, frameworks stratégiques et templates businesses.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire.vercel.app',
    siteName: 'IA Premium',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'IA Premium' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA Premium — Prompts IA avancés pour entrepreneurs',
    description: 'Collection exclusive de prompts IA avancés, frameworks stratégiques et templates businesses.',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://js.stripe.com" />
        <link rel="preconnect" href="https://api.stripe.com" />
        <link rel="preconnect" href="https://checkout.stripe.com" />
      </head>
      <body className={`${playfair.variable} ${cormorant.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  )
}
