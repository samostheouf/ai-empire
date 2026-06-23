import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "إنشاء SaaS في 48 ساعة: دليل خطوة بخطوة",
  description: "دليل كامل لإطلاق SaaS الخاص بك في 48 ساعة باستخدام Next.js 14 و Stripe و Prisma و Vercel. الإعداد، المصادقة، لوحة التحكم، الفواتير، النشر.",
  path: '/blog/ar/creer-saas-48h',
  type: 'article',
  keywords: ['قالب SaaS', 'Next.js', 'Stripe', 'مطور ويب', 'قالب next.js', 'إطلاق SaaS'],
  publishedTime: '2026-02-10',
  modifiedTime: '2026-06-20',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function BlogCreerSaaS() {
  const articleSchema = generateArticleSchema({
    title: 'إنشاء SaaS في 48 ساعة: دليل خطوة بخطوة',
    description: 'دليل كامل لإطلاق SaaS الخاص بك في 48 ساعة باستخدام Next.js 14 و Stripe و Prisma و Vercel.',
    slug: 'creer-saas-48h',
    datePublished: '2026-02-10',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'SaaS في 48 ساعة', path: '/blog/ar/creer-saas-48h' },
    ],
  })

  return (
    <article dir="rtl" lang="ar" className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'المدونة', href: '/blog/ar' }, { name: 'SaaS في 48 ساعة', href: '/blog/ar/creer-saas-48h' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> دليل
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 10 فبراير 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 10 دقائق قراءة</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            إنشاء SaaS في 48 ساعة: دليل خطوة بخطوة
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/ar/creer-saas-48h`} title="إنشاء SaaS في 48 ساعة: دليل خطوة بخطوة" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            إطلاق SaaS لم يعد يتطلب أشهر من التطوير. مع الأدوات الصحيحة — Next.js 14، Stripe،
            Prisma، Vercel — يمكنك الحصول على منتج وظيفي في 48 ساعة. يوضح هذا الدليل كل خطوة،
            من أول commit إلى النشر في بيئة الإنتاج.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">اليوم الأول — الأساسات (ساعات 0-12)</h2>

          <h3 className="text-xl font-semibold text-white mt-8">الخطوة 1: تهيئة المشروع</h3>
          <p>
            ابدأ بإنشاء مشروع Next.js 14 مع TypeScript و Tailwind CSS و App Router:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npx create-next-app@14 my-saas \\
  --typescript --tailwind --eslint --app \\
  --src-dir --import-alias "@/*"

cd my-saas

# تثبيت التبعيات الأساسية
npm install prisma @prisma/client next-auth
npm install stripe @stripe/stripe-js
npm install zod react-hook-form
npm install @neuraapi/sdk`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">الخطوة 2: تكوين قاعدة البيانات</h3>
          <p>
            Prisma يوفر طبقة ORM بديهية. قم بتهيئتها باستخدام PostgreSQL:
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

          <h3 className="text-xl font-semibold text-white mt-8">الخطوة 3: تنفيذ المصادقة</h3>
          <p>
            NextAuth.js هو الخيار القياسي لـ Next.js. قم بتكوينه باستخدام بيانات الاعتماد:
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
        email: { label: 'البريد الإلكتروني', type: 'email' },
        password: { label: 'كلمة المرور', type: 'password' },
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

          <h2 className="text-2xl font-bold text-white mt-12">اليوم الثاني — الفواتير والنشر</h2>

          <h3 className="text-xl font-semibold text-white mt-8">الخطوة 4: دمج Stripe</h3>

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

          <h3 className="text-xl font-semibold text-white mt-8">الخطوة 5: النشر على Vercel</h3>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel

# تكوين متغيرات البيئة
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add STRIPE_SECRET_KEY

# النشر في بيئة الإنتاج
vercel --prod`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">ملخص 48 ساعة</h2>
          <div className="rounded-2xl glass-card p-6 space-y-3">
            {[
              { step: '1', time: 'ساعات 0-4', desc: 'إعداد المشروع، التبعيات، قاعدة بيانات Prisma' },
              { step: '2', time: 'ساعات 4-12', desc: 'مصادقة NextAuth، التسجيل، تسجيل الدخول' },
              { step: '3', time: 'ساعات 12-24', desc: 'لوحة التحكم، التخطيط، الملاحة، الإعدادات' },
              { step: '4', time: 'ساعات 24-36', desc: 'Checkout Stripe، Webhooks، إدارة الاشتراكات' },
              { step: '5', time: 'ساعات 36-44', desc: 'صفحة الهبوط، SEO، البريد الإلكتروني المعاملاتي' },
              { step: '6', time: 'ساعات 44-48', desc: 'الاختبارات، نشر Vercel، المراقبة' },
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
            <h3 className="text-lg font-semibold text-white mb-2">هل تحتاج مساراً مختصراً؟</h3>
            <p className="text-indigo-200/70 mb-4">
              القالب <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> يتضمن
              كل هذا الدليل مُعدّ مسبقاً: المصادقة، لوحة التحكم، Stripe، صفحة الهبوط، لوحة الإدارة. وفّر 40 ساعة من التطوير.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              عرض الأسعار ←
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">مقالات ذات صلة</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/api-ia-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                كيفية دمج واجهة برمجة تطبيقات الذكاء الاصطناعي في Next.js
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                قوالب Next.js المميزة: كيف تختار الصائغ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
