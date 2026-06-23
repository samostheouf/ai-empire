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
    subject: '🤝 视频赞助 — AI-Empire（法国AI API）',
    body: `你好 {{first_name}}，

我是你在YouTube上的粉丝。你的AI教程激励我创建了AI-Empire。

我想为你的频道上的视频提出赞助合作。

**概念：** "我试用了一个免费AI API — 这是我构建的"

**格式：**
- 8-12分钟视频
- AI-Empire现场演示
- 实时构建迷你项目
- 提及你的联盟链接

**报酬：**
- 根据你的受众€200-500
- 通过你的链接每笔销售20%佣金
- 免费模板（价值€49）

**目标受众：** 法国开发者，18-35岁，对AI感兴趣

有兴趣吗？我们可以根据你的风格调整格式。

回复此邮件或在Twitter @[handle]上私信我。

此致敬礼，
[你的名字]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '回复邮件',
  },
  {
    id: 'inf-email-02',
    name: 'LinkedIn Tech Leader',
    type: 'email',
    target: 'LinkedIn (1K-10K followers)',
    subject: '💼 内容合作 — AI-Empire x 你的个人品牌',
    body: `你好 {{first_name}}，

我提议内容合作以增强你在LinkedIn上的个人品牌。

**提案：**
1. **LinkedIn文章：** "如何用€0在我的SaaS中集成AI"
2. **NeuraBlog模板：** 免费提供给你的社区（价值€49）
3. **收入分成：** 通过你的链接每笔销售25%
4. **可见度：** 在我们不断增长的新闻通讯中提到你

**为什么有趣：**
- 你写1篇帖子，获得被动收入 + 可见度
- 为社区提供价值
- 以AI专家身份定位

你写1篇帖子，获得被动收入 + 可见度。

有兴趣吗？我们来个10分钟通话？

此致敬礼，
[你的名字]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '预约10分钟通话',
  },
  {
    id: 'inf-email-03',
    name: 'Twitter Tech Account',
    type: 'email',
    target: 'Twitter/X (5K-50K followers)',
    subject: '🐦 Twitter合作 — AI-Empire x 你的科技账号',
    body: `你好 {{first_name}}，

我看到你在Twitter上分享高质量的科技内容。希望我们能合作。

**提案：**
1. **赠品：** 5个高级模板给你的社区
2. **共同撰写的主题：** "2025年AI开发现状"
3. **佣金：** 通过你的链接销售30%
4. **反馈：** 你影响我们的产品路线图

**格式：** 1个主题 + 3条推文，为期2周。
**预算：** €100-300 + 免费模板。

有兴趣吗？

此致敬礼，
[你的名字]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '回复邮件',
  },
  {
    id: 'inf-email-04',
    name: '网络代理',
    type: 'email',
    target: '网络代理（5-20人）',
    subject: '🏢 代理合作 — 你的客户想要AI，我们可以提供',
    body: `你好 {{first_name}}，

我看到{{agency_name}}正在与越来越多要求AI功能的电商/SaaS客户合作。

**问题：** 集成AI既昂贵又耗时。

**解决方案：** AI-Empire为你提供即用型AI API。
- 5分钟集成
- 按使用付费（无最低订阅）
- 中文技术支持

**为你的代理：**
- 多客户仪表板
- 每位客户15%佣金
- 包含高级模板（价值€49-199）
- 团队免费培训

想讨论吗？这周15分钟？

此致敬礼，
[你的名字]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '预约通话',
  },
  {
    id: 'inf-email-05',
    name: 'SaaS B2B',
    type: 'email',
    target: 'SaaS B2B（互补工具）',
    subject: '🔗 AI-Empire x {{company}}合作 — 完善你的AI产品',
    body: `你好 {{first_name}}，

我是[你的名字]，AI-Empire的创始人，这是一个面向创业公司的法国AI API平台。

我联系你是因为{{company}}和AI-Empire共享相同的目标受众：希望在没有大预算的情况下集成AI的法国创业公司。

**合作提案：**

1. **原生集成：** 将AI-Empire集成到你的平台（小部件/API）
2. **佣金：** 每位推荐客户20%的经常性收入
3. **联合营销：** 联合博客文章 + 网络研讨会
4. **独家：** 为你的用户提供特别优惠（-25%）

**为什么有效：**
- 你的客户需要AI，我们提供API
- 你获得经常性收入来源
- 我们获得分销渠道

准备讨论吗？这周15分钟？

此致敬礼，
[你的名字]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '预约通话',
  },
];

export const dmTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-dm-01',
    name: 'Twitter DM — Hello',
    type: 'dm',
    target: 'Twitter DM',
    subject: '',
    body: `你好 {{first_name}}！👋

我喜欢你的AI内容。我创建了AI-Empire，一个面向创业公司的法国AI API。

快速提案：
- 免费模板给你的社区
- 销售30%佣金
- 共同撰写的主题

有兴趣吗？私信聊聊？`,
    cta: '回复私信',
  },
  {
    id: 'inf-dm-02',
    name: 'LinkedIn DM — Partnership',
    type: 'dm',
    target: 'LinkedIn DM',
    subject: '',
    body: `你好 {{first_name}}，

我看到你分享高质量的科技内容。希望我们能合作。

AI-Empire是一个面向创业公司的法国AI平台。我们在寻找合作伙伴共同创作内容。

提案：
- 联合撰写的LinkedIn文章
- 免费模板给你的社区
- 25%收入分成

这周10分钟通话？`,
    cta: '预约通话',
  },
  {
    id: 'inf-dm-03',
    name: 'Discord DM — Community',
    type: 'dm',
    target: 'Discord DM',
    subject: '',
    body: `你好 {{first_name}}！👋

我看到你在法国开发者服务器中很活跃。我想提出合作。

AI-Empire = 面向法国创业公司的免费AI API。

给你的优惠：
- 免费高级模板
- 销售30%佣金
- 新功能Beta访问

有兴趣吗？`,
    cta: '回复私信',
  },
  {
    id: 'inf-dm-04',
    name: 'Instagram DM — Tech Creator',
    type: 'dm',
    target: 'Instagram DM',
    subject: '',
    body: `你好 {{first_name}}！🔥

我喜欢你在Instagram上的科技内容。我有个提议给你。

AI-Empire是一个法国AI API。我们在寻找创作者：
- 演示Reels（包含免费模板）
- 销售25%佣金
- 模板联合品牌

有兴趣吗？私信聊聊！`,
    cta: '回复私信',
  },
  {
    id: 'inf-dm-05',
    name: 'YouTube DM — Collab',
    type: 'dm',
    target: 'YouTube DM',
    subject: '',
    body: `你好 {{first_name}}！👋

我喜欢你的YouTube频道。你的AI教程很棒。

合作提议：
- 视频赞助（€200-500）
- 销售20%佣金
- 免费模板给你的社区

有兴趣吗？这周通话？`,
    cta: '预约通话',
  },
];

export const affiliateProgram: AffiliateProgram = {
  name: 'AI-Empire Affiliate Program',
  commission: 30,
  cookieDuration: 90,
  benefits: [
    '每笔经常性销售30%佣金',
    '90天Cookie期限',
    '实时跟踪仪表板',
    '通过Stripe月度付款',
    '免费高级模板（价值€199）',
    '专属联盟支持',
    '新功能Beta访问',
    '提供营销材料',
  ],
  requirements: [
    '1K+粉丝的渠道（YouTube、Twitter、LinkedIn、Instagram、博客）',
    '科技/创业/AI内容',
    '互动率 > 2%',
    '无攻击性或政治内容',
    '遵守品牌指南',
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
