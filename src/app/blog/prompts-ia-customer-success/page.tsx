import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Prompts IA pour Customer Success : 12 templates prêts à l\'emploi',
    description:
      '12 prompts IA pour le Customer Success : tickets, onboarding, relance, analyse de sentiment et QBR. Structure de prompt réutilisable, sans chiffre fabriqué.',
    path: '/blog/prompts-ia-customer-success',
    type: 'article',
    keywords: [
      'prompts IA customer success',
      'prompts support client IA',
      'LLM customer success',
      'automatiser support IA',
      'templates prompts CS',
    ],
    publishedTime: '2026-08-29',
    modifiedTime: '2026-08-29',
  })
}

const articleSchema = generateArticleSchema({
  title: 'Prompts IA pour Customer Success : 12 templates prêts à l\'emploi',
  description:
    '12 prompts IA pour le Customer Success : tickets, onboarding, relance, analyse de sentiment et QBR.',
  slug: 'prompts-ia-customer-success',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
})

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Blog', path: '/blog' },
    { name: 'Prompts IA pour Customer Success', path: '/blog/prompts-ia-customer-success' },
  ],
})

export default function BlogPromptsIaCustomerSuccess() {
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
              <Tag className="w-3 h-3" /> Templates
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Calendar className="w-4 h-4" /> 29 août 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 9 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Prompts IA pour Customer Success : 12 templates prêts à l&apos;emploi
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            Le Customer Success gagne du temps quand l&apos;IA traite le
            répétitif et laisse l&apos;humain sur le relationnel. Ces 12 prompts
            partagent une même structure — contexte, rôle, contrainte, format —
            que tu adaptes à ton outil (chat, routeur d&apos;API ou RAG sur ta
            base de connaissances).
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">La structure de tout prompt CS</h2>
          <p>
            Avant les exemples : un bon prompt CS précise toujours (1) le rôle
            (« tu es un CS senior »), (2) la source (« d&apos;après notre base
            interne »), (3) la limite (« si l&apos;info manque, dis-le »), (4) le
            format. C&apos;est cette dernière règle qui évite les hallucinations
            sur une promesse de fonctionnalité que tu ne tiens pas.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">1. Triage de ticket</h2>
          <p>
            « Tu es un agent CS. Lis ce ticket et renvoie : catégorie (bug /
            facturation / onboarding / feature request), priorité, et un résumé
            en une phrase. Si une info est manquante, signale-la. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">2. Réponse à partir de la base</h2>
          <p>
            « Réponds au client en t&apos;appuyant uniquement sur les articles
            fournis. Cite la source. Si la réponse n&apos;y est pas, propose de
            transmettre à un humain. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">3. Reformulation empathique</h2>
          <p>
            « Réécris ce message technique en langage client, ton calme et
            rassurant, sans jargon. Conserve le sens exact. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">4. Détection de sentiment</h2>
          <p>
            « Classe le ton de ce message (positif / neutre / frustré / en
            colère) et explique en une ligne le signal clé. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">5. Résumé de thread</h2>
          <p>
            « Résume cet échange en 3 points : problème, actions faites, prochaine
            étape attendue par le client. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">6. Email de relance d&apos;onboarding</h2>
          <p>
            « Écris un email de relance bienveillant pour un utilisateur
            inscrit il y a 7 jours sans avoir lancé sa première tâche. Une CTA,
            pas de pression. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">7. Préparation de QBR</h2>
          <p>
            « À partir de l&apos;historique d&apos;usage fourni, produis 5 points
            de discussion pour un QBR : succès, risque de churn, opportunité
            d&apos;adoption. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">8. FAQ dynamique</h2>
          <p>
            « À partir de ces questions récurrentes, rédige une entrée FAQ
            canonnique, ton produit, format question + réponse courte. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">9. Détection de churn</h2>
          <p>
            « Lis ces signaux d&apos;usage (baisse de connexion, non-renouvellement
            proche) et liste les 3 actions CS prioritaires. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">10. Brief de nouveauté</h2>
          <p>
            « Rédige un message d&apos;annonce de fonctionnalité pour des clients
            existants : bénéfice d&apos;abord, détail ensuite, une seule CTA. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">11. Traduction ton-product</h2>
          <p>
            « Traduis ce message dans la langue cible en gardant le ton CS
            (pas de traduction mot à mot) et les noms de produit inchangés. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">12. Post-mortem client</h2>
          <p>
            « À partir de l&apos;historique, propose une retrospective : qu&apos;est-ce
            qui a bien fonctionné, qu&apos;est-ce qui a coûté du temps, une
            amélioration process. »
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Brancher tout ça en production</h2>
          <p>
            Ces prompts prennent vie quand ils sont appelés par une API avec
            failover, pas copiés-collés à la main. Notre guide sur{' '}
            <Link href="/blog/automatiser-saas-ia" className="text-indigo-300 underline">
              automatiser son SaaS avec l&apos;IA
            </Link>{' '}
            montre comment les orchestrer. Pour le support multilingue, un{' '}
            <Link href="/templates" className="text-indigo-300 underline">
              template SaaS Next.js
            </Link>{' '}
            avec SDK IA prêt t&apos;évite de construire le pipeline from scratch.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Du prompt à la production</h3>
            <p className="text-indigo-200/70 mb-4">
              Templates NeuraAPI + SDK IA : route tes prompts CS avec failover et
              garde le service debout.
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
              <Link href="/blog/automatiser-saas-ia" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Automatiser son SaaS avec l&apos;IA : les 6 leviers
              </Link>
            </li>
            <li>
              <Link href="/blog/rag-tutoriel-francais" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                RAG en français : tutoriel 2026
              </Link>
            </li>
            <li>
              <Link href="/blog/automatisation-api" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                5 cas d&apos;utilisation pour automatiser avec des APIs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
