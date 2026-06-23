export interface ContentCalendar {
  id: string
  name: string
  period: string
  type: 'monthly' | 'weekly' | 'holiday'
  posts: ContentPost[]
  metrics: ContentMetrics
}

export interface ContentPost {
  date: string
  time: string
  platform: string
  type: string
  content: string
  hashtags: string[]
  cta?: string
  url?: string
}

export interface ContentMetrics {
  totalPosts: number
  platforms: string[]
  avgPostsPerDay: number
}

export interface HolidayPlan {
  name: string
  date: string
  daysBefore: number
  content: ContentPost[]
}

// ============================================================
// التقويم الشهري
// ============================================================
export const monthlyContentPlan: ContentCalendar = {
  id: 'cal_monthly',
  name: 'التقويم الشهري — AI Empire',
  period: 'مارس 2025',
  type: 'monthly',
  posts: [
    // الأسبوع 1
    {
      date: '01/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 3 أسباب لاستخدام الذكاء الاصطناعي في شركات الناشئة العربية الآن:\n\n1. تقليل التكاليف بنسبة 60%\n2. أتمتة المهام المتكررة\n3. التميز عن المنافسين\n\n#AIEmpire #StartupArabia',
      hashtags: ['#AIEmpire', '#StartupArabia', '#AI'],
      cta: 'اكتشف كيف'
    },
    {
      date: '01/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: 'لم يعد الذكاء الاصطناعي حكراً على العمالقة.\n\nإليك كيف يمكن لشركات الناشئة الوصول إليه بميزانية محدودة:\n\n→ قوالب AI Empire (ابتداءً من €19)\n→ APIs ذكاء اصطناعي مجانية (GPT-4, Groq)\n→ تكامل في 5 دقائق\n\n5,000+ مطور فعلوا ذلك بالفعل.\n\nوأنت؟\n\n#AIEmpire #AI #StartupArabia',
      hashtags: ['#AIEmpire', '#AI', '#StartupArabia']
    },
    {
      date: '02/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 دليل تعليمي في 60 ثانية:\n\nكيف تنشئ مدونة بالذكاء الاصطناعي في 5 دقائق مع AI Empire:\n\n1. اختر NeuraBlog (€19)\n2. ثبّت باستخدام npx\n3. اضبط APIs الخاصة بك\n4. انشر على Vercel\n\nهذا كل شيء! ✅\n\n#AIEmpire #NextJS #Tutorial',
      hashtags: ['#AIEmpire', '#NextJS', '#Tutorial']
    },
    {
      date: '02/03',
      time: '15:00',
      platform: 'Instagram',
      type: 'Carousel',
      content: '🎨 كاروسيل: "5 قوالب لإطلاق SaaS الخاص بك في 2025"\n\nشريحة 1: NeuraBlog — مدونة متميزة\nشريحة 2: NeuraStore — تجارة إلكترونية\nشريحة 3: NeuraPortfolio — معرض أعمال\nشريحة 4: الحزمة الكاملة — 6 قوالب\nشريحة 5: CTA — ابدأ الآن\n\n#AIEmpire #SaaS #Templates',
      hashtags: ['#AIEmpire', '#SaaS', '#Templates']
    },
    {
      date: '03/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Poll',
      content: '📊 استطلاع: كم تدفع مقابل API الذكاء الاصطناعي؟\n\nA) €0-50/شهر\nB) €50-200/شهر\nC) €200+/شهر\nD) لا أملك API ذكاء اصطناعي بعد\n\n(لدينا حل لكل خيار 😏)\n\n#AIEmpire #AI',
      hashtags: ['#AIEmpire', '#AI']
    },
    {
      date: '03/03',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 سؤال اليوم:\n\nما هو أكبر تحدٍّ لديك مع الذكاء الاصطناعي؟\n\nA) فهم كيفية استخدامه\nB) إيجاد APIs موثوقة\nC) تقليل التكاليف\nD) دمجه في منتجي\n\nشارك في التعليقات! 👇\n\n#AIEmpire #AI #Community',
      hashtags: ['#AIEmpire', '#AI', '#Community']
    },
    {
      date: '04/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 موضوع: "5 نصائح لتقليل تكاليف SaaS الخاص بك بالذكاء الاصطناعي"\n\n1/ استخدم APIs المجانية (Groq, Gemini)\n2/ ادمج AI Empire (قوالب + APIs)\n3/ أتمتة الدعم بروبوت محادثة ذكي\n4/ أنشئ محتوى بـ GPT-4\n5/ حلل بياناتك بالذكاء الاصطناعي\n\n#AIEmpire #SaaS',
      hashtags: ['#AIEmpire', '#SaaS']
    },
    {
      date: '04/03',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 دراسة حالة: كيف خفّضت InnoveTech تكاليف الذكاء الاصطناعي بنسبة 70%\n\nقبل AI Empire:\n→ €3,000/شهر على APIs خارجية\n→ 3 أشهر من التطوير\n→ دعم محدود\n\nبعد AI Empire:\n→ €900/شهر (-70%)\n→ 24 ساعة من التطوير\n→ دعم على مدار الساعة\n\nالنتيجة: €25,000 وفّرها في عام واحد.\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '05/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Meme',
      content: 'أنا: "لن أستخدم الذكاء الاصطناعي"\n\nأنا أيضاً: *أضيف 47 ميزة ذكاء اصطناعي في ساعة واحدة مع AI Empire*\n\n😂\n\n#AIEmpire #DevLife #AI',
      hashtags: ['#AIEmpire', '#DevLife', '#AI']
    },
    // الأسبوع 2
    {
      date: '08/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Launch',
      content: '🚀 جديد: NeuraStore v2 متاح الآن!\n\n✅ تصميم مُحدَّث\n✅ أداء x2\n✅ ميزات تجارة إلكترونية جديدة\n\nالسعر: €29 (-40% لمدة 72 ساعة)\n\nالكود: NEURASTORE40\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Launch',
      hashtags: ['#AIEmpire', '#Launch']
    },
    {
      date: '09/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Product',
      content: '📦 تقديم: NeuraStore v2\n\nالقالب الأكثر شمولاً للتجارة الإلكترونية لـ Next.js 14:\n\n→ سلة تسوق ذكية\n→ مدفوعات Stripe آمنة\n→ لوحة تحكم احترافية\n→ تصميم متجاوب + الوضع الداكن\n\nالسعر: €29 (-40% خصم الإطلاق)\n\n5,000+ مطور يثقون بنا.\n\n#AIEmpire #Ecommerce',
      hashtags: ['#AIEmpire', '#Ecommerce']
    },
    {
      date: '10/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 موضوع: "كيف أطلقت متجر تجارة إلكترونية في 24 ساعة بميزانية €0 للبنية التحتية"\n\n1/ AI Empire وفر لي NeuraStore (€29)\n2/ وصلت Stripe في 5 دقائق\n3/ نشرت على Vercel في 3 دقائق\n4/ كان لدي متجر في 24 ساعة\n5/ التكلفة الإجمالية: €29\n\n#AIEmpire #BuildInPublic',
      hashtags: ['#AIEmpire', '#BuildInPublic']
    },
    // الأسبوع 3
    {
      date: '15/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '📊 ملخص الشهر:\n\n✅ 500+ مستخدم جديد\n✅ 100+ قالب مباع\n✅ 98% رضا العملاء\n\nشكراً للمجتمع! 🙏\n\n#AIEmpire #Milestone',
      hashtags: ['#AIEmpire', '#Milestone']
    },
    {
      date: '16/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Founder Story',
      content: '💡 "تركت وظيفتي لإنشاء AI Empire. إليك السبب."\n\nالسوق العربي يحتاج بديلاً محلياً لـ APIs الذكاء الاصطناعي الأمريكية.\n\nAI Empire هو ذلك البديل:\n→ عربي أولاً\n→ دعم بالعربية\n→ فوترة باليورو\n→ امتثال GDPR أصلي\n\n5,000+ مطور يثقون بنا.\n\n#AIEmpire #FounderStory',
      hashtags: ['#AIEmpire', '#FounderStory']
    },
    // الأسبوع 4
    {
      date: '22/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Teaser',
      content: '👀 شيء كبير قادم...\n\n📅 [التاريخ]\n🎁 [تلميح]\n\nترقبوا.\n\n#AIEmpire #Teaser',
      hashtags: ['#AIEmpire', '#Teaser']
    },
    {
      date: '25/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'CTA',
      content: '🎯 آخر يوم للاستفادة من عرض الإطلاق!\n\n-30% على جميع القوالب\nالكود: LAUNCH30\n⏰ ينتهي عند منتصف الليل\n\nلا تفوّته!\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #LastChance',
      hashtags: ['#AIEmpire', '#LastChance']
    }
  ],
  metrics: {
    totalPosts: 16,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 0.57
  }
}

