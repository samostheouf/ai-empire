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
// 제품 출시 캠페인
// ============================================================
export const productLaunchTemplate: CampaignTemplate = {
  id: 'tpl_product_launch',
  name: '제품 출시 — AI Empire',
  type: 'product-launch',
  duration: '14일',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€1,500',
  objective: '첫 달에 500건의 가입과 €3,000의 수익 창출',
  content: {
    headline: '🚀 신규: SaaS를 위한 AI 혁명이 왔습니다!',
    subheadline: 'Next.js 14 템플릿 + 강력한 AI API로 24시간 만에 SaaS 출시',
    body: `SaaS를 출시하고 싶지만 개발에 몇 주가 걸리나요?

AI Empire가 게임을 바꿉니다:
✅ 프로페셔널 Next.js 14 템플릿 — 모던한 디자인, 반응형, 다크 모드
✅ 통합 AI API — GPT-4, Groq, Gemini 즉시 사용 가능
✅ Stripe + Auth 포함 — 결제와 인증을 5분 만에
✅ 완전한 관리 대시보드 — 사용자, 분석, 청구서 관리

🔥 출시 오퍼: 전체 템플릿 72시간 한정 -30%!

AI Empire로 이미 SaaS를 출시한 초기 사용자에 합류하세요.
이 기회를 놓치지 마세요 — 오퍼는 [DATE]에 종료됩니다.`,
    cta: '🚀 지금 시작하기 — -30%',
    hashtags: [
      '#AIEmpire', '#SaaS', '#NextJS', '#AI', '#Launch',
      '#WebTemplates', '#IndieHacker', '#StartupFrance', '#TechFR', '#AI'
    ],
    emailSubject: '🚀 공식 발표: AI Empire가 런칭되었습니다! -30% 할인',
    emailBody: `안녕하세요 [First Name]},

그날이 왔습니다. AI Empire가 드디어 런칭되었습니다!

제공하는 내용:
🎨 6개의 프로페셔널 Next.js 14 템플릿 (€49-199)
🤖 통합 AI API (GPT-4, Groq, Gemini)
💳 Stripe + Auth 설정 완료
📊 완전한 관리 대시보드

🎁 독점 오퍼: 전체 템플릿 72시간 한정 -30%!

결제 시 코드 LAUNCH30을 사용하세요.

[CTA: 템플릿 살펴보기 →]

곧 만나요,
AI Empire 팀 🇫🇷`,
    socialPost: `🚀 AI Empire가 드디어 LIVE!

이 플랫폼이 제공하는 것:
✅ 프로 Next.js 14 템플릿
✅ 통합 AI API
✅ Stripe + Auth 포함
✅ 관리 대시보드

🎁 코드 LAUNCH30으로 72시간 한정 -30%

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI #Launch`
  },
  schedule: [
    { day: 'D-7', action: '소셜 미디어 티저', channel: 'Twitter/X, LinkedIn' },
    { day: 'D-3', action: '뉴스레터 구독자 대상 티저 이메일', channel: 'Email' },
    { day: 'D-1', action: 'Instagram Stories 카운트다운', channel: 'Instagram' },
    { day: 'D0', action: '공식 출시 — 포스트 + 이메일 + 광고', channel: '전체 채널' },
    { day: 'D+1', action: '얼리 어답터 후기', channel: 'Twitter/X, LinkedIn' },
    { day: 'D+3', action: '-30% 오퍼 리마인드', channel: 'Email, Twitter' },
    { day: 'D+5', action: '튜토리얼 "첫 SaaS 만들기"', channel: 'YouTube, Blog' },
    { day: 'D+7', action: '-30% 오퍼 종료', channel: 'Email, Social' },
    { day: 'D+10', action: '고객 케이스 스터디', channel: 'LinkedIn, Blog' },
    { day: 'D+14', action: '요약 + 후기', channel: 'Email, Twitter' }
  ],
  metrics: {
    targetReach: '타겟 오디언스 (캠페인에 따라 다름)',
    targetConversion: '전환율 1-2%',
    targetRevenue: '광고 예산에 비례'
  }
}

