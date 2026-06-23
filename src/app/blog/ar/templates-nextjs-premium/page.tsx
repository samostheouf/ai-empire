import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "5 قوالب Next.js لإطلاق شركتك الناشئة بسرعة",
  description: "اكتشف 5 قوالب Next.js احترافية لإطلاق شركتك الناشئة. معاينة الكود وال Stack التقني والنشر على Vercel.",
  path: '/blog/ar/templates-nextjs-premium',
  type: 'article',
  keywords: ['قالب Next.js', 'شركة ناشئة', 'Next.js', 'مطور ويب', 'Tailwind CSS', 'قوالب مميزة', 'SaaS template'],
  publishedTime: '2024-06-10',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '5 قوالب Next.js لإطلاق شركتك الناشئة بسرعة',
  description: 'اكتشف 5 قوالب Next.js احترافية لإطلاق شركتك الناشئة.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-10',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/ar/templates-nextjs-premium',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const TEMPLATES = [
  {
    name: 'NeuraSaaS',
    slug: 'neurasaa-kit-complet',
    description: 'طقم كامل لنظام SaaS. المصادقة ولوحة التحكم والفوترة عبر Stripe ولوحة الإدارة.',
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
    useCase: 'SaaS، تطبيقات الأعمال، منصات B2B',
  },
  {
    name: 'NeuraLanding',
    slug: 'neuralanding-kit-landing',
    description: 'طقم من 5 صفحات هبوط عالية التحويل. الصفحة الرئيسية والأسعار والأسئلة الشائعة والشهادات.',
    price: '49€',
    stack: ['Next.js 14', 'Tailwind', 'Framer Motion'],
    files: 45,
    components: 15,
    code: `// components/PricingSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: 0, features: ['100 رصيد/شهر', '3 نقاط نهاية'] },
  { name: 'Pro', price: 19, features: ['10,000 رصيد', 'جميع نقاط النهاية', 'القوالب'] },
  { name: 'Enterprise', price: 69, features: ['غير محدود', 'دعم مخصص', 'SLA'] },
]

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <motion.div key={plan.name} whileHover={{ y: -8 }}
            className="rounded-2xl border p-8">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-4xl font-bold mt-4">{plan.price}€/شهر</p>
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
    useCase: 'صفحات الهبوط، صفحات المبيعات، قريباً',
  },
  {
    name: 'NeuraBlog',
    slug: 'neurablog-moteur-blog-ia',
    description: 'مدونة ذكية مع توليد الذكاء الاصطناعي و SEO آلي والنشرة الإخبارية.',
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
  if (!session) return NextResponse.json({ error: 'غير مصرح به' }, { status: 401 })

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
    useCase: 'المدونات، مواقع المحتوى، التوثيق',
  },
  {
    name: 'NeuraCommerce',
    slug: 'neuracommerce-ecommerce-ia',
    description: 'متجر إلكتروني مدعوم بالذكاء الاصطناعي. توصيات المنتجات والدفع عبر Stripe.',
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
    prompt: \`اقترح 3 منتجات مكملة لـ "\${product!.name}" في فئة \${product!.category.name}\`,
    maxTokens: 200,
  })

  return { similar, aiSuggestions: aiRecs.content }
}`,
    useCase: 'التجارة الإلكترونية، المتاجر الإلكترونية، الأسواق',
  },
  {
    name: 'NeuraDashboard',
    slug: 'neuradashboard-admin-panel',
    description: 'لوحة تحكم إدارية مع رسوم بيانية في الوقت الفعلي وإدارة متعددة المستأجرين.',
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
      <h3 className="text-lg font-semibold mb-4">الإيرادات</h3>
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
    useCase: 'لوحات الإدارة، لوحات التحكم، الخلفيات الإدارية',
  },
]

export default function TemplatesNextjsPremiumPage() {
  const articleSchema = generateArticleSchema({
    title: '5 قوالب Next.js لإطلاق شركتك الناشئة بسرعة',
    description: 'اكتشف 5 قوالب Next.js احترافية لإطلاق شركتك الناشئة.',
    slug: 'templates-nextjs-premium',
    datePublished: '2024-06-10',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/ar' },
      { name: '5 قوالب Next.js', path: '/blog/ar/templates-nextjs-premium' },
    ],
  })

  return (
    <div dir="rtl" lang="ar" className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/ar' }, { name: '5 قوالب Next.js', href: '/blog/ar/templates-nextjs-premium' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              القوالب
            </span>
            <span className="text-sm text-indigo-400">10 يونيو 2024</span>
            <span className="text-sm text-indigo-400">10 دقائق قراءة</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            5 قوالب Next.js لإطلاق شركتك الناشئة بسرعة
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ar/templates-nextjs-premium`} title="5 قوالب Next.js لإطلاق شركتك الناشئة بسرعة" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              إطلاق شركة ناشئة يتطلب التحقق بسرعة. التطوير من الصفر يستغرق أسابيع. قوالب Next.js الاحترافية توفر لك وقتاً ثميناً مع تقديم كود جاهز للإنتاج. إليك 5 قوالب ملموسة، مع معاينة الكود وال Stack التقني.
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
                  <span>{template.files} ملفات</span>
                  <span>{template.components} مكونات</span>
                  <span>حالة الاستخدام: {template.useCase}</span>
                </div>

                <div className="rounded-xl bg-indigo-950/80 border border-indigo-800/30 overflow-hidden my-4">
                  <div className="px-4 py-2 bg-indigo-900/50 border-b border-indigo-800/30">
                    <span className="text-xs text-indigo-400 font-mono">معاينة الكود</span>
                  </div>
                  <pre className="p-4 text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {template.code}
                  </pre>
                </div>

                <Link
                  href={`/templates/${template.slug}`}
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-white text-sm font-medium transition-colors"
                >
                  عرض القالب الكامل ←
                </Link>
              </div>
            ))}

            <h2 className="text-2xl font-bold text-white mt-12">كيف تختار القالب المناسب؟</h2>
            <p>
              يعتمد اختيار القالب على مشروعك. إليك دليلاً سريعاً:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">تطلق نظام SaaS؟</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraSaaS هو الخيار الواضح. يشمل كل ما تحتاجه: المصادقة والفوترة ولوحة التحكم.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">تحتاج صفحة هبوط؟</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraLanding مع خصائصه الخمس يغطيك. تحويل عالٍ ورسوم متحركة سلسة.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">تريد مدونة؟</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraBlog يدمج توليد الذكاء الاصطناعي والSEO الآلي. مثالي لتسويق المحتوى.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">تبيع منتجات؟</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraCommerce مع التوصيات بالذكاء الاصطناعي وStripe صُمم لهذا الغرض.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">تحتاج خلفية إدارية؟</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraDashboard يوفر رسوماً بيانية في الوقت الفعلي وإدارة متعددة المستأجرين.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">الخاتمة</h2>
            <p>
              القالب الجيد يوفر لك أسابيعاً من التطوير. القوالب الخمسة المقدمة هنا تغطي حالات الاستخدام الأكثر شيوعاً لشركة ناشئة: SaaS، صفحة هبوط، مدونة، تجارة إلكترونية ولوحة تحكم إدارية.
            </p>
            <p>
              كل قالب مبني بـ Next.js 14 و Tailwind CSS ومكتبات موثوقة. الكود نظيف وموثوق وجاهز للإنتاج.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              استكشف جميع القوالب
            </h3>
            <p className="mt-3 text-indigo-200">
              10 قوالب Next.js احترافية. معاينة الكود وال Stack التقني والنشر على Vercel.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/templates"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                تصفح القوالب
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                عرض الأسعار
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}