// ============================================================
// الجدول الأسبوعي
// ============================================================
export const weeklyPostingSchedule: ContentCalendar = {
  id: 'cal_weekly',
  name: 'الجدول الأسبوعي — AI Empire',
  period: 'أسبوع نموذجي',
  type: 'weekly',
  posts: [
    // الاثنين
    {
      date: 'الإثنين',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 تحفيز الاثنين: نصيحة ذكاء اصطناعي لزيادة إنتاجيتك\n\n[نصيحة اليوم]\n\n#AIEmpire #تحفيز_الإثنين',
      hashtags: ['#AIEmpire', '#تحفيز_الإثنين']
    },
    {
      date: 'الإثنين',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: '💡 [موضوع القيادة الفكرية]\n\n[محتوى مهني]\n\n#AIEmpire #ThoughtLeadership',
      hashtags: ['#AIEmpire', '#ThoughtLeadership']
    },
    // الثلاثاء
    {
      date: 'الثلاثاء',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 دليل سريع: [الموضوع]\n\n1. الخطوة 1\n2. الخطوة 2\n3. الخطوة 3\n\n[CTA]\n\n#AIEmpire #Tutorial',
      hashtags: ['#AIEmpire', '#Tutorial']
    },
    {
      date: 'الثلاثاء',
      time: '15:00',
      platform: 'Instagram',
      type: 'Reel',
      content: '🎬 ريل 30 ثانية: "كيف [الإجراء] مع AI Empire"\n\n[العرض التوضيحي]\n\n#AIEmpire #Reel',
      hashtags: ['#AIEmpire', '#Reel']
    },
    // الأربعاء
    {
      date: 'الأربعاء',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 [محتوى قيّم]\n\n[نصيحة أو مشورة]\n\n#AIEmpire #Value',
      hashtags: ['#AIEmpire', '#Value']
    },
    {
      date: 'الأربعاء',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 دراسة حالة: [العميل]\n\nقبل: [الوضع]\nبعد: [النتيجة]\n\n[الدروس المستفادة]\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: 'الأربعاء',
      time: '18:00',
      platform: 'Facebook',
      type: 'Video',
      content: '📹 فيديو دقيقتين: "كيف [الموضوع] مع AI Empire"\n\n[دليل تعليمي فيديو]\n\n#AIEmpire #Video',
      hashtags: ['#AIEmpire', '#Video']
    },
    // الخميس
    {
      date: 'الخميس',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 موضوع: "[الموضوع]"\n\n1/ [النقطة 1]\n2/ [النقطة 2]\n3/ [النقطة 3]\n\n#AIEmpire #Thread',
      hashtags: ['#AIEmpire', '#Thread']
    },
    {
      date: 'الخميس',
      time: '15:00',
      platform: 'LinkedIn',
      type: 'Data',
      content: '📊 [بيانات أو إحصائيات]\n\n[تحليل]\n\n[التأثيرات]\n\n#AIEmpire #Data',
      hashtags: ['#AIEmpire', '#Data']
    },
    // الجمعة
    {
      date: 'الجمعة',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '🏆 [شهادة عميل]\n\n"كيف قدم AI Empire [الفائدة]"\n\n[دليل اجتماعي]\n\n#AIEmpire #SocialProof',
      hashtags: ['#AIEmpire', '#SocialProof']
    },
    {
      date: 'الجمعة',
      time: '18:00',
      platform: 'Twitter/X',
      type: 'Week Recap',
      content: '🔄 ملخص الأسبوع:\n\n✅ [الإنجاز 1]\n✅ [الإنجاز 2]\n✅ [الإنجاز 3]\n\nالأسبوع القادم: [معاينة]\n\n#AIEmpire #Recap',
      hashtags: ['#AIEmpire', '#Recap']
    },
    // السبت
    {
      date: 'السبت',
      time: '10:00',
      platform: 'Instagram',
      type: 'Story',
      content: '📸 قصة: "يوم في حياة مطور مستقل"\n\n[من الكواليس]\n\n#AIEmpire #IndieHacker',
      hashtags: ['#AIEmpire', '#IndieHacker']
    },
    // الأحد
    {
      date: 'الأحد',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 سؤال الأحد:\n\nماذا ستنشئ هذا الأسبوع؟\n\nشارك في التعليقات! 👇\n\n#AIEmpire #Community',
      hashtags: ['#AIEmpire', '#Community']
    }
  ],
  metrics: {
    totalPosts: 13,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 1.86
  }
}

