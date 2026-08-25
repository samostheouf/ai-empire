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
      'fr-FR': 'https://ai-empire-steel.vercel.app/guide',
      'en-US': 'https://ai-empire-steel.vercel.app/en/guide',
      'es-ES': 'https://ai-empire-steel.vercel.app/es/guide',
      'de-DE': 'https://ai-empire-steel.vercel.app/de/guide',
      'it-IT': 'https://ai-empire-steel.vercel.app/it/guide',
      'pt-BR': 'https://ai-empire-steel.vercel.app/pt/guide',
      'ja-JP': 'https://ai-empire-steel.vercel.app/ja/guide',
      'ko-KR': 'https://ai-empire-steel.vercel.app/ko/guide',
      'zh-CN': 'https://ai-empire-steel.vercel.app/zh/guide',
      'ar-SA': 'https://ai-empire-steel.vercel.app/ar/guide',
      'x-default': 'https://ai-empire-steel.vercel.app/guide',
    },
  },
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
