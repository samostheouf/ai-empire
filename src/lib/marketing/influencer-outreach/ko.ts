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
    subject: '🤝 비디오 스폰서십 — AI-Empire (프랑스 AI API)',
    body: `{{first_name}}님 안녕하세요

YouTube에서 나누시는 콘텐츠를 팬으로서 꾸준히 보고 있습니다. 선생님의 AI 튜토리얼이 저에게 영감을 주어 AI-Empire를 만들게 되었습니다.

선생님의 채널에서 비디오 스폰서십을 제안드립니다.

**컨셉:** "무료 AI API를 사용해 보았습니다 — 제가 만든 것들"

**포맷:**
- 8-12분 비디오
- AI-Empire 라이브 데모
- 실시간으로 미니 프로젝트 만들기
- 제휴 링크 언급

**보상:**
- 오디언스 규모에 따라 €200-500
- 선생님의 링크를 통한 매출의 20% 커미션
- 무료 템플릿 (€49 상당)

**타겟 오디언스:** 프랑스 개발자, 18-35세, AI에 관심 있는 분

관심이 있으신가요? 선생님의 스타일에 맞게 포맷을 조정할 수 있습니다.

이 이메일에 답장하거나 Twitter @[handle]에서 DM 주세요.

감사합니다,
[이름]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '이메일 답장',
  },
  {
    id: 'inf-email-02',
    name: 'LinkedIn Tech Leader',
    type: 'email',
    target: 'LinkedIn (1K-10K followers)',
    subject: '💼 콘텐츠 파트너십 — AI-Empire x 개인 브랜드',
    body: `{{first_name}}님 안녕하세요

LinkedIn에서 개인 브랜드를 강화하기 위한 콘텐츠 파트너십을 제안드립니다.

**제안:**
1. **LinkedIn 기사:** "€0으로 SaaS에 AI를 통합하는 방법"
2. **NeuraBlog 템플릿:** 커뮤니티에 무료 제공 (€49 상당)
3. **수익 분배:** 선생님의 링크를 통한 매출의 25%
4. **가시성:** 뉴스레터(5,000명 이상 구독자)에서 소개

**매력적인 이유:**
- 게시물 1개로被动 수익 + 가시성 확보
- 커뮤니티에 가치 제공
- AI 전문가로 포지셔닝

게시물 1개로被动 수익 + 가시성 확보.

관심이 있으신가요? 10분 통화 어떠신가요?

