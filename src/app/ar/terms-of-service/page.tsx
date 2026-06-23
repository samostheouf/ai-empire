import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'شروط الخدمة — NeuraAPI',
  description: 'شروط خدمة NeuraAPI — خدمات الذكاء الاصطناعي والقوالب الرقمية.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ar/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">شروط الخدمة</h1>
          <p className="mt-2 text-indigo-300">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">المادة 1 — الغرض</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>تحكم شروط الخدمة هذه العلاقات التعاقدية بين شركة NeuraAPI SAS (يُشار إليها بـ "البائع") وأي شخص طبيعي أو اعتباري (يُشار إليه بـ "العميل") يرغب في اقتناء الخدمات والمنتجات المقدمة على الموقع <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a>.</p>
              <p>يشير أي طلب لخدمات أو منتجات على الموقع إلى القبول غير المشروط لهذه الشروط. يحتفظ البائع بحق تعديل هذه الشروط في أي وقت. تُطبَّق الشروط السارية في تاريخ الطلب.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><ShoppingCart className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">المادة 2 — المنتجات والخدمات</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>يقدم البائع للبيع المنتجات والخدمات التالية:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">اشتراكات واجهة برمجة الذكاء الاصطناعي</span> — الوصول إلى نقاط نهاية الذكاء الاصطناعي (توليد النصوص، SEO، الكود) عبر مفتاح API شخصي.</li>
                <li><span className="font-semibold text-white">القوالب الرقمية</span> — قوالب الويب (Next.js، Tailwind CSS) قابلة للتنزيل والاستخدام وفقًا للرخصة المكتسبة.</li>
                <li><span className="font-semibold text-white">حزم الرصيد</span> — وحدات الاستهلاك لاستدعاءات API، صالحة لمدة محددة.</li>
              </ul>
              <p>تُعرض السمات الجوهرية للمنتجات والخدمات على الموقع. الصور والأوصاف مقدمة لأغراض إرشادية فقط ولا تُلزم البائع.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><CreditCard className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">المادة 3 — الأسعار وشروط الدفع</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">3.1 الأسعار</h3>
              <p>تُحدد أسعار المنتجات والخدمات بالユー�رو (€) شاملة جميع الضرائب. يحتفظ البائع بحق تعديل أسعاره في أي وقت. تُطبَّق الأسعار السارية في تاريخ تأكيد الطلب.</p>
              <h3 className="font-semibold text-white mt-4">3.2 طرق الدفع</h3>
              <p>يتم الدفع حصريًا عبر الإنترنت باستخدام:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>بطاقة الائتمان (Visa، Mastercard، American Express)</li>
                <li>التحويل البنكي (لاشتراكات Enterprise)</li>
                <li>Apple Pay / Google Pay</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">3.3 الفوترة</h3>
              <p>يتم إصدار فاتورة إلكترونيًا ويمكن الوصول إليها في منطقة العميل بعد كل دفع. يتعهد العميل بالاحتفاظ بفواتيره.</p>
              <h3 className="font-semibold text-white mt-4">3.4 عدم الدفع</h3>
              <p>في حالة عدم الدفع، يحتفظ البائع بحق تعليق الوصول إلى الخدمات بعد إنذار لم يجد أثرًا خلال 15 يومًا. قد تُفرض غرامات تأخير بمعدل ثلاثة أضعاف معدل الفائدة القانوني.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><Truck className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">المادة 4 — التسليم</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">4.1 خدمات الاشتراك</h3>
              <p>يتم توفير الوصول إلى واجهات البرمجة فورًا بعد تأكيد الدفع. يتم إنشاء مفتاح API تلقائيًا ويمكن الوصول إليه من منطقة العميل.</p>
              <h3 className="font-semibold text-white mt-4">4.2 القوالب الرقمية</h3>
              <p>يمكن تنزيل القوالب فورًا بعد الشراء. يتم إرسال رابط التنزيل عبر البريد الإلكتروني ويمكن الوصول إليه من منطقة العميل.</p>
              <h3 className="font-semibold text-white mt-4">4.3 حزم الرصيد</h3>
              <p>يتم إضافة الرصيد إلى حساب العميل فورًا بعد الدفع ويسري لمدة 12 شهرًا من تاريخ الشراء.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><RotateCcw className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">المادة 5 — حق الإلغاء</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>وفقًا للتشريعات المعمول بها، يحق للعميل خلال <span className="font-semibold text-white">14 يومًا</span> من تاريخ الاشتراك أو الشراء ممارسة حقه في الإلغاء دون تبرير قراره.</p>
              <h3 className="font-semibold text-white mt-4">5.1 شروط الإلغاء</h3>
              <p>لممارسة حقه في الإلغاء، يجب على العميل إرسال إعلان كتابي (بريد إلكتروني أو رسالة) يعبر بوضوح عن رغبته في الإلغاء.</p>
              <p>البريد الإلكتروني: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              <h3 className="font-semibold text-white mt-4">5.2 استثناءات حق الإلغاء</h3>
              <p>لا يمكن ممارسة حق الإلغاء في الحالات التالية:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>بدأت تقديم الخدمة بموافقة صريحة من العميل قبل انتهاء فترة 14 يومًا</li>
                <li>تم تنزيل أو تفعيل المحتوى الرقمي (القوالب) من قبل العميل</li>
                <li>تم تنفيذ الخدمة بالكامل قبل انتهاء فترة الإلغاء</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">5.3 الاسترداد</h3>
              <p>في حالة إلغاء ساري، يتم الاسترداد خلال أقصى حد 14 يومًا، بنفس طريقة الدفع المستخدمة في المعاملة الأولية.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><Shield className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">المادة 6 — الضمانات</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">6.1 ضمان المطابقة</h3>
              <p>وفقًا للتشريعات المعمول بها، يُلزم البائع بتقديم سلعة مطابقة للعقد. يمكن للعميل المطالبة بالمطابقة خلال سنتين من التسليم.</p>
              <h3 className="font-semibold text-white mt-4">6.2 ضمان العيوب الخفية</h3>
              <p>وفقًا للقانون المدني، يضمن البائع العيوب الخفية. يحق للعميل اتخاذ الإجراءات خلال سنتين من اكتشاف العيب.</p>
              <h3 className="font-semibold text-white mt-4">6.3 توفر الخدمة</h3>
              <p>يلتزم البائع بضمان توفر الخدمة بنسبة 99.9% شهريًا (SLA). تُبلغ الصيانات المخطيط لها قبل 48 ساعة.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><AlertTriangle className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">المادة 7 — تحديد المسؤولية</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>لا يتحمل البائع المسؤولية عن الأضرار الناتجة عن:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>الاستخدام غير المتوافق للخدمات من قبل العميل</li>
                <li>انقطاع الخدمة المؤقت للصيانة أو التحديث</li>
                <li>فقدان البيانات بسبب عطل في البنية التحتية التقنية</li>
                <li>الضرر غير المباشر أو خسارة الإيرادات أو فقدان البيانات أو أي ضرر آخر</li>
                <li>استخدام نتائج الذكاء الاصطناعي لأغراض غير قانونية أو مخالمة للنظام العام</li>
              </ul>
              <p className="mt-4">تُحدد المسؤولية الإجمالية للبائع بمبلغ دفعه العميل خلال الاثني عشر شهرًا السابقة للحدث المسبب للضرر.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><FileText className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">المادة 8 — رخصة استخدام القوالب</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>يمنح شراء القالب للعميل رخصة استخدام غير حصرية وغير قابلة للتحويل ومحدودة، تتيح له:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>استخدام القالب في المشاريع الشخصية أو التجارية</li>
                <li>تعديل القالب لتلائم احتياجاته</li>
                <li>استخدام القالب لعدد غير محدود من المشاريع</li>
              </ul>
              <p className="mt-3">لا يجوز للعميل:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>إعادة بيع القالب أو توزيعه</li>
                <li>منح ترخيص فرعي للقالب لأطراف ثالثة</li>
                <li>إزالة أو تعديل إشارات حقوق النشر</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><Scale className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">المادة 9 — البيانات الشخصية</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>يخضع معالجة البيانات الشخصية للعميل وفقًا لـ <a href="/ar/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">سياسة الخصوصية</a> الخاصة بنا، المتوافقة مع GDPR.</p>
              <p>يحق للعميل الوصول إلى بياناته الشخصية وتصحيحها وحذفها ونقلها والاعتراض عليها عن طريق التواصل مع: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><Scale className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">المادة 10 — القانون الحاكم وحل النزاعات</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>تخضع شروط الخدمة هذه للقانون الفرنسي. في حالة نزاع، يبذل الطرفان جهودًا لإيجاد حل ودي. وإلا، يُحال النزاع إلى المحاكم القضائية في باريس.</p>
              <p>وفقًا للتشريعات المعمول بها، يمكن للعميل الاستفادة من وسيط المستهلك المجاني في حالة نزاع لم يُحل:</p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">وساطة المستهلك — mediation-conso.fr</a></p>
                <p>• منصة حل النزاعات الإلكترونية الأوروبية: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">المادة 11 — أحكام متنوعة</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">11.1 الكاملة</h3>
              <p>تشكل شروط الخدمة هذه الاتفاق الكامل بين البائع والعميل. إذا أُعلنت أي بند باطلاً، تظل البنود الأخرى سارية.</p>
              <h3 className="font-semibold text-white mt-4">11.2 التعديل</h3>
              <p>يحتفظ البائع بحق تعديل شروط الخدمة هذه في أي وقت. تُطبَّق الشروط السارية في تاريخ الطلب.</p>
              <h3 className="font-semibold text-white mt-4">11.3 القوة القاهرة</h3>
              <p>لا يتحمل البائع المسؤولية عن تنفيذ التزاماته في حالة القوة القاهرة وفقًا للمادة 1218 من القانون المدني.</p>
              <h3 className="font-semibold text-white mt-4">11.4 الاتصال</h3>
              <p> لأي سؤال يتعلق بشروط الخدمة هذه، يمكنكم التواصل معنا على: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
