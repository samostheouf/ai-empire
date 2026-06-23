export interface ContentCalendar {
  id: string
  name: string
  period: string
  type: 'monthly' | 'weekly' | 'holiday'
  posts: ContentPost[]
  metrics: ContentMetrics
}

export interface ContentPost {
  date: string
  time: string
  platform: string
  type: string
  content: string
  hashtags: string[]
  cta?: string
  url?: string
}

export interface ContentMetrics {
  totalPosts: number
  platforms: string[]
  avgPostsPerDay: number
}

export interface HolidayPlan {
  name: string
  date: string
  daysBefore: number
  content: ContentPost[]
}

// ============================================================
// 월간 캘린더
// ============================================================
export const monthlyContentPlan: ContentCalendar = {
  id: 'cal_monthly',
  name: '월간 캘린더 — AI Empire',
  period: '2025년 3월',
  type: 'monthly',
  posts: [
    // 주 1
    {
      date: '01/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 한국 스타트업이 지금 AI를 사용해야 하는 3가지 이유:\n\n1. 비용 60% 절감\n2. 반복 업무 자동화\n3. 경쟁사와 차별화\n\n#AIEmpire #StartupKorea',
      hashtags: ['#AIEmpire', '#StartupKorea', '#AI'],
      cta: '자세히 보기'
    },
    {
      date: '01/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: 'AI는 더 이상 대기업 전유물이 아닙니다.\n\n큰 예산 없이 AI에 접근하는 방법:\n\n→ AI Empire 템플릿 (€19부터)\n→ 무료 AI API (GPT-4, Groq)\n→ 5분 만에 통합\n\n5,000명 이상의 개발자가 이미 실천했습니다.\n\n여러분은 어떠신가요?\n\n#AIEmpire #AI #StartupKorea',
      hashtags: ['#AIEmpire', '#AI', '#StartupKorea']
    },
    {
      date: '02/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 60초 튜토리얼:\n\nAI Empire로 5분 만에 AI 블로그 만드는 방법:\n\n1. NeuraBlog 선택 (€19)\n2. npx로 설치\n3. API 설정\n4. Vercel에 배포\n\n끝! ✅\n\n#AIEmpire #NextJS #Tutorial',
      hashtags: ['#AIEmpire', '#NextJS', '#Tutorial']
    },
    {
      date: '02/03',
      time: '15:00',
      platform: 'Instagram',
      type: 'Carousel',
      content: '🎨 캐러셀: "2025년에 SaaS를 출시하는 5가지 템플릿"\n\n슬라이드 1: NeuraBlog — 프리미엄 블로그\n슬라이드 2: NeuraStore — 이커머스\n슬라이드 3: NeuraPortfolio — 포트폴리오\n슬라이드 4: 번들 패키지 — 6개 템플릿\n슬라이드 5: CTA — 지금 시작하기\n\n#AIEmpire #SaaS #Templates',
      hashtags: ['#AIEmpire', '#SaaS', '#Templates']
    },
    {
      date: '03/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Poll',
      content: '📊 설문조사: AI API에 월간 얼마나 지출하시나요?\n\nA) €0-50/월\nB) €50-200/월\nC) €200+/월\nD) 아직 AI API가 없음\n\n(모든 옵션에 대한 솔루션이 있습니다 😏)\n\n#AIEmpire #AI',
      hashtags: ['#AIEmpire', '#AI']
    },
    {
      date: '03/03',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 오늘의 질문:\n\nAI와 관련된 가장 큰 과제는 무엇인가요?\n\nA) 사용 방법 이해하기\nB) 신뢰할 수 있는 API 찾기\nC) 비용 절감하기\nD) 제품에 통합하기\n\n댓글로 공유해 주세요! 👇\n\n#AIEmpire #AI #Community',
      hashtags: ['#AIEmpire', '#AI', '#Community']
    },
    {
      date: '04/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 스레드: "AI로 SaaS 비용을 절감하는 5가지 팁"\n\n1/ 무료 API 사용 (Groq, Gemini)\n2/ AI Empire 통합 (템플릿 + API)\n3/ AI 챗봇으로 지원 자동화\n4/ GPT-4로 콘텐츠 생성\n5/ AI로 데이터 분석\n\n#AIEmpire #SaaS',
      hashtags: ['#AIEmpire', '#SaaS']
    },
    {
      date: '04/03',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 사례 연구: InnoveTech가 AI 비용을 70% 절감한 방법\n\nAI Empire 도입 전:\n→ 서드파티 API에 월 €3,000\n→ 3개월 개발\n→ 제한적인 지원\n\nAI Empire 도입 후:\n→ 월 €900 (-70%)\n→ 24시간 개발\n→ 24/7 지원\n\n결과: 1년 동안 €25,000 절약.\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '05/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Meme',
      content: '나: "AI 안 쓸거야"\n\n나도: *AI Empire로 1시간 만에 AI 기능 47개 추가*\n\n😂\n\n#AIEmpire #DevLife #AI',
      hashtags: ['#AIEmpire', '#DevLife', '#AI']
    },
    // 주 2
    {
      date: '08/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Launch',
      content: '🚀 신규: NeuraStore v2 출시!\n\n✅ 디자인 리뉴얼\n✅ 성능 2배 향상\n✅ 새로운 이커머스 기능\n\n가격: €29 (72시간 -40%)\n\n코드: NEURASTORE40\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Launch',
      hashtags: ['#AIEmpire', '#Launch']
    },
    {
      date: '09/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Product',
      content: '📦 소개: NeuraStore v2\n\nNext.js 14용 가장 완벽한 이커머스 템플릿:\n\n→ 스마트 장바구니\n→ 안전한 Stripe 결제\n→ 전문 관리자 대시보드\n→ 반응형 디자인 + 다크모드\n\n가격: €29 (출시 -40%)\n\n5,000명 이상의 개발자가 신뢰합니다.\n\n#AIEmpire #Ecommerce',
      hashtags: ['#AIEmpire', '#Ecommerce']
    },
    {
      date: '10/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 스레드: "€0 인프라 예산으로 24시간 만에 이커머스를 출시한 방법"\n\n1/ AI Empire가 NeuraStore 제공 (€29)\n2/ 5분 만에 Stripe 연결\n3/ 3분 만에 Vercel 배포\n4/ 24시간 만에 이커머스 완성\n5/ 총 비용: €29\n\n#AIEmpire #BuildInPublic',
      hashtags: ['#AIEmpire', '#BuildInPublic']
    },
    // 주 3
    {
      date: '15/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '📊 월간 요약:\n\n✅ 500+ 신규 사용자\n✅ 100+ 템플릿 판매\n✅ 98% 고객 만족도\n\n커뮤니티 여러분 감사합니다! 🙏\n\n#AIEmpire #Milestone',
      hashtags: ['#AIEmpire', '#Milestone']
    },
    {
      date: '16/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Founder Story',
      content: '💡 "AI Empire를 만들기 위해 퇴사했습니다. 그 이유는 이것입니다."\n\n한국 시장에는 미국 AI API에 대한 로컬 대안이 필요합니다.\n\nAI Empire가 그 대안입니다:\n→ 한국 우선\n→ 한국어 지원\n→ EUR 결제\n→ GDPR 네이티브\n\n5,000명 이상의 개발자가 신뢰합니다.\n\n#AIEmpire #FounderStory',
      hashtags: ['#AIEmpire', '#FounderStory']
    },
    // 주 4
    {
      date: '22/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Teaser',
      content: '👀 무언가 큰 것이 옵니다...\n\n📅 [날짜]\n🎁 [힌트]\n\n계속 지켜봐 주세요.\n\n#AIEmpire #Teaser',
      hashtags: ['#AIEmpire', '#Teaser']
    },
    {
      date: '25/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'CTA',
      content: '🎯 런칭 오픈 혜택을 마지막으로 누릴 수 있는 날!\n\n전체 템플릿 -30%\n코드: LAUNCH30\n⏰ 자정에 마감\n\n놓치지 마세요!\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #마지막기회',
      hashtags: ['#AIEmpire', '#마지막기회']
    }
  ],
  metrics: {
    totalPosts: 16,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 0.57
  }
}

