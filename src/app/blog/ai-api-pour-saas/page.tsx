import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Comment intégrer l'IA dans votre SaaS en 30 minutes",
  description: "Tutoriel concret : intégrez une API IA dans votre SaaS Next.js en 30 minutes. Code copiable à chaque étape, bonnes pratiques, déploiement.",
  path: '/blog/ai-api-pour-saas',
  type: 'article',
  keywords: ['API ia', 'SaaS template', 'intelligence artificielle', 'intégration API', 'Next.js', 'tutorial', 'template next.js', 'développeur web'],
  publishedTime: '2024-06-15',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiPourSaasPage() {
  const articleSchema = generateArticleSchema({
    title: 'Comment intégrer l\'IA dans votre SaaS en 30 minutes',
    description: 'Tutoriel concret : intégrez une API IA dans votre SaaS Next.js en 30 minutes.',
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Intégrer l\'IA en 30 min', path: '/blog/ai-api-pour-saas' },
    ],
  })

  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'IA en 30 min', href: '/blog/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Tutoriel
            </span>
            <span className="text-sm text-indigo-400">15 Juin 2024</span>
            <span className="text-sm text-indigo-400">12 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Comment intégrer l&apos;IA dans votre SaaS en 30 minutes
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ai-api-pour-saas`} title="Comment intégrer l'IA dans votre SaaS en 30 minutes" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Ajouter de l&apos;intelligence artificielle à votre SaaS n&apos;est plus réservé aux grandes entreprises. Avec les bonnes APIs, vous pouvez intégrer la génération de texte, le SEO automatisé et la génération de code en quelques minutes. Ce tutoriel vous montre exactement comment faire, avec du code copiable.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Prérequis</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>Un projet Next.js 14+ (App Router)</li>
                <li>Une clé API NeuraAPI (gratuite sur /register)</li>
                <li>Node.js 18+ installé</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Étape 1 — Créer votre compte et obtenir une clé API</h2>
            <p>
              Rendez-vous sur <a href="/register" className="text-indigo-400 underline">/register</a> et créez un compte gratuit. Vous recevez immédiatement une clé API commençant par <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>. 100 crédits mensuels sont offerts.
            </p>
            <p>
              Conservez cette clé en lieu sûr. Elle sera utilisée dans tous vos appels API.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">Étape 2 — Installer le SDK</h2>
            <p>
              Le SDK TypeScript rend l&apos;intégration ultra-simple. Une seule dépendance, zéro configuration.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Étape 3 — Créer un service IA côté serveur</h2>
            <p>
              Créez un fichier <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code> qui encapsule les appels API. C&apos;est le point central de votre intégration.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// lib/ai.ts
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function generateContent(prompt: string) {
  const result = await ai.generate({
    prompt,
    maxTokens: 1000,
  })
  return result.content
}

export async function generateSEO(topic: string, keywords: string[]) {
  const result = await ai.seo({
    topic,
    keywords,
    maxTokens: 2000,
  })
  return {
    title: result.title,
    metaDescription: result.metaDescription,
    content: result.content,
  }
}

export async function generateCode(description: string, language = 'typescript') {
  const result = await ai.code({
    description,
    language,
  })
  return result.code
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Étape 4 — Créer une route API Next.js</h2>
            <p>
              Exposez une route API dans votre SaaS. Cette route sera appelée par votre frontend pour générer du contenu.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Prompt requis' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur de génération' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Étape 5 — Appeler depuis le frontend</h2>
            <p>
              Côté client, appelez votre route API avec un simple fetch. Voici un composant React complet.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// components/AIGenerator.tsx
'use client'
import { useState } from 'react'

export function AIGenerator() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResult('')

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })

    const data = await res.json()
    setResult(data.content || data.error)
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Décrivez ce que vous voulez générer..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? 'Génération...' : 'Générer'}
      </button>
      {result && (
        <div className="rounded-lg bg-gray-50 p-4">
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Étape 6 — Ajouter un rate limiting</h2>
            <p>
              Protégez votre API contre les abus. Voici un middleware simple qui limite les appels par utilisateur.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// lib/rate-limit.ts
const requests = new Map<string, number[]>()

export function rateLimit(key: string, limit = 10, windowMs = 60000) {
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

// Utilisation dans la route API :
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: 'Trop de requêtes' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Bonnes pratiques</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Ne jamais exposer la clé API côté client</h3>
                <p className="text-sm text-indigo-300">Utilisez toujours un proxy serveur (route API Next.js) pour les appels à l&apos;API IA. La clé API ne doit jamais figurer dans le code JavaScript envoyé au navigateur.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Valider les entrées utilisateur</h3>
                <p className="text-sm text-indigo-300">Sanitisez et validez toujours le prompt envoyé par l&apos;utilisateur. Limitez la longueur, filtrez les caractères dangereux, et utilisez zod ou joi pour la validation.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Mettre en cache les réponses</h3>
                <p className="text-sm text-indigo-300">Pour les prompts similaires, mettez en cache les réponses IA. Un cache Redis avec un TTL de 24h réduit considérablement les coûts sans impacter la qualité.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Monitorer les coûts</h3>
                <p className="text-sm text-indigo-300">Trackez la consommation de crédits par utilisateur et par fonctionnalité. Les APIs IA peuvent coûter cher si elles ne sont pas optimisées.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
            <p>
              En 6 étapes simples, vous avez intégré l&apos;IA dans votre SaaS. La génération de contenu, le SEO automatisé et la génération de code sont maintenant accessibles à vos utilisateurs. Le tout en moins de 30 minutes.
            </p>
            <p>
              NeuraAPI simplifie cette intégration : une seule clé API, un SDK TypeScript, des endpoints documentés. Vous vous concentrez sur votre produit, nous gérons l&apos;infrastructure IA.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
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
        </div>
      </article>
    </div>
  )
}
