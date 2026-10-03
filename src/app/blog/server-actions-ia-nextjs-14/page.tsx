import Link from 'next/link'
import { Clock, Calendar, Tag, Zap } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Server Actions Next.js 14 pour l\'IA : révolutionnez votre SaaS sans API Route',
    description: 'Découvrez comment les Server Actions de Next.js 14 simplifient l\'intégration IA dans vos SaaS. Code complet, patterns production, bonnes pratiques.',
    path: '/blog/server-actions-ia-nextjs-14',
    type: 'article',
    keywords: ['Server Actions Next.js 14', 'Next.js IA SaaS', 'server actions IA', 'Next.js sans API route', 'développement SaaS IA', 'next.js 14 tutoriel IA'],
    publishedTime: '2026-09-25',
    modifiedTime: '2026-09-25',
  })
}

export default function BlogServerActionsIA() {
  const articleSchema = generateArticleSchema({
    title: 'Server Actions Next.js 14 pour l\'IA : révolutionnez votre SaaS sans API Route',
    description: 'Découvrez comment les Server Actions de Next.js 14 simplifient l\'intégration IA dans vos SaaS. Code complet, patterns production, bonnes pratiques.',
    slug: 'server-actions-ia-nextjs-14',
    datePublished: '2026-09-25',
    dateModified: '2026-09-25',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Server Actions IA Next.js 14', path: '/blog/server-actions-ia-nextjs-14' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Server Actions IA Next.js 14', href: '/blog/server-actions-ia-nextjs-14' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-600/30">
              <Zap className="w-3 h-3" /> Next.js 14
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutoriel avancé
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 25 septembre 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 14 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Server Actions Next.js 14 pour l&apos;IA : révolutionnez votre SaaS sans API Route
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/server-actions-ia-nextjs-14`} title="Server Actions Next.js 14 pour l'IA" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Depuis la sortie de Next.js 14, les Server Actions changent radicalement la façon dont nous construisons
            des SaaS intégrant l&apos;intelligence artificielle. Fini les routes API manuelles, la gestion des
            tokens côté client, les complexités de CORS. Tout passe par des fonctions serveur invoquées
            directement depuis vos composants React.
          </p>

          <p className="text-lg">
            Cet article explore comment structurer une architecture IA complète avec ce paradigme — du prompt
            au déploiement — pour un SaaS plus rapide à construire, plus sûr en production, et plus simple
            à maintenir.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Pourquoi les Server Actions changent tout pour l&apos;IA</h2>

          <p>
            Traditionnellement, intégrer une API IA dans un Next.js implique quatre couches distinctes :
            un formulaire client, une route API <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">/api/...</code>, une logique serveur, et un rendu côté client.
            Chaque couche ajoute de la complexité, des points de défaillance, et des questions de sécurité.
          </p>

          <p>
            Avec les Server Actions, vous écrivez une seule fonction asynchrone dans un fichier <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">'use server'</code>
            et vous l&apos;invoquez directement depuis votre composant React. Next.js s&apos;occupe du
            transport, de la sérialisation, et de la récupération des erreurs.
          </p>

          <div className="rounded-xl bg-amber-900/20 border border-amber-500/20 p-5 mb-6">
            <p className="text-amber-300/80 text-sm italic">
              Pour les SaaS qui servent des réponses IA, cela signifie : aucune clé API exposée côté client,
              aucune route à protéger manuellement, et une logique de prompt centralisée dans un seul fichier.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 : Structurer votre dossier Server Actions</h2>

          <p>
            Organisez vos Server Actions par domaine métier. Pour un SaaS IA, on distingue typiquement
            la génération de contenu, l&apos;analyse de données, et les opérations asynchrones longues.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`src/
  app/
    actions/
      ia/
        generate.ts        # Génération de texte / contenu IA
        analyze.ts         # Analyse de documents, données
        stream.ts          # Streaming de réponses IA
      usage/
        track.ts           # Tracking d&apos;usage crédits
    api/                   # Réservé aux webhooks tiers (Stripe, etc.)
    page.tsx`}</code>
            </pre>
          </div>

          <p>
            Cette séparation rend le codebase lisible et testable. Chaque action est une fonction
            autonome avec sa propre validation d&entrée.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 : Une Server Action de génération IA complète</h2>

          <p>
            Voici une action de génération de contenu utilisant l&apos;OpenAI SDK. La fonction
            valide les entrées, appelle le modèle, et retourne le résultat structuré.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto mb-8">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/actions/ia/generate.ts
'use server'

import { revalidatePath } from 'next/cache'
import { OpenAI } from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export interface GenerationInput {
  prompt: string
  model?: 'gpt-4o' | 'gpt-4o-mini' | 'gpt-4-turbo'
  temperature?: number
  maxTokens?: number
}

export interface GenerationOutput {
  content: string
  model: string
  tokensUsed: number
  elapsedMs: number
}

export async function generateContent(
  input: GenerationInput
): Promise&lt;GenerationOutput&gt; {
  const start = Date.now()

  // Validation stricte des entrées
  if (!input.prompt || input.prompt.trim().length &lt; 3) {
    throw new Error('Le prompt doit contenir au moins 3 caractères.')
  }
  if (input.prompt.length &gt; 4000) {
    throw new Error('Le prompt dépasse la limite de 4000 caractères.')
  }

  const model = input.model ?? 'gpt-4o-mini'
  const temperature = input.temperature ?? 0.7
  const maxTokens = input.maxTokens ?? 2000

  const response = await openai.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: 'Tu es un assistant spécialisé dans la génération de contenu de qualité. Réponds toujours en français.' },
      { role: 'user', content: input.prompt },
    ],
    temperature,
    max_tokens: maxTokens,
  })

  const content = response.choices[0]?.message?.content ?? ''
  const elapsedMs = Date.now() - start

  if (!content) {
    throw new Error('La réponse IA est vide.')
  }

  return {
    content,
    model,
    tokensUsed: response.usage?.total_tokens ?? 0,
    elapsedMs,
  }
}`}</code>
            </pre>
          </div>

          <p>
            Cette fonction est totalement isolée du cycle de vie React. Elle peut être appelée depuis
            n&apos;importe quel composant serveur ou action de formulaire, sans aucune exposition
            de logique côté client.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 : Appeler une Server Action depuis un formulaire</h2>

          <p>
            Le moyen le plus naturel d&apos;utiliser une Server Action est via un formulaire React.
            Next.js gère automatiquement le chargement, l&apos;état d&erreur, et la redirection.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto mb-8">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/actions/ia/generate-form.tsx
'use server'

import { generateContent, GenerationInput } from './generate'
import { revalidatePath } from 'next/cache'

export async function generateFormAction(formData: FormData) {
  const prompt = formData.get('prompt') as string
  const model = formData.get('model') as string

  const input: GenerationInput = {
    prompt,
    model: (model === 'gpt-4o' ? 'gpt-4o' : 'gpt-4o-mini') as GenerationInput['model'],
    temperature: 0.7,
    maxTokens: 1500,
  }

  try {
    const result = await generateContent(input)
    revalidatePath('/dashboard')
    return { success: true, result }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur de génération',
    }
  }
}`}</code>
            </pre>
          </div>

          <p>
            Côté composant, l&appel est minimal :
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto mb-8">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Dans un composant React
import { generateFormAction } from '@/app/actions/ia/generate-form'

export default function GenerateForm() {
  return (
    &lt;form action={generateFormAction}&gt;
      &lt;textarea
        name="prompt"
        placeholder="Décrivez votre besoin..."
        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        rows={6}
      /&gt;
      &lt;button
        type="submit"
        className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
      &gt;
        Générer avec IA
      &lt;/button&gt;
    &lt;/form&gt;
  )
}`}</code>
            </pre>
          </div>

          <p>
            Aucune <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">fetch</code>, aucune gestion manuelle de l&apos;état de chargement API,
            aucune clé API exposée. Tout est encapsulé.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 4 : Streaming IA avec Server Actions</h2>

          <p>
            Pour les réponses longues (génération de contenu, analyse de documents), le streaming
            améliore radicalement l&apos;expérience utilisateur. Avec Next.js 14, vous pouvez
            combiner les Server Actions avec le protocole de streaming natif.
          </p>

          <p>
            L&apothèque <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">@ai-sdk/react</code> (Vercel AI SDK) s&apos;intègre
            parfaitement avec les Server Actions pour du streaming de tokens en temps réel.
            Vous définissez votre action comme un générateur asynchrone et le client
            affiche chaque chunk dès sa réception.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Utilisez <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">streamText</code> du Vercel AI SDK pour un streaming simple et robuste</li>
            <li>L&action serveur retourne un objet (UI) qui encapsule le stream côté client</li>
            <li>Aucune gestion manuelle de <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">ReadableStream</code> nécessaire</li>
            <li>Le SDK gère automatiquement la reconnexion et la gestion des erreurs</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 5 : Tracking d&usage et quotas en production</h2>

          <p>
            Un SaaS IA doit impérativement tracker l&usage de chaque utilisateur pour appliquer
            des quotas et éviter les abus. Les Server Actions sont le point idéal pour
            instrumenter ce tracking, car elles sont exécutées de manière atomique côté serveur.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto mb-8">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/actions/usage/track.ts
