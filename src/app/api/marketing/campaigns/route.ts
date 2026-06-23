import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getLocalizedSequences } from '@/lib/marketing/emails'
import { detectLocale } from '@/lib/marketing/email-i18n'
import { EMAIL_FROM } from '@/lib/email'
import { sanitizeInput } from '@/lib/input-validation'

const resend = new Resend(process.env.RESEND_API_KEY)
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function POST(request: Request) {
  const { authenticateApiKey } = await import('@/lib/auth')
  const auth = await authenticateApiKey(request)
  if (auth.error) return auth.error

  let body: { lang?: string; sequence?: string; day?: number; to?: string; test?: boolean }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }

  const { lang, sequence, day, to, test } = body
  const locale = detectLocale(lang)
  const sequences = getLocalizedSequences(locale)
  const targetSequence = sequences.find(s => s.type === sequence) || sequences[0]

  if (!targetSequence) {
    return NextResponse.json({ error: 'Sequence not found' }, { status: 404, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }

  const targetEmail = day !== undefined
    ? targetSequence.emails.find(e => e.day === day)
    : targetSequence.emails[0]

  if (!targetEmail) {
    return NextResponse.json({ error: 'Email not found for specified day' }, { status: 404, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }

  const recipient = to || 'test@neuraapi.com'

  try {
    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: recipient,
      subject: targetEmail.subject,
      html: `
<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 40px 20px; margin: 0;">
  <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
    </div>
    <div style="padding: 32px;">
      <div style="white-space: pre-wrap; color: #334155; font-size: 15px; line-height: 1.6;">${targetEmail.body}</div>
      <a href="${targetEmail.ctaUrl}" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 24px 0;">
        ${targetEmail.cta}
      </a>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
      <p style="color: #94a3b8; font-size: 12px; margin: 0; text-align: center;">
        <a href="${appUrl}" style="color: #94a3b8;">NeuraAPI</a>
      </p>
    </div>
  </div>
</body>
</html>`,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    return NextResponse.json({
      success: true,
      locale,
      sequence: targetSequence.type,
      day: targetEmail.day,
      subject: targetEmail.subject,
      to: recipient,
      test: !!test,
      id: data?.id,
    }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: msg }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

export async function GET() {
  try {
    return NextResponse.json({
      sequences: [
        { type: 'onboarding', name: 'Onboarding — 5 emails', trigger: 'New user registration' },
        { type: 'nurture', name: 'Nurture — 7 emails', trigger: 'Registered but no purchase' },
        { type: 'winback', name: 'Win-Back — 5 emails', trigger: 'Inactive 30 days' },
        { type: 'upsell', name: 'Upsell — 6 emails', trigger: 'Heavy API usage' },
      ],
      languages: ['fr', 'en', 'es', 'de', 'it', 'pt', 'ja', 'ko', 'zh', 'ar'],
      totalEmailsPerLang: 23,
      totalTranslations: 230,
    }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}
