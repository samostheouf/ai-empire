import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Edge Functions pour l\'IA : patterns production 2026',
    description:
      'Deployer l\'inference IA au edge : streaming token par token, cache prompts, failover edge vers origin, auth legere. Patterns Vercel Edge / Cloudflare Workers testes en prod.',
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
    'Deployer l\'inference IA au edge : streaming token par token, cache prompts, failover edge vers origin, auth legere. Patterns Vercel Edge / Cloudflare Workers testes en prod.',
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
              <Calendar className="w-4 h-4" /> 29 aout 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 10 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Edge Functions pour l'IA : patterns production 2026
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            Deployer l'inference IA au edge : streaming token par token, cache prompts, failover edge vers origin, auth legere.
            Patterns Vercel Edge / Cloudflare Workers testes en prod.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">1. Pourquoi l'edge pour l'IA ?</h2>
          <p>
            Latence, cout, resilience. L'edge rapproche le calcul de l'utilisateur (pop Vercel/Cloudflare partout).
            Pour l'IA : streaming token-par-token percu instantane, cache de prompts repetitifs, failover vers origin si edge rate-limited.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Latence percue</strong> : premier token < 100ms vs 500-1000ms origin (Europe vers US).</li>
            <li><strong>Cout bande passante</strong> : reponses courtes (cache hit) = 0 tokens factures provider.</li>
            <li><strong>Resilience</strong> : edge = plusieurs regions. Si une region down, traffic route ailleurs.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">2. Streaming token par token au edge</h2>
          <p>
            Le secret : Response streaming + ReadableStream. L'edge function ne bufferise pas, elle pipe directement.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{`// Edge function streaming (Vercel Edge Runtime)
export const config = { runtime: 'edge' }

export default async function handler(req: Request) {
  const { prompt } = await req.json()
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${process.env.OPENAI_API_KEY}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      stream: true,  // CRITICAL
    }),
  })

  // Pipe stream directly to client - no buffering
  return new Response(response.body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}`}</code></pre>

          <h2 className="text-2xl font-bold text-white mt-12">3. Cache prompts au edge (KV / Edge Config)</h2>
          <p>
            Prompts identiques -> meme reponse. Cache au edge = 0 tokens provider, latence ~5ms.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{// Edge Config / KV cache pattern
import { getEdgeConfig } from '@vercel/edge-config'

export default async function handler(req: Request) {
  const { prompt } = await req.json()
  const cacheKey = \`prompt:\${hash(prompt)}\`
  
  // Check edge cache first
  const cached = await getEdgeConfig(cacheKey)
  if (cached) {
    return new Response(JSON.stringify(cached), {
      headers: { 'Content-Type': 'application/json', 'X-Cache': 'HIT' }
    })
  }
  
  // Miss -> call provider
  const completion = await callProvider(prompt)
  
  // Store in edge cache (TTL 24h)
  await setEdgeConfig(cacheKey, completion, { ttl: 86400 })
  
  return Response.json(completion, { headers: { 'X-Cache': 'MISS' } })
}`}</code></pre>

          <h2 className="text-2xl font-bold text-white mt-12">4. Failover edge vers origin</h2>
          <p>
            Edge rate-limited ou modele indisponible -> fallback transparent vers origin (serverless function full).
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{// Failover pattern
export const config = { runtime: 'edge' }

export default async function handler(req: Request) {
  try {
    return await tryEdgeInference(req)
  } catch (e) {
    if (e.name === 'RateLimitError' || e.name === 'ModelUnavailable') {
      // Forward to origin (full Node.js runtime)
      const originUrl = \`\${process.env.NEXT_PUBLIC_APP_URL}/api/ai/origin\`
      const response = await fetch(originUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: await req.text(),
      })
      return new Response(response.body, response)
    }
    throw e
  }
}`}</code></pre>

          <h2 className="text-2xl font-bold text-white mt-12">5. Auth legere au edge (JWT verification)</h2>
          <p>
            Verifier JWT sans round-trip DB. Edge runtime a Web Crypto API native.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{// JWT verification at edge (no DB call)
import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function verifyEdgeToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret, {
      issuer: 'ai-empire',
      audience: 'edge-api',
    })
    return { valid: true, userId: payload.sub, tier: payload.tier }
  } catch {
    return { valid: false }
  }
}

// Usage in edge handler
export default async function handler(req: Request) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  const { valid, userId, tier } = await verifyEdgeToken(auth || '')
  
  if (!valid) return new Response('Unauthorized', { status: 401 })
  // ... proceed with userId, tier
}`}</code></pre>

          <h2 className="text-2xl font-bold text-white mt-12">6. Patterns Vercel Edge vs Cloudflare Workers</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-2">Critere</th>
                <th className="text-left p-2">Vercel Edge</th>
                <th className="text-left p-2">Cloudflare Workers</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-2">Runtime</td>
                <td className="p-2">V8 isolates (subset Node)</td>
                <td className="p-2">V8 isolates (full Workers API)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">CPU limit</td>
                <td className="p-2">50ms (pro: 300ms)</td>
                <td className="p-2">10ms (payant: 30s)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Streaming</td>
                <td className="p-2">Native Response.body</td>
                <td className="p-2">ReadableStream natif</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">KV/Config</td>
                <td className="p-2">Edge Config (free tier)</td>
                <td className="p-2">Workers KV (payant)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Deploy</td>
                <td className="p-2">Git push (Next.js)</td>
                <td className="p-2">Wrangler CLI / Git</td>
              </tr>
            </tbody>
          </table>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Edge IA cle en main</h3>
            <p className="text-indigo-200/70 mb-4">
              NeuraAPI : edge functions pre-configurees (streaming, cache, failover, auth),
              deployables en 1 clic sur Vercel/Cloudflare. Zero config infrastructure.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Voir le dashboard ->
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles lies</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/optimisation-couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Optimisation couts LLM en production
              </Link>
            </li>
            <li>
              <Link href="/blog/rag-vs-finetuning-architecture-decision" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                RAG vs Fine-tuning : decision architecture
              </Link>
            </li>
            <li>
              <Link href="/blog/monitoring-ia-avance-drift-eval" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Monitoring IA avance : detection derive
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
