import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const title = 'Groq vs OpenAI vs Gemini : comparatif dev'
const description = 'Comparatif Groq vs OpenAI vs Gemini pour développeurs : vitesse, qualité, prix, contexte, code. Choisissez le bon provider IA pour votre SaaS.'
const slug = 'groq-vs-openai-vs-gemini-comparatif-developpeurs'
const publishedTime = '2026-03-10'
const modifiedTime = '2026-07-30'

export function generateMetadata() {
  return genMeta({
    title,
    description,
    path: `/blog/${slug}`,
    type: 'article',
    keywords: [
      'Groq vs OpenAI vs Gemini',
      'comparatif API IA développeurs',
      'Groq Llama vitesse',
      'OpenAI GPT-4o prix',
      'Gemini contexte',
      'meilleure API IA SaaS 2026',
      'coût API IA par token',
      'choisir provider IA',
    ],
    publishedTime,
    modifiedTime,
  })
}

export default function Page() {
  const articleSchema = generateArticleSchema({
    title,
    description,
    slug,
    datePublished: publishedTime,
    dateModified: modifiedTime,
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Groq vs OpenAI vs Gemini', path: `/blog/${slug}` },
    ],
  })

  return (
    <div className="bg-indigo-950 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Groq vs OpenAI vs Gemini', href: `/blog/${slug}` }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Comparatif technique
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400">
              <Calendar className="w-4 h-4" /> 10 mars 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400">
              <Clock className="w-4 h-4" /> 15 min
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Groq vs OpenAI vs Gemini : le comparatif complet pour développeurs
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/${slug}`} title={title} />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Choisir son provider IA est une décision d&apos;architecture qui impacte la latence, la facture et la
              qualité produit pendant des années. En 2026, Groq (LPU, ultra-rapide), OpenAI (référence qualité) et Gemini
              (contexte massif, multimodal) dominent. Ce comparatif honnête présente tableaux, code pour les 3, cas
              d&apos;usage, recommandations et stratégie multi-provider via NeuraAPI.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">Méthodologie du comparatif</h2>
            <h3 className="text-xl font-semibold text-white mt-6">Tâches testées</h3>
            <ol className="list-decimal list-inside space-y-1 text-indigo-300">
              <li>Génération de texte court (email marketing, 200 tokens).</li>
              <li>Résumé de document long (5 000 tokens).</li>
              <li>Génération de code TypeScript.</li>
              <li>Chat conversationnel multi-tours (contexte 2 000 tokens).</li>
              <li>Classification de sentiment (batch 50 textes).</li>
            </ol>
            <h3 className="text-xl font-semibold text-white mt-6">Métriques mesurées</h3>
            <p>Latence p50 et p95 jusqu&apos;au premier token et total, coût par 1 000 requêtes, qualité notée sur 5 par 3 évaluateurs, taux d&apos;erreur et rate limits.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Conditions de test</h3>
            <p>Région Europe (Vercel fra1), même prompt, même température (0.7), même max_tokens, 30 itérations par tâche, médiane retenue.</p>

            <h2 className="text-2xl font-bold text-white mt-12">Tableau comparatif global</h2>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4 overflow-x-auto">
              <table className="w-full text-sm text-indigo-200">
                <thead>
                  <tr className="text-white">
                    <th className="text-left p-2">Critère</th>
                    <th className="text-left p-2">Groq</th>
                    <th className="text-left p-2">Gemini</th>
                    <th className="text-left p-2">OpenAI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2">Modèles phares</td><td className="p-2">Llama 3.3 70B, Mixtral</td><td className="p-2">Gemini 1.5 Flash/Pro, 2.0</td><td className="p-2">GPT-4o mini, GPT-4o</td></tr>
                  <tr><td className="p-2">Vitesse (p50 1er token)</td><td className="p-2">~120 ms</td><td className="p-2">~250 ms</td><td className="p-2">~400 ms</td></tr>
                  <tr><td className="p-2">Qualité texte</td><td className="p-2">Bonne</td><td className="p-2">Très bonne</td><td className="p-2">Excellente</td></tr>
                  <tr><td className="p-2">Contexte max</td><td className="p-2">128K</td><td className="p-2">1M (2M en 2.0)</td><td className="p-2">128K</td></tr>
                  <tr><td className="p-2">Vision</td><td className="p-2">Non</td><td className="p-2">Oui</td><td className="p-2">Oui</td></tr>
                  <tr><td className="p-2">Function calling</td><td className="p-2">Oui</td><td className="p-2">Oui</td><td className="p-2">Oui (le plus mature)</td></tr>
                  <tr><td className="p-2">Tier gratuit</td><td className="p-2">Oui (rate limits)</td><td className="p-2">Oui (généreux)</td><td className="p-2">Limité (crédits initiaux)</td></tr>
                  <tr><td className="p-2">Prix input (par 1M tokens)</td><td className="p-2">~0.59$ (Llama 70B)</td><td className="p-2">~0.075$ (Flash)</td><td className="p-2">~0.15$ (mini) / 2.5$ (4o)</td></tr>
                  <tr><td className="p-2">Prix output</td><td className="p-2">~0.79$</td><td className="p-2">~0.30$</td><td className="p-2">~0.60$ (mini) / 10$ (4o)</td></tr>
                  <tr><td className="p-2">SDK</td><td className="p-2">OpenAI-compatible</td><td className="p-2">SDK dédié</td><td className="p-2">SDK officiel</td></tr>
                </tbody>
              </table>
            </div>
            <p>Groq = vitesse et coût sur modèles open. Gemini = contexte et multimodal à bas coût. OpenAI = qualité et écosystème.</p>

            <h2 className="text-2xl font-bold text-white mt-12">Groq en détail</h2>
            <p>Groq utilise des LPU (Language Processing Units) → débit tokens/s record. Modèles hébergés : Llama 3.3 70B, Mixtral 8x7B, Gemma. API compatible OpenAI → migration triviale.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Forces</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Latence ultra-faible : idéal pour chat interactif, autocomplete, agents temps réel.</li>
              <li>Coût très compétitif sur Llama.</li>
              <li>Tier gratuit généreux pour prototyper.</li>
              <li>Streaming fluide.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6">Faiblesses</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Pas de vision native (selon modèle).</li>
              <li>Qualité en dessous de GPT-4o sur raisonnement complexe.</li>
              <li>Moins de modèles propriétaires frontier.</li>
              <li>Rate limits sur le tier gratuit.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6">Cas d&apos;usage idéaux</h3>
            <p>Chatbots temps réel, assistants inline, autocomplete code.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Exemple de code (Groq)</h3>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`import OpenAI from 'openai'
const groq = new OpenAI({ apiKey: process.env.GROQ_API_KEY, baseURL: 'https://api.groq.com/openai/v1' })
const res = await groq.chat.completions.create({ model: 'llama-3.3-70b-versatile', messages: [{ role: 'user', content: '...' }] })`}</pre>
            </div>
            <h3 className="text-xl font-semibold text-white mt-6">Pièges</h3>
            <p>Ne pas oublier baseURL. Gérer les 429 (retry avec backoff). Vérifier la disponibilité du modèle par région.</p>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI en détail</h2>
            <p>Référence du marché, GPT-4o / GPT-4o mini. Écosystème le plus mature : function calling, vision, audio, assistants API, fine-tuning.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Forces</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Qualité de raisonnement et d&apos;écriture la plus haute.</li>
              <li>Function calling robuste et bien documenté.</li>
              <li>Vision et audio natifs.</li>
              <li>Fine-tuning disponible.</li>
              <li>Documentation et communauté massives.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6">Faiblesses</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Coût élevé sur GPT-4o (output 10$/1M).</li>
              <li>Latence plus élevée.</li>
              <li>Tier gratuit très limité.</li>
              <li>Dépendance à un seul fournisseur (vendor lock-in).</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6">Cas d&apos;usage idéaux</h3>
            <p>Tâches complexes : code, analyse, rédaction premium, agents avec tools.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Exemple de code (OpenAI)</h3>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`import OpenAI from 'openai'
const openai = new OpenAI()
const res = await openai.chat.completions.create({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: '...' }] })`}</pre>
            </div>
            <h3 className="text-xl font-semibold text-white mt-6">Optimisation des coûts</h3>
            <p>Utiliser gpt-4o-mini par défaut, gpt-4o pour les tâches difficiles. max_tokens serré, prompt caching.</p>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini en détail</h2>
            <p>Google Gemini : 1.5 Flash, 1.5 Pro, 2.0. Point fort : contexte jusqu&apos;à 1M-2M tokens.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Forces</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Contexte massif : analyse de gros documents, codebases entières.</li>
              <li>Multimodal natif : texte, image, audio, vidéo.</li>
              <li>Coût très bas sur Flash.</li>
              <li>Tier gratuit généreux.</li>
              <li>Intégration Google Cloud / Vertex AI.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6">Faiblesses</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Qualité légèrement en dessous d&apos;OpenAI sur certains benchmarks.</li>
              <li>SDK moins standard (pas OpenAI-compatible nativement).</li>
              <li>Latence variable selon la charge.</li>
              <li>Quotas gratuits qui changent souvent.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6">Cas d&apos;usage idéaux</h3>
            <p>Résumé de documents longs, analyse de codebase, multimodal (images/PDF). Applications à gros volume à coût minimal.</p>
            <h3 className="text-xl font-semibold text-white mt-6">Exemple de code (Gemini)</h3>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`import { GoogleGenerativeAI } from '@google/generative-ai'
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
const res = await model.generateContent('Explique le machine learning')`}</pre>
            </div>
            <h3 className="text-xl font-semibold text-white mt-6">Pièges</h3>
            <p>Gérer les safety filters (blocage de contenu). Vérifier les quotas par minute. Attention à la taille du contexte facturée.</p>

            <h2 className="text-2xl font-bold text-white mt-12">Benchmarks par tâche</h2>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Email marketing (200 tokens) : Groq (vitesse) / OpenAI (qualité).</li>
              <li>Résumé document long (5 000 tokens) : Gemini (contexte).</li>
              <li>Génération de code TS : OpenAI (exactitude) ; Groq acceptable pour boilerplate.</li>
              <li>Chat multi-tours : Groq (latence perçue) pour UX ; OpenAI pour qualité.</li>
              <li>Classification batch : Gemini Flash (coût) ou Groq.</li>
            </ul>
            <p>Matrice décisionnelle : si vous avez besoin de X → choisissez Y (6 lignes de décision).</p>

            <h2 className="text-2xl font-bold text-white mt-12">Coûts détaillés et projection</h2>
            <p>Prix par 1M tokens (input/output) pour les 3 providers et leurs modèles. Note : prix indicatifs, à vérifier. Simulation pour 3 profils SaaS : A (10 000 req/mois, prompts courts), B (50 000 req/mois, chat), C (5 000 req/mois, documents longs). Réduire la facture : choisir le bon modèle par tâche, cache agressif, prompt caching, batching.</p>

            <h2 className="text-2xl font-bold text-white mt-12">Intégration dans Next.js : patterns communs</h2>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Abstraction multi-provider avec NeuraAPI : un seul SDK, switch de provider sans changer le code.</li>
              <li>Fallback et circuit breaker : try Groq → catch → OpenAI → catch → Gemini, timeouts et retries.</li>
              <li>Streaming unifié : normaliser les streams des 3 providers, composant React générique.</li>
              <li>Observabilité par provider : logs provider, modèle, latence, tokens, coût.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12">Sécurité, limites et conformité</h2>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Clés et secrets : gestion par provider, rotation.</li>
              <li>Rate limits et quotas : limites par provider, backoff.</li>
              <li>RGPD et résidence des données : où sont traitées les données (US/EU), options EU (Vertex AI, Azure OpenAI).</li>
              <li>Vendor lock-in : comment l&apos;éviter (abstraction, prompts portables).</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12">Recommandations finales par profil</h2>
            <ul className="list-disc list-inside space-y-1 text-indigo-300">
              <li>Vous débutez / MVP : NeuraAPI (Groq sous le capot) ou Gemini Flash.</li>
              <li>SaaS B2B avec exigence qualité : OpenAI GPT-4o mini par défaut + GPT-4o pour les tâches dures.</li>
              <li>App à gros volume / documents longs : Gemini Flash/Pro.</li>
              <li>Chat temps réel : Groq.</li>
              <li>Stratégie multi-provider recommandée : primaire + fallback, monitoring, A/B test.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
            <p>Pas de gagnant universel : le bon provider dépend du cas d&apos;usage. Commencer avec une abstraction (NeuraAPI) pour garder la liberté.</p>

            <h2 className="text-2xl font-bold text-white mt-12">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Groq est-il vraiment plus rapide qu&apos;OpenAI ?</h3>
                <p>Oui, grâce aux LPU ; latence premier token souvent 3-4x plus faible.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Gemini est-il moins cher qu&apos;OpenAI ?</h3>
                <p>Sur Flash oui, largement ; sur Pro ça se rapproche.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Peut-on migrer d&apos;un provider à l&apos;autre facilement ?</h3>
                <p>Oui si vous utilisez une API compatible OpenAI ou une abstraction comme NeuraAPI.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Le tier gratuit de Gemini est-il suffisant pour un MVP ?</h3>
                <p>Souvent oui, mais attention aux quotas par minute et aux changements.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Faut-il utiliser plusieurs providers en production ?</h3>
                <p>Recommandé pour la résilience (fallback) et l&apos;optimisation coût/qualité.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Quel provider pour le français ?</h3>
                <p>OpenAI et Gemini très bons ; Groq/Llama correct, à tester sur votre domaine.</p>
              </div>
            </div>

            <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">Choisissez le bon provider IA</h3>
              <p className="mt-3 text-indigo-200">Essayez NeuraAPI avec 100 crédits gratuits et lisez le guide d&apos;intégration Next.js.</p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Link href="/register" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all">
                  Commencer gratuitement
                </Link>
                <Link href="/blog/comment-integrer-api-ia-saas-nextjs-2026" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                  Lire le guide Next.js
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
