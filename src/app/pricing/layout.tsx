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
      'fr-FR': 'https://ai-empire-steel.vercel.app/pricing',
      'en-US': 'https://ai-empire-steel.vercel.app/en/pricing',
      'es-ES': 'https://ai-empire-steel.vercel.app/es/pricing',
      'de-DE': 'https://ai-empire-steel.vercel.app/de/pricing',
      'it-IT': 'https://ai-empire-steel.vercel.app/it/pricing',
      'pt-BR': 'https://ai-empire-steel.vercel.app/pt/pricing',
      'ja-JP': 'https://ai-empire-steel.vercel.app/ja/pricing',
      'ko-KR': 'https://ai-empire-steel.vercel.app/ko/pricing',
      'zh-CN': 'https://ai-empire-steel.vercel.app/zh/pricing',
      'ar-SA': 'https://ai-empire-steel.vercel.app/ar/pricing',
      'x-default': 'https://ai-empire-steel.vercel.app/pricing',
    },
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
