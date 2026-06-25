import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA pour Agences Web — NeuraAPI',
  description: 'Solutions IA pour agences web. White-label, templates premium, livraison rapide. Multipliez votre productivité.',
  openGraph: {
    title: 'IA pour Agences Web — NeuraAPI',
    description: 'Solutions IA white-label pour agences web.',
    url: 'https://ai-empire-steel.vercel.app/marketing/agencies',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/logo.jpg', width: 400, height: 400, alt: 'IA pour Agences Web — NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'IA pour Agences', description: 'Solutions white-label pour agences.' },
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/marketing/agencies' },
}

export default function AgenciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
