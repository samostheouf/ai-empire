import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Confronto provider IA gratuiti: Groq vs Gemini vs OpenAI",
  description: "Confronto onesto e dettagliato dei provider IA gratuiti per sviluppatori. Prestazioni, prezzi, limiti e casi d'uso.",
  path: '/blog/it/comparaison-providers-ia-gratuits',
  type: 'article',
  keywords: ['Groq', 'Gemini', 'OpenAI', 'IA gratuita', 'confronto', 'provider IA', 'sviluppatore web', 'API IA'],
  publishedTime: '2024-06-20',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Confronto provider IA gratuiti: Groq vs Gemini vs OpenAI',
  description: 'Confronto onesto dei provider IA gratuiti per sviluppatori.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-20',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/it/comparaison-providers-ia-gratuits',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function ComparaisonProvidersIaPage() {
  const articleSchema = generateArticleSchema({
    title: 'Confronto provider IA gratuiti: Groq vs Gemini vs OpenAI',
    description: 'Confronto onesto dei provider IA gratuiti per sviluppatori.',
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/it' },
      { name: 'Confronto provider IA', path: '/blog/it/comparaison-providers-ia-gratuits' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/it' }, { name: 'Confronto provider IA', href: '/blog/it/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Confronto
            </span>
            <span className="text-sm text-indigo-400">20 giugno 2024</span>
            <span className="text-sm text-indigo-400">15 min di lettura</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Confronto provider IA gratuiti: Groq vs Gemini vs OpenAI
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/it/comparaison-providers-ia-gratuits`} title="Confronto provider IA gratuiti" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Scegliere il provider IA giusto è una decisione critica per gli sviluppatori. Le offerte gratuite permettono di testare senza rischio finanziario, ma ogni provider ha i suoi punti di forza e di debolezza. Ecco un confronto onesto basato su test reali.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Metodologia</h3>
              <p className="text-sm text-indigo-300">
                Questo confronto è basato su test effettuati a dicembre 2024. I prezzi e i limiti del tier gratuito possono cambiare. Abbiamo testato ogni provider con gli stessi prompt per confrontare i risultati.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Panoramica</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-left text-indigo-400 font-semibold">Criterio</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Tier gratuito</td>
                    <td className="py-3 text-center">Sì</td>
                    <td className="py-3 text-center">Sì</td>
                    <td className="py-3 text-center">Limitato</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Modelli disponibili</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Velocità</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Molto veloce</td>
                    <td className="py-3 text-center">Veloce</td>
                    <td className="py-3 text-center">Media</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Qualità (prompt medio)</td>
                    <td className="py-3 text-center">Buona</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Molto buona</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Eccellente</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Contesto (token)</td>
                    <td className="py-3 text-center">128K</td>
                    <td className="py-3 text-center text-green-400 font-semibold">1M</td>
                    <td className="py-3 text-center">128K</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Function calling</td>
                    <td className="py-3 text-center">Sì</td>
                    <td className="py-3 text-center">Sì</td>
                    <td className="py-3 text-center">Sì</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Visione</td>
                    <td className="py-3 text-center text-red-400">No</td>
                    <td className="py-3 text-center text-green-400">Sì</td>
                    <td className="py-3 text-center text-green-400">Sì</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Lingue supportate</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Groq — La velocità come vantaggio</h2>
            <p>
              Groq si distingue per la sua velocità eccezionale. Le risposte sono quasi istantanee, rendendolo il provider ideale per le applicazioni che richiedono risposte rapide: chatbot, autocomplete, suggerimenti in tempo reale.
            </p>
            <p>
              <strong className="text-white">Punti di forza:</strong> Velocità impressionante (fino a 500 token/secondo), API compatibile con OpenAI, modello Llama 3.3 70B performante, tier gratuito generoso.
            </p>
            <p>
              <strong className="text-white">Punti deboli:</strong> Nessuna visione, modelli limitati a quelli di Meta/Mistral, meno performante di GPT-4 su compiti complessi.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Esempio con Groq (API compatibile OpenAI)
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'Ciao' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini — Il gigante di Google</h2>
            <p>
              Google Gemini offre un tier gratuito con un contesto di 1 milione di token, il che è ineguagliato. La capacità di elaborare documenti molto lunghi lo rende una scelta interessante per l&apos;analisi dei dati e la ricerca documentale.
            </p>
            <p>
              <strong className="text-white">Punti di forza:</strong> Contesto di milioni di token, visione integrata, prestazioni solide, SDK ufficiali per più lingue, integrazione nativa con l&apos;ecosistema Google.
            </p>
            <p>
              <strong className="text-white">Punti deboli:</strong> API a volte instabile, documentazione a volte incompleta, latenza più elevata di Groq, function calling meno affidabile.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Esempio con Google Gemini
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('Spiega il machine learning')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI — Il riferimento</h2>
            <p>
              OpenAI rimane il riferimento per la qualità delle risposte. GPT-4o è il modello più performante disponibile, ma il tier gratuito è molto limitato. GPT-4o mini offre un buon compromesso qualità/prezzo.
            </p>
            <p>
              <strong className="text-white">Punti di forza:</strong> Migliore qualità delle risposte, ecosistema maturo, documentazione eccellente, ampia community, function calling affidabile, visione e audio.
            </p>
            <p>
              <strong className="text-white">Punti deboli:</strong> Tier gratuito quasi inesistente, GPT-4o costoso, latenza variabile, dipendenza da un singolo fornitore.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Esempio con OpenAI
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'Ciao' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">La nostra raccomandazione</h2>
            <p>
              Non esiste un provider universalmente migliore. La scelta dipende dal vostro caso d&apos;uso:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Per la velocità e il costo</h3>
                <p className="text-sm text-indigo-300">Groq è imbattibile. La velocità di risposta e il tier gratuito lo rendono la scelta ideale per prototipi e applicazioni in tempo reale.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Per documenti lunghi</h3>
                <p className="text-sm text-indigo-300">Gemini con il suo contesto di 1M token è l&apos;unica scelta praticabile per analizzare documenti molto lunghi o pile di dati.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Per la massima qualità</h3>
                <p className="text-sm text-indigo-300">GPT-4o rimane il miglior modello. Se la qualità è fondamentale e il budget lo permette, è la scelta sicura.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Per semplificare tutto</h3>
                <p className="text-sm text-indigo-300">NeuraAPI unifica Groq e OpenAI dietro una singola API. Cambiate provider senza modificare il vostro codice.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusione</h2>
            <p>
              Ogni provider ha il suo posto. Groq domina la velocità, eccelle nei documenti lunghi, OpenAI guida nella qualità. L&apos;approccio più pragmatico è iniziare con il provider più adatto al vostro caso d&apos;uso, poi valutare se un cambiamento è necessario man mano che crescete.
            </p>
            <p>
              Con NeuraAPI, non dovete scegliere. Una singola chiave API, accesso a più provider, fatturazione unificata. Testate provider diversi e trovate quello che si adatta alle vostre esigenze.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Prova NeuraAPI
            </h3>
            <p className="mt-3 text-indigo-200">
              Accedi a Groq e OpenAI tramite una singola API. 100 crediti gratuiti.
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