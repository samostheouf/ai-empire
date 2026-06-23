import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Como integrar uma API de IA no Next.js (guia completo 2026)",
  description: "Tutorial prático: integre uma API de IA (GPT, Groq, NeuraAPI) no seu projeto Next.js 14. Exemplos de código, SDK TypeScript, boas práticas.",
  path: '/blog/pt/api-ia-nextjs',
  type: 'article',
  keywords: ['API IA', 'Next.js', 'SDK TypeScript', 'integração IA', 'template next.js', 'desenvolvedor web'],
  publishedTime: '2026-01-15',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Como integrar uma API de IA no Next.js (guia completo 2026)',
  description: 'Tutorial prático: integre uma API de IA no seu projeto Next.js 14 com SDK TypeScript.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-01-15',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/pt/api-ia-nextjs',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function BlogApiIaNextjs() {
  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/pt' }, { name: 'API IA Next.js', href: '/blog/pt/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutorial
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 15 de janeiro de 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8 min de leitura</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Como integrar uma API de IA no seu projeto Next.js
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/pt/api-ia-nextjs`} title="Como integrar uma API de IA no Next.js" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            A inteligência artificial não é mais reservada para grandes empresas. Hoje,
            qualquer desenvolvedor pode integrar capacidades de IA — geração de texto, análise de código,
            otimização SEO — na sua aplicação Next.js em apenas alguns minutos. Neste guia, veremos
            como conectar uma API de IA a um projeto Next.js 14 App Router, da configuração inicial ao deploy em produção.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Por que Next.js para uma aplicação de IA?</h2>
          <p>
            O Next.js 14 oferece vantagens concretas para aplicações de IA:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong>: chamadas API são feitas no lado do servidor, chaves API nunca expostas ao cliente</li>
            <li><strong className="text-white">Route Handlers</strong>: crie endpoints API nativos sem um servidor Express separado</li>
            <li><strong className="text-white">Streaming</strong>: exiba respostas de IA em tempo real com <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code></li>
            <li><strong className="text-white">Edge Runtime</strong>: execute chamadas de IA no edge para latências mínimas</li>
            <li><strong className="text-white">Middleware</strong>: proteja suas rotas e gerencie a autenticação antes de cada requisição</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Passo 1: Escolher e instalar o SDK</h2>
          <p>
            O primeiro passo é escolher um provedor de API de IA e instalar seu SDK. Aqui estão as principais opções em 2026:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong>: API unificada com 8+ endpoints, SDK TypeScript nativo, plano gratuito disponível</li>
            <li><strong className="text-white">OpenAI</strong>: o líder histórico, modelos GPT-4o e GPT-4.1</li>
            <li><strong className="text-white">Groq</strong>: inferência ultra-rápida em modelos open source (Llama, Mixtral)</li>
            <li><strong className="text-white">Anthropic</strong>: Claude, especializado em análise de texto longo</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Instalar o SDK NeuraAPI
npm install @neuraapi/sdk

# Variáveis de ambiente (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Passo 2: Configurar o cliente do lado do servidor</h2>
          <p>
            Crie um arquivo <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code> para inicializar o cliente:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/neura.ts
import { NeuraAPI } from '@neuraapi/sdk'

const neurapi = new NeuraAPI({
  apiKey: process.env.NEURAPI_KEY!,
})

export default neurapi`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Passo 3: Criar um endpoint API</h2>
          <p>
            Use os Route Handlers do Next.js para criar um endpoint que receberá as requisições do cliente:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'pt' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: 'O prompt deve conter pelo menos 10 caracteres' },
      { status: 400 }
    )
  }

  try {
    const result = await neurapi.generate({
      prompt,
      language,
      maxTokens: 2048,
    })

    return NextResponse.json({
      content: result.text,
      tokensUsed: result.usage.totalTokens,
      model: result.model,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro durante a geração' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Usar os outros endpoints de IA</h2>
          <p>
            A NeuraAPI oferece 8+ endpoints de IA. Aqui está como usar alguns dos mais úteis:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Otimização SEO
const seoResult = await neurapi.seo({
  url: 'https://meusite.com/pagina',
  keywords: ['next.js', 'saas', 'template'],
})

// Geração de código
const codeResult = await neurapi.code({
  prompt: 'Criar um componente React para exibir uma tabela',
  language: 'typescript',
})

// Análise de sentimento
const sentimentResult = await neurapi.sentiment({
  text: 'Este produto é incrível, recomendo!',
})

// Chatbot contextual
const chatResult = await neurapi.chat({
  message: 'Como fazer deploy do meu app na Vercel?',
  context: 'Você é um assistente técnico Next.js',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Boas práticas em produção</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Valide sempre as entradas</strong>: use Zod para validar prompts do lado do servidor</li>
            <li><strong className="text-white">Gerencie erros</strong>: implemente retry com backoff exponencial</li>
            <li><strong className="text-white">Cacheie respostas</strong>: use Redis ou cache do Next.js para prompts idênticos</li>
            <li><strong className="text-white">Rate limiting</strong>: limite o número de requisições por usuário com middleware</li>
            <li><strong className="text-white">Monitoramento</strong>: rastreie o uso com analytics integrados</li>
            <li><strong className="text-white">Custos</strong>: monitore o consumo de tokens para respeitar seu orçamento</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Precisa de um ponto de partida?</h3>
            <p className="text-indigo-200/70 mb-4">
              Nosso template <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> já integra
              autenticação, dashboard e faturamento. Você só precisa adicionar sua lógica de IA.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Ver preços →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusão</h2>
          <p>
            Integrar uma API de IA no Next.js tornou-se um processo simples e estruturado. Com o SDK certo,
            alguns arquivos de configuração e os Route Handlers, você pode oferecer capacidades de IA
            aos seus usuários em apenas algumas horas. Os <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">templates premium da NeuraAPI</Link> vão
            ainda mais longe, fornecendo uma base pronta para produção.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Artigos relacionados</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Criar um SaaS em 48h com Next.js e Stripe
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Templates Next.js premium: como escolher o certo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
