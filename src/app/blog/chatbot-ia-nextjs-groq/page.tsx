import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Créer un chatbot IA avec Next.js et Groq : le guide complet (2026)',
    description: 'Guide complet pour créer un chatbot IA performant avec Next.js et Groq. Streaming temps réel, code complet, déploiement Vercel.',
    path: '/blog/chatbot-ia-nextjs-groq',
    type: 'article',
    keywords: ['chatbot IA Next.js', 'créer chatbot IA', 'Groq API tutoriel', 'chatbot français', 'Next.js streaming IA', 'tutoriel chatbot 2026'],
    publishedTime: '2026-08-24',
    modifiedTime: '2026-08-24',
  })
}

export default function BlogChatbotGroq() {
  const articleSchema = generateArticleSchema({
    title: 'Créer un chatbot IA avec Next.js et Groq : le guide complet',
    description: 'Guide complet pour créer un chatbot IA performant avec Next.js et Groq. Streaming temps réel, code complet, déploiement Vercel.',
    slug: 'chatbot-ia-nextjs-groq',
    datePublished: '2026-08-24',
    dateModified: '2026-08-24',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Chatbot IA Next.js', path: '/blog/chatbot-ia-nextjs-groq' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Chatbot IA Next.js', href: '/blog/chatbot-ia-nextjs-groq' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutoriel
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 24 août 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 12 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Créer un chatbot IA avec Next.js et Groq : le guide complet
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/chatbot-ia-nextjs-groq`} title="Créer un chatbot IA avec Next.js et Groq" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Un chatbot IA est devenu un standard pour les SaaS modernes. Avec Groq et son inférence ultra-rapide,
            vous pouvez offrir une expérience conversationnelle fluide sans exploser votre budget API.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Pourquoi Groq pour votre chatbot ?</h2>
          <p>
            Groq exécute les modèles open source comme Llama 3.3 sur des LPU dédiées, avec des vitesses de
            génération imbattables.
          </p>
          <p>
            Résultat : votre chatbot répond plus vite que la plupart des humains, ce qui transforme l&apos;expérience utilisateur.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 : Obtenir une clé API Groq</h2>
          <p>
            Créez un compte gratuit sur console.groq.com et générez votre clé API. Le tier gratuit permet déjà
            14 400 requêtes par jour, largement suffisant pour démarrer.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Variables d'environnement (.env.local)
GROQ_API_KEY=gsk_your_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 : Créer la route API de chat</h2>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/chat/route.ts
import { NextRequest } from 'next/server'
import { createGroq } from 'groq-sdk'

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY! })

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  // Limite l'historique aux 10 derniers messages
  const history = messages.slice(-10)

  const response = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: 'Tu es un assistant utile qui répond en français.' },
      ...history,
    ],
    stream: true,
  })

  return new Response(response.toReadableStream(), {
    headers: { 'Content-Type': 'text/event-stream' },
  })
}`}</code>
            </pre>
          </div>
          <p>
            Cette route gère le streaming nativement via le protocole SSE.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Streaming des réponses en temps réel</h2>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Côté client : consommer le stream
const res = await fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ messages }),
})

const reader = res.body!.getReader()
const decoder = new TextDecoder()

while (true) {
  const { done, value } = await reader.read()
  if (done) break
  const chunk = decoder.decode(value)
  setMessages(prev => updateLast(prev, chunk))
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Interface de chat réactive</h2>
          <p>
            Côté client, un composant React simple suffit pour une excellente UX conversationnelle.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Affichez chaque token dès son arrivée avec un état <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">useState</code></li>
            <li>Ajoutez un indicateur &laquo; en train d&apos;écrire &raquo; pendant l&apos;attente</li>
            <li>Désactivez le bouton envoyer pendant la génération</li>
            <li>Scrollez automatiquement vers le bas à chaque nouveau chunk</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Bonnes pratiques production</h2>
          <p>
            Au-delà du code, quelques pratiques distinguent un prototype d&apos;un chatbot de production.
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Contexte système</strong> : Un prompt système précis améliore drastiquement la qualité des réponses.</li>
            <li><strong className="text-white">Historique</strong> : Limitez l&apos;historique envoyé au modèle aux 10 derniers messages.</li>
            <li><strong className="text-white">Rate limiting</strong> : Protégez votre route API contre les abus avec un rate limiting par IP.</li>
            <li><strong className="text-white">Cache</strong> : Mettez en cache les réponses fréquentes pour économiser vos crédits.</li>
          </ul>
          <p>
            Testez toujours avec des prompts en français pour valider la qualité dans votre langue cible.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Déploiement sur Vercel</h2>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`vercel --prod`}</code>
            </pre>
          </div>
          <p>
            Le déploiement prend moins de deux minutes avec la CLI Vercel.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Lancez votre chatbot aujourd&apos;hui</h3>
            <p className="text-indigo-200/70 mb-4">
              Nos templates Next.js incluent un chatbot IA prêt à l&apos;emploi.{' '}
              <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">Découvrir les templates</Link>
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
            Vous avez maintenant toutes les clés pour créer un chatbot IA rapide et professionnel.{' '}
            <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">Pour aller plus vite, nos templates SaaS incluent déjà cette architecture complète.</Link>{' '}
            Concentrez-vous sur votre produit, pas sur la plomberie.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/api-ia-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Intégrer une API IA dans Next.js en 3 étapes
              </Link>
            </li>
            <li>
              <Link href="/blog/comparaison-providers-ia-gratuits" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Comparaison des providers IA gratuits
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
