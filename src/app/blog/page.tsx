import type { Metadata } from 'next'
import BlogContent from '@/components/client/BlogContent'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Blog — Tutoriels & Guides API IA',
  description: 'Tutoriels, comparaisons et guides pratiques pour intégrer l\'intelligence artificielle dans vos projets. API IA, Next.js, Stripe, Groq, OpenAI.',
  path: '/blog',
  keywords: ['blog ia', 'tutoriel api ia', 'guide next.js', 'comparaison ia', 'développement web ia'],
})

export default function BlogPage() {
  return <BlogContent />
}
