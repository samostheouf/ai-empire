import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Criar um SaaS em 48h: guia passo a passo",
  description: "Guia completo para lançar seu SaaS em 48h com Next.js 14, Stripe, Prisma e Vercel. Setup, auth, dashboard, faturamento, deploy.",
  path: '/blog/pt/creer-saas-48h',
  type: 'article',
  keywords: ['template SaaS', 'Next.js', 'Stripe', 'desenvolvedor web', 'template next.js', 'lançar um SaaS'],
  publishedTime: '2026-02-10',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Criar um SaaS em 48h: guia passo a passo',
  description: 'Guia completo para lançar seu SaaS em 48h com Next.js 14, Stripe, Prisma e Vercel.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-02-10',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/pt/creer-saas-48h',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function BlogCreerSaaS() {
  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/pt' }, { name: 'SaaS em 48h', href: '/blog/pt/creer-saas-48h' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Guia
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 10 de fevereiro de 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 10 min de leitura</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Criar um SaaS em 48h: guia passo a passo
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/pt/creer-saas-48h`} title="Criar um SaaS em 48h: guia passo a passo" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Lançar um SaaS não requer mais meses de desenvolvimento. Com as ferramentas certas — Next.js 14, Stripe,
            Prisma, Vercel — você pode ter um produto funcional em 48h. Este guia detalha cada passo,
            do primeiro commit ao deploy em produção.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Dia 1 — As fundações (horas 0-12)</h2>

          <h3 className="text-xl font-semibold text-white mt-8">Passo 1: Inicializar o projeto</h3>
          <p>
            Comece criando um projeto Next.js 14 com TypeScript, Tailwind CSS e App Router:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npx create-next-app@14 meu-saas \\
  --typescript --tailwind --eslint --app \\
  --src-dir --import-alias "@/*"

cd meu-saas

# Instalar dependências essenciais
npm install prisma @prisma/client next-auth
npm install stripe @stripe/stripe-js
npm install zod react-hook-form
npm install @neuraapi/sdk`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">Passo 2: Configurar o banco de dados</h3>
          <p>
            O Prisma oferece uma camada ORM intuitiva. Inicialize com PostgreSQL:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  plan      String   @default("starter")
  apiKey    String   @unique @default(cuid())
  createdAt DateTime @default(now())
  projects  Project[]
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">Passo 3: Implementar a autenticação</h3>
          <p>
            O NextAuth.js é a escolha padrão para o Next.js. Configure com credenciais:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/auth.ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './db'
import bcrypt from 'bcryptjs'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email as string },
        })
        if (!user) return null
        const valid = await bcrypt.compare(
          credentials?.password as string, user.password
        )
        if (!valid) return null
        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Dia 2 — Faturamento e deploy</h2>

          <h3 className="text-xl font-semibold text-white mt-8">Passo 4: Integrar o Stripe</h3>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { plan } = await req.json()
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: session.user.email!,
    line_items: [{ price: PLANS[plan].priceId, quantity: 1 }],
    success_url: \`\${process.env.NEXT_URL}/dashboard?success=true\`,
    cancel_url: \`\${process.env.NEXT_URL}/pricing?canceled=true\`,
    metadata: { userId: session.user.id, plan },
  })

  return NextResponse.json({ url: checkoutSession.url })
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">Passo 5: Deploy na Vercel</h3>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variáveis de ambiente
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add STRIPE_SECRET_KEY

# Deploy em produção
vercel --prod`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Resumo das 48 horas</h2>
          <div className="rounded-2xl glass-card p-6 space-y-3">
            {[
              { step: '1', time: 'Horas 0-4', desc: 'Setup do projeto, dependências, banco de dados Prisma' },
              { step: '2', time: 'Horas 4-12', desc: 'Autenticação NextAuth, registro, login' },
              { step: '3', time: 'Horas 12-24', desc: 'Dashboard, layout, navegação, configurações' },
              { step: '4', time: 'Horas 24-36', desc: 'Checkout Stripe, webhooks, gestão de assinatura' },
              { step: '5', time: 'Horas 36-44', desc: 'Landing page, SEO, emails transacionais' },
              { step: '6', time: 'Horas 44-48', desc: 'Testes, deploy Vercel, monitoramento' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-xs font-bold flex items-center justify-center text-white">
                  {item.step}
                </span>
                <span className="text-sm">
                  <strong className="text-white">{item.time}</strong> — {item.desc}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Precisa de um atalho?</h3>
            <p className="text-indigo-200/70 mb-4">
              O template <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> inclui
              tudo deste guia pré-configurado: auth, dashboard, Stripe, landing page, painel admin. Economize 40h de desenvolvimento.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Ver preços →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Artigos relacionados</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/api-ia-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Como integrar uma API de IA no Next.js
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Templates Next.js premium: como escolher o certo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
