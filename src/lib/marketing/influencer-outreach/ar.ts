export interface InfluencerTemplate {
  id: string;
  name: string;
  type: 'email' | 'dm';
  target: string;
  subject: string;
  body: string;
  cta: string;
}

export interface AffiliateProgram {
  name: string;
  commission: number;
  cookieDuration: number;
  benefits: string[];
  requirements: string[];
}

export const emailTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-email-01',
    name: 'Tech YouTuber FR',
    type: 'email',
    target: 'YouTube (10K-100K subscribers)',
    subject: '🤝 رعاية فيديو — AI-Empire (واجهة برمجة تطبيقات AI فرنسية)',
    body: `مرحبا {{first_name}}،

أنا متابع محتواك على YouTube. دروسك في الذكاء الاصطناعي ألهمتني لإنشاء AI-Empire.

أقترح رعاية لفيديو على قناتك.

**الفكرة:** "جرّبت واجهة برمجة تطبيقات AI مجانية — هذا ما أنشأته"

**التنسيق:**
- فيديو 8-12 دقيقة
- عرض مباشر لـ AI-Empire
- إنشاء مشروع صغير في الوقت الحقيقي
- ذكر رابط الإحصال الخاص بك

**التعويض:**
- €200-500 حسب جمهورك
- عمولة 20% على كل عملية بيع عبر رابطك
- قوالب مجانية (قيمة €49)

**الجمهور المستهدف:** مطوروين فرنسيين، 18-35 سنة، مهتمون بالذكاء الاصطناعي

هل أنت مهتم؟ يمكننا تكييف التنسيق مع أسلوبك.

رد على هذا البريد الإلكتروني أو أرسل لي رسالة على Twitter @[handle].

مع أطيب التحيات،
[اسمك]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'الرد على البريد الإلكتروني',
  },
  {
    id: 'inf-email-02',
    name: 'LinkedIn Tech Leader',
    type: 'email',
    target: 'LinkedIn (1K-10K followers)',
    subject: '💼 شراكة محتوى — AI-Empire x علامتك التجارية الشخصية',
    body: `مرحبا {{first_name}}،

أقترح شراكة محتوى لتعزيز علامتك التجارية الشخصية على LinkedIn.

**الاقتراح:**
1. **مقال LinkedIn:** "كيف قمت بدمج الذكاء الاصطناعي في SaaS الخاص بي بمبلغ €0"
2. **قالب NeuraBlog:** مجاني لمجتمعك (قيمة €49)
3. **مشاركة الإيرادات:** 25% على كل عملية بيع عبر رابطك
4. **الظهور:** نذكرك في نشرتنا الإخبارية المتنامية

**لماذا هو مثير للاهتمام:**
- تكتب 1 منشور، تكسب دخلاً سلبياً + ظهوراً
- تقدم قيمة لمجتمعك
- ت_position yourself خبيراً في الذكاء الاصطناعي

تكتب 1 منشور، تكسب دخلاً سلبياً + ظهوراً.

هل أنت مهتم؟ هل نجري مكالمة لمدة 10 دقائق؟

