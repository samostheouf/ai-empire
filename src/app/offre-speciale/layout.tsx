import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offre de Lancement — NeuraAPI',
  description: 'Code promo LANCEMENT30 : -30% sur le premier mois du plan Pro NeuraAPI.',
  openGraph: {
    title: 'Offre de Lancement NeuraAPI',
    description: 'Code promo LANCEMENT30 : -30% sur le plan Pro.',
    url: 'https://ai-empire-steel.vercel.app/offre-speciale',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/og-image.svg', width: 1200, height: 630, alt: 'Offre de Lancement NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Offre de Lancement NeuraAPI', description: 'Code promo LANCEMENT30 : -30% sur le plan Pro.' },
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/offre-speciale' },
}

export default function OffreSpecialeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
