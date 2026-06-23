import { NextResponse } from 'next/server'
import { getLocalizedAds, getAdsByPlatform, getSupportedLanguages, type SupportedLanguage } from '@/lib/marketing/ads'
import { getLocalizedSocialPosts } from '@/lib/marketing/social/index'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const lang = (url.searchParams.get('lang') || 'en') as SupportedLanguage
    const platform = url.searchParams.get('platform') as 'google' | 'facebook' | 'linkedin' | null
    const type = url.searchParams.get('type')

    const languages = getSupportedLanguages()

    if (!languages.includes(lang)) {
      return NextResponse.json({
        error: `Language '${lang}' not supported`,
        supported: languages,
      }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    let ads = platform
      ? getAdsByPlatform(lang, platform)
      : getLocalizedAds(lang)

    if (type) {
      ads = ads.filter(a => a.type === type)
    }

    const social = getLocalizedSocialPosts(lang)

    return NextResponse.json({
      lang,
      totalAds: ads.length,
      totalSocialPosts: social ? (social.twitter?.length || 0) + (social.linkedin?.length || 0) + (social.facebook?.length || 0) : 0,
      ads,
      social,
      platforms: ['google', 'facebook', 'linkedin'],
      adTypes: ['search', 'display', 'performance-max', 'awareness', 'conversion', 'retargeting', 'sponsored', 'message', 'dynamic'],
      supportedLanguages: languages,
    })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

export async function POST(request: Request) {
  try {
    let body: { lang?: string; platform?: string; type?: string; count?: number }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid body' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    const { lang = 'en', platform, type, count = 5 } = body
    const languages = getSupportedLanguages()
    const langKey = lang as SupportedLanguage

    if (!languages.includes(langKey)) {
      return NextResponse.json({ error: `Language '${lang}' not supported`, supported: languages }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    let ads = platform ? getAdsByPlatform(langKey, platform as 'google' | 'facebook' | 'linkedin') : getLocalizedAds(langKey)
    if (type) ads = ads.filter(a => a.type === type)

    const selected = ads.slice(0, Math.min(count, ads.length))

    const social = getLocalizedSocialPosts(lang)

    return NextResponse.json({
      lang,
      selected,
      socialPreview: social ? {
        twitter: social.twitter?.slice(0, 2),
        linkedin: social.linkedin?.slice(0, 1),
      } : null,
      totalAvailable: ads.length,
      campaignReady: selected.length > 0,
    })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}
