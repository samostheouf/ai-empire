// ============================================
// AI-EMPIRE — 邮件群发模板
// 转化率优化的邮件营销活动
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

// === 营销活动 1: 产品发布 ===
export const productLaunchEmail: EmailTemplate = {
  id: 'email-launch',
  name: '发布公告',
  subject: '🚀 AI-Empire终于来了 — 面向初创企业的法国AI平台',
  preheader: '5分钟获取免费AI API，支持法语服务。',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 AI-Empire终于来了！</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">面向初创企业的法国AI平台</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          {{first_name}}你好，
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          我们有一个好消息：<strong>AI-Empire正式上线了！</strong>
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          你现在可以使用：
        </p>

        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #333;">✅ 统一AI API（Groq + Gemini）</p>
          <p style="margin: 5px 0; color: #333;">✅ 3个端点：生成、SEO、代码</p>
          <p style="margin: 5px 0; color: #333;">✅ 免费额度助你起步</p>
          <p style="margin: 5px 0; color: #333;">✅ 直观的法语控制面板</p>
          <p style="margin: 5px 0; color: #333;">✅ 法语客服支持</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>你的API密钥：</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">{{api_key}}</code>
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=launch&utm_campaign={{campaign_id}}"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            开始我的第一次测试 →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          下一步：2分钟内完成你的第一次API调用。
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — 面向初创企业的法国AI平台 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">网站</a> |
          <a href="https://ai-empire-steel.vercel.app/docs?utm_source=email&utm_medium=footer" style="color: #667eea;">文档</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">取消订阅</a>
        </p>
      </div>

    </div>
  `,
  cta: '开始我的第一次测试 →',
  trackingParams: '?utm_source=email&utm_medium=launch&utm_campaign=product_launch',
};

// === 营销活动 2: 限时优惠 -50% ===
export const limitedOfferEmail: EmailTemplate = {
  id: 'email-offer',
  name: '限时优惠 -50%',
  subject: '⚡ NeuraPortfolio -50% — 优惠48小时后到期',
  preheader: '高级Next.js模板半价。50+组件，暗黑模式，响应式设计。',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">⚡ -50%</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">优惠48小时后到期！</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          {{first_name}}你好，
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          我们为你准备了一份<strong>专属优惠</strong>：<strong>NeuraPortfolio -50%</strong>，用于创建AI作品集的高级Next.js模板。
        </p>

        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ 限量50份 — 48小时后到期</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          你将获得：
        </p>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>✅ 50+ React组件</li>
          <li>✅ 暗黑模式 + 响应式</li>
          <li>✅ 流畅动画效果</li>
          <li>✅ 原生AI集成</li>
          <li>✅ 法语客服支持</li>
          <li>✅ 终身免费更新</li>
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
            抓住优惠 →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          48小时后价格恢复至€49。不要错过这次机会！
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — 面向初创企业的法国AI平台 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">网站</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">取消订阅</a>
        </p>
      </div>

    </div>
  `,
  cta: '抓住优惠 →',
  trackingParams: '?utm_source=email&utm_medium=offer&utm_campaign=limited_50',
};

