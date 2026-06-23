export interface CampaignTemplate {
  id: string
  name: string
  type: 'product-launch' | 'seasonal' | 'referral' | 'black-friday' | 'new-year'
  duration: string
  channels: string[]
  budget: string
  objective: string
  content: CampaignTemplateContent
  schedule: CampaignSchedule[]
  metrics: CampaignMetrics
}

export interface CampaignTemplateContent {
  headline: string
  subheadline: string
  body: string
  cta: string
  hashtags: string[]
  emailSubject: string
  emailBody: string
  socialPost: string
}

export interface CampaignSchedule {
  day: string
  action: string
  channel: string
}

export interface CampaignMetrics {
  targetReach: string
  targetConversion: string
  targetRevenue: string
}

// ============================================================
// حملة إطلاق المنتج
// ============================================================
export const productLaunchTemplate: CampaignTemplate = {
  id: 'tpl_product_launch',
  name: 'إطلاق المنتج — AI Empire',
  type: 'product-launch',
  duration: '14 يوماً',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€1,500',
  objective: 'توليد 500 تسجيل و€3,000 من الإيرادات في الشهر الأول',
  content: {
    headline: '🚀 جديد: ثورة الذكاء الاصطناعي للSaaS وصلت!',
    subheadline: 'أطلق SaaS الخاص بك في 24 ساعة مع قوالب Next.js 14 + واجهات برمجة تطبيقات الذكاء الاصطناعي القوية',
    body: `تحلم بإطلاق SaaS الخاص بك لكن التطوير يستغرق أسابيع؟

AI Empire تغير قواعد اللعبة:
✅ قوالب Next.js 14 احترافية — تصاميم حديثة، متجاوبة، الوضع الداكن
✅ واجهات برمجة تطبيقات الذكاء الاصطناعي المدمجة — GPT-4، Groq، Gemini جاهزة للاستخدام
✅ Stripe + Auth مشمولة — المدفوعات والمصادقة في 5 دقائق
✅ لوحة تحكم إدارية كاملة — أدر المستخدمين والتحليلات والفواتير

🔥 عرض الإطلاق: -30% على جميع القوالب لمدة 72 ساعة!

انضم إلى المستخدمين المبكرين قاموا بالفعل بإطلاق SaaS الخاص بهم عبر AI Empire.
لا تفوّت هذه الفرصة — العرض ينتهي في [DATE].`,
    cta: '🚀 ابدأ الآن — -30%',
    hashtags: [
      '#AIEmpire', '#SaaS', '#NextJS', '#AI', '#Launch',
      '#WebTemplates', '#IndieHacker', '#StartupFrance', '#TechFR', '#AI'
    ],
    emailSubject: '🚀 أصبح رسمياً: AI Empire مباشر! -30% لك',
    emailBody: `مرحباً [First Name],

اليوم وصل. AI Empire أخيراً مباشر!

ما نقدمه:
🎨 6 قوالب Next.js 14 احترافية (€49-199)
🤖 واجهات برمجة تطبيقات الذكاء الاصطناعي المدمجة (GPT-4، Groq، Gemini)
💳 Stripe + Auth مُعدّة
📊 لوحة تحكم إدارية كاملة

🎁 عرض حصري: -30% على جميع القوالب لمدة 72 ساعة فقط.

استخدم الكود LAUNCH30 عند الدفع.

[CTA: استكشف القوالب →]

نراكم قريباً،
فريق AI Empire 🇫🇷`,
    socialPost: `🚀 AI Empire أخيراً مباشر!

المنصة التي تجمع:
✅ قوالب Next.js 14 احترافية
✅ واجهات برمجة تطبيقات الذكاء الاصطناعي المدمجة
✅ Stripe + Auth مشمولة
✅ لوحة تحكم إدارية

🎁 -30% لمدة 72 ساعة مع الكود LAUNCH30

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI #Launch`
  },
  schedule: [
    { day: 'D-7', action: 'teaser على وسائل التواصل الاجتماعي', channel: 'Twitter/X, LinkedIn' },
    { day: 'D-3', action: 'رسالة teaser للمشتركين في النشرة الإخبارية', channel: 'Email' },
    { day: 'D-1', action: 'العد التنازلي في Instagram Stories', channel: 'Instagram' },
    { day: 'D0', action: 'الإطلاق الرسمي — منشور + رسالة + إعلانات', channel: 'جميع القنوات' },
    { day: 'D+1', action: 'شهادات المستخدمين الأوائل', channel: 'Twitter/X, LinkedIn' },
    { day: 'D+3', action: 'تذكير بالعرض -30%', channel: 'Email, Twitter' },
    { day: 'D+5', action: 'درس تعليمي "كيف تنشئ أول SaaS خاص بك"', channel: 'YouTube, Blog' },
    { day: 'D+7', action: 'نهاية عرض -30%', channel: 'Email, Social' },
    { day: 'D+10', action: 'دراسة حالة للعميل', channel: 'LinkedIn, Blog' },
    { day: 'D+14', action: 'ملخص + شهادات', channel: 'Email, Twitter' }
  ],
  metrics: {
    targetReach: 'الجمهور المستهدف (يختلف حسب الحملة)',
    targetConversion: 'معدل تحويل 1-2%',
    targetRevenue: 'متناسب مع ميزانية الإعلانات'
  }
}

