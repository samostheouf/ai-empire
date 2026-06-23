import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarifs — NeuraAPI',
  description: "Tarification simple et transparente pour NeuraAPI. Plan Starter gratuit, Pro à 19€/mois, Enterprise à 69€/mois. Offre de lancement -30%.",
  keywords: ['tarif NeuraAPI', 'prix API ia', 'SaaS template prix', 'API ia gratuite', 'plan Pro'],
  openGraph: {
    title: 'Tarifs NeuraAPI — Plans à partir de 0€',
    description: "Choisissez le plan adapté à vos besoins. Starter gratuit, Pro -30%, Enterprise -30%.",
    url: 'https://ai-empire-steel.vercel.app/pricing',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Tarifs+NeuraAPI&subtitle=Plans+à+partir+de+0€', width: 1200, height: 630, alt: 'Tarifs NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Tarifs NeuraAPI', description: "Plans à partir de 0€. Offre de lancement -30%." },
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/pricing',
    languages: {
      'fr-FR': '/pricing',
      'en-US': '/en/pricing',
      'es-ES': '/es/pricing',
      'de-DE': '/de/pricing',
      'it-IT': '/it/pricing',
      'pt-BR': '/pt/pricing',
      'ja-JP': '/ja/pricing',
      'ko-KR': '/ko/pricing',
      'zh-CN': '/zh/pricing',
      'ar-SA': '/ar/pricing',
      'x-default': '/pricing',
    },
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
