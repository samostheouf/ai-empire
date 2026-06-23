import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Cómo integrar una API de IA en Next.js (guía completa 2026)",
  description: "Tutorial práctico: integre una API de IA (GPT, Groq, NeuraAPI) en su proyecto Next.js 14. Ejemplos de código, SDK TypeScript, mejores prácticas.",
  path: '/blog/es/api-ia-nextjs',
  type: 'article',
  keywords: ['API IA', 'Next.js', 'SDK TypeScript', 'integración IA', 'plantilla next.js', 'desarrollador web'],
  publishedTime: '2026-01-15',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Cómo integrar una API de IA en Next.js (guía completa 2026)',
  description: 'Tutorial práctico: integre una API de IA en su proyecto Next.js 14 con SDK TypeScript.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-01-15',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/es/api-ia-nextjs',
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/es' }, { name: 'API IA Next.js', href: '/blog/es/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutorial
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 15 de enero de 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8 min de lectura</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Cómo integrar una API de IA en su proyecto Next.js
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/es/api-ia-nextjs`} title="Cómo integrar una API de IA en Next.js" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            La inteligencia artificial ya no está reservada para las grandes empresas. Hoy en día,
            cualquier desarrollador puede integrar capacidades de IA — generación de texto, análisis de código,
            optimización SEO — en su aplicación Next.js en solo unos minutos. En esta guía, veremos
            cómo conectar una API de IA a un proyecto Next.js 14 App Router, desde la configuración inicial hasta el despliegue en producción.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">¿Por qué Next.js para una aplicación de IA?</h2>
          <p>
            Next.js 14 ofrece ventajas concretas para las aplicaciones de IA:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong>: las llamadas API se hacen del lado del servidor, las claves API nunca se exponen al cliente</li>
            <li><strong className="text-white">Route Handlers</strong>: cree endpoints API nativos sin un servidor Express separado</li>
            <li><strong className="text-white">Streaming</strong>: muestre las respuestas de IA en tiempo real con <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code></li>
            <li><strong className="text-white">Edge Runtime</strong>: ejecute llamadas de IA en el edge para latencias mínimas</li>
            <li><strong className="text-white">Middleware</strong>: proteja sus rutas y gestione la autenticación antes de cada solicitud</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Paso 1: Elegir e instalar el SDK</h2>
          <p>
            El primer paso es elegir un proveedor de API de IA e instalar su SDK. Aquí están las principales opciones en 2026:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong>: API unificada con 8+ endpoints, SDK TypeScript nativo, plan gratuito disponible</li>
            <li><strong className="text-white">OpenAI</strong>: el líder histórico, modelos GPT-4o y GPT-4.1</li>
            <li><strong className="text-white">Groq</strong>: inferencia ultrarrápida en modelos de código abierto (Llama, Mixtral)</li>
            <li><strong className="text-white">Anthropic</strong>: Claude, especializado en análisis de texto largo</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Instalar el SDK de NeuraAPI
npm install @neuraapi/sdk

# Variables de entorno (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Paso 2: Configurar el cliente del lado del servidor</h2>
          <p>
            Cree un archivo <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code> para inicializar el cliente:
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

          <h2 className="text-2xl font-bold text-white mt-12">Paso 3: Crear un endpoint API</h2>
          <p>
            Use los Route Handlers de Next.js para crear un endpoint que recibirá las solicitudes del cliente:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'es' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: 'El prompt debe contener al menos 10 caracteres' },
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
      { error: 'Error durante la generación' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Usar los otros endpoints de IA</h2>
          <p>
            NeuraAPI ofrece 8+ endpoints de IA. Aquí está cómo usar algunos de los más útiles:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Optimización SEO
const seoResult = await neurapi.seo({
  url: 'https://misitio.com/pagina',
  keywords: ['next.js', 'saas', 'plantilla'],
})

// Generación de código
const codeResult = await neurapi.code({
  prompt: 'Crear un componente React para mostrar una tabla',
  language: 'typescript',
})

// Análisis de sentimiento
const sentimentResult = await neurapi.sentiment({
  text: 'Este producto es increíble, ¡lo recomiendo!',
})

// Chatbot contextual
const chatResult = await neurapi.chat({
  message: '¿Cómo desplegar mi aplicación en Vercel?',
  context: 'Eres un asistente técnico de Next.js',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Mejores prácticas en producción</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Siempre valide las entradas</strong>: use Zod para validar los prompts del lado del servidor</li>
            <li><strong className="text-white">Gestione los errores</strong>: implemente reintentos con backoff exponencial</li>
            <li><strong className="text-white">Almacene en caché las respuestas</strong>: use Redis o el caché de Next.js para prompts idénticos</li>
            <li><strong className="text-white">Rate limiting</strong>: limite el número de solicitudes por usuario con middleware</li>
            <li><strong className="text-white">Monitoreo</strong>: rastree el uso con las analíticas integradas</li>
            <li><strong className="text-white">Costos</strong>: supervise el consumo de tokens para respetar su presupuesto</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">¿Necesita un punto de partida?</h3>
            <p className="text-indigo-200/70 mb-4">
              Nuestra plantilla <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> ya integra
              autenticación, panel de control y facturación. Solo necesita agregar su lógica de IA.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Ver tarifas →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusión</h2>
          <p>
            Integrar una API de IA en Next.js se ha convertido en un proceso simple y estructurado. Con el SDK adecuado,
            algunos archivos de configuración y los Route Handlers, puede ofrecer capacidades de IA
            a sus usuarios en solo unas horas. Las <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">plantillas premium de NeuraAPI</Link> van
            aún más lejos al proporcionarle una base lista para producción.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Artículos relacionados</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Crear un SaaS en 48h con Next.js y Stripe
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Plantillas Next.js premium: cómo elegir la correcta
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
