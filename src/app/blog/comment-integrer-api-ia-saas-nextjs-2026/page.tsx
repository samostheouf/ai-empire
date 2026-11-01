import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const title = 'Comment intégrer une API IA dans un SaaS Next.js en 2026'
const description = 'Guide complet 2026 pour intégrer une API IA dans un SaaS Next.js : architecture, route handlers, streaming, cache, sécurité et déploiement Vercel.'
const slug = 'comment-integrer-api-ia-saas-nextjs-2026'
const publishedTime = '2026-02-10'
const modifiedTime = '2026-07-01'

export function generateMetadata() {
  return genMeta({
    title,
    description,
    path: `/blog/${slug}`,
    type: 'article',
    keywords: [
      'intégrer API IA SaaS Next.js',
      'API IA Next.js 2026',
      'intégration IA SaaS',
      'route handler Next.js IA',
      'streaming LLM Next.js',
      'Groq OpenAI Gemini Next.js',
      'architecture SaaS IA',
      'déploiement Vercel IA',
    ],
    publishedTime,
    modifiedTime,
  })
}

export default function Page() {
  const articleSchema = generateArticleSchema({
    title,
    description,
    slug,
    datePublished: publishedTime,
    dateModified: modifiedTime,
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: title, path: `/blog/${slug}` },
    ],
  })

  return (
    <div className="bg-indigo-950 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: title, href: `/blog/${slug}` }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Guide technique
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400">
              <Calendar className="w-4 h-4" /> 10 févr. 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400">
              <Clock className="w-4 h-4" /> 14 min
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Comment intégrer une API IA dans un SaaS Next.js en 2026 (guide pas-à-pas)
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/${slug}`} title={title} />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              En 2026, un SaaS sans IA perd des parts de marché : les utilisateurs attendent des assistants,
              de la génération de contenu et de l&apos;analyse automatique. Intégrer l&apos;IA &laquo; à la va-vite &raquo;
              (appels côté client, clés exposées, pas de cache) casse la sécurité et explose la facture. Ce guide
              présente une architecture de production pour brancher une API IA (NeuraAPI, Groq, OpenAI, Gemini) sur un
              SaaS Next.js 14/15 App Router, avec code réel, streaming, cache, rate limiting et déploiement Vercel.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">Pourquoi Next.js est le meilleur choix pour un SaaS IA en 2026</h2>
            <h3 className="text-xl font-semibold text-white mt-6">Server Components : zéro clé API exposée</h3>
            <p>Le secret reste côté serveur ; le navigateur ne voit jamais la clé. Contrairement à CRA/Vite qui exigeaient un backend séparé.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Route Handlers : votre backend intégré</h3>
            <p><code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">app/api/.../route.ts</code> = fonction serverless Vercel, support natif JSON streaming, Web Streams, Edge Runtime.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Streaming et Edge Runtime</h3>
            <p><code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">ReadableStream</code> pour afficher les tokens au fur et à mesure (effet ChatGPT). Edge Runtime = latence &lt; 50 ms pour le premier token.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Middleware pour l&apos;auth et le rate limiting</h3>
            <p>Vérification de session avant l&apos;appel IA, quota par utilisateur (ex. 100 crédits/mois), redirection si non authentifié.</p>

            <h2 className="text-2xl font-bold text-white mt-12">Architecture recommandée</h2>
            <h3 className="text-xl font-semibold text-white mt-6">Schéma de flux</h3>
            <p>Navigateur → Middleware (auth/quota) → Route Handler → SDK IA (NeuraAPI) → Provider (Groq/OpenAI/Gemini) → Stream retour → UI. Caching Redis/Upstash entre Route Handler et provider pour les prompts répétitifs.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Découpage des responsabilités</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li><code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code> : client singleton, config, retry.</li>
              <li><code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/quotas.ts</code> : vérification crédits.</li>
              <li><code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">app/api/ai/*/route.ts</code> : endpoints métier (generate, seo, code, chat, sentiment).</li>
              <li><code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">components/AiStream.tsx</code> : consommation du stream côté client.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6">Variables d&apos;environnement et secrets</h3>
            <p><code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">.env.local</code> : <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">NEURAPI_KEY</code>, <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">GROQ_API_KEY</code>, etc. Vercel : Environment Variables par environnement. Ne jamais préfixer <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">NEXT_PUBLIC_</code> pour les clés secrètes.</p>

            <h2 className="text-2xl font-bold text-white mt-12">Étape 1 : choisir son provider IA</h2>
            <h3 className="text-xl font-semibold text-white mt-6">NeuraAPI : la couche d&apos;abstraction recommandée</h3>
            <p>Un seul SDK, plusieurs providers sous le capot. Endpoints prêts : generate, seo, code, chat, sentiment. Facturation unifiée en crédits.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Quand utiliser Groq / OpenAI / Gemini directement</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Groq : latence ultra-faible, Llama/Mixtral.</li>
              <li>OpenAI : qualité GPT-4o, écosystème mature.</li>
              <li>Gemini : contexte 1M tokens, multimodal.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6">Stratégie multi-provider (fallback)</h3>
            <p>Si Groq timeout → fallback OpenAI. Wrapper avec retry + circuit breaker pour la résilience et le SLA.</p>

            <h2 className="text-2xl font-bold text-white mt-12">Étape 2 : installation et configuration</h2>
            <h3 className="text-xl font-semibold text-white mt-6">Installation du SDK</h3>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`npm install @neuraapi/sdk
# ou pour providers directs :
npm install openai @google/generative-ai groq-sdk`}</pre>
            </div>
            <h3 className="text-xl font-semibold text-white mt-6">Client singleton lib/neura.ts</h3>
            <p>Code complet TypeScript avec gestion d&apos;erreur centralisée, timeout et retries.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Validation des entrées avec Zod</h3>
            <p>Schéma Zod : prompt string min 10 max 4000, language enum fr ou en. Rejet 400 si invalide, ce qui économise des crédits.</p>

            <h2 className="text-2xl font-bold text-white mt-12">Étape 3 : créer un Route Handler IA</h2>
            <h3 className="text-xl font-semibold text-white mt-6">Endpoint /api/ai/generate</h3>
            <p>Code complet <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">route.ts</code> (POST, validation, appel, réponse JSON). Gestion d&apos;erreurs : 400, 401, 429, 500. Logs structurés sans PII.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Streaming avec ReadableStream</h3>
            <p>Transformation de la réponse provider en stream SSE. Côté client : fetch + reader.read() + mise à jour state. Composant React AiStream avec indicateur de frappe.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Endpoint spécialisé SEO (/api/ai/seo)</h3>
            <p>Cas d&apos;usage : génération de title/meta/keywords pour un CMS.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Endpoint chat contextuel (/api/ai/chat)</h3>
            <p>Historique de conversation, system prompt, limite de tokens et troncature.</p>

            <h2 className="text-2xl font-bold text-white mt-12">Sécurité et conformité</h2>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Ne jamais exposer la clé côté client (pas de NEXT_PUBLIC_).</li>
              <li>Rate limiting et quotas via Upstash Redis + @upstash/ratelimit (par IP et par utilisateur).</li>
              <li>Sanitisation et protection contre le prompt injection (system prompt séparé, validation de longueur).</li>
              <li>RGPD : pas de stockage des prompts sans consentement, anonymisation des logs, DPA avec le provider.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12">Performance : cache, coûts et observabilité</h2>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Cache intelligent : hash du prompt → clé cache, TTL différencié (SEO = 7j, chat = 0).</li>
              <li>Réduire la facture : choisir le bon modèle par tâche, maxTokens serré, temperature basse, batching.</li>
              <li>Monitoring : Vercel Analytics + logs, métriques latence p95, tokens/req, taux d&apos;erreur, coût/jour, alertes Slack.</li>
              <li>Coûts comparatifs : de 15€ (Groq/Llama) à 120€ (GPT-4o) pour 10 000 requêtes/mois.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12">Déploiement sur Vercel</h2>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Configuration vercel.json et Edge : runtime edge sur les routes IA, région proche des utilisateurs.</li>
              <li>Variables d&apos;environnement Vercel via CLI vercel env add, secrets pour les clés.</li>
              <li>Warmup et cold start : cron de warmup, keep-alive.</li>
              <li>Checklist pré-prod : tests, secrets, rate limit, monitoring, rollback.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12">Erreurs fréquentes et comment les éviter</h2>
            <ol className="list-decimal list-inside space-y-1 text-indigo-300">
              <li>Clé API côté client → fuite.</li>
              <li>Pas de validation → injection + coûts.</li>
              <li>Pas de streaming → UX lente.</li>
              <li>Pas de cache → facture x3.</li>
              <li>Pas de fallback → downtime si provider down.</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
            <p>
              Architecture, sécurité, performance et déploiement : les quatre piliers d&apos;un SaaS IA en production.
              Essayez NeuraAPI (100 crédits gratuits) et explorez les templates Next.js avec IA intégrée.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Quelle est la meilleure API IA pour un SaaS Next.js en 2026 ?</h3>
                <p>Ça dépend du cas d&apos;usage. NeuraAPI unifie Groq (vitesse), OpenAI (qualité) et Gemini (contexte long) derrière un seul SDK.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Faut-il utiliser l&apos;Edge Runtime pour les routes IA ?</h3>
                <p>Oui pour le streaming et la latence, à condition que le SDK soit compatible Edge.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Comment éviter les fuites de clé API ?</h3>
                <p>Route Handlers côté serveur, jamais NEXT_PUBLIC_, secrets Vercel.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Le streaming est-il nécessaire ?</h3>
                <p>Pour les réponses longues oui ; pour la classification non.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Quel coût prévoir pour 10 000 requêtes/mois ?</h3>
                <p>De 15€ (Groq/Llama) à 120€ (GPT-4o) selon le modèle et la longueur.</p>
              </div>
            </div>

            <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">Lancez votre SaaS IA plus vite</h3>
              <p className="mt-3 text-indigo-200">Essayez NeuraAPI avec 100 crédits gratuits et accédez aux templates Next.js avec IA intégrée.</p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Link href="/register" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all">
                  Commencer gratuitement
                </Link>
                <Link href="/docs" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                  Lire la documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
