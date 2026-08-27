import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Next.js 15 Server Actions + IA : guide pratique (streaming, sécurité)',
    description: 'Comment exploiter les Server Actions de Next.js 15 pour intégrer une API IA en production : streaming, gestion d’erreurs, sécurité et patterns anti-abus.',
    path: '/blog/nextjs-15-server-actions-ia',
    type: 'article',
    keywords: ['Next.js 15 Server Actions', 'Server Actions IA', 'streaming Next.js', 'sécurité Server Actions', 'tutoriel Next 15'],
    publishedTime: '2026-08-27',
    modifiedTime: '2026-08-27',
  })
}

export default function BlogNext15ServerActions() {
  const articleSchema = generateArticleSchema({
    title: 'Next.js 15 Server Actions + IA : guide pratique (streaming, sécurité)',
    description: 'Comment exploiter les Server Actions de Next.js 15 pour intégrer une API IA en production.',
    slug: 'nextjs-15-server-actions-ia',
    datePublished: '2026-08-27',
    dateModified: '2026-08-27',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Next.js 15 Server Actions IA', path: '/blog/nextjs-15-server-actions-ia' },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Next.js 15 Server Actions IA', href: '/blog/nextjs-15-server-actions-ia' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutoriel
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 27 août 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 11 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Next.js 15 Server Actions + IA : guide pratique
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/nextjs-15-server-actions-ia`} title="Next.js 15 Server Actions + IA" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Les Server Actions de Next.js 15 transforment l’intégration d’une API IA : plus de route API
            séparée pour un simple appel, la logique vit côté serveur, directement dans le composant.
            Mais la sécurité et le streaming demandent de l’attention.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Le pattern de base</h2>
          <p>
            Une Server Action pour appeler ton API IA unifiée ressemble à ceci :
          </p>
          <pre className="bg-black/40 rounded-xl p-4 text-sm overflow-x-auto"><code>{`'use server'
import { ai } from '@/lib/ai'

export async function generateText(prompt: string) {
  const stream = await ai.chat({ model: 'groq-llama-3.1', messages: [{ role: 'user', content: prompt }], stream: true })
  return stream
}`}</code></pre>

          <h2 className="text-2xl font-bold text-white mt-12">Streaming côté client</h2>
          <p>
            Pour un rendu fluide, consomme le flux avec <code>ai.chat</code> en mode stream et affiche
            token par token. Groq excelle ici (latence ~10x inférieure au cloud standard).
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Sécurité : ne jamais exposer la clé</h2>
          <p>
            La Server Action s’exécute côté serveur : ta clé API reste dans <code>.env</code>, jamais
            dans le bundle client. Ajoute un rate-limit par IP pour éviter l’abus (voir les templates
            NeuraAPI qui incluent ce garde-fou).
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Gestion d’erreurs honnête</h2>
          <p>
            Un provider IA peut timeout. Utilise un failover automatique : si Groq tombe, bascule sur
            Gemini. C’est exactement le rôle d’une <Link href="/templates" className="text-indigo-300 underline">couche API unifiée</Link> —
            un seul appel, routing et retry transparents.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Next.js 15 Server Actions + API IA unifiée = stack SaaS minimal et robuste. Pas de code
            provider-spécifique, pas de route API à maintenir, failover inclus.
          </p>

          <div className="mt-12 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20">
            <p className="text-indigo-200">
              💡 <strong>Ressources :</strong> templates prêts sur <Link href="/templates" className="text-indigo-300 underline">NeuraAPI</Link>,
              prompts IA testés sur <Link href="https://prompt-empire.vercel.app" className="text-indigo-300 underline">Prompt Empire</Link>,
              copy qui convertit sur <Link href="https://copy-vault-nine.vercel.app" className="text-indigo-300 underline">Copy Vault</Link>.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
