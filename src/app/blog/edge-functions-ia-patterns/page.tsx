import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Edge Functions pour l\'IA : patterns production 2026',
    description:
      'Déployer l\'inférence IA au edge : streaming token par token, cache prompts, failover edge→origin, auth légère. Patterns Vercel Edge / Cloudflare Workers testés en prod.',
    path: '/blog/edge-functions-ia-patterns',
    type: 'article',
    keywords: [
      'edge functions IA',
      'Vercel Edge Runtime IA',
      'Cloudflare Workers LLM',
      'streaming edge IA',
      'latence inference edge',
    ],
    publishedTime: '2026-08-29',
    modifiedTime: '2026-08-29',
  })
}

const articleSchema = generateArticleSchema({
  title: 'Edge Functions pour l\'IA : patterns production 2026',
  description:
    'Déployer l\'inférence IA au edge : streaming token par token, cache prompts, failover edge→origin, auth légère. Patterns Vercel Edge / Cloudflare Workers testés en prod.',
  slug: 'edge-functions-ia-patterns',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
})

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Blog', path: '/blog' },
    { name: 'Edge Functions IA patterns', path: '/blog/edge-functions-ia-patterns' },
  ],
})

export default function BlogEdgeFunctionsIaPatterns() {
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
              <Tag className="w-3 h-3" /> Edge
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Calendar className="w-4 h-4" /> 29 août 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 10 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Edge Functions pour l&apos;IA : patterns production 2026
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            L&apos;edge n&apos;est plus seulement pour le routing statique. En 2026, on y fait tourner
            de l&apos;inférence légère, du streaming token par token, et de l&apos;orchestration
            multi-provider. Voici les patterns qui tiennent la charge en production sur
            Vercel Edge Runtime et Cloudflare Workers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">1. Streaming token par token au edge</h2>
          <p>
            Au lieu d&apos;attendre la réponse complète du provider, le edge renvoie chaque token
            dès qu&apos;il arrive. L&apos;utilisateur voit la réponse se construire en temps réel —
            latence perçue divisée par 3-5x.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{`// Vercel Edge Runtime - Streaming response
export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()
  
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.GROQ_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'llama-3.1-70b-versatile', messages, stream: true })
  })
  
  // Renvoie le stream brut au client - pas de buffering
  return new Response(response.body, {
    headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' }
  })
}`}</code></pre>
          <p>
            Contrainte : le edge a un timeout CPU (10-50s selon plateforme). Pour les longues
            générations, déléguez au origin après le premier chunk (voir pattern hybride).
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">2. Cache de prompts système au edge (KV / Edge Config)</h2>
          <p>
            Les system prompts, few-shot examples, et instructions RAG sont identiques pour
            des milliers de requêtes. Mettez-les en cache au edge (Vercel Edge Config, Cloudflare KV,
            Deno KV) → 0 appel provider pour la partie statique.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Ce qui se cache</strong> : system prompt, few-shot fixes, template RAG, outils disponibles.</li>
            <li><strong>Ce qui ne se cache pas</strong> : historique utilisateur, contexte dynamique, secrets.</li>
            <li><strong>Gain</strong> : -200 à -2000 tokens/requête sur l&apos;entrée = économie directe + latence réduite.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">3. Failover edge → origin sans 500 visible</h2>
          <p>
            Le provider principal (ex. Groq) tombe. L&apos;edge détecte l&apos;erreur (timeout, 5xx, 429)
            et bascule vers l&apos;origin (Vercel Functions / Cloudflare Pages Functions) qui a
            accès aux providers de secours (OpenAI, Gemini, Anthropic) et aux secrets.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{`// Pattern failover edge → origin
export async function POST(req: Request) {
  try {
    // Tentative edge (provider rapide : Groq, Cerebras)
    return await streamFromProvider(req, 'groq')
  } catch (e) {
    if (e.code === 'TIMEOUT' || e.status >= 500 || e.status === 429) {
      // Redirection transparente vers origin function
      const originUrl = `${process.env.ORIGIN_URL}/api/ai/fallback`
      const fallback = await fetch(originUrl, { method: 'POST', body: req.body })
      return new Response(fallback.body, fallback)
    }
    throw e
  }
}`}</code></pre>
          <p>
            L&apos;utilisateur ne voit qu&apos;une latence légèrement plus longue, pas d&apos;erreur.
            L&apos;origin a plus de temps CPU, accès DB, et tous les providers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">4. Auth légère au edge : JWT validation sans DB</h2>
          <p>
            Validez le token JWT au edge (jose, jsonwebtoken) avec la clé publique en Edge Config.
            Pas de round-trip DB. Si valide, injectez `user_id`, `tier`, `quota_remaining` dans
            les headers vers l&apos;origin ou le provider.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clé publique JWKS en Edge Config (rotée automatiquement).</li>
            <li>Validation RS256/ES256 en < 1ms au edge.</li>
            <li>Rate limiting par tier au edge (token bucket en KV).</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">5. Limites honnêtes du edge pour l&apos;IA</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-2">Contrainte</th>
                <th className="text-left p-2">Vercel Edge</th>
                <th className="text-left p-2">Cloudflare Workers</th>
                <th className="text-left p-2">Contournement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-2">CPU time</td>
                <td className="p-2">50ms (hobby) / 300ms (pro)</td>
                <td className="p-2">10ms (free) / 50ms (paid)</td>
                <td className="p-2">Streaming = pas de CPU continu. Déléguer long à origin.</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Memory</td>
                <td className="p-2">128 MB</td>
                <td className="p-2">128 MB</td>
                <td className="p-2">Pas de modèle local. API externe uniquement.</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Body size</td>
                <td className="p-2">1 MB</td>
                <td className="p-2">100 KB (free) / 10 MB (paid)</td>
                <td className="p-2">Chunking pour gros contextes. RAG côté origin.</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">WebSocket</td>
                <td className="p-2">Non supporté</td>
                <td className="p-2">Supporté (Durable Objects)</td>
                <td className="p-2">SSE (EventSource) pour streaming universel.</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-white mt-12">Architecture recommandée : edge pour le chemin critique, origin pour le reste</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Edge</strong> : auth, rate limit, cache prompts, streaming provider rapide, failover déclencheur.</li>
            <li><strong>Origin</strong> : RAG retrieval, providers de secours, logique métier complexe, DB, logging complet.</li>
            <li><strong>Client</strong> : consomme le stream SSE, gère reconnexion transparente si failover.</li>
          </ol>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">SDK prêt à l'emploi</h3>
            <p className="text-indigo-200/70 mb-4">
              NeuraAPI Edge SDK : streaming natif, cache prompts, failover multi-provider,
              auth JWT edge, analytics temps réel. Déploiement Vercel/Cloudflare en 1 commande.
            </p>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Voir le SDK Edge →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/edge-runtime-ia" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Edge Runtime + IA : latence quasi-nulle
              </Link>
            </li>
            <li>
              <Link href="/blog/optimisation-couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Optimisation coûts LLM en production
              </Link>
            </li>
            <li>
              <Link href="/blog/monitoring-ia-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Monitoring IA en production
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}