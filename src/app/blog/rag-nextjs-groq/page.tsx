import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'RAG avec Next.js et Groq : système de retrieval augmenté (2026)',
    description: 'Construire un système RAG (Retrieval-Augmented Generation) avec Next.js et Groq : chunking, embeddings, vector store, retrieval et génération. Code complet.',
    path: '/blog/rag-nextjs-groq',
    type: 'article',
    keywords: ['rag nextjs groq', 'système rag nextjs', 'chatbot base de connaissances groq', 'retrieval augmented generation tutorial', 'rag français', 'groq embeddings'],
    publishedTime: '2026-08-29',
    modifiedTime: '2026-08-29',
  })
}

export default function BlogRagNextjsGroq() {
  const articleSchema = generateArticleSchema({
    title: 'RAG avec Next.js et Groq : système de retrieval augmenté',
    description: 'Construire un système RAG (Retrieval-Augmented Generation) avec Next.js et Groq. Chunking, embeddings, vector store, retrieval et génération.',
    slug: 'rag-nextjs-groq',
    datePublished: '2026-08-29',
    dateModified: '2026-08-29',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'RAG Next.js Groq', path: '/blog/rag-nextjs-groq' },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'RAG Next.js Groq', href: '/blog/rag-nextjs-groq' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutoriel
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 29 août 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 11 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            RAG avec Next.js et Groq : système de retrieval augmenté
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/rag-nextjs-groq`} title="RAG avec Next.js et Groq" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Un chatbot qui répond « je ne sais pas » dès qu&apos;on sort de son entraînement, c&apos;est une
            démo, pas un produit. Le RAG (Retrieval-Augmented Generation) règle ça : au lieu d&apos;espérer
            que le modèle « connaisse » votre documentation, vous lui injectez les bons passages au moment
            de la génération. Ce guide assemble un pipeline RAG complet et honnête avec Next.js + Groq.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">C&apos;est quoi, concrètement, un système RAG ?</h2>
          <p>
            Quatre étapes, aucune magie : (1) découper vos documents en morceaux, (2) transformer chaque
            morceau en vecteur (embedding), (3) à la question, retrouver les morceaux les plus proches,
            (4) les coller dans le prompt et laisser Groq rédiger la réponse. L&apos;avantage de Groq :
            l&apos;inférence est si rapide que l&apos;utilisateur ne sent pas le surcoût du contexte ajouté.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 : chunking intelligent</h2>
          <p>
            Découper par nombre de caractères est la pire option. Préférez un découpage par titre (H2/H3)
            avec un chevauchement (overlap) de 100-200 caractères pour ne pas couper une phrase en deux.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// lib/rag/chunk.ts
export function chunkDocument(text: string, opts = { size: 800, overlap: 150 }) {
  const sentences = text.split(/(?<=[.!?])\\s+/)
  const chunks: string[] = []
  let current = ''
  for (const s of sentences) {
    if ((current + s).length > opts.size && current) {
      chunks.push(current.trim())
      current = current.slice(-opts.overlap) + s
    } else {
      current += ' ' + s
    }
  }
  if (current.trim()) chunks.push(current.trim())
  return chunks
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 : embeddings (hors Groq)</h2>
          <p>
            Groq ne fournit pas d&apos;API d&apos;embeddings. Utilisez un provider compatible OpenAI ou un
            modèle local via <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">@xenova/transformers</code>.
            Ici on appelle un endpoint compatible OpenAI ; remplacez l&apos;URL/clé par votre provider.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// lib/rag/embed.ts
const EMBED_URL = process.env.EMBED_URL!
const EMBED_KEY = process.env.EMBED_KEY!

export async function embed(texts: string[]): Promise<number[][]> {
  const res = await fetch(EMBED_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: \`Bearer \${EMBED_KEY}\` },
    body: JSON.stringify({ input: texts, model: 'text-embedding-3-small' }),
  })
  const data = await res.json()
  return data.data.map((d: any) => d.embedding as number[])
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 : similarité cosinus</h2>
          <p>
            Pour un prototype, un <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">Map</code> en mémoire suffit. En
            production, passez à pgvector (ou un vector store managé). La similarité cosinus reste la
            même dans les deux cas.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// lib/rag/retrieve.ts
function cosine(a: number[], b: number[]) {
  let dot = 0, na = 0, nb = 0
  for (let i = 0; i < a.length; i++) { dot += a[i] * b[i]; na += a[i] ** 2; nb += b[i] ** 2 }
  return dot / (Math.sqrt(na) * Math.sqrt(nb))
}

const STORE: { text: string; vec: number[] }[] = []

export function index(text: string, vec: number[]) { STORE.push({ text, vec }) }

export function retrieve(queryVec: number[], topK = 4) {
  return STORE
    .map(c => ({ text: c.text, score: cosine(queryVec, c.vec) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 4 : la route API /api/rag</h2>
          <p>
            On enchaîne embed → retrieve → Groq. Le prompt système interdit au modèle d&apos;inventer
            hors contexte — c&apos;est ce qui rend le RAG fiable.
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// app/api/rag/route.ts
import { NextRequest } from 'next/server'
import { createGroq } from 'groq-sdk'
import { embed } from '@/lib/rag/embed'
import { retrieve } from '@/lib/rag/retrieve'

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY! })

export async function POST(req: NextRequest) {
  const { question } = await req.json()
  const [qVec] = await embed([question])
  const hits = retrieve(qVec, 4)
  const context = hits.map(h => '- ' + h.text).join('\\n')

  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content:
        'Réponds en français en t\'appuyant UNIQUEMENT sur le contexte fourni. ' +
        "Si la réponse n'y est pas, dis \"je n'ai pas cette information\". " +
        'Cite le passage pertinent.' },
      { role: 'user', content: \`Contexte :\\n\${context}\\n\\nQuestion : \${question}\` },
    ],
  })
  return Response.json({ answer: completion.choices[0].message.content, sources: hits })
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Les 4 erreurs qui tuent un RAG</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Chunks trop grands</strong> : au-delà de ~800 tokens, le signal se dilue. Préférez des morceaux ciblés.</li>
            <li><strong className="text-white">Pas de seuil de score</strong> : si le top-1 a un score de 0,12, la question n&apos;est pas dans votre base. Renvoyez « inconnu » plutôt que de halluciner.</li>
            <li><strong className="text-white">Embeddings et génération de providers différents sans test</strong> : mesurez la pertinence réelle sur 20 questions avant de ship.</li>
            <li><strong className="text-white">Oublier de ré-indexer</strong> : une doc qui change sans ré-indexation donne des réponses périmées. Automatisez l&apos;indexation à chaque deploy.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Quand passer à pgvector ?</h2>
          <p>
            Dès que vous dépassez quelques milliers de chunks, ou que plusieurs utilisateurs partagent la
            base, le <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">Map</code> en mémoire ne tient plus. pgvector ajoute
            une recherche ANN (HNSW) et la persistance. Le code de retrieval devient une requête SQL
            simple — le reste du pipeline ne change pas.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Partir de la bonne base</h3>
            <p className="text-indigo-200/70 mb-4">
              Nos templates Next.js embarquent déjà la couche API (route handlers, failover, rate-limit)
              sur laquelle brancher ce pipeline RAG en quelques heures.{' '}
              <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">Voir les templates</Link>
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Voir les prix →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Un RAG n&apos;est pas plus compliqué qu&apos;une API bien structurée : chunking, embeddings,
            similarité, génération. Groq absorbe le surcoût du contexte ajouté sans pénaliser la latence.
            Le vrai travail n&apos;est pas le code, c&apos;est le seuil de pertinence et la fraîcheur de
            l&apos;index — c&apos;est là que se joue la confiance de l&apos;utilisateur.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/chatbot-ia-nextjs-groq" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Créer un chatbot IA avec Next.js et Groq
              </Link>
            </li>
            <li>
              <Link href="/blog/api-ia-nextjs-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Intégrer une API IA dans Next.js : patterns production
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
