import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Intégrer une API IA dans votre application en 5 minutes",
  description: "Tutoriel étape par étape : intégrez une API IA dans votre application Next.js en 5 minutes. SDK TypeScript, code copiable, bonnes pratiques.",
  path: '/blog/ai-api-integration',
  type: 'article',
  keywords: ['API IA', 'intégration IA', 'NeuraAPI', 'SDK TypeScript', 'Next.js', 'intelligence artificielle', 'tutorial IA', 'OpenAI alternative'],
  publishedTime: '2026-06-20',
  modifiedTime: '2026-06-20',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiIntegrationPage() {
  const articleSchema = generateArticleSchema({
    title: 'Intégrer une API IA dans votre application en 5 minutes',
    description: 'Tutoriel étape par étape : intégrez une API IA dans votre application Next.js en 5 minutes.',
    slug: 'ai-api-integration',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Intégrer une API IA', path: '/blog/ai-api-integration' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Intégrer une API IA', href: '/blog/ai-api-integration' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutoriel
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 20 juin 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 12 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Intégrer une API IA dans votre application en 5 minutes
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/ai-api-integration`} title="Intégrer une API IA dans votre application en 5 minutes" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Ajouter de l&apos;intelligence artificielle à votre application n&apos;est plus un projet de plusieurs semaines. Avec une API IA comme NeuraAPI, vous pouvez intégrer la génération de texte, l&apos;analyse de sentiment, la classification et bien plus en quelques minutes. Ce tutoriel vous montre comment, avec du code copiable à chaque étape.
          </p>

          <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
            <h3 className="text-white font-semibold mb-2">Ce que vous allez apprendre</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
              <li>Installer et configurer le SDK NeuraAPI</li>
              <li>Créer un service IA côté serveur</li>
              <li>Exposer une route API Next.js sécurisée</li>
              <li>Appeler l&apos;IA depuis un composant React</li>
              <li>Ajouter du rate limiting et du caching</li>
              <li>Gérer les erreurs et les quotas</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 — Créer un compte et obtenir une clé API</h2>
          <p>
            Rendez-vous sur <a href="/register" className="text-indigo-400 underline">NeuraAPI</a> et créez un compte gratuit. Vous recevez immédiatement une clé API commençant par <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>. 100 crédits mensuels sont offerts sans engagement.
          </p>
          <p>
            Cette clé est votre passeport pour tous les modèles IA : GPT-4, Claude, Mistral, et d&apos;autres. Une seule clé, zéro configuration multiple.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 — Installer le SDK (30 secondes)</h2>
          <p>
            Le SDK TypeScript officiel rend l&apos;intégration ultra-simple. Une seule dépendance :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npm install @neuraapi/sdk`}</code>
            </pre>
          </div>
          <p>
            Le SDK est entièrement typé. Vous bénéficiez de l&apos;autocomplétion et de la vérification de types dans votre éditeur. Pas de surprises à l&apos;exécution.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 — Créer un service IA côté serveur (1 minute)</h2>
          <p>
            Centralisez tous les appels IA dans un seul fichier. C&apos;est plus propre, plus maintenable, et ça facilite le debugging :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// lib/ai.ts
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function generateContent(prompt: string) {
  const result = await ai.generate({
    prompt,
    maxTokens: 1000,
  })
  return result.content
}

export async function analyzeSentiment(text: string) {
  const result = await ai.analyze({
    text,
    task: 'sentiment',
  })
  return {
    sentiment: result.sentiment,
    confidence: result.confidence,
  }
}

export async function classifyText(text: string, categories: string[]) {
  const result = await ai.classify({
    text,
    categories,
  })
  return {
    category: result.category,
    scores: result.scores,
  }
}`}</code>
            </pre>
          </div>
          <p>
            Chaque fonction encapsule un type d&apos;opération IA. Votre code reste lisible et testable.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 4 — Créer une route API Next.js (1 minute)</h2>
          <p>
            Exposez une route API sécurisée qui servira de proxy entre votre frontend et l&apos;API IA. C&apos;est ici que vous validez les entrées et gérez l&apos;authentification :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// app/api/ai/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { generateContent } from '@/lib/ai'
import { z } from 'zod'

const schema = z.object({
  prompt: z.string().min(1).max(5000),
})

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const body = await req.json()
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Paramètres invalides' },
      { status: 400 }
    )
  }

  try {
    const content = await generateContent(parsed.data.prompt)
    return NextResponse.json({ content })
  } catch (error) {
    if (error instanceof Error && error.message.includes('credits')) {
      return NextResponse.json(
        { error: 'Crédits épuisés' },
        { status: 402 }
      )
    }
    return NextResponse.json(
      { error: 'Erreur de génération' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>
          <p>
            Notez la validation avec <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">zod</code> : elle protège votre API contre les entrées malveillantes. Le prompt est limité à 5000 caractères pour éviter les abus.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 5 — Appeler depuis le frontend (30 secondes)</h2>
          <p>
            Côté client, appelez votre route API avec un simple <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">fetch</code>. Voici un composant React complet avec states de chargement et gestion d&apos;erreurs :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// components/AIGenerator.tsx
'use client'
import { useState } from 'react'

export function AIGenerator() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResult('')
    setError('')

    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Une erreur est survenue')
        return
      }

      setResult(data.content)
    } catch {
      setError('Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Décrivez ce que vous voulez générer..."
        className="w-full rounded-lg border border-indigo-800 bg-indigo-950 p-3 text-white"
        rows={4}
      />
      <button
        onClick={handleGenerate}
        disabled={loading || !prompt.trim()}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white disabled:opacity-50"
      >
        {loading ? 'Génération en cours...' : 'Générer'}
      </button>
      {error && (
        <div className="rounded-lg bg-red-900/30 border border-red-800/50 p-3 text-red-300 text-sm">
          {error}
        </div>
      )}
      {result && (
        <div className="rounded-lg bg-indigo-900/30 border border-indigo-800/50 p-4">
          <p className="text-indigo-200 whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </div>
  )
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 6 — Ajouter du rate limiting (bonus)</h2>
          <p>
            Protégez votre API contre les abus avec un rate limiter simple basé en mémoire. En production, utilisez Redis :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// lib/rate-limit.ts
const requests = new Map<string, number[]>()

export function rateLimit(
  key: string,
  limit = 10,
  windowMs = 60000
) {
  const now = Date.now()
  const timestamps = requests.get(key) || []
  const recent = timestamps.filter(t => now - t < windowMs)

  if (recent.length >= limit) {
    return false
  }

  recent.push(now)
  requests.set(key, recent)
  return true
}

// Dans votre route API :
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json(
//     { error: 'Trop de requêtes. Réessayez dans 1 minute.' },
//     { status: 429 }
//   )
// }`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Bonnes pratiques pour l&apos;intégration IA</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Ne jamais exposer la clé API côté client</h3>
              <p className="text-sm text-indigo-300">Utilisez toujours un proxy serveur (route API Next.js). La clé API ne doit jamais figurer dans le code JavaScript envoyé au navigateur. Si elle fuit, n&apos;importe qui peut consommer vos crédits.</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Valider les entrées utilisateur</h3>
              <p className="text-sm text-indigo-300">Sanitisez et validez toujours le prompt avec zod ou joi. Limitez la longueur, filtrez les caractères dangereux, et rejetez les entrées suspectes avant qu&apos;elles n&apos;atteignent le modèle IA.</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Mettre en cache les réponses</h3>
              <p className="text-sm text-indigo-300">Pour des prompts similaires, mettez en cache les réponses IA. Un cache Redis avec un TTL de 24h réduit les coûts de 60-80% sans impacter la qualité pour la plupart des use cases.</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Monitorer les coûts par utilisateur</h3>
              <p className="text-sm text-indigo-300">Trackez la consommation de crédits par utilisateur et par fonctionnalité. Cela vous permet d&apos;identifier les features les plus coûteuses et d&apos;optimiser en conséquence.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Comparaison avec les alternatives</h2>
          <p>
            NeuraAPI se distingue des alternatives comme OpenAI ou Anthropic directement par plusieurs points :
          </p>
          <ul className="list-disc list-inside space-y-2 text-indigo-300">
            <li><strong className="text-white">Un seul SDK</strong> pour accéder à plusieurs modèles (GPT-4, Claude, Mistral)</li>
            <li><strong className="text-white">Tarification simplifiée</strong> : un crédit = un appel, pas de calcul token complexe</li>
            <li><strong className="text-white">Points de terminaison dédiés</strong> pour chaque tâche (generate, analyze, classify, chat)</li>
            <li><strong className="text-white">Support en français</strong> et documentation en français</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            En 5 étapes simples, vous avez intégré l&apos;IA dans votre application. La génération de contenu, l&apos;analyse de sentiment et la classification sont maintenant accessibles à vos utilisateurs. Le tout en moins de 5 minutes de code.
          </p>
          <p>
            NeuraAPI simplifie cette intégration : une seule clé API, un SDK TypeScript, des endpoints documentés. Vous vous concentrez sur votre produit, nous gérons l&apos;infrastructure IA.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Prêt à intégrer l&apos;IA ?
          </h3>
          <p className="mt-3 text-indigo-200">
            Obtenez votre clé API gratuite et commencez à construire en quelques minutes.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
            >
              Commencer gratuitement
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              Lire la doc
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles connexes</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/nextjs-saas-starter" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Comment créer un SaaS avec Next.js en 48h
              </Link>
            </li>
            <li>
              <Link href="/blog/stripe-billing-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Configurer Stripe Billing dans Next.js 14
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
