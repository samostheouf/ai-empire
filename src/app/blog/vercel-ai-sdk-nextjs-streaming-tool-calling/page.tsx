import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Vercel AI SDK + Next.js 15 : streaming, tool calling et RAG en prod (guide 2026)',
    description: 'Guide complet Vercel AI SDK 5 avec Next.js 15 : streaming temps réel, tool calling, RAG léger, failover multi-provider et déploiement Vercel. Code complet et bonnes pratiques prod.',
    path: '/blog/vercel-ai-sdk-nextjs-streaming-tool-calling',
    type: 'article',
    keywords: ['vercel ai sdk next.js', 'next.js 15 streaming ia', 'tool calling next.js', 'rag vercel ai sdk', 'vercel ai sdk 5 tutoriel', 'streaming ia next.js 2026'],
    publishedTime: '2026-09-08',
    modifiedTime: '2026-09-08',
  })
}

export default function BlogVercelAiSdkStreaming() {
  const articleSchema = generateArticleSchema({
    title: 'Vercel AI SDK + Next.js 15 : streaming, tool calling et RAG en production',
    description: 'Guide complet Vercel AI SDK 5 avec Next.js 15 : streaming temps réel, tool calling, RAG léger, failover multi-provider et déploiement Vercel.',
    slug: 'vercel-ai-sdk-nextjs-streaming-tool-calling',
    datePublished: '2026-09-08',
    dateModified: '2026-09-08',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Vercel AI SDK + Next.js', path: '/blog/vercel-ai-sdk-nextjs-streaming-tool-calling' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Vercel AI SDK + Next.js 15', href: '/blog/vercel-ai-sdk-nextjs-streaming-tool-calling' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutoriel
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 8 septembre 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 13 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Vercel AI SDK + Next.js 15 : streaming, tool calling et RAG en production
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/vercel-ai-sdk-nextjs-streaming-tool-calling`} title="Vercel AI SDK + Next.js 15 : streaming, tool calling et RAG" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Le <strong className="text-white">Vercel AI SDK 5</strong> est devenu le standard pour intégrer l&apos;IA dans Next.js 15.
            Il abstrait le streaming, le tool calling et la gestion multi-provider en une API unifiée — et vous fait
            gagner des semaines de plomberie. Ce guide vous montre comment passer d&apos;un prototype qui &laquo; répond &raquo;
            à un SaaS IA qui stream en temps réel, appelle vos outils métier et s&apos;appuie sur vos données via RAG,
            sans sacrifier la stabilité ni exploser la facture.
          </p>

          <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6">
            <h3 className="text-white font-semibold mb-2">Ce que vous allez construire</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-indigo-300">
              <li>Une route <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs border border-white/10">/api/chat</code> avec streaming natif et failover Groq → OpenAI</li>
              <li>Une UI React avec <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs border border-white/10">useChat</code> qui affiche chaque token dès son arrivée</li>
              <li>Du tool calling pour interroger votre base, créer un ticket ou vérifier un stock</li>
              <li>Un RAG léger sans infra lourde : chunking + embeddings + retrieval avant génération</li>
              <li>Rate limiting, abort et cache pour passer en production sereinement</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Pourquoi le Vercel AI SDK plutôt qu&apos;un fetch direct ?</h2>
          <p>
            Appeler l&apos;API Groq ou OpenAI en <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">fetch</code> fonctionne pour une démo.
            En production, les problèmes arrivent vite : le streaming SSE nécessite un parser robuste, les erreurs réseau
            doivent déclencher un fallback, les outils (tools) exigent un schéma JSON strict, et chaque provider a ses
            subtilités de format. Le Vercel AI SDK uniformise tout cela.
          </p>
          <p>
            Concrètement, le SDK vous offre trois briques : <strong className="text-white">le transport streaming</strong> (gère les chunks, les erreurs
            et l&apos;annulation), <strong className="text-white">l&apos;abstraction provider</strong> (même appel pour Groq, OpenAI, Anthropic, Google) et
            <strong className="text-white"> les helpers UI</strong> (<code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">useChat</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">useCompletion</code>).
            Résultat : vous changez de modèle en une ligne, vous ajoutez un outil sans réécrire votre route, et votre
            interface reste fluide même sur une connexion mobile lente. Pour un SaaS qui vend de l&apos;IA, cette vitesse
            perçue est directement liée à la conversion.
          </p>
          <p>
            Autre avantage souvent ignoré : le SDK est pensé pour Next.js 15. Il fonctionne aussi bien en Route Handler
            Node.js qu&apos;en Edge Runtime, expose des helpers pour les Server Actions et s&apos;intègre avec le cache
            Next.js. Vous évitez ainsi de dupliquer la logique entre &laquo; code prototype &raquo; et &laquo; code prod &raquo;.
            Si vous partez de zéro, nos <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">templates SaaS Next.js 15</Link> incluent déjà
            cette architecture câblée avec authentification, billing Stripe et observabilité.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 : installation et configuration</h2>
          <p>
            Installez le SDK et au moins deux providers pour le failover. Gardez Groq pour la latence et OpenAI en secours.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npm install ai @ai-sdk/openai @ai-sdk/groq zod
# .env.local
GROQ_API_KEY=gsk_xxx
OPENAI_API_KEY=sk-xxx`}</code>
            </pre>
          </div>
          <p>
            Le fichier <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ai/providers.ts</code> centralise vos clients. Cette centralisation
            vous permet de changer le modèle par défaut sans toucher aux routes, et de logger chaque appel au même endroit.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// lib/ai/providers.ts
import { createGroq } from '@ai-sdk/groq'
import { createOpenAI } from '@ai-sdk/openai'

export const groq = createGroq({ apiKey: process.env.GROQ_API_KEY! })
export const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export const models = {
  fast: groq('llama-3.3-70b-versatile'),
  balanced: groq('llama-3.1-8b-instant'),
  fallback: openai('gpt-4o-mini'),
}`}</code>
            </pre>
          </div>
          <p>
            Astuce coûts : déclarez un modèle &laquo; fast &raquo; pour les requêtes courtes (chat) et un modèle
            &laquo; balanced &raquo; pour les tâches longues. Vous divisez souvent la facture par deux sans dégrader
            l&apos;expérience, car 80 % des interactions tiennent en moins de 300 tokens. Notre guide sur
            l&apos;<Link href="/blog/optimisation-couts-llm-production" className="text-indigo-400 hover:text-indigo-300 underline">optimisation des coûts LLM en production</Link> détaille
            cette stratégie avec des chiffres réels par provider.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 : le streaming temps réel avec useChat</h2>
          <p>
            Le streaming est l&apos;attente perçue la plus critique. Un utilisateur qui voit les mots apparaître
            tolère 4 secondes ; sans streaming, il abandonne à 1,5 seconde. Le SDK rend le streaming trivial
            côté serveur et côté client.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/chat/route.ts
import { streamText } from 'ai'
import { models } from '@/lib/ai/providers'

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Garde-fou : limite l'historique
  const history = messages.slice(-12)

  const result = streamText({
    model: models.fast,
    system: 'Tu es un assistant SaaS qui répond en français, concis et utile.',
    messages: history,
    maxTokens: 800,
    temperature: 0.7,
  })

  return result.toDataStreamResponse()
}`}</code>
            </pre>
          </div>
          <p>
            Côté client, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">useChat</code> gère l&apos;état, le streaming et l&apos;annulation. Pas de
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">getReader()</code> manuel, pas de parsing SSE artisanal.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// app/chat/page.tsx
'use client'
import { useChat } from 'ai/react'

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    api: '/api/chat',
  })

  return (
    <div className="max-w-2xl mx-auto">
      {messages.map(m => (
        <div key={m.id} className={m.role === 'user' ? 'text-white' : 'text-indigo-200'}>
          {m.content}
        </div>
      ))}
      <form onSubmit={handleSubmit} className="flex gap-2 mt-6">
        <input value={input} onChange={handleInputChange} placeholder="Votre question..." className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-2" />
        <button disabled={isLoading} className="rounded-lg bg-indigo-600 px-4 py-2 text-white disabled:opacity-50">
          {isLoading ? '...' : 'Envoyer'}
        </button>
        {isLoading && <button type="button" onClick={() => stop()} className="text-sm text-indigo-400">Stop</button>}
      </form>
    </div>
  )
}`}</code>
            </pre>
          </div>
          <p>
            Le bouton <em>Stop</em> appelle <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">stop()</code> qui envoie un signal
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">AbortSignal</code> au serveur. Votre route s&apos;interrompt proprement,
            vous économisez des tokens et l&apos;utilisateur garde le contrôle — un détail UX qui réduit fortement la frustration.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 : tool calling — quand le modèle appelle vos API</h2>
          <p>
            Le tool calling (ou function calling) permet au modèle de demander l&apos;exécution d&apos;une fonction
            que vous exposez : rechercher une commande, vérifier un stock, créer un ticket. C&apos;est le pont entre
            le langage naturel et votre métier.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/chat/route.ts — avec tools
import { streamText, tool } from 'ai'
import { z } from 'zod'
import { models } from '@/lib/ai/providers'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: models.fast,
    messages: messages.slice(-12),
    tools: {
      getOrder: tool({
        description: 'Récupère une commande par ID',
        parameters: z.object({ orderId: z.string() }),
        execute: async ({ orderId }) => {
          // Remplacez par votre Prisma / API interne
          const order = await db.order.findUnique({ where: { id: orderId } })
          return order ?? { error: 'Commande introuvable' }
        },
      }),
      createTicket: tool({
        description: 'Crée un ticket support',
        parameters: z.object({
          subject: z.string(),
          priority: z.enum(['low', 'medium', 'high']),
        }),
        execute: async ({ subject, priority }) => {
          const ticket = await db.ticket.create({ data: { subject, priority } })
          return { ticketId: ticket.id, status: 'ouvert' }
        },
      }),
    },
    maxSteps: 3, // autorise 3 allers-retours outil → modèle
  })

  return result.toDataStreamResponse()
}`}</code>
            </pre>
          </div>
          <p>
            Deux règles d&apos;or : <strong className="text-white">validez chaque paramètre avec Zod</strong> (le modèle peut halluciner
            un champ) et <strong className="text-white">limitez les étapes</strong> avec <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">maxSteps</code>
            pour éviter les boucles infinies. Côté UI, le SDK expose <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">toolInvocations</code>
            dans chaque message : affichez un état &laquo; Vérification de votre commande… &raquo; pendant l&apos;exécution
            pour que l&apos;utilisateur comprenne l&apos;attente. Pour aller plus loin, lisez notre tutoriel
            sur <Link href="/blog/chatbot-ia-nextjs-groq" className="text-indigo-400 hover:text-indigo-300 underline">la création d&apos;un chatbot IA avec Next.js et Groq</Link>,
            qui détaille le streaming sans SDK.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 4 : RAG léger sans usine à gaz</h2>
          <p>
            Le RAG (Retrieval-Augmented Generation) ancre les réponses dans vos données. Pas besoin de vecteur
            DB lourde au début : un fichier Markdown + embeddings suffit pour 90 % des SaaS early-stage.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Chunking</strong> : découpez votre doc en blocs de 400–600 tokens avec 50 tokens d&apos;overlap.</li>
            <li><strong className="text-white">Embeddings</strong> : générez les vecteurs une fois (OpenAI <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">text-embedding-3-small</code> à 0,02 $ / 1M tokens).</li>
            <li><strong className="text-white">Retrieval</strong> : au moment de la requête, récupérez les 3–5 chunks les plus proches en similarité cosinus.</li>
            <li><strong className="text-white">Injection</strong> : concaténez ces chunks dans le prompt système avant d&apos;appeler le modèle.</li>
          </ul>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Avant streamText : retrieval
const queryEmbedding = await embed(query) // votre fonction d'embedding
const topChunks = await findNearest(queryEmbedding, 4) // cosinus sur vos vecteurs
const context = topChunks.map(c => c.text).join('\\n---\\n')

const result = streamText({
  model: models.fast,
  system: \`Tu réponds en français en t'appuyant sur ce contexte :\n\${context}\`,
  messages: history,
})`}</code>
            </pre>
          </div>
          <p>
            Stockez les embeddings en JSON ou dans Postgres avec l&apos;extension <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">pgvector</code>
            si vous avez déjà une base. Cette approche tient jusqu&apos;à ~50 000 chunks avant de nécessiter un vrai
            vector store. Notre article <Link href="/blog/rag-nextjs-groq" className="text-indigo-400 hover:text-indigo-300 underline">RAG avec Next.js et Groq : système complet</Link> montre
            l&apos;implémentation chunking → vector store → retrieval pas à pas, et
            <Link href="/blog/rag-vs-finetuning-architecture-decision" className="text-indigo-400 hover:text-indigo-300 underline"> RAG vs fine-tuning : comment décider</Link> vous aide
            à choisir la bonne architecture selon votre cas d&apos;usage.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Failover, erreurs et garde-fous production</h2>
          <p>
            En production, un provider tombe. Sans failover, votre SaaS tombe avec lui. Le SDK facilite le fallback,
            mais vous devez l&apos;orchestrer.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`import { streamText } from 'ai'
import { models } from '@/lib/ai/providers'

async function streamWithFallback(messages: any[]) {
  try {
    return streamText({ model: models.fast, messages })
  } catch (e) {
    console.warn('Groq indisponible, fallback OpenAI', e)
    return streamText({ model: models.fallback, messages })
  }
}`}</code>
            </pre>
          </div>
          <p>
            Ajoutez trois garde-fous systématiques : <strong className="text-white">AbortSignal.timeout(15_000)</strong> sur chaque
            appel IA pour éviter les requêtes pendantes, un <strong className="text-white">rate limit par IP et par utilisateur</strong>
            (100 req/min IP + quota par plan), et un <strong className="text-white">circuit breaker</strong> qui ouvre après
            5 échecs consécutifs et retente après 30 secondes. Ce dernier pattern est détaillé dans
            notre guide <Link href="/blog/circuit-breaker-pattern-nextjs" className="text-indigo-400 hover:text-indigo-300 underline">circuit breaker pour Next.js</Link>.
            Enfin, loguez chaque erreur avec l&apos;ID de requête : sans corrélation, vous déboguerez à l&apos;aveugle.
          </p>
          <div className="rounded-xl bg-indigo-900/20 border border-indigo-700/30 p-5">
            <h4 className="text-white font-semibold text-sm mb-2">Checklist prod avant le go-live</h4>
            <ul className="list-disc list-inside text-sm text-indigo-300 space-y-1">
              <li>Timeout + AbortSignal sur tous les appels IA</li>
              <li>Validation Zod stricte sur tous les tools</li>
              <li>Rate limiting Edge (middleware) + DB pour les quotas payants</li>
              <li>Circuit breaker avec métriques (taux d&apos;échec / latence p95)</li>
              <li>Monitoring : loggez latence, tokens, provider utilisé — voir <Link href="/blog/monitoring-ia-production" className="text-indigo-400 hover:text-indigo-300 underline">monitoring IA en production</Link></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Optimiser les coûts : cache et déduplication</h2>
          <p>
            Le poste &laquo; tokens &raquo; est le plus volatile. Deux leviers simples divisent la facture sans toucher à la qualité.
            D&apos;abord, <strong className="text-white">mettez en cache</strong> les réponses aux prompts fréquents (FAQ, onboarding) avec
            un TTL de 1 heure via Vercel KV ou Redis. Ensuite, <strong className="text-white">dédupliquez côté client</strong> :
            désactivez le bouton pendant le streaming et debouncez l&apos;input à 300 ms pour éviter les doubles envois.
          </p>
          <p>
            Pour les SaaS à fort volume, ajoutez un cache sémantique : si une nouvelle question est à &gt; 92 % de similarité
            cosinus d&apos;une question déjà répondue, servez la réponse cachée. Consultez notre comparatif
            <Link href="/blog/cout-reel-api-ia-2026" className="text-indigo-400 hover:text-indigo-300 underline"> coût réel des API IA en 2026</Link> et
            <Link href="/blog/couts-llm-production" className="text-indigo-400 hover:text-indigo-300 underline"> coûts LLM en production</Link> pour
            chiffrer précisément ces optimisations selon votre provider.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Déploiement sur Vercel en 2 minutes</h2>
          <p>
            Le déploiement ne nécessite aucune config exotique. Poussez votre code, déclarez vos variables d&apos;environnement
            dans le dashboard Vercel (ou via <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">vercel env add</code>) et déployez.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Variables Vercel (Production)
GROQ_API_KEY=gsk_xxx
OPENAI_API_KEY=sk-xxx
# Déploiement
vercel --prod`}</code>
            </pre>
          </div>
          <p>
            Choisissez le runtime selon votre cas : <strong className="text-white">Edge Runtime</strong> pour la latence minimale
            (streaming au plus proche de l&apos;utilisateur) si vous n&apos;avez pas besoin de Prisma, <strong className="text-white">Node.js</strong>
            si votre route touche la base. Next.js 15 vous laisse mixer les deux route par route. Notre article
            <Link href="/blog/edge-runtime-ia" className="text-indigo-400 hover:text-indigo-300 underline">Edge Runtime + IA : latence quasi-nulle</Link> et
            <Link href="/blog/edge-functions-ia-patterns" className="text-indigo-400 hover:text-indigo-300 underline"> patterns Edge Functions pour l&apos;IA</Link> détaillent
            les arbitrages mesurés en production.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Accélérez avec un template prêt pour la prod</h3>
            <p className="text-indigo-200/70 mb-4">
              Pourquoi recâbler l&apos;auth, Stripe et le streaming à chaque projet ? Nos{' '}
              <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">templates SaaS Next.js 15</Link> incluent
              Vercel AI SDK, failover multi-provider, RAG léger et billing — déployables en une commande.
              <Link href="/pricing" className="font-semibold text-indigo-400 hover:text-indigo-300 underline"> Voir les prix</Link> ou{' '}
              <Link href="/guide" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">lire le guide de démarrage</Link>.
            </p>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Explorer les templates →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion : le SDK comme accélérateur, pas comme béquille</h2>
          <p>
            Le Vercel AI SDK ne remplace pas la compréhension des fondamentaux — prompt engineering, gestion d&apos;erreurs,
            observabilité — mais il supprime la plomberie répétitive. En une journée, vous passez d&apos;une route
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">fetch</code> fragile à une expérience de chat fluide, outillée et mesurable.
            Commencez par le streaming, ajoutez un outil métier, puis greffez un RAG léger : chaque étape apporte une
            valeur utilisateur immédiate sans réécrire l&apos;existant.
          </p>
          <p>
            L&apos;IA dans un SaaS n&apos;est pas une fonctionnalité — c&apos;est une couche d&apos;expérience. Quand elle stream
            instantanément, appelle les bons outils et s&apos;appuie sur vos données, elle cesse d&apos;être un gadget
            et devient un avantage concurrentiel. À vous de jouer.{' '}
            <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">Nos templates vous font gagner ce temps</Link> — concentrez-vous
            sur votre produit, pas sur le boilerplate.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/chatbot-ia-nextjs-groq" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Créer un chatbot IA avec Next.js et Groq : le guide complet
              </Link>
            </li>
            <li>
              <Link href="/blog/rag-nextjs-groq" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                RAG avec Next.js et Groq : système de retrieval augmenté
              </Link>
            </li>
            <li>
              <Link href="/blog/api-ia-nextjs-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Intégrer une API IA dans Next.js : patterns production
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
