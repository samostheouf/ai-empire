import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Check, X } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata = generateMetadata({
  title: "قوالب Next.js المميزة: كيف تختار الصائغ في 2026",
  description: "مقارنة قوالب Next.js المميزة. معايير الاختيار، الميزات، المكدس التقني، الأسعار. دليل شامل للمطورين ورواد الأعمال.",
  path: '/blog/ar/templates-premium-guide',
  type: 'article',
  keywords: ['قالب next.js', 'قوالب مميزة', 'قالب SaaS', 'مطور ويب', 'Next.js', 'Tailwind CSS'],
  publishedTime: '2026-03-05',
  modifiedTime: '2026-06-20',
})

const COMPARISON = [
  { feature: 'Next.js 14 App Router', neura: true, themeforest: true, codecanyon: false },
  { feature: 'TypeScript الأصلي', neura: true, themeforest: false, codecanyon: true },
  { feature: 'Tailwind CSS', neura: true, themeforest: true, codecanyon: false },
  { feature: 'تكامل Stripe', neura: true, themeforest: false, codecanyon: false },
  { feature: 'مصادقة كاملة', neura: true, themeforest: false, codecanyon: true },
  { feature: 'لوحة تحكم المسؤول', neura: true, themeforest: false, codecanyon: false },
  { feature: 'توثيق مفصل', neura: true, themeforest: true, codecanyon: false },
  { feature: 'تحديثات مجانية', neura: true, themeforest: false, codecanyon: false },
  { feature: 'دعم عبر البريد الإلكتروني', neura: true, themeforest: false, codecanyon: true },
  { feature: 'SDK TypeScript مضمن', neura: true, themeforest: false, codecanyon: false },
  { feature: 'تكامل الذكاء الاصطناعي', neura: true, themeforest: false, codecanyon: false },
  { feature: 'جاهز للإنتاج', neura: true, themeforest: true, codecanyon: false },
]

