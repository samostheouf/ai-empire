import type { Metadata } from 'next'
import { Shield, Database, Target, Scale, Clock, Users, Eye, Cookie, Mail,  MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية (GDPR) — NeuraAPI',
  description: 'سياسة الخصوصية لـ NeuraAPI، المتوافقة مع اللائحة العامة لحماية البيانات (GDPR — EU 2016/679).',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ar/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">سياسة الخصوصية</h1>
          <p className="mt-2 text-indigo-300">متوافقة مع اللائحة العامة لحماية البيانات (GDPR — EU 2016/679)</p>
          <p className="mt-1 text-sm text-indigo-400">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Users className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">1. مسؤول المعالجة</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p><span className="font-semibold text-white">المسؤول:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">المقر الرئيسي:</span> 12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET:</span> لم يُكمل بعد</p>
              <p><span className="font-semibold text-white">مسؤول حماية البيانات (DPO):</span></p>
              <div className="ml-4">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-400" /><a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></div>
                <div className="flex items-center gap-2 mt-1"><MapPin className="h-4 w-4 text-indigo-400" /><p>12 Rue de la Paix, 75002 Paris, France</p></div>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Database className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">2. البيانات المجمعة</h2></div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>في إطار خدماتنا، نقوم بجمع فئات البيانات التالية:</p>
              <h3 className="font-semibold text-white">بيانات التعريف</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>الاسم الكامل</li><li>عنوان البريد الإلكتروني</li><li>كلمة المرور (مشفرة)</li><li>اسم المستخدم</li></ul>
              <h3 className="font-semibold text-white mt-4">بيانات الفوترة</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>عنوان الفوترة</li><li>معلومات الدفع (تتم معالجتها عبر Stripe، ليس لدينا الوصول إلى أرقام البطاقات)</li><li>سجل المعاملات</li></ul>
              <h3 className="font-semibold text-white mt-4">بيانات الاستخدام</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>مفاتيح API (مشفرة)</li><li>سجل استدعاءات API (التلميحات، الردود، الطوابع الزمنية)</li><li>إحصائيات الاستخدام (عدد الاستدعاءات، الرصيد المستهلك)</li><li>بيانات الأداء والتشخيص</li></ul>
              <h3 className="font-semibold text-white mt-4">بيانات الاتصال</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>عنوان IP</li><li>نوع المتصفح ونظام التشغيل</li><li>تاريخ ووقت تسجيل الدخول</li><li>الصفحات المزارة والإجراءات المتخذة</li></ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Target className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">3. أغراض المعالجة</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>تتم معالجة بياناتك للأغراض التالية:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">إدارة الحسابات:</span> إنشاء وإدارة ومصادقة حسابات المستخدمين</li>
                <li><span className="font-semibold text-white">تقديم الخدمات:</span> الوصول إلى واجهات البرمجة، تسليم القوالب، إدارة الرصيد</li>
                <li><span className="font-semibold text-white">الفوترة:</span> إصدار الفواتير، تتبع المدفوعات، المتابعة</li>
                <li><span className="font-semibold text-white">دعم العملاء:</span> الاستجابة الطلبات وحل المشكلات</li>
                <li><span className="font-semibold text-white">تحسين الخدمة:</span> إحصائيات الاستخدام، تحسين الأداء</li>
                <li><span className="font-semibold text-white">الأمان:</span> منع الاحتيال، كشف سوء الاستخدام، الحماية من الهجمات</li>
                <li><span className="font-semibold text-white">التواصل:</span> إرسال إشعارات هامة تتعلق بالخدمة</li>
                <li><span className="font-semibold text-white">الالتزامات القانونية:</span> الاحتفاظ بالبيانات المحاسبية والضريبية</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Scale className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">4. الأساس القانوني للمعالجة</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>تعتمد كل معالجة على أساس قانوني:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">تنفيذ العقد (المادة 6.1.b من GDPR):</span> تقديم الخدمات، إدارة الحسابات، الفوترة</li>
                <li><span className="font-semibold text-white">المصلحة المشروعة (المادة 6.1.f من GDPR):</span> أمان الخدمة، التحسين، منع الاحتيال</li>
                <li><span className="font-semibold text-white">الالتزام القانوني (المادة 6.1.c من GDPR):</span> الاحتفاظ بالبيانات المحاسبية والضريبية</li>
                <li><span className="font-semibold text-white">الموافقة (المادة 6.1.a من GDPR):</span> ملفات تعريف الارتباط غير الأساسية، الاتصالات التسويقية</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Clock className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">5. مدة الاحتفاظ</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>يتم الاحتفاظ ببياناتك للمدد التالية:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">بيانات الحساب:</span> طوال مدة العلاقة التعاقدية، ثم 3 سنوات بعد آخر تسجيل دخول</li>
                <li><span className="font-semibold text-white">بيانات الفوترة:</span> 10 سنوات (التزام محاسبي قانوني)</li>
                <li><span className="font-semibold text-white">سجل استدعاءات API:</span> 12 شهرًا بعد آخر استدعاء</li>
                <li><span className="font-semibold text-white">بيانات الاتصال:</span> 12 شهرًا</li>
                <li><span className="font-semibold text-white">ملفات تعريف الارتباط:</span> 13 شهرًا كحد أقصى</li>
                <li><span className="font-semibold text-white">بيانات التسويق:</span> 3 سنوات بعد آخر اتصال</li>
              </ul>
              <p className="mt-4">عند انتهاء هذه المدد، يتم حذف البيانات أو إخفاء هويتها بشكل لا رجعة فيه.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Users className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">6. مستقبلو البيانات</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>قد تتم مشاركة بياناتك مع فئات المستقبلين التالية:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">مزودو الخدمات التقنية:</span> Vercel (الاستضافة)، Stripe (المدفوعات)، Vercel Analytics (الإحصائيات)</li>
                <li><span className="font-semibold text-white">مزودو الدفع:</span> Stripe Inc. — المعالجة الآمنة للمدفوعات</li>
                <li><span className="font-semibold text-white">السلطات المختصة:</span> في حالة الالتزام القانوني أو الأمر القضائي</li>
              </ul>
              <p className="mt-4">يخضع هؤلاء المزودون لالتزامات تعهدية تضمن حماية بياناتك وفقًا لـ GDPR. لا نبيع بياناتك أبدًا لأطراف ثالثة.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Eye className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">7. النقل خارج الاتحاد الأوروبي</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>يوجد بعض مزودينا خارج الاتحاد الأوروبي (خاصة في الولايات المتحدة). تخضع هذه النقلات لـ:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>بنود التعاقد القياسي (SCCs) المتوافقة مع قرار التنفيذ للجنة الأوروبية</li>
                <li>درع الخصوصية (لمزودي الخدمة المعتمدين)</li>
                <li>ضمانات إضافية مناسبة وفقًا للمواد 46 وما بعدها من GDPR</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Scale className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">8. حقوقك</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>وفقًا لـ GDPR، لديك الحقوق التالية على بياناتك الشخصية:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">حق الوصول (المادة 15):</span> الحصول على نسخة من بياناتك</li>
                <li><span className="font-semibold text-white">حق التصحيح (المادة 16):</span> تصحيح البيانات غير الدقيقة</li>
                <li><span className="font-semibold text-white">حق الحذف (المادة 17):</span> طلب حذف بياناتك</li>
                <li><span className="font-semibold text-white">حق تقييد المعالجة (المادة 18):</span> تقييد معالجة بياناتك</li>
                <li><span className="font-semibold text-white">حق النقل (المادة 20):</span> تلقي بياناتك بتنسيق منظم</li>
                <li><span className="font-semibold text-white">حق الاعتراض (المادة 21):</span> الاعتراض على معالجة بياناتك</li>
                <li><span className="font-semibold text-white">سحب الموافقة:</span> في أي وقت، دون المساس بشرعيات المعالجة السابقة</li>
              </ul>
              <p className="mt-4">لممارسة حقوقك، تواصل معنا على: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></p>
              <p>لك أيضًا الحق في تقديم شكوى لدى CNIL: <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Cookie className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">9. ملفات تعريف الارتباط</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>يستخدم موقعنا ملفات تعريف الارتباط وفقًا للأنظمة المعمول بها. لمزيد من المعلومات، يُرجى الاطلاع على <a href="/ar/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">سياسة ملفات تعريف الارتباط</a>.</p>
              <p>يمكنك إدارة تفضيلات ملفات تعريف الارتباط عبر شريط الموافقة المعروض خلال زيارتك الأولى.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Shield className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">10. أمان البيانات</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>نتخذ التدابير الفنية والتنظيمية التالية لحماية بياناتك:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>تشفير TLS/SSL لجميع الاتصالات</li>
                <li>تشفير البيانات الحساسة أثناء التخزين</li>
                <li>المصادقة متعددة العوامل (MFA) متاحة</li>
                <li>مفاتيح API مشفرة ومُدارة بشكل آمن</li>
                <li>وصول محدود للبيانات (مبدأ الامتياز الأدنى)</li>
                <li>تدوين ومراقبة الوصول</li>
                <li>تدقيق أمني منتظم</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Mail className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">11. الاتصال</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>لأي سؤال يتعلق بحماية بياناتك الشخصية:</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-400" /><span>البريد الإلكتروني: </span><a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-indigo-400" /><span>العنوان: NeuraAPI SAS — DPO, 12 Rue de la Paix, 75002 Paris, France</span></div>
              </div>
              <p className="mt-4">نلتزم بالرد على طلبك خلال شهر واحد.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
