import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Templates Premium Next.js & Tailwind — NeuraAPI',
    template: '%s | Templates NeuraAPI',
  },
  description: "Découvrez nos templates premium Next.js + Tailwind CSS. SaaS, e-commerce, blog, portfolio. Code propre, prêt à déployer. À partir de 49€.",
  keywords: ['template next.js', 'templates premium', 'SaaS template', 'Next.js', 'Tailwind CSS', 'templates professionnels'],
  openGraph: {
    title: 'Templates Premium Next.js & Tailwind',
    description: "Templates professionnels Next.js + Tailwind. Code propre, documentation incluse, prêt à déployer.",
    url: 'https://ai-empire-steel.vercel.app/templates',
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ai-empire-steel.vercel.app/api/og?title=Templates+Premium+Next.js&subtitle=Code+propre,+prêt+à+déployer', width: 1200, height: 630, alt: 'Templates Premium NeuraAPI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Templates Premium Next.js', description: "Templates professionnels Next.js + Tailwind. Prêt à déployer." },
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/templates',
    languages: {
      'fr-FR': 'https://ai-empire-steel.vercel.app/templates',
      'en-US': 'https://ai-empire-steel.vercel.app/en/templates',
      'es-ES': 'https://ai-empire-steel.vercel.app/es/templates',
      'de-DE': 'https://ai-empire-steel.vercel.app/de/templates',
      'it-IT': 'https://ai-empire-steel.vercel.app/it/templates',
      'pt-BR': 'https://ai-empire-steel.vercel.app/pt/templates',
      'ja-JP': 'https://ai-empire-steel.vercel.app/ja/templates',
      'ko-KR': 'https://ai-empire-steel.vercel.app/ko/templates',
      'zh-CN': 'https://ai-empire-steel.vercel.app/zh/templates',
      'ar-SA': 'https://ai-empire-steel.vercel.app/ar/templates',
      'x-default': 'https://ai-empire-steel.vercel.app/templates',
    },
  },
}

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