// ============================================================
// 시즌 프로모션 캠페인
// ============================================================
export const seasonalPromotionTemplate: CampaignTemplate = {
  id: 'tpl_seasonal',
  name: '시즌 프로모션 — 봄/여름',
  type: 'seasonal',
  duration: '21일',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
  budget: '€800',
  objective: '여름 기간 동안 매출 40% 증가',
  content: {
    headline: '☀️ AI Empire 여름 세일 — 최대 -40%!',
    subheadline: '여름은 SaaS를 출시하는 계절이지, 해변에서 놀 때가 아닙니다.',
    body: `여름이 다가오고 있으며, 프로젝트를 강화하기에 완벽한 타이밍!

🌞 봄/여름 특별 오퍼:
- NeuraStore (이커머스 템플릿): €39 → €29 (-25%)
- NeuraBlog (블로그 템플릿): €29 → €19 (-35%)
- 컴플리트 번들 (6개 템플릿): €599 → €359 (-40%)

⚡ 왜 여름인가?
→ 시장에서의 경쟁이 적음
→ 가을 시즌 전에 구축할 시간이 더 많음
→ 여름에 출시하는 스타트업은 9월에 제품을 가지고 도착

⏱️ [START_DATE]부터 [END_DATE]까지 유효

번들 -40% 코드 ETE2024를 사용하세요.`,
    cta: '☀️ 세일 혜택 받기 — -40%',
    hashtags: [
      '#AIEmpire', '#Sale', '#Summer2024', '#SaaS', '#Templates',
      '#Promo', '#NextJS', '#IndieHacker', '#StartupFrance', '#TechFR'
    ],
    emailSubject: '☀️ 여름 세일: 전체 AI Empire 템플릿 -40%!',
    emailBody: `안녕하세요 [First Name]},

여름이 오고 있습니다. 그리고 이것은 거절할 수 없는 오퍼입니다! 🌞

☀️ 특별 오퍼:
- NeuraStore: €39 → €29
- NeuraBlog: €29 → €19
- 6개 템플릿 번들: €599 → €359

⏰ [END_DATE]까지 유효

결제 시 코드 ETE2024를 사용하세요.

[CTA: 오퍼 보기 →]

좋은 여름 보내세요!
AI Empire 팀 🇫🇷`,
    socialPost: `☀️ AI EMPIRE 여름 세일 ☀️

컴플리트 번들 -40%:
✅ 6개 Next.js 14 템플릿
✅ 통합 AI API
✅ 우선 지원

코드: ETE2024
⏰ [DATE]까지 유효

👉 ai-empire-steel.vercel.app

#AIEmpire #Sale #Summer2024 #SaaS #Promo`
  },
  schedule: [
    { day: 'D-3', action: '티저 "올여름 무언가가 온다..."', channel: 'Twitter/X, Instagram' },
    { day: 'D0', action: '공식 세일 발표', channel: '전체 채널' },
    { day: 'D+3', action: '고객 후기 + 비교', channel: 'LinkedIn, Facebook' },
    { day: 'D+7', action: '중간 리마인드 + 수량 제한', channel: 'Email' },
    { day: 'D+10', action: '튜토리얼 "이번 여름 SaaS 출시하기"', channel: 'YouTube, Blog' },
    { day: 'D+14', action: '마지막 날 — 긴급함', channel: '전체 채널' },
    { day: 'D+18', action: '마지막 기회', channel: 'Email, Twitter' },
    { day: 'D+21', action: '세일 종료 — 요약', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '30,000명',
    targetConversion: '300건의 매출 (1%)',
    targetRevenue: '€10,700 (300 × €35 평균)'
  }
}

// ============================================================
// 추천 프로그램
// ============================================================
export const referralProgramTemplate: CampaignTemplate = {
  id: 'tpl_referral',
  name: '추천 프로그램 — 크레딧 적립',
  type: 'referral',
  duration: '영구적',
  channels: ['Email', 'Dashboard', 'Twitter/X'],
  budget: '€500 (크레딧 보상)',
  objective: '바이럴 성장: 1건의 추천 = 2명의 신규 사용자',
  content: {
    headline: '🎁 친구를 추천하고 500 AI 크레딧을 무료로 받으세요!',
    subheadline: '구전은 최고의 성장 채널입니다',
    body: `AI Empire가 마음에 드나요? 공유하고 보상을 받으세요!

🎯 작동 방식:
1. 고유한 추천 링크를 공유
2. 친구가 회원님의 링크로 가입
3. 둘 다 500 AI 크레딧을 무료로 받습니다!

💰 보상 등급:
- 1건의 추천 = 500 크레딧
- 3건의 추천 = 1,500 크레딧 + "앰배서더" 뱃지
- 5건의 추천 = 2,500 크레딧 + Pro 1개월 액세스
- 10건의 추천 = 5,000 크레딧 + Pro 3개월 액세스 + 사이트 기재

🔗 고유 링크: [REFERRAL_LINK]

Twitter, LinkedIn에서 공유하거나 연락처에 직접 전송하세요!`,
    cta: '🎁 추천 링크 공유',
    hashtags: [
      '#AIEmpire', '#Referral', '#Free', '#AI', '#SaaS',
      '#Ambassador', '#TechFR', '#StartupFrance'
    ],
    emailSubject: '🎁 무료 AI 크레딧 500개를 원하시나요? 친구를 추천하세요!',
    emailBody: `안녕하세요 [First Name]},

깜짝 선물이 있습니다! 🎁

AI Empire에서 친구를 추천하면 둘 다 500 AI 크레딧을 무료로 받습니다.

고유 링크: [REFERRAL_LINK]

🎯 등급:
- 1건의 추천 → 500 크레딧
- 3건의 추천 → 1,500 크레딧 + 뱃지
- 5건의 추천 → 2,500 크레딧 + Pro 1개월
- 10건의 추천 → 5,000 크레딧 + Pro 3개월

지금 링크를 공유하세요!

[CTA: 링크 공유 →]

모험에 참여해 주셔서 감사합니다! 💜
AI Empire 팀`,
    socialPost: `🎁 친구를 추천하고 500 크레딧을 받으세요! 🎁

AI Empire가 마음에 드나요? 공유하세요!

✅ 친구가 가입 → 500 크레딧 무료
✅ 회원님이 획득 → 500 크레딧 무료

🔗 추천 링크: [REFERRAL_LINK]

5건의 추천 = 1개월 무료 Pro 액세스 🚀

#AIEmpire #Referral #AI #SaaS #Free`
  },
  schedule: [
    { day: '영구적', action: '추천 링크 포함 환영 이메일', channel: 'Email' },
    { day: 'D+7', action: '추천 프로그램 리마인드', channel: 'Email' },
    { day: 'D+30', action: '이메일 "아직 누구도 추천하지 않았습니다..."', channel: 'Email' },
    { day: '영구적', action: '대시보드에 추천 링크 표시', channel: 'Dashboard' },
    { day: '매주', action: 'Twitter 상위 추천자 순위표', channel: 'Twitter/X' }
  ],
  metrics: {
    targetReach: '월간 1,000회 공유',
    targetConversion: '월간 200건의 신규 가입',
    targetRevenue: '자연 성장 +40%'
  }
}

// ============================================================
// 블랙프라이데이 / 사이버먼데이 캠페인
// ============================================================
export const blackFridayTemplate: CampaignTemplate = {
  id: 'tpl_black_friday',
  name: '블랙프라이데이 / 사이버먼데이 — AI Empire',
  type: 'black-friday',
  duration: '5일 (수요일~토요일 + 사이버먼데이)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€2,500',
    objective: '캠페인 도달율 및 전환율 극대화',
  content: {
    headline: '🖤 BLACK FRIDAY AI EMPIRE — 전품목 -50%!',
    subheadline: '올해 최대의 세일. 놓치지 마세요.',
    body: `행동할 시간입니다. 사상 처음으로:

🖤 BLACK FRIDAY — 전품목 -50%

📦 독점 오퍼:
- NeuraStore: €39 → €19.50
- NeuraBlog: €29 → €14.50
- NeuraPortfolio: €59 → €29.50
- 프리미엄 번들 (6개 템플릿): €599 → €299.50
- Pro 플랜 (1년): €1,188 → €594

⚡ 농담이 아닙니다. 이것이 올해의 세일입니다.

⏱️ [WEDNESDAY]부터 [MONDAY]까지만.

🔒 수량 제한: 선착순 50명에게 무료 보너스 템플릿 증정.

코드: BLACKFRIDAY50`,
    cta: '🖤 -50% 지금 받기',
    hashtags: [
      '#AIEmpire', '#BlackFriday', '#CyberMonday', '#Sale',
      '#Promo', '#SaaS', '#Templates', '#NextJS', '#IADeals', '#TechFR'
    ],
    emailSubject: '🖤 BLACK FRIDAY: 전체 AI Empire -50% — 단 5일!',
    emailBody: `안녕하세요 [First Name]},

공식 발표. AI Empire에 블랙프라이데이가 왔습니다. 🖤

전품목 -50%:
📦 NeuraStore: €39 → €19.50
📦 NeuraBlog: €29 → €14.50
📦 프리미엄 번들: €599 → €299.50
📦 Pro 플랜 1년: €1,188 → €594

⏰ [WEDNESDAY]부터 [MONDAY]까지만 유효.

코드: BLACKFRIDAY50

선착순 50명에게 무료 보너스 템플릿 증정! 🎁

[CTA: -50% 받기 →]

놓치지 마세요.
AI Empire 팀 🖤`,
    socialPost: `🖤 BLACK FRIDAY AI EMPIRE 🖤

5일간 전품목 -50%!

📦 템플릿 €14.50~€299.50
📦 Pro 플랜 -50%
📦 선착순 50명 = 무료 보너스 템플릿

코드: BLACKFRIDAY50
⏰ [WEDNESDAY]부터 [MONDAY]

👉 ai-empire-steel.vercel.app

#BlackFriday #AIEmpire #SaaS #Promo`
  },
  schedule: [
    { day: '수요일 D-1', action: '티저 "내일, 어둠의 무언가가 온다..."', channel: 'Twitter, Instagram' },
    { day: '목요일 D0 (BF)', action: '블랙프라이데이 공식 시작', channel: '전체 채널 + 대량 이메일' },
    { day: '목요일 D0', action: 'Google Ads — 긴급 캠페인', channel: 'Google Ads' },
    { day: '금요일 D+1', action: '리마인드 + 구매자 후기', channel: 'Email, Twitter' },
    { day: '토요일 D+2', action: '소셜 프루프 "이미 X건 판매!"', channel: 'Instagram, LinkedIn' },
    { day: '일요일 D+3', action: '일반 BF 마지막 날', channel: '대량 이메일' },
    { day: '월요일 CM', action: '사이버먼데이 — 특별 연장', channel: '전체 채널' },
    { day: '월요일 CM', action: '24시간 플래시 세일', channel: 'Email, Twitter' },
    { day: '화요일 D+5', action: '블랙프라이데이 종료 — 감사', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '타겟 오디언스 (캠페인에 따라 다름)',
    targetConversion: '전환율 0.5-1%',
    targetRevenue: '광고 예산에 비례'
  }
}

// ============================================================
// 새해 캠페인
// ============================================================
export const newYearTemplate: CampaignTemplate = {
  id: 'tpl_new_year',
  name: '새해 — SaaS 목표 2025',
  type: 'new-year',
  duration: '14일 (12월 26일 ~ 1월 9일)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Blog'],
  budget: '€800',
  objective: '연말 잠재고객 전환 및 1월 강력한 시작',
  content: {
    headline: '🎆 2025: 올해 SaaS를 출시하세요!',
    subheadline: '새해, 새로운 SaaS. AI Empire로 강력하게 시작하세요.',
    body: `2025는 회원님의 해입니다. 🎆

지난해 아이디어를 종이에 적었습니다. 이제 행동으로 옮기세요.

🚀 새해 오퍼:
- 코드 NEWYEAR2025로 전체 템플릿 -25%
- 시작을 위한 500 무료 AI 크레딧
- 2025년 신규 기능 우선 액세스

🎯 2025년 목표:
✅ "SaaS를 출시하겠습니다" → AI Empire로 24시간 만에 달성
✅ "온라인으로 수익을 올리겠습니다" → 이커머스 템플릿 + Stripe 포함
✅ "AI를 배우겠습니다" → 통합 AI API + 튜토리얼
✅ "디지털화하겠습니다" → 완전한 관리 대시보드

⏱️ 12월 26일부터 1월 9일까지만 유효한 오퍼.

2025년을 회원님의 성공의 해로 만드세요.`,
    cta: '🎆 AI Empire로 2025 시작하기',
    hashtags: [
      '#AIEmpire', '#NewYear', '#2025', '#Resolutions', '#SaaS',
      '#Launch', '#IndieHacker', '#StartupFrance', '#TechFR', '#AI'
    ],
    emailSubject: '🎆 새해, 새로운 SaaS: -25% + 500 무료 크레딧!',
    emailBody: `안녕하세요 [First Name]},

새해 복 많이 받으세요! 🎆

2025년은 회원님의 SaaS를 출시하는 해입니다. 그리고 우리는 여기 있습니다.

🎁 새해 오퍼:
- 전체 템플릿 -25%
- 500 무료 AI 크레딧
- 2025년 기능 우선 액세스

코드: NEWYEAR2025

⏰ 12월 26일부터 1월 9일까지 유효.

이번 해를 좋은 해로 만드세요.

[CTA: 오퍼 살펴보기 →]

새해 복 많이 받으세요, 행운을 빕니다!
AI Empire 팀 🇫🇷`,
    socialPost: `🎆 2025: 회원님의 SAAS 해! 🎆

새해, 새로운 시작.

🎁 특별 오퍼:
✅ 템플릿 -25%
✅ 500 무료 AI 크레딧
✅ 2025년 우선 액세스

코드: NEWYEAR2025
⏰ 12/26 ~ 01/09

👉 ai-empire-steel.vercel.app

#AIEmpire #NewYear #2025 #SaaS #Resolutions`
  },
  schedule: [
    { day: '12월 26일', action: '이메일 "새해 복 — 회원님의 선물"', channel: 'Email' },
    { day: '12월 27일', action: '포스트 "2025 목표: SaaS 출시하기"', channel: 'LinkedIn, Twitter' },
    { day: '12월 30일', action: '오퍼 리마인드 + 후기', channel: 'Email, Twitter' },
    { day: '1월 1일', action: '메시지 "새해 복 — 우리가 있습니다"', channel: 'Email, Social' },
    { day: '1월 2일', action: '튜토리얼 "1월에 SaaS 출시하는 5단계"', channel: 'Blog, YouTube' },
    { day: '1월 5일', action: '소셜 프루프 + 긴급함', channel: 'Twitter, Instagram' },
    { day: '1월 7일', action: '마지막 기회', channel: 'Email' },
    { day: '1월 9일', action: '오퍼 종료 — 요약 + 2025 프리뷰', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '40,000명',
    targetConversion: '400건의 가입 (1%)',
    targetRevenue: '€5,000 (200 × €25 평균)'
  }
}

// ============================================================
// 유틸리티 함수
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
  return `€${total.toLocaleString('ko-KR')}`
}
