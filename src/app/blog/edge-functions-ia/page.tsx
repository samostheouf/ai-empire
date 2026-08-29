import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Edge Functions pour l\'IA : latence, coûts, limites 2026',
    description:
      'Exécuter l\'inférence IA à l\'edge : avantages réels (latence, géolocalisation), contraintes (CPU, mémoire, streaming), et quand ça vaut le coup.',
    path: '/blog/edge-functions-ia',
    type: 'article',
    keywords: [
      'edge functions IA',
      'inférence edge',
      'latence IA',
      'Vercel edge AI',
      'Cloudflare Workers IA',
    ],
    publishedTime: '2026-08-29',
    modifiedTime: '2026-08-29',
  })
}

const articleSchema = generateArticleSchema({
  title: 'Edge Functions pour l\'IA : latence, coûts, limites 2026',
  description:
    'Exécuter l\'inférence IA à l\'edge : avantages réels (latence, géolocalisation), contraintes (CPU, mémoire, streaming), et quand ça vaut le coup.',
  slug: 'edge-functions-ia',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
})

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Blog', path: '/blog' },
    { name: 'Edge Functions pour l\'IA', path: '/blog/edge-functions-ia' },
  ],
})

export default function BlogEdgeFunctionsIa() {
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
              <Tag className="w-3 h-3" /> Technique
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Calendar className="w-4 h-4" /> 29 août 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 10 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Edge Functions pour l'IA : latence, coûts, limites 2026
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            L'edge computing promet une latence minimale en exécutant le code près de
            l'utilisateur. Pour l'IA, l'idée est séduisante : inférence locale, pas de
            round-trip vers un datacenter central. La réalité technique est plus nuancée.
            Voici ce qui marche, ce qui coince, et comment décider.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Ce que l'edge apporte vraiment</h2>
          <p>
            <strong>Latence réduite</strong> : pour un utilisateur en Europe, appeler un
            modèle hébergé aux États-Unis ajoute 80-150 ms de round-trip réseau. L'edge
            ramène ça à 10-30 ms. Sur une chaîne de 3-4 appels IA (classification →
            extraction → génération), le gain cumulé est perceptible.
          </p>
          <p>
            <strong>Géolocalisation et conformité</strong> : certaines données ne doivent
            pas quitter une juridiction (RGPD, données de santé, secrets industriels).
            L'edge permet de router l'inférence vers une région spécifique sans changer
            l'architecture applicative.
          </p>
          <p>
            <strong>Démarrage à froid (cold start)</strong> : les fonctions edge sont
            conçues pour démarrer en quelques millisecondes. Pour des pics de trafic
            imprévisibles, cela évite la file d'attente d'un serveur central.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Les contraintes dures</h2>
          <p>
            <strong>CPU et mémoire limités</strong> : pas de GPU à l'edge (sauf offres
            très récentes et géographiquement restreintes). L'inférence tourne sur CPU.
            Un modèle de 7B paramètres quantifié (GGUF q4) prend 4-5 Go de RAM et
            plusieurs secondes par token sur CPU. Inutilisable pour de la génération
            temps réel.
          </p>
          <p>
            <strong>Taille du bundle</strong> : Vercel Edge limite à 1-2 Mo (selon
            configuration), Cloudflare Workers à 1-10 Mo. Un tokenizer + poids de
            modèle même petit ne rentrent pas. Il faut déléguer l'inférence à un
            service externe (API) depuis l'edge — ce qui ramène le problème de latence.
          </p>
          <p>
            <strong>Streaming et timeouts</strong> : les fonctions edge ont des limites
            de durée d'exécution (10-30 s typiquement). Le streaming de tokens longs
            peut couper la réponse. Il faut gérer la reprise ou accepter la troncature.
          </p>
          <p>
            <strong>Pas de système de fichiers persistant</strong> : pas de cache local
            de modèles, pas d'écriture de logs volumineux. Tout état externe doit passer
            par un service (KV, Redis, base de données).
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Architectures qui marchent à l'edge</h2>
          <p>
            <strong>Routing et pré-traitement</strong> : l'edge function classifie la
            requête, valide l'authentification, rate-limite, choisit le provider optimal
            (Groq pour vitesse, Gemini pour contexte long), puis forward vers l'API
            d'inférence. L'edge ne fait pas l'inférence, il l'orchestre.
          </p>
          <p>
            <strong>Embeddings légers</strong> : certains modèles d'embedding (ex.
            BGE-small, all-MiniLM-L6-v2) sont assez compacts pour tourner sur CPU edge
            en < 100 ms. Utile pour du RAG où la récupération se fait à l'edge, puis
            la génération centrale.
          </p>
          <p>
            <strong>Fonctions déterministes</strong> : extraction d'entités, classification
            d'intention, détection de PII, modération de contenu — tâches courtes,
            modèle petit, latence critique. Ces cas passent à l'edge.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Quand rester sur du serverless classique (Node.js)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Génération de texte longue (articles, code, résumés > 500 tokens)</li>
            <li>Modèles > 3B paramètres non quantifiés</li>
            <li>Besoin de bibliothèques lourdes (PyTorch, transformers complets)</li>
            <li>Workflow multi-étapes avec état partagé</li>
            <li>Budget prévisible : l'edge CPU est souvent plus cher au token que le GPU centralisé</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Le bon compromis</h3>
            <p className="text-indigo-200/70 mb-4">
              NeuraAPI route automatiquement : edge pour le routing/pré-traitement,
              GPU centralisé pour l'inférence lourde. Une seule clé, latence optimisée.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Tester le routing intelligent →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/automatisation-ia-saas" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Automatisation IA pour SaaS
              </Link>
            </li>
            <li>
              <Link href="/blog/couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Coûts réels des LLM en production
              </Link>
            </li>
            <li>
              <Link href="/blog/automatisation-api" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                5 cas d'utilisation pour automatiser avec des APIs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}