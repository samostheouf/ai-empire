import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Wie man eine KI-API in Next.js integriert (vollständiger Leitfaden 2026)",
  description: "Praktisches Tutorial: Integrieren Sie eine KI-API (GPT, Groq, NeuraAPI) in Ihr Next.js 14 Projekt. Code-Beispiele, TypeScript SDK, bewährte Vorgehensweisen.",
  path: '/blog/de/api-ia-nextjs',
  type: 'article',
  keywords: ['KI-API', 'Next.js', 'TypeScript SDK', 'KI-Integration', 'Next.js-Vorlage', 'Webentwickler'],
  publishedTime: '2026-01-15',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Wie man eine KI-API in Next.js integriert (vollständiger Leitfaden 2026)',
  description: 'Praktisches Tutorial: Integrieren Sie eine KI-API in Ihr Next.js 14 Projekt mit TypeScript SDK.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-01-15',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/de/api-ia-nextjs',
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/de' }, { name: 'KI-API Next.js', href: '/blog/de/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutorial
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 15. Januar 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8 Min. Lesezeit</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Wie man eine KI-API in Ihr Next.js-Projekt integriert
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/de/api-ia-nextjs`} title="Wie man eine KI-API in Next.js integriert" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Künstliche Intelligenz ist nicht mehr nur für große Unternehmen reserviert. Heute
            kann jeder Entwickler KI-Funktionen — Textgenerierung, Code-Analyse,
            SEO-Optimierung — in seine Next.js-Anwendung integrieren, und zwar in wenigen Minuten. In diesem Leitfaden zeigen wir,
            wie man eine KI-API mit einem Next.js 14 App Router-Projekt verbindet, von der Ersteinrichtung bis zur Produktionsbereitstellung.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Warum Next.js für eine KI-Anwendung?</h2>
          <p>
            Next.js 14 bietet konkrete Vorteile für KI-Anwendungen:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong>: API-Aufrufe erfolgen serverseitig, API-Schlüssel werden dem Client nie offengelegt</li>
            <li><strong className="text-white">Route Handlers</strong>: Erstellen Sie native API-Endpunkte ohne separaten Express-Server</li>
            <li><strong className="text-white">Streaming</strong>: Zeigen Sie KI-Antworten in Echtzeit mit <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code></li>
            <li><strong className="text-white">Edge Runtime</strong>: Führen Sie KI-Aufrufe am Edge für minimale Latenz aus</li>
            <li><strong className="text-white">Middleware</strong>: Schützen Sie Ihre Routen und verwalten Sie die Authentifizierung vor jeder Anfrage</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Schritt 1: SDK auswählen und installieren</h2>
          <p>
            Der erste Schritt ist die Auswahl eines KI-API-Anbieters und die Installation seines SDK. Hier sind die Hauptoptionen im Jahr 2026:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong>: einheitliche API mit 8+ Endpunkten, natives TypeScript SDK, kostenloser Plan verfügbar</li>
            <li><strong className="text-white">OpenAI</strong>: der historische Marktführer, Modelle GPT-4o und GPT-4.1</li>
            <li><strong className="text-white">Groq</strong>: ultrarasche Inferenz auf Open-Source-Modellen (Llama, Mixtral)</li>
            <li><strong className="text-white">Anthropic</strong>: Claude, spezialisiert auf lange Textanalyse</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# NeuraAPI SDK installieren
npm install @neuraapi/sdk

# Umgebungsvariablen (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Schritt 2: Serverseitigen Client konfigurieren</h2>
          <p>
            Erstellen Sie eine Datei <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code> um den Client zu initialisieren:
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

          <h2 className="text-2xl font-bold text-white mt-12">Schritt 3: API-Endpunkt erstellen</h2>
          <p>
            Verwenden Sie die Next.js Route Handlers, um einen Endpunkt zu erstellen, der Client-Anfragen empfängt:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'de' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: 'Der Prompt muss mindestens 10 Zeichen enthalten' },
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
      { error: 'Fehler bei der Generierung' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Andere KI-Endpunkte verwenden</h2>
          <p>
            NeuraAPI bietet 8+ KI-Endpunkte. So verwenden Sie einige der nützlichsten:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// SEO-Optimierung
const seoResult = await neurapi.seo({
  url: 'https://meineseite.de/seite',
  keywords: ['next.js', 'saas', 'vorlage'],
})

// Code-Generierung
const codeResult = await neurapi.code({
  prompt: 'Erstellen Sie eine React-Komponente zum Anzeigen einer Tabelle',
  language: 'typescript',
})

// Sentiment-Analyse
const sentimentResult = await neurapi.sentiment({
  text: 'Dieses Produkt ist unglaublich, ich empfehle es!',
})

// Kontextualer Chatbot
const chatResult = await neurapi.chat({
  message: 'Wie deploye ich meine App auf Vercel?',
  context: 'Sie sind ein Next.js-Technischer Assistent',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Best Practices in der Produktion</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Validieren Sie immer Eingaben</strong>: Verwenden Sie Zod zur Validierung von Prompts serverseitig</li>
            <li><strong className="text-white">Fehlerbehandlung</strong>: Implementieren Sie Wiederholungen mit exponentiellem Backoff</li>
            <li><strong className="text-white">Cachen Sie Antworten</strong>: Verwenden Sie Redis oder Next.js Cache für identische Prompts</li>
            <li><strong className="text-white">Rate Limiting</strong>: Begrenzen Sie die Anzahl der Anfragen pro Benutzer mit Middleware</li>
            <li><strong className="text-white">Monitoring</strong>: Verfolgen Sie die Nutzung mit integrierten Analytics</li>
            <li><strong className="text-white">Kosten</strong>: Überwachen Sie den Token-Verbrauch, um Ihr Budget einzuhalten</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Benötigen Sie einen Ausgangspunkt?</h3>
            <p className="text-indigo-200/70 mb-4">
              Unsere Vorlage <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> integriert
              bereits Authentifizierung, Dashboard und Abrechnung. Sie müssen nur Ihre KI-Logik hinzufügen.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Preise ansehen →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Fazit</h2>
          <p>
            Die Integration einer KI-API in Next.js ist zu einem einfachen und strukturierten Prozess geworden. Mit dem richtigen SDK,
            ein paar Konfigurationsdateien und den Route Handlers können Sie KI-Funktionen
            Ihren Benutzern in wenigen Stunden bieten. Die <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">Premium-Vorlagen von NeuraAPI</Link> gehen
            noch weiter, indem sie Ihnen eine produktionsbereite Basis bieten.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Verwandte Artikel</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Ein SaaS in 48h mit Next.js und Stripe erstellen
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Premium Next.js-Vorlagen: Wie wählt man die richtige aus
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