// ============================================================
// حملة الترويج الموسمي
// ============================================================
export const seasonalPromotionTemplate: CampaignTemplate = {
  id: 'tpl_seasonal',
  name: 'الترويج الموسمي — ربيع/صيف',
  type: 'seasonal',
  duration: '21 يوماً',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
  budget: '€800',
  objective: 'زيادة المبيعات بنسبة 40% خلال الفترة الصيفية',
  content: {
    headline: '☀️ تخفيضات صيف AI Empire — حتى -40%!',
    subheadline: 'الصيف لتشغيل SaaS الخاص بك، وليس للجلوس على الشاطئ',
    body: `الصيف يقترب، وهو الوقت المثالي لتعزيز مشروعك!

🌞 عروض ربيع/صيف خاصة:
- NeuraStore (قالب التجارة الإلكترونية): €39 → €29 (-25%)
- NeuraBlog (قالب المدونة): €29 → €19 (-35%)
- الحزمة الكاملة (6 قوالب): €599 → €359 (-40%)

⚡ لماذا الصيف؟
→ منافسة أقل في السوق
→ وقت أكثر للبناء قبل موسم الخريف
→ الشركات الناشئة التي تطلق صيفاً تصل سبتمبر مع منتج

⏱️ العرض ساري من [START_DATE] إلى [END_DATE]

استخدم الكود ETE2024 للحصول على -40% على الحزمة.`,
    cta: '☀️ استفد من التخفيضات — -40%',
    hashtags: [
      '#AIEmpire', '#Sale', '#Summer2024', '#SaaS', '#Templates',
      '#Promo', '#NextJS', '#IndieHacker', '#StartupFrance', '#TechFR'
    ],
    emailSubject: '☀️ تخفيضات صيف: -40% على جميع قوالب AI Empire!',
    emailBody: `مرحباً [First Name],

الصيف قادم ولدينا عرضاً لا يمكنك رفضه! 🌞

☀️ عروض خاصة:
- NeuraStore: €39 → €29
- NeuraBlog: €29 → €19
- حزمة 6 قوالب: €599 → €359

⏰ العرض ساري حتى [END_DATE]

استخدم الكود ETE2024 عند الدفع.

[CTA: شاهد العروض →]

استمتع بصيف جميل!
فريق AI Empire 🇫🇷`,
    socialPost: `☀️ تخفيضات صيف AI EMPIRE ☀️

-40% على الحزمة الكاملة:
✅ 6 قوالب Next.js 14
✅ واجهات برمجة تطبيقات الذكاء الاصطناعي المدمجة
✅ دعم ذو أولوية

الكود: ETE2024
⏰ ساري حتى [DATE]

👉 ai-empire-steel.vercel.app

#AIEmpire #Sale #Summer2024 #SaaS #Promo`
  },
  schedule: [
    { day: 'D-3', action: 'teaser "شيء قادم هذا الصيف..."', channel: 'Twitter/X, Instagram' },
    { day: 'D0', action: 'إعلان رسمي للتخفيضات', channel: 'جميع القنوات' },
    { day: 'D+3', action: 'شهادة عميل + قبل/بعد', channel: 'LinkedIn, Facebook' },
    { day: 'D+7', action: 'تذكير منتصف المسار + مخزون محدود', channel: 'Email' },
    { day: 'D+10', action: 'درس تعليمي "أطلق SaaS الخاص بك هذا الصيف"', channel: 'YouTube, Blog' },
    { day: 'D+14', action: 'آخر الأيام — طارئ', channel: 'جميع القنوات' },
    { day: 'D+18', action: 'آخر فرصة', channel: 'Email, Twitter' },
    { day: 'D+21', action: 'نهاية التخفيضات — ملخص', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '30,000 شخص',
    targetConversion: '300 عملية (1%)',
    targetRevenue: '€10,700 (300 × €35 متوسط)'
  }
}

// ============================================================
// برنامج الإحالة
// ============================================================
export const referralProgramTemplate: CampaignTemplate = {
  id: 'tpl_referral',
  name: 'برنامج الإحالة — اكسب رصيداً',
  type: 'referral',
  duration: 'دائم',
  channels: ['Email', 'Dashboard', 'Twitter/X'],
  budget: '€500 (مكافآت رصيد)',
  objective: 'نمو فيروسي: إحالة واحدة = مستخدمان جديدان',
  content: {
    headline: '🎁 أدخل صديقاً، اكسب 500 رصيد ذكاء اصطناعي مجاناً!',
    subheadline: 'الإحالة الشفهية أفضل قناة نمو لدينا',
    body: `تحب AI Empire؟ شاركه واكسب المكافآت!

🎯 كيف يعمل:
1. شارك رابط الإحالة الخاص بك
2. صديقك يسجل باستخدام رابطك
3. أنتما الاثنان تحصلان على 500 رصيد ذكاء اصطناعي مجاناً!

💰 مستويات المكافآت:
- إحالة واحدة = 500 رصيد
- 3 إحالات = 1,500 رصيد + شارة "السفير"
- 5 إحالات = 2,500 رصيد + وصول Pro لمدة شهر واحد
- 10 إحالات = 5,000 رصيد + وصول Pro لمدة 3 أشهر + ذكر في الموقع

🔗 رابطك الفريد: [REFERRAL_LINK]

شاركه على Twitter أو LinkedIn أو أرسله مباشرة لجهات اتصالك!`,
    cta: '🎁 شارك رابط إحالتي',
    hashtags: [
      '#AIEmpire', '#Referral', '#Free', '#AI', '#SaaS',
      '#Ambassador', '#TechFR', '#StartupFrance'
    ],
    emailSubject: '🎁 تريد 500 رصيد ذكاء اصطناعي مجاناً؟ أدخل صديقاً!',
    emailBody: `مرحباً [First Name],

لدينا مفاجأة لك! 🎁

أدخل صديقاً عبر AI Empire وأنتما الاثنان تحصلان على 500 رصيد ذكاء اصطناعي مجاناً.

رابطك الفريد: [REFERRAL_LINK]

🎯 المستويات:
- إحالة واحدة → 500 رصيد
- 3 إحالات → 1,500 رصيد + شارة
- 5 إحالات → 2,500 رصيد + Pro شهر واحد
- 10 إحالات → 5,000 رصيد + Pro 3 أشهر

شارك رابطك الآن!

[CTA: شارك رابطي →]

شكراً لكونك جزءاً من المغامرة! 💜
فريق AI Empire`,
    socialPost: `🎁 أدخل صديقاً، اكسب 500 رصيد! 🎁

تحب AI Empire؟ شاركه!

✅ صديقك يسجل → 500 رصيد مجاني
✅ أنت تكسب → 500 رصيد مجاني

🔗 رابط الإحالة: [REFERRAL_LINK]

5 إحالات = وصول Pro مجاناً لمدة شهر 🚀

#AIEmpire #Referral #AI #SaaS #Free`
  },
  schedule: [
    { day: 'دائم', action: 'رسالة ترحيب مع رابط الإحالة', channel: 'Email' },
    { day: 'D+7', action: 'تذكير ببرنامج الإحالة', channel: 'Email' },
    { day: 'D+30', action: 'رسالة "لم تدخل أحداً بعد..."', channel: 'Email' },
    { day: 'دائم', action: 'رابط الإحالة مرئي في لوحة التحكم', channel: 'Dashboard' },
    { day: 'أسبوعياً', action: 'قائمة أفضل المُحيلين على Twitter', channel: 'Twitter/X' }
  ],
  metrics: {
    targetReach: '1,000 مشاركة/شهر',
    targetConversion: '200 تسجيل جديد/شهر',
    targetRevenue: '+40% نمو عضوي'
  }
}

// ============================================================
// حملة الجمعة السوداء / الاثنين الإلكتروني
// ============================================================
export const blackFridayTemplate: CampaignTemplate = {
  id: 'tpl_black_friday',
  name: 'الجمعة السوداء / الاثنين الإلكتروني — AI Empire',
  type: 'black-friday',
  duration: '5 أيام (الأربعاء-السبت + الاثنين الإلكتروني)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€2,500',
    objective: 'تعظيم الوصول والتحويلات',
  content: {
    headline: '🖤 BLACK FRIDAY AI EMPIRE — -50% على كل شيء!',
    subheadline: 'أكبر ترويج في السنة. لا تفوّته.',
    body: `حان وقت العمل. لأول مرة في التاريخ:

🖤 BLACK FRIDAY — -50% على كل شيء

📦 عروض حصرية:
- NeuraStore: €39 → €19.50
- NeuraBlog: €29 → €14.50
- NeuraPortfolio: €59 → €29.50
- الحزمة المميزة (6 قوالب): €599 → €299.50
- الخطة Pro (سنة واحدة): €1,188 → €594

⚡ ليس مزحة. هذا هو الترويج للسنة.

⏱️ محدود الوقت: من [WEDNESDAY] إلى [MONDAY] فقط.

🔒 مخزون محدود: أول 50 مشترين يحصلون على قالب مكافأة مجاني.

الكود: BLACKFRIDAY50`,
    cta: '🖤 استفد من -50% الآن',
    hashtags: [
      '#AIEmpire', '#BlackFriday', '#CyberMonday', '#Sale',
      '#Promo', '#SaaS', '#Templates', '#NextJS', '#IADeals', '#TechFR'
    ],
    emailSubject: '🖤 BLACK FRIDAY: -50% على كل شيء في AI Empire — 5 أيام فقط!',
    emailBody: `مرحباً [First Name],

أصبح رسمياً. الجمعة السوداء وصلت إلى AI Empire. 🖤

-50% على كل شيء:
📦 NeuraStore: €39 → €19.50
📦 NeuraBlog: €29 → €14.50
📦 الحزمة المميزة: €599 → €299.50
📦 الخطة Pro سنة واحدة: €1,188 → €594

⏰ ساري من [WEDNESDAY] إلى [MONDAY] فقط.

الكود: BLACKFRIDAY50

أول 50 مشترين يحصلون على قالب مكافأة مجاني! 🎁

[CTA: احصل على -50% →]

لا تفوّت هذا.
فريق AI Empire 🖤`,
    socialPost: `🖤 BLACK FRIDAY AI EMPIRE 🖤

-50% على كل شيء لمدة 5 أيام!

📦 قوالب من €14.50 إلى €299.50
📦 خطة Pro -50%
📦 أول 50 = قالب مكافأة مجاني

الكود: BLACKFRIDAY50
⏰ من [WEDNESDAY] إلى [MONDAY]

👉 ai-empire-steel.vercel.app

#BlackFriday #AIEmpire #SaaS #Promo`
  },
  schedule: [
    { day: 'الأربعاء D-1', action: 'teaser "غداً، شيء داكن قادم..."', channel: 'Twitter, Instagram' },
    { day: 'الخميس D0 (BF)', action: 'إطلاق الجمعة السوداء الرسمي', channel: 'جميع القنوات + بريد إلكتروني جماعي' },
    { day: 'الخميس D0', action: 'Google Ads — حملة طارئة', channel: 'Google Ads' },
    { day: 'الجمعة D+1', action: 'تذكير + شهادات المشترين', channel: 'Email, Twitter' },
    { day: 'السبت D+2', action: 'إثبات اجتماعي: "تم بالفعل بيع X!"', channel: 'Instagram, LinkedIn' },
    { day: 'الأحد D+3', action: 'آخر يوم للجمعة السوداء العادية', channel: 'بريد إلكتروني جماعي' },
    { day: 'الاثنين CM', action: 'الإثنين الإلكتروني — امتداد خاص', channel: 'جميع القنوات' },
    { day: 'الاثنين CM', action: 'عرض闪光 24 ساعة', channel: 'Email, Twitter' },
    { day: 'الثلاثاء D+5', action: 'نهاية الجمعة السوداء — شكراً', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: 'الجمهور المستهدف (يختلف حسب الحملة)',
    targetConversion: 'معدل تحويل 0.5-1%',
    targetRevenue: 'متناسب مع ميزانية الإعلانات'
  }
}

// ============================================================
// حملة العام الجديد
// ============================================================
export const newYearTemplate: CampaignTemplate = {
  id: 'tpl_new_year',
  name: 'العام الجديد — أهداف SaaS 2025',
  type: 'new-year',
  duration: '14 يوماً (26 ديسمبر - 9 يناير)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Blog'],
  budget: '€800',
  objective: 'تحويل العملاء المحتملين لنهاية السنة والبدء بقوة في يناير',
  content: {
    headline: '🎆 2025: أطلق SaaS الخاص بك هذا العام!',
    subheadline: 'عام جديد، SaaS جديد. ابدأ بقوة مع AI Empire.',
    body: `2025 هو عامك. 🎆

وضعت فكرتك على الورق العام الماضي. الآن، شُكّل العمل.

🚀 عرض العام الجديد:
- -25% على جميع القوالب مع الكود NEWYEAR2025
- 500 رصيد ذكاء اصطناعي مجاناً للبدء
- وصول أولي للميزات الجديدة لعام 2025

🎯 أهداف 2025:
✅ "سأطلق SaaS الخاص بي" → تم في 24 ساعة مع AI Empire
✅ "سأربح عبر الإنترنت" → قوالب التجارة الإلكترونية + Stripe مشمولة
✅ "سأتعلم الذكاء الاصطناعي" → واجهات برمجة تطبيقات الذكاء الاصطناعي المدمجة + دروس تعليمية
✅ "سأقوم بالتحول الرقمي" → لوحة تحكم إدارية كاملة

⏱️ العرض من 26 ديسمبر إلى 9 يناير فقط.

اجعل 2025 عام نجاحك.`,
    cta: '🎆 ابدأ 2025 مع AI Empire',
    hashtags: [
      '#AIEmpire', '#NewYear', '#2025', '#Resolutions', '#SaaS',
      '#Launch', '#IndieHacker', '#StartupFrance', '#TechFR', '#AI'
    ],
    emailSubject: '🎆 عام جديد، SaaS جديد: -25% + 500 رصيد مجاني!',
    emailBody: `مرحباً [First Name],

كل عام وأنتم بخير! 🎆

2025 هو العام الذي تطلق فيه SaaS الخاص بك. ونحن هنا للمساعدة.

🎁 عرض العام الجديد:
- -25% على جميع القوالب
- 500 رصيد ذكاء اصطناعي مجاناً
- وصول أولي لميزات 2025

الكود: NEWYEAR2025

⏰ العرض من 26 ديسمبر إلى 9 يناير.

اجعل هذا العام أفضل عام.

[CTA: استكشف العروض →]

كل عام وأنتم بخير و bonne chance!
فريق AI Empire 🇫🇷`,
    socialPost: `🎆 2025: عام SaaS الخاص بك! 🎆

عام جديد، بداية جديدة.

🎁 عرض خاص:
✅ -25% على القوالب
✅ 500 رصيد ذكاء اصطناعي مجاناً
✅ وصول أولي لعام 2025

الكود: NEWYEAR2025
⏰ من 26/12 إلى 09/01

👉 ai-empire-steel.vercel.app

#AIEmpire #NewYear #2025 #SaaS #Resolutions`
  },
  schedule: [
    { day: '26 ديسمبر', action: 'رسالة "كل عام وأنت بخير — هديتك"', channel: 'Email' },
    { day: '27 ديسمبر', action: 'منشور "أهداف 2025: أطلق SaaS الخاص بك"', channel: 'LinkedIn, Twitter' },
    { day: '30 ديسمبر', action: 'تذكير بالعرض + شهادات', channel: 'Email, Twitter' },
    { day: '1 يناير', action: 'رسالة "كل عام وأنت بخير — نحن هنا لك"', channel: 'Email, Social' },
    { day: '2 يناير', action: 'درس تعليمي "5 خطوات لإطلاق SaaS في يناير"', channel: 'Blog, YouTube' },
    { day: '5 يناير', action: 'إثبات اجتماعي + طارئ', channel: 'Twitter, Instagram' },
    { day: '7 يناير', action: 'آخر فرصة', channel: 'Email' },
    { day: '9 يناير', action: 'نهاية العرض — ملخص + معاينة 2025', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '40,000 شخص',
    targetConversion: '400 تسجيل (1%)',
    targetRevenue: '€5,000 (200 × €25 متوسط)'
  }
}

// ============================================================
// الدوال المساعدة
// ============================================================

export function getAllCampaignTemplates(): CampaignTemplate[] {
  return [
    productLaunchTemplate,
    seasonalPromotionTemplate,
    referralProgramTemplate,
    blackFridayTemplate,
    newYearTemplate,
  ]
}

export function getCampaignTemplateByType(type: CampaignTemplate['type']): CampaignTemplate | undefined {
  return getAllCampaignTemplates().find(t => t.type === type)
}

export function generateCampaignTemplateId(): string {
  return `campaign_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function generateEmailBlast(template: CampaignTemplate, recipientName: string): {
  subject: string
  body: string
  cta: string
} {
  return {
    subject: template.content.emailSubject.replace('[First Name]', recipientName),
    body: template.content.emailBody.replace(/\[First Name\]/g, recipientName),
    cta: template.content.cta,
  }
}

export function generateTemplateSocialPost(template: CampaignTemplate): string {
  return template.content.socialPost
}

export function formatScheduleForCalendar(schedule: CampaignSchedule[]): string {
  return schedule.map(s => `${s.day} | ${s.channel} | ${s.action}`).join('\n')
}

export function calculateTotalBudget(templates: CampaignTemplate[]): string {
  const total = templates.reduce((sum, t) => {
    const budgetNum = parseInt(t.budget.replace(/[^0-9]/g, ''), 10)
    return sum + (isNaN(budgetNum) ? 0 : budgetNum)
  }, 0)
  return `€${total.toLocaleString('ar-SA')}`
}
