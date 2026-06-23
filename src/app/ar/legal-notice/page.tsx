import type { Metadata } from 'next'
import { Scale, Building2, Globe, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'إشعار قانوني — NeuraAPI',
  description: 'الإشعار القانوني لموقع NeuraAPI.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ar/legal-notice' },
}

export default function LegalNotice() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">إشعار قانوني</h1>
          <p className="mt-2 text-indigo-300">معلومات قانونية تتعلق بموقع NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Building2 className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">ناشر الموقع</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">الاسم التجارية:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">الشكل القانوني:</span> شركة أسهم مبسطة (SAS)</p>
              <p><span className="font-semibold text-white">المقر الرئيسي:</span> 12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET:</span> لم يُكمل بعد</p>
              <p><span className="font-semibold text-white">SIREN:</span> لم يُكمل بعد</p>
              <p><span className="font-semibold text-white">رمز NAF/APE:</span> 6201Z — البرمجة الحاسوبية</p>
              <p><span className="font-semibold text-white">رقم ضريبة القيمة المضافة:</span> لم يُكمل بعد</p>
              <p><span className="font-semibold text-white">رأس المال:</span> لم يُكمل بعد</p>
              <p><span className="font-semibold text-white">مدير النشر:</span> لم يُكمل بعد</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Globe className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">مزود الاستضافة</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">الاسم:</span> Vercel Inc.</p>
              <p><span className="font-semibold text-white">العنوان:</span> 340 S Lemon Ave #4133, Walnut, CA 91789, United States</p>
              <p><span className="font-semibold text-white">الموقع:</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com</a></p>
              <p className="text-sm text-indigo-300 mt-4">يتم استضافة الموقع على بنية Vercel السحابية، وهو متوافق مع معايير الأمان والتوفر الخاصة بـ GDPR.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Mail className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">جهات الاتصال</h2></div>
            <div className="space-y-3 text-indigo-200">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-indigo-400" /><p><span className="font-semibold text-white">البريد الإلكتروني:</span> <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-indigo-400" /><p><span className="font-semibold text-white">الهاتف:</span> لم يُكمل بعد</p></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-indigo-400" /><p><span className="font-semibold text-white">العنوان:</span> 12 Rue de la Paix, 75002 Paris, France</p></div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Shield className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">التأمين المهني</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">شركة التأمين:</span> AXA France</p>
              <p><span className="font-semibold text-white">رقم البوليصة:</span> لم يُكمل بعد</p>
              <p><span className="font-semibold text-white">التغطية:</span> المسؤولية المهنية والمخاطر الإلكترونية</p>
              <p className="text-sm text-indigo-300 mt-4">وفقًا للنصوص القانونية، تمتلك NeuraAPI SAS تأمين المسؤولية المهنية الذي يغطي الأضرار الناتجة لأطراف ثالثة في إطار أنشطتها التجارية.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><FileText className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">الملكية الفكرية</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p>جميع محتويات هذا الموقع (النصوص والصور والرسومات والشعارات والأيقونات والأصوات والبرمجيات) هي ملك حصري لـ NeuraAPI SAS أو شركائها وهي محمية بموجب قوانين الملكية الفكرية الفرنسية والدولية.</p>
              <p>يُحظر أي نسخ أو عرض أو تعديل أو نشر أو نقل أو تزييف للموقع أو محتوياته بأي وسيلة دون إذن كتابي مسبق من NeuraAPI SAS.</p>
              <p>العلامات التجارية والشعارات الظاهرة على هذا الموقع هي علامات تجارية مسجلة لـ NeuraAPI SAS أو شركائها. يُحظر أي نسخ أو عرض كلي أو جزئي لهذه العلامات التجارية أو الشعارات دون إذن مسبق.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Shield className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">البيانات الشخصية</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p>يخضع معالجة البيانات الشخصية للائحة العامة لحماية البيانات (GDPR — اللائحة EU 2016/679) والتشريعات المعمول بها.</p>
              <p>لمزيد من المعلومات، يُرجى الاطلاع على <a href="/ar/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">سياسة الخصوصية</a> الخاصة بنا.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><FileText className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">ملفات تعريف الارتباط</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p>وفقًا لـ GDPR، قد يتم وضع ملفات تعريف الارتباط على جهازك أثناء تصفح موقعنا.</p>
              <p>لمزيد من المعلومات حول ملفات تعريف الارتباط التي نستخدمها وكيفية إدارتها، يُرجى الاطلاع على <a href="/ar/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">سياسة ملفات تعريف الارتباط</a>.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Scale className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">حل النزاعات</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p>نقدم لعملائنا غير المهنيين آلية مجانية لحل النزاعات.</p>
              <p>في حالة نزاع، يمكنك التواصل مع وسيط المستهلك:</p>
              <div className="ml-4 space-y-2">
                <p>• الموقع: <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.mediation-conso.fr</a></p>
                <p>• العنوان: BP 84229, 69342 Lyon Cedex 07</p>
                <p>• البريد الإلكتروني: <a href="mailto:contact@mediation-conso.fr" className="text-indigo-400 hover:text-white transition-colors">contact@mediation-conso.fr</a></p>
              </div>
              <p className="text-sm text-indigo-300 mt-4">يمكنك أيضًا استخدام منصة حل النزاعات الإلكترونية الأوروبية المتاحة على: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Scale className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">القانون الحاكم</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p>يخضع هذا الإشعار القانوني للقانون الفرنسي. في حالة نزاع، ستكون محاكم باريس القضائية هي seule مختصة، إلا إذا نص نظام إلزامي على خلاف ذلك.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
