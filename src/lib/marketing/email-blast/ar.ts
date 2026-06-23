// ============================================
// AI-EMPIRE — قوالب البريد الإلكتروني
// حملات بريد إلكتروني محسّنة للتحويل
// ============================================

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  preheader: string;
  body: string;
  cta: string;
  trackingParams: string;
}

// === الحملة 1: إطلاق المنتج ===
export const productLaunchEmail: EmailTemplate = {
  id: 'email-launch',
  name: 'إعلان الإطلاق',
  subject: '🚀 AI-Empire وصل أخيراً — منصة الذكاء الاصطناعي الفرنسية للشركات الناشئة',
  preheader: 'احصل على واجهة برمجة تطبيقات AI مجانية في 5 دقائق، مع دعم باللغة الفرنسية.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; direction: rtl;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 AI-Empire وصل أخيراً!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">منصة الذكاء الاصطناعي الفرنسية للشركات الناشئة</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          مرحباً {{first_name}}،
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          لدينا أخبار رائعة: <strong>AI-Empire أُطلق رسمياً!</strong>
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          أصبح لديك الآن الوصول إلى:
        </p>

        <div style="background: #f8f9fa; border-right: 4px solid #667eea; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #333;">✅ واجهة برمجة تطبيقات AI موحدة (Groq + Gemini)</p>
          <p style="margin: 5px 0; color: #333;">✅ 3 نقاط نهاية: التوليد، SEO، الكود</p>
          <p style="margin: 5px 0; color: #333;">✅ رصيد مجاني للبدء</p>
          <p style="margin: 5px 0; color: #333;">✅ لوحة تحكم فرنسية بديهية</p>
          <p style="margin: 5px 0; color: #333;">✅ دعم باللغة الفرنسية</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>مفتاح API الخاص بك:</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">{{api_key}}</code>
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=launch&utm_campaign={{campaign_id}}"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            ابدأ اختباري الأول ←
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          الخطوة التالية: قم بأول اتصال بواجهة البرمجة في دقيقتين.
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — منصة الذكاء الاصطناعي الفرنسية للشركات الناشئة 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">الموقع</a> |
          <a href="https://ai-empire-steel.vercel.app/docs?utm_source=email&utm_medium=footer" style="color: #667eea;">التوثيق</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">إلغاء الاشتراك</a>
        </p>
      </div>

    </div>
  `,
  cta: 'ابدأ اختباري الأول ←',
  trackingParams: '?utm_source=email&utm_medium=launch&utm_campaign=product_launch',
};

// === الحملة 2: عرض محدود -50% ===
export const limitedOfferEmail: EmailTemplate = {
  id: 'email-offer',
  name: 'عرض محدود -50%',
  subject: '⚡ -50% على NeuraPortfolio — العرض ينتهي خلال 48 ساعة',
  preheader: 'قالب Next.js ممتاز بنصف السعر. 50+ مكون، الوضع الداكن، تصميم متجاوب.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; direction: rtl;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">⚡ -50%</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">العرض ينتهي خلال 48 ساعة!</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          مرحباً {{first_name}}،
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          لدينا <strong>عرض حصري</strong> لك: <strong>-50% على NeuraPortfolio</strong>، قالب Next.js الممتاز لإنشاء معرض أعمالك بالذكاء الاصطناعي.
        </p>

        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ محدود بـ 50 عملية بيع — ينتهي خلال 48 ساعة</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          ما تحصل عليه:
        </p>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>✅ 50+ مكون React</li>
          <li>✅ الوضع الداكن + تصميم متجاوب</li>
          <li>✅ رسوم متحركة سلسة</li>
          <li>✅ تكامل ذكاء اصطناعي أصلي</li>
          <li>✅ دعم باللغة الفرنسية</li>
          <li>✅ تحديثات مجانية مدى الحياة</li>
        </ul>

        <!-- Price -->
        <div style="text-align: center; margin: 30px 0;">
          <p style="margin: 0; font-size: 18px; color: #999; text-decoration: line-through;">€49</p>
          <p style="margin: 0; font-size: 36px; color: #f5576c; font-weight: bold;">€24.99</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/templates/neuraportfolio?utm_source=email&utm_medium=offer&utm_campaign=limited_50"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            استفد من العرض ←
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          بعد 48 ساعة، يعود السعر إلى €49. لا تفوّت هذه الفرصة!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — منصة الذكاء الاصطناعي الفرنسية للشركات الناشئة 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">الموقع</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">إلغاء الاشتراك</a>
        </p>
      </div>

    </div>
  `,
  cta: 'استفد من العرض ←',
  trackingParams: '?utm_source=email&utm_medium=offer&utm_campaign=limited_50',
};