مع أطيب التحيات،
[اسمك]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'حجز مكالمة 10 دقائق',
  },
  {
    id: 'inf-email-03',
    name: 'Twitter Tech Account',
    type: 'email',
    target: 'Twitter/X (5K-50K followers)',
    subject: '🐦 تعاون Twitter — AI-Empire x حسابك التقني',
    body: `مرحبا {{first_name}}،

أرى أنك تشارك محتوى تقنياً عالي الجودة على Twitter. أتمنى التعاون معك.

**الاقتراح:**
1. **هدية:** 5 قوالب مميزة لمجتمعك
2. **موضوع مشترك:** "حالة الذكاء الاصطناعي للمطورين في 2025"
3. **عمولة:** 30% على المبيعات عبر رابطك
4. **الملاحظات:** تؤثر في خارطة طريق منتجاتنا

**التنسيق:** 1 موضوع + 3 تغريدات لمدة أسبوعين.
**الميزانية:** €100-300 + قوالب مجانية.

هل أنت مهتم؟

مع أطيب التحيات،
[اسمك]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'الرد على البريد الإلكتروني',
  },
  {
    id: 'inf-email-04',
    name: 'وكالة ويب',
    type: 'email',
    target: 'وكالات الويب (5-20 موظف)',
    subject: '🏢 شراكة وكالة — عملاؤك يريدون الذكاء الاصطناعي، يمكننا توريده',
    body: `مرحبا {{first_name}}،

أرى أن {{agency_name}} تعمل مع عملاء تجارة إلكترونية / SaaS يطلبون ميزات AI متزايدة.

**المشكلة:** دمج الذكاء الاصطناعي مكلف ويستغرق وقتاً.

**الحل:** AI-Empire يمنحك وصولاً إلى واجهة برمجة تطبيقات AI جاهزة.
- دمج في 5 دقائق
- تسعير حسب الاستخدام (لا اشتراك الحد الأدنى)
- دعم فني باللغة العربية

**لوكالتك:**
- لوحة تحكم متعددة العملاء
- عمولة 15% على كل عميل
- قوالب مميزة مشمولة (قيمة €49-199)
- تدريب مجاني لفريقك

هل نتحدث؟ 15 دقيقة هذا الأسبوع؟

مع أطيب التحيات،
[اسمك]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'حجز مكالمة',
  },
  {
    id: 'inf-email-05',
    name: 'SaaS B2B',
    type: 'email',
    target: 'SaaS B2B (أداة مكملة)',
    subject: '🔗 شراكة AI-Empire x {{company}} — أكمل عرض AI الخاص بك',
    body: `مرحبا {{first_name}}،

أنا [اسمك]، مؤسس AI-Empire، منصة واجهة برمجة تطبيقات AI الفرنسية للشركات الناشئة.

أتواصل معك لأن {{company}} و AI-Empire يشتركان في نفس الجمهور المستهدف: الشركات الناشئة الفرنسية التي تريد دمج الذكاء الاصطناعي دون ميزانية كبيرة.

**اقتراح الشراكة:**

1. **دمج أصلي:** قم بدمج AI-Empire في منصتك (أداة مدمجة / واجهة برمجة تطبيقات)
2. **العمولات:** 20% متكرر على كل عميل محول
3. **التسويق المشترك:** مقال مدونة مشترك + ويبينار
4. **الحصرية:** عرض خاص لمستخدميك (-25%)

**لماذا ينجح:**
- عملاؤك يحتاجون إلى الذكاء الاصطناعي، نحن نوفر واجهة البرمجة
- أنت تحصل على مصدر دخل متكرر
- نحن نحصل على التوزيع

هل أنت مستعد للتحدث؟ 15 دقيقة هذا الأسبوع؟

مع أطيب التحيات،
[اسمك]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'حجز مكالمة',
  },
];

export const dmTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-dm-01',
    name: 'Twitter DM — Hello',
    type: 'dm',
    target: 'Twitter DM',
    subject: '',
    body: `مرحبا {{first_name}}! 👋

أحب محتواك حول الذكاء الاصطناعي. أنشأت AI-Empire، واجهة برمجة تطبيقات AI فرنسية للشركات الناشئة.

اقتراح سريع:
- قوالب مجانية لمجتمعك
- عمولة 30% على المبيعات
- موضوع مشترك

هل أنت مهتم؟ هل نتحدث في الرسائل الخاصة؟`,
    cta: 'الرد على الرسالة الخاصة',
  },
  {
    id: 'inf-dm-02',
    name: 'LinkedIn DM — Partnership',
    type: 'dm',
    target: 'LinkedIn DM',
    subject: '',
    body: `مرحبا {{first_name}}،

أرى أنك تشارك محتوى تقنياً عالي الجودة. أتمنى التعاون معك.

AI-Empire منصة AI فرنسية للشركات الناشئة. نبحث عن شركاء لإنشاء محتوى مشترك.

الاقتراح:
- مقال LinkedIn مشترك
- قالب مجاني لمجتمعك
- 25% مشاركة الإيرادات

10 دقائق مكالمة هذا الأسبوع؟`,
    cta: 'حجز مكالمة',
  },
  {
    id: 'inf-dm-03',
    name: 'Discord DM — Community',
    type: 'dm',
    target: 'Discord DM',
    subject: '',
    body: `مرحبا {{first_name}}! 👋

أرى أنك نشط في خوادم المطورين الفرنسية. أتمنى اقتراح شراكة.

AI-Empire = واجهة برمجة تطبيقات AI مجانية للشركات الناشئة الفرنسية.

العرض لك:
- قوالب مميزة مجانية
- عمولة 30% على المبيعات
- وصول تجريبي للميزات الجديدة

هل أنت مهتم؟`,
    cta: 'الرد على الرسالة الخاصة',
  },
  {
    id: 'inf-dm-04',
    name: 'Instagram DM — Tech Creator',
    type: 'dm',
    target: 'Instagram DM',
    subject: '',
    body: `مرحبا {{first_name}}! 🔥

أحب محتواك التقني على Instagram. لدي اقتراح لك.

AI-Empire واجهة برمجة تطبيقات AI فرنسية. نبحث عن مبدعين لـ:
- Reels تجريبية (قوالب مجانية مشمولة)
- عمولة 25% على المبيعات
- تعاون العلامة التجارية على القوالب

هل أعجبك؟ هل نتحدث في الرسائل الخاصة؟`,
    cta: 'الرد على الرسالة الخاصة',
  },
  {
    id: 'inf-dm-05',
    name: 'YouTube DM — Collab',
    type: 'dm',
    target: 'YouTube DM',
    subject: '',
    body: `مرحبا {{first_name}}! 👋

أحب قناتك على YouTube. دروسك في الذكاء الاصطناعي رائعة.

اقتراح التعاون:
- رعاية فيديو (€200-500)
- عمولة 20% على المبيعات
- قوالب مجانية لمجتمعك

هل أنت مهتم؟ هل نتحدث هذا الأسبوع؟`,
    cta: 'حجز مكالمة',
  },
];

export const affiliateProgram: AffiliateProgram = {
  name: 'AI-Empire Affiliate Program',
  commission: 30,
  cookieDuration: 90,
  benefits: [
    'عمولة 30% على كل عملية بيع متكررة',
    'مدة تعريف الارتباط 90 يوماً',
    'لوحة تتبع في الوقت الحقيقي',
    'مدفوعات شهرية عبر Stripe',
    'قوالب مميزة مجانية (قيمة €199)',
    'دعم مخصص للمقيّمين',
    'وصول تجريبي للميزات الجديدة',
    'مواد تسويقية مقدمة',
  ],
  requirements: [
    'جمهور من 1000+ على قناة (YouTube، Twitter، LinkedIn، Instagram، مدونة)',
    'محتوى تقني / شركات ناشئة / ذكاء اصطناعي',
    'معدل التفاعل > 2%',
    'لا يوجد محتوى مسيس أو مسيء',
    'احترام إرشادات العلامة التجارية',
  ],
};

export const getAllTemplates = (): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates];
};

export const getTemplatesByType = (type: 'email' | 'dm'): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates].filter((t) => t.type === type);
};

export const getTemplatesByTarget = (target: string): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates].filter((t) =>
    t.target.toLowerCase().includes(target.toLowerCase()),
  );
};

export const generateOutreachSequence = (influencerType: string): InfluencerTemplate[] => {
  const templates: InfluencerTemplate[] = [];

  switch (influencerType) {
    case 'youtube':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-01')!,
        dmTemplates.find((t) => t.id === 'inf-dm-05')!,
      );
      break;
    case 'linkedin':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-02')!,
        dmTemplates.find((t) => t.id === 'inf-dm-02')!,
      );
      break;
    case 'twitter':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-03')!,
        dmTemplates.find((t) => t.id === 'inf-dm-01')!,
      );
      break;
    case 'agence':
      templates.push(emailTemplates.find((t) => t.id === 'inf-email-04')!);
      break;
    case 'saas':
      templates.push(emailTemplates.find((t) => t.id === 'inf-email-05')!);
      break;
    default:
      templates.push(...emailTemplates.slice(0, 2), ...dmTemplates.slice(0, 2));
  }

  return templates.filter(Boolean);
};
