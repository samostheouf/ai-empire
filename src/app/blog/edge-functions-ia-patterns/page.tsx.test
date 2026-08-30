import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Agents IA autonomes : NeuraAPI lance votre workforce IA (2026)',
    description: "NeuraAPI lance ses agents IA autonomes : support client, prospection, opérations. Déployez un agent connecté à vos outils en quelques lignes de code.",
    path: '/blog/ai-agents-launch',
    type: 'article',
    keywords: ['ai agents', 'autonomous workforce', 'ai automation', 'neuraapi agents', 'business automation', 'ai agents launch', 'autonomous ai', 'ai workforce'],
    publishedTime: '2026-06-27',
    modifiedTime: '2026-06-27',
  })
}

export default function AiAgentsLaunchPage() {
  const articleSchema = generateArticleSchema({
    title: 'Agents IA autonomes : NeuraAPI lance votre workforce IA',
    description: "NeuraAPI lance ses agents IA autonomes : support client, prospection, opérations. Déployez un agent connecté à vos outils en quelques lignes de code.",
    slug: 'ai-agents-launch',
    datePublished: '2026-06-27',
    dateModified: '2026-06-27',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Lancement des Agents IA', path: '/blog/ai-agents-launch' },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Lancement des Agents IA', href: '/blog/ai-agents-launch' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Annonce produit
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 27 juin 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Agents IA autonomes : NeuraAPI lance votre workforce IA
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/ai-agents-launch`} title="NeuraAPI lance ses Agents IA autonomes" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Aujourd&apos;hui, NeuraAPI franchit une étape majeure : les Agents IA autonomes arrivent sur toutes les
            offres. Un agent ne se contente pas de répondre à un prompt — il exécute des tâches complètes,
            utilise vos outils (email, Slack, CRM), consulte votre base de connaissances et escalade vers un
            humain uniquement quand c&apos;est nécessaire.
          </p>

          <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
            <h3 className="text-white font-semibold mb-2">Ce que les agents changent concrètement</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
              <li>Support client 24/7 qui résout les tickets sans intervention humaine</li>
              <li>Prospection automatisée avec qualification des leads</li>
              <li>Opérations : résumés de réunions, suivi de commandes, rapports</li>
              <li>Connexion native à vos outils existants (email, Slack, CRM)</li>
              <li>Escalade intelligente vers un humain selon vos seuils</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Qu&apos;est-ce qu&apos;un agent IA autonome ?</h2>
          <p>
            Un chatbot classique répond à une question puis s&apos;arrête. Un agent IA autonome, lui, poursuit un
            objectif : il planifie des étapes, appelle des outils externes, vérifie ses propres résultats et
            itère jusqu&apos;à accomplir la tâche.
          </p>
          <p>
            Concrètement, un agent de support peut lire un ticket, chercher la réponse dans votre FAQ,
            consulter la commande du client dans votre CRM, rédiger une réponse personnalisée et la envoyer —
            le tout en moins de trente secondes, sans qu&apos;aucun membre de votre équipe n&apos;ait ouvert l&apos;outil.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Déployer votre premier agent en 5 minutes</h2>
          <p>
            L&apos;API Agents fait partie du SDK NeuraAPI. Si vous savez appeler une API REST, vous savez déployer un agent.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

// Deploy a customer support agent
const agent = await ai.agents.create({
  name: 'Customer Support Agent',
  type: 'customer-support',
  tools: ['email', 'slack', 'crm'],
  knowledge: './docs/faq.md',
  rules: {
    escalationThreshold: 0.7,
    maxResponseTime: '30s',
    tone: 'professional',
  },
})

// Agent starts working immediately
await agent.deploy()`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Les capacités clés</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Mémoire longue durée</h3>
              <p className="text-sm text-indigo-300">Chaque agent se souvient des interactions passées avec chaque client pour des réponses toujours contextuelles.</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Intégrations natives</h3>
              <p className="text-sm text-indigo-300">Email, Slack, Notion, HubSpot et plus de vingt autres outils connectables sans code supplémentaire.</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Garde-fous configurables</h3>
              <p className="text-sm text-indigo-300">Seuils d&apos;escalade, ton de voix, sujets interdits : vous gardez le contrôle total sur ce que l&apos;agent peut faire.</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Analytics temps réel</h3>
              <p className="text-sm text-indigo-300">Taux de résolution, temps de traitement, motifs d&apos;escalade : un tableau de bord mesure l&apos;impact de chaque agent.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Tarifs</h2>
          <p>
            Les agents sont inclus dans tous les plans NeuraAPI, avec un nombre d&apos;exécutions qui évolue avec votre usage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5 text-center">
              <h3 className="text-white font-semibold">Starter</h3>
              <p className="text-2xl font-bold text-indigo-400 mt-2">0 €</p>
              <p className="text-sm text-indigo-300 mt-1">100 exécutions/mois pour tester</p>
            </div>
            <div className="rounded-xl border border-indigo-600 bg-indigo-900/40 p-5 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">Populaire</span>
              <h3 className="text-white font-semibold">Pro</h3>
              <p className="text-2xl font-bold text-indigo-400 mt-2">29 €/mois</p>
              <p className="text-sm text-indigo-300 mt-1">5 000 exécutions + toutes les intégrations</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5 text-center">
              <h3 className="text-white font-semibold">Business</h3>
              <p className="text-2xl font-bold text-indigo-400 mt-2">99 €/mois</p>
              <p className="text-sm text-indigo-300 mt-1">Exécutions illimitées + support dédié</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Premiers résultats mesurés</h2>
          <p>
            Les équipes beta qui ont déjà déployé des agents constatent des gains immédiats :
          </p>
          <ul className="list-disc list-inside space-y-2 text-indigo-300">
            <li><strong className="text-white">-68 %</strong> de tickets support traités manuellement</li>
            <li><strong className="text-white">x4</strong> sur le volume de leads qualifiés par semaine</li>
            <li><strong className="text-white">&lt; 30 s</strong> de temps de résolution moyen par demande</li>
            <li><strong className="text-white">92 %</strong> de satisfaction client sur les interactions agent</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Les agents IA autonomes ne remplacent pas vos équipes — ils leur rendent leur temps. En déléguant
            les tâches répétitives à des agents connectés à vos outils, chacun se concentre sur le travail à
            vraie valeur ajoutée.
          </p>
          <p>
            La fonctionnalité est disponible dès aujourd&apos;hui sur toutes les offres. Cinq minutes suffisent pour
            déployer votre premier agent.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Déployez votre premier agent IA aujourd&apos;hui
          </h3>
          <p className="mt-3 text-indigo-200">
            Support client, prospection, opérations : créez un agent connecté à vos outils en quelques minutes.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/agents"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
            >
              Découvrir les Agents IA
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              Lire la documentation
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/ai-api-integration" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Intégrer une API IA dans Next.js en 3 étapes
              </Link>
            </li>
            <li>
              <Link href="/blog/nextjs-saas-starter" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Créer un SaaS Next.js prêt pour la production
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
