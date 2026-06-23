import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation API — NeuraAPI',
  description: "Documentation complète de l'API NeuraAPI. Authentification, endpoints de génération de texte, SEO, code. SDK TypeScript inclus.",
  keywords: ['documentation API', 'SDK TypeScript', 'API ia', 'guide intégration', 'endpoints IA'],
  openGraph: {
    title: 'Documentation API NeuraAPI',
    description: "Guide complet d'intégration de l'API NeuraAPI.",
    url: 'https://ai-empire-steel.vercel.app/docs',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Documentation+API&subtitle=Guide+complet+d%27intégration', width: 1200, height: 630, alt: 'Documentation NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Documentation API NeuraAPI', description: "Guide complet d'intégration." },
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/docs',
    languages: {
      'fr-FR': '/docs',
      'en-US': '/en/docs',
      'es-ES': '/es/docs',
      'de-DE': '/de/docs',
      'it-IT': '/it/docs',
      'pt-BR': '/pt/docs',
      'ja-JP': '/ja/docs',
      'ko-KR': '/ko/docs',
      'zh-CN': '/zh/docs',
      'ar-SA': '/ar/docs',
      'x-default': '/docs',
    },
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
