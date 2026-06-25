import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beta — NeuraAPI',
  description: 'Testez NeuraAPI gratuitement. 100 crédits offerts, accès complet à toutes les APIs.',
  openGraph: {
    title: 'Beta NeuraAPI — Accès anticipé',
    description: '100 crédits gratuits, accès complet.',
    url: 'https://ai-empire-steel.vercel.app/beta',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/logo.jpg', width: 400, height: 400, alt: 'Beta NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Beta NeuraAPI', description: 'Accès anticipé gratuit. 100 crédits offerts.' },
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/beta' },
}

export default function BetaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