// ============================================================
// 주간 일정
// ============================================================
export const weeklyPostingSchedule: ContentCalendar = {
  id: 'cal_weekly',
  name: '주간 일정 — AI Empire',
  period: '일반적인 주간',
  type: 'weekly',
  posts: [
    // 월요일
    {
      date: '월요일',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 월요일 모티베이션: 생산성을 높여주는 AI 팁\n\n[오늘의 팁]\n\n#AIEmpire #월요일모티베이션',
      hashtags: ['#AIEmpire', '#월요일모티베이션']
    },
    {
      date: '월요일',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: '💡 [리더십 주제]\n\n[전문 콘텐츠]\n\n#AIEmpire #ThoughtLeadership',
      hashtags: ['#AIEmpire', '#ThoughtLeadership']
    },
    // 화요일
    {
      date: '화요일',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 빠른 튜토리얼: [주제]\n\n1. 1단계\n2. 2단계\n3. 3단계\n\n[CTA]\n\n#AIEmpire #Tutorial',
      hashtags: ['#AIEmpire', '#Tutorial']
    },
    {
      date: '화요일',
      time: '15:00',
      platform: 'Instagram',
      type: 'Reel',
      content: '🎬 30초 릴: "AI Empire로 [행동]하는 방법"\n\n[데모]\n\n#AIEmpire #Reel',
      hashtags: ['#AIEmpire', '#Reel']
    },
    // 수요일
    {
      date: '수요일',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 [가치 콘텐츠]\n\n[팁 또는 조언]\n\n#AIEmpire #Value',
      hashtags: ['#AIEmpire', '#Value']
    },
    {
      date: '수요일',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 사례 연구: [고객]\n\n이전: [상황]\n이후: [결과]\n\n[교훈]\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '수요일',
      time: '18:00',
      platform: 'Facebook',
      type: 'Video',
      content: '📹 2분 영상: "AI Empire로 [주제]하는 방법"\n\n[비디오 튜토리얼]\n\n#AIEmpire #Video',
      hashtags: ['#AIEmpire', '#Video']
    },
    // 목요일
    {
      date: '목요일',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 스레드: "[주제]"\n\n1/ [포인트 1]\n2/ [포인트 2]\n3/ [포인트 3]\n\n#AIEmpire #Thread',
      hashtags: ['#AIEmpire', '#Thread']
    },
    {
      date: '목요일',
      time: '15:00',
      platform: 'LinkedIn',
      type: 'Data',
      content: '📊 [데이터 또는 통계]\n\n[분석]\n\n[영향]\n\n#AIEmpire #Data',
      hashtags: ['#AIEmpire', '#Data']
    },
    // 금요일
    {
      date: '금요일',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '🏆 [고객 후기]\n\n"AI Empire가 [이점]을 제공했습니다"\n\n[소셜 프루프]\n\n#AIEmpire #SocialProof',
      hashtags: ['#AIEmpire', '#SocialProof']
    },
    {
      date: '금요일',
      time: '18:00',
      platform: 'Twitter/X',
      type: 'Week Recap',
      content: '🔄 주간 요약:\n\n✅ [성과 1]\n✅ [성과 2]\n✅ [성과 3]\n\n다음 주: [미리보기]\n\n#AIEmpire #Recap',
      hashtags: ['#AIEmpire', '#Recap']
    },
    // 토요일
    {
      date: '토요일',
      time: '10:00',
      platform: 'Instagram',
      type: 'Story',
      content: '📸 스토리: "인디 해커의 하루"\n\n[비하인드 스토리]\n\n#AIEmpire #IndieHacker',
      hashtags: ['#AIEmpire', '#IndieHacker']
    },
    // 일요일
    {
      date: '일요일',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 일요일 질문:\n\n이번 주에 무엇을 만드시나요?\n\n댓글로 공유해 주세요! 👇\n\n#AIEmpire #Community',
      hashtags: ['#AIEmpire', '#Community']
    }
  ],
  metrics: {
    totalPosts: 13,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 1.86
  }
}

