export interface BlogPostTemplate {
  title: string
  slug: string
  excerpt: string
  content: string
  tags: string[]
  category: string
  readingTime: number
}

export function generateBlogPostTemplate(data: {
  title: string
  topic: string
  targetAudience: string
}): BlogPostTemplate {
  return {
    title: data.title,
    slug: data.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-'),
    excerpt: `${data.topic}가 개발 비즈니스를 어떻게 혁신할 수 있는지 알아보세요.`,
    content: `
# ${data.title}

## 소개

이 기사에서는 ${data.topic}이 생산성을 향상시키고 더 나은 성능의 애플리케이션을 만드는 데 어떻게 도움이 되는지 살펴보겠습니다.

## 왜 ${data.topic}인가?

${data.topic}은 ${data.targetAudience} 개발자들에게 필수적인 도구가 되었습니다. 주요 이유는 다음과 같습니다:

### 1. 성능

최신 솔루션은 최적화된 아키텍처를 통해 뛰어난 성능을 제공합니다.

### 2. 생산성

올바른 도구와 템플릿을 사용하면 개발 시간을 60% 단축할 수 있습니다.

### 3. 확장성

품질을 저하시키지 않고 비즈니스 성장에 맞춰 솔루션을 확장할 수 있습니다.

## 시작하는 방법

### 1단계: 올바른 템플릿 선택

좋은 템플릿은 탄탄한 기반을 제공하면서 시간을 절약해 줍니다.

### 2단계: 필요에 맞게 사용자 정의

특정 사용 사례에 맞게 코드를 조정합니다.

### 3단계: 프로덕션에 배포

Next.js와 Vercel을 사용하면 배포가 매우 쉽습니다.

## 결론

${data.topic}은 현대 개발자들에게 중요한 자산입니다. 오늘부터 이 솔루션을 프로젝트에 통합하세요.

---

*시작하는 데 도움이 필요하신가요? [프리미엄 템플릿](/templates)을 확인하거나 팀에 문의하세요.*
    `,
    tags: [data.topic, 'Next.js', 'Tailwind CSS', '웹 개발', 'SaaS'],
    category: 'Tutorial',
    readingTime: 5,
  }
}

export interface CaseStudyTemplate {
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  metrics: Array<{
    label: string
    value: string
  }>
}

export function generateCaseStudyTemplate(data: {
  clientName: string
  industry: string
  challenge: string
}): CaseStudyTemplate {
  return {
    title: `${data.clientName}이 NeuraAPI로 비즈니스를 혁신한 방법`,
    client: data.clientName,
    industry: data.industry,
    challenge: data.challenge,
    solution: `${data.clientName}은 프로세스를 자동화하고 생산성을 향상시키기 위해 NeuraAPI의 API와 템플릿을 통합했습니다.`,
    results: [
      '개발 시간 60% 단축',
      '코드 품질 개선',
      '프로덕션 배포 3배 빨라짐',
      '2개월 만에 ROI 달성',
    ],
    metrics: [
      { label: '개발 시간', value: '-60%' },
      { label: '만족도', value: '95%' },
      { label: 'ROI', value: '300%' },
      { label: '프로덕션 배포 시간', value: '-75%' },
    ],
  }
}

export interface TutorialTemplate {
  title: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  prerequisites: string[]
  objectives: string[]
  steps: Array<{
    title: string
    content: string
    codeExample?: string
  }>
}

export function generateTutorialTemplate(data: {
  title: string
  topic: string
}): TutorialTemplate {
  return {
    title: data.title,
    level: 'intermediate',
    duration: '30분',
    prerequisites: [
      'Next.js 기본 지식',
      'React 이해',
      'Node.js 설치됨',
    ],
    objectives: [
      `${data.topic}의 기본 개념 이해`,
      `Next.js 프로젝트에서 ${data.topic} 설정`,
      `첫 번째 구현 만들기`,
    ],
    steps: [
      {
        title: '설치',
        content: '필요한 의존성을 설치합니다.',
        codeExample: 'npm install @neuraapi/sdk',
      },
      {
        title: '설정',
        content: '환경 변수에서 API 키를 설정합니다.',
        codeExample: 'NEXT_PUBLIC_NEURAAPI_KEY=your_key_here',
      },
      {
        title: '사용법',
        content: 'React 컴포넌트에서 SDK를 사용합니다.',
        codeExample: `import { NeuraAPI } from '@neuraapi/sdk'

const api = new NeuraAPI(process.env.NEXT_PUBLIC_NEURAAPI_KEY)

export default function MyComponent() {
  const generateContent = async () => {
    const result = await api.generate({
      prompt: '여기에 프롬프트 입력',
    })
    return result
  }
}`,
      },
      {
        title: '배포',
        content: 'Vercel에 애플리케이션을 배포합니다.',
        codeExample: 'vercel deploy',
      },
    ],
  }
}

export interface FAQItem {
  question: string
  answer: string
  category: string
}

export function generateFAQContent(category: string): FAQItem[] {
  const faqs: Record<string, FAQItem[]> = {
    general: [
      {
        question: 'NeuraAPI란 무엇인가요?',
        answer: 'NeuraAPI는 개발자를 위한 AI API와 프리미엄 템플릿을 제공하는 플랫폼입니다. SaaS 프로젝트를 빠르게 시작할 수 있도록 도와드립니다.',
        category: 'general',
      },
      {
        question: 'API 키를 어떻게 받나요?',
        answer: '플랫폼에서 무료 계정을 만들고, 대시보드에서 API 키를 확인하세요. 시작할 때 100 크레딧이 무료로 제공됩니다.',
        category: 'general',
      },
      {
        question: '요금은 어떻게 되나요?',
        answer: '100 크레딧의 무료 플랜, 월 29€ Starter 플랜, 월 99€ Pro 플랜을 제공합니다. 자세한 내용은 요금 페이지를 참조하세요.',
        category: 'pricing',
      },
    ],
    technical: [
      {
        question: '프로젝트에 NeuraAPI를 어떻게 통합하나요?',
        answer: 'npm SDK를 사용하세요: npm install @neuraapi/sdk. 그런 다음 API 키로 SDK를 가져와서 설정합니다.',
        category: 'technical',
      },
      {
        question: '지원되는 프레임워크는 무엇인가요?',
        answer: 'NeuraAPI는 Next.js, React, Vue.js, Angular 및 모든 최신 JavaScript/TypeScript 프레임워크와 호환됩니다.',
        category: 'technical',
      },
      {
        question: '요청 제한이 있나요?',
        answer: '무료 플랜은 시간당 10요청으로 제한됩니다. 유료 플랜은 필요에 따라 더 높은 제한을 제공합니다.',
        category: 'technical',
      },
    ],
    billing: [
      {
        question: '결제는 어떻게 작동하나요?',
        answer: '결제는 월 단위로 진행됩니다. 언제든 취소할 수 있습니다. 사용하지 않은 크레딧은 이월되지 않습니다.',
        category: 'billing',
      },
      {
        question: '신용카드 결제를 지원하나요?',
        answer: '네, 파트너인 Stripe를 통해 Visa, Mastercard, American Express를 받습니다.',
        category: 'billing',
      },
      {
        question: '환불은 어떻게 받나요?',
        answer: '구매 후 30일 이내에 support@neuraapi.com으로 환불 요청을 보내주세요.',
        category: 'billing',
      },
    ],
  }

  return faqs[category] || faqs.general
}
