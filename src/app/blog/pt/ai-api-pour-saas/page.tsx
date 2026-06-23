import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Como integrar a IA no seu SaaS em 30 minutos",
  description: "Tutorial prático: integre uma API de IA no seu SaaS Next.js em 30 minutos. Código copiável em cada etapa, boas práticas, deploy.",
  path: '/blog/pt/ai-api-pour-saas',
  type: 'article',
  keywords: ['API ia', 'SaaS template', 'inteligência artificial', 'integração API', 'Next.js', 'tutorial', 'template next.js', 'desenvolvedor web'],
  publishedTime: '2024-06-15',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiPourSaasPage() {
  const articleSchema = generateArticleSchema({
    title: 'Como integrar a IA no seu SaaS em 30 minutos',
    description: 'Tutorial prático: integre uma API de IA no seu SaaS Next.js em 30 minutos.',
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Integrar IA em 30 min', path: '/blog/pt/ai-api-pour-saas' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'IA em 30 min', href: '/blog/pt/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Tutorial
            </span>
            <span className="text-sm text-indigo-400">15 de Junho de 2024</span>
            <span className="text-sm text-indigo-400">12 min de leitura</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Como integrar a IA no seu SaaS em 30 minutos
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/pt/ai-api-pour-saas`} title="Como integrar a IA no seu SaaS em 30 minutos" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Adicionar inteligência artificial ao seu SaaS não é mais reservado para grandes empresas. Com as APIs certas, você pode integrar geração de texto, SEO automatizado e geração de código em poucos minutos. Este tutorial mostra exatamente como fazer, com código copiável.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Pré-requisitos</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>Um projeto Next.js 14+ (App Router)</li>
                <li>Uma chave API NeuraAPI (gratuita em /register)</li>
                <li>Node.js 18+ instalado</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Etapa 1 — Crie sua conta e obtenha uma chave API</h2>
            <p>
              Vá para <a href="/register" className="text-indigo-400 underline">/register</a> e crie uma conta gratuita. Você recebe imediatamente uma chave API começando com <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>. 100 créditos mensais são oferecidos.
            </p>
            <p>
              Guarde esta chave em local seguro. Ela será usada em todas suas chamadas de API.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">Etapa 2 — Instale o SDK</h2>
            <p>
              O SDK TypeScript torna a integração ultra-simples. Uma única dependência, zero configuração.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Etapa 3 — Crie um serviço IA do lado do servidor</h2>
            <p>
              Crie um arquivo <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code> que encapsula as chamadas API. Este é o ponto central da sua integração.
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

            <h2 className="text-2xl font-bold text-white mt-12">Etapa 4 — Crie uma rota API Next.js</h2>
            <p>
              Exponha uma rota API no seu SaaS. Esta rota será chamada pelo seu frontend para gerar conteúdo.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Prompt obrigatório' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'Erro de geração' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Etapa 5 — Chame do frontend</h2>
            <p>
              No lado do cliente, chame sua rota API com um simples fetch. Aqui está um componente React completo.
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
        placeholder="Descreva o que você quer gerar..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? 'Gerando...' : 'Gerar'}
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

            <h2 className="text-2xl font-bold text-white mt-12">Etapa 6 — Adicione rate limiting</h2>
            <p>
              Proteja sua API contra abusos. Aqui está um middleware simples que limita as chamadas por usuário.
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

// Uso na rota API:
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: 'Muitas requisições' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Boas práticas</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Nunca exponha a chave API no lado do cliente</h3>
                <p className="text-sm text-indigo-300">Use sempre um proxy do servidor (rota API Next.js) para chamadas de API de IA. A chave API nunca deve aparecer no código JavaScript enviado ao navegador.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Valide as entradas do usuário</h3>
                <p className="text-sm text-indigo-300">Sempre sanitizar e validar o prompt enviado pelo usuário. Limite o comprimento, filtre caracteres perigosos e use zod ou joi para validação.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Cache as respostas</h3>
                <p className="text-sm text-indigo-300">Para prompts similares, armazene em cache as respostas de IA. Um cache Redis com TTL de 24h reduz consideravelmente os custos sem impactar a qualidade.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Monitore os custos</h3>
                <p className="text-sm text-indigo-300">Rastreie o consumo de créditos por usuário e por funcionalidade. As APIs de IA podem ser caras se não forem otimizadas.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusão</h2>
            <p>
              Em 6 etapas simples, você integrou a IA no seu SaaS. Geração de conteúdo, SEO automatizado e geração de código agora são acessíveis aos seus usuários. Tudo em menos de 30 minutos.
            </p>
            <p>
              NeuraAPI simplifica essa integração: uma única chave API, um SDK TypeScript, endpoints documentados. Você se concentra no seu produto, nós gerenciamos a infraestrutura de IA.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Pronto para integrar a IA?
            </h3>
            <p className="mt-3 text-indigo-200">
              Obtenha sua chave API gratuita e comece a construir em minutos.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Começar grátis
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Ler a documentação
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
