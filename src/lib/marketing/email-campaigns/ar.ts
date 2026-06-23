import type { EmailCampaignBundle } from './types';

export const emailCampaignBundle: EmailCampaignBundle = {
  language: 'ar',
  campaigns: [
    // الحملة 1: إعلان الإطلاق
    {
      id: 'email-launch',
      name: 'إعلان الإطلاق',
      type: 'launch_announcement',
      variants: [
        { id: 'launch-a', subject: 'AI Empire جاهز — أدوات SaaS مدعومة بالذكاء الاصطناعي', previewText: 'قوالب، واجهات برمجة تطبيقات الذكاء الاصطناعي، Stripe، والمصادقة — في منصة واحدة.' },
        { id: 'launch-b', subject: 'لقد أطلقنا: Next.js 14 قوالب + واجهات برمجة تطبيقات الذكاء الاصطناعي', previewText: 'كل ما تحتاجه لنشر SaaS الخاص بك في 24 ساعة.' },
        { id: 'launch-c', subject: 'انشر SaaS الخاص بك بشكل أسرع — AI Empire هنا', previewText: 'قوالب احترافية مع تكامل الذكاء الاصطناعي، جاهزة للنشر.' },
      ],
      previewText: 'قوالب، واجهات برمجة تطبيقات الذكاء الاصطناعي، Stripe، والمصادقة — في منصة واحدة.',
      cta: 'استكشف AI Empire',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement',
      htmlBody: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;font-weight:700;">AI Empire جاهز الآن</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">مجموعة الأدوات الكاملة لبناء منتجات SaaS مدعومة بالذكاء الاصطناعي</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">مرحباً {{first_name}}،</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      يسعدنا الإعلان عن إطلاق <strong>AI Empire</strong> — منصة صُممت لمساعدة المطورين على نشر منتجات SaaS المدعومة بالذكاء الاصطناعي بشكل أسرع.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">إليك ما يشمله:</p>

    <div style="background:#f8f9fa;border-right:4px solid #667eea;padding:16px 20px;margin:24px 0;border-radius:8px 0 0 8px;">
      <p style="margin:4px 0;color:#333;">✅ قوالب Next.js 14 احترافية (من €19)</p>
      <p style="margin:4px 0;color:#333;">✅ واجهة برمجة تطبيقات ذكية موحدة — Groq + Gemini في نقطة نهاية واحدة</p>
      <p style="margin:4px 0;color:#333;">✅ تكامل فواتير Stripe مُعد مسبقاً</p>
      <p style="margin:4px 0;color:#333;">✅ مصادقة جاهزة للاستخدام</p>
      <p style="margin:4px 0;color:#333;">✅ لوحة تحكم إدارية مشمولة</p>
      <p style="margin:4px 0;color:#333;">✅ مستوى مجاني — 100 رصيد عند التسجيل</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      سواء كنت تبني متجر إلكتروني أو مدونة أو معرض أعمال، يوفر AI Empire الأساس الذي تحتاجه.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        استكشف AI Empire
      </a>
    </div>

    <h2 style="font-size:20px;color:#333;margin:32px 0 16px;">القوالب المتاحة</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">قالب تجارة إلكترونية كامل مع Stripe وسلة التسوق ولوحة تحكم إدارية</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">مدونة محسّنة لمحركات البحث مع MDX والوضع الليلي وخلاصة RSS</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">معرض أعمال احترافي مع حركات والوضع الليلي ونموذج الاتصال</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">الحزمة الكاملة — €299</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">جميع القوالب الستة + دعم ذو أولوية + تحديثات مجانية</p>
    </div>

    <p style="font-size:14px;color:#666;line-height:1.6;margin-top:32px;">
      لديك أسئلة؟ رد على هذا البريد الإلكتروني — نقرأ كل استجابة.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      فريق AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — ابنِ منتجات SaaS مدعومة بالذكاء الاصطناعي بشكل أسرع<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">الموقع</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">التوثيق</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">إلغاء الاشتراك</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // الحملة 2: تحديث المنتج
    {
      id: 'email-update',
      name: 'تحديث المنتج',
      type: 'product_update',
      variants: [
        { id: 'update-a', subject: 'جديد — تحديثات AI Empire لهذا الشهر', previewText: 'ميزات جديدة وتحسينات وما هو قادم.' },
        { id: 'update-b', subject: 'سجل تغييرات AI Empire — قوالب وميزات API جديدة', previewText: 'لقد كنا مشغولين بالبناء. إليك ما تم نشره.' },
        { id: 'update-c', subject: 'تحديث AI Empire الشهري وصل إليك', previewText: 'تكاملات جديدة وتحسينات في الأداء وميزات قادمة.' },
      ],
      previewText: 'ميزات جديدة وتحسينات وما هو قادم.',
      cta: 'عرض سجل التغييرات',
      ctaUrl: 'https://ai-empire-steel.vercel.app/changelog?utm_source=email&utm_medium=update&utm_campaign=product_update',
      htmlBody: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">جديد في AI Empire</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">تحديث المنتج الشهري — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">مرحباً {{first_name}}،</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      إليك ما تم نشره هذا الشهر:
    </p>

    <div style="margin:24px 0;">
      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">ميزة جديدة: نقطة نهاية لتوليد أكواد AI</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          نقطة نهاية API جديدة مُحسّنة لمهام توليد الأكواد. تدعم Groq Llama 3 وGemini Pro. متاحة على جميع الخطط بما في ذلك الخطط المجانية.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">تحسين: تدفقات الدفع في NeuraStore</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          أعدنا تصميم تجربة الدفع مع دعم Apple Pay وGoogle Pay. تحسنت معدلات التحويل بنسبة 15% في الاختبارات.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">تحديث: توثيق API</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          أعدنا كتابة التوثيق بالكامل مع أمثلة تفاعلية وأكواد قابلة للنسخ ودليل بدء سريع جديد.
        </p>
      </div>

      <div style="padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">قادم الشهر القادم</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          أداة تحسين محركات البحث المدعومة بالذكاء الاصطناعي لـ NeuraBlog. وصف تلقائي للبيانات الوصفية وصور Open Graph وإنشاء البيانات المنظمة.
        </p>
      </div>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://ai-empire-steel.vercel.app/changelog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        عرض سجل التغييرات الكامل
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      شكراً لبناء منتجاتك مع AI Empire.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      فريق AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — ابنِ منتجات SaaS مدعومة بالذكاء الاصطناعي بشكل أسرع<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">الموقع</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">التوثيق</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">إلغاء الاشتراك</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // الحملة 3: النشرة الإخبارية الشهرية
    {
      id: 'email-newsletter',
      name: 'النشرة الإخبارية الشهرية',
      type: 'newsletter',
      variants: [
        { id: 'newsletter-a', subject: 'AI Empire الشهري — نصائح ودروس وتحديثات', previewText: 'جرعتك الشهرية من رؤى الذكاء الاصطناعي وSaaS.' },
        { id: 'newsletter-b', subject: 'هذا الشهر في الذكاء الاصطناعي وSaaS — نشرة AI Empire', previewText: ' Highlights من المجتمع وميزات جديدة ورؤى صناعية.' },
        { id: 'newsletter-c', subject: 'AI Empire #{{issue_number}} — ما تعلمناه هذا الشهر', previewText: 'نصائح عملية لبناء منتجات مدعومة بالذكاء الاصطناعي.' },
      ],
      previewText: 'جرعتك الشهرية من رؤى الذكاء الاصطناعي وSaaS.',
      cta: 'اقرأ المزيد',
      ctaUrl: 'https://ai-empire-steel.vercel.app/blog?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_newsletter',
      htmlBody: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire الشهري</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">العدد #{{issue_number}} — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">مرحباً {{first_name}}،</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      أهلاً بك في النشرة الإخبارية لهذا الشهر. إليك ما يحدث في مجتمع AI Empire ومجال الذكاء الاصطناعي/SaaS بشكل عام.
    </p>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">دروس تعليمية</h2>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">كيف تضيف محادثة AI إلى تطبيق Next.js الخاص بك</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">دليل خطوة بخطوة لدمج نقطة نهاية المحادثة من AI Empire في تطبيق Next.js. يتضمن نماذج أكواد ونصائح النشر.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">أفضل ممارسات تكامل Stripe لـ SaaS</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">دروس من بناء تدفقات الدفع في NeuraStore. إدارة الاشتراكات وWebhooks وإعداد بوابة العملاء.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">نشر Next.js 14 على Vercel: الدليل الكامل</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">من الصفر إلى بيئة الإنتاج. متغيرات البيئة والنطاقات ونشرات المعاينة وتحسين الأداء.</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;"> highlights من المجتمع</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>مشروع مميز:</strong> أطلق أحد مستخدمينا منصة معالجة مستندات SaaS باستخدام NeuraStore كقالب أساسي وواجهة برمجة تطبيقات AI Empire لاستخراج النصوص. من الصفر إلى العملاء الدافعين في 3 أسابيع.
      </p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>نصيحة الشهر:</strong> استخدم Groq للاستجابات الفورية (زمن استجابة منخفض) وGemini للمهام المعقدة التفكير. يتيح لك AI Empire التبديل بين النماذج بتغيير بارامتر واحد.
      </p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">رؤى صناعية</h2>

    <p style="font-size:15px;color:#333;line-height:1.6;">
      يتطور سوق واجهات برمجة تطبيقات الذكاء الاصطناعي بسرعة. نرى اتجاهاً واضحاً نحو نقاط نهاية موحدة — المطورون يريدون تكاملاً واحداً وليس خمسة. صُنع AI Empire لهذا الواقع، ونضيف نماذج جديدة بانتظام.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/blog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        قراءة المدونة الكاملة
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      إلى الشهر القادم،<br>فريق AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — ابنِ منتجات SaaS مدعومة بالذكاء الاصطناعي بشكل أسرع<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">الموقع</a> ·
      <a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">المدونة</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">إلغاء الاشتراك</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // الحملة 4: إعادة التنشيط
    {
      id: 'email-reengagement',
      name: 'إعادة التنشيط',
      type: 'reengagement',
      variants: [
        { id: 'reeng-a', subject: 'نشتاق إليك — حساب AI Empire الخاص بك في انتظارك', previewText: 'عد واحصل على 50 رصيداً إضافياً.' },
        { id: 'reeng-b', subject: 'لا تزال تفكر؟ رصيدك المجاني على وشك الانتهاء', previewText: '100 رصيد مجاني في انتظارك. عد وابنِ.' },
        { id: 'reeng-c', subject: 'لقد تغير الكثير في AI Empire منذ زيارتك الأخيرة', previewText: 'ميزات جديدة وقوالب جديدة ورصيد إضافي لك.' },
      ],
      previewText: 'عد واحصل على 50 رصيداً إضافياً.',
      cta: 'إعادة تنشيط الحساب',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=reengagement&utm_campaign=reengagement',
      htmlBody: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">نشتاق إليك</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">حسابك في AI Empire لا يزال هنا — وأعددنا لك شيئاً</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">مرحباً {{first_name}}،</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      مر وقت منذ زيارتك الأخيرة لـ AI Empire. أردنا إخبارك بأن حسابك لا يزال نشطاً وقد أضفنا <strong>50 رصيداً إضافياً</strong> لمساعدتك على البدء مجدداً.
    </p>

    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
      <p style="color:#ffffff;font-size:32px;font-weight:700;margin:0;">+50 رصيداً</p>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">مجاني. بدون أي شروط.</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">منذ زيارتك الأخيرة، أضفنا:</p>

    <ul style="font-size:15px;color:#333;line-height:1.8;padding-right:20px;padding-left:0;">
      <li>نقطة نهاية جديدة لتوليد أكواد AI</li>
      <li>تحسينات في تدفقات الدفع في NeuraStore</li>
      <li>توثيق API أعيد كتابته بالكامل</li>
      <li>تحسينات في JavaScript وPython SDK</li>
    </ul>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/dashboard" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        إعادة تنشيط حسابي
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      إذا كنت لا ترغب في تلقي رسائل البريد الإلكتروني، يمكنك <a href="{{unsubscribe_url}}" style="color:#999;">إلغاء الاشتراك</a>.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — ابنِ منتجات SaaS مدعومة بالذكاء الاصطناعي بشكل أسرع<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">الموقع</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">التوثيق</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">إلغاء الاشتراك</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // الحملة 5: عرض الترقية
    {
      id: 'email-upgrade',
      name: 'عرض الترقية',
      type: 'upgrade_offer',
      variants: [
        { id: 'upgrade-a', subject: 'افتح المزيد — قم بترقية خطة AI Empire اليوم', previewText: 'مزيد من الرصيد، مزيد من القوالب، دم ذي أولوية.' },
        { id: 'upgrade-b', subject: 'استخدامك لـ AI Empire يتزايد — حان وقت الترقية؟', previewText: 'احصل على المزيد من أرصدة API والقوالب المميزة.' },
        { id: 'upgrade-c', subject: 'عرض خاص: خصم 20% على قوالب AI Empire', previewText: 'عرض لفترة محدودة للمستخدمين النشطين. قم بالترقية الآن.' },
      ],
      previewText: 'مزيد من الرصيد، مزيد من القوالب، دعم ذو أولوية.',
      cta: 'قم بالترقية الآن — خصم 20%',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing?utm_source=email&utm_medium=upgrade&utm_campaign=upgrade_offer',
      htmlBody: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">ارتقِ بـ SaaS الخاص بك</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">خصم 20% على القوالب للمستخدمين النشطين في AI Empire</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">مرحباً {{first_name}}،</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      لقد كنت تستخدم AI Empire بنشاط — ونريد أن نكافئك على ذلك. إليك <strong>خصم 20%</strong> حصري على جميع القوالب والحزمة الكاملة.
    </p>

    <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:24px 0;">
      <p style="text-align:center;font-size:14px;color:#666;margin:0 0 4px;">استخدم الكود عند الدفع:</p>
      <p style="text-align:center;font-size:28px;font-weight:700;color:#667eea;margin:0;letter-spacing:2px;">UPGRADE20</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:24px 0 12px;">ما تحصل عليه مع القوالب</h2>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29 → €23.20 مع الكود</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">قالب تجارة إلكترونية مع Stripe وسلة التسوق ولوحة تحكم إدارية وتوصيات AI</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19 → €15.20 مع الكود</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">قالب مدونة مع MDX والوضع الليلي وRSS وتحسين محركات البحث</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29 → €23.20 مع الكود</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">قالب معرض أعمال مع حركات والوضع الليلي ونموذج الاتصال</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#eff6ff;border-radius:8px;border:2px solid #667eea;">
      <p style="margin:0;font-weight:600;color:#333;">الحزمة الكاملة — €299 → €239.20 مع الكود</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">جميع القوالب الستة + دعم ذي أولوية + تحديثات مجانية. أفضل قيمة.</p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/pricing?coupon=UPGRADE20" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        قم بالترقية الآن — خصم 20%
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      ينتهي هذا العرض خلال 72 ساعة. الكود صالح لمرة واحدة فقط.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — ابنِ منتجات SaaS مدعومة بالذكاء الاصطناعي بشكل أسرع<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">الموقع</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">التوثيق</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">إلغاء الاشتراك</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },
  ],
};
