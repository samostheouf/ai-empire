import type { Metadata } from 'next'
import { SUBSCRIPTION_PLANS } from '@/lib/plans'

const PRO_PRICE = SUBSCRIPTION_PLANS.pro.price / 100
const BUSINESS_PRICE = SUBSCRIPTION_PLANS.business.price / 100

export const metadata: Metadata = {
  title: 'Tarifs — NeuraAPI',
  description: `Tarification simple et transparente pour NeuraAPI. Plan Starter gratuit, Pro à ${PRO_PRICE}€/mois, Business à ${BUSINESS_PRICE}€/mois.`,
  keywords: ['tarif NeuraAPI', 'prix API ia', 'SaaS template prix', 'API ia gratuite', 'plan Pro'],
  openGraph: {
    title: 'Tarifs NeuraAPI — Plans à partir de 0€',
    description: `Choisissez le plan adapté à vos besoins. Starter gratuit, Pro ${PRO_PRICE}€/mois, Business ${BUSINESS_PRICE}€/mois.`,
    url: 'https://ai-empire-steel.vercel.app/pricing',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Tarifs+NeuraAPI&subtitle=Plans+à+partir+de+0€', width: 1200, height: 630, alt: 'Tarifs NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Tarifs NeuraAPI', description: 'Plans à partir de 0€.' },
  // Aucune variante linguistique n'existe pour /pricing (toutes les routes /xx/* sont
  // en 404) : on garde uniquement le canonical. Des hreflang vers des 404 sont
  // interpretes comme du spam par Google et degradent le domaine entier.
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/pricing',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
