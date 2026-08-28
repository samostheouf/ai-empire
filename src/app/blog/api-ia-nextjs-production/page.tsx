import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'

export async function generateMetadata() {
  return genMeta({
    title: 'Intégrer une API IA dans Next.js 2026 : patterns production (failover, rate-limit, streaming)',
    description: 'Exemples concrets: endpoint /api/chat, failover 4 providers, rate-limit IP+user, streaming.',
    path: '/blog/api-ia-nextjs-production',
    type: 'article',
    keywords: ['API IA Next.js', 'failover IA', 'streaming Next.js'],
    publishedTime: '2026-08-28',
    modifiedTime: '2026-08-28',
  })
}

export default function BlogApiIaNext() {
  return (
    <article className="min-h-screen bg-[#0f0a2e] text-indigo-200">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <header>
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30"><Tag className="w-3 h-3" /> Tutoriel</span>
          <h1 className="text-4xl font-bold text-white mt-4">Intégrer une API IA dans Next.js : patterns production</h1>
          <p className="mt-4 opacity-80">Un seul endpoint /api/chat, failover 4 providers, streaming et rate-limit. Structure appliquée sur tous mes SaaS.</p>
        </header>
        <div className="mt-10 space-y-8">
          <h2 className="text-2xl font-bold text-white">Endpoint serveur dédié</h2>
          <p>Un endpoint <code>/api/chat</code> qui valide, rate-limit, puis appelle le provider. Le client n'envoie jamais de clé directe.</p>
          <h2 className="text-2xl font-bold text-white">Failover 4 providers</h2>
          <pre className="bg-black/40 rounded-xl p-4 text-sm"><code>{`try { return await groq.chat(c) }
catch { try { return await gemini.chat(c) }
catch { return await openai.chat(c) } }`}</code></pre>
          <p>Retry silencieux. Les <Link href="/templates" className="text-indigo-300 underline">templates NeuraAPI</Link> incluent ce pattern.</p>
          <h2 className="text-2xl font-bold text-white">Rate-limit IP + utilisateur</h2>
          <p>100 req/min/IP en Edge + limite user en DB (UPSERT atomique).</p>
          <h2 className="text-2xl font-bold text-white">Coût réel</h2>
          <p>~0,01 $ / requête avec failover + cache ; billing borné par AbortSignal 15s.</p>
          <div className="p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20">
            <p className="text-indigo-200">💡 <Link href="/templates" className="text-indigo-300 underline">Templates NeuraAPI</Link> — <Link href="https://prompt-empire.vercel.app" className="text-indigo-300 underline">300 prompts IA</Link>.</p>
          </div>
        </div>
      </div>
    </article>
  )
}
