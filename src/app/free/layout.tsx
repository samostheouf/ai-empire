import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Template Next.js Gratuit — NeuraStarter',
  description: 'Téléchargez gratuitement NeuraStarter, un template Next.js 14 complet pour SaaS. Auth, Stripe, IA intégrés. Licence MIT.',
  path: '/free',
  keywords: ['template next.js gratuit', 'template saas gratuit', 'neurastarter', 'template next.js 14'],
})

export default function FreeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