'use server'

import { auth } from '@/lib/auth'

export async function trackUsage(userId: string, tokensUsed: number) {
  const session = await auth()

  if (!session?.user?.id) {
    throw new Error('Non authentifié')
  }

  // Vérifier le quota restant
  const usage = await getUsageForUser(userId)
  const quotaRemaining = usage.quota - usage.used - tokensUsed

  if (quotaRemaining &lt; 0) {
    throw new Error('Quota dépassé. Upgradez votre plan.')
  }

  // Enregistrer l&usage
  await db.usage.create({
    data: {
      userId,
      tokens: tokensUsed,
      action: 'generate_content',
      timestamp: new Date(),
    },
  })
}`}</code>
            </pre>
          </div>

          <p>
            Appelez <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">trackUsage</code> à la fin de chaque action IA génératrice.
            Cette approche centralisée garantit que le tracking ne peut pas être bypassé
            depuis le client.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Bonnes pratiques pour les Server Actions IA en production</h2>

          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Validation zéro confiance</strong> : Ne faites jamais confiance aux données issues du client. Validez et sanitizez systématiquement avec <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">zod</code> ou des vérifications manuelles.</li>
            <li><strong className="text-white">Sécurité des clés API</strong> : Les Server Actions s&exécutent côté serveur — vos clés API ne sont jamais exposées au navigateur. Vérifiez néanmoins que <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">.env.local</code> est bien dans <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">.gitignore</code>.</li>
            <li><strong className="text-white">Rate limiting par utilisateur</strong> : Les Server Actions sont invoquables par n&importe quel client authentifié. Protégez-les avec un rate limiting au niveau de la fonction ou via un middleware.</li>
            <li><strong className="text-white">Gestion d&erreurs structurée</strong> : Retournez des objets d&erreur avec des codes machine lisibles plutôt que de laisser les exceptions remonter brutalement.</li>
            <li><strong className="text-white">Timeouts</strong> : Les appels IA peuvent prendre du temps. Implémentez des timeouts explicites pour éviter les requêtes qui traînent indéfiniment.</li>
            <li><strong className="text-white">Révalidation du cache</strong> : Utilisez <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">revalidatePath</code> ou <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10 font-mono text-xs">revalidateTag</code> pour mettre à jour le cache après une action générative.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Quand éviter les Server Actions pour l&IA</h2>

          <p>
            Les Server Actions ne sont pas la solution universelle. Il existe des cas où
            une route API traditionnelle reste préférable.
          </p>

          <div className="rounded-xl bg-amber-900/20 border border-amber-500/20 p-6 mb-6">
            <ul className="list-disc list-inside space-y-2 text-amber-300/80 text-sm">
              <li><strong className="text-amber-200">Webhooks externes</strong> : Stripe, GitHub, ou tout provider tiers externe appellent votre API via HTTP — une Server Action ne peut pas être invoquée directement par ces services. Utilisez <code className="bg-amber-200/50 bg-amber-200/10 px-1.5 py-0.5 rounded text-sm border border-amber-500/30">app/api/</code> pour ces cas.</li>
              <li><strong className="text-amber-200">Requêtes ultra-longues (&gt; 60s)</strong> : Next.js a des limites de temps d&exécution selon votre hébergement. Pour les tâches de génération très longues, utilisez un système de jobs asynchrones (cf. notre article sur les <Link href="/blog/jobs-async-ia-nextjs-file-attente-webhooks" className="text-amber-400 hover:text-amber-300 underline">jobs async et file d&attente</Link>).</li>
              <li><strong className="text-amber-200">Streaming temps réel complexe</strong> : Pour des expériences de chat avec historique riche et streaming bidirectionnel, une route API dédiée avec <code className="bg-amber-200/50 bg-amber-200/10 px-1.5 py-0.5 rounded text-sm border border-amber-500/30">StreamingTextResponse</code> peut offrir plus de contrôle.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Architecture recommandée pour un SaaS IA Next.js 14</h2>

          <p>
            Voici le schéma architectural idéal pour un SaaS IA moderne avec Next.js 14 :
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto mb-8">
            <pre className="text-sm text-indigo-300/80 whitespace-pre">{`├── app/
