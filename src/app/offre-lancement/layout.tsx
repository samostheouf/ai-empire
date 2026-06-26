import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Offre de Lancement — Templates & APIs IA',
  description: 'Offre de lancement NeuraAPI : templates Next.js et APIs IA à prix réduit. 50 places disponibles. Ne manquez pas cette opportunité.',
  path: '/offre-lancement',
  keywords: ['offre lancement neuraapi', 'early bird neuraapi', 'templates premium lancement', 'api ia promotion'],
})

export default function OffreLancementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
