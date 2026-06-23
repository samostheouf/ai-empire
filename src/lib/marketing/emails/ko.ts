import type { EmailSequence } from '../email-sequences'

export const onboardingSequence: EmailSequence = {
  id: 'seq_onboarding',
  name: '온보딩 시퀀스 — 5일',
  type: 'onboarding',
  duration: '5일',
  trigger: '신규 사용자 등록',
  goal: '사용자 활성화: 첫 API 호출 + 첫 템플릿 구매',
  emails: [
    {
      day: 0,
      subject: '🚀 AI Empire에 오신 것을 환영합니다 — AI API가 준비되었습니다!',
      preview: '100 크레딧이 무료로 제공됩니다. 지금 바로 시작하세요.',
      body: `[이름]님

AI Empire에 오신 것을 환영합니다! 🎉

다음 기능을 이용하실 수 있습니다:
✅ AI 크레딧 100개 (무료)
✅ GPT-4, Groq, Gemini API
✅ Next.js 14 프로페셔널 템플릿
✅ 한국어 고객 지원

API 키: [API_KEY]
대시보드: https://ai-empire-steel.vercel.app/dashboard

🎯 다음 단계: 2분 안에 첫 API 호출을 완료하세요.

1. 대시보드에 접속
2. API 키 복사
3. 다음 명령어 실행:
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "안녕하세요, 잘 지내세요?"}'

완료! 이제 AI API를 사용하실 수 있습니다.

AI Empire 고객 지원팀`,
      cta: '🚀 첫 테스트 시작하기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 1,
      subject: '💡 AI Empire을 최대한 활용하는 3가지 팁',
      preview: '더 나은 결과를 위한 조언입니다.',
      body: `[이름]님

어제 계정을 만드셨군요. 오늘은 더 나은 결과를 위한 3가지 팁을 소개합니다:

🎯 팁 1: 템플릿 탐색하기
템플릿은 바로 사용할 수 있도록 설계되었습니다. NeuraBlog(€19) 또는 NeuraStore(€29)부터 시작하는 것을 추천합니다.

💡 팁 2: AI API 활용하기
콘텐츠 생성, 텍스트 분석, 챗봇 제작 등이 가능합니다. 크레딧 100개 이내라면 무료로 사용하실 수 있습니다.

⚡ 팁 3: 프로젝트에 통합하기
튜토리얼을 통해 5분 안에 Next.js 프로젝트에 AI Empire을 통합하는 방법을 안내합니다.

📚 튜토리얼: https://ai-empire-steel.vercel.app/docs

많은 관심 부탁드립니다!
AI Empire 고객 지원팀`,
      cta: '📚 튜토리얼 보기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 2,
      subject: '📦 프로젝트에 딱 맞는 템플릿',
      preview: '필요에 맞는 템플릿을 찾아보세요.',
      body: `[이름]님

SaaS를 만들고 계신가요? 다음 템플릿을 추천합니다:

🛒 이커머스 → NeuraStore(€29)
Next.js 14 이커머스 템플릿. 장바구니, Stripe 결제, 관리자 대시보드를 갖추고 있습니다.

📝 블로그 → NeuraBlog(€19)
SEO 최적화 프리미엄 블로그 템플릿. 댓글 시스템, 뉴스레터 기능이 포함되어 있습니다.

💼 포트폴리오 → NeuraPortfolio(€29)
애니메이션, 폼, 다크 모드를 지원하는 전문 포트폴리오 템플릿.

📦 전체 번들 → 6개 템플릿(€299)
모든 템플릿 + 우선 지원 + 무료 업데이트 포함.

첫 구매 시 WELCOME10을 입력하면 10% 할인됩니다.

AI Empire 고객 지원팀`,
      cta: '🛒 템플릿 둘러보기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 3,
      subject: '🏆 SaaS를 24시간 만에 만드는 방법',
      preview: 'AI Empire으로 빠르게 시작하는 방법을 안내합니다.',
      body: `[이름]님

풀스택 개발자로서 다음과 같은 어려움을 겪고 계신가요?

SaaS 아이디어는 있지만 모든 것을 직접 개발할 시간이 없다면...

AI Empire을 사용하면 24시간 만에 프로젝트를 시작할 수 있습니다.

NeuraStore(€29)를 구매하고, 5분 만에 Stripe를 연결하고, Vercel에 배포하세요. 바로 다음 낫에는 첫 고객을 맞이할 수 있습니다.

초기 투자 €29로 비즈니스를 시작할 수 있습니다.

템플릿을 보시고 자신에게 맞는 것을 찾아보세요.

AI Empire 고객 지원팀`,
      cta: '🚀 SaaS 시작하기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 5,
      subject: '🎁 첫 템플릿 구매 20% 할인',
      preview: '특별 혜택을 준비했습니다.',
      body: `[이름]님

AI Empire 가입을 감사드립니다. 특별 혜택을 준비했습니다:
첫 템플릿 구매 20% 할인

쿠폰 코드: WELCOME20

📦 대상 템플릿:
- NeuraBlog: €19 → €15.20
- NeuraStore: €29 → €23.20
- NeuraPortfolio: €29 → €23.20
- 전체 번들: €299 → €239.20

이 기회에 꼭 이용해 보세요.

AI Empire 고객 지원팀`,
      cta: '🎁 20% 할인 받기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const nurtureSequence: EmailSequence = {
  id: 'seq_nurture',
  name: '넛처 시퀀스 — 7일',
  type: 'nurture',
  duration: '7일',
  trigger: '등록 후 미구매 사용자',
  goal: '무료 사용자를 유료 사용자로 전환',
  emails: [
    {
      day: 0,
      subject: '📊 AI Empire으로 만들 수 있는 프로젝트',
      preview: '구체적인 프로젝트 예시를 소개합니다.',
      body: `[이름]님

AI Empire 계정이 있으시지만 아직 모든 기능을 살펴보지 않으셨을 수 있습니다.

다음 5가지 프로젝트를 소개합니다:

1️⃣ SEO 최적화 블로그 → NeuraBlog
2️⃣ Stripe 결제 이커머스 → NeuraStore
3️⃣ 전문 포트폴리오 → NeuraPortfolio
4️⃣ AI 챗봇 → API 통합
5️⃣ 완성된 SaaS → 프리미엄 번들

각 프로젝트는 24시간 이내에 완성할 수 있습니다.

AI Empire 고객 지원팀`,
      cta: '🚀 프로젝트 둘러보기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 1,
      subject: '💡 인디 해커가 가장 많이 하는 실수',
      preview: '시간을 낭비하지 않기 위한 조언입니다.',
      body: `[이름]님

인디 해커가 가장 많이 하는 실수: 모든 것을 직접 개발하기

인증에 몇 주가 걸립니다 → AI Empire이 대신 구현
결제에 몇 주가 걸립니다 → Stripe가 이미 통합됨
대시보드에 몇 주가 걸립니다 → 이미 완성됨
디자인에 몇 주가 걸립니다 → 템플릿은 프로 수준

그사이 경쟁사는 제품을 출시합니다.

AI Empire을 사용하면 6개월 분의 개발 시간을 절약할 수 있습니다.

AI Empire 고객 지원팀`,
      cta: '📊 템플릿 보기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 2,
      subject: '🏆 5,000명 이상의 개발자가 SaaS를 출시했습니다',
      preview: '성장하는 커뮤니티에 참여하세요.',
      body: `[이름]님

5,000명 이상의 개발자가 AI Empire을 신뢰하고 있습니다.

다음과 같은 프로젝트가 만들어졌습니다:
→ 200개 이상의 이커머스 SaaS
→ 150개 이상의 전문 블로그
→ 100개 이상의 포트폴리오
→ 50개 이상의 AI 챗봇

여러분은 어떤 프로젝트를 만들고 싶으신가요?

AI Empire 고객 지원팀`,
      cta: '🤝 커뮤니티 참여하기',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 3,
      subject: '💰 AI Empire의 ROI (투자 대비 수익)',
      preview: '구체적인 수치로 소개합니다.',
      body: `[이름]님

AI Empire의 실제 ROI를 확인하세요:

💰 평균 비용: €50 (1개 템플릿 + AI 크레딧)
📈 평균 ROI: 1,000% (1명의 고객으로 투자 회수 가능)
⏱️ 절약 시간: 6개월 분의 개발 시간
💵 실제 절약액: €49,950

월 €50의 고객 1명이면 투자를 회수할 수 있습니다.

나머지는 순수한 수익입니다.

AI Empire 고객 지원팀`,
      cta: '💰 ROI 계산하기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 4,
      subject: '🎨 NeuraStore — 이커머스 템플릿 소개',
      preview: '가장 인기 있는 템플릿입니다.',
      body: `[이름]님

NeuraStore는 가장 인기 있는 이커머스 템플릿입니다.

포함된 기능:
✅ 장바구니
✅ Stripe 결제
✅ 상품 관리
✅ 관리자 대시보드
✅ 반응형 디자인
✅ 다크 모드

가격: €29 (개발자 의뢰 시 €500 이상 절약)

AI Empire 고객 지원팀`,
      cta: '🛒 NeuraStore 둘러보기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates/neurastore'
    },
    {
      day: 5,
      subject: '⚡ 5분 만에 AI Empire 통합하기',
      preview: '간단한 튜토리얼입니다.',
      body: `[이름]님

AI Empire을 프로젝트에 통합하는 방법:

1️⃣ 템플릿 설치
npx create-next-app@latest my-saas --template ai-empire

2️⃣ API 설정
.env.local에 API 키 복사

3️⃣ Vercel에 배포
git push 하면 사이트가 공개됩니다

완료! 5분 만에 SaaS가 완성됩니다.

AI Empire 고객 지원팀`,
      cta: '📖 튜토리얼 보기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 6,
      subject: '🎁 특별 혜택: 초기 사용자 30% 할인',
      preview: '놓칠 수 없는 혜택입니다.',
      body: `[이름]님

AI Empire 가입 후 [NOMBRE]일이 지났습니다.

감사의 마음을 담아 특별 혜택을 준비했습니다:
전체 템플릿 30% 할인

쿠폰 코드: EARLY30

📦 대상 템플릿:
- NeuraBlog: €19 → €13.30
- NeuraStore: €29 → €20.30
- NeuraPortfolio: €29 → €20.30
- 전체 번들: €299 → €209.30

이 기회에 꼭 이용해 보세요.

AI Empire 고객 지원팀`,
      cta: '🎁 30% 할인 받기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const winbackSequence: EmailSequence = {
  id: 'seq_winback',
  name: '윈백 시퀀스 — 재활성화',
  type: 'winback',
  duration: '21일',
  trigger: '30일 이상 비활성 사용자',
  goal: '비활성 사용자 재활성화 및 리텐션',
  emails: [
    {
      day: 0,
      subject: '💜 [이름]님, 오랜만입니다!',
      preview: '새로운 소식이 있습니다.',
      body: `[이름]님

최근 AI Empire을 사용하지 않으신 것 같습니다.

도움이 필요하시면 언제든 연락해 주세요.

→ 튜토리얼이 필요하신가요?
→ 기술적인 문제가 있으신가요?
→ 필요한 기능이 있으신가요?

언제든 연락해 주세요. 모든 문의에 ответ드리겠습니다.

AI Empire 고객 지원팀`,
      cta: '🚀 대시보드로 돌아가기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 3,
      subject: '🚀 AI Empire의 최신 소식',
      preview: '새로운 기능을 소개합니다.',
      body: `[이름]님

최근 사용 이후 다음과 같은 업데이트가 있었습니다:

🆕 새 템플릿 (NeuraBlog, NeuraStore)
🤖 AI API 개선 (GPT-4, Groq, Gemini)
📊 대시보드 개편
🎨 디자인 개선

새로운 기능을 살펴보세요.

AI Empire 고객 지원팀`,
      cta: '🆕 새 기능 보기',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 7,
      subject: '🎁 50 크레딧을 선물합니다',
      preview: '오랜만의 선물입니다.',
      body: `[이름]님

오랜만에 인사드립니다. AI 크레딧 50개를 선물합니다.

💰 지급 크레딧: 50개
⏰ 유효 기간: 30일

다음에 활용하실 수 있습니다:
→ 콘텐츠 생성
→ 텍스트 분석
→ 챗봇 제작
→ API 테스트

AI Empire 고객 지원팀`,
      cta: '💰 크레딧 받기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 14,
      subject: '⚠️ 크레딧 만료까지 16일 남았습니다',
      preview: '만료일을 잊지 마세요.',
      body: `[이름]님

무료 크레딧 50개의 만료까지 16일 남았습니다.

⏰ 만료일: [DATE]

다음에 활용하세요:
→ 첫 프로젝트 만들기
→ API 테스트
→ AI Empire 탐색

AI Empire 고객 지원팀`,
      cta: '⚡ 크레딧 사용하기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 21,
      subject: '👋 마지막 기회 — 크레딧이 만료됩니다',
      preview: '지금이 마지막 찬스입니다.',
      body: `[이름]님

무료 크레딧 50개의 만료까지 7일 남았습니다.

⏰ 만료일: [DATE]

만료 이후 크레딧은 소멸됩니다.

지금이 마지막 찬스입니다.

AI Empire 고객 지원팀`,
      cta: '⚡ 마지막 찬스',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    }
  ]
}

export const upsellSequence: EmailSequence = {
  id: 'seq_upsell',
  name: '업셀 시퀀스 — Pro 플랜으로 업그레이드',
  type: 'upsell',
  duration: '14일',
  trigger: 'API 호출 100회 이상 또는 30일 이상 활성 사용자',
  goal: '무료 사용자를 Pro 플랜 사용자로 전환',
  emails: [
    {
      day: 0,
      subject: '📊 [이름]님, 사용 한도에 근접하고 있습니다',
      preview: '사용량이 증가 중 — 상위 플랜 안내입니다.',
      body: `[이름]님

좋은 소식입니다: AI Empire을 활발히 사용하고 계시네요! 📈

현재 사용 현황:
→ API 호출: [NOMBRE]/100
→ 잔여 크레딧: [NOMBRE]
→ 활성 일수: [NOMBRE]

무료 플랜의 한도에 근접하고 있습니다.

Pro 플랜 혜택:
✅ 무제한 API 호출
✅ 우선 접근권
✅ 전담 지원
✅ 프리미엄 템플릿

AI Empire 고객 지원팀`,
      cta: '🚀 Pro 플랜으로 업그레이드',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 2,
      subject: '💎 Pro 플랜의 혜택',
      preview: '프리미엄 기능을 소개합니다.',
      body: `[이름]님

무료 플랜에서 놓치고 있는 혜택을 소개합니다:

💎 Pro 플랜 (€99/월):
→ 무제한 API 호출
→ 신규 기능 우선 접근
→ 전담 지원 (2시간 이내 응답)
→ 프리미엄 템플릿 (€199 상당)
→ 고급 분석 대시보드
→ 커스텀 Webhook API

💰 Pro 플랜 고객의 평균 ROI: 500%

AI Empire 고객 지원팀`,
      cta: '💎 Pro 플랜 살펴보기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 5,
      subject: '🎁 Pro 플랜 첫 달 20% 할인',
      preview: '특별 혜택입니다.',
      body: `[이름]님

감사의 마음을 담아 특별 혜택을 준비했습니다:
Pro 플랜 첫 달 20% 할인

💰 정가 €99/월 → €79/월

쿠폰 코드: PRO20

Pro 플랜 혜택:
✅ 무제한 API 호출
✅ 전담 지원
✅ 프리미엄 템플릿
✅ 고급 분석 기능

AI Empire 고객 지원팀`,
      cta: '🎁 혜택 받기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 7,
      subject: '🏆 Pro 플랜으로 수익을 5배 높이는 방법',
      preview: 'Pro 플랜 활용 사례입니다.',
      body: `[이름]님

Pro 플랜 활용 사례를 소개합니다:

Pro 플랜 도입 전:
→ 완료되지 못한 프로젝트
→ 높은 개발 비용
→ 복잡한 비용 관리

Pro 플랜 도입 후:
→ AI 비용 80% 절감
→ 생산성 300% 향상
→ 수익 5배 증가

Pro 플랜은 2주 만에 투자 회수가 가능합니다.

AI Empire 고객 지원팀`,
      cta: '🚀 Pro 플랜으로 업그레이드',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 10,
      subject: '⏰ 마지막 기회 — 20% 할인 혜택',
      preview: '이 혜택을 놓치지 마세요.',
      body: `[이름]님

Pro 플랜 20% 할인 혜택이 곧 마감됩니다.

💰 €79/월 (정가 €99/월)

⏰ 만료일: [DATE]

Pro 플랜 혜택:
✅ 무제한 API 호출
✅ 전담 지원
✅ 프리미엄 템플릿
✅ 고급 분석 기능

이 혜택을 이용할 마지막 찬스입니다.

AI Empire 고객 지원팀`,
      cta: '⚡ 마지막 찬스',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 14,
      subject: '👋 [이름]님 — 언제든 연락해 주세요',
      preview: '부담은 없습니다. 언제든 도와드리겠습니다.',
      body: `[이름]님

Pro 플랜이 지금 시점에 맞지 않을 수 있습니다.

걱정하지 마세요. 언제든 도와드리겠습니다.

그 동안 다음을 이용하실 수 있습니다:
→ 무료 플랜 사용 (월 100 크레딧)
→ 템플릿 살펴보기 (€19부터)
→ 질문이 있으시면 언제든 연락

언제든 도움을 드리겠습니다.

AI Empire 고객 지원팀`,
      cta: '💬 문의하기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/contact'
    }
  ]
}
