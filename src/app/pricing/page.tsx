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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'NeuraAPI Pro',
            applicationCategory: 'DeveloperApplication',
            offers: [
              { '@type': 'Offer', price: '0', priceCurrency: 'EUR', name: 'Starter', description: '100 credits/month' },
              { '@type': 'Offer', price: '19', priceCurrency: 'EUR', name: 'Pro', description: '10,000 credits/month', availability: 'https://schema.org/InStock' },
              { '@type': 'Offer', price: '99', priceCurrency: 'EUR', name: 'Enterprise', description: 'Unlimited credits' },
            ],
          }),
        }}
      />
      <PricingPageClient />
    </>
  )
}
