import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Edge Runtime + IA : latence quasi-nulle pour tes apps (guide 2026)',
    description: 'Comment servir une API IA depuis le Edge Runtime (Vercel/Cloudflare) pour une latence sous la milliseconde. Patterns, limites et cas d’usage.',
    path: '/blog/edge-runtime-ia',
    type: 'article',
    keywords: ['Edge Runtime IA', 'latence IA', 'Vercel Edge', 'Cloudflare Workers IA', 'streaming edge'],
    publishedTime: '2026-08-27',
    modifiedTime: '2026-08-27',
  })
}

export default function BlogEdgeRuntime() {
  const articleSchema = generateArticleSchema({
    title: 'Edge Runtime + IA : latence quasi-nulle pour tes apps (guide 2026)',
    description: 'Comment servir une API IA depuis le Edge Runtime pour une latence sous la milliseconde.',
    slug: 'edge-runtime-ia',
    datePublished: '2026-08-27',
    dateModified: '2026-08-27',
  })
  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [{ name: 'Blog', path: '/blog' }, { name: 'Edge Runtime IA', path: '/blog/edge-runtime-ia' }],
  })
  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Edge Runtime IA', href: '/blog/edge-runtime-ia' }]} />
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30"><Tag className="w-3 h-3" /> Guide</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 27 août 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 9 min de lecture</span>
          </div>
          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">Edge Runtime + IA : latence quasi-nulle</h1>
          <div className="mt-6"><ShareButtons url={`${baseUrl}/blog/edge-runtime-ia`} title="Edge Runtime + IA" /></div>
        </div>
        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">La latence tue la rétention. Un chatbot qui met 2s à répondre fait fuir. Le Edge Runtime résout ça : ton code s’exécute à quelques millisecondes de l’utilisateur, peu importe où il est.</p>
          <h2 className="text-2xl font-bold text-white mt-12">Le principe</h2>
          <p>Au lieu de router l’appel IA vers une région centrale, le Edge l’exécute depuis le point d’entrée le plus proche (200+ villes chez Vercel/Cloudflare). Pour une API IA, ça réduit la latence réseau de ~100ms à ~10ms.</p>
          <h2 className="text-2xl font-bold text-white mt-12">Patterns gagnants</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Streaming edge</strong> : renvoie le flux token par token depuis le edge, pas d’attente de fin de génération.</li>
            <li><strong>Cache de prompts</strong> : les prompts fréquents (ex: système) sont mis en cache au edge → 0 appel provider.</li>
            <li><strong>Failover edge→origin</strong> : si le provider tombe, bascule proprement sans 500 visible.</li>
          </ul>
          <h2 className="text-2xl font-bold text-white mt-12">Limites honnêtes</h2>
          <p>Le Edge a des contraintes : pas de connexion DB持久的 par défaut, pas de FS. Pour l’IA, ça va (tu appelles une API externe). Pour le stateful, reste sur origin. Une <Link href="/templates" className="text-indigo-300 underline">couche API unifiée</Link> gère ça : edge pour le routing, origin pour le reste.</p>
          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>Pour une app IA qui veut retenir ses users, le Edge Runtime n’est plus optionnel. Combine-le à un provider rapide (Groq) et tu obtiens une UX quasi-instantanée.</p>
          <div className="mt-12 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20">
            <p className="text-indigo-200">💡 Templates prêts sur <Link href="/templates" className="text-indigo-300 underline">NeuraAPI</Link>, prompts testés sur <Link href="https://prompt-empire.vercel.app" className="text-indigo-300 underline">Prompt Empire</Link>, copy sur <Link href="https://copy-vault-nine.vercel.app" className="text-indigo-300 underline">Copy Vault</Link>.</p>
          </div>
        </div>
      </div>
    </article>
  )
}
