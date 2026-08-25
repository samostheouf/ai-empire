import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
const SLUG = 'circuit-breaker-pattern-nextjs'
const DATE = '2026-08-25'

export async function generateMetadata() {
  return genMeta({
    title: "Pattern Circuit Breaker en Next.js : protéger vos appels DB et API (2026)",
    description: "Implémentez le pattern Circuit Breaker en Next.js : évitez les cascades d'erreurs quand votre base de données ou vos API externes tombent. Code complet TypeScript.",
    path: `/blog/${SLUG}`,
    type: 'article',
    keywords: ['circuit breaker Next.js', 'pattern circuit breaker', 'résilience API TypeScript', 'gestion erreurs base de données', 'resilience patterns JavaScript'],
    publishedTime: DATE,
    modifiedTime: DATE,
  })
}

function Code({ children }: { children: string }) {
  return (
    <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
      <pre className="text-sm text-indigo-300/80">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default function BlogCircuitBreaker() {
  const articleSchema = generateArticleSchema({
    title: "Pattern Circuit Breaker en Next.js : protéger vos appels DB et API",
    description: "Code complet pour implémenter un circuit breaker autour de Prisma et de vos API externes en Next.js.",
    slug: SLUG,
    datePublished: DATE,
    dateModified: DATE,
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Circuit Breaker Next.js', path: `/blog/${SLUG}` },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Circuit Breaker Next.js', href: `/blog/${SLUG}` }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Architecture
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 25 août 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 11 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Pattern Circuit Breaker en Next.js : protéger vos appels DB et API
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/${SLUG}`} title="Pattern Circuit Breaker en Next.js" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Quand votre base de données ralentit, chaque requête qui attend aggrave la situation :
            les connexions s&apos;accumulent, le pool sature, et tout l&apos;application tombe en
            cascade. Le circuit breaker coupe ce cercle vicieux.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Le principe : trois états</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Closed</strong> : tout va bien, les appels passent normalement.</li>
            <li><strong className="text-white">Open</strong> : trop d&apos;échecs récents — on échoue immédiatement sans même essayer d&apos;appeler la ressource.</li>
            <li><strong className="text-white">Half-open</strong> : après un délai de repos, on laisse passer un appel test pour vérifier si la ressource est revenue.</li>
          </ul>
          <p>
            L&apos;idée clé : quand une dépendance est malade, échouer vite vaut mieux qu&apos;échouer
            lentement. Vos utilisateurs reçoivent une erreur claire en 50 ms au lieu de timeouts à 30 s,
            et la DB respire.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Pourquoi c&apos;est critique avec Prisma + serverless</h2>
          <p>
            Sur Vercel, un pic de trafic pendant une panne de DB multiplie les fonctions qui
            attendent chacune une connexion. Résultat typique : « Too many connections » côté Postgres
            alors que le problème initial était un simple slow query. Le circuit breaker évite
            l&apos;emballement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Implémentation minimale en TypeScript</h2>
          <Code>{`// src/lib/circuit-breaker.ts
type State = 'closed' | 'open' | 'half-open'

export class CircuitBreaker {
  private failures = 0
  private state: State = 'closed'
  private openedAt = 0

  constructor(
    private readonly threshold = 5,      // échecs avant ouverture
    private readonly resetTimeoutMs = 30_000, // repos avant half-open
  ) {}

  async exec<T>(fn: () => Promise<T>, fallback?: () => T): Promise<T> {
    if (this.state === 'open') {
      if (Date.now() - this.openedAt >= this.resetTimeoutMs) {
        this.state = 'half-open'
      } else {
        if (fallback) return fallback()
        throw new Error('circuit_open')
      }
    }

    try {
      const result = await fn()
      this.failures = 0
      this.state = 'closed'
      return result
    } catch (err) {
      this.failures++
      if (this.state === 'half-open' || this.failures >= this.threshold) {
        this.state = 'open'
        this.openedAt = Date.now()
      }
      if (fallback) return fallback()
      throw err
    }
  }
}`}</Code>

          <h2 className="text-2xl font-bold text-white mt-12">Application aux requêtes Prisma</h2>
          <Code>{`// src/lib/db-guarded.ts
import { db } from './db'
import { CircuitBreaker } from './circuit-breaker'

const dbBreaker = new CircuitBreaker(5, 30_000)

export function safeQuery<T>(query: () => Promise<T>): Promise<T | null> {
  return dbBreaker.exec(query, () => null) // fallback : valeur par défaut
}

// Usage dans une page / route API :
const templates = await safeQuery(() =>
  db.template.findMany({ where: { published: true }, take: 20 }),
)

if (!templates) {
  // Dégradé gracieux : affichez du contenu en cache ou un message
}`}</Code>
          <p>
            Le fallback est ce qui distingue un circuit breaker utile d&apos;un simple try/catch :
            l&apos;application reste partiellement fonctionnelle pendant la panne.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Limite du pattern en serverless</h2>
          <p>
            En environnement serverless, l&apos;état vit en mémoire par instance : chaque fonction
            Lambda garde son propre compteur. Trois solutions selon vos besoins :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Par instance</strong> : suffisant dans la plupart des cas — chaque instance se protège individuellement.</li>
            <li><strong className="text-white">État partagé via Upstash Redis</strong> : compteur centralisé, cohérence globale.</li>
            <li><strong className="text-white">Bibliothèque dédiée</strong> : Cockatiel en Node propose retry, timeout et breaker combinés.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Combiner avec timeout et retry</h2>
          <p>Le circuit breaker seul ne suffit pas : combinez-le toujours avec :</p>
          <Code>{`// Timeout + retry limité + breaker
async function resilientCall<T>(fn: () => Promise<T>): Promise<T | null> {
  return dbBreaker.exec(async () => {
    let lastErr: unknown
    for (let i = 0; i < 2; i++) {
      try {
        return await Promise.race([
          fn(),
          new Promise<never>((_, rej) =>
            setTimeout(() => rej(new Error('timeout')), 5000),
          ),
        ])
      } catch (err) { lastErr = err }
    }
    throw lastErr
  }, () => null)
}`}</Code>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Timeout court</strong> : 5 s max sur une query applicative.</li>
            <li><strong className="text-white">Retry limité</strong> : 1–2 tentatives, jamais plus sur des erreurs système.</li>
            <li><strong className="text-white">Breaker</strong> : coupe après N échecs consécutifs.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Checklist de mise en production</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Loggez chaque transition d&apos;état</strong> : open/half-open/closed sont vos meilleurs indicateurs de santé.</li>
            <li><strong className="text-white">Seuils raisonnables</strong> : 5 échecs / 30 s de repos convient à la plupart des DB gérées.</li>
            <li><strong className="text-white">Fallbacks explicites</strong> : décidez pour chaque query si null, cache ou erreur 503 est acceptable.</li>
            <li><strong className="text-white">Ne mettez pas de breaker sur tout</strong> : réservez-le aux dépendances critiques (DB, API de paiement).</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Une architecture résiliente, prête à l&apos;emploi</h3>
            <p className="text-indigo-200/70 mb-4">
              Nos templates SaaS intègrent déjà safeQuery(), retries multi-providers et timeouts
              systématiques.{' '}
              <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">Découvrir les templates</Link>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Le circuit breaker transforme une panne de dépendance d&apos;un crash total en dégradation
            contrôlée. Une classe de 40 lignes, des seuils simples, et votre Next.js survivra à la
            prochaine indisponibilité de votre base de données.{' '}
            <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">Cette résilience est incluse par défaut dans nos templates.</Link>
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
              <Link href="/blog/webhook-stripe-nextjs-tutorial" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Webhook Stripe idempotent avec retry
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