// === 营销活动 3: 成功案例 ===
export const successStoriesEmail: EmailTemplate = {
  id: 'email-success',
  name: '客户评价',
  subject: '💬 这些法国初创企业如何借助AI取得成功',
  preheader: '3个客户案例证明AI人人都能用。',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💬 客户评价</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">他们的成功也可以是你的</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          {{first_name}}你好，
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          我们想向你展示法国初创企业通过AI-Empire取得的成就。
        </p>

        <!-- 评价 1 -->
        <div style="background: #f8f9fa; border-left: 4px solid #11998e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "我们通过切换到AI-Empire将AI成本降低了60%。集成只花了5分钟，法语支持更是锦上添花。"
          </p>
          <p style="margin: 0; font-weight: bold; color: #11998e;">— Marc，巴黎某初创企业CTO</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">成果：成本-60%，速度+40%</p>
        </div>

        <!-- 评价 2 -->
        <div style="background: #f8f9fa; border-left: 4px solid #38ef7d; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "我在2小时内将AI集成到了我的SaaS中。客户非常喜欢新功能。"
          </p>
          <p style="margin: 0; font-weight: bold; color: #38ef7d;">— Sophie，里昂某SaaS创始人</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">成果：转化率+25%</p>
        </div>

        <!-- 评价 3 -->
        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "法语控制面板非常直观。我的团队在1天内就采用了AI。"
          </p>
          <p style="margin: 0; font-weight: bold; color: #667eea;">— Lucas，波尔多某成长型企业PM</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">成果：生产力+40%</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=success&utm_campaign=testimonials"
             style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            加入成功行列 →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — 面向初创企业的法国AI平台 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">网站</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">取消订阅</a>
        </p>
      </div>

    </div>
  `,
  cta: '加入成功行列 →',
  trackingParams: '?utm_source=email&utm_medium=success&utm_campaign=testimonials',
};

// === 营销活动 4: 月度通讯 ===
export const monthlyNewsletterEmail: EmailTemplate = {
  id: 'email-newsletter',
  name: '月度通讯',
  subject: '📰 AI-Empire通讯 — 2025年1月',
  preheader: '来自法国AI平台的最新消息、技巧和优惠。',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">📰 AI-Empire通讯</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">2025年1月</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          {{first_name}}你好，
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          以下是AI-Empire的最新动态：
        </p>

        <!-- 新功能 1 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">🚀 新功能：SEO端点</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          一键生成SEO优化内容。可集成到你的博客或SaaS中。
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/seo?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          了解SEO端点 →
        </a>

        <!-- 新功能 2 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📊 技巧：优化你的API调用</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          使用智能缓存可节省高达30%的调用费用。方法如下：
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/cache?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          查看教程 →
        </a>

        <!-- 优惠 -->
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">🎁 订阅者专属优惠：NeuraBlog -30%</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #856404;">使用优惠码 NEWSLETTER30</p>
        </div>

        <!-- 统计 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📈 本月数据</h3>
        <div style="display: flex; justify-content: space-around; text-align: center; margin: 20px 0;">
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">+35%</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">用户</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">10K+</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">API调用</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">4.8/5</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">满意度</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            进入控制面板 →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — 面向初创企业的法国AI平台 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">网站</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">取消订阅</a>
        </p>
      </div>

    </div>
  `,
  cta: '进入控制面板 →',
  trackingParams: '?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan',
};

// === 营销活动 5: 推荐计划 ===
export const referralProgramEmail: EmailTemplate = {
  id: 'email-referral',
  name: '推荐计划',
  subject: '💰 每推荐一位朋友可赚€50！',
  preheader: '推荐计划：邀请朋友，赚取佣金。',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💰 推荐计划</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">每推荐一位朋友可赚€50</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          {{first_name}}你好，
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          喜欢AI-Empire？<strong>分享给朋友并赚取佣金！</strong>
        </p>

        <!-- 运作方式 -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">运作方式</h3>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>1.</strong> 分享你的专属推荐链接
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>2.</strong> 朋友通过你的链接注册
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>3.</strong> 购买付费计划
          </p>
          <p style="margin: 0; font-size: 16px; color: #333;">
            <strong>4.</strong> 你的账户获得<strong>€50</strong>！
          </p>
        </div>

        <!-- 专属链接 -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">你的专属链接：</p>
          <p style="margin: 0; font-size: 16px; color: #667eea; font-weight: bold; word-break: break-all;">
            https://ai-empire-steel.vercel.app/ref/{{referral_code}}?utm_source=referral&utm_medium=email
          </p>
        </div>

        <!-- 福利 -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">推荐者福利</h3>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>💰 每成功推荐一人可赚€50</li>
          <li>📊 实时追踪控制面板</li>
          <li>💳 通过Stripe支付（银行转账）</li>
          <li>🎁 下次续费享-20%折扣</li>
          <li>⭐ 推荐满5人获得"金牌推荐者"身份</li>
        </ul>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/referrals?utm_source=email&utm_medium=referral&utm_campaign=referral_program"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            分享我的链接 →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          推荐无上限。分享越多，赚得越多！
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — 面向初创企业的法国AI平台 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">网站</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">取消订阅</a>
        </p>
      </div>

    </div>
  `,
  cta: '分享我的链接 →',
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
