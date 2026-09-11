import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Architecture multi-tenant SaaS IA avec Next.js 14 : isolation, facturation et scale (2026)',
    description: 'Concevez une architecture multi-tenant robuste pour votre SaaS IA avec Next.js 14 : isolation des données, facturation par tenant, rate limiting et passage à l’échelle sans réécrire.',
    path: '/blog/architecture-multi-tenant-saas-ia-nextjs',
    type: 'article',
    keywords: ['SaaS multi-tenant Next.js', 'architecture SaaS IA', 'isolation tenant Next.js', 'facturation SaaS Stripe', 'scale SaaS IA 2026', 'Prisma multi-tenant'],
    publishedTime: '2026-09-10',
    modifiedTime: '2026-09-10',
  })
}

export default function BlogMultiTenantSaasIA() {
  const articleSchema = generateArticleSchema({
    title: 'Architecture multi-tenant SaaS IA avec Next.js 14 : isolation, facturation et scale',
    description: 'Concevez une architecture multi-tenant robuste pour votre SaaS IA avec Next.js 14 : isolation des données, facturation par tenant, rate limiting et passage à l’échelle sans réécrire.',
    slug: 'architecture-multi-tenant-saas-ia-nextjs',
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Architecture multi-tenant SaaS IA', path: '/blog/architecture-multi-tenant-saas-ia-nextjs' },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Architecture multi-tenant SaaS IA', href: '/blog/architecture-multi-tenant-saas-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Architecture
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 10 septembre 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 14 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Architecture multi-tenant SaaS IA avec Next.js 14 : isolation, facturation et scale (2026)
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/architecture-multi-tenant-saas-ia-nextjs`} title="Architecture multi-tenant SaaS IA avec Next.js 14" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Vous lancez un SaaS IA mais chaque client a ses données, ses limites d&apos;usage et sa facture ? Le multi-tenant n&apos;est pas une option : c&apos;est le cœur qui fait la différence entre un prototype et un produit facturable. Avec Next.js 14, Prisma et Stripe, vous pouvez poser une architecture propre dès le jour un — sans sur-ingénierie.
          </p>

          <p>
            Dans ce guide, on détaille l&apos;architecture qui fait tourner <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">nos templates SaaS Next.js</Link> en production : un seul codebase, plusieurs milliers de tenants isolés, une facturation fine à l&apos;usage IA et une scalabilité horizontale sans migration douloureuse.
          </p>

          {/* SOMMAIRE */}
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Sommaire</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Multi-tenant : définition et modèles (shared DB vs schema vs DB)</li>
              <li>Modèle de données Prisma : tenantId partout, RLS light</li>
              <li>Middleware Next.js : résoudre le tenant à chaque requête</li>
              <li>Isolation forte : ce qu&apos;il faut vraiment verrouiller</li>
              <li>Facturation par tenant avec Stripe : quotas IA et webhooks</li>
              <li>Rate limiting et quotas IA par tenant</li>
              <li>Observabilité et passage à l&apos;échelle</li>
              <li>Checklist de mise en production</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">1. Quel modèle multi-tenant choisir ?</h2>
          <p>
            Trois approches dominent. Leur arbitrage est simple : coût d&apos;opération contre isolation.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-white">
                <tr>
                  <th className="px-4 py-3">Modèle</th>
                  <th className="px-4 py-3">Isolation</th>
                  <th className="px-4 py-3">Opération</th>
                  <th className="px-4 py-3">Quand l&apos;adopter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr><td className="px-4 py-3 font-medium text-white">Shared DB + tenantId</td><td className="px-4 py-3">Logique (WHERE)</td><td className="px-4 py-3">Très simple</td><td className="px-4 py-3">95% des SaaS IA &lt; 100k tenants</td></tr>
                <tr><td className="px-4 py-3 font-medium text-white">Schema par tenant</td><td className="px-4 py-3">Forte (Postgres schema)</td><td className="px-4 py-3">Migrations N× schémas</td><td className="px-4 py-3">Exigences réglementaires modérées</td></tr>
                <tr><td className="px-4 py-3 font-medium text-white">DB par tenant</td><td className="px-4 py-3">Maximale</td><td className="px-4 py-3">Lourde (backup, pool)</td><td className="px-4 py-3">Enterprise / données sensibles</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Pour un SaaS IA qui démarre, le modèle <strong className="text-white">shared DB avec colonne <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">tenantId</code></strong> est le bon défaut : un seul schéma Prisma, des index composites, et une isolation garantie par le code (pas par l&apos;infra). Vous pourrez migrer les gros clients vers un schéma dédié plus tard sans réécrire — uniquement en déplaçant leurs données.
          </p>
          <div className="rounded-xl bg-amber-900/20 border border-amber-500/20 p-4">
            <p className="text-sm text-amber-200/80"><strong className="text-amber-300">Règle d&apos;or :</strong> si vous hésitez entre deux modèles, prenez le plus simple et ajoutez des garde-fous logiciels. L&apos;isolation parfaite ne sert à rien si elle vous empêche de shipper.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">2. Modèle de données Prisma : tenantId partout</h2>
          <p>
            Chaque table métier porte <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">tenantId</code>. Pas d&apos;exception. C&apos;est ce qui rend l&apos;isolation auditable et les requêtes prévisibles.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// prisma/schema.prisma
model Tenant {
  id        String   @id @default(cuid())
  slug      String   @unique
  name      String
  plan      String   @default("free") // free | pro | enterprise
  createdAt DateTime @default(now())
  users     User[]
  apiKeys   ApiKey[]
  usage     Usage[]
}

model User {
  id       String @id @default(cuid())
  tenantId String
  tenant   Tenant @relation(fields: [tenantId], references: [id])
  email    String @unique
  role     String @default("member")
  @@index([tenantId])
  @@unique([tenantId, email])
}

model Project {
  id       String @id @default(cuid())
  tenantId String
  tenant   Tenant @relation(fields: [tenantId], references: [id])
  name     String
  @@index([tenantId])
}

model Usage {
  id        String   @id @default(cuid())
  tenantId  String
  tenant    Tenant   @relation(fields: [tenantId], references: [id])
  tokensIn  Int      @default(0)
  tokensOut Int      @default(0)
  costCents Int      @default(0)
  createdAt DateTime @default(now())
  @@index([tenantId, createdAt])
}`}</code>
            </pre>
          </div>

          <p>
            Points clés : index composite <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">[tenantId, createdAt]</code> pour les requêtes de quota et de facturation, contrainte d&apos;unicité par tenant (pas globale), et relation explicite vers <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">Tenant</code>. Toute requête métier passe par un helper qui injecte le tenant courant — jamais de <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">findMany()</code> sans filtre.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/tenant.ts
import { prisma } from '@/lib/db'

export function tenantWhere(tenantId: string) {
  if (!tenantId) throw new Error('tenantId manquant — isolation violée')
  return { tenantId }
}

// Usage systématique
export const listProjects = (tenantId: string) =>
  prisma.project.findMany({ where: tenantWhere(tenantId) })`}</code>
            </pre>
          </div>

          <p>
            Pour aller plus loin sur les coûts par token, lisez notre analyse détaillée : <Link href="/blog/cout-reel-api-ia-2026" className="text-indigo-400 hover:text-indigo-300 underline">Le coût réel d&apos;une API IA en 2026</Link> et <Link href="/blog/optimisation-couts-llm-production" className="text-indigo-400 hover:text-indigo-300 underline">Optimiser les coûts LLM en production</Link>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">3. Résoudre le tenant dans le middleware Next.js</h2>
          <p>
            Le tenant doit être résolu <em>avant</em> vos routes. Le <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">middleware.ts</code> tourne sur l&apos;Edge : pas de Prisma, pas de Node <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">crypto</code>. On décode un cookie de session HMAC ou un header <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">x-tenant-slug</code>.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/middleware.ts (Edge — pas de Prisma)
import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const tenantSlug =
    req.headers.get('x-tenant-slug') ||
    req.nextUrl.hostname.split('.')[0] || // acme.app.com -> acme
    'default'

  // Propager au backend via header (validé côté API)
  const res = NextResponse.next()
  res.headers.set('x-tenant-slug', tenantSlug)
  return res
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }`}</code>
            </pre>
          </div>

          <p>
            Côté API (Node.js), on valide le slug contre la base et on attache <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">tenantId</code> au contexte. Jamais faire confiance au header seul côté métier : toujours re-résoudre depuis une source authentifiée (session, API key).
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/chat/route.ts (Node)
import { prisma } from '@/lib/db'
import { safeQuery } from '@/lib/db'

export async function POST(req: Request) {
  const apiKey = req.headers.get('x-api-key')
  const tenant = await safeQuery(
    () => prisma.apiKey.findUnique({ where: { key: apiKey! }, include: { tenant: true } }),
    null
  )
  if (!tenant) return new Response('Unauthorized', { status: 401 })

  // Toute la suite est scopée par tenant.tenant.id
  // ...
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">4. Isolation forte : la checklist qui évite les fuites</h2>
          <p>
            90% des fuites multi-tenant viennent d&apos;un <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">WHERE tenantId</code> oublié. Voici les garde-fous concrets :
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Helper obligatoire</strong> : interdisez les requêtes Prisma brutes sans <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">tenantWhere()</code> via une règle ESLint custom.</li>
            <li><strong className="text-white">Tests d&apos;isolation</strong> : un test par route qui tente de lire les données d&apos;un autre tenant (doit renvoyer 404, pas 403 — ne pas révéler l&apos;existence).</li>
            <li><strong className="text-white">Recherche et cache</strong> : le cache (Redis/KV) est clé par <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">tenantId:queryHash</code>, jamais par <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">queryHash</code> seul. Idem pour les embeddings RAG.</li>
            <li><strong className="text-white">Exports et webhooks</strong> : chaque export CSV et chaque webhook sortant est signé avec le <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">tenantId</code> dans le payload.</li>
            <li><strong className="text-white">Admin global</strong> : si vous avez un panel admin, loguez chaque cross-tenant access (qui, quand, pourquoi).</li>
          </ul>
          <p>
            Pour l&apos;isolation RAG par tenant, notre tutoriel <Link href="/blog/rag-tutoriel-francais" className="text-indigo-400 hover:text-indigo-300 underline">RAG en français avec Next.js et Groq</Link> et la comparaison <Link href="/blog/rag-vs-finetuning-architecture-decision" className="text-indigo-400 hover:text-indigo-300 underline">RAG vs fine-tuning : décision d&apos;architecture</Link> détaillent le pattern d&apos;index vectoriel par tenant.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">5. Facturation par tenant avec Stripe</h2>
          <p>
            Le multi-tenant et la facturation vont de pair. Chaque tenant a son <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">stripeCustomerId</code> et son <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">stripeSubscriptionId</code>. Le plan détermine les quotas IA, pas une variable d&apos;env globale.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Quotas par plan (source de vérité = base, pas le code)
const PLAN_QUOTAS = {
  free:       { tokensPerMonth: 100_000,  requestsPerMin: 10 },
  pro:        { tokensPerMonth: 5_000_000, requestsPerMin: 60 },
  enterprise: { tokensPerMonth: 50_000_000, requestsPerMin: 300 },
} as const`}</code>
            </pre>
          </div>

          <p>
            Les webhooks Stripe (<code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">customer.subscription.updated</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">invoice.paid</code>) mettent à jour le champ <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">Tenant.plan</code>. La vérification de signature Stripe est idempotente (table <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">webhookEvent</code>). Pour l&apos;implémentation complète, voir <Link href="/blog/webhook-stripe-nextjs-tutorial" className="text-indigo-400 hover:text-indigo-300 underline">Webhooks Stripe avec Next.js : le tutoriel complet</Link> et <Link href="/blog/stripe-billing-nextjs" className="text-indigo-400 hover:text-indigo-300 underline">Stripe Billing avec Next.js</Link>.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Facturation prête en 10 minutes</h3>
            <p className="text-indigo-200/70 mb-4">
              Nos <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">templates SaaS Next.js</Link> incluent déjà Stripe multi-tenant, portail client et usage metering. <Link href="/pricing" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">Voir les prix</Link> — pas de surprise, code source inclus.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">6. Rate limiting et quotas IA par tenant</h2>
          <p>
            Sans garde-fou, un seul tenant peut brûler votre budget Groq/OpenAI en quelques heures. Deux niveaux de protection :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Rate limiting Edge</strong> : 100 req/min par IP + <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">requestsPerMin</code> par tenant (Map en mémoire sur l&apos;Edge, UPSERT atomique en base côté API).</li>
            <li><strong className="text-white">Quota mensuel</strong> : compteur de tokens par tenant, vérifié avant chaque appel IA. En cas de dépassement, réponse 429 avec header <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">Retry-After</code> et redirection vers <Link href="/pricing" className="text-indigo-400 hover:text-indigo-300 underline">/pricing</Link>.</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/rate-limit.ts — vérif avant chaque call IA
export async function checkTenantQuota(tenantId: string) {
  const plan = await getTenantPlan(tenantId)
  const quota = PLAN_QUOTAS[plan]
  const used = await getMonthlyUsage(tenantId) // SUM(tokensIn+tokensOut)
  if (used >= quota.tokensPerMonth) {
    throw Object.assign(new Error('Quota dépassé'), { status: 429 })
  }
}`}</code>
            </pre>
          </div>

          <p>
            Complétez avec un <Link href="/blog/circuit-breaker-pattern-nextjs" className="text-indigo-400 hover:text-indigo-300 underline">circuit breaker</Link> sur vos providers IA pour éviter les cascades de panne quand un tenant déclenche une rafale, et consultez <Link href="/blog/monitoring-ia-production" className="text-indigo-400 hover:text-indigo-300 underline">Monitoring IA en production</Link> pour les métriques par tenant.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">7. Observabilité et passage à l&apos;échelle</h2>
          <p>
            Le jour où un tenant pèse 30% de votre trafic, vous devez le voir avant qu&apos;il ne vous réveille à 3h du matin.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Logs structurés</strong> : chaque log porte <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">tenantId</code> et <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">requestId</code>. Filtrage instantané par client.</li>
            <li><strong className="text-white">Métriques par tenant</strong> : latence p95, tokens/min, erreurs IA — exposées par tenant dans votre dashboard.</li>
            <li><strong className="text-white">Isolation du noisy neighbor</strong> : file d&apos;attente IA séparée par tenant (ou au moins par plan) pour que le free tier ne ralentisse pas l&apos;enterprise.</li>
            <li><strong className="text-white">Sharding futur</strong> : gardez <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">tenantId</code> comme clé de sharding. Quand Postgres force la main, vous pourrez déplacer un gros tenant vers son propre schéma sans changer le code applicatif.</li>
          </ul>
          <p>
            Côté Next.js, ne cassez pas le SSG : gardez les pages marketing en statique et isolez les routes tenant-dépendantes en dynamique. Notre guide <Link href="/blog/edge-runtime-ia" className="text-indigo-400 hover:text-indigo-300 underline">Edge Runtime pour l&apos;IA</Link> et <Link href="/blog/edge-functions-ia-patterns" className="text-indigo-400 hover:text-indigo-300 underline">Patterns Edge Functions IA</Link> couvrent ces arbitrages.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">8. Checklist de mise en production</h2>
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="text-emerald-400">✓</span> <span>Toute table métier a <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs border border-white/10">tenantId</code> + index composite</span></li>
              <li className="flex gap-3"><span className="text-emerald-400">✓</span> <span>Middleware résout le tenant, API re-valide — jamais confiance au header seul</span></li>
              <li className="flex gap-3"><span className="text-emerald-400">✓</span> <span>Helper <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs border border-white/10">tenantWhere()</code> obligatoire (ESLint) + tests d&apos;isolation cross-tenant</span></li>
              <li className="flex gap-3"><span className="text-emerald-400">✓</span> <span>Cache et embeddings cléés par <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs border border-white/10">tenantId</code></span></li>
              <li className="flex gap-3"><span className="text-emerald-400">✓</span> <span>Stripe webhook idempotent + quotas par plan en base</span></li>
              <li className="flex gap-3"><span className="text-emerald-400">✓</span> <span>Rate limiting Edge + quota mensuel avant chaque call IA</span></li>
              <li className="flex gap-3"><span className="text-emerald-400">✓</span> <span>Logs et métriques taggés <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs border border-white/10">tenantId</code>, dashboard par tenant</span></li>
              <li className="flex gap-3"><span className="text-emerald-400">✓</span> <span>RGPD : suppression par tenant en une requête (cascade), voir <Link href="/blog/ia-rgpd-conformite-2026" className="text-indigo-400 hover:text-indigo-300 underline">IA &amp; RGPD 2026</Link></span></li>
            </ul>
          </div>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Démarrez avec une base multi-tenant propre</h3>
            <p className="text-indigo-200/70 mb-4">
              Plutôt que de bricoler l&apos;isolation après coup, partez d&apos;une base qui l&apos;intègre nativement.{' '}
              <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">Explorer les templates</Link> ou{' '}
              <Link href="/api-docs" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">consulter l&apos;API docs</Link> pour voir le pattern en action.
            </p>
            <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300">
              Voir les prix →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Une architecture multi-tenant bien pensée ne se voit pas — elle se ressent : pas de fuite de données, pas de facture surprise, pas de nuit blanche quand un client scale. Avec Next.js 14, un <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">tenantId</code> systématique, un middleware Edge léger et une facturation Stripe par tenant, vous avez une fondation qui tient de 10 à 10 000 clients sans réécrire.{' '}
            <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">Nos templates intègrent déjà ce pattern complet</Link> — concentrez-vous sur votre valeur IA, pas sur la plomberie multi-tenant.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/rag-vs-finetuning-architecture-decision" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                RAG vs fine-tuning : décision d&apos;architecture
              </Link>
            </li>
            <li>
              <Link href="/blog/circuit-breaker-pattern-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Circuit breaker pattern avec Next.js
              </Link>
            </li>
            <li>
              <Link href="/blog/monitoring-ia-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Monitoring IA en production
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
