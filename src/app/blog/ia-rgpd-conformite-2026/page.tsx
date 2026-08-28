import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'IA et RGPD : conformité des apps IA',
    description: 'App IA conforme RGPD.',
    path: '/blog/ia-rgpd-conformite-2026',
    type: 'article',
    keywords: ["RGPD IA"],
    publishedTime: '2026-08-28',
    modifiedTime: '2026-08-28',
  })
}

export default function BlogAuto() {
  const articleSchema = generateArticleSchema({ title: 'IA et RGPD : conformité des apps IA', description: 'App IA conforme RGPD.', slug: 'ia-rgpd-conformite-2026', datePublished: '2026-08-28', dateModified: '2026-08-28' })
  const breadcrumbSchema = generateBreadcrumbSchema({ items: [{ name: 'Blog', path: '/blog' }, { name: 'IA et RGPD : conformité des apps IA', path: '/blog/ia-rgpd-conformite-2026' }] })
  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'IA et RGPD : conformité des apps IA', href: '/blog/ia-rgpd-conformite-2026' }]} />
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30"><Tag className="w-3 h-3" /> Guide</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 28 août 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 10 min</span>
          </div>
          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">IA et RGPD : conformité des apps IA</h1>
          <div className="mt-6"><ShareButtons url={`${baseUrl}/blog/ia-rgpd-conformite-2026`} title="IA et RGPD : conformité des apps IA" /></div>
        </div>
        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">App IA conforme RGPD.</p>
          <h2 className="text-2xl font-bold text-white mt-12">Contexte</h2>
          <p>À développer avec des exemples concrets et du code. Maillage vers <Link href="/templates" className="text-indigo-300 underline">NeuraAPI</Link>.</p>
          <div className="mt-12 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20">
            <p className="text-indigo-200">💡 Templates sur <Link href="/templates" className="text-indigo-300 underline">NeuraAPI</Link>, prompts sur <Link href="https://prompt-empire.vercel.app" className="text-indigo-300 underline">Prompt Empire</Link>, copy sur <Link href="https://copy-vault-nine.vercel.app" className="text-indigo-300 underline">Copy Vault</Link>.</p>
          </div>
        </div>
      </div>
    </article>
  )
}
