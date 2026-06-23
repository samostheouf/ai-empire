import { twitterPosts as twitterEn, linkedinPosts as linkedinEn, facebookPosts as facebookEn, redditPosts as redditEn } from './en'
import { twitterPosts as twitterFr, linkedinPosts as linkedinFr, facebookPosts as facebookFr, redditPosts as redditFr } from './fr'
import { twitterPosts as twitterEs, linkedinPosts as linkedinEs, facebookPosts as facebookEs, redditPosts as redditEs } from './es'
import { twitterPosts as twitterDe, linkedinPosts as linkedinDe, facebookPosts as facebookDe, redditPosts as redditDe } from './de'
import { twitterPosts as twitterJa, linkedinPosts as linkedinJa, facebookPosts as facebookJa, redditPosts as redditJa } from './ja'
import { twitterPosts as twitterZh, linkedinPosts as linkedinZh, facebookPosts as facebookZh, redditPosts as redditZh } from './zh'
import { twitterPosts as twitterIt, linkedinPosts as linkedinIt, facebookPosts as facebookIt, redditPosts as redditIt } from './it'
import { twitterPosts as twitterPt, linkedinPosts as linkedinPt, facebookPosts as facebookPt, redditPosts as redditPt } from './pt'
import { twitterPosts as twitterKo, linkedinPosts as linkedinKo, facebookPosts as facebookKo, redditPosts as redditKo } from './ko'
import { twitterPosts as twitterAr, linkedinPosts as linkedinAr, facebookPosts as facebookAr, redditPosts as redditAr } from './ar'

export type Post = {
  id: number
  content: string
  hashtags: string[]
  cta: string
  emojis: string[]
}

export type SocialPosts = {
  twitter: Post[]
  linkedin: Post[]
  facebook: Post[]
  reddit: Post[]
}

export type SupportedLanguage = 'en' | 'fr' | 'es' | 'de' | 'ja' | 'zh' | 'it' | 'pt' | 'ko' | 'ar'

const postsByLang: Record<SupportedLanguage, SocialPosts> = {
  en: { twitter: twitterEn, linkedin: linkedinEn, facebook: facebookEn, reddit: redditEn },
  fr: { twitter: twitterFr, linkedin: linkedinFr, facebook: facebookFr, reddit: redditFr },
  es: { twitter: twitterEs, linkedin: linkedinEs, facebook: facebookEs, reddit: redditEs },
  de: { twitter: twitterDe, linkedin: linkedinDe, facebook: facebookDe, reddit: redditDe },
  ja: { twitter: twitterJa, linkedin: linkedinJa, facebook: facebookJa, reddit: redditJa },
  zh: { twitter: twitterZh, linkedin: linkedinZh, facebook: facebookZh, reddit: redditZh },
  it: { twitter: twitterIt, linkedin: linkedinIt, facebook: facebookIt, reddit: redditIt },
  pt: { twitter: twitterPt, linkedin: linkedinPt, facebook: facebookPt, reddit: redditPt },
  ko: { twitter: twitterKo, linkedin: linkedinKo, facebook: facebookKo, reddit: redditKo },
  ar: { twitter: twitterAr, linkedin: linkedinAr, facebook: facebookAr, reddit: redditAr },
}

export function getLocalizedSocialPosts(lang: string): SocialPosts {
  const locale = (lang || 'en').toLowerCase().split('-')[0] as SupportedLanguage
  return postsByLang[locale] || postsByLang.en
}

export function getTwitterPosts(lang: string = 'en'): Post[] {
  return getLocalizedSocialPosts(lang).twitter
}

export function getLinkedInPosts(lang: string = 'en'): Post[] {
  return getLocalizedSocialPosts(lang).linkedin
}

export function getFacebookPosts(lang: string = 'en'): Post[] {
  return getLocalizedSocialPosts(lang).facebook
}

export function getRedditPosts(lang: string = 'en'): Post[] {
  return getLocalizedSocialPosts(lang).reddit
}
