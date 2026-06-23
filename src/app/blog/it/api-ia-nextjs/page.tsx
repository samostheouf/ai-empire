import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Come integrare un'API IA in Next.js (guida completa 2026)",
  description: "Tutorial pratico: integrate un'API IA (GPT, Groq, NeuraAPI) nel vostro progetto Next.js 14. Esempi di codice, SDK TypeScript, best practice.",
  path: '/blog/it/api-ia-nextjs',
  type: 'article',
  keywords: ['API IA', 'Next.js', 'SDK TypeScript', 'integrazione IA', 'template next.js', 'sviluppatore web'],
  publishedTime: '2026-01-15',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: "Come integrare un'API IA in Next.js (guida completa 2026)",
  description: "Tutorial pratico: integrate un'API IA nel vostro progetto Next.js 14 con SDK TypeScript.",
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-01-15',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/it/api-ia-nextjs',
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/it' }, { name: 'API IA Next.js', href: '/blog/it/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutorial
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 15 gennaio 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8 min di lettura</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Come integrare un'API IA nel vostro progetto Next.js
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/it/api-ia-nextjs`} title="Come integrare un'API IA in Next.js" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            L'intelligenza artificiale non è più riservata alle grandi aziende. Oggi,
            qualsiasi sviluppatore può integrare capacità IA — generazione di testo, analisi del codice,
            ottimizzazione SEO — nella propria applicazione Next.js in pochi minuti. In questa guida, vedremo
            come connettere un'API IA a un progetto Next.js 14 App Router, dalla configurazione iniziale al deployment in produzione.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Perché Next.js per un'applicazione IA?</h2>
          <p>
            Next.js 14 offre vantaggi concreti per le applicazioni IA:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong>: le chiamate API avvengono lato server, le chiavi API non vengono mai esposte al client</li>
            <li><strong className="text-white">Route Handlers</strong>: create endpoint API nativi senza un server Express separato</li>
            <li><strong className="text-white">Streaming</strong>: visualizzate le risposte IA in tempo reale con <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code></li>
            <li><strong className="text-white">Edge Runtime</strong>: eseguite chiamate IA all'edge per latenze minime</li>
            <li><strong className="text-white">Middleware</strong>: proteggete le vostre route e gestite l'autenticazione prima di ogni richiesta</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Passo 1: Scegliere e installare l'SDK</h2>
          <p>
            Il primo passo è scegliere un fornitore di API IA e installare il suo SDK. Ecco le principali opzioni nel 2026:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong>: API unificata con 8+ endpoint, SDK TypeScript nativo, piano gratuito disponibile</li>
            <li><strong className="text-white">OpenAI</strong>: il leader storico, modelli GPT-4o e GPT-4.1</li>
            <li><strong className="text-white">Groq</strong>: inferenza ultra-veloce su modelli open source (Llama, Mixtral)</li>
            <li><strong className="text-white">Anthropic</strong>: Claude, specializzato nell'analisi di testi lunghi</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Installare l'SDK NeuraAPI
npm install @neuraapi/sdk

# Variabili d'ambiente (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Passo 2: Configurare il client lato server</h2>
          <p>
            Create un file <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code> per inizializzare il client:
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

          <h2 className="text-2xl font-bold text-white mt-12">Passo 3: Creare un endpoint API</h2>
          <p>
            Utilizzate i Route Handlers di Next.js per creare un endpoint che riceverà le richieste del client:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'it' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: 'Il prompt deve contenere almeno 10 caratteri' },
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
      { error: 'Errore durante la generazione' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Utilizzare gli altri endpoint IA</h2>
          <p>
            NeuraAPI offre 8+ endpoint IA. Ecco come utilizzare alcuni dei più utili:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Ottimizzazione SEO
const seoResult = await neurapi.seo({
  url: 'https://miosito.com/pagina',
  keywords: ['next.js', 'saas', 'template'],
})

// Generazione di codice
const codeResult = await neurapi.code({
  prompt: 'Crea un componente React per visualizzare una tabella',
  language: 'typescript',
})

// Analisi del sentimento
const sentimentResult = await neurapi.sentiment({
  text: 'Questo prodotto è incredibile, lo consiglio!',
})

// Chatbot contestuale
const chatResult = await neurapi.chat({
  message: 'Come deployare la mia app su Vercel?',
  context: 'Sei un assistente tecnico Next.js',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Best practice in produzione</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Validate sempre gli input</strong>: utilizzate Zod per validare i prompt lato server</li>
            <li><strong className="text-white">Gestite gli errori</strong>: implementate retry con backoff esponenziale</li>
            <li><strong className="text-white">Mettete in cache le risposte</strong>: utilizzate Redis o la cache di Next.js per prompt identici</li>
            <li><strong className="text-white">Rate limiting</strong>: limitate il numero di richieste per utente con middleware</li>
            <li><strong className="text-white">Monitoring</strong>: tracciate l'utilizzo con le analytics integrate</li>
            <li><strong className="text-white">Costi</strong>: monitorate il consumo di token per rispettare il vostro budget</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Avete bisogno di un punto di partenza?</h3>
            <p className="text-indigo-200/70 mb-4">
              Il nostro template <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> integra già
              autenticazione, dashboard e fatturazione. Dovete solo aggiungere la vostra logica IA.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Visualizza prezzi →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusione</h2>
          <p>
            Integrare un'API IA in Next.js è diventato un processo semplice e strutturato. Con l'SDK giusto,
            qualche file di configurazione e i Route Handlers, potete offrire capacità IA
            ai vostri utenti in poche ore. I <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">template premium di NeuraAPI</Link> vanno
            ancora più lontano fornendovi una base pronta per la produzione.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articoli correlati</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Creare un SaaS in 48h con Next.js e Stripe
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Template Next.js premium: come scegliere quello giusto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
