import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'RAG en français : tutoriel 2026 (vector DB + IA)',
    description: 'Construire un système RAG en français : embedding, vector store, prompting et coûts réels. Guide pas-à-pas.',
    path: '/blog/rag-tutoriel-francais',
    type: 'article',
    keywords: ['RAG français', 'tutoriel RAG', 'vector database', 'embedding IA'],
    publishedTime: '2026-08-27',
    modifiedTime: '2026-08-27',
  })
}

export default function BlogRagFr() {
  const articleSchema = generateArticleSchema({
    title: 'RAG en français : tutoriel 2026',
    description: 'Construire un système RAG en français : embedding, vector store, coûts réels.',
    slug: 'rag-tutoriel-francais',
    datePublished: '2026-08-27',
    dateModified: '2026-08-27',
  })
  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [{ name: 'Blog', path: '/blog' }, { name: 'RAG FR', path: '/blog/rag-tutoriel-francais' }],
  })
  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'RAG FR', href: '/blog/rag-tutoriel-francais' }]} />
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30"><Tag className="w-3 h-3" /> Tutoriel</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 27 août 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 12 min</span>
          </div>
          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">RAG en français : tutoriel 2026</h1>
          <div className="mt-6"><ShareButtons url={`${baseUrl}/blog/rag-tutoriel-francais`} title="RAG en français" /></div>
        </div>
        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">Le RAG (Retrieval-Augmented Generation) rend une IA utile sur TES données. Au lieu de répondre depuis ses poids, elle recherche dans ta base, puis génère.</p>
          <h2 className="text-2xl font-bold text-white mt-12">1. Chunker tes documents</h2>
          <p>Découpe ton texte en morceaux de ~500 tokens avec overlap (~50). Évite de tronquer le sens.</p>
          <h2 className="text-2xl font-bold text-white mt-12">2. Embedding</h2>
          <p>Transforme chaque chunk en vecteur. Modèles FR : <code>text-embedding-3-small</code> (OpenAI) ou <code>multilingual-e5</code>. Coût ~0,02$/1M tokens.</p>
          <h2 className="text-2xl font-bold text-white mt-12">3. Vector store</h2>
          <p>Stocke les vecteurs (PgVector, Qdrant, Pinecone). Pour démarrer, PgVector suffit — pas de nouveau service.</p>
          <h2 className="text-2xl font-bold text-white mt-12">4. Recherche + génération</h2>
          <p>Embed la question, recherche 5 chunks proches (cosine), injecte-les dans le prompt système. Limite à 3-4 chunks pour contrôler le coût.</p>
          <h2 className="text-2xl font-bold text-white mt-12">Coût réel</h2>
          <p>Sur 1000 docs de 500 tokens : embedding ~0,01$, puis ~0,30$/1M tokens génération. RAG = quelques centimes par requête.</p>
          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>Le RAG FR est accessible. Une <Link href="/templates" className="text-indigo-300 underline">API unifiée</Link> gère embedding + génération en un seul appel.</p>
          <div className="mt-12 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20">
            <p className="text-indigo-200">💡 Templates <Link href="/templates" className="text-indigo-300 underline">NeuraAPI</Link> | prompts <Link href="https://prompt-empire.vercel.app" className="text-indigo-300 underline">Prompt Empire</Link>.</p>
          </div>
        </div>
      </div>
    </article>
  )
}
