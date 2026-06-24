import type { Metadata } from 'next'
import PricingPageClient from '@/components/client/PricingPageClient'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Tarifs — API IA & Templates Premium',
  description: 'Tarifs NeuraAPI : Starter gratuit (100 crédits), Pro à 19€/mois, Enterprise à 69€/mois. Sans engagement. Garantie satisfait ou remboursé 30 jours.',
  path: '/pricing',
  keywords: ['tarifs neuraapi', 'prix api ia', 'abonnement ia', 'plan pro ia', 'gratuit api ia'],
})

export default function PricingPage() {
  return <PricingPageClient />
}
