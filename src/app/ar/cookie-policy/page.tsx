import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'سياسة ملفات تعريف الارتباط — NeuraAPI',
  description: 'سياسة ملفات تعريف الارتباط في NeuraAPI — معلومات حول ملفات تعريف الارتباط المستخدمة وإدارة تفضيلاتك.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ar/cookie-policy' },
}

export default function CookiePolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">سياسة ملفات تعريف الارتباط</h1>
          <p className="mt-2 text-indigo-300">معلومات حول ملفات تعريف الارتباط المستخدمة في NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Info className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">ما هي ملفات تعريف الارتباط؟</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>ملف تعريف الارتباط هو ملف نصي صغير يتم وضعه على جهازك (الكمبيوتر أو الجهاز اللوحي أو الهاتف الذكي) عند زيارة موقع ويب. يتيح للموقع التعرف على جهازك وتخزين معلومات معينة حول تفضيلاتك أو أفعالك السابقة.</p>
              <p>تخضع ملفات تعريف الارتباط للائحة العامة لحماية البيانات (GDPR) وتوصيات CNIL.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Settings className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">أنواع ملفات تعريف الارتباط المستخدمة</h2></div>
            <div className="space-y-8">
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50"><Eye className="h-4 w-4 text-green-400" /></div>
                  <h3 className="text-lg font-bold text-white">ملفات تعريف الارتباط الأساسية</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">نشطة دائمًا</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">هذه الملفات ضرورية لعمل الموقع. لا يمكن تعطيلها لأنها ضرورية للعمل السليم للموقع.</p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead><tr className="text-left text-indigo-300"><th className="pb-2 font-medium">الملف</th><th className="pb-2 font-medium">الغرض</th><th className="pb-2 font-medium">المدة</th></tr></thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">session_id</td><td className="py-2">جلسة المستخدم</td><td className="py-2">الجلسة</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">csrf_token</td><td className="py-2">حماية CSRF</td><td className="py-2">الجلسة</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">cookie_consent</td><td className="py-2">تفضيلات ملفات تعريف الارتباط</td><td className="py-2">13 شهرًا</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">auth_token</td><td className="py-2">المصادقة</td><td className="py-2">30 يومًا</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50"><BarChart3 className="h-4 w-4 text-blue-400" /></div>
                  <h3 className="text-lg font-bold text-white">ملفات تعريف الارتباط التحليلية</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">تتطلب الموافقة</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">تتيح لنا هذه الملفات قياس زيارات موقعنا وفهم كيفية استخدام الزوار له وتحديد الصفحات الأكثر زيارة.</p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead><tr className="text-left text-indigo-300"><th className="pb-2 font-medium">الملف</th><th className="pb-2 font-medium">الغرض</th><th className="pb-2 font-medium">المدة</th></tr></thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">_vercel_analytics</td><td className="py-2">إحصائيات الزيارات</td><td className="py-2">الجلسة</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">_vercel_insights</td><td className="py-2">تحليل الأداء</td><td className="py-2">سنة واحدة</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50"><Megaphone className="h-4 w-4 text-purple-400" /></div>
                  <h3 className="text-lg font-bold text-white">ملفات تعريف الارتباط التسويقية</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">تتطلب الموافقة</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">تُستخدم هذه الملفات لتزويدك بالإعلانات والمحتوى الشخصي بناءً على اهتماماتك.</p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">حاليًا، لا تستخدم NeuraAPI ملفات تعريف الارتباط التسويقية لأطراف ثالثة. يُعد هذا القسم لأغراض الاستخدام المستقبلي إذا لزم الأمر.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Settings className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">كيفية إدارة ملفات تعريف الارتباط</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">من خلال شريط الموافقة</h3>
              <p>أثناء زيارتك الأولى، يتيح لك شريط الموافقة اختيار ملفات تعريف الارتباط التي تريد تفعيلها أو تعطيلها. يمكنك تغيير تفضيلاتك في أي وقت عن طريق النقر على زر "ملفات تعريف الارتباط" في أسفل الصفحة.</p>
              <h3 className="font-semibold text-white mt-4">من خلال إعدادات المتصفح</h3>
              <p>يمكنك أيضًا إدارة ملفات تعريف الارتباط مباشرة من إعدادات المتصفح:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/ar/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/ar-sa/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/ar-sa/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>
              <h3 className="font-semibold text-white mt-4">عواقب التعطيل</h3>
              <p>يمكن أن يمنع تعطيل ملفات تعريف الارتباط الأساسية العمل السليم للموقع. يمكن تفعيل أو تعطيل ملفات تعريف الارتباط التحليلية والتسويقية بحرية دون التأثير على استخدام الموقع.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Eye className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">ملفات تعريف الارتباط لأطراف ثالثة</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>قد يتضمن موقعنا مكونات من أطراف ثالثة. يمكن لهؤلاء الأطراف وضع ملفات تعريف الارتباط على جهازك عند زيارتك لموقعنا. ليس لدينا سيطرة على ملفات تعريف الارتباط هذه.</p>
              <h3 className="font-semibold text-white mt-4">Stripe (المدفوعات)</h3>
              <p>تستخدم Stripe ملفات تعريف الارتباط لتأمين المعاملات ومنع الاحتيال. لمزيد من المعلومات: <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a></p>
              <h3 className="font-semibold text-white mt-4">Vercel (الاستضافة)</h3>
              <p>قد تضع Vercel ملفات تعريف الارتباط لضمان عمل البنية التحتية بشكل صحيح وجمع إحصائيات مجهولة الهوية. لمزيد من المعلومات: <a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Info className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">جهات الاتصال</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>لأي سؤال يتعلق بسياسة ملفات تعريف الارتباط، يمكنك التواصل معنا:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>البريد الإلكتروني: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DPO: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">يمكنك أيضًا تقديم شكوى لدى CNIL: <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
