import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Lancer un SaaS sans code en 2026 : la roadmap réaliste (et ses limites)',
    description:
      'Peut-on lancer un SaaS sans écrire une ligne de code en 2026 ? Outils no-code, quand ça tient en production, et quand il faut passer au code avec Next.js.',
    path: '/blog/lancer-saas-sans-code',
    type: 'article',
    keywords: [
      'lancer SaaS sans code',
      'SaaS no-code',
      'créer SaaS sans coder',
      'outils no-code SaaS',
      'MVB SaaS',
    ],
    publishedTime: '2026-08-28',
    modifiedTime: '2026-08-28',
  })
}

const articleSchema = generateArticleSchema({
  title: 'Lancer un SaaS sans code en 2026 : la roadmap réaliste (et ses limites)',
  description:
    'Peut-on lancer un SaaS sans écrire une ligne de code en 2026 ? Outils no-code, quand ça tient en production, et quand il faut passer au code avec Next.js.',
  slug: 'lancer-saas-sans-code',
  datePublished: '2026-08-28',
  dateModified: '2026-08-28',
})

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Blog', path: '/blog' },
    { name: 'Lancer un SaaS sans code', path: '/blog/lancer-saas-sans-code' },
  ],
})

export default function BlogLancerSaasSansCode() {
  return (
    <article className="min-h-screen bg-[#0f0a2e] text-indigo-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Guide
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Calendar className="w-4 h-4" /> 28 août 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 10 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Lancer un SaaS sans code en 2026 : la roadmap réaliste (et ses limites)
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            « Lancer un SaaS sans code » est devenu un slogan. La vérité nuancée :
            oui, vous pouvez valider un produit sans coder en 2026. Non, le no-code
            ne remplace pas une vraie application dès que vous avez du volume. Voici
            la frontière.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 — Valider avec du no-code (semaine 1)</h2>
          <p>
            Pour tester une idée, assemblez : un éditeur visuel (Webflow, Framer) pour
            la landing, un outil de formulaire (Typeform) pour capturer les demandes,
            et un tableur ou Notion comme « faux backend ». Vous facturez via Stripe
            Checkout sans une ligne de serveur. Si des gens paient, l&apos;idée tient.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 — Automatiser (semaine 2-3)</h2>
          <p>
            Branchements via Make ou n8n : email de bienvenue, webhook Stripe → ajout
            au CRM, relance des abandons. C&apos;est là que le no-code brille — des
            centaines de micro-flux sans infrastructure. Notre guide sur{' '}
            <Link href="/blog/automatisation-api" className="text-indigo-300 underline">
              automatiser son activité avec des APIs
            </Link>{' '}
            détaille ces cas concrets.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Le mur du no-code</h2>
          <p>
            Trois signaux disent « passe au code » : (1) vos automatisations cassent
            dès qu&apos;une API change de format ; (2) le prix des outils no-code
            dépasse un salaire de dev ; (3) vous voulez une fonctionnalité que
            l&apos;assembleur refuse de faire. C&apos;est le moment de migrer vers un
            vrai SaaS.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 — Migrer vers Next.js sans repartir de zéro</h2>
          <p>
            Vous ne jetez pas votre produit : vous gardez la landing validée et le
            pricing testé, et vous recodez le cœur. Un{' '}
            <Link href="/templates" className="text-indigo-300 underline">
              template SaaS Next.js
            </Link>{' '}
            vous donne auth, billing et dashboard en heures plutôt qu&apos;en
            semaines. Pour la couche IA, plutôt que de câbler quatre providers,
            utilisez un SDK unique.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Le bon compromis 2026</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">0 → 1 client</strong> : 100 % no-code,
              zéro risque.
            </li>
            <li>
              <strong className="text-white">1 → 100 clients</strong> : no-code +
              automatisations, surveillez le coût.
            </li>
            <li>
              <strong className="text-white">100+ clients</strong> : SaaS codé sur
              template, IA en failover. C&apos;est le seuil où la maîtrise technique
              devient un avantage concurrentiel.
            </li>
          </ul>

          <p>
            Pour sauter l&apos;étape sans code directement vers un SaaS propre, notre
            guide{' '}
            <Link href="/blog/creer-saas-48h" className="text-indigo-300 underline">
              créer un SaaS en 48h
            </Link>{' '}
            reste la référence.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">De l&apos;idée au SaaS</h3>
            <p className="text-indigo-200/70 mb-4">
              Templates NeuraAPI + SDK IA : la stack pour passer du no-code à un vrai
              produit sans réécrire le socle.
            </p>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Explorer les templates →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Créer un SaaS complet en 48h avec Next.js et l&apos;IA
              </Link>
            </li>
            <li>
              <Link href="/blog/template-saas-nextjs-2026" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Template SaaS Next.js 2026 : lequel choisir
              </Link>
            </li>
            <li>
              <Link href="/blog/automatisation-api" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                5 cas d&apos;utilisation pour automatiser avec des APIs
              </Link>
            </li>
            <li>
              <a href="/blog/comparatif-outils-no-code-2026" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Comparatif outils No-Code 2026 : quel stack choisir
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
