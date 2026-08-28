'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { useI18n } from '@/i18n'
import NewsletterForm from '@/components/NewsletterForm'
import Breadcrumb from '@/components/Breadcrumb'

const articles = [
  {
    slug: 'rag-nextjs-groq',
    title: 'RAG avec Next.js et Groq : système de retrieval augmenté',
    titleEn: 'RAG with Next.js and Groq: retrieval-augmented generation',
    excerpt: 'Construire un système RAG complet : chunking, embeddings, vector store, retrieval et génération avec Groq.',
    excerptEn: 'Build a complete RAG pipeline: chunking, embeddings, vector store, retrieval and generation with Groq.',
    date: '29 Août 2026',
    readTime: '11 min',
    category: 'Tutoriel',
  },
  {
    slug: 'edge-runtime-ia',
    title: 'Edge Runtime + IA : latence quasi-nulle',
    excerpt: 'Servir une API IA depuis le Edge Runtime pour une latence sous la milliseconde.',
    date: '2026-08-27',
    readTime: '9 min',
    category: 'Guide',
    image: '/blog/edge-runtime.svg',
  },
  {
    slug: 'ia-rgpd-conformite-2026',
    title: 'IA et RGPD : conformité des apps IA en 2026',
    excerpt: 'Finalité, minimisation, droit à l’effacement, transparence des modèles.',
    date: '2026-08-28',
    readTime: '10 min',
    category: 'Guide',
    image: '/blog/ia-rgpd.svg',
  },
  {
    slug: 'api-ia-nextjs-production',
    title: 'Intégrer une API IA dans Next.js : patterns production',
    excerpt: 'Endpoint /api/chat, failover 4 providers, rate-limit IP+user, streaming.',
    date: '2026-08-28',
    readTime: '10 min',
    category: 'Tutoriel',
    image: '/blog/api-ia-nextjs.svg',
  },
  {
    slug: 'rag-tutoriel-francais',
    title: 'RAG en français : tutoriel 2026',
    excerpt: 'Construire un système RAG avec embedding, vector store et coûts réels.',
    date: '2026-08-27',
    readTime: '12 min',
    category: 'Tutoriel',
    image: '/blog/rag-fr.svg',
  },
  {
    slug: 'nextjs-15-server-actions-ia',
    title: 'Next.js 15 Server Actions + IA : guide pratique',
    excerpt: 'Intégrer une API IA en production avec les Server Actions : streaming, sécurité, failover.',
    date: '2026-08-27',
    readTime: '11 min',
    category: 'Tutoriel',
    image: '/blog/nextjs-server-actions.svg',
  },
  {
    slug: 'cout-reel-api-ia-2026',
    title: 'Coût réel des API IA en 2026 : comparatif OpenAI, Gemini, Groq',
    excerpt: 'Combien coûte vraiment une API IA en 2026 ? Comparatif honnête avec chiffres réels et stratégies d’optimisation.',
    date: '2026-08-27',
    readTime: '10 min',
    category: 'Analyse',
    image: '/blog/cout-api-ia.svg',
  },
  {
    slug: 'chatbot-ia-nextjs-groq',
    title: 'Créer un chatbot IA avec Next.js et Groq (2026)',
    titleEn: 'Build an AI chatbot with Next.js and Groq (2026)',
    excerpt: 'Guide complet pour créer un chatbot IA performant avec Next.js et Groq. Streaming temps réel, code complet, déploiement Vercel.',
    excerptEn: 'Complete guide to building a fast AI chatbot with Next.js and Groq. Real-time streaming, full code, Vercel deployment.',
    date: '24 Août 2026',
    readTime: '12 min',
    category: 'Tutoriel',
  },
  {
    slug: 'ai-agents-launch',
    title: "Lancement des Agents IA NeuraAPI : votre workforce autonome",
    titleEn: 'NeuraAPI AI Agents Launch: your autonomous workforce',
    excerpt: "Découvrez les Agents IA NeuraAPI : déployez une workforce autonome pour le support client, la recherche et l'automatisation métier.",
    excerptEn: 'Introducing NeuraAPI AI Agents: deploy an autonomous workforce for customer support, research and business automation.',
    date: '27 Juin 2026',
    readTime: '10 min',
    category: 'Produit',
  },
  {
    slug: 'ai-api-integration',
    title: "Comment intégrer une API IA dans votre application en 6 étapes",
    titleEn: 'AI API Integration Best Practices',
    excerpt: 'Guide complet pour intégrer une API IA dans votre application en 6 étapes.',
    excerptEn: 'Best practices for integrating AI APIs into your applications. Security, performance, and reliability.',
    date: '20 Juin 2026',
    readTime: '11 min',
    category: 'Tutoriel',
  },
  {
    slug: 'nextjs-saas-starter',
    title: 'Next.js SaaS Starter : Le guide complet pour lancer votre SaaS',
    titleEn: 'Next.js SaaS Starter Guide',
    excerpt: 'Le template Next.js idéal pour lancer votre SaaS rapidement.',
    excerptEn: 'Complete guide to building a SaaS starter with Next.js, authentication, billing, and AI.',
    date: '20 Juin 2026',
    readTime: '12 min',
    category: 'Templates',
  },
  {
    slug: 'stripe-billing-nextjs',
    title: 'Intégrer Stripe Billing dans votre SaaS Next.js',
    titleEn: 'Stripe Billing Integration',
    excerpt: 'Guide complet pour intégrer la facturation Stripe dans votre SaaS.',
    excerptEn: 'Complete guide to integrating Stripe billing with subscriptions, credits, and webhooks in your Next.js app.',
    date: '20 Juin 2026',
    readTime: '14 min',
    category: 'Tutoriel',
  },
  {
    slug: 'templates-premium-guide',
    title: 'Guide complet des templates Next.js premium',
    titleEn: 'Premium Templates Guide',
    excerpt: 'Guide complet pour choisir et utiliser les templates premium.',
    excerptEn: 'How to choose the right premium Next.js template for your SaaS. Comparison, criteria, and common mistakes.',
    date: '5 Mars 2026',
    readTime: '9 min',
    category: 'Templates',
  },
  {
    slug: 'creer-saas-48h',
    title: "Comment créer un SaaS complet en 48h avec Next.js et l'IA",
    titleEn: 'Build a SaaS in 48 Hours',
    excerpt: "Comment créer un SaaS complet en 48h avec Next.js et l'IA.",
    excerptEn: 'How to build and launch a complete SaaS in 48 hours with Next.js, Stripe, and AI APIs.',
    date: '10 Février 2026',
    readTime: '13 min',
    category: 'Tutoriel',
  },
  {
    slug: 'api-ia-nextjs',
    title: 'Intégrer une API IA dans Next.js en 3 étapes',
    titleEn: 'Build an AI API with Next.js',
    excerpt: 'Tutoriel complet pour intégrer une API IA dans votre projet Next.js.',
    excerptEn: 'Step-by-step guide to building a production-ready AI API with Next.js, TypeScript, and NeuraAPI.',
    date: '15 Janvier 2026',
    readTime: '10 min',
    category: 'Tutoriel',
  },
  {
    slug: 'ai-api-pour-saas',
    title: 'Comment intégrer l\'IA dans votre SaaS en 30 minutes',
    titleEn: 'Integrate AI into your SaaS in 30 minutes',
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
  {
    slug: 'template-saas-nextjs-2026',
    title: 'Template SaaS Next.js 2026 : lequel choisir pour démarrer',
    titleEn: 'Best Next.js SaaS Template 2026: how to choose',
    excerpt: 'Comment choisir un template SaaS Next.js en 2026 : critères, stack, auth, billing, API IA incluses, et pièges à éviter.',
    excerptEn: 'How to pick a Next.js SaaS template in 2026: stack, auth, billing, built-in AI, and traps to avoid.',
    date: '28 Août 2026',
    readTime: '9 min',
    category: 'Templates',
  },
  {
    slug: 'neuraapi-vs-concurrents',
    title: 'NeuraAPI vs concurrents 2026 : comparatif honnête des API IA',
    titleEn: 'NeuraAPI vs competitors 2026: an honest API comparison',
    excerpt: 'NeuraAPI vs OpenAI, Groq, Gemini, Anthropic : comparatif honnête des API IA en 2026 (prix, latence, failover, SDK).',
    excerptEn: 'NeuraAPI vs OpenAI, Groq, Gemini, Anthropic: an honest 2026 API comparison (price, latency, failover, SDK).',
    date: '28 Août 2026',
    readTime: '11 min',
    category: 'Comparatif',
  },
  {
    slug: 'lancer-saas-sans-code',
    title: 'Lancer un SaaS sans code en 2026 : la roadmap réaliste',
    titleEn: 'Launch a no-code SaaS in 2026: the realistic roadmap',
    excerpt: 'Peut-on lancer un SaaS sans coder en 2026 ? Outils no-code, quand ça tient en production, et quand passer au code avec Next.js.',
    excerptEn: 'Can you launch a SaaS without code in 2026? No-code tools, when it holds in production, and when to switch to Next.js.',
    date: '28 Août 2026',
    readTime: '10 min',
    category: 'Guide',
  },
]

export default function BlogContent() {
  const { t: rawT, locale } = useI18n(); const t = rawT as (key: string) => string
  const isEn = locale !== 'fr'

  const ui = isEn ? {
    badge: 'NeuraAPI Blog',
    h1: 'Articles & Guides',
    sub: 'Tutorials, comparisons and hands-on guides to build your projects with AI.',
    read: 'min read',
  } : {
    badge: 'Blog NeuraAPI',
    h1: 'Articles & Guides',
    sub: "Tutoriels, comparaisons et guides pratiques pour développer vos projets avec l'intelligence artificielle.",
    read: 'min de lecture',
  }

  const localized = articles.map(a => isEn && a.titleEn ? { ...a, title: a.titleEn, excerpt: a.excerptEn || a.excerpt } : a)

  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <BookOpen className="w-4 h-4" />
            {ui.badge}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {ui.h1}
          </h1>
          <p className="mt-6 text-lg text-indigo-200 max-w-2xl mx-auto">
            {ui.sub}
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {localized.map((article, i) => (
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
                  {isEn ? 'Read article' : "Lire l'article"}
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