// ============================================================
// تقويم الأعياد
// ============================================================
export const holidayContentPlan: HolidayPlan[] = [
  {
    name: 'عيد الحب',
    date: '14/02',
    daysBefore: 7,
    content: [
      {
        date: '07/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '💕 عيد الحب يقترب...\n\nشيء خاص قادم للمطورين...\n\n#AIEmpire #عيد_الحب',
        hashtags: ['#AIEmpire', '#عيد_الحب']
      },
      {
        date: '14/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '💕 عرض عيد الحب من AI Empire:\n\n-20% على جميع القوالب مع الكود AMOUR20\n\nلأن أفضل هدية هي SaaS يعمل ❤️\n\n⏰ لمدة 24 ساعة فقط\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #عيد_الحب',
        hashtags: ['#AIEmpire', '#عيد_الحب']
      },
      {
        date: '14/02',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Fun',
        content: '💕 "الحب هو إيجاد شخص يشارك شغفك... بالبرمجة"\n\n— مطور وحيد\n\nعيد حب سعيد لجميع المطورين!\n\n#AIEmpire #عيد_الحب #DevLife',
        hashtags: ['#AIEmpire', '#عيد_الحب', '#DevLife']
      }
    ]
  },
  {
    name: 'عيد العمال',
    date: '01/05',
    daysBefore: 3,
    content: [
      {
        date: '28/04',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📅 عيد العمال يقترب...\n\nمستعد للعمل... أقل؟ 🤔\n\n#AIEmpire #عيد_العمال',
        hashtags: ['#AIEmpire', '#عيد_العمال']
      },
      {
        date: '01/05',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎉 عيد عمال سعيد!\n\nاليوم نحتفي بالمطورين الذين يبنون المستقبل.\n\nشكراً لجميع مستخدمينا البالغ عددهم 5,000+! 🙏\n\n#AIEmpire #عيد_العمال #DevLife',
        hashtags: ['#AIEmpire', '#عيد_العمال', '#DevLife']
      }
    ]
  },
  {
    name: 'مهرجان الموسيقى',
    date: '21/06',
    daysBefore: 5,
    content: [
      {
        date: '16/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎵 مهرجان الموسيقى يقترب...\n\nماذا لو صنعنا موسيقى... بالبرمجة؟ 🎶\n\n#AIEmpire #مهرجان_الموسيقى',
        hashtags: ['#AIEmpire', '#مهرجان_الموسيقى']
      },
      {
        date: '21/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Fun',
        content: '🎵 عيد مهرجان الموسيقى!\n\nقائمة تشغيل اليوم:\n1. "Bohemian Rhapsody" — Queen\n2. "AI Empire Theme" — خيالنا\n3. "صوت الكود أثناء الترجمة" — جميع المطورين\n\n🎶\n\n#AIEmpire #مهرجان_الموسيقى',
        hashtags: ['#AIEmpire', '#مهرجان_الموسيقى']
      }
    ]
  },
  {
    name: 'العيد الوطني',
    date: '14/07',
    daysBefore: 7,
    content: [
      {
        date: '07/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🇫🇷 العيد الوطني يقترب...\n\nلدينا شيء خاص للاحتفال بالتكنولوجيا العربية! 🇸🇦\n\n#AIEmpire #عيد_وطني',
        hashtags: ['#AIEmpire', '#عيد_وطني']
      },
      {
        date: '14/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🇫🇷 عيد وطني سعيد!\n\nاليوم نحتفي بالتكنولوجيا العربية:\n→ 5,000+ مطور\n→ 200+ SaaS تم إطلاقها\n→ 100% صنع عربي\n\nعاشت التكنولوجيا العربية! 🇸🇦🚀\n\n#AIEmpire #عيد_وطني #ArabTech',
        hashtags: ['#AIEmpire', '#عيد_وطني', '#ArabTech']
      },
      {
        date: '14/07',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Patriotic',
        content: '🇫🇷 العيد الوطني: حان وقت التكنولوجيا العربية!\n\nAI Empire فخورة بتمثيل الابتكار العربي:\n→ 5,000+ مطور\n→ 200+ SaaS تم إطلاقها\n→ دعم بالعربية\n→ فوترة باليورو\n→ امتثال GDPR أصلي\n\nعاشت التكنولوجيا العربية! 🇸🇦\n\n#AIEmpire #عيد_وطني #ArabTech',
        hashtags: ['#AIEmpire', '#عيد_وطني', '#ArabTech']
      }
    ]
  },
  {
    name: 'العودة للمدارس',
    date: '02/09',
    daysBefore: 14,
    content: [
      {
        date: '19/08',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📚 العودة للمدارس تقترب...\n\nماذا لو تعلمت شيئاً جديداً؟\n\nنُعد لك شيئاً خاصاً... 👀\n\n#AIEmpire #عودة_للمدارس',
        hashtags: ['#AIEmpire', '#عودة_للمدارس']
      },
      {
        date: '02/09',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '📚 العودة للمدارس 2025: تعلّم إنشاء SaaS الخاص بك!\n\nعرض خاص بالعودة:\n-25% على جميع القوالب\nالكود: RENTREE25\n\n⏰ من 2 إلى 15 سبتمبر\n\nالحزمة تشمل:\n→ 6 قوالب Next.js 14\n→ أدلة تعليمية شاملة\n→ دعم ذو أولوية\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #عودة_للمدارس',
        hashtags: ['#AIEmpire', '#عودة_للمدارس']
      }
    ]
  },
  {
    name: 'الجمعة السوداء',
    date: '28/11',
    daysBefore: 14,
    content: [
      {
        date: '14/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🖤 الجمعة السوداء تقترب...\n\nاستعد. إنها صفقة العام.\n\n👀\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '21/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '⏰ أسبوع واحد حتى الجمعة السوداء لـ AI Empire!\n\n-50% على كل شيء.\\n\nحدد التاريخ:\n📅 28 نوفمبر\n\nسجّل لتتلقى إشعاراً:\n👉 ai-empire-steel.vercel.app/black-friday\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '28/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Launch',
        content: '🖤 BLACK FRIDAY AI EMPIRE — بدأ! 🖤\n\n-50% على كل شيء لمدة 5 أيام!\n\n📦 القوالب من €9.50 إلى €149.50\n📦 الخطة Pro -50%\n📦 أول 50 = قالب مكافأة مجاني\n\nالكود: BLACKFRIDAY50\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      }
    ]
  },
  {
    name: 'عيد الميلاد',
    date: '25/12',
    daysBefore: 10,
    content: [
      {
        date: '15/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎄 عيد الميلاد يقترب...\n\nلدينا هدية لك...\n\n🎁\n\n#AIEmpire #عيد_الميلاد',
        hashtags: ['#AIEmpire', '#عيد_الميلاد']
      },
      {
        date: '20/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '🎄 5 أيام حتى عيد الميلاد!\n\nتقويم المجيء الخاص بنا:\n→ قالب مجاني كل يوم\n→ أكواد ترويجية حصرية\n→ محتوى مفاجئ\n\nانضم إلينا!\n\n#AIEmpire #عيد_الميلاد #تقويم_المجيء',
        hashtags: ['#AIEmpire', '#عيد_الميلاد', '#تقويم_المجيء']
      },
      {
        date: '25/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎄 عيد ميلاد مجيد! 🎄\n\nشكراً لجميع مستخدمينا البالغ عددهم 5,000+!\n\nهدية: -30% على جميع القوالب\nالكود: NOEL2025\n\nأعياد سعيدة! 🎅\n\n#AIEmpire #عيد_الميلاد',
        hashtags: ['#AIEmpire', '#عيد_الميلاد']
      }
    ]
  },
  {
    name: 'رأس السنة',
    date: '01/01',
    daysBefore: 7,
    content: [
      {
        date: '25/12',
        time: '18:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎆 2025 يقترب...\n\nمستعد لإطلاق SaaS الخاص بك؟\n\nنُعد لك شيئاً خاصاً...\n\n#AIEmpire #رأس_السنة',
        hashtags: ['#AIEmpire', '#رأس_السنة']
      },
      {
        date: '01/01',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎆 سنة جديدة سعيدة 2025! 🎆\n\n2025 هي سنتك. السنة التي تطلق فيها SaaS الخاص بك.\n\nعرض رأس السنة:\n-25% + 500 رصيد مجاني\nالكود: NOUVELAN2025\n\nاجعل هذه سنة أحلامك!\n\n#AIEmpire #رأس_السنة #2025',
        hashtags: ['#AIEmpire', '#رأس_السنة', '#2025']
      },
      {
        date: '01/01',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Motivational',
        content: '🎆 سنة جديدة، SaaS جديد.\n\n2025 هي سنة اتخاذ الإجراء.\n\nAI Empire هنا لدعمك:\n→ قوالب جاهزة للاستخدام\n→ APIs ذكاء اصطناعي مجانية\n→ دعم على مدار الساعة\n\nانضم إلى أكثر من 5,000 مطور أطلقوا SaaS الخاص بهم بالفعل.\n\nسنة جديدة سعيدة! 🎆\n\n#AIEmpire #رأس_السنة #2025',
        hashtags: ['#AIEmpire', '#رأس_السنة', '#2025']
      }
    ]
  }
]

// ============================================================
// الدوال المساعدة
// ============================================================

export function getAllContentCalendars(): ContentCalendar[] {
  return [monthlyContentPlan, weeklyPostingSchedule]
}

export function getHolidayByName(name: string): HolidayPlan | undefined {
  return holidayContentPlan.find(h => h.name === name)
}

export function getHolidaysForMonth(month: number): HolidayPlan[] {
  return holidayContentPlan.filter(h => {
    const holidayMonth = parseInt(h.date.split('/')[1], 10)
    return holidayMonth === month
  })
}

export function generateCalendarId(): string {
  return `cal_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function getContentByPlatform(posts: ContentPost[], platform: string): ContentPost[] {
  return posts.filter(p => p.platform === platform)
}

export function getContentByDay(posts: ContentPost[], day: string): ContentPost[] {
  return posts.filter(p => p.date === day)
}

export function formatCalendarForExport(posts: ContentPost[]): string {
  return posts.map(p =>
    `${p.date} | ${p.time} | ${p.platform} | ${p.type} | ${p.content.substring(0, 50)}...`
  ).join('\n')
}
