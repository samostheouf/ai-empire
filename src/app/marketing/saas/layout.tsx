import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA pour SaaS — NeuraAPI',
  description: 'Intégrez l\'intelligence artificielle dans votre SaaS avec NeuraAPI. Génération de contenu, SEO, code. Offre de lancement -30%.',
  openGraph: {
    title: 'IA pour SaaS — NeuraAPI',
    description: 'Propulsez votre SaaS avec l\'intelligence artificielle.',
    url: 'https://ai-empire-steel.vercel.app/marketing/saas',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/og-image.svg', width: 1200, height: 630, alt: 'IA pour SaaS — NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'IA pour SaaS', description: 'Propulsez votre SaaS avec l\'IA.' },
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/marketing/saas' },
}

export default function SaaSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