// ============================================================
// 공휴일 캘린더
// ============================================================
export const holidayContentPlan: HolidayPlan[] = [
  {
    name: '발렌타인데이',
    date: '14/02',
    daysBefore: 7,
    content: [
      {
        date: '07/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '💕 발렌타인데이가 다가옵니다...\n\n개발자들을 위한 특별한 것이 옵니다...\n\n#AIEmpire #발렌타인데이',
        hashtags: ['#AIEmpire', '#발렌타인데이']
      },
      {
        date: '14/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '💕 AI Empire 발렌타인데이 오퍼:\n\n코드 AMOUR20으로 전체 템플릿 -20%\n\n최고의 선물은 작동하는 SaaS입니다 ❤️\n\n⏰ 24시간 한정\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #발렌타인데이',
        hashtags: ['#AIEmpire', '#발렌타인데이']
      },
      {
        date: '14/02',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Fun',
        content: '💕 "사랑은 코딩에 대한 열정을 공유할 수 있는 사람을 찾는 것입니다"\n\n— 외로운 개발자\n\n모든 개발자 여러분 발렌타인데이快乐!\n\n#AIEmpire #발렌타인데이 #DevLife',
        hashtags: ['#AIEmpire', '#발렌타인데이', '#DevLife']
      }
    ]
  },
  {
    name: '근로자의 날',
    date: '01/05',
    daysBefore: 3,
    content: [
      {
        date: '28/04',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📅 5월 1일이 다가옵니다...\n\n덜 일할 준비 되셨나요? 🤔\n\n#AIEmpire #근로자의날',
        hashtags: ['#AIEmpire', '#근로자의날']
      },
      {
        date: '01/05',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎉 근로자의 날快乐!\n\n오늘은 미래를 만들어가는 개발자들을 축하합니다.\n\n5,000명 이상의 사용자 여러분 감사합니다! 🙏\n\n#AIEmpire #근로자의날 #DevLife',
        hashtags: ['#AIEmpire', '#근로자의날', '#DevLife']
      }
    ]
  },
  {
    name: '음악축제',
    date: '21/06',
    daysBefore: 5,
    content: [
      {
        date: '16/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎵 음악축제가 다가옵니다...\n\n코드로 음악을 만들어 보면 어떨까요? 🎶\n\n#AIEmpire #음악축제',
        hashtags: ['#AIEmpire', '#음악축제']
      },
      {
        date: '21/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Fun',
        content: '🎵 음악축제快乐!\n\n오늘의 플레이리스트:\n1. "Bohemian Rhapsody" — Queen\n2. "AI Empire Theme" — 우리의 상상력\n3. "코드가 컴파일되는 소리" — 모든 개발자\n\n🎶\n\n#AIEmpire #음악축제',
        hashtags: ['#AIEmpire', '#음악축제']
      }
    ]
  },
  {
    name: '국경일',
    date: '14/07',
    daysBefore: 7,
    content: [
      {
        date: '07/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🇫🇷 국경일이 다가옵니다...\n\n한국 테크를 축하할 특별한 것이 있습니다! 🇰🇷\n\n#AIEmpire #국경일',
        hashtags: ['#AIEmpire', '#국경일']
      },
      {
        date: '14/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🇫🇷 국경일快乐!\n\n오늘은 한국 테크를 축하합니다:\n→ 5,000명 이상의 개발자\n→ 200개 이상의 SaaS 출시\n→ 100% 메이드인코리아\n\n한국 테크 만세! 🇰🇷🚀\n\n#AIEmpire #국경일 #KoreaTech',
        hashtags: ['#AIEmpire', '#국경일', '#KoreaTech']
      },
      {
        date: '14/07',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Patriotic',
        content: '🇫🇷 국경일: 한국 테크의 시간!\n\nAI Empire는 한국 혁신을 대표하는 것을 자랑스럽게 생각합니다:\n→ 5,000명 이상의 개발자\n→ 200개 이상의 SaaS 출시\n→ 한국어 지원\n→ EUR 결제\n→ GDPR 네이티브\n\n한국 테크 만세! 🇰🇷\n\n#AIEmpire #국경일 #KoreaTech',
        hashtags: ['#AIEmpire', '#국경일', '#KoreaTech']
      }
    ]
  },
  {
    name: '개학',
    date: '02/09',
    daysBefore: 14,
    content: [
      {
        date: '19/08',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📚 개학이 다가옵니다...\n\n새로운 것을 배워보는 건 어떨까요?\n\n특별한 것을 준비하고 있습니다... 👀\n\n#AIEmpire #개학',
        hashtags: ['#AIEmpire', '#개학']
      },
      {
        date: '02/09',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '📚 개학 2025: SaaS 만드는 법을 배우세요!\n\n개학 특별 오퍼:\n전체 템플릿 -25%\n코드: RENTREE25\n\n⏰ 9월 2일부터 15일까지\n\n패키지 포함:\n→ 6개 Next.js 14 템플릿\n→ 완전한 튜토리얼\n→ 우선 지원\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #개학',
        hashtags: ['#AIEmpire', '#개학']
      }
    ]
  },
  {
    name: '블랙프라이데이',
    date: '28/11',
    daysBefore: 14,
    content: [
      {
        date: '14/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🖤 블랙프라이데이가 다가옵니다...\n\n준비하세요. 올해의 할인입니다.\n\n👀\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '21/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '⏰ AI Empire 블랙프라이데이까지 1주일!\n\n전체 -50%!\n\n날짜를 표시해 두세요:\n📅 11월 28일\n\n알림을 받으려면 가입하세요:\n👉 ai-empire-steel.vercel.app/black-friday\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '28/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Launch',
        content: '🖤 BLACK FRIDAY AI EMPIRE — 시작! 🖤\n\n5일간 전체 -50%!\n\n📦 템플릿 €9.50부터 €149.50\n📦 Pro 플랜 -50%\n📦 선착 50명 = 보너스 템플릿 무료\n\n코드: BLACKFRIDAY50\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      }
    ]
  },
  {
    name: '크리스마스',
    date: '25/12',
    daysBefore: 10,
    content: [
      {
        date: '15/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎄 크리스마스가 다가옵니다...\n\n여러분을 위한 선물이 있습니다...\n\n🎁\n\n#AIEmpire #크리스마스',
        hashtags: ['#AIEmpire', '#크리스마스']
      },
      {
        date: '20/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '🎄 크리스마스까지 5일!\n\n어드벤트 캘린더:\n→ 매일 무료 템플릿 1개\n→ 독점 프로모션 코드\n→ 서프라이즈 콘텐츠\n\n참여하세요!\n\n#AIEmpire #크리스마스 #어드벤트캘린더',
        hashtags: ['#AIEmpire', '#크리스마스', '#어드벤트캘린더']
      },
      {
        date: '25/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎄 메리 크리스마스! 🎄\n\n5,000명 이상의 사용자 여러분 감사합니다!\n\n선물: 전체 템플릿 -30%\n코드: NOEL2025\n\n행복한 연말 보내세요! 🎅\n\n#AIEmpire #크리스마스',
        hashtags: ['#AIEmpire', '#크리스마스']
      }
    ]
  },
  {
    name: '새해',
    date: '01/01',
    daysBefore: 7,
    content: [
      {
        date: '25/12',
        time: '18:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎆 2025년이 다가옵니다...\n\nSaaS를 출시할 준비 되셨나요?\n\n특별한 것을 준비하고 있습니다...\n\n#AIEmpire #새해',
        hashtags: ['#AIEmpire', '#새해']
      },
      {
        date: '01/01',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎆 2025년 새해 복 많이 받으세요! 🎆\n\n2025년은 여러분의 해입니다. SaaS를 출시하는 해.\n\n새해 오퍼:\n-25% + 500 크레딧 무료\n코드: NOUVELAN2025\n\n이해를 여러분의 해로 만드세요!\n\n#AIEmpire #새해 #2025',
        hashtags: ['#AIEmpire', '#새해', '#2025']
      },
      {
        date: '01/01',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Motivational',
        content: '🎆 새해, 새로운 SaaS.\n\n2025년은 행동으로 옮기는 해입니다.\n\nAI Empire가 지원합니다:\n→ 바로 사용 가능한 템플릿\n→ 무료 AI API\n→ 24/7 지원\n\n이미 SaaS를 출시한 5,000명 이상의 개발자에 합류하세요.\n\n새해 복 많이 받으세요! 🎆\n\n#AIEmpire #새해 #2025',
        hashtags: ['#AIEmpire', '#새해', '#2025']
      }
    ]
  }
]

// ============================================================
// 유틸리티 함수
// ============================================================

export function getAllContentCalendars(): ContentCalendar[] {
  return [monthlyContentPlan, weeklyPostingSchedule]
}

export function getHolidayByName(name: string): HolidayPlan | undefined {
  return holidayContentPlan.find(h => h.name === name)
}

export function getHolidaysForMonth(month: number): HolidayPlan[] {
  return holidayContentPlan.filter(h => {
    const holidayMonth = parseInt(h.date.split('/')[1], 10)
    return holidayMonth === month
  })
}

export function generateCalendarId(): string {
  return `cal_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function getContentByPlatform(posts: ContentPost[], platform: string): ContentPost[] {
  return posts.filter(p => p.platform === platform)
}

export function getContentByDay(posts: ContentPost[], day: string): ContentPost[] {
  return posts.filter(p => p.date === day)
}

export function formatCalendarForExport(posts: ContentPost[]): string {
  return posts.map(p =>
    `${p.date} | ${p.time} | ${p.platform} | ${p.type} | ${p.content.substring(0, 50)}...`
  ).join('\n')
}