│   ├── actions/
│   │   ├── ia/
│   │   │   ├── generate.ts     → Génération IA (Server Action)
│   │   │   ├── stream.ts       → Streaming IA (Server Action + AI SDK)
│   │   │   └── analyze.ts     → Analyse de documents
│   │   └── usage/
│   │       └── track.ts        → Tracking quotas
│   ├── api/
│   │   ├── stripe/webhook/    → Webhooks Stripe (route API traditionnelle)
│   │   └── chat/              → Chat streaming (si besoin avancé)
│   ├── dashboard/
│   │   └── page.tsx           → Composant utilisant les Server Actions
│   └── page.tsx
├── lib/
│   ├── auth.ts                → Gestion authentification
│   ├── db.ts                  → Prisma / client DB
│   └── quotas.ts              → Logique quotas IA
└── components/
    └── GenerateForm.tsx       → Formulaire invoquant generateFormAction`}
</pre>
          </div>

          <p>
            Cette architecture garde les préoccupations séparées : les Server Actions pour
            l&interaction utilisateur, les routes API pour les webhooks externes, et une
            couche lib/ pour la logique métier réutilisable.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Démarrez votre SaaS IA plus vite</h3>
            <p className="text-indigo-200/70 mb-4">
              Nos templates Next.js incluent déjà une architecture Server Actions complète avec
              génération IA, streaming, et tracking d&usage.{' '}
              <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">Explorer les templates</Link>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Voir les prix →
              </Link>
              <Link
                href="/agents"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Agents IA →
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>

          <p>
            Les Server Actions de Next.js 14 représentent un changement de paradigme significatif
            pour le développement de SaaS intégrant l&intelligence artificielle. Elles réduisent
            la surface de code, éliminent les problèmes de sécurité liés à l&exposition
            des clés API, et simplifient grandement l&expérience de développement.
          </p>

          <p>
            Pour aller plus loin sur l&intégration IA dans Next.js, découvrez notre article sur
            l&<Link href="/blog/api-ia-nextjs-production" className="text-indigo-400 hover:text-indigo-300 underline">intégration d&une API IA en production</Link>,
            ou suivez nos <Link href="/changelog" className="text-indigo-400 hover:text-indigo-300 underline">mises à jour régulières</Link>
            sur les dernières évolutions de notre plateforme.
          </p>

          <p>
            La clé d&un SaaS IA performant ne réside pas dans la complexité de l&architecture,
            mais dans la simplicité des primitives que vous choisissez. Les Server Actions
            offrent exactement ça : une primitive simple, sécurisée, et efficace.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/api-ia-nextjs-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Intégrer une API IA dans Next.js en production
              </Link>
            </li>
            <li>
              <Link href="/blog/jobs-async-ia-nextjs-file-attente-webhooks" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Jobs async IA Next.js : file d&attente et webhooks
              </Link>
            </li>
            <li>
              <Link href="/blog/vercel-ai-sdk-nextjs-streaming-tool-calling" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Vercel AI SDK : streaming et tool calling avec Next.js
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Journal des évolutions — suivez les dernières mises à jour
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