export default function BlogTemplatesGuide() {
  const articleSchema = generateArticleSchema({
    title: 'قوالب Next.js المميزة: كيف تختار الصائغ في 2026',
    description: 'مقارنة قوالب Next.js المميزة. معايير الاختيار، الميزات، المكدس التقني.',
    slug: 'templates-premium-guide',
    datePublished: '2026-03-05',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'دليل القوالب', path: '/blog/ar/templates-premium-guide' },
    ],
  })

  return (
    <article className="min-h-screen bg-white" dir="rtl" lang="ar">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 mb-8">
          <ArrowLeft className="w-4 h-4" />
          العودة إلى الصفحة الرئيسية
        </Link>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 5 مارس 2026</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 دقائق للقراءة</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-8">
          قوالب Next.js المميزة: كيف تختار الصائغ في 2026
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          القالب المميز يوفر لك من 40 إلى 200 ساعة من التطوير. لكن ليست جميع القوالب متساوية.
          يوفر لك هذا الدليل معايير ملموسة لاختيار قالب يناسب مشروعك وميزانيتك
          ومستواك التقني.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">معايير الاختيار الأساسية</h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. المكدس التقني</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          الإطار هو أساس مشروعك. في 2026، إليك ما يهم:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li><strong>Next.js 14+ مع App Router</strong>: المعيار لتطبيقات React الحديثة. القوالب بـ Pages Router قديمة.</li>
          <li><strong>TypeScript الأصلي</strong>: ضروري للقابلية للصيانة. قالب بدون TypeScript محفوف بالمخاطر.</li>
          <li><strong>Tailwind CSS</strong>: معيار CSS utility-first. تجنب القوالب مع CSS modules أو styled-components.</li>
          <li><strong>Prisma أو Drizzle</strong>: ORM الحديثة للقواعد البيانات. Prisma أكثر نضجاً، Drizzle أخف وزناً.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. المصادقة</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          كل SaaS يحتاج مصادقة. تأكد من أن القالب يشمل:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>مصادقة البريد الإلكتروني/كلمة المرور مع تشفير آمن (bcrypt)</li>
          <li>OAuth الاجتماعي (Google، GitHub) — ضروري للتحويل</li>
          <li>الروابط السحرية (تسجيل الدخول بدون كلمة مرور)</li>
          <li>الأدوار والصلاحيات (مسؤول، مستخدم، إلخ)</li>
          <li>middleware Next.js لحماية المسارات</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. الفوترة</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          لـ SaaS، Stripe ضروري تقريباً. يجب أن يتضمن القالب الجيد:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>جلسة الدفع المتكاملة مع Stripe</li>
          <li>Webhooks لمزامنة الحالات</li>
          <li>إدارة الاشتراكات (ترقية، تخفيض، إلغاء)</li>
          <li>الفواتير وسجل الدفع</li>
          <li>بوابة عميل Stripe (خدمة ذاتية)</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. التصميم والمرونة</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          يجب أن يكون التصميم احترافياً ومتجاوباً. انتبه من:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>الوضع الداكن/الفاتح — معيار في 2026</li>
          <li>تصميم متجاوب يبدأ بالmobile — مُختبر على iPhone و Android</li>
          <li>رسوم متحركة سلسة (Framer Motion) — بدون الإضرار بالأداء</li>
          <li>مكونات قابلة لإعادة الاستخدام — بدون تكرار في الكود</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">المقارنة: NeuraAPI مقابل الأسواق</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full min-w-[500px] border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">الميزة</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-indigo-700 border-b">NeuraAPI</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">ThemeForest</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">CodeCanyon</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-700 border-b">{row.feature}</td>
                  <td className="py-3 px-4 text-center border-b">
                    {row.neura ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                  </td>
                  <td className="py-3 px-4 text-center border-b">
                    {row.themeforest ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                  </td>
                  <td className="py-3 px-4 text-center border-b">
                    {row.codecanyon ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">قوالب NeuraAPI بالتفصيل</h2>

        <div className="space-y-6 mb-8">
          <Link href="/templates/neurasaa-kit-complet" className="block p-6 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-gray-900">NeuraSaaS — مجموعة SaaS الكاملة</h3>
            <p className="mt-2 text-sm text-gray-600">مصادقة، لوحة تحكم، فوترة Stripe، صفحة هبوط، لوحة إدارة. الأكثر شمولاً للإطلاق السريع.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Next.js 14', 'Stripe', 'Prisma', 'NextAuth', 'Tailwind'].map(t => (
                <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-indigo-600">97€ — 124 ملف، 32 مكون</p>
          </Link>

          <Link href="/templates/neuradashboard-admin-panel" className="block p-6 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-gray-900">NeuraDashboard — لوحة الإدارة</h3>
            <p className="mt-2 text-sm text-gray-600">لوحة تحكم المسؤول مع رسوم بيانية في الوقت الفعلي، إدارة متعددة المستأجرين.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Next.js 14', 'Recharts', 'Prisma', 'shadcn/ui'].map(t => (
                <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-indigo-600">79€ — 86 ملف، 24 مكون</p>
          </Link>

          <Link href="/templates/neuracommerce-ecommerce-ia" className="block p-6 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-gray-900">NeuraCommerce — التجارة الإلكترونية بالذكاء الاصطناعي</h3>
            <p className="mt-2 text-sm text-gray-600">متجر إلكتروني مدعوم بالذكاء الاصطناعي. توصيات المنتجات، دفع Stripe.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Next.js 14', 'Stripe', 'Prisma', 'OpenAI'].map(t => (
                <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-indigo-600">129€ — 112 ملف، 28 مكون</p>
          </Link>

          <Link href="/templates/neuralanding-kit-landing" className="block p-6 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-gray-900">NeuraLanding — مجموعة صفحات الهبوط</h3>
            <p className="mt-2 text-sm text-gray-600">5 صفحات هبوط عالية التحويل. أقسام Hero، التسعير، الشهادات، FAQ.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Next.js 14', 'Framer Motion', 'Tailwind'].map(t => (
                <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-indigo-600">49€ — 45 ملف، 15 مكون</p>
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">الأخطاء التي يجب تجنبها</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-3 mb-8">
          <li><strong>شراء قالب قديم</strong>: تحقق من تاريخ التحديث وإصدار Next.js</li>
          <li><strong>تجاهل المرونة</strong>: اختبر العرض التوضيحي على الهاتف قبل الشراء</li>
          <li><strong>نسيان الأمان</strong>: قالب بدون مصادقة أو تحقق = ثغرات مؤكدة</li>
          <li><strong>البحث عن الأرخص</strong>: قالب بـ 10€ بدون توثيق سيكلفك وقتاً أكثر في التصحيح</li>
          <li><strong>عدم التحقق من الترخيص</strong>: بعض التراخيص تمنع الاستخدام التجاري</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">كيف تبدأ مع قالب</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          عملية شراء وإعداد قالب NeuraAPI بسيطة:
        </p>
        <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-8">
          <li>اختر القالب المناسب لمشروعك من <Link href="/templates" className="text-indigo-600 underline">صفحة القوالب</Link></li>
          <li>شاهد العرض التوضيحي المباشر ومعاينات الكود</li>
          <li>أضف إلى السلة وتابع الدفع (Stripe، آمن)</li>
          <li>حمّل الكود المصدري الكامل</li>
          <li>اتبع ملف README للإعداد (npm install، متغيرات البيئة، prisma migrate)</li>
          <li>خصص التصميم ومنطق الأعمال</li>
          <li>انشر على Vercel بـ <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">vercel --prod</code></li>
        </ol>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-indigo-900 mb-2">قالب لكل مشروع</h3>
          <p className="text-indigo-700 mb-4">
            سواء كنت تطلق SaaS أو متجر إلكتروني أو مدونة أو أداة، هناك قالب مناسب لك.
            جميعها مبنية بنفس معايير الجودة: TypeScript، Tailwind، Prisma، Stripe.
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            عرض جميع القوالب ←
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">مقالات ذات صلة</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/api-ia-nextjs" className="text-indigo-600 hover:text-indigo-800">
                كيفية تكامل API الذكاء الاصطناعي في Next.js
              </Link>
            </li>
            <li>
              <Link href="/blog/creer-saas-48h" className="text-indigo-600 hover:text-indigo-800">
                بناء SaaS في 48 ساعة باستخدام Next.js و Stripe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
