import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Come integrare l'IA nel tuo SaaS in 30 minuti",
  description: "Tutorial pratico: integra un'API IA nel tuo SaaS Next.js in 30 minuti. Codice copiabile ad ogni passo, best practice, deployment.",
  path: '/blog/it/ai-api-pour-saas',
  type: 'article',
  keywords: ['API ia', 'SaaS template', 'intelligenza artificiale', 'integrazione API', 'Next.js', 'tutorial', 'template next.js', 'sviluppatore web'],
  publishedTime: '2024-06-15',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiPourSaasPage() {
  const articleSchema = generateArticleSchema({
    title: 'Come integrare l\'IA nel tuo SaaS in 30 minuti',
    description: 'Tutorial pratico: integra un\'API IA nel tuo SaaS Next.js in 30 minuti.',
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Integrare l\'IA in 30 min', path: '/blog/it/ai-api-pour-saas' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'IA in 30 min', href: '/blog/it/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Tutorial
            </span>
            <span className="text-sm text-indigo-400">15 Giugno 2024</span>
            <span className="text-sm text-indigo-400">12 min di lettura</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Come integrare l&apos;IA nel tuo SaaS in 30 minuti
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/it/ai-api-pour-saas`} title="Come integrare l'IA nel tuo SaaS in 30 minuti" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Aggiungere intelligenza artificiale al tuo SaaS non è più riservato alle grandi aziende. Con le API giuste, puoi integrare la generazione di testo, SEO automatizzata e generazione di codice in pochi minuti. Questo tutorial ti mostra esattamente come fare, con codice copiabile.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Prerequisiti</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>Un progetto Next.js 14+ (App Router)</li>
                <li>Una chiave API NeuraAPI (gratuita su /register)</li>
                <li>Node.js 18+ installato</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Passo 1 — Crea il tuo account e ottieni una chiave API</h2>
            <p>
              Vai su <a href="/register" className="text-indigo-400 underline">/register</a> e crea un account gratuito. Ricevi immediatamente una chiave API che inizia con <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>. 100 crediti mensili sono offerti.
            </p>
            <p>
              Conserva questa chiave in un posto sicuro. Sarà usata in tutte le tue chiamate API.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">Passo 2 — Installa il SDK</h2>
            <p>
              Il SDK TypeScript rende l&apos;integrazione ultra-semplice. Una singola dipendenza, zero configurazione.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Passo 3 — Crea un servizio IA lato server</h2>
            <p>
              Crea un file <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code> che incapsula le chiamate API. Questo è il punto centrale della tua integrazione.
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

            <h2 className="text-2xl font-bold text-white mt-12">Passo 4 — Crea una route API Next.js</h2>
            <p>
              Esponi una route API nel tuo SaaS. Questa route sarà chiamata dal tuo frontend per generare contenuti.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Prompt richiesto' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'Errore di generazione' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Passo 5 — Chiama dal frontend</h2>
            <p>
              Lato client, chiama la tua route API con un semplice fetch. Ecco un componente React completo.
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
        placeholder="Descrivi cosa vuoi generare..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? 'Generazione...' : 'Genera'}
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

            <h2 className="text-2xl font-bold text-white mt-12">Passo 6 — Aggiungi il rate limiting</h2>
            <p>
              Proteggi la tua API dagli abusi. Ecco un middleware semplice che limita le chiamate per utente.
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

// Utilizzo nella route API:
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: 'Troppe richieste' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Best Practice</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Mai esporre la chiave API lato client</h3>
                <p className="text-sm text-indigo-300">Usa sempre un proxy server (route API Next.js) per le chiamate all&apos;API IA. La chiave API non deve mai apparire nel codice JavaScript inviato al browser.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Valida gli input utente</h3>
                <p className="text-sm text-indigo-300">Sanitizza e valida sempre l&apos;prompt inviato dall&apos;utente. Limita la lunghezza, filtra i caratteri pericolosi e usa zod o joi per la validazione.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Metti in cache le risposte</h3>
                <p className="text-sm text-indigo-300">Per prompt simili, metti in cache le risposte IA. Una cache Redis con TTL di 24h riduce notevolmente i costi senza impattare la qualità.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Monitora i costi</h3>
                <p className="text-sm text-indigo-300">Traccia il consumo di crediti per utente e per funzionalità. Le API IA possono costare caro se non ottimizzate.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusione</h2>
            <p>
              In 6 semplici passi, hai integrato l&apos;IA nel tuo SaaS. La generazione di contenuti, SEO automatizzata e generazione di codice sono ora accessibili ai tuoi utenti. Tutto in meno di 30 minuti.
            </p>
            <p>
              NeuraAPI semplifica questa integrazione: una singola chiave API, un SDK TypeScript, endpoint documentati. Tu ti concentri sul tuo prodotto, noi gestiamo l&apos;infrastruttura IA.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Pronto a integrare l&apos;IA?
            </h3>
            <p className="mt-3 text-indigo-200">
              Ottieni la tua chiave API gratuita e inizia a costruire in pochi minuti.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Inizia gratis
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Leggi la documentazione
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
