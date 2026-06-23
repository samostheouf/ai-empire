import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "5 templates Next.js pour lancer votre startup rapidement",
  description: "Découvrez 5 templates Next.js professionnels pour lancer votre startup. Code preview, stack technique, déploiement Vercel.",
  path: '/blog/templates-nextjs-premium',
  type: 'article',
  keywords: ['template next.js', 'startup', 'Next.js', 'développeur web', 'Tailwind CSS', 'templates premium', 'SaaS template'],
  publishedTime: '2024-06-10',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const TEMPLATES = [
  {
    name: 'NeuraSaaS',
    slug: 'neurasaa-kit-complet',
    description: 'Kit complet pour SaaS. Auth, dashboard, billing Stripe, admin panel.',
    price: '97€',
    stack: ['Next.js 14', 'Tailwind', 'Stripe', 'Prisma', 'NextAuth'],
    files: 124,
    components: 32,
    code: `// app/dashboard/page.tsx
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/DashboardLayout'
import { StatsGrid } from '@/components/StatsGrid'
import { RecentActivity } from '@/components/RecentActivity'

export default async function DashboardPage() {
  const session = await auth()
  if (!session) redirect('/login')

  return (
    <DashboardLayout user={session.user}>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <StatsGrid userId={session.user.id} />
      <RecentActivity userId={session.user.id} />
    </DashboardLayout>
  )
}`,
    useCase: 'SaaS, applications métier, plateformes B2B',
  },
  {
    name: 'NeuraLanding',
    slug: 'neuralanding-kit-landing',
    description: 'Kit de 5 landing pages haute conversion. Hero, pricing, FAQ, témoignages.',
    price: '49€',
    stack: ['Next.js 14', 'Tailwind', 'Framer Motion'],
    files: 45,
    components: 15,
    code: `// components/PricingSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: 0, features: ['100 crédits/mois', '3 endpoints'] },
  { name: 'Pro', price: 19, features: ['10 000 crédits', 'Tous endpoints', 'Templates'] },
  { name: 'Enterprise', price: 69, features: ['Illimité', 'Support dédié', 'SLA'] },
]

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <motion.div key={plan.name} whileHover={{ y: -8 }}
            className="rounded-2xl border p-8">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-4xl font-bold mt-4">{plan.price}€/mois</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}`,
    useCase: 'Landing pages, pages de vente, coming soon',
  },
  {
    name: 'NeuraBlog',
    slug: 'neurablog-moteur-blog-ia',
    description: 'Blog intelligent avec génération IA, SEO automatisé, newsletter.',
    price: '69€',
    stack: ['Next.js 14', 'Tailwind', 'MDX', 'OpenAI', 'Prisma'],
    files: 68,
    components: 18,
    code: `// app/api/generate-article/route.ts
import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const { topic, keywords } = await req.json()

  const response = await fetch('https://ai-empire-steel.vercel.app/api/ai/seo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.NEURA_API_KEY!,
    },
    body: JSON.stringify({ topic, keywords, maxTokens: 2000 }),
  })

  const { title, metaDescription, content } = await response.json()

  const article = await prisma.article.create({
    data: { title, metaDescription, content, authorId: session.user.id },
  })

  return NextResponse.json(article)
}`,
    useCase: 'Blogs, sites de contenu, documentation',
  },
  {
    name: 'NeuraCommerce',
    slug: 'neuracommerce-ecommerce-ia',
    description: 'Boutique en ligne IA. Recommandations produits, checkout Stripe.',
    price: '129€',
    stack: ['Next.js 14', 'Tailwind', 'Stripe', 'Prisma', 'OpenAI'],
    files: 112,
    components: 28,
    code: `// lib/recommendations.ts
import { prisma } from './prisma'
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function getRecommendations(productId: string) {
  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: { category: true, tags: true },
  })

  const similar = await prisma.product.findMany({
    where: {
      categoryId: product!.categoryId,
      id: { not: productId },
    },
    take: 4,
    orderBy: { sales: 'desc' },
  })

  const aiRecs = await ai.generate({
    prompt: \`Suggère 3 produits complémentaires à "\${product!.name}" dans la catégorie \${product!.category.name}\`,
    maxTokens: 200,
  })

  return { similar, aiSuggestions: aiRecs.content }
}`,
    useCase: 'E-commerce, boutiques en ligne, marketplaces',
  },
  {
    name: 'NeuraDashboard',
    slug: 'neuradashboard-admin-panel',
    description: 'Dashboard admin avec graphiques temps réel, gestion multi-tenants.',
    price: '79€',
    stack: ['Next.js 14', 'Tailwind', 'Recharts', 'Prisma', 'shadcn/ui'],
    files: 86,
    components: 24,
    code: `// components/AnalyticsChart.tsx
'use client'
import { useQuery } from '@tanstack/react-query'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function AnalyticsChart({ period = '7d' }) {
  const { data } = useQuery({
    queryKey: ['analytics', period],
    queryFn: () => fetch(\`/api/analytics?period=\${period}\`).then(r => r.json()),
  })

  return (
    <div className="rounded-xl border bg-card p-6">
      <h3 className="text-lg font-semibold mb-4">Revenus</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data?.revenue || []}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}`,
    useCase: 'Admin panels, dashboards, backoffices',
  },
]

