import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation API — NeuraAPI',
  description: "Documentation complète de l'API NeuraAPI. Authentification, endpoints de génération de texte, SEO, code. SDK TypeScript inclus.",
  keywords: ['documentation API', 'SDK TypeScript', 'API ia', 'guide intégration', 'endpoints IA'],
  openGraph: {
    title: 'Documentation API NeuraAPI',
    description: "Guide complet d'intégration de l'API NeuraAPI.",
    url: 'https://ai-empire-steel.vercel.app/api-docs',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Documentation+API&subtitle=Guide+complet+d%27intégration', width: 1200, height: 630, alt: 'Documentation NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Documentation API NeuraAPI', description: "Guide complet d'intégration." },
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/api-docs',
    languages: {
      'fr-FR': 'https://ai-empire-steel.vercel.app/api-docs',
      'en-US': 'https://ai-empire-steel.vercel.app/en/api-docs',
      'es-ES': 'https://ai-empire-steel.vercel.app/es/api-docs',
      'de-DE': 'https://ai-empire-steel.vercel.app/de/api-docs',
      'it-IT': 'https://ai-empire-steel.vercel.app/it/api-docs',
      'pt-BR': 'https://ai-empire-steel.vercel.app/pt/api-docs',
      'ja-JP': 'https://ai-empire-steel.vercel.app/ja/api-docs',
      'ko-KR': 'https://ai-empire-steel.vercel.app/ko/api-docs',
      'zh-CN': 'https://ai-empire-steel.vercel.app/zh/api-docs',
      'ar-SA': 'https://ai-empire-steel.vercel.app/ar/api-docs',
      'x-default': 'https://ai-empire-steel.vercel.app/api-docs',
    },
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
