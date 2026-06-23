import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Crear un SaaS en 48h: guía paso a paso",
  description: "Guía completa para lanzar su SaaS en 48h con Next.js 14, Stripe, Prisma y Vercel. Configuración, auth, panel de control, facturación, despliegue.",
  path: '/blog/es/creer-saas-48h',
  type: 'article',
  keywords: ['plantilla SaaS', 'Next.js', 'Stripe', 'desarrollador web', 'plantilla next.js', 'lanzar un SaaS'],
  publishedTime: '2026-02-10',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Crear un SaaS en 48h: guía paso a paso',
  description: 'Guía completa para lanzar su SaaS en 48h con Next.js 14, Stripe, Prisma y Vercel.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-02-10',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/es/creer-saas-48h',
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/es' }, { name: 'SaaS en 48h', href: '/blog/es/creer-saas-48h' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Guía
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 10 de febrero de 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 10 min de lectura</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Crear un SaaS en 48h: guía paso a paso
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/es/creer-saas-48h`} title="Crear un SaaS en 48h: guía paso a paso" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Lanzar un SaaS ya no requiere meses de desarrollo. Con las herramientas adecuadas — Next.js 14, Stripe,
            Prisma, Vercel — puede tener un producto funcional en 48h. Esta guía detalla cada paso,
            desde el primer commit hasta el despliegue en producción.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Día 1 — Las bases (horas 0-12)</h2>

          <h3 className="text-xl font-semibold text-white mt-8">Paso 1: Inicializar el proyecto</h3>
          <p>
            Comience creando un proyecto Next.js 14 con TypeScript, Tailwind CSS y App Router:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npx create-next-app@14 mi-saas \\
  --typescript --tailwind --eslint --app \\
  --src-dir --import-alias "@/*"

cd mi-saas

# Instalar dependencias esenciales
npm install prisma @prisma/client next-auth
npm install stripe @stripe/stripe-js
npm install zod react-hook-form
npm install @neuraapi/sdk`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">Paso 2: Configurar la base de datos</h3>
          <p>
            Prisma ofrece una capa ORM intuitiva. Inicialícela con PostgreSQL:
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

          <h3 className="text-xl font-semibold text-white mt-8">Paso 3: Implementar la autenticación</h3>
          <p>
            NextAuth.js es la opción estándar para Next.js. Configúrelo con credenciales:
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
        password: { label: 'Contraseña', type: 'password' },
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

          <h2 className="text-2xl font-bold text-white mt-12">Día 2 — Facturación y despliegue</h2>

          <h3 className="text-xl font-semibold text-white mt-8">Paso 4: Integrar Stripe</h3>

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

          <h3 className="text-xl font-semibold text-white mt-8">Paso 5: Desplegar en Vercel</h3>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Configurar variables de entorno
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add STRIPE_SECRET_KEY

# Desplegar en producción
vercel --prod`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Resumen de las 48 horas</h2>
          <div className="rounded-2xl glass-card p-6 space-y-3">
            {[
              { step: '1', time: 'Horas 0-4', desc: 'Configuración del proyecto, dependencias, base de datos Prisma' },
              { step: '2', time: 'Horas 4-12', desc: 'Autenticación NextAuth, registro, inicio de sesión' },
              { step: '3', time: 'Horas 12-24', desc: 'Panel de control, diseño, navegación, configuración' },
              { step: '4', time: 'Horas 24-36', desc: 'Checkout de Stripe, webhooks, gestión de suscripciones' },
              { step: '5', time: 'Horas 36-44', desc: 'Página de aterrizaje, SEO, correos transaccionales' },
              { step: '6', time: 'Horas 44-48', desc: 'Pruebas, despliegue en Vercel, monitoreo' },
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
            <h3 className="text-lg font-semibold text-white mb-2">¿Necesita un atajo?</h3>
            <p className="text-indigo-200/70 mb-4">
              La plantilla <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> incluye
              todo este guide preconfigurado: auth, panel de control, Stripe, página de aterrizaje, panel de administración. Ahorre 40h de desarrollo.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Ver tarifas →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Artículos relacionados</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/api-ia-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Cómo integrar una API de IA en Next.js
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Plantillas Next.js premium: cómo elegir la correcta
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
