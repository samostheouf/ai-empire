import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Blog — Conseils IA, Templates & Développement | NeuraAPI',
    template: '%s | Blog NeuraAPI',
  },
  description: "Articles, tutoriels et meilleures pratiques pour développer, automatiser et monétiser vos projets avec l'intelligence artificielle.",
  keywords: ['blog IA', 'tutoriel Next.js', 'développeur web', 'API ia', 'template next.js'],
  openGraph: {
    title: 'Blog NeuraAPI — IA, Templates & Développement',
    description: "Conseils, tutoriels et meilleures pratiques pour vos projets IA.",
    url: 'https://ai-empire-steel.vercel.app/blog',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Blog+NeuraAPI&subtitle=IA,+Templates+%26+Développement', width: 1200, height: 630, alt: 'Blog NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Blog NeuraAPI', description: "Articles et tutoriels sur l'IA et le développement." },
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/blog',
    languages: {
      'fr-FR': 'https://ai-empire-steel.vercel.app/blog',
      'en-US': 'https://ai-empire-steel.vercel.app/en/blog',
      'es-ES': 'https://ai-empire-steel.vercel.app/es/blog',
      'de-DE': 'https://ai-empire-steel.vercel.app/de/blog',
      'it-IT': 'https://ai-empire-steel.vercel.app/it/blog',
      'pt-BR': 'https://ai-empire-steel.vercel.app/pt/blog',
      'ja-JP': 'https://ai-empire-steel.vercel.app/ja/blog',
      'ko-KR': 'https://ai-empire-steel.vercel.app/ko/blog',
      'zh-CN': 'https://ai-empire-steel.vercel.app/zh/blog',
      'ar-SA': 'https://ai-empire-steel.vercel.app/ar/blog',
      'x-default': 'https://ai-empire-steel.vercel.app/blog',
    },
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