export default function TemplatesNextjsPremiumPage() {
  const articleSchema = generateArticleSchema({
    title: '5 templates Next.js pour lancer votre startup rapidement',
    description: 'Découvrez 5 templates Next.js professionnels pour lancer votre startup.',
    slug: 'templates-nextjs-premium',
    datePublished: '2024-06-10',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: '5 templates Next.js', path: '/blog/templates-nextjs-premium' },
    ],
  })

  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: '5 templates Next.js', href: '/blog/templates-nextjs-premium' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Templates
            </span>
            <span className="text-sm text-indigo-400">10 Juin 2024</span>
            <span className="text-sm text-indigo-400">10 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            5 templates Next.js pour lancer votre startup rapidement
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/templates-nextjs-premium`} title="5 templates Next.js pour lancer votre startup rapidement" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Lancer une startup nécessite de valider vite. Le développement from scratch prend des semaines. Les templates Next.js professionnels vous font gagner un temps précieux tout en offrant un code de production. Voici 5 templates concrets, avec un aperçu du code et la stack technique.
            </p>

            {TEMPLATES.map((template, i) => (
              <div key={template.slug} className="my-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h2 className="text-2xl font-bold text-white">{template.name}</h2>
                  <span className="text-indigo-400 font-mono text-sm">{template.price}</span>
                </div>
                <p>{template.description}</p>

                {/* Stack technique */}
                <div className="flex flex-wrap gap-2 my-4">
                  {template.stack.map(tech => (
                    <span key={tech} className="rounded-full bg-indigo-900/50 px-3 py-1 text-xs text-indigo-300 border border-indigo-800/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-indigo-400 my-4">
                  <span>{template.files} fichiers</span>
                  <span>{template.components} composants</span>
                  <span>Utilisation : {template.useCase}</span>
                </div>

                {/* Code preview */}
                <div className="rounded-xl bg-indigo-950/80 border border-indigo-800/30 overflow-hidden my-4">
                  <div className="px-4 py-2 bg-indigo-900/50 border-b border-indigo-800/30">
                    <span className="text-xs text-indigo-400 font-mono">Aperçu du code</span>
                  </div>
                  <pre className="p-4 text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {template.code}
                  </pre>
                </div>

                <Link
                  href={`/templates/${template.slug}`}
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Voir le template complet →
                </Link>
              </div>
            ))}

            <h2 className="text-2xl font-bold text-white mt-12">Comment choisir le bon template ?</h2>
            <p>
              Le choix du template dépend de votre projet. Voici un guide rapide :
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Vous lancez un SaaS ?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraSaaS est le choix évident. Il inclut tout ce dont vous avez besoin : auth, billing, dashboard.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Vous avez besoin d&apos;une landing page ?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraLanding avec ses 5 variantes vous couvre. Haute conversion, animations fluides.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Vous voulez un blog ?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraBlog intègre la génération IA et le SEO automatisé. Parfait pour le content marketing.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Vous vendez des produits ?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraCommerce avec les recommandations IA et Stripe est conçu pour ça.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Vous avez besoin d&apos;un backoffice ?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraDashboard offre graphiques temps réel et gestion multi-tenants.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
            <p>
              Un bon template vous fait gagner des semaines de développement. Les 5 templates présentés ici couvrent les cas d&apos;usage les plus courants pour une startup : SaaS, landing page, blog, e-commerce et dashboard admin.
            </p>
            <p>
              Chaque template est conçu avec Next.js 14, Tailwind CSS et des libraries éprouvées. Le code est propre, documenté et prêt pour la production.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Explorez tous les templates
            </h3>
            <p className="mt-3 text-indigo-200">
              10 templates Next.js professionnels. Code preview, stack technique, déploiement Vercel.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/templates"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Explorer les templates
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