감사합니다,
[이름]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '10분 통화 예약',
  },
  {
    id: 'inf-email-03',
    name: 'Twitter Tech Account',
    type: 'email',
    target: 'Twitter/X (5K-50K followers)',
    subject: '🐦 Twitter 콜라보 — AI-Empire x 테크 계정',
    body: `{{first_name}}님 안녕하세요

Twitter에서 고품질 테크 콘텐츠를 나누시는 것을 보았습니다. 협업하고 싶습니다.

**제안:**
1. **기브어웨이:** 커뮤니티에 5개 프리미엄 템플릿
2. **공동 작성 스레드:** "2025년 개발자를 위한 AI 현황"
3. **커미션:** 선생님의 링크를 통한 매출의 30%
4. **피드백:** 제품 로드맵에 영향

**포맷:** 2주간 1 스레드 + 3 트윗
**예산:** €100-300 + 무료 템플릿

관심이 있으신가요?

감사합니다,
[이름]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '이메일 답장',
  },
  {
    id: 'inf-email-04',
    name: '웹 에이전시',
    type: 'email',
    target: '웹 에이전시 (5-20명)',
    subject: '🏢 에이전시 파트너십 — 고객이 원하는 AI를 제공합니다',
    body: `{{first_name}}님 안녕하세요

{{agency_name}}이(가) AI 기능을 요구하는 전자상거래/SaaS 고객과 거래하고 있는 것을 보았습니다.

**문제:** AI 통합은 비용이 많이 들고 시간이 오래 걸립니다.

**해결책:** AI-Empire가 올인원 AI API 접근을 제공합니다.
- 5분 만에 통합
- 사용 기반 가격 (최소 구독 없음)
- 한국어 기술 지원

**에이전시를 위해:**
- 멀티 클라이언트 대시보드
- 모든 클라이언트에 15% 커미션
- 프리미엄 템플릿 포함 (€49-199 상당)
- 팀 교육 무료

討論しませんか？ 이번 주 15분 어떠신가요?

감사합니다,
[이름]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '통화 예약',
  },
  {
    id: 'inf-email-05',
    name: 'SaaS B2B',
    type: 'email',
    target: 'SaaS B2B (보완 도구)',
    subject: '🔗 AI-Empire x {{company}} 파트너십 — AI 오퍼 완성',
    body: `{{first_name}}님 안녕하세요

AI-Empire의 창업자 [이름]입니다. AI-Empire는 스타트업을 위한 프랑스 AI API 플랫폼입니다.

{{company}}과 AI-Empire가 같은 타겟 오디언스를 공유하고 있어서 연락드립니다. 큰 예산 없이 AI를 통합하고자 하는 프랑스 스타트업입니다.

**파트너십 제안:**

1. **네이티브 통합:** 플랫폼에 AI-Empire 통합 (위젯/API)
2. **커미션:** 추천 클라이언트 매출의 20% 반복 수익
3. **공동 마케팅:** 블로그 기사 공동 작성 + 웨비나
4. **독점:** 사용자를 위한 특별 오퍼 (-25%)

**작동하는 이유:**
- 고객이 AI를 필요로 하며, 우리는 API를 제공
- 반복 수익원 확보
- 유통 채널 확대

discussion이 있으신가요? 이번 주 15분 어떠신가요?

감사합니다,
[이름]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '통화 예약',
  },
];

export const dmTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-dm-01',
    name: 'Twitter DM — Hello',
    type: 'dm',
    target: 'Twitter DM',
    subject: '',
    body: `{{first_name}}님 안녕하세요! 👋

AI에 대한 콘텐츠가 정말 좋아요. 스타트업을 위한 프랑스 AI API인 AI-Empire를 만들었습니다.

빠른 제안:
- 커뮤니티에 무료 템플릿
- 매출의 30% 커미션
- 공동 작성 스레드

관심 있으신가요? DM으로 이야기하시겠어요?`,
    cta: 'DM 답장',
  },
  {
    id: 'inf-dm-02',
    name: 'LinkedIn DM — Partnership',
    type: 'dm',
    target: 'LinkedIn DM',
    subject: '',
    body: `{{first_name}}님 안녕하세요

고품질 테크 콘텐츠를 나누시는 것을 보았습니다. 협업하고 싶습니다.

AI-Empire는 스타트업을 위한 프랑스 AI 플랫폼입니다. 콘텐츠 공동 제작 파트너를 찾고 있습니다.

제안:
- LinkedIn 공동 기사
- 커뮤니티에 무료 템플릿
- 25% 수익 분배

이번 주 10분 통화 어떠신가요?`,
    cta: '통화 예약',
  },
  {
    id: 'inf-dm-03',
    name: 'Discord DM — Community',
    type: 'dm',
    target: 'Discord DM',
    subject: '',
    body: `{{first_name}}님 안녕하세요! 👋

프랑스 개발자 서버에서 활발히 활동하시는 것을 보았습니다. 파트너십을 제안드리고 싶습니다.

AI-Empire = 프랑스 스타트업을 위한 무료 AI API

제안:
- 프리미엄 템플릿 무료
- 매출의 30% 커미션
- 신규 기능 베타 접근

관심 있으신가요?`,
    cta: 'DM 답장',
  },
  {
    id: 'inf-dm-04',
    name: 'Instagram DM — Tech Creator',
    type: 'dm',
    target: 'Instagram DM',
    subject: '',
    body: `{{first_name}}님 안녕하세요! 🔥

Instagram에서 테크 콘텐츠가 정말 좋아요. 제안이 있습니다.

AI-Empire는 프랑스 AI API입니다. 크리에이터를 찾고 있습니다:
- 데모 릴 (무료 템플릿 포함)
- 매출의 25% 커미션
- 템플릿 공동 브랜딩

어떠신가요? DM으로 이야기하시겠어요!`,
    cta: 'DM 답장',
  },
  {
    id: 'inf-dm-05',
    name: 'YouTube DM — Collab',
    type: 'dm',
    target: 'YouTube DM',
    subject: '',
    body: `{{first_name}}님 안녕하세요! 👋

YouTube 채널이 정말 좋아요. AI 튜토리얼이 훌륭합니다.

콜라보 제안:
- 비디오 스폰서십 (€200-500)
- 매출의 20% 커미션
- 커뮤니티에 무료 템플릿

관심 있으신가요? 이번 주 전화하시겠어요?`,
    cta: '통화 예약',
  },
];

export const affiliateProgram: AffiliateProgram = {
  name: 'AI-Empire Affiliate Program',
  commission: 30,
  cookieDuration: 90,
  benefits: [
    '모든 반복 매출에 30% 커미션',
    '90일 쿠키 기간',
    '실시간 추적 대시보드',
    'Stripe를 통한 월별 지급',
    '무료 프리미엄 템플릿 (€199 상당)',
    '전담 제휴 지원',
    '신규 기능 베타 접근',
    '마케팅 자료 제공',
  ],
  requirements: [
    '1,000명 이상의 팔로워 (YouTube, Twitter, LinkedIn, Instagram, 블로그)',
    '테크 / 스타트업 / AI 콘텐츠',
    '참여율 > 2%',
    '공격적이거나 정치적인 콘텐츠 없음',
    '브랜드 가이드라인 준수',
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
