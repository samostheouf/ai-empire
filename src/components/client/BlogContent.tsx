'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { useI18n } from '@/i18n'
import NewsletterForm from '@/components/NewsletterForm'
import Breadcrumb from '@/components/Breadcrumb'

const articles = [
  {
    slug: 'ai-api-pour-saas',
    title: 'Comment intégrer l\'IA dans votre SaaS en 30 minutes',
    excerpt: 'Tutoriel concret : intégrez une API IA dans votre SaaS Next.js en 30 minutes. Code copiable à chaque étape, bonnes pratiques, déploiement.',
    date: '15 Juin 2024',
    readTime: '12 min',
    category: 'Tutoriel',
  },
  {
    slug: 'comparaison-providers-ia-gratuits',
    title: 'Comparaison des providers IA gratuits : Groq vs Gemini vs OpenAI',
    excerpt: 'Comparaison honnête et détaillée des providers IA gratuits pour développeurs. Performances, prix, limites et cas d\'usage réels.',
    date: '20 Juin 2024',
    readTime: '15 min',
    category: 'Comparaison',
  },
  {
    slug: 'templates-nextjs-premium',
    title: '5 templates Next.js pour lancer votre startup rapidement',
    excerpt: 'Découvrez 5 templates Next.js professionnels avec aperçu du code, stack technique et cas d\'usage concrets.',
    date: '10 Juin 2024',
    readTime: '10 min',
    category: 'Templates',
  },
  {
    slug: 'automatisation-api',
    title: '5 cas d\'utilisation pour automatiser votre activité avec des APIs',
    excerpt: 'Automatisez vos processus métier grâce aux APIs. De la génération de contenu à l\'analyse de données, voici 5 cas d\'utilisation concrets.',
    date: '5 Juin 2024',
    readTime: '10 min',
    category: 'Automatisation',
  },
  {
    slug: 'seo-ia-tools',
    title: 'Optimiser votre SEO avec l\'intelligence artificielle',
    excerpt: 'Comment utiliser les outils IA pour améliorer votre référencement naturel. Stratégies, techniques et meilleurs outils du marché.',
    date: '1 Juin 2024',
    readTime: '9 min',
    category: 'SEO',
  },
]

export default function BlogContent() {
  const { t: rawT } = useI18n(); const t = rawT as (key: string) => string

  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <BookOpen className="w-4 h-4" />
            Blog NeuraAPI
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Articles & Guides
          </h1>
          <p className="mt-6 text-lg text-indigo-200 max-w-2xl mx-auto">
            Tutoriels, comparaisons et guides pratiques pour développer vos projets avec l&apos;intelligence artificielle.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className={`group rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 hover:bg-indigo-900/50 transition-all ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-indigo-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
                <h2 className={`font-semibold text-white group-hover:text-indigo-300 transition-colors ${
                  i === 0 ? 'text-2xl' : 'text-xl'
                }`}>
                  {article.title}
                </h2>
                <p className="mt-3 text-indigo-300 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <NewsletterForm />
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <h2 className="text-3xl font-bold text-white">
            Prêt à propulser vos projets ?
          </h2>
          <p className="mt-4 text-indigo-200">
            Utilisez nos APIs IA et templates premium pour accélérer votre développement.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/templates"
              className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all"
            >
              Explorer les templates
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              Lire la documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