// === الحملة 3: قصص النجاح ===
export const successStoriesEmail: EmailTemplate = {
  id: 'email-success',
  name: 'شهادات العملاء',
  subject: '💬 كيف نجحت هذه الشركات الناشئة الفرنسية بالذكاء الاصطناعي',
  preheader: '3 قصص عملاء تثبت أن الذكاء الاصطناعي متاح للجميع.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; direction: rtl;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💬 شهادات العملاء</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">نجاحهم قد يكون نجاحك</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          مرحباً {{first_name}}،
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          نريد أن نعرض لك ما تحققته الشركات الناشئة الفرنسية مع AI-Empire.
        </p>

        <!-- الشهادة 1 -->
        <div style="background: #f8f9fa; border-right: 4px solid #11998e; padding: 20px; margin: 20px 0; border-radius: 8px 0 0 8px;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "قللنا تكاليف الذكاء الاصطناعي بنسبة 60% بالانتقال إلى AI-Empire. استغرق التكامل 5 دقائق والدعم بالفرنسية ميزة حقيقية."
          </p>
          <p style="margin: 0; font-weight: bold; color: #11998e;">— مارك، مسؤول تقني في شركة ناشئة في باريس</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">النتيجة: -60% تكاليف، +40% سرعة</p>
        </div>

        <!-- الشهادة 2 -->
        <div style="background: #f8f9fa; border-right: 4px solid #38ef7d; padding: 20px; margin: 20px 0; border-radius: 8px 0 0 8px;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "دمجت الذكاء الاصطناعي في خدمتي SaaS في ساعتين. العملاء يحبون الميزات الجديدة."
          </p>
          <p style="margin: 0; font-weight: bold; color: #38ef7d;">— صوفي، مؤسسة شركة SaaS في ليون</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">النتيجة: +25% تحويلات</p>
        </div>

        <!-- الشهادة 3 -->
        <div style="background: #f8f9fa; border-right: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 8px 0 0 8px;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "لوحة التحكم الفرنسية بديهية. تبني فريقي للذكاء الاصطناعي في يوم واحد."
          </p>
          <p style="margin: 0; font-weight: bold; color: #667eea;">— لوكاس، مدير منتج في شركة ناشئة في بوردو</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">النتيجة: +40% إنتاجية</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=success&utm_campaign=testimonials"
             style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            انضم إلى قصص النجاح ←
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — منصة الذكاء الاصطناعي الفرنسية للشركات الناشئة 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">الموقع</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">إلغاء الاشتراك</a>
        </p>
      </div>

    </div>
  `,
  cta: 'انضم إلى قصص النجاح ←',
  trackingParams: '?utm_source=email&utm_medium=success&utm_campaign=testimonials',
};

// === الحملة 4: النشرة الإخبارية الشهرية ===
export const monthlyNewsletterEmail: EmailTemplate = {
  id: 'email-newsletter',
  name: 'النشرة الإخبارية الشهرية',
  subject: '📰 نشرة AI-Empire — يناير 2025',
  preheader: 'آخر الأخبار والعروض من منصة الذكاء الاصطناعي الفرنسية.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; direction: rtl;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">📰 نشرة AI-Empire</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">يناير 2025</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          مرحباً {{first_name}}،
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          إليك آخر أخبار AI-Empire:
        </p>

        <!-- ميزة جديدة 1 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">🚀 جديد: نقطة نهاية SEO</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          تولّد محتوى محسّن لمحركات البحث بنقرة واحدة. ادمجه في مدونتك أو خدمتك SaaS.
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/seo?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          اكتشف نقطة نهاية SEO ←
        </a>

        <!-- ميزة جديدة 2 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📊 نصيحة: حسّن اتصالات API</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          وفّر حتى 30% من اتصالاتك باستخدام التخزين المؤقت الذكي. إليك الطريقة:
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/cache?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          شاهد الدليل ←
        </a>

        <!-- عرض -->
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">🎁 عرض حصري للمشتركين: -30% على NeuraBlog</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #856404;">استخدم الكود NEWSLETTER30</p>
        </div>

        <!-- الإحصائيات -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📈 أرقامنا هذا الشهر</h3>
        <div style="display: flex; justify-content: space-around; text-align: center; margin: 20px 0;">
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">+35%</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">المستخدمون</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">10K+</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">اتصالات API</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">4.8/5</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">الرضا</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            الوصول إلى لوحة التحكم ←
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — منصة الذكاء الاصطناعي الفرنسية للشركات الناشئة 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">الموقع</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">إلغاء الاشتراك</a>
        </p>
      </div>

    </div>
  `,
  cta: 'الوصول إلى لوحة التحكم ←',
  trackingParams: '?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan',
};

