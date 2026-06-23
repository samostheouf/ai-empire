import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide Pas à Pas — NeuraAPI',
  description: "Maîtrisez NeuraAPI de A à Z. Guide complet pour créer votre compte, obtenir votre clé API, utiliser nos endpoints et acheter des templates.",
  keywords: ['guide NeuraAPI', 'tutoriel API ia', 'getting started', 'clé API', 'développeur web'],
  openGraph: {
    title: 'Guide NeuraAPI — Pas à Pas',
    description: "Tutoriel complet pour démarrer avec NeuraAPI.",
    url: 'https://ai-empire-steel.vercel.app/guide',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Guide+NeuraAPI&subtitle=Tutoriel+complet+pas+à+pas', width: 1200, height: 630, alt: 'Guide NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Guide NeuraAPI', description: "Tutoriel complet pas à pas." },
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/guide',
    languages: {
      'fr-FR': '/guide',
      'en-US': '/en/guide',
      'es-ES': '/es/guide',
      'de-DE': '/de/guide',
      'it-IT': '/it/guide',
      'pt-BR': '/pt/guide',
      'ja-JP': '/ja/guide',
      'ko-KR': '/ko/guide',
      'zh-CN': '/zh/guide',
      'ar-SA': '/ar/guide',
      'x-default': '/guide',
    },
  },
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
