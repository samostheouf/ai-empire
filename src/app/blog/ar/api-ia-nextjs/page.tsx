import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "كيفية دمج واجهة برمجة تطبيقات الذكاء الاصطناعي في Next.js (دليل كامل 2026)",
  description: "دليل عملي: ادمج واجهة برمجة تطبيقات الذكاء الاصطناعي (GPT، Groq، NeuraAPI) في مشروعك Next.js 14. أمثلة كود، SDK TypeScript، أفضل الممارسات.",
  path: '/blog/ar/api-ia-nextjs',
  type: 'article',
  keywords: ['واجهة برمجة ذكاء اصطناعي', 'Next.js', 'SDK TypeScript', 'تكامل الذكاء الاصطناعي', 'قالب next.js', 'مطور ويب'],
  publishedTime: '2026-01-15',
  modifiedTime: '2026-06-20',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function BlogApiIaNextjs() {
  const articleSchema = generateArticleSchema({
    title: 'كيفية دمج واجهة برمجة تطبيقات الذكاء الاصطناعي في Next.js (دليل كامل 2026)',
    description: 'دليل عملي: ادمج واجهة برمجة تطبيقات الذكاء الاصطناعي في مشروعك Next.js 14 باستخدام SDK TypeScript.',
    slug: 'api-ia-nextjs',
    datePublished: '2026-01-15',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'API IA Next.js', path: '/blog/ar/api-ia-nextjs' },
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
        <Breadcrumb items={[{ name: 'المدونة', href: '/blog/ar' }, { name: 'واجهة برمجة الذكاء الاصطناعي Next.js', href: '/blog/ar/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> دليل تعليمي
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 15 يناير 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8 دقائق قراءة</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            كيفية دمج واجهة برمجة تطبيقات الذكاء الاصطناعي في مشروعك Next.js
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/ar/api-ia-nextjs`} title="كيفية دمج واجهة برمجة تطبيقات الذكاء الاصطناعي في Next.js" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            الذكاء الاصطناعي لم يعد محصوراً في الشركات الكبيرة. اليوم،
            يمكن لأي مطور دمج قدرات الذكاء الاصطناعي — توليد النصوص، تحليل الكود،
            تحسين SEO — في تطبيقه Next.js في بضع دقائق فقط. في هذا الدليل، سنرى
            كيفية ربط واجهة برمجة تطبيقات الذكاء الاصطناعي بمشروع Next.js 14 App Router، من الإعداد الأولي إلى النشر في بيئة الإنتاج.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">لماذا Next.js لتطبيق الذكاء الاصطناعي؟</h2>
          <p>
            Next.js 14 يوفر مزايا ملموسة لتطبيقات الذكاء الاصطناعي:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong>: استدعاءات API تتم من جانب الخادم، مفاتيح API لا تُكشف أبداً للعميل</li>
            <li><strong className="text-white">Route Handlers</strong>: أنشئ نقاط نهاية API أصلية بدون خادم Express منفصل</li>
            <li><strong className="text-white">Streaming</strong>: اعرض ردود الذكاء الاصطناعي في الوقت الحقيقي باستخدام <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code></li>
            <li><strong className="text-white">Edge Runtime</strong>: نفذ استدعاءات الذكاء الاصطناعي عند الحافة للحصول على أقل زمن استجابة</li>
            <li><strong className="text-white">Middleware</strong>: حماية مساراتك وإدارة المصادقة قبل كل طلب</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">الخطوة 1: اختيار وتثبيت SDK</h2>
          <p>
            الخطوة الأولى هي اختيار مزود واجهة برمجة تطبيقات الذكاء الاصطناعي وتثبيت SDK الخاص به. فيما يلي الخيارات الرئيسية في 2026:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong>: واجهة برمجة موحدة مع أكثر من 8 نقاط نهاية، SDK TypeScript أصلي، خطة مجانية متاحة</li>
            <li><strong className="text-white">OpenAI</strong>: الرائد التاريخي، نماذج GPT-4o و GPT-4.1</li>
            <li><strong className="text-white">Groq</strong>: استدلال فائق السرعة على النماذج مفتوحة المصدر (Llama، Mixtral)</li>
            <li><strong className="text-white">Anthropic</strong>: Claude، متخصص في تحليل النصوص الطويلة</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# تثبيت SDK NeuraAPI
npm install @neuraapi/sdk

# متغيرات البيئة (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">الخطوة 2: تكوين العميل من جانب الخادم</h2>
          <p>
           أنشئ ملف <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code> لتهيئة العميل:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/neura.ts
import { NeuraAPI } from '@neuraapi/sdk'

const neurapi = new NeuraAPI({
  apiKey: process.env.NEURAPI_KEY!,
})

export default neurapi`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">الخطوة 3: إنشاء نقطة نهاية API</h2>
          <p>
            استخدم Route Handlers في Next.js لإنشاء نقطة نهاية ستستقبل طلبات العميل:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'ar' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: 'يجب أن يحتوي الموجه على 10 أحرف على الأقل' },
      { status: 400 }
    )
  }

  try {
    const result = await neurapi.generate({
      prompt,
      language,
      maxTokens: 2048,
    })

    return NextResponse.json({
      content: result.text,
      tokensUsed: result.usage.totalTokens,
      model: result.model,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'خطأ أثناء التوليد' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">استخدام نقاط نهاية الذكاء الاصطناعي الأخرى</h2>
          <p>
            NeuraAPI تقدم أكثر من 8 نقاط نهاية للذكاء الاصطناعي. إليك كيفية استخدام بعض أكثرها فائدة:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// تحسين SEO
const seoResult = await neurapi.seo({
  url: 'https://mysite.com/page',
  keywords: ['next.js', 'saas', 'template'],
})

// توليد الكود
const codeResult = await neurapi.code({
  prompt: 'إنشاء مكون React لعرض جدول',
  language: 'typescript',
})

// تحليل المشاعر
const sentimentResult = await neurapi.sentiment({
  text: 'هذا المنتج رائع، أوصي به!',
})

// روبوت محادثة سياقي
const chatResult = await neurapi.chat({
  message: 'كيف أنشر تطبيقي على Vercel؟',
  context: 'أنت مساعد تقني لـ Next.js',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">أفضل الممارسات في بيئة الإنتاج</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">تحقق دائماً من المدخلات</strong>: استخدم Zod للتحقق من الموجهات من جانب الخادم</li>
            <li><strong className="text-white">معالجة الأخطاء</strong>: نفذ محاولات مع تراجع أُسّي</li>
            <li><strong className="text-white">تخزين مؤقت للردود</strong>: استخدم Redis أو ذاكرة التخزين المؤقت في Next.js للموجهات المتطابقة</li>
            <li><strong className="text-white">تحديد المعدل</strong>: حدّد عدد الطلبات لكل مستخدم باستخدام middleware</li>
            <li><strong className="text-white">المراقبة</strong>: تتبع الاستخدام باستخدام التحليلات المدمجة</li>
            <li><strong className="text-white">التكاليف</strong>: راقب استهلاك الرموز للبقاء ضمن ميزانيتك</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">هل تحتاج نقطة انطلاق؟</h3>
            <p className="text-indigo-200/70 mb-4">
              القالب <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> يدمج بالفعل
              المصادقة ولوحة التحكم والفواتير. كل ما تحتاجه هو إضافة منطق الذكاء الاصطناعي الخاص بك.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              عرض الأسعار ←
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">الخاتمة</h2>
          <p>
            أصبح دمج واجهة برمجة تطبيقات الذكاء الاصطناعي في Next.js عملية بسيطة ومنظمة. مع SDK المناسب
            وبعض ملفات التكوين وRoute Handlers، يمكنك تقديم قدرات الذكاء الاصطناعي
            لمستخدميك في بضع ساعات فقط. <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">قوالب NeuraAPI المميزة</Link> تذهب
            إلى أبعد من ذلك بتوفير قاعدة جاهزة للإنتاج.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">مقالات ذات صلة</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                إنشاء SaaS في 48 ساعة باستخدام Next.js و Stripe
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
