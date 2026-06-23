import type { PressKitBundle } from './types';

export const pressKitBundle: PressKitBundle = {
  language: 'ko',
  productDescriptionShort:
    'AI Empire는 프로페셔널 Next.js 14 템플릿과 통합 AI API(Groq 및 Gemini), Stripe 결제, 인증을 결합한 개발자 플랫폼으로, 개발자들이 AI 기반 SaaS 제품을 더 빠르게 구축하고 배포할 수 있도록 지원합니다.',
  productDescriptionLong:
    'AI Empire는 AI 기반 SaaS 제품을 구축하기 위한 완전한 툴킷을 제공합니다. 이 플랫폼은 NeuraStore(이커머스), NeuraBlog(콘텐츠 퍼블리싱), NeuraPortfolio(개발자 포트폴리오) 등 프로덕션 준비가 완료된 Next.js 14 템플릿을 제공하며, 각 템플릿에는 현대적인 반응형 디자인, 다크 모드, SEO 최적화가 기본으로 포함되어 있습니다.\n\n모든 템플릿은 Groq 및 Gemini 모델에 단일 엔드포인트로 접근할 수 있는 AI Empire의 통합 API와 통합되어 있습니다. 이 플랫폼에는 Stripe 결제 통합, 인증, 관리자 대시보드도 포함되어 있어 일반적인 SaaS 개발 일정을 수개월에서 수일로 단축합니다.\n\nAI Empire는 인프라를 처음부터 구축하지 않고 AI 기반 제품을 출시하고자 하는 개발자, 인디 해커, 스타트업 창업자, 중소기업을 대상으로 합니다. 이 플랫폼은 프리미엄 모델로 운영되며, AI API는 가입 시 100 크레딧의 무료 티어를 제공하고, 템플릿은 개별 구매(€19–€29) 또는 완전한 번들(€299)로 이용 가능합니다.',
  keyFeatures: [
    '통합 AI API — 단일 엔드포인트로 Groq 및 Gemini 모델에 접근',
    '프로페셔널 Next.js 14 템플릿 — NeuraStore, NeuraBlog, NeuraPortfolio 등',
    'Stripe 결제 통합 — 기본으로 설정된 결제 시스템',
    '기본 제공 인증 — 타사 설정 없이 사용자 관리',
    '관리자 대시보드 — 사용자, 분석, 콘텐츠 관리',
    '무료 티어 — 신용카드 불필요, 가입 시 100 API 크레딧 제공',
    '반응형 디자인 — 다크 모드를 지원하는 모바일 우선 템플릿',
    'SEO 최적화 — 메타 태그, 구조화된 데이터, 성능 최적화',
    'Vercel 준비 완료 — 모든 템플릿 원클릭 배포',
    'JavaScript 및 Python SDK — 개발자 친화적 통합',
  ],
  pricingTable: [
    {
      name: '무료 티어',
      price: '€0',
      description: 'AI API를 무료로 시작하세요',
      features: [
        '100 AI API 크레딧',
        'Groq 및 Gemini 접근',
        'REST API + SDK',
        '커뮤니티 지원',
        '신용카드 불필요',
      ],
    },
    {
      name: 'NeuraBlog',
      price: '€19',
      description: 'Next.js 14용 프로페셔널 블로그 템플릿',
      features: [
        'MDX 지원',
        '다크 모드',
        'RSS 피드',
        'SEO 최적화',
        '뉴스레터 통합',
        '일회성 구매',
      ],
    },
    {
      name: 'NeuraStore',
      price: '€29',
      description: 'Next.js 14용 완전한 이커머스 템플릿',
      features: [
        'Stripe 결제',
        '장바구니 관리',
        '관리자 대시보드',
        'AI 상품 추천',
        '반응형 디자인',
        '일회성 구매',
      ],
    },
    {
      name: 'NeuraPortfolio',
      price: '€29',
      description: 'Next.js 14용 개발자 포트폴리오 템플릿',
      features: [
        'Framer Motion 애니메이션',
        '다크 모드',
        '문의 양식',
        '반응형 디자인',
        'SEO 최적화',
        '일회성 구매',
      ],
    },
    {
      name: '전체 번들',
      price: '€299',
      description: '모든 템플릿과 우선 지원',
      features: [
        '전체 6개 템플릿',
        '우선 지원',
        '무료 업데이트',
        '새 템플릿 얼리 액세스',
        '상업용 라이선스',
        '개별 구매 대비 €400 이상 절약',
      ],
    },
  ],
  founderQuote: {
    text: 'AI Empire를 만든 이유는 모든 개발자가 인프라를 구축하는 데 수개월을 소비하지 않고도 AI 기반 제품을 만들 수 있어야 한다고 믿기 때문입니다. 우리의 템플릿과 API를 통해 중요한 것, 즉 제품과 사용자에 집중할 수 있습니다.',
    attribution: 'AI Empire 팀',
    title: 'AI Empire 창업자',
  },
  logoUsage: {
    primaryUsage: 'AI Empire 로고는 충분한 대비를 갖춘 흰색 또는 어두운 배경에서 사용하십시오.',
    clearSpace: '로고의 "A" 높이와 동일한 최소 여백을 모든 면에서 유지하십시오.',
    minimumSize: '로고는 디지털에서 120px 미만, 인쇄에서 30mm 미만으로 재현해서는 안 됩니다.',
    donts: [
      '로고를 늘리거나 회전하거나 왜곡하지 마십시오',
      '로고 색상을 변경하지 마십시오',
      '컨테이너 없이 복잡한 배경에 로고를 배치하지 마십시오',
      '그림자, 글로우, 그라데이션 등의 효과를 로고에 추가하지 마십시오',
      '로고 요소를 재배치하거나 수정하지 마십시오',
    ],
  },
  contactInfo: {
    press: 'press@ai-empire.dev',
    partnerships: 'partners@ai-empire.dev',
    general: 'hello@ai-empire.dev',
    website: 'https://ai-empire-steel.vercel.app',
  },
  boilerplate:
    'AI Empire는 통합 AI API(Groq 및 Gemini), Stripe 결제, 인증이 포함된 프로페셔널 Next.js 14 템플릿을 제공하는 개발자 플랫폼입니다. 개발자들이 AI 기반 SaaS 제품을 더 빠르게 구축할 수 있도록 설립되었으며, 전 세계 개발자, 인디 해커, 스타트업 창업자에게 서비스를 제공합니다. 이 플랫폼은 무료 API 티어와 €19부터 시작하는 템플릿을 제공합니다. 자세한 내용은 ai-empire-steel.vercel.app을 방문하십시오.',
};
