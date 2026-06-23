import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Vergleich kostenloser KI-Anbieter: Groq vs Gemini vs OpenAI",
  description: "Ehrlicher und detaillierter Vergleich kostenloser KI-Anbieter für Entwickler. Leistung, Preise, Grenzen und Anwendungsfälle.",
  path: '/blog/de/comparaison-providers-ia-gratuits',
  type: 'article',
  keywords: ['Groq', 'Gemini', 'OpenAI', 'kostenlose KI', 'Vergleich', 'KI-Anbieter', 'Webentwickler', 'KI-API'],
  publishedTime: '2024-06-20',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Vergleich kostenloser KI-Anbieter: Groq vs Gemini vs OpenAI',
  description: 'Ehrlicher Vergleich kostenloser KI-Anbieter für Entwickler.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-20',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/de/comparaison-providers-ia-gratuits',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function ComparaisonProvidersIaPage() {
  const articleSchema = generateArticleSchema({
    title: 'Vergleich kostenloser KI-Anbieter: Groq vs Gemini vs OpenAI',
    description: 'Ehrlicher Vergleich kostenloser KI-Anbieter für Entwickler.',
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/de' },
      { name: 'KI-Anbieter Vergleich', path: '/blog/de/comparaison-providers-ia-gratuits' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/de' }, { name: 'KI-Anbieter Vergleich', href: '/blog/de/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Vergleich
            </span>
            <span className="text-sm text-indigo-400">20. Juni 2024</span>
            <span className="text-sm text-indigo-400">15 Min. Lesezeit</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Vergleich kostenloser KI-Anbieter: Groq vs Gemini vs OpenAI
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/de/comparaison-providers-ia-gratuits`} title="Vergleich kostenloser KI-Anbieter" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Die Wahl des richtigen KI-Anbieters ist eine kritische Entscheidung für Entwickler. Kostenlose Angebote ermöglichen das Testen ohne finanzielles Risiko, aber jeder Anbieter hat seine Stärken und Schwächen. Hier ist ein ehrlicher Vergleich basierend auf realen Tests.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Methodik</h3>
              <p className="text-sm text-indigo-300">
                Dieser Vergleich basiert auf Tests, die im Dezember 2024 durchgeführt wurden. Preise und Grenzen des kostenlosen Tieres können sich ändern. Wir haben jeden Anbieter mit denselben Prompts getestet, um die Ergebnisse zu vergleichen.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Übersicht</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-left text-indigo-400 font-semibold">Kriterium</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Kostenloses Tier</td>
                    <td className="py-3 text-center">Ja</td>
                    <td className="py-3 text-center">Ja</td>
                    <td className="py-3 text-center">Begrenzt</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Verfügbare Modelle</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Geschwindigkeit</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Sehr schnell</td>
                    <td className="py-3 text-center">Schnell</td>
                    <td className="py-3 text-center">Durchschnittlich</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Qualität (durchschn. Prompt)</td>
                    <td className="py-3 text-center">Gut</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Sehr gut</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Ausgezeichnet</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Kontext (Tokens)</td>
                    <td className="py-3 text-center">128K</td>
                    <td className="py-3 text-center text-green-400 font-semibold">1M</td>
                    <td className="py-3 text-center">128K</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Function calling</td>
                    <td className="py-3 text-center">Ja</td>
                    <td className="py-3 text-center">Ja</td>
                    <td className="py-3 text-center">Ja</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Vision</td>
                    <td className="py-3 text-center text-red-400">Nein</td>
                    <td className="py-3 text-center text-green-400">Ja</td>
                    <td className="py-3 text-center text-green-400">Ja</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Unterstützte Sprachen</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Groq — Geschwindigkeit als Vorteil</h2>
            <p>
              Groq zeichnet sich durch seine außergewöhnliche Geschwindigkeit aus. Antworten sind nahezu augenblicklich, was es zum idealen Anbieter für Anwendungen macht, die schnelles Feedback erfordern: Chatbots, Autovervollständigung, Echtzeit-Vorschläge.
            </p>
            <p>
              <strong className="text-white">Stärken:</strong> Beeindruckende Geschwindigkeit (bis zu 500 Tokens/Sekunde), OpenAI-kompatible API, leistungsstarkes Llama 3.3 70B-Modell, großzügiges kostenloses Tier.
            </p>
            <p>
              <strong className="text-white">Schwächen:</strong> Keine Vision, Modelle auf Meta/Mistral beschränkt, weniger leistungsstark als GPT-4 bei komplexen Aufgaben.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Beispiel mit Groq (OpenAI-kompatible API)
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'Hallo' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini — Der Gigant von Google</h2>
            <p>
              Google Gemini bietet ein kostenloses Tier mit einem Kontext von 1 Million Tokens, was einzigartig ist. Die Fähigkeit, sehr lange Dokumente zu verarbeiten, macht es zu einer interessanten Wahl für Datenanalyse und Dokumentenrecherche.
            </p>
            <p>
              <strong className="text-white">Stärken:</strong> Millionen-Token-Kontext, integrierte Vision, solide Leistung, offizielle SDKs für mehrere Sprachen, native Integration mit dem Google-Ökosystem.
            </p>
            <p>
              <strong className="text-white">Schwächen:</strong> Manchmal instabile API, manchmal unvollständige Dokumentation, höhere Latenz als Groq, weniger zuverlässiges function calling.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Beispiel mit Google Gemini
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('Erkläre maschinelles Lernen')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI — Der Referenzanbieter</h2>
            <p>
              OpenAI bleibt die Referenz für Antwortqualität. GPT-4o ist das leistungsfähigste verfügbare Modell, aber das kostenlose Tier ist sehr begrenzt. GPT-4o mini bietet ein gutes Qualitäts-/Preisverhältnis.
            </p>
            <p>
              <strong className="text-white">Stärken:</strong> Beste Antwortqualität, ausgereiftes Ökosystem, ausgezeichnete Dokumentation, große Community, zuverlässiges function calling, Vision und Audio.
            </p>
            <p>
              <strong className="text-white">Schwächen:</strong> Kaum vorhandenes kostenloses Tier, teures GPT-4o, variable Latenz, Abhängigkeit von einem einzigen Anbieter.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Beispiel mit OpenAI
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'Hallo' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Unsere Empfehlung</h2>
            <p>
              Es gibt keinen universell besseren Anbieter. Die Wahl hängt von Ihrem Anwendungsfall ab:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Für Geschwindigkeit und Kosten</h3>
                <p className="text-sm text-indigo-300">Groq ist unschlagbar. Antwortgeschwindigkeit und kostenloses Tier machen es zur idealen Wahl für Prototypen und Echtzeit-Anwendungen.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Für lange Dokumente</h3>
                <p className="text-sm text-indigo-300">Gemini mit seinem 1M-Token-Kontext ist die einzige praktikable Wahl für die Analyse sehr langer Dokumente oder Datenstapel.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Für maximale Qualität</h3>
                <p className="text-sm text-indigo-300">GPT-4o bleibt das beste Modell. Wenn Qualität oberste Priorität hat und das Budget es erlaubt, ist es die sichere Wahl.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Um alles zu vereinfachen</h3>
                <p className="text-sm text-indigo-300">NeuraAPI vereint Groq und OpenAI hinter einer einzigen API. Wechseln Sie den Anbieter, ohne Ihren Code zu ändern.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Fazit</h2>
            <p>
              Jeder Anbieter hat seinen Platz. Groq dominiert die Geschwindigkeit, Gemini überzeugt bei langen Dokumenten, OpenAI führt bei der Qualität. Der pragmatischste Ansatz ist, mit dem Anbieter zu beginnen, der am besten zu Ihrem Anwendungsfall passt, und dann zu bewerten, ob ein Wechsel während des Wachstums notwendig ist.
            </p>
            <p>
              Mit NeuraAPI müssen Sie nicht wählen. Ein einziger API-Schlüssel, Zugang zu mehreren Anbieter, einheitliche Abrechnung. Testen Sie verschiedene Anbieter und finden Sie denjenigen, der Ihren Bedürfnissen entspricht.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Testen Sie NeuraAPI
            </h3>
            <p className="mt-3 text-indigo-200">
              Greifen Sie über eine einzige API auf Groq und OpenAI zu. 100 kostenlose Credits.
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