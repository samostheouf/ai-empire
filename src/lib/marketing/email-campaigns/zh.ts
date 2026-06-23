import type { EmailCampaignBundle } from './types';

export const emailCampaignBundle: EmailCampaignBundle = {
  language: 'zh',
  campaigns: [
    // 活动 1: 上线公告
    {
      id: 'email-launch',
      name: '上线公告',
      type: 'launch_announcement',
      variants: [
        { id: 'launch-a', subject: 'AI Empire 正式上线 — AI 驱动的 SaaS 开发套件', previewText: '模板、AI API、Stripe、认证——一站式平台。' },
        { id: 'launch-b', subject: '我们上线了：Next.js 14 模板 + AI API', previewText: '24 小时内即可部署你的 SaaS 所需的一切。' },
        { id: 'launch-c', subject: '更快地发布你的 SaaS —— AI Empire 已上线', previewText: '内置 AI 集成的专业模板，即刻部署。' },
      ],
      previewText: '模板、AI API、Stripe、认证——一站式平台。',
      cta: '探索 AI Empire',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement',
      htmlBody: `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;font-weight:700;">AI Empire 正式上线</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">构建 AI 驱动 SaaS 产品的完整开发套件</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">你好 {{first_name}}，</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      我们很高兴地宣布 <strong>AI Empire</strong> 正式上线——一个帮助开发者更快构建 AI 驱动 SaaS 产品的平台。
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">平台包含以下内容：</p>

    <div style="background:#f8f9fa;border-left:4px solid #667eea;padding:16px 20px;margin:24px 0;border-radius:0 8px 8px 0;">
      <p style="margin:4px 0;color:#333;">✅ 专业 Next.js 14 模板（€19 起）</p>
      <p style="margin:4px 0;color:#333;">✅ 统一 AI API——Groq + Gemini 一个端点搞定</p>
      <p style="margin:4px 0;color:#333;">✅ Stripe 支付集成已配置完毕</p>
      <p style="margin:4px 0;color:#333;">✅ 开箱即用的身份认证</p>
      <p style="margin:4px 0;color:#333;">✅ 管理后台仪表盘</p>
      <p style="margin:4px 0;color:#333;">✅ 免费 API 层——注册即送 100 积分</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      无论你正在构建电商店铺、博客还是个人作品集，AI Empire 都能为你提供所需的基础架构。
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        探索 AI Empire
      </a>
    </div>

    <h2 style="font-size:20px;color:#333;margin:32px 0 16px;">可用模板</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">完整的电商模板，包含 Stripe 支付、购物车和管理后台</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">SEO 优化博客模板，支持 MDX、暗色模式和 RSS 订阅</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">专业作品集模板，包含动画效果、暗色模式和联系表单</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">完整套餐 — €299</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">全部 6 个模板 + 优先支持 + 免费更新</p>
    </div>

    <p style="font-size:14px;color:#666;line-height:1.6;margin-top:32px;">
      有任何问题？直接回复此邮件——我们会阅读每一条回复。
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empire 团队
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — 更快构建 AI 驱动的 SaaS 产品<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">官网</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">文档</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">取消订阅</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // 活动 2: 产品更新
    {
      id: 'email-update',
      name: '产品更新',
      type: 'product_update',
      variants: [
        { id: 'update-a', subject: '最新动态——本月 AI Empire 更新速览', previewText: '新功能、改进以及即将到来的更新。' },
        { id: 'update-b', subject: 'AI Empire 更新日志——新模板与 API 功能', previewText: '我们一直在努力开发。以下是本次发布的内容。' },
        { id: 'update-c', subject: '你的每月 AI Empire 更新已送达', previewText: '新集成、性能优化和即将推出的功能。' },
      ],
      previewText: '新功能、改进以及即将到来的更新。',
      cta: '查看更新日志',
      ctaUrl: 'https://ai-empire-steel.vercel.app/changelog?utm_source=email&utm_medium=update&utm_campaign=product_update',
      htmlBody: `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire 最新动态</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">月度产品更新 — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">你好 {{first_name}}，</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      以下是本月发布的内容：
    </p>

    <div style="margin:24px 0;">
      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">新功能：AI 代码生成端点</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          专为代码生成任务优化的新 API 端点。支持 Groq Llama 3 和 Gemini Pro，所有计划（包括免费层）均可使用。
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">优化：NeuraStore 结账流程</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          重新设计了结账体验，新增 Apple Pay 和 Google Pay 支持。测试中转化率提升了 15%。
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">更新：API 文档</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          文档已全面重写，包含交互式示例、可复制的代码片段和全新的快速入门指南。
        </p>
      </div>

      <div style="padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">下月预告</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          NeuraBlog 的 AI SEO 优化工具即将上线。自动 Meta 描述生成、Open Graph 图片和结构化数据创建。
        </p>
      </div>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://ai-empire-steel.vercel.app/changelog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        查看完整更新日志
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      感谢你使用 AI Empire 进行开发。
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empire 团队
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — 更快构建 AI 驱动的 SaaS 产品<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">官网</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">文档</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">取消订阅</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // 活动 3: 月度通讯
    {
      id: 'email-newsletter',
      name: '月度通讯',
      type: 'newsletter',
      variants: [
        { id: 'newsletter-a', subject: 'AI Empire 月刊——技巧、教程与更新', previewText: '每月为你送上 AI 和 SaaS 领域的精选资讯。' },
        { id: 'newsletter-b', subject: '本月 AI 与 SaaS 动态——AI Empire 通讯', previewText: '社区精选、新功能和行业洞察。' },
        { id: 'newsletter-c', subject: 'AI Empire 第 {{issue_number}} 期——本月我们学到了什么', previewText: '构建 AI 驱动产品的实用建议。' },
      ],
      previewText: '每月为你送上 AI 和 SaaS 领域的精选资讯。',
      cta: '阅读更多',
      ctaUrl: 'https://ai-empire-steel.vercel.app/blog?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_newsletter',
      htmlBody: `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire 月刊</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">第 {{issue_number}} 期 — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">你好 {{first_name}}，</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      欢迎阅读本月通讯。以下是 AI Empire 社区和更广泛的 AI/SaaS 领域的最新动态。
    </p>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">教程</h2>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">如何在 Next.js 应用中添加 AI 聊天功能</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">将 AI Empire 聊天端点集成到 Next.js 应用的分步指南，包含代码示例和部署技巧。</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">SaaS 的 Stripe 集成最佳实践</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">从构建 NeuraStore 支付流程中总结的经验。订阅管理、Webhook 和客户门户配置。</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">将 Next.js 14 部署到 Vercel：完全指南</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">从零到生产环境。环境变量、域名、预览部署和性能优化。</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">社区精选</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>精选项目：</strong>一位用户使用 NeuraStore 作为基础模板，结合 AI Empire 的 API 进行文本提取，成功推出了一款文档处理 SaaS 产品。从零到付费客户仅用了 3 周时间。
      </p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>本月技巧：</strong>实时响应使用 Groq（低延迟），复杂推理任务使用 Gemini。AI Empire 允许你只需更改一个参数即可在模型之间切换。
      </p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">行业洞察</h2>

    <p style="font-size:15px;color:#333;line-height:1.6;">
      AI API 市场正在快速演变。我们看到了一个明显的趋势——开发者希望一个统一的集成点，而不是五个。AI Empire 正是为此而生，并且我们持续添加新的模型支持。
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/blog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        阅读完整博客
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      下月再见，<br>AI Empire 团队
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — 更快构建 AI 驱动的 SaaS 产品<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">官网</a> ·
      <a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">博客</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">取消订阅</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // 活动 4: 用户召回
    {
      id: 'email-reengagement',
      name: '用户召回',
      type: 'reengagement',
      variants: [
        { id: 'reeng-a', subject: '我们想念你——你的 AI Empire 账户还在等你', previewText: '回来即送 50 额外积分。' },
        { id: 'reeng-b', subject: '还在犹豫吗？你的免费积分即将过期', previewText: '100 积分正在等你，快来开始构建吧。' },
        { id: 'reeng-c', subject: '自你上次访问以来，AI Empire 又有了很多变化', previewText: '新功能、新模板，以及为你准备的额外积分。' },
      ],
      previewText: '回来即送 50 额外积分。',
      cta: '重新激活账户',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=reengagement&utm_campaign=reengagement',
      htmlBody: `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">我们想念你</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">你的 AI Empire 账户还在这里——我们为你准备了一些东西</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">你好 {{first_name}}，</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      距离你上次访问 AI Empire 已经有一段时间了。你的账户仍然处于活跃状态，我们还为你添加了 <strong>50 额外积分</strong>，帮助你重新开始。
    </p>

    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
      <p style="color:#ffffff;font-size:32px;font-weight:700;margin:0;">+50 积分</p>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">完全免费。无任何附加条件。</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">自你上次访问以来，我们新增了：</p>

    <ul style="font-size:15px;color:#333;line-height:1.8;padding-left:20px;">
      <li>全新 AI 代码生成端点</li>
      <li>优化后的 NeuraStore 结账流程</li>
      <li>全面重写的 API 文档</li>
      <li>JavaScript 和 Python SDK 改进</li>
    </ul>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/dashboard" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        重新激活我的账户
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      如果你不想再收到邮件，可以 <a href="{{unsubscribe_url}}" style="color:#999;">取消订阅</a>。
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — 更快构建 AI 驱动的 SaaS 产品<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">官网</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">文档</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">取消订阅</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // 活动 5: 升级优惠
    {
      id: 'email-upgrade',
      name: '升级优惠',
      type: 'upgrade_offer',
      variants: [
        { id: 'upgrade-a', subject: '解锁更多——立即升级你的 AI Empire 计划', previewText: '更多积分、更多模板、优先支持。' },
        { id: 'upgrade-b', subject: '你的 AI Empire 使用量在增长——是时候升级了吗？', previewText: '获取更多 API 积分和高级模板。' },
        { id: 'upgrade-c', subject: '限时特惠：AI Empire 模板 8 折', previewText: '活跃用户专属优惠，立即升级。' },
      ],
      previewText: '更多积分、更多模板、优先支持。',
      cta: '立即升级 — 8 折优惠',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing?utm_source=email&utm_medium=upgrade&utm_campaign=upgrade_offer',
      htmlBody: `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">升级你的 SaaS</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">活跃 AI Empire 用户专享模板 8 折优惠</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">你好 {{first_name}}，</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      你一直在积极使用 AI Empire——我们想要回馈你。以下是所有模板和完整套餐的专属 <strong>20% 折扣</strong>。
    </p>

    <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:24px 0;">
      <p style="text-align:center;font-size:14px;color:#666;margin:0 0 4px;">结账时使用优惠码：</p>
      <p style="text-align:center;font-size:28px;font-weight:700;color:#667eea;margin:0;letter-spacing:2px;">UPGRADE20</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:24px 0 12px;">模板包含的内容</h2>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29 → 使用优惠码后 €23.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">电商模板，包含 Stripe 支付、购物车、管理后台、AI 推荐</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19 → 使用优惠码后 €15.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">博客模板，包含 MDX、暗色模式、RSS、SEO 优化</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29 → 使用优惠码后 €23.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">作品集模板，包含动画效果、暗色模式、联系表单</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#eff6ff;border-radius:8px;border:2px solid #667eea;">
      <p style="margin:0;font-weight:600;color:#333;">完整套餐 — €299 → 使用优惠码后 €239.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">全部 6 个模板 + 优先支持 + 免费更新。最佳性价比。</p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/pricing?coupon=UPGRADE20" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        立即升级 — 8 折优惠
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      此优惠将在 72 小时后过期。优惠码仅限使用一次。
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — 更快构建 AI 驱动的 SaaS 产品<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">官网</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">文档</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">取消订阅</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },
  ],
};
