import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Lancement — Offres et Fonctionnalités NeuraAPI',
  description: 'Découvrez NeuraAPI au lancement : APIs IA, templates Next.js premium, SDK TypeScript. Offres de lancement avec réductions.',
  path: '/launch',
  keywords: ['lancement neuraapi', 'offre lancement', 'neuraapi product hunt', 'nouveau api ia'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
