import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import DocsContent from '@/components/client/DocsContent'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Documentation API — Référence NeuraAPI',
  description: 'Référence complète de l\'API NeuraAPI. Authentifiez-vous, appelez les endpoints IA (génération, SEO, code, sentiment, chatbot), intégrez en 3 lignes.',
  path: '/api-docs',
  keywords: ['documentation api', 'api reference', 'sdk typescript', 'neuraapi docs', 'api ia documentation'],
})

export default function DocsPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Documentation', href: '/api-docs' }]} />

        <div className="mt-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Documentation API</h1>
          <p className="mt-4 text-lg text-indigo-200 max-w-3xl">
            Référence complète de l&apos;API NeuraAPI. Authentifiez-vous, appelez les endpoints, intégrez l&apos;IA dans votre application en quelques minutes.
          </p>
        </div>

        {/* Quick start */}
        <div className="mt-12 rounded-2xl border border-indigo-700/50 bg-gradient-to-br from-indigo-900/50 to-indigo-950 p-8">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-indigo-400">&#9889;</span>
            Démarrage rapide
          </h2>
          <p className="mt-2 text-indigo-300 text-sm">
            Installez le SDK et faites votre premier appel API en 3 lignes.
          </p>
          <div className="mt-4 rounded-xl bg-indigo-950/80 border border-indigo-800/30 p-4">
            <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
          </div>
          <div className="mt-3 rounded-xl bg-indigo-950/80 border border-indigo-800/30 p-4">
            <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI('napi_votre_cle_ici')
const result = await ai.generate({ prompt: 'Bonjour le monde' })
// result.content contient le texte généré`}</pre>
          </div>
        </div>

        <DocsContent />
      </div>
    </div>
  )
}
