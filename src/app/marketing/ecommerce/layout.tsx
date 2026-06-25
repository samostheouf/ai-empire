import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA pour E-commerce — NeuraAPI',
  description: 'Propulsez votre e-commerce avec l\'IA. Recommandations produits, descriptions automatisées, SEO optimisé.',
  openGraph: {
    title: 'IA pour E-commerce — NeuraAPI',
    description: 'Solutions IA pour boutiques en ligne.',
    url: 'https://ai-empire-steel.vercel.app/marketing/ecommerce',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/logo.jpg', width: 400, height: 400, alt: 'IA pour E-commerce — NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'IA pour E-commerce', description: 'Recommandations et SEO automatisés.' },
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/marketing/ecommerce' },
}

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
