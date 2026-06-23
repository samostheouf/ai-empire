import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "5 Next.js-Vorlagen zum schnellen Start Ihres Startups",
  description: "Entdecken Sie 5 professionelle Next.js-Vorlagen für Ihren Startup-Start. Code-Vorschau, Tech-Stack, Vercel-Deployment.",
  path: '/blog/de/templates-nextjs-premium',
  type: 'article',
  keywords: ['Next.js-Vorlage', 'Startup', 'Next.js', 'Webentwickler', 'Tailwind CSS', 'Premium-Vorlagen', 'SaaS template'],
  publishedTime: '2024-06-10',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '5 Next.js-Vorlagen zum schnellen Start Ihres Startups',
  description: 'Entdecken Sie 5 professionelle Next.js-Vorlagen für Ihren Startup-Start.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-10',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/de/templates-nextjs-premium',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const TEMPLATES = [
  {
    name: 'NeuraSaaS',
    slug: 'neurasaa-kit-complet',
    description: 'Komplettes SaaS-Kit. Auth, Dashboard, Stripe-Abrechnung, Admin-Panel.',
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
    useCase: 'SaaS, Geschäftsanwendungen, B2B-Plattformen',
  },
  {
    name: 'NeuraLanding',
    slug: 'neuralanding-kit-landing',
    description: 'Kit mit 5 hochkonvertierenden Landing Pages. Hero, Pricing, FAQ, Testimonials.',
    price: '49€',
    stack: ['Next.js 14', 'Tailwind', 'Framer Motion'],
    files: 45,
    components: 15,
    code: `// components/PricingSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: 0, features: ['100 Credits/Monat', '3 Endpunkte'] },
  { name: 'Pro', price: 19, features: ['10.000 Credits', 'Alle Endpunkte', 'Vorlagen'] },
  { name: 'Enterprise', price: 69, features: ['Unbegrenzt', 'Dedizierter Support', 'SLA'] },
]

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <motion.div key={plan.name} whileHover={{ y: -8 }}
            className="rounded-2xl border p-8">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-4xl font-bold mt-4">{plan.price}€/Monat</p>
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
    useCase: 'Landing Pages, Verkaufsseiten, Coming Soon',
  },
  {
    name: 'NeuraBlog',
    slug: 'neurablog-moteur-blog-ia',
    description: 'Intelligenter Blog mit KI-Generierung, automatisiertem SEO, Newsletter.',
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
  if (!session) return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 })

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
    useCase: 'Blogs, Content-Websites, Dokumentation',
  },
  {
    name: 'NeuraCommerce',
    slug: 'neuracommerce-ecommerce-ia',
    description: 'KI-gestützter Online-Shop. Produkt-Empfehlungen, Stripe-Checkout.',
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
    prompt: \`Schlage 3 ergänzende Produkte zu "\${product!.name}" in der Kategorie \${product!.category.name} vor\`,
    maxTokens: 200,
  })

  return { similar, aiSuggestions: aiRecs.content }
}`,
    useCase: 'E-Commerce, Online-Shops, Marktplätze',
  },
  {
    name: 'NeuraDashboard',
    slug: 'neuradashboard-admin-panel',
    description: 'Admin-Dashboard mit Echtzeit-Diagrammen, Multi-Tenant-Verwaltung.',
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
      <h3 className="text-lg font-semibold mb-4">Einnahmen</h3>
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
    useCase: 'Admin-Panels, Dashboards, Backoffices',
  },
]

export default function TemplatesNextjsPremiumPage() {
  const articleSchema = generateArticleSchema({
    title: '5 Next.js-Vorlagen zum schnellen Start Ihres Startups',
    description: 'Entdecken Sie 5 professionelle Next.js-Vorlagen für Ihren Startup-Start.',
    slug: 'templates-nextjs-premium',
    datePublished: '2024-06-10',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/de' },
      { name: '5 Next.js-Vorlagen', path: '/blog/de/templates-nextjs-premium' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/de' }, { name: '5 Next.js-Vorlagen', href: '/blog/de/templates-nextjs-premium' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Vorlagen
            </span>
            <span className="text-sm text-indigo-400">10. Juni 2024</span>
            <span className="text-sm text-indigo-400">10 Min. Lesezeit</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            5 Next.js-Vorlagen zum schnellen Start Ihres Startups
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/de/templates-nextjs-premium`} title="5 Next.js-Vorlagen zum schnellen Start Ihres Startups" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Ein Startup zu starten erfordert schnelle Validierung. Entwicklung von Null dauert Wochen. Professionelle Next.js-Vorlagen sparen Ihnen wertvolle Zeit und bieten produktionsfertigen Code. Hier sind 5 konkrete Vorlagen mit Code-Vorschau und Tech-Stack.
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

                <div className="flex flex-wrap gap-2 my-4">
                  {template.stack.map(tech => (
                    <span key={tech} className="rounded-full bg-indigo-900/50 px-3 py-1 text-xs text-indigo-300 border border-indigo-800/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-indigo-400 my-4">
                  <span>{template.files} Dateien</span>
                  <span>{template.components} Komponenten</span>
                  <span>Anwendungsfall: {template.useCase}</span>
                </div>

                <div className="rounded-xl bg-indigo-950/80 border border-indigo-800/30 overflow-hidden my-4">
                  <div className="px-4 py-2 bg-indigo-900/50 border-b border-indigo-800/30">
                    <span className="text-xs text-indigo-400 font-mono">Code-Vorschau</span>
                  </div>
                  <pre className="p-4 text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {template.code}
                  </pre>
                </div>

                <Link
                  href={`/templates/${template.slug}`}
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Vollständige Vorlage ansehen →
                </Link>
              </div>
            ))}

            <h2 className="text-2xl font-bold text-white mt-12">Wie wählt man die richtige Vorlage?</h2>
            <p>
              Die Vorlagenauswahl hängt von Ihrem Projekt ab. Hier ist ein schneller Leitfaden:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Starten Sie ein SaaS?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraSaaS ist die offensichtliche Wahl. Es enthält alles, was Sie brauchen: Auth, Abrechnung, Dashboard.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Benötigen Sie eine Landing Page?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraLanding mit seinen 5 Varianten deckt Sie ab. Hohe Konversion, flüssige Animationen.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Möchten Sie einen Blog?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraBlog integriert KI-Generierung und automatisiertes SEO. Perfekt für Content-Marketing.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Verkaufen Sie Produkte?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraCommerce mit KI-Empfehlungen und Stripe wurde dafür entwickelt.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Benötigen Sie ein Backoffice?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraDashboard bietet Echtzeit-Diagramme und Multi-Tenant-Verwaltung.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Fazit</h2>
            <p>
              Eine gute Vorlage spart Ihnen Wochen der Entwicklung. Die 5 hier vorgestellten Vorlagen decken die häufigsten Anwendungsfälle für ein Startup ab: SaaS, Landing Page, Blog, E-Commerce und Admin-Dashboard.
            </p>
            <p>
              Jede Vorlage ist mit Next.js 14, Tailwind CSS und bewährten Bibliotheken erstellt. Der Code ist sauber, dokumentationsbereit und produktionsfertig.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Alle Vorlagen entdecken
            </h3>
            <p className="mt-3 text-indigo-200">
              10 professionelle Next.js-Vorlagen. Code-Vorschau, Tech-Stack, Vercel-Deployment.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/templates"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Vorlagen durchsuchen
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}