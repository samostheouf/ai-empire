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
// MONTHLY CALENDAR
// ============================================================
export const monthlyContentPlan: ContentCalendar = {
  id: 'cal_monthly',
  name: 'Monthly Calendar — AI Empire',
  period: 'March 2025',
  type: 'monthly',
  posts: [
    // WEEK 1
    {
      date: '01/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 3 reasons why French startups should use AI right now:\n\n1. Cut costs by 60%\n2. Automate repetitive tasks\n3. Stand out from the competition\n\n#AIEmpire #StartupFrance',
      hashtags: ['#AIEmpire', '#StartupFrance', '#AI'],
      cta: 'Learn how'
    },
    {
      date: '01/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: 'AI is no longer reserved for CAC 40 giants.\n\nHere\'s how French startups can access it without a big budget:\n\n→ AI Empire templates (starting at €19)\n→ Free AI APIs (GPT-4, Groq)\n→ 5-minute integration\n\n5,000+ developers have already done it.\n\nWhat about you?\n\n#AIEmpire #AI #StartupFrance',
      hashtags: ['#AIEmpire', '#AI', '#StartupFrance']
    },
    {
      date: '02/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 60-second tutorial:\n\nHow to create an AI blog in 5 minutes with AI Empire:\n\n1. Choose NeuraBlog (€19)\n2. Install with npx\n3. Configure your APIs\n4. Deploy on Vercel\n\nThat\'s it! ✅\n\n#AIEmpire #NextJS #Tutorial',
      hashtags: ['#AIEmpire', '#NextJS', '#Tutorial']
    },
    {
      date: '02/03',
      time: '15:00',
      platform: 'Instagram',
      type: 'Carousel',
      content: '🎨 Carousel: "5 templates to launch your SaaS in 2025"\n\nSlide 1: NeuraBlog — Premium blog\nSlide 2: NeuraStore — E-commerce\nSlide 3: NeuraPortfolio — Portfolio\nSlide 4: Full bundle — 6 templates\nSlide 5: CTA — Get started now\n\n#AIEmpire #SaaS #Templates',
      hashtags: ['#AIEmpire', '#SaaS', '#Templates']
    },
    {
      date: '03/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Poll',
      content: '📊 Poll: How much do you pay for your AI API?\n\nA) €0-50/month\nB) €50-200/month\nC) €200+/month\nD) No AI API yet\n\n(We have a solution for every option 😏)\n\n#AIEmpire #AI',
      hashtags: ['#AIEmpire', '#AI']
    },
    {
      date: '03/03',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Question of the day:\n\nWhat\'s your biggest challenge with AI?\n\nA) Understanding how to use it\nB) Finding reliable APIs\nC) Reducing costs\nD) Integrating it into my product\n\nShare in the comments! 👇',
      hashtags: ['#AIEmpire', '#AI', '#Community']
    },
    {
      date: '04/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 Thread: "5 tips to cut your SaaS costs with AI"\n\n1/ Use free APIs (Groq, Gemini)\n2/ Integrate AI Empire (templates + APIs)\n3/ Automate support with an AI chatbot\n4/ Generate content with GPT-4\n5/ Analyze your data with AI\n\n#AIEmpire #SaaS',
      hashtags: ['#AIEmpire', '#SaaS']
    },
    {
      date: '04/03',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Case study: How InnoveTech cut its AI costs by 70%\n\nBefore AI Empire:\n→ €3,000/month on third-party APIs\n→ 3 months of development\n→ Limited support\n\nAfter AI Empire:\n→ €900/month (-70%)\n→ 24 hours of development\n→ 24/7 support\n\nResult: €25,000 saved in 1 year.\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '05/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Meme',
      content: 'Me: "I\'m not going to use AI"\n\nAlso me: *adds 47 AI features in 1 hour with AI Empire*\n\n😂\n\n#AIEmpire #DevLife #AI',
      hashtags: ['#AIEmpire', '#DevLife', '#AI']
    },
    // WEEK 2
    {
      date: '08/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Launch',
      content: '🚀 NEW: NeuraStore v2 is LIVE!\n\n✅ Redesigned\n✅ 2x performance\n✅ New e-commerce features\n\nPrice: €29 (-40% for 72h)\n\nCode: NEURASTORE40\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Launch',
      hashtags: ['#AIEmpire', '#Launch']
    },
    {
      date: '09/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Product',
      content: '📦 Introducing: NeuraStore v2\n\nThe most complete e-commerce template for Next.js 14:\n\n→ Smart shopping cart\n→ Secure Stripe payments\n→ Professional admin dashboard\n→ Responsive design + dark mode\n\nPrice: €29 (-40% launch discount)\n\n5,000+ developers trust us.\n\n#AIEmpire #Ecommerce',
      hashtags: ['#AIEmpire', '#Ecommerce']
    },
    {
      date: '10/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Thread: "How I launched an e-commerce store in 24h with €0 infra budget"\n\n1/ AI Empire provided NeuraStore (€29)\n2/ I connected Stripe in 5 minutes\n3/ I deployed on Vercel in 3 minutes\n4/ I had my e-commerce store in 24h\n5/ Total cost: €29\n\n#AIEmpire #BuildInPublic',
      hashtags: ['#AIEmpire', '#BuildInPublic']
    },
    // WEEK 3
    {
      date: '15/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '📊 Monthly recap:\n\n✅ 500+ new users\n✅ 100+ templates sold\n✅ 98% customer satisfaction\n\nThank you to the community! 🙏\n\n#AIEmpire #Milestone',
      hashtags: ['#AIEmpire', '#Milestone']
    },
    {
      date: '16/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Founder Story',
      content: '💡 "I quit my job to build AI Empire. Here\'s why."\n\nThe French market needs a local alternative to American AI APIs.\n\nAI Empire is that alternative:\n→ French-first\n→ French support\n→ EUR billing\n→ Native GDPR compliance\n\n5,000+ developers trust us.\n\n#AIEmpire #FounderStory',
      hashtags: ['#AIEmpire', '#FounderStory']
    },
    // WEEK 4
    {
      date: '22/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Teaser',
      content: '👀 Something big is coming...\n\n📅 [DATE]\n🎁 [HINT]\n\nStay tuned.\n\n#AIEmpire #Teaser',
      hashtags: ['#AIEmpire', '#Teaser']
    },
    {
      date: '25/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'CTA',
      content: '🎯 Last day to grab the launch offer!\n\n-30% on all templates\nCode: LAUNCH30\n⏰ Expires at midnight\n\nDon\'t miss it!\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #LastChance',
      hashtags: ['#AIEmpire', '#LastChance']
    }
  ],
  metrics: {
    totalPosts: 16,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 0.57
  }
}

