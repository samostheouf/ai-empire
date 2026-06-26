import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Offre Spéciale — Réductions NeuraAPI',
  description: 'Profitez de nos offres spéciales sur les templates Next.js premium et les APIs IA NeuraAPI. Places limitées.',
  path: '/offre-speciale',
  keywords: ['offre spéciale neuraapi', 'réduction neuraapi', 'promo api ia', 'bon plan templates'],
})

export default function OffreSpecialeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
