import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Comment intégrer une API IA dans Next.js (guide complet 2026)",
  description: "Tutorial pratique : intégrez une API IA (GPT, Groq, NeuraAPI) dans votre projet Next.js 14. Code examples, SDK TypeScript, bonnes pratiques.",
  path: '/blog/api-ia-nextjs',
  type: 'article',
  keywords: ['API ia', 'Next.js', 'SDK TypeScript', 'intégration IA', 'template next.js', 'développeur web'],
  publishedTime: '2026-01-15',
  modifiedTime: '2026-06-20',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function BlogApiIaNextjs() {
  const articleSchema = generateArticleSchema({
    title: 'Comment intégrer une API IA dans Next.js (guide complet 2026)',
    description: 'Tutorial pratique : intégrez une API IA dans votre projet Next.js 14 avec SDK TypeScript.',
    slug: 'api-ia-nextjs',
    datePublished: '2026-01-15',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'API IA Next.js', path: '/blog/api-ia-nextjs' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'API IA Next.js', href: '/blog/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutoriel
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 15 janvier 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Comment intégrer une API IA dans votre projet Next.js
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/api-ia-nextjs`} title="Comment intégrer une API IA dans Next.js" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            L&apos;intelligence artificielle n&apos;est plus réservée aux grandes entreprises. Aujourd&apos;hui,
            n&apos;importe quel développeur peut intégrer des capacités IA — génération de texte, analyse de code,
            optimisation SEO — dans son application Next.js en quelques minutes. Dans ce guide, nous allons voir
            comment connecter une API IA à un projet Next.js 14 App Router, du setup initial jusqu&apos;à la mise en production.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Pourquoi Next.js pour une application IA ?</h2>
          <p>
            Next.js 14 offre des avantages concrets pour les applications IA :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong> : les appels API se font côté serveur, les clés API ne jamais exposées au client</li>
            <li><strong className="text-white">Route Handlers</strong> : créez des endpoints API natifs sans serveur Express séparé</li>
            <li><strong className="text-white">Streaming</strong> : affichez les réponses IA en temps réel avec <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code></li>
            <li><strong className="text-white">Edge Runtime</strong> : exécutez les appels IA au edge pour des latences minimales</li>
            <li><strong className="text-white">Middleware</strong> : protégez vos routes et gérez l&apos;authentification avant chaque requête</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 : Choisir et installer le SDK</h2>
          <p>
            La première étape est de choisir un fournisseur d&apos;API IA et d&apos;installer son SDK. Voici les options principales en 2026 :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong> : API unifiée avec 8+ endpoints, SDK TypeScript natif, plan gratuit disponible</li>
            <li><strong className="text-white">OpenAI</strong> : le leader historique, modèles GPT-4o et GPT-4.1</li>
            <li><strong className="text-white">Groq</strong> : inférence ultra-rapide sur modèles open source (Llama, Mixtral)</li>
            <li><strong className="text-white">Anthropic</strong> : Claude, spécialisé dans l&apos;analyse de texte long</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Installation du SDK NeuraAPI
npm install @neuraapi/sdk

# Variables d'environnement (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 : Configurer le client côté serveur</h2>
          <p>
            Créez un fichier <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code> pour initialiser le client :
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/neura.ts
import { NeuraAPI } from '@neuraapi/sdk'

const neurapi = new NeuraAPI({
  apiKey: process.env.NEURAPI_KEY!,
})

export default neurapi`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 : Créer un endpoint API</h2>
          <p>
            Utilisez les Route Handlers de Next.js pour créer un endpoint qui recevra les requêtes du client :
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'fr' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: 'Le prompt doit contenir au moins 10 caractères' },
      { status: 400 }
    )
  }

  try {
    const result = await neurapi.generate({
      prompt,
      language,
      maxTokens: 2048,
    })

    return NextResponse.json({
      content: result.text,
      tokensUsed: result.usage.totalTokens,
      model: result.model,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la génération' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Utiliser les autres endpoints IA</h2>
          <p>
            NeuraAPI offre 8+ endpoints IA. Voici comment utiliser quelques-uns des plus utiles :
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Optimisation SEO
const seoResult = await neurapi.seo({
  url: 'https://monsite.com/page',
  keywords: ['next.js', 'saaS', 'template'],
})

// Génération de code
const codeResult = await neurapi.code({
  prompt: 'Créer un composant React pour afficher un tableau',
  language: 'typescript',
})

// Analyse de sentiment
const sentimentResult = await neurapi.sentiment({
  text: 'Ce produit est incroyable, je le recommande !',
})

// Chatbot contextuel
const chatResult = await neurapi.chat({
  message: 'Comment déployer mon app sur Vercel ?',
  context: 'Vous êtes un assistant technique Next.js',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Bonnes pratiques en production</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Validez toujours les entrées</strong> : utilisez Zod pour valider les prompts côté serveur</li>
            <li><strong className="text-white">Gérez les erreurs</strong> : implémentez des retry avec backoff exponentiel</li>
            <li><strong className="text-white">Cachez les réponses</strong> : utilisez Redis ou Next.js cache pour les prompts identiques</li>
            <li><strong className="text-white">Rate limiting</strong> : limitez le nombre de requêtes par utilisateur avec un middleware</li>
            <li><strong className="text-white">Monitoring</strong> : trackez l&apos;utilisation avec les analytics intégrés</li>
            <li><strong className="text-white">Coûts</strong> : surveillez la consommation de tokens pour respecter votre budget</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Besoin d&apos;un point de départ ?</h3>
            <p className="text-indigo-200/70 mb-4">
              Notre template <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> intègre
              déjà l&apos;authentification, le dashboard et la facturation. Vous n&apos;avez qu&apos;à ajouter votre logique IA.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Voir les tarifs →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Intégrer une API IA dans Next.js est devenu un processus simple et structuré. Avec le bon SDK,
            quelques fichiers de configuration et les Route Handlers, vous pouvez offrir des capacités IA
            à vos utilisateurs en quelques heures. Les templates <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">premium NeuraAPI</Link> vont
            encore plus loin en vous fournissant une base production-ready.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles connexes</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Créer un SaaS en 48h avec Next.js et Stripe
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Templates Next.js premium : comment choisir le bon
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
