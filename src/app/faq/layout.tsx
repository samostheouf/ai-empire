import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'FAQ — Questions Fréquentes sur NeuraAPI',
  description: 'Trouvez les réponses à vos questions sur NeuraAPI : tarifs, crédits, API IA, templates, support, sécurité et RGPD.',
  path: '/faq',
  keywords: ['faq neuraapi', 'questions fréquentes', 'aide neuraapi', 'support neuraapi'],
})

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
