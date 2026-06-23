import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "So integrieren Sie KI in Ihr SaaS in 30 Minuten",
  description: "Praktisches Tutorial: Integrieren Sie eine KI-API in Ihr Next.js SaaS in 30 Minuten. Kopierbarer Code in jedem Schritt, Best Practices, Deployment.",
  path: '/blog/de/ai-api-pour-saas',
  type: 'article',
  keywords: ['KI-API', 'SaaS template', 'künstliche Intelligenz', 'API-Integration', 'Next.js', 'Tutorial', 'next.js template', 'Webentwickler'],
  publishedTime: '2024-06-15',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiPourSaasPage() {
  const articleSchema = generateArticleSchema({
    title: 'So integrieren Sie KI in Ihr SaaS in 30 Minuten',
    description: 'Praktisches Tutorial: Integrieren Sie eine KI-API in Ihr Next.js SaaS in 30 Minuten.',
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'KI in 30 Min integrieren', path: '/blog/de/ai-api-pour-saas' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'KI in 30 Min', href: '/blog/de/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Tutorial
            </span>
            <span className="text-sm text-indigo-400">15. Juni 2024</span>
            <span className="text-sm text-indigo-400">12 Min. Lesezeit</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            So integrieren Sie KI in Ihr SaaS in 30 Minuten
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/de/ai-api-pour-saas`} title="So integrieren Sie KI in Ihr SaaS in 30 Minuten" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Künstliche Intelligenz in Ihr SaaS zu integrieren, ist nicht mehr großen Unternehmen vorbehalten. Mit den richtigen APIs können Sie Textgenerierung, automatisiertes SEO und Codegenerierung in wenigen Minuten integrieren. Dieses Tutorial zeigt Ihnen genau, wie es geht, mit kopierbarem Code.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Voraussetzungen</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>Ein Next.js 14+ Projekt (App Router)</li>
                <li>Ein NeuraAPI-Schlüssel (kostenlos auf /register)</li>
                <li>Node.js 18+ installiert</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Schritt 1 — Erstellen Sie Ihr Konto und erhalten Sie einen API-Schlüssel</h2>
            <p>
              Gehen Sie zu <a href="/register" className="text-indigo-400 underline">/register</a> und erstellen Sie ein kostenloses Konto. Sie erhalten sofort einen API-Schlüssel, der mit <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code> beginnt. 100 monatliche Credits werden angeboten.
            </p>
            <p>
              Bewahren Sie diesen Schlüssel sicher auf. Er wird in allen Ihren API-Aufrufen verwendet.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">Schritt 2 — Installieren Sie das SDK</h2>
            <p>
              Das TypeScript SDK macht die Integration ultra-einfach. Eine einzige Abhängigkeit, keine Konfiguration.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Schritt 3 — Erstellen Sie einen serverseitigen KI-Dienst</h2>
            <p>
              Erstellen Sie eine Datei <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code>, die die API-Aufrufe kapselt. Dies ist der zentrale Punkt Ihrer Integration.
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

            <h2 className="text-2xl font-bold text-white mt-12">Schritt 4 — Erstellen Sie eine Next.js API-Route</h2>
            <p>
              Stellen Sie eine API-Route in Ihrem SaaS bereit. Diese Route wird von Ihrem Frontend aufgerufen, um Inhalte zu generieren.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Prompt erforderlich' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'Generierungsfehler' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Schritt 5 — Aufruf vom Frontend</h2>
            <p>
              Auf der Client-Seite rufen Sie Ihre API-Route mit einem einfachen fetch auf. Hier ist eine vollständige React-Komponente.
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
        placeholder="Beschreiben Sie, was Sie generieren möchten..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? 'Generierung...' : 'Generieren'}
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

            <h2 className="text-2xl font-bold text-white mt-12">Schritt 6 — Rate Limiting hinzufügen</h2>
            <p>
              Schützen Sie Ihre API vor Missbrauch. Hier ist ein einfaches Middleware, das die Aufrufe pro Benutzer begrenzt.
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

// Verwendung in der API-Route:
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: 'Zu viele Anfragen' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Best Practices</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">API-Schlüssel nie auf der Client-Seite offenlegen</h3>
                <p className="text-sm text-indigo-300">Verwenden Sie immer einen Server-Proxy (Next.js API-Route) für KI-API-Aufrufe. Der API-Schlüssel darf niemals im JavaScript-Code erscheinen, der an den Browser gesendet wird.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Benutzereingaben validieren</h3>
                <p className="text-sm text-indigo-300">Sanieren und validieren Sie immer den vom Benutzer gesendeten Prompt. Begrenzen Sie die Länge, filtern Sie gefährliche Zeichen und verwenden Sie zod oder joi für die Validierung.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Antworten zwischenspeichern</h3>
                <p className="text-sm text-indigo-300">Für ähnliche Prompts zwischenspeichern Sie KI-Antworten. Ein Redis-Cache mit 24h TTL reduziert die Kosten erheblich, ohne die Qualität zu beeinträchtigen.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Kosten überwachen</h3>
                <p className="text-sm text-indigo-300">Verfolgen Sie den Credit-Verbrauch pro Benutzer und pro Funktion. KI-APIs können teuer sein, wenn sie nicht optimiert sind.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Fazit</h2>
            <p>
              In 6 einfachen Schritten haben Sie KI in Ihr SaaS integriert. Inhaltsgenerierung, automatisiertes SEO und Codegenerierung sind jetzt für Ihre Benutzer zugänglich. Alles in unter 30 Minuten.
            </p>
            <p>
              NeuraAPI vereinfacht diese Integration: Ein einziger API-Schlüssel, ein TypeScript-SDK, dokumentierte Endpunkte. Sie konzentrieren sich auf Ihr Produkt, wir kümmern uns um die KI-Infrastruktur.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Bereit, KI zu integrieren?
            </h3>
            <p className="mt-3 text-indigo-200">
              Holen Sie sich Ihren kostenlosen API-Schlüssel und beginnen Sie in Minuten mit dem Bauen.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Kostenlos starten
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Dokumentation lesen
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
