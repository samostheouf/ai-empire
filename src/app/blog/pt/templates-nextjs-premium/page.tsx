import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "5 templates Next.js para lançar sua startup rapidamente",
  description: "Descubra 5 templates Next.js profissionais para lançar sua startup. Prévia do código, stack técnica, deploy Vercel.",
  path: '/blog/pt/templates-nextjs-premium',
  type: 'article',
  keywords: ['template next.js', 'startup', 'Next.js', 'desenvolvedor web', 'Tailwind CSS', 'templates premium', 'SaaS template'],
  publishedTime: '2024-06-10',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '5 templates Next.js para lançar sua startup rapidamente',
  description: 'Descubra 5 templates Next.js profissionais para lançar sua startup.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-10',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/pt/templates-nextjs-premium',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const TEMPLATES = [
  {
    name: 'NeuraSaaS',
    slug: 'neurasaa-kit-complet',
    description: 'Kit completo para SaaS. Auth, dashboard, faturamento Stripe, painel admin.',
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
    useCase: 'SaaS, aplicações empresariais, plataformas B2B',
  },
  {
    name: 'NeuraLanding',
    slug: 'neuralanding-kit-landing',
    description: 'Kit de 5 landing pages de alta conversão. Hero, pricing, FAQ, depoimentos.',
    price: '49€',
    stack: ['Next.js 14', 'Tailwind', 'Framer Motion'],
    files: 45,
    components: 15,
    code: `// components/PricingSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: 0, features: ['100 créditos/mês', '3 endpoints'] },
  { name: 'Pro', price: 19, features: ['10.000 créditos', 'Todos endpoints', 'Templates'] },
  { name: 'Enterprise', price: 69, features: ['Ilimitado', 'Suporte dedicado', 'SLA'] },
]

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <motion.div key={plan.name} whileHover={{ y: -8 }}
            className="rounded-2xl border p-8">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-4xl font-bold mt-4">{plan.price}€/mês</p>
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
    useCase: 'Landing pages, páginas de venda, coming soon',
  },
  {
    name: 'NeuraBlog',
    slug: 'neurablog-moteur-blog-ia',
    description: 'Blog inteligente com geração IA, SEO automatizado, newsletter.',
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
  if (!session) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })

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
    useCase: 'Blogs, sites de conteúdo, documentação',
  },
  {
    name: 'NeuraCommerce',
    slug: 'neuracommerce-ecommerce-ia',
    description: 'Loja online com IA. Recomendações de produtos, checkout Stripe.',
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
    prompt: \`Sugira 3 produtos complementares a "\${product!.name}" na categoria \${product!.category.name}\`,
    maxTokens: 200,
  })

  return { similar, aiSuggestions: aiRecs.content }
}`,
    useCase: 'E-commerce, lojas online, marketplaces',
  },
  {
    name: 'NeuraDashboard',
    slug: 'neuradashboard-admin-panel',
    description: 'Painel admin com gráficos em tempo real, gestão multi-tenant.',
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
      <h3 className="text-lg font-semibold mb-4">Receita</h3>
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
    useCase: 'Painéis admin, dashboards, backoffices',
  },
]

export default function TemplatesNextjsPremiumPage() {
  const articleSchema = generateArticleSchema({
    title: '5 templates Next.js para lançar sua startup rapidamente',
    description: 'Descubra 5 templates Next.js profissionais para lançar sua startup.',
    slug: 'templates-nextjs-premium',
    datePublished: '2024-06-10',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/pt' },
      { name: '5 templates Next.js', path: '/blog/pt/templates-nextjs-premium' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/pt' }, { name: '5 templates Next.js', href: '/blog/pt/templates-nextjs-premium' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Templates
            </span>
            <span className="text-sm text-indigo-400">10 de junho de 2024</span>
            <span className="text-sm text-indigo-400">10 min de leitura</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            5 templates Next.js para lançar sua startup rapidamente
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/pt/templates-nextjs-premium`} title="5 templates Next.js para lançar sua startup rapidamente" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Lançar uma startup requer validação rápida. O desenvolvimento do zero leva semanas. Templates Next.js profissionais economizam tempo valioso enquanto fornecem código pronto para produção. Aqui estão 5 templates concretos, com prévia do código e stack técnica.
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
                  <span>{template.files} arquivos</span>
                  <span>{template.components} componentes</span>
                  <span>Caso de uso: {template.useCase}</span>
                </div>

                <div className="rounded-xl bg-indigo-950/80 border border-indigo-800/30 overflow-hidden my-4">
                  <div className="px-4 py-2 bg-indigo-900/50 border-b border-indigo-800/30">
                    <span className="text-xs text-indigo-400 font-mono">Prévia do código</span>
                  </div>
                  <pre className="p-4 text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {template.code}
                  </pre>
                </div>

                <Link
                  href={`/templates/${template.slug}`}
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Ver template completo →
                </Link>
              </div>
            ))}

            <h2 className="text-2xl font-bold text-white mt-12">Como escolher o template certo?</h2>
            <p>
              A escolha do template depende do seu projeto. Aqui está um guia rápido:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Lançando um SaaS?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraSaaS é a escolha óbvia. Inclui tudo que você precisa: auth, faturamento, dashboard.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Precisa de uma landing page?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraLanding com suas 5 variantes te cobre. Alta conversão, animações suaves.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Quer um blog?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraBlog integra geração IA e SEO automatizado. Perfeito para content marketing.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Vende produtos?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraCommerce com recomendações IA e Stripe foi projetado para isso.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">Precisa de um backoffice?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraDashboard oferece gráficos em tempo real e gestão multi-tenant.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusão</h2>
            <p>
              Um bom template economiza semanas de desenvolvimento. Os 5 templates apresentados aqui cobrem os casos de uso mais comuns para uma startup: SaaS, landing page, blog, e-commerce e painel admin.
            </p>
            <p>
              Cada template é construído com Next.js 14, Tailwind CSS e bibliotecas comprovadas. O código é limpo, documentado e pronto para produção.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Explore todos os templates
            </h3>
            <p className="mt-3 text-indigo-200">
              10 templates Next.js profissionais. Prévia do código, stack técnica, deploy Vercel.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/templates"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Explorar templates
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Ver preços
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}