import { LandingContent } from './en'

export const landingContent: LandingContent = {
  hero: {
    headline: 'Next.js 14와 AI로 더 빠르게 SaaS 제품 출시',
    subheadline: 'Groq AI API, Stripe 결제, 인증을 갖춘 프로덕션 준비 완료 템플릿 — 보일러플레이트가 아닌 제품에 집중할 수 있도록 만들어졌습니다.',
    ctaText: '무료로 시작'
  },
  features: [
    {
      title: 'Next.js 14 App Router 템플릿',
      description: '최신 Next.js 패턴으로 구축. TypeScript, Tailwind CSS, 서버 컴포넌트가 바로 사용 가능합니다.'
    },
    {
      title: 'Groq AI API 통합',
      description: 'Groq 기반 고속 추론. 스트리밍 채팅, 구조화된 출력, 문서 분석 엔드포인트를 포함합니다.'
    },
    {
      title: 'Stripe 결제 준비 완료',
      description: '구독 관리, 사용량 기반 가격, 고객 포털, 웹훅 처리 — 모두 사전 구성되어 있습니다.'
    },
    {
      title: '인증 및 역할 관리',
      description: '역할 기반 접근 제어가 포함된 내장 인증. 기본 흐름에 서드파티 인증 라이브러리가 필요 없습니다.'
    },
    {
      title: '관리자 대시보드',
      description: '사용자 관리, 분석 보기, 사전 구축된 관리 인터페이스를 통해 설정을 구성합니다.'
    },
    {
      title: '무료 티어 제공',
      description: '100 API 크레딧으로 시작. 신용카드 불필요. 필요할 때 업그레이드하세요.'
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: '템플릿 선택',
      description: '6개의 프로덕션 준비 완료 템플릿 중 선택: SaaS 스타터, 마켓플레이스, 대시보드, 블로그, 포트폴리오, 랜딩 페이지.'
    },
    {
      step: 2,
      title: '제품 커스터마이즈',
      description: '비즈니스 로직을 추가하고, Groq API 키를 구성하고, Stripe를 설정하세요. 보일러플레이트는 이미 처리되었습니다.'
    },
    {
      step: 3,
      title: '배포 및 출시',
      description: 'Vercel 또는 선호하는 플랫폼으로 푸시. SaaS가 사용자를 위한 준비가 완료됩니다.'
    }
  ],
  faq: [
    {
      question: '무료 티어란 무엇인가요?',
      answer: '무료 티어에는 Groq AI 기반 100 API 크레딧이 포함됩니다. 신용카드 불필요. 모든 템플릿과 기본 기능을 무료로 사용할 수 있습니다.'
    },
    {
      question: '자신의 API 키가 필요한가요?',
      answer: '네, Groq API 키(groq.com에서 무료 티어 이용 가능)와 결제용 Stripe 계정이 필요합니다. AI Empire가 통합을 처리합니다 — 키만 연결하면 됩니다.'
    },
    {
      question: '이 템플릿을 상업적 프로젝트에 사용할 수 있나요?',
      answer: '네. AI Empire 템플릿을 개인 및 상업적 프로젝트에 사용할 수 있습니다. 그 위에 구축한 코드는 귀하의 소유입니다.'
    },
    {
      question: '어떤 기술이 사용되나요?',
      answer: 'Next.js 14(App Router), TypeScript, Tailwind CSS, 추론용 Groq AI API, 결제용 Stripe, 역할 기반 접근 제어를 갖춘 사전 구축 인증 시스템.'
    },
    {
      question: '문서가 있나요?',
      answer: '네. 각 템플릿에는 설정 지침, API 참조, 코드 설명이 포함되어 있습니다. 일반적인 커스터마이징 패턴에 대한 가이드도 제공합니다.'
    },
    {
      question: '다른 SaaS 템플릿과 무엇이 다른가요?',
      answer: 'AI Empire는 마케팅 주장이 아닌 작동하는 코드에 중점을 둡니다. 모든 템플릿은 프로덕션 준비 완료이며, AI API 통합을 포함하고 정직한 문서가 제공됩니다. 가짜testimonial이나 과장된 통계는 없습니다.'
    }
  ]
}