// === الحملة 5: برنامج الإحالة ===
export const referralProgramEmail: EmailTemplate = {
  id: 'email-referral',
  name: 'برنامج الإحالة',
  subject: '💰 اكسب €50 عن كل صديق تحيله!',
  preheader: 'برنامج الإحالة: ادعُ أصدقائك واكسب المال.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; direction: rtl;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💰 برنامج الإحالة</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">اكسب €50 عن كل صديق محال</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          مرحباً {{first_name}}،
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          تحب AI-Empire؟ <strong>شاركه مع أصدقائك واكسب المال!</strong>
        </p>

        <!-- كيف يعمل -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">كيف يعمل؟</h3>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>1.</strong> شارك رابط الإحالة الفريد الخاص بك
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>2.</strong> صديقك يسجل عبر رابطك
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>3.</strong> يشتري خطة مدفوعة
          </p>
          <p style="margin: 0; font-size: 16px; color: #333;">
            <strong>4.</strong> تحصل على <strong>€50</strong> في حسابك!
          </p>
        </div>

        <!-- الرابط الفريد -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">رابطك الفريد:</p>
          <p style="margin: 0; font-size: 16px; color: #667eea; font-weight: bold; word-break: break-all;">
            https://ai-empire-steel.vercel.app/ref/{{referral_code}}?utm_source=referral&utm_medium=email
          </p>
        </div>

        <!-- المزايا -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">مزايا المحيل</h3>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>💰 €50 عن كل إحالة ناجحة</li>
          <li>📊 لوحة تحكم لتتبع الوقت الحقيقي</li>
          <li>💳 الدفع عبر Stripe (تحويل بنكي)</li>
          <li>🎁 -20% على تجديدك التالي</li>
          <li>⭐ حالة "محيل ذهبي" بعد 5 إحالات</li>
        </ul>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/referrals?utm_source=email&utm_medium=referral&utm_campaign=referral_program"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            شارك رابطي ←
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          لا يوجد حد للإحالات. كلما شاركت أكثر، كسبت أكثر!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — منصة الذكاء الاصطناعي الفرنسية للشركات الناشئة 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">الموقع</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">إلغاء الاشتراك</a>
        </p>
      </div>

    </div>
  `,
  cta: 'شارك رابطي ←',
  trackingParams: '?utm_source=email&utm_medium=referral&utm_campaign=referral_program',
};

// === COLLECTION ===
export const emailTemplates: EmailTemplate[] = [
  productLaunchEmail,
  limitedOfferEmail,
  successStoriesEmail,
  monthlyNewsletterEmail,
  referralProgramEmail,
];

export const getEmailTemplateById = (id: string): EmailTemplate | undefined => {
  return emailTemplates.find((e) => e.id === id);
};

export const generateEmailSequence = (): EmailTemplate[] => {
  return [
    productLaunchEmail,
    limitedOfferEmail,
    successStoriesEmail,
    monthlyNewsletterEmail,
    referralProgramEmail,
  ];
};
