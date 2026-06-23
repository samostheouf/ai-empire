import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "مقارنة مزودي الذكاء الاصطناعي المجانيين: Groq vs Gemini vs OpenAI",
  description: "مقارنة صادقة ومفصلة لمزودي الذكاء الاصطناعي المجانيين للمطورين. الأداء والأسعار والحدود وحالات الاستخدام.",
  path: '/blog/ar/comparaison-providers-ia-gratuits',
  type: 'article',
  keywords: ['Groq', 'Gemini', 'OpenAI', 'ذكاء اصطناعي مجاني', 'مقارنة', 'مزودو الذكاء الاصطناعي', 'مطور ويب', 'واجهة برمجة الذكاء الاصطناعي'],
  publishedTime: '2024-06-20',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'مقارنة مزودي الذكاء الاصطناعي المجانيين: Groq vs Gemini vs OpenAI',
  description: 'مقارنة صادقة لمزودي الذكاء الاصطناعي المجانيين للمطورين.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-20',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/ar/comparaison-providers-ia-gratuits',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function ComparaisonProvidersIaPage() {
  const articleSchema = generateArticleSchema({
    title: 'مقارنة مزودي الذكاء الاصطناعي المجانيين: Groq vs Gemini vs OpenAI',
    description: 'مقارنة صادقة لمزودي الذكاء الاصطناعي المجانيين للمطورين.',
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/ar' },
      { name: 'مقارنة مزودي الذكاء الاصطناعي', path: '/blog/ar/comparaison-providers-ia-gratuits' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/ar' }, { name: 'مقارنة مزودي الذكاء الاصطناعي', href: '/blog/ar/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              مقارنة
            </span>
            <span className="text-sm text-indigo-400">20 يونيو 2024</span>
            <span className="text-sm text-indigo-400">15 دقيقة قراءة</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            مقارنة مزودي الذكاء الاصطناعي المجانيين: Groq vs Gemini vs OpenAI
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ar/comparaison-providers-ia-gratuits`} title="مقارنة مزودي الذكاء الاصطناعي المجانيين" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              اختيار مزود الذكاء الاصطناعي المناسب هو قرار حاسم للمطورين. تتيح العروض المجانية الاختبار بدون مخاطر مالية، لكن لكل مزود نقاط قوة وضعف. إليك مقارنة صادقة مبنية على اختبارات حقيقية.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">المنهجية</h3>
              <p className="text-sm text-indigo-300">
                هذه المقارنة مبنية على اختبارات أجريت في ديسمبر 2024. قد تتغير الأسعار وحدود المستوى المجاني. قمنا باختبار كل مزود مع نفس المطالبات لمقارنة النتائج.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">نظرة عامة</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-right text-indigo-400 font-semibold">المعيار</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">المستوى المجاني</td>
                    <td className="py-3 text-center">نعم</td>
                    <td className="py-3 text-center">نعم</td>
                    <td className="py-3 text-center">محدود</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">النماذج المتاحة</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">السرعة</td>
                    <td className="py-3 text-center text-green-400 font-semibold">سريعة جداً</td>
                    <td className="py-3 text-center">سريعة</td>
                    <td className="py-3 text-center">متوسطة</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">الجودة (متوسط المطالبة)</td>
                    <td className="py-3 text-center">جيّدة</td>
                    <td className="py-3 text-center text-green-400 font-semibold">جيّدة جداً</td>
                    <td className="py-3 text-center text-green-400 font-semibold">ممتازة</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">السياق (توكن)</td>
                    <td className="py-3 text-center">128K</td>
                    <td className="py-3 text-center text-green-400 font-semibold">1M</td>
                    <td className="py-3 text-center">128K</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Function calling</td>
                    <td className="py-3 text-center">نعم</td>
                    <td className="py-3 text-center">نعم</td>
                    <td className="py-3 text-center">نعم</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">الرؤية</td>
                    <td className="py-3 text-center text-red-400">لا</td>
                    <td className="py-3 text-center text-green-400">نعم</td>
                    <td className="py-3 text-center text-green-400">نعم</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">اللغات المدعومة</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Groq — السرعة كميزة</h2>
            <p>
              يتميز Groq بسرعته الاستثنائية. الاستجابة شبه فورية، مما يجعله المزود المثلي للتطبيقات التي تتطلب ملاحظات سريعة: روبوتات المحادثة، الإكمال التلقائي، الاقتراحات في الوقت الفعلي.
            </p>
            <p>
              <strong className="text-white">نقاط القوة:</strong> سرعة مذهلة (حتى 500 توكن/ثانية)، واجهة برمجة متوافقة مع OpenAI، نموذج Llama 3.3 70B عالي الأداء، مستوى مجاني سخي.
            </p>
            <p>
              <strong className="text-white">نقاط الضعف:</strong> لا يوجد رؤية، نماذج محدودة على Meta/Mistral، أداء أقل من GPT-4 في المهام المعقدة.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// مثال باستخدام Groq (واجهة برمجة متوافقة مع OpenAI)
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'مرحبا' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini — عملاق Google</h2>
            <p>
              يوفر Google Gemini مستوىً مجانياً بسياق يبلغ مليون توكن، وهو أمر لا مثيل له. القدرة على معالجة المستندات الطويلة جدًا تجعله خيارًا مثيرًا لتحليل البيانات والبحث في المستندات.
            </p>
            <p>
              <strong className="text-white">نقاط القوة:</strong> سياق بملايين التوكن، رؤية مدمجة، أداء قوي، SDKs رسمية لعدة لغات، تكامل أصلي مع نظام Google البيئي.
            </p>
            <p>
              <strong className="text-white">نقاط الضعف:</strong> واجهة برمجة أحيانًا غير مستقرة، توثيق أحيانًا غير مكتمل، زمن استجابة أعلى من Groq، function calling أقل موثوقية.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// مثال باستخدام Google Gemini
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('اشرح التعلم الآلي')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI — المعيار</h2>
            <p>
              يظل OpenAI المعيار في جودة الاستجابة. GPT-4o هو النموذج الأكثر قدرةً متاحًا، لكن المستوى المجاني محدود جدًا. يوفر GPT-4o mini توازنًا جيدًا بين الجودة والسعر.
            </p>
            <p>
              <strong className="text-white">نقاط القوة:</strong> أفضل جودة استجابة، نظام بيئي ناضج، توثيق ممتاز، مجتمع واسع، function calling موثوق، رؤية وصوت.
            </p>
            <p>
              <strong className="text-white">نقاط الضعف:</strong> مستوى مجاني شبه غير موجود، GPT-4o مكلف، زمن استجابة متغير، الاعتماد على مزود واحد.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// مثال باستخدام OpenAI
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'مرحبا' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">توصيتنا</h2>
            <p>
              لا يوجد مزود أفضل بشكل عام. يعتمد الاختيار على حالة الاستخدام الخاصة بك:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">للسرعة والتكلفة</h3>
                <p className="text-sm text-indigo-300">Groq لا يُضاهى. سرعة الاستجابة والمستوى المجاني يجعلانه الخيار المثالي للنماذج الأولية والتطبيقات في الوقت الفعلي.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">للمستندات الطويلة</h3>
                <p className="text-sm text-indigo-300">Gemini بسياقه بملايين التوكن هو الخيار الوحيد العملي لتحليل المستندات الطويلة جدًا أو كتل البيانات.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">لأقصى جودة</h3>
                <p className="text-sm text-indigo-300">لا يزال GPT-4o أفضل نموذج. إذا كانت الجودة أولوية قصوى والميزانية تسمح، فهو الخيار الآمن.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">لتبسيط كل شيء</h3>
                <p className="text-sm text-indigo-300">NeuraAPI يوحّد Groq و OpenAI خلف واجهة برمجة واحدة. قم بالتبديل بين المزودين دون تعديل الكود الخاص بك.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">الخاتمة</h2>
            <p>
              لكل مزود مكانه. Groq يتفوق في السرعة، Gemini يتألق في المستندات الطويلة، OpenAI يتقدم في الجودة. النهج الأكثر عملية هو البدء بالمزود الأنسب لحالة استخدامك، ثم تقييم ما إذا كان التغيير ضروريًا مع نموك.
            </p>
            <p>
              مع NeuraAPI، لا حاجة للاختيار. مفتاح API واحد، الوصول إلى عدة مزودين، فوترة موحدة. جرب مزودين مختلفين وابحث عن الأنسب لاحتياجاتك.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              جرب NeuraAPI
            </h3>
            <p className="mt-3 text-indigo-200">
              الوصول إلى Groq و OpenAI عبر واجهة برمجة واحدة. 100 رصيد مجاني.
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