// ============================================================
// WEEKLY SCHEDULE
// ============================================================
export const weeklyPostingSchedule: ContentCalendar = {
  id: 'cal_weekly',
  name: 'Weekly Schedule — AI Empire',
  period: 'Typical week',
  type: 'weekly',
  posts: [
    // MONDAY
    {
      date: 'Monday',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 Monday motivation: An AI tip to boost your productivity\n\n[TIP OF THE DAY]\n\n#AIEmpire #MondayMotivation',
      hashtags: ['#AIEmpire', '#MondayMotivation']
    },
    {
      date: 'Monday',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: '💡 [THOUGHT LEADERSHIP TOPIC]\n\n[PROFESSIONAL CONTENT]\n\n#AIEmpire #ThoughtLeadership',
      hashtags: ['#AIEmpire', '#ThoughtLeadership']
    },
    // TUESDAY
    {
      date: 'Tuesday',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 Quick tutorial: [Topic]\n\n1. Step 1\n2. Step 2\n3. Step 3\n\n[CTA]\n\n#AIEmpire #Tutorial',
      hashtags: ['#AIEmpire', '#Tutorial']
    },
    {
      date: 'Tuesday',
      time: '15:00',
      platform: 'Instagram',
      type: 'Reel',
      content: '🎬 30s Reel: "How to [ACTION] with AI Empire"\n\n[DEMONSTRATION]\n\n#AIEmpire #Reel',
      hashtags: ['#AIEmpire', '#Reel']
    },
    // WEDNESDAY
    {
      date: 'Wednesday',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 [VALUE CONTENT]\n\n[TIP OR ADVICE]\n\n#AIEmpire #Value',
      hashtags: ['#AIEmpire', '#Value']
    },
    {
      date: 'Wednesday',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Case study: [CLIENT]\n\nBefore: [SITUATION]\nAfter: [RESULT]\n\n[KEY TAKEAWAYS]\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: 'Wednesday',
      time: '18:00',
      platform: 'Facebook',
      type: 'Video',
      content: '📹 2min video: "How to [Topic] with AI Empire"\n\n[VIDEO TUTORIAL]\n\n#AIEmpire #Video',
      hashtags: ['#AIEmpire', '#Video']
    },
    // THURSDAY
    {
      date: 'Thursday',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Thread: "[Topic]"\n\n1/ [Point 1]\n2/ [Point 2]\n3/ [Point 3]\n\n#AIEmpire #Thread',
      hashtags: ['#AIEmpire', '#Thread']
    },
    {
      date: 'Thursday',
      time: '15:00',
      platform: 'LinkedIn',
      type: 'Data',
      content: '📊 [DATA OR STATISTICS]\n\n[ANALYSIS]\n\n[IMPLICATIONS]\n\n#AIEmpire #Data',
      hashtags: ['#AIEmpire', '#Data']
    },
    // FRIDAY
    {
      date: 'Friday',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '🏆 [CUSTOMER TESTIMONIAL]\n\n"How AI Empire [BENEFIT]"\n\n[SOCIAL PROOF]\n\n#AIEmpire #SocialProof',
      hashtags: ['#AIEmpire', '#SocialProof']
    },
    {
      date: 'Friday',
      time: '18:00',
      platform: 'Twitter/X',
      type: 'Week Recap',
      content: '🔄 Weekly recap:\n\n✅ [ACHIEVEMENT 1]\n✅ [ACHIEVEMENT 2]\n✅ [ACHIEVEMENT 3]\n\nNext week: [PREVIEW]\n\n#AIEmpire #Recap',
      hashtags: ['#AIEmpire', '#Recap']
    },
    // SATURDAY
    {
      date: 'Saturday',
      time: '10:00',
      platform: 'Instagram',
      type: 'Story',
      content: '📸 Story: "A day in the life of an indie hacker"\n\n[BEHIND THE SCENES]\n\n#AIEmpire #IndieHacker',
      hashtags: ['#AIEmpire', '#IndieHacker']
    },
    // SUNDAY
    {
      date: 'Sunday',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Sunday question:\n\nWhat are you going to build this week?\n\nShare in the comments! 👇\n\n#AIEmpire #Community',
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
// HOLIDAY CALENDAR
// ============================================================
export const holidayContentPlan: HolidayPlan[] = [
  {
    name: 'Valentine\'s Day',
    date: '14/02',
    daysBefore: 7,
    content: [
      {
        date: '07/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '💕 Valentine\'s Day is coming...\n\nSomething special is coming for developers...\n\n#AIEmpire #ValentinesDay',
        hashtags: ['#AIEmpire', '#ValentinesDay']
      },
      {
        date: '14/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '💕 AI Empire Valentine\'s Day offer:\n\n-20% on all templates with code AMOUR20\n\nBecause the best gift is a SaaS that works ❤️\n\n⏰ 24 hours only\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #ValentinesDay',
        hashtags: ['#AIEmpire', '#ValentinesDay']
      },
      {
        date: '14/02',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Fun',
        content: '💕 "Love is finding someone who shares your passion... for code."\n\n— A lonely developer\n\nHappy Valentine\'s Day to all devs!\n\n#AIEmpire #ValentinesDay #DevLife',
        hashtags: ['#AIEmpire', '#ValentinesDay', '#DevLife']
      }
    ]
  },
  {
    name: 'Labor Day',
    date: '01/05',
    daysBefore: 3,
    content: [
      {
        date: '28/04',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📅 May 1st is coming...\n\nReady to work... less? 🤔\n\n#AIEmpire #LaborDay',
        hashtags: ['#AIEmpire', '#LaborDay']
      },
      {
        date: '01/05',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎉 Happy Labor Day!\n\nToday, we celebrate the developers building the future.\n\nThank you to all our 5,000+ users! 🙏\n\n#AIEmpire #LaborDay #DevLife',
        hashtags: ['#AIEmpire', '#LaborDay', '#DevLife']
      }
    ]
  },
  {
    name: 'Music Festival',
    date: '21/06',
    daysBefore: 5,
    content: [
      {
        date: '16/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎵 The Music Festival is coming...\n\nWhat if we made music... with code? 🎶\n\n#AIEmpire #MusicFestival',
        hashtags: ['#AIEmpire', '#MusicFestival']
      },
      {
        date: '21/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Fun',
        content: '🎵 Happy Music Festival!\n\nOur playlist of the day:\n1. "Bohemian Rhapsody" — Queen\n2. "AI Empire Theme" — Our imagination\n3. "The sound of code compiling" — All devs\n\n🎶\n\n#AIEmpire #MusicFestival',
        hashtags: ['#AIEmpire', '#MusicFestival']
      }
    ]
  },
  {
    name: 'National Day',
    date: '14/07',
    daysBefore: 7,
    content: [
      {
        date: '07/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🇫🇷 Bastille Day is coming...\n\nAnd we have something special to celebrate French tech! 🇫🇷\n\n#AIEmpire #NationalDay',
        hashtags: ['#AIEmpire', '#NationalDay']
      },
      {
        date: '14/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🇫🇷 Happy Bastille Day!\n\nToday, we celebrate French tech:\n→ 5,000+ developers\n→ 200+ SaaS launched\n→ 100% made in France\n\nLong live French tech! 🇫🇷🚀\n\n#AIEmpire #NationalDay #FranceTech',
        hashtags: ['#AIEmpire', '#NationalDay', '#FranceTech']
      },
      {
        date: '14/07',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Patriotic',
        content: '🇫🇷 Bastille Day: Time for French tech!\n\nAI Empire is proud to represent French innovation:\n→ 5,000+ developers\n→ 200+ SaaS launched\n→ French support\n→ EUR billing\n→ Native GDPR compliance\n\nLong live French tech! 🇫🇷\n\n#AIEmpire #NationalDay #FranceTech',
        hashtags: ['#AIEmpire', '#NationalDay', '#FranceTech']
      }
    ]
  },
  {
    name: 'Back to School',
    date: '02/09',
    daysBefore: 14,
    content: [
      {
        date: '19/08',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📚 Back to school is coming...\n\nWhat if you learned something new?\n\nWe\'re preparing something special for you... 👀\n\n#AIEmpire #BackToSchool',
        hashtags: ['#AIEmpire', '#BackToSchool']
      },
      {
        date: '02/09',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '📚 Back to School 2025: Learn to build your SaaS!\n\nSpecial back-to-school offer:\n-25% on all templates\nCode: RENTREE25\n\n⏰ From September 2 to 15\n\nPackage includes:\n→ 6 Next.js 14 templates\n→ Complete tutorials\n→ Priority support\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BackToSchool',
        hashtags: ['#AIEmpire', '#BackToSchool']
      }
    ]
  },
  {
    name: 'Black Friday',
    date: '28/11',
    daysBefore: 14,
    content: [
      {
        date: '14/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🖤 Black Friday is coming...\n\nGet ready. It\'s the deal of the year.\n\n👀\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '21/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '⏰ 1 week until AI Empire Black Friday!\n\n-50% ON EVERYTHING.\n\nMark your calendar:\n📅 November 28\n\nSign up to be notified:\n👉 ai-empire-steel.vercel.app/black-friday\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '28/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Launch',
        content: '🖤 BLACK FRIDAY AI EMPIRE — IT\'S ON! 🖤\n\n-50% ON EVERYTHING FOR 5 DAYS!\n\n📦 Templates from €9.50 to €149.50\n📦 Pro Plan -50%\n📦 First 50 = FREE bonus template\n\nCode: BLACKFRIDAY50\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      }
    ]
  },
  {
    name: 'Christmas',
    date: '25/12',
    daysBefore: 10,
    content: [
      {
        date: '15/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎄 Christmas is coming...\n\nAnd we have a gift for you...\n\n🎁\n\n#AIEmpire #Christmas',
        hashtags: ['#AIEmpire', '#Christmas']
      },
      {
        date: '20/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '🎄 5 days until Christmas!\n\nOur advent calendar:\n→ 1 free template every day\n→ Exclusive promo codes\n→ Surprise content\n\nJoin us!\n\n#AIEmpire #Christmas #AdventCalendar',
        hashtags: ['#AIEmpire', '#Christmas', '#AdventCalendar']
      },
      {
        date: '25/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎄 Merry Christmas! 🎄\n\nThank you to all our 5,000+ users!\n\nGift: -30% on all templates\nCode: NOEL2025\n\nHappy holidays! 🎅\n\n#AIEmpire #Christmas',
        hashtags: ['#AIEmpire', '#Christmas']
      }
    ]
  },
  {
    name: 'New Year',
    date: '01/01',
    daysBefore: 7,
    content: [
      {
        date: '25/12',
        time: '18:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎆 2025 is coming...\n\nReady to launch your SaaS?\n\nWe\'re preparing something special for you...\n\n#AIEmpire #NewYear',
        hashtags: ['#AIEmpire', '#NewYear']
      },
      {
        date: '01/01',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎆 Happy New Year 2025! 🎆\n\n2025 is YOUR year. The year you launch your SaaS.\n\nNew Year offer:\n-25% + 500 free credits\nCode: NOUVELAN2025\n\nMake this year the one!\n\n#AIEmpire #NewYear #2025',
        hashtags: ['#AIEmpire', '#NewYear', '#2025']
      },
      {
        date: '01/01',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Motivational',
        content: '🎆 New year, new SaaS.\n\n2025 is the year you take action.\n\nAI Empire is here to support you:\n→ Ready-to-use templates\n→ Free AI APIs\n→ 24/7 support\n\nJoin 5,000+ developers who have already launched their SaaS.\n\nHappy New Year! 🎆\n\n#AIEmpire #NewYear #2025',
        hashtags: ['#AIEmpire', '#NewYear', '#2025']
      }
    ]
  }
]

// ============================================================
// UTILITY FUNCTIONS
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
