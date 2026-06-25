import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return genMeta({
    title: t('blogNextjsSaasStarterTitle'),
    description: t('blogNextjsSaasStarterDescription'),
    path: '/blog/nextjs-saas-starter',
    type: 'article',
    keywords: [t('blogNextjsSaasStarterKw1'), t('blogNextjsSaasStarterKw2'), t('blogNextjsSaasStarterKw3'), t('blogNextjsSaasStarterKw4'), t('blogNextjsSaasStarterKw5'), t('blogNextjsSaasStarterKw6'), t('blogNextjsSaasStarterKw7'), t('blogNextjsSaasStarterKw8')],
    publishedTime: '2026-06-20',
    modifiedTime: '2026-06-20',
  })
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default async function NextjsSaasStarterPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const articleSchema = generateArticleSchema({
    title: t('blogNextjsSaasStarterTitle'),
    description: t('blogNextjsSaasStarterSchemaDesc'),
    slug: 'nextjs-saas-starter',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t('blogBreadcrumbBlog'), path: '/blog' },
      { name: t('blogNextjsSaasStarterBreadcrumb'), path: '/blog/nextjs-saas-starter' },
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
        <Breadcrumb items={[{ name: t('blogBreadcrumbBlog'), href: '/blog' }, { name: t('blogNextjsSaasStarterBreadcrumbShort'), href: '/blog/nextjs-saas-starter' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> {t('blogNextjsSaasStarterTag')}
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> {t('blogNextjsSaasStarterDate')}</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> {t('blogNextjsSaasStarterReadTime')}</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            {t('blogNextjsSaasStarterH1')}
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/nextjs-saas-starter`} title={t('blogNextjsSaasStarterShareTitle')} />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            {t('blogNextjsSaasStarterIntro')}
          </p>

          <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
            <h3 className="text-white font-semibold mb-2">{t('blogNextjsSaasStarterPrereqTitle')}</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
              <li>{t('blogNextjsSaasStarterPrereq1')}</li>
              <li>{t('blogNextjsSaasStarterPrereq2')}</li>
              <li>{t('blogNextjsSaasStarterPrereq3')}</li>
              <li>{t('blogNextjsSaasStarterPrereq4')}</li>
              <li>{t('blogNextjsSaasStarterPrereq5')}</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogNextjsSaasStarterH2WhyNextjs')}</h2>
          <p>
            {t('blogNextjsSaasStarterPWhyNextjs1')}
          </p>
          <p>
            {t('blogNextjsSaasStarterPWhyNextjs2')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogNextjsSaasStarterH2Step1')}</h2>
          <p>
            {t('blogNextjsSaasStarterPStep1')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npx create-next-app@14 mon-saas \\
  --typescript --tailwind --eslint --app \\
  --src-dir --import-alias "@/*"

cd mon-saas

# Installer les dépendances essentielles
npm install prisma @prisma/client next-auth
npm install stripe @stripe/stripe-js
npm install zod react-hook-form
npm install @neuraapi/sdk`}</code>
            </pre>
          </div>
          <p>
            <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">zod</code> {t('blogNextjsSaasStarterPStep1b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">react-hook-form</code> {t('blogNextjsSaasStarterPStep1c')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">@neuraapi/sdk</code> {t('blogNextjsSaasStarterPStep1d')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogNextjsSaasStarterH2Step2')}</h2>
          <p>
            {t('blogNextjsSaasStarterPStep2')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npx prisma init --datasource-provider postgresql`}</code>
            </pre>
          </div>
          <p>
            {t('blogNextjsSaasStarterPStep2b')}
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
  id             String         @id @default(cuid())
  email          String         @unique
  name           String?
  password       String
  plan           String         @default("free")
  stripeCustomerId String?      @unique
  apiKey         String         @unique @default(cuid())
  createdAt      DateTime       @default(now())
  updatedAt      DateTime       @updatedAt
  projects       Project[]
  subscription   Subscription?
}

model Project {
  id        String   @id @default(cuid())
  name      String
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
}

model Subscription {
  id                 String   @id @default(cuid())
  userId             String   @unique
  user               User     @relation(fields: [userId], references: [id])
  stripeSubscriptionId String @unique
  status             String
  plan               String
  currentPeriodEnd   DateTime
}`}</code>
            </pre>
          </div>
          <p>
            {t('blogNextjsSaasStarterPStep2c')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogNextjsSaasStarterH2Step3')}</h2>
          <p>
            {t('blogNextjsSaasStarterPStep3')}
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
        password: { label: 'Mot de passe', type: 'password' },
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
          <p>
            {t('blogNextjsSaasStarterPStep3b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">/login</code> {t('blogNextjsSaasStarterPStep3c')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">/register</code> {t('blogNextjsSaasStarterPStep3d')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">react-hook-form</code> {t('blogNextjsSaasStarterPStep3e')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">zod</code> {t('blogNextjsSaasStarterPStep3f')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogNextjsSaasStarterH2Step4')}</h2>
          <p>
            {t('blogNextjsSaasStarterPStep4')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/dashboard/layout.tsx
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/dashboard/Sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) redirect('/login')

  return (
    <div className="flex min-h-screen">
      <Sidebar user={session.user} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}`}</code>
            </pre>
          </div>
          <p>
            {t('blogNextjsSaasStarterPStep4b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">/login</code>. {t('blogNextjsSaasStarterPStep4c')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogNextjsSaasStarterH2Step5')}</h2>
          <p>
            {t('blogNextjsSaasStarterPStep5')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const PLANS = {
  starter: { priceId: 'price_xxx', name: 'Starter' },
  pro: { priceId: 'price_yyy', name: 'Pro' },
  enterprise: { priceId: 'price_zzz', name: 'Entreprise' },
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { plan } = await req.json()
  const selectedPlan = PLANS[plan as keyof typeof PLANS]
  if (!selectedPlan) {
    return NextResponse.json({ error: 'Plan invalide' }, { status: 400 })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: session.user.email!,
    line_items: [{ price: selectedPlan.priceId, quantity: 1 }],
    success_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true\`,
    cancel_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true\`,
    metadata: { userId: session.user.id, plan },
  })

  return NextResponse.json({ url: checkoutSession.url })
}`}</code>
            </pre>
          </div>
          <p>
            {t('blogNextjsSaasStarterPStep5b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">checkout.session.completed</code> {t('blogNextjsSaasStarterPStep5c')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">customer.subscription.deleted</code> {t('blogNextjsSaasStarterPStep5d')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogNextjsSaasStarterH2Step6')}</h2>
          <p>
            {t('blogNextjsSaasStarterPStep6')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/ai.ts
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function generateContent(prompt: string, userId: string) {
  // Vérifier le quota utilisateur
  const credits = await checkCredits(userId)
  if (credits <= 0) {
    throw new Error('Crédits épuisés. Passez au plan supérieur.')
  }

  const result = await ai.generate({
    prompt,
    maxTokens: 1000,
  })

  // Déduire un crédit
  await consumeCredit(userId)

  return result.content
}`}</code>
            </pre>
          </div>
          <p>
            {t('blogNextjsSaasStarterPStep6b')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogNextjsSaasStarterH2Step7')}</h2>
          <p>
            {t('blogNextjsSaasStarterPStep7')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Installer Vercel CLI
npm i -g vercel

# Déployer en staging
vercel

# Configurer les variables d'environnement
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add STRIPE_SECRET_KEY
vercel env add STRIPE_WEBHOOK_SECRET
vercel env add NEURA_API_KEY

# Déployer en production
vercel --prod`}</code>
            </pre>
          </div>
          <p>
            {t('blogNextjsSaasStarterPStep7b')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogNextjsSaasStarterH2Step8')}</h2>
          <p>
            {t('blogNextjsSaasStarterPStep8')}
          </p>
          <ul className="list-disc list-inside space-y-2 text-indigo-300">
            <li>{t('blogNextjsSaasStarterLi8a')}</li>
            <li>{t('blogNextjsSaasStarterLi8b')}</li>
            <li>{t('blogNextjsSaasStarterLi8c')}</li>
            <li>{t('blogNextjsSaasStarterLi8d')}</li>
            <li>{t('blogNextjsSaasStarterLi8e')}</li>
            <li>{t('blogNextjsSaasStarterLi8f')}</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogNextjsSaasStarterH2Recap')}</h2>
          <div className="rounded-2xl glass-card p-6 space-y-3">
            {[
              { step: '1', time: t('blogNextjsSaasStarterRecap1Time'), desc: t('blogNextjsSaasStarterRecap1Desc') },
              { step: '2', time: t('blogNextjsSaasStarterRecap2Time'), desc: t('blogNextjsSaasStarterRecap2Desc') },
              { step: '3', time: t('blogNextjsSaasStarterRecap3Time'), desc: t('blogNextjsSaasStarterRecap3Desc') },
              { step: '4', time: t('blogNextjsSaasStarterRecap4Time'), desc: t('blogNextjsSaasStarterRecap4Desc') },
              { step: '5', time: t('blogNextjsSaasStarterRecap5Time'), desc: t('blogNextjsSaasStarterRecap5Desc') },
              { step: '6', time: t('blogNextjsSaasStarterRecap6Time'), desc: t('blogNextjsSaasStarterRecap6Desc') },
              { step: '7', time: t('blogNextjsSaasStarterRecap7Time'), desc: t('blogNextjsSaasStarterRecap7Desc') },
              { step: '8', time: t('blogNextjsSaasStarterRecap8Time'), desc: t('blogNextjsSaasStarterRecap8Desc') },
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

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6 mt-8">
            <h3 className="text-lg font-semibold text-white mb-2">{t('blogNextjsSaasStarterCtaTitle')}</h3>
            <p className="text-indigo-200/70 mb-4">
              {t('blogNextjsSaasStarterCtaDesc')} <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link>: {t('blogNextjsSaasStarterCtaDesc2')}
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              {t('blogViewPricing')}
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">{t('blogRelatedArticles')}</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/ai-api-integration" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                {t('blogRelatedAiApiIntegration')}
              </Link>
            </li>
            <li>
              <Link href="/blog/stripe-billing-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                {t('blogRelatedStripeBilling')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
