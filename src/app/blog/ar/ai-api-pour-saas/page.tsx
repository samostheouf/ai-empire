import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "كيفية دمج الذكاء الاصطناعي في SaaS الخاص بك في 30 دقيقة",
  description: "درس عملي: ادمج API ذكاء اصطناعي في SaaS Next.js الخاص بك في 30 دقيقة. قانون قابل للنسخ في كل خطوة، أفضل الممارسات، النشر.",
  path: '/blog/ar/ai-api-pour-saas',
  type: 'article',
  keywords: ['API ذكاء اصطناعي', 'قالب SaaS', 'الذكاء الاصطناعي', 'تكامل API', 'Next.js', 'درس', 'قالب next.js', 'مطور ويب'],
  publishedTime: '2024-06-15',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiPourSaasPage() {
  const articleSchema = generateArticleSchema({
    title: 'كيفية دمج الذكاء الاصطناعي في SaaS الخاص بك في 30 دقيقة',
    description: 'درس عملي: ادمج API ذكاء اصطناعي في SaaS Next.js الخاص بك في 30 دقيقة.',
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'المدونة', path: '/blog' },
      { name: 'دمج الذكاء الاصطناعي في 30 دقيقة', path: '/blog/ar/ai-api-pour-saas' },
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

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8" dir="rtl" lang="ar">
        <Breadcrumb items={[{ name: 'المدونة', href: '/blog' }, { name: 'AI في 30 دقيقة', href: '/blog/ar/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              درس
            </span>
            <span className="text-sm text-indigo-400">15 يونيو 2024</span>
            <span className="text-sm text-indigo-400">12 دقيقة للقراءة</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            كيفية دمج الذكاء الاصطناعي في SaaS الخاص بك في 30 دقيقة
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ar/ai-api-pour-saas`} title="كيفية دمج الذكاء الاصطناعي في SaaS الخاص بك في 30 دقيقة" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              إضافة الذكاء الاصطناعي إلى SaaS الخاص بك لم تعد محفوظة للشركات الكبيرة. مع APIs المناسبة، يمكنك دمج إنتاج النصوص وتحسين محركات البحث الآلي وإنتاج الكود في بضع دقائق. يُظهر لك هذا الدليل بالضبط كيفية القيام بذلك، مع كود قابل للنسخ.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">المتطلبات الأساسية</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>مشروع Next.js 14+ (App Router)</li>
                <li>مفتاح API من NeuraAPI (مجاني على /register)</li>
                <li>Node.js 18+ مثبت</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">الخطوة 1 — أنشئ حسابك واحصل على مفتاح API</h2>
            <p>
              اذهب إلى <a href="/register" className="text-indigo-400 underline">/register</a> وأنشئ حساباً مجانياً. تتلقى فوراً مفتاح API يبدأ بـ <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>. يتم تقديم 100 رصيد شهرياً مجاناً.
            </p>
            <p>
              احتفظ بهذا المفتاح في مكان آمن. سيتم استخدامه في جميع مكالمات API الخاصة بك.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">الخطوة 2 — قم بتثبيت SDK</h2>
            <p>
              ي يجعل SDK TypeScript التكامل فائلاً بسيطاً. تبعية واحدة، صفر تكوين.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">الخطوة 3 — أنشئ خدمة ذكاء اصطناعي من جانب الخادم</h2>
            <p>
              أنشئ ملف <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code> الذي يحتوي على مكالمات API. هذه هي النقطة المركزية لتكاملك.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// lib/ai.ts
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function generateContent(prompt: string) {
  const result = await ai.generate({
    prompt,
    maxTokens: 1000,
  })
  return result.content
}

export async function generateSEO(topic: string, keywords: string[]) {
  const result = await ai.seo({
    topic,
    keywords,
    maxTokens: 2000,
  })
  return {
    title: result.title,
    metaDescription: result.metaDescription,
    content: result.content,
  }
}

export async function generateCode(description: string, language = 'typescript') {
  const result = await ai.code({
    description,
    language,
  })
  return result.code
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">الخطوة 4 — أنشئ مسار API في Next.js</h2>
            <p>
              اعرض مسار API في SaaS الخاص بك. سيتم استدعاء هذا المسار من واجهة المستخدم لتوليد المحتوى.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'غير مصرح' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'الrompt مطلوب' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في التوليد' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">الخطوة 5 — استدعاء من واجهة المستخدم</h2>
            <p>
              من جانب العميل، استدعِ مسار API الخاص بك بـ fetch بسيط. هذا مكون React كامل.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// components/AIGenerator.tsx
'use client'
import { useState } from 'react'

export function AIGenerator() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResult('')

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })

    const data = await res.json()
    setResult(data.content || data.error)
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="صف ما تريد توليده..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? 'جاري التوليد...' : 'توليد'}
      </button>
      {result && (
        <div className="rounded-lg bg-gray-50 p-4">
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">الخطوة 6 — أضف تقييد المعدل</h2>
            <p>
              حماية API الخاص بك من سوء الاستخدام. هذا middleware بسيط يقيّد المكالمات لكل مستخدم.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// lib/rate-limit.ts
const requests = new Map<string, number[]>()

export function rateLimit(key: string, limit = 10, windowMs = 60000) {
  const now = Date.now()
  const timestamps = requests.get(key) || []
  const recent = timestamps.filter(t => now - t < windowMs)

  if (recent.length >= limit) {
    return false
  }

  recent.push(now)
  requests.set(key, recent)
  return true
}

// الاستخدام في مسار API:
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: 'طلبات كثيرة جداً' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">أفضل الممارسات</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">لا تكشف أبداً مفتاح API من جانب العميل</h3>
                <p className="text-sm text-indigo-300">استخدم دائماً بروكسي الخادم (مسار Next.js API) لاستدعاءات API الذكاء الاصطناعي. يجب ألا يظهر مفتاح API أبداً في كود JavaScript المرسل إلى المتصفح.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">تحقق من مدخلات المستخدم</h3>
                <p className="text-sm text-indigo-300">قم دائماً بتطهير والتحقق من الprompt المرسل من المستخدم. حدد الطول، وفلتر الأحرف الخطرة، واستخدم zod أو joi للتحقق.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">خزّن الاستجابات</h3>
                <p className="text-sm text-indigo-300">لل prompts المتشابهة، خزّن استجابات الذكاء الاصطناعي. ذاكرة Redis مع TTL 24 ساعة تقلل التكاليف بشكل كبير دون التأثير على الجودة.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">راقب التكاليف</h3>
                <p className="text-sm text-indigo-300">تتبع استهلاك الرصيد لكل مستخدم و كل ميزة. يمكن أن تكون APIs الذكاء الاصطناعي مكلفة إذا لم يتم تحسينها.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">الخلاصة</h2>
            <p>
              في 6 خطوات بسيطة، قمت بدمج الذكاء الاصطناعي في SaaS الخاص بك. إنتاج المحتوى وتحسين محركات البحث الآلي وإنتاج الكود أصبحت الآن متاحة لمستخدميك. كل ذلك في أقل من 30 دقيقة.
            </p>
            <p>
              NeuraAPI يُبسط هذا التكامل: مفتاح API واحد، SDK TypeScript، نقاط نهاية موثقة. أنت تركز على منتجك، نحن ندير بنية الذكاء الاصطناعي.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              مستعد لدمج الذكاء الاصطناعي؟
            </h3>
            <p className="mt-3 text-indigo-200">
              احصل على مفتاح API المجاني وابدأ البناء في دقائق.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                ابدأ مجاناً
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                اقرأ التوثيق
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
