import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Cómo integrar la IA en tu SaaS en 30 minutos",
  description: "Tutorial práctico: integra una API de IA en tu SaaS Next.js en 30 minutos. Código copiable en cada paso, buenas prácticas, despliegue.",
  path: '/blog/es/ai-api-pour-saas',
  type: 'article',
  keywords: ['API ia', 'SaaS template', 'inteligencia artificial', 'integración API', 'Next.js', 'tutorial', 'template next.js', 'desarrollador web'],
  publishedTime: '2024-06-15',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiPourSaasPage() {
  const articleSchema = generateArticleSchema({
    title: 'Cómo integrar la IA en tu SaaS en 30 minutos',
    description: 'Tutorial práctico: integra una API de IA en tu SaaS Next.js en 30 minutos.',
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Integrar la IA en 30 min', path: '/blog/es/ai-api-pour-saas' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'IA en 30 min', href: '/blog/es/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Tutorial
            </span>
            <span className="text-sm text-indigo-400">15 de Junio 2024</span>
            <span className="text-sm text-indigo-400">12 min de lectura</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Cómo integrar la IA en tu SaaS en 30 minutos
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/es/ai-api-pour-saas`} title="Cómo integrar la IA en tu SaaS en 30 minutos" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Añadir inteligencia artificial a tu SaaS ya no está reservado para las grandes empresas. Con las APIs correctas, puedes integrar la generación de texto, SEO automatizado y generación de código en unos minutos. Este tutorial te muestra exactamente cómo hacerlo, con código copiable.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Prerrequisitos</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>Un proyecto Next.js 14+ (App Router)</li>
                <li>Una clave API de NeuraAPI (gratuita en /register)</li>
                <li>Node.js 18+ instalado</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Paso 1 — Crea tu cuenta y obtén una clave API</h2>
            <p>
              Ve a <a href="/register" className="text-indigo-400 underline">/register</a> y crea una cuenta gratuita. Recibes inmediatamente una clave API que comienza por <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>. Se ofrecen 100 créditos mensuales.
            </p>
            <p>
              Guarda esta clave en un lugar seguro. Se usará en todas tus llamadas API.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">Paso 2 — Instala el SDK</h2>
            <p>
              El SDK TypeScript hace la integración ultra-sencilla. Una sola dependencia, cero configuración.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Paso 3 — Crea un servicio IA del lado del servidor</h2>
            <p>
              Crea un archivo <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code> que encapsule las llamadas API. Este es el punto central de tu integración.
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

            <h2 className="text-2xl font-bold text-white mt-12">Paso 4 — Crea una ruta API de Next.js</h2>
            <p>
              Expón una ruta API en tu SaaS. Esta ruta será llamada por tu frontend para generar contenido.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Prompt requerido' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'Error de generación' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Paso 5 — Llama desde el frontend</h2>
            <p>
              Del lado del cliente, llama a tu ruta API con un simple fetch. Aquí hay un componente React completo.
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
        placeholder="Describe lo que quieres generar..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? 'Generando...' : 'Generar'}
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

            <h2 className="text-2xl font-bold text-white mt-12">Paso 6 — Añade rate limiting</h2>
            <p>
              Protege tu API contra abusos. Aquí hay un middleware simple que limita las llamadas por usuario.
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

// Uso en la ruta API:
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: 'Demasiadas solicitudes' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Buenas prácticas</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Nunca expongas la clave API del lado del cliente</h3>
                <p className="text-sm text-indigo-300">Usa siempre un proxy del servidor (ruta API de Next.js) para las llamadas a la API de IA. La clave API nunca debe aparecer en el código JavaScript enviado al navegador.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Valida las entradas del usuario</h3>
                <p className="text-sm text-indigo-300">Siempre sanitiza y valida el prompt enviado por el usuario. Limita la longitud, filtra caracteres peligrosos, y usa zod o joi para la validación.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Almacena en caché las respuestas</h3>
                <p className="text-sm text-indigo-300">Para prompts similares, almacena en caché las respuestas de IA. Un caché Redis con TTL de 24h reduce considerablemente los costos sin impactar la calidad.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Monitorea los costos</h3>
                <p className="text-sm text-indigo-300">Rastrea el consumo de créditos por usuario y por función. Las APIs de IA pueden ser costosas si no están optimizadas.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusión</h2>
            <p>
              En 6 pasos simples, has integrado la IA en tu SaaS. La generación de contenido, SEO automatizado y generación de código ahora son accesibles para tus usuarios. Todo en menos de 30 minutos.
            </p>
            <p>
              NeuraAPI simplifica esta integración: una sola clave API, un SDK TypeScript, endpoints documentados. Te concentras en tu producto, nosotros gestionamos la infraestructura de IA.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              ¿Listo para integrar la IA?
            </h3>
            <p className="mt-3 text-indigo-200">
              Obtén tu clave API gratuita y comienza a construir en minutos.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Empezar gratis
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Leer la documentación
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
