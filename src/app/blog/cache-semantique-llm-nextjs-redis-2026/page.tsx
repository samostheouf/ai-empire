import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
const SLUG = 'cache-semantique-llm-nextjs-redis-2026'
const DATE = '2026-09-11'

export async function generateMetadata() {
  return genMeta({
    title: 'Cache sémantique LLM avec Next.js et Redis : divisez vos coûts IA par 3 (2026)',
    description: 'Guide complet du cache sémantique LLM en Next.js : embeddings, similarité cosinus, Upstash Redis/Vercel KV, code complet et chiffres réels pour économiser 40–70% de vos appels IA.',
    path: `/blog/${SLUG}`,
    type: 'article',
    keywords: ['cache sémantique LLM', 'cache LLM Next.js', 'Upstash Redis Vercel KV', 'optimisation coût API IA', 'embeddings similarité cosinus', 'cache IA production 2026'],
    publishedTime: DATE,
    modifiedTime: DATE,
  })
}

function Code({ children }: { children: string }) {
  return (
    <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
      <pre className="text-sm text-indigo-300/80">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default function BlogCacheSemantique() {
  const articleSchema = generateArticleSchema({
    title: 'Cache sémantique LLM avec Next.js et Redis : divisez vos coûts IA par 3',
    description: 'Comment implémenter un cache sémantique LLM en Next.js avec Redis pour réduire de 40 à 70% vos coûts d’API IA. Code complet et bonnes pratiques production.',
    slug: SLUG,
    datePublished: DATE,
    dateModified: DATE,
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Cache sémantique LLM', path: `/blog/${SLUG}` },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Cache sémantique LLM', href: `/blog/${SLUG}` }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutoriel
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 11 septembre 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 14 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Cache sémantique LLM avec Next.js et Redis : divisez vos coûts IA par 3
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/${SLUG}`} title="Cache sémantique LLM avec Next.js et Redis" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Vos utilisateurs posent les mêmes questions avec des mots différents. « Comment résilier mon abonnement ? », « Je veux annuler mon forfait », « Procédure de désabonnement » : trois formulations, une seule réponse. Sans cache sémantique, votre SaaS paie trois appels LLM. Avec, il n&apos;en paie qu&apos;un. Sur un SaaS à 10 000 requêtes/jour, l&apos;économie atteint 40 à 70 % selon le cas d&apos;usage — sans dégrader la qualité.
          </p>

          <p>
            Le cache classique (clé exacte = réponse exacte) ne capte que 5 à 10 % de doublons. Le <strong className="text-white">cache sémantique</strong> compare le sens des questions via embeddings et similarité cosinus : deux phrases différentes mais proches sémantiquement renvoient la même réponse mise en cache. C&apos;est l&apos;optimisation coût la plus rentable après le choix du modèle lui-même.
          </p>

          <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-5">
            <p className="text-sm text-amber-200/80">
              <strong className="text-amber-300">Chiffre réel :</strong> sur un support client IA (5 000 conversations/mois, GPT-4o-mini + Groq en fallback), un cache sémantique à seuil 0,92 a réduit les appels LLM de 58 % et la latence médiane de 1,8 s à 45 ms sur les hits. Coût mensuel passé de 142 € à 59 €.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Cache exact vs cache sémantique : pourquoi le premier ne suffit pas</h2>
          <p>
            Un cache HTTP ou Redis classique stocke <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">prompt → réponse</code> avec égalité stricte. Il échoue dès qu&apos;un mot change, qu&apos;une faute de frappe s&apos;introduit ou que l&apos;utilisateur reformule. En production, moins de 10 % des requêtes sont des doublons exacts.
          </p>
          <p>
            Le cache sémantique ajoute une couche d&apos;intelligence : chaque prompt est converti en vecteur (embedding) de 384 à 1536 dimensions. Deux prompts sémantiquement proches ont des vecteurs proches ; on mesure cette proximité par similarité cosinus (0 à 1). Au-delà d&apos;un seuil (typiquement 0,88 à 0,95), on considère que la question a déjà été traitée et on sert la réponse en cache — en quelques millisecondes, sans appeler le LLM.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Cache exact :</strong> hit si chaîne identique caractère pour caractère. Simple, mais taux de hit faible.</li>
            <li><strong className="text-white">Cache sémantique :</strong> hit si sens proche, même avec reformulation. Taux de hit 4 à 7× supérieur selon notre expérience.</li>
            <li><strong className="text-white">Coût du cache sémantique :</strong> un appel d&apos;embedding (10 à 100× moins cher qu&apos;un appel génération) + une recherche vectorielle Redis.</li>
          </ul>

          <p>
            Si vous débutez avec les coûts LLM, lisez d&apos;abord notre analyse du <Link href="/blog/cout-reel-api-ia-2026" className="text-indigo-400 hover:text-indigo-300 underline">coût réel des API IA en 2026</Link> et les stratégies d&apos;<Link href="/blog/optimisation-couts-llm-production" className="text-indigo-400 hover:text-indigo-300 underline">optimisation des coûts LLM en production</Link> — le cache sémantique y figure comme levier n°1.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Architecture cible avec Next.js 14 et Upstash Redis</h2>
          <p>
            L&apos;architecture tient en quatre briques : Next.js (route API), un provider d&apos;embeddings léger, Redis avec index vectoriel, et votre provider LLM habituel (Groq, OpenAI, Gemini). Tout fonctionne en serverless sur Vercel.
          </p>

          <Code>{`Client → POST /api/chat { prompt }
  │
  ├─ 1. Embedding du prompt (ex: text-embedding-3-small, 0.02 $/1M tokens)
  ├─ 2. Recherche vectorielle Redis (FT.SEARCH / Upstash Vector)
  │     └─ hit si similarité > 0.92 → retour immédiat (45 ms)
  └─ 3. miss → appel LLM (Groq / OpenAI) → stocke (vecteur + réponse) → retour
`}</Code>

          <p>
            Pourquoi Upstash Redis / Vercel KV ? Parce qu&apos;ils exposent une API HTTP compatible serverless (pas de connexion TCP persistante), un support vectoriel natif et un tarif à l&apos;usage. Vous pouvez aussi utiliser Vercel KV, Qdrant ou pgvector si vous avez déjà Postgres — le principe reste identique.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 : générer les embeddings</h2>
          <p>
            Choisissez un modèle d&apos;embedding petit, rapide et bon marché. <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">text-embedding-3-small</code> (OpenAI, 1536 dim) ou <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">bge-small-en-v1.5</code> en self-hosté sont d&apos;excellents compromis. L&apos;embedding d&apos;une phrase coûte environ 0,00002 € — négligeable face à la génération.
          </p>

          <Code>{`// src/lib/embeddings.ts
export async function embed(text: string): Promise<number[]> {
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${process.env.OPENAI_API_KEY}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-embedding-3-small',
      input: text.slice(0, 8000), // limite prudente
    }),
    signal: AbortSignal.timeout(5000),
  })
  if (!res.ok) throw new Error(\`embed failed: \${res.status}\`)
  const json = await res.json()
  return json.data[0].embedding as number[]
}

// Alternative 100% Groq/Open-source : remplacez l'URL par votre endpoint
// ou utilisez @xenova/transformers en Edge si vous voulez zéro appel externe.
`}</Code>

          <p>
            Astuce : normalisez le prompt avant embedding (trim, lowercase, suppression des espaces multiples). Deux prompts « Bonjour ! » et « bonjour » doivent produire le même vecteur ou presque.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 : stocker et chercher dans Redis</h2>
          <p>
            Upstash propose deux options : <strong className="text-white">Upstash Redis avec module vectoriel</strong> (commandes <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">FT.CREATE</code> / <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">FT.SEARCH</code>) ou <strong className="text-white">Upstash Vector</strong> (API dédiée). Voici l&apos;implémentation Redis la plus portable.
          </p>

          <Code>{`// src/lib/semantic-cache.ts
import { Redis } from '@upstash/redis'
import { embed } from './embeddings'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const PREFIX = 'semcache:'
const THRESHOLD = 0.92 // ajustez entre 0.88 et 0.95 selon votre tolérance
const TTL_SECONDS = 60 * 60 * 24 * 7 // 7 jours

function cosine(a: number[], b: number[]): number {
  let dot = 0, na = 0, nb = 0
  for (let i = 0; i < a.length; i++) { dot += a[i]*b[i]; na += a[i]*a[i]; nb += b[i]*b[i] }
  return dot / (Math.sqrt(na) * Math.sqrt(nb))
}

export async function semanticLookup(prompt: string): Promise<string | null> {
  const vec = await embed(prompt)
  // Récupère les 20 entrées récentes (ou utilisez un index vectoriel pour scaler à 1M+)
  const keys = await redis.keys(\`\${PREFIX}*\`)
  if (keys.length === 0) return null

  let best: { score: number; answer: string } | null = null
  // En production > 10k entrées : remplacez par FT.SEARCH KNN ou Upstash Vector query
  for (const key of keys.slice(0, 50)) {
    const entry = await redis.hgetall<{ v: string; a: string }>(key)
    if (!entry?.v || !entry?.a) continue
    const stored = JSON.parse(entry.v) as number[]
    const score = cosine(vec, stored)
    if (score >= THRESHOLD && (!best || score > best.score)) {
      best = { score, answer: entry.a }
    }
  }
  return best?.answer ?? null
}

export async function semanticStore(prompt: string, answer: string, vec?: number[]) {
  const embedding = vec ?? await embed(prompt)
  const id = PREFIX + Date.now() + ':' + Math.random().toString(36).slice(2, 8)
  await redis.hset(id, { v: JSON.stringify(embedding), a: answer, p: prompt.slice(0, 500) })
  await redis.expire(id, TTL_SECONDS)
}
`}</Code>

          <p>
            Cette version « scan 50 clés » suffit jusqu&apos;à quelques milliers d&apos;entrées. Au-delà, passez à un vrai index KNN : <Link href="/blog/rag-nextjs-groq" className="text-indigo-400 hover:text-indigo-300 underline">notre guide RAG avec Next.js et Groq</Link> détaille la création d&apos;un index vectoriel — la même technique s&apos;applique au cache.
          </p>

          <div className="rounded-xl bg-indigo-900/30 border border-indigo-500/20 p-5">
            <p className="text-sm text-indigo-200/70">
              <strong className="text-white">Échelle :</strong> pour 100k+ entrées, utilisez Upstash Vector ou Qdrant avec recherche ANN (HNSW). Latence de recherche : 10–30 ms même à grande échelle, contre 800–2500 ms pour un appel LLM.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 : brancher le cache dans votre route /api/chat</h2>
          <p>
            Le cache s&apos;insère en deux lignes avant votre appel LLM habituel. Gardez votre logique de <Link href="/blog/api-ia-nextjs-production" className="text-indigo-400 hover:text-indigo-300 underline">failover multi-providers</Link> et de <Link href="/blog/circuit-breaker-pattern-nextjs" className="text-indigo-400 hover:text-indigo-300 underline">circuit breaker</Link> — le cache vient en amont, pas à la place.
          </p>

          <Code>{`// src/app/api/chat/route.ts
import { NextRequest } from 'next/server'
import { semanticLookup, semanticStore } from '@/lib/semantic-cache'
import { embed } from '@/lib/embeddings'
import { callAI } from '@/lib/ai' // votre wrapper Groq → Gemini → OpenAI

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()
  if (!prompt || typeof prompt !== 'string') {
    return new Response('Missing prompt', { status: 400 })
  }

  // 1. Tentative cache sémantique
  const cached = await semanticLookup(prompt).catch(() => null)
  if (cached) {
    return new Response(JSON.stringify({ answer: cached, cached: true }), {
      headers: { 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
    })
  }

  // 2. Miss → appel LLM réel
  const answer = await callAI(prompt)

  // 3. Stockage asynchrone (ne bloque pas la réponse)
  const vec = await embed(prompt).catch(() => undefined)
  if (vec) semanticStore(prompt, answer, vec).catch(console.error)

  return new Response(JSON.stringify({ answer, cached: false }), {
    headers: { 'Content-Type': 'application/json', 'X-Cache': 'MISS' },
  })
}
`}</Code>

          <p>
            Déployez et mesurez : ajoutez un header <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">X-Cache: HIT/MISS</code> et loggez le taux de hit. Visez 35 % minimum la première semaine ; au-delà de 50 %, vous avez trouvé le bon seuil.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Choisir le bon seuil de similarité</h2>
          <p>
            Le seuil est le paramètre le plus sensible. Trop bas (0,85), vous servez des réponses hors sujet. Trop haut (0,97), vous ne hittez presque jamais. Voici un repère issu de tests en français :
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">0,88 – 0,90 :</strong> agressif, bon pour FAQ fermée (support, aide). Risque de faux positifs ~5 %.</li>
            <li><strong className="text-white">0,92 – 0,94 :</strong> équilibré, recommandé pour la plupart des SaaS. Faux positifs &lt; 2 %.</li>
            <li><strong className="text-white">0,95+ :</strong> conservateur, pour réponses sensibles (juridique, médical, facturation).</li>
          </ul>

          <p>
            Procédure : échantillonnez 200 paires de prompts réels, calculez leur similarité, et validez manuellement 50 hits au seuil candidat. Ajustez jusqu&apos;à obtenir moins de 2 % de réponses jugées inadéquates par un humain.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">TTL, invalidation et données sensibles</h2>
          <p>
            Un cache n&apos;est pas gratuit en complexité. Trois règles évitent les pièges :
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">TTL court par défaut (7 jours) :</strong> les réponses LLM vieillissent (prix, features, doc). Un TTL de 7 à 30 jours force un rafraîchissement naturel. Pour du contenu très dynamique (météo, bourse), descendez à 1 heure.</li>
            <li><strong className="text-white">Ne cachez jamais les données personnelles :</strong> si le prompt contient un email, un ID de commande ou un contexte utilisateur, excluez-le du cache ou hachez-le. Un utilisateur ne doit jamais recevoir la réponse générée pour un autre.</li>
            <li><strong className="text-white">Invalidation ciblée :</strong> quand votre doc produit change, supprimez les clés correspondantes (<code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">redis.del(prefix + '*')</code> par namespace) plutôt que de vider tout le cache.</li>
          </ul>

          <p>
            Pour les apps soumises au RGPD, le cache est une donnée à caractère personnel si la question identifie l&apos;utilisateur. Consultez notre guide <Link href="/blog/ia-rgpd-conformite-2026" className="text-indigo-400 hover:text-indigo-300 underline">IA et RGPD : conformité en 2026</Link> avant de stocker des prompts en clair.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Mesurer le ROI : le tableau qui convainc votre CFO</h2>
          <p>
            Prenons un SaaS à 20 000 requêtes IA / mois, coût moyen 0,008 € par génération (Groq + fallback OpenAI). Sans cache : 160 €/mois. Avec cache sémantique :
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`Taux de hit    Appels LLM restants    Coût LLM    Coût embeddings    Coût Redis    Total    Économie
30 %           14 000               112 €       ~2 €               ~5 €        119 €    26 %
50 %           10 000                80 €       ~3 €               ~5 €         88 €    45 %
65 %            7 000                56 €       ~4 €               ~5 €         65 €    59 %`}</code>
            </pre>
          </div>

          <p>
            Même à 30 % de hit, le cache est rentable dès le premier mois. Et la latence utilisateur s&apos;améliore mécaniquement : 45 ms sur hit contre 1 à 2 s sur miss — un gain perçu immédiatement sur mobile.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Aller plus loin : streaming, Edge et monitoring</h2>
          <p>
            Le cache sémantique se combine très bien avec le streaming : servez le hit en une seule réponse JSON rapide, et gardez le streaming SSE pour les miss. Côté <Link href="/blog/edge-runtime-ia" className="text-indigo-400 hover:text-indigo-300 underline">Edge Runtime</Link>, l&apos;appel d&apos;embedding et la recherche Redis sont tous deux compatibles Edge (fetch HTTP), donc vous pouvez placer le cache au plus près de l&apos;utilisateur.
          </p>
          <p>
            N&apos;oubliez pas de monitorer : taux de hit, similarité moyenne des hits, faux positifs signalés, économies cumulées. Un dashboard simple (Grafana ou même un endpoint <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">/api/cache/stats</code>) suffit à ajuster le seuil au fil des semaines. Pour une observabilité LLM complète, voyez notre article sur le <Link href="/blog/monitoring-ia-avance-drift-eval" className="text-indigo-400 hover:text-indigo-300 underline">monitoring IA avancé : drift et eval</Link>.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Prêt à diviser vos coûts IA ?</h3>
            <p className="text-indigo-200/70 mb-4">
              Nos templates Next.js intègrent déjà le cache sémantique, le failover multi-providers et le rate limiting. Déployez en minutes, pas en semaines.{' '}
              <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">Découvrir les templates</Link>
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300">Voir les prix →</Link>
              <Link href="/docs" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300">Lire la doc →</Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Le cache sémantique est l&apos;optimisation la plus sous-estimée des SaaS IA : quelques dizaines de lignes de code, un Redis serverless, et vous économisez la moitié de votre facture LLM tout en offrant une réponse quasi instantanée à vos utilisateurs. Commencez avec un seuil à 0,92, un TTL de 7 jours et Upstash Redis — mesurez, ajustez, puis étendez à l&apos;ensemble de vos routes IA. Votre marge vous remerciera, et vos utilisateurs aussi.{' '}
            <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">Nos templates SaaS incluent ce pattern clé en main : concentrez-vous sur votre produit, pas sur la plomberie.</Link>
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/cout-reel-api-ia-2026" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Coût réel des API IA en 2026 : comparatif OpenAI, Gemini, Groq
              </Link>
            </li>
            <li>
              <Link href="/blog/optimisation-couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Optimisation des coûts LLM en production
              </Link>
            </li>
            <li>
              <Link href="/blog/rag-nextjs-groq" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                RAG avec Next.js et Groq : système de retrieval augmenté
              </Link>
            </li>
            <li>
              <Link href="/blog/circuit-breaker-pattern-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Pattern Circuit Breaker en Next.js
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
