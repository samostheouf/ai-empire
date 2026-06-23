import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Comparaison des providers IA gratuits : Groq vs Gemini vs OpenAI",
  description: "Comparaison honnête et détaillée des providers IA gratuits pour développeurs. Performances, prix, limites et cas d'usage.",
  path: '/blog/comparaison-providers-ia-gratuits',
  type: 'article',
  keywords: ['Groq', 'Gemini', 'OpenAI', 'IA gratuite', 'comparaison', 'providers IA', 'développeur web', 'API ia'],
  publishedTime: '2024-06-20',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function ComparaisonProvidersIaPage() {
  const articleSchema = generateArticleSchema({
    title: 'Comparaison des providers IA gratuits : Groq vs Gemini vs OpenAI',
    description: 'Comparaison honnête des providers IA gratuits pour développeurs.',
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Comparaison providers IA', path: '/blog/comparaison-providers-ia-gratuits' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Comparaison providers IA', href: '/blog/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Comparaison
            </span>
            <span className="text-sm text-indigo-400">20 Juin 2024</span>
            <span className="text-sm text-indigo-400">15 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Comparaison des providers IA gratuits : Groq vs Gemini vs OpenAI
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/comparaison-providers-ia-gratuits`} title="Comparaison des providers IA gratuits" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Choisir le bon provider IA est une décision critique pour les développeurs. Les offres gratuites permettent de tester sans risque financier, mais chaque provider a ses forces et faiblesses. Voici une comparaison honnête basée sur des tests réels.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Méthodologie</h3>
              <p className="text-sm text-indigo-300">
                Cette comparaison est basée sur des tests effectués en décembre 2024. Les prix et les limites des tiers offerts peuvent changer. Nous avons testé chaque provider avec les mêmes prompts pour comparer les résultats.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Vue d&apos;ensemble</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-left text-indigo-400 font-semibold">Critère</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Tier gratuit</td>
                    <td className="py-3 text-center">Oui</td>
                    <td className="py-3 text-center">Oui</td>
                    <td className="py-3 text-center">Limité</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Modèles disponibles</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Vitesse</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Très rapide</td>
                    <td className="py-3 text-center">Rapide</td>
                    <td className="py-3 text-center">Moyenne</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Qualité (prompt moyen)</td>
                    <td className="py-3 text-center">Bonne</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Très bonne</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Excellente</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Contexte (tokens)</td>
                    <td className="py-3 text-center">128K</td>
                    <td className="py-3 text-center text-green-400 font-semibold">1M</td>
                    <td className="py-3 text-center">128K</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Function calling</td>
                    <td className="py-3 text-center">Oui</td>
                    <td className="py-3 text-center">Oui</td>
                    <td className="py-3 text-center">Oui</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Vision</td>
                    <td className="py-3 text-center text-red-400">Non</td>
                    <td className="py-3 text-center text-green-400">Oui</td>
                    <td className="py-3 text-center text-green-400">Oui</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Langages supportés</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Groq — La vitesse comme avantage</h2>
            <p>
              Groq se distingue par sa vitesse exceptionnelle. Les réponses sont quasi-instantanées, ce qui en fait le provider idéal pour les applications nécessitant un retour rapide : chatbots, autocomplete, suggestions en temps réel.
            </p>
            <p>
              <strong className="text-white">Points forts :</strong> Vitesse impressionnante (jusqu&apos;à 500 tokens/seconde), API compatible OpenAI, modèle Llama 3.3 70B performant, tier gratuit généreux.
            </p>
            <p>
              <strong className="text-white">Points faibles :</strong> Pas de vision, modèles limités à ceux de Meta/Mistral, moins performant que GPT-4 sur des tâches complexes.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Exemple avec Groq (API compatible OpenAI)
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'Bonjour' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini — Le géant de Google</h2>
            <p>
              Google Gemini offre un tier gratuit avec un contexte de 1 million de tokens, ce qui est inégalé. La capacité à traiter de très longs documents en fait un choix intéressant pour l&apos;analyse de données et la recherche documentaire.
            </p>
            <p>
              <strong className="text-white">Points forts :</strong> Contexte million de tokens, vision intégrée, performance solide, SDK officiels pour plusieurs langages, intégration native avec l&apos;écosystème Google.
            </p>
            <p>
              <strong className="text-white">Points faibles :</strong> API parfois instable, documentation parfois incomplète, latence plus élevée que Groq, fonction calling moins fiable.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Exemple avec Google Gemini
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('Explique le machine learning')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI — La référence</h2>
            <p>
              OpenAI reste la référence en matière de qualité de réponse. GPT-4o est le modèle le plus performant disponible, mais le tier gratuit est très limité. Le GPT-4o mini offre un bon compromis qualité/prix.
            </p>
            <p>
              <strong className="text-white">Points forts :</strong> Meilleure qualité de réponse, écosystème mature, documentation excellente, large communauté, function calling fiable, vision et audio.
            </p>
            <p>
              <strong className="text-white">Points faibles :</strong> Tier gratuit quasi inexistant, GPT-4o coûteux, latence variable, dépendance à un seul fournisseur.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Exemple avec OpenAI
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'Bonjour' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Notre recommandation</h2>
            <p>
              Il n&apos;y a pas de provider universellement meilleur. Le choix dépend de votre cas d&apos;usage :
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Pour la vitesse et le coût</h3>
                <p className="text-sm text-indigo-300">Groq est imbattable. La vitesse de réponse et le tier gratuit en font le choix idéal pour les prototypes et les applications temps réel.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Pour les documents longs</h3>
                <p className="text-sm text-indigo-300">Gemini avec son contexte de 1M tokens est le seul choix viable pour analyser de très longs documents ou des piles de données.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Pour la qualité maximale</h3>
                <p className="text-sm text-indigo-300">GPT-4o reste le meilleur modèle. Si la qualité est primordiale et que le budget le permet, c&apos;est le choix sûr.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Pour simplifier le tout</h3>
                <p className="text-sm text-indigo-300">NeuraAPI unifie Groq et OpenAI derrière une seule API. Vous changez de provider sans modifier votre code.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
            <p>
              Chaque provider a sa place. Groq domine la vitesse, Gemini excelle sur les documents longs, OpenAI mène sur la qualité. L&apos;approche la plus pragmatique est de commencer par le provider le mieux adapté à votre cas d&apos;usage, puis d&apos;évaluer si un changement est nécessaire au fil de la croissance.
            </p>
            <p>
              Avec NeuraAPI, vous n&apos;avez pas à choisir. Une seule clé API, accès à plusieurs providers, facturation unifiée. Testez不同的 providers et trouvez celui qui correspond à vos besoins.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Essayez NeuraAPI
            </h3>
            <p className="mt-3 text-indigo-200">
              Accédez à Groq et OpenAI via une seule API. 100 crédits gratuits.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Commencer gratuitement
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Lire la doc
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
