import { verifyCronAuth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function GET(request: NextRequest) {
  try {
    if (!verifyCronAuth(request)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const results = await Promise.allSettled([
      sendWelcomeEmails(),
      processOnboardingSequence(),
    ])

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      welcome: results[0].status === 'fulfilled' ? results[0].value : { error: 'Failed' },
      onboarding: results[1].status === 'fulfilled' ? results[1].value : { error: 'Failed' },
    })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

async function sendWelcomeEmails() {
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)

  const newUsers = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.apiUser.findMany({
      where: {
        createdAt: { gte: oneDayAgo },
      },
      select: { id: true, email: true, createdAt: true },
    })
  }, [])

  if (newUsers.length === 0) {
    return { newUsers: 0, emailsSent: 0 }
  }

  const existingLogs = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.emailLog.findMany({
      where: {
        to: { in: newUsers.map(u => u.email) },
        subject: { contains: 'Welcome to AI Empire' },
      },
      select: { to: true },
    })
  }, [])

  const alreadySent = new Set(existingLogs.map(l => l.to))
  const toSend = newUsers.filter(u => !alreadySent.has(u.email))

  let sent = 0
  let errors = 0

  for (const user of toSend) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      const html = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">AI Empire</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Welcome aboard!</p>
            </div>
            <div style="padding: 32px;">
              <h2 style="margin: 0 0 16px; color: #1e293b;">Welcome to AI Empire!</h2>
              <p style="color: #64748b; margin: 0 0 16px;">
                You now have access to:
              </p>
              <ul style="color: #64748b; padding-left: 20px; margin: 0 0 24px;">
                <li style="margin-bottom: 8px;">100 free AI credits</li>
                <li style="margin-bottom: 8px;">GPT-4, Groq, and Gemini APIs</li>
                <li style="margin-bottom: 8px;">Professional Next.js 14 templates</li>
                <li style="margin-bottom: 8px;">Technical support</li>
              </ul>
              <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                <p style="margin: 0; color: #166534; font-weight: 600;">Your next step: Make your first API call in 2 minutes</p>
              </div>
              <h3 style="color: #1e293b; margin: 0 0 12px;">Quick start:</h3>
              <ol style="color: #64748b; padding-left: 20px; margin: 0 0 24px;">
                <li style="margin-bottom: 8px;">Go to your dashboard</li>
                <li style="margin-bottom: 8px;">Copy your API key</li>
                <li style="margin-bottom: 8px;">Make your first API call</li>
              </ol>
              <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
                Launch my first test
              </a>
            </div>
            <div style="background: #f1f5f9; padding: 24px; text-align: center;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0;">
                &copy; ${new Date().getFullYear()} AI Empire. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `

      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
        to: user.email,
        subject: 'Welcome to AI Empire — Your AI API is ready',
        html,
      })

      await safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        await prisma.emailLog.create({
          data: {
            to: user.email,
            subject: 'Welcome to AI Empire — Your AI API is ready',
            status: 'sent',
          },
        })
      }, null)

      sent++
    } catch {
      errors++
    }
  }

  return { newUsers: toSend.length, emailsSent: sent, errors }
}

async function processOnboardingSequence() {
  const now = new Date()
  const dayMs = 24 * 60 * 60 * 1000

  const allUsers = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.apiUser.findMany({
      select: { id: true, email: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
      take: 500,
    })
  }, [])

  const sequenceEmails = [
    { day: 1, subject: '3 tips to get the most out of AI Empire', template: 'tips' },
    { day: 2, subject: 'The perfect template for your project', template: 'templates' },
    { day: 3, subject: 'How to launch a SaaS quickly with AI Empire', template: 'saas' },
    { day: 5, subject: '20% off your first template', template: 'discount' },
  ]

  let queued = 0

  for (const user of allUsers) {
    const daysSinceSignup = Math.floor((now.getTime() - user.createdAt.getTime()) / dayMs)

    for (const seqEmail of sequenceEmails) {
      if (daysSinceSignup !== seqEmail.day) continue

      const alreadySent = await safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        return prisma.emailLog.findFirst({
          where: { to: user.email, subject: seqEmail.subject },
        })
      }, null)

      if (alreadySent) continue

      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)

        const html = buildOnboardingHtml(seqEmail.template, user.email)

        await resend.emails.send({
          from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
          to: user.email,
          subject: seqEmail.subject,
          html,
        })

        await safeQuery(async () => {
          const { prisma } = await import('@/lib/db')
          await prisma.emailLog.create({
            data: { to: user.email, subject: seqEmail.subject, status: 'sent' },
          })
        }, null)

        queued++
      } catch {
        // Skip on error
      }
    }
  }

  return { usersChecked: allUsers.length, emailsQueued: queued }
}

function buildOnboardingHtml(template: string, email: string): string {
  const base = (content: string) => `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 40px 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">AI Empire</h1>
        </div>
        <div style="padding: 32px;">${content}</div>
        <div style="background: #f1f5f9; padding: 24px; text-align: center;">
          <p style="color: #94a3b8; font-size: 13px; margin: 0;">&copy; ${new Date().getFullYear()} AI Empire. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>`

  switch (template) {
    case 'tips':
      return base(`
        <h2 style="margin: 0 0 16px; color: #1e293b;">3 tips to get the most out of AI Empire</h2>
        <p style="color: #64748b; margin: 0 0 16px;">Yesterday, you created your account. Today, here are 3 tips to go further:</p>
        <div style="border-left: 4px solid #4F46E5; padding-left: 16px; margin-bottom: 16px;">
          <h4 style="color: #1e293b; margin: 0 0 4px;">Tip 1: Explore the templates</h4>
          <p style="color: #64748b; margin: 0; font-size: 14px;">Start with NeuraBlog ($19) or NeuraStore ($29).</p>
        </div>
        <div style="border-left: 4px solid #7C3AED; padding-left: 16px; margin-bottom: 16px;">
          <h4 style="color: #1e293b; margin: 0 0 4px;">Tip 2: Use the AI APIs</h4>
          <p style="color: #64748b; margin: 0; font-size: 14px;">Generate content, analyze text, create a chatbot. Free until 100 credits.</p>
        </div>
        <div style="border-left: 4px solid #2563eb; padding-left: 16px; margin-bottom: 24px;">
          <h4 style="color: #1e293b; margin: 0 0 4px;">Tip 3: Integrate into your project</h4>
          <p style="color: #64748b; margin: 0; font-size: 14px;">Our tutorials show how to integrate in 5 minutes.</p>
        </div>
        <a href="${appUrl}/docs" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">View tutorials</a>
      `)
    case 'templates':
      return base(`
        <h2 style="margin: 0 0 16px; color: #1e293b;">The perfect template for your project</h2>
        <p style="color: #64748b; margin: 0 0 16px;">Want to build a SaaS? Here's what you need:</p>
        <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
          <p style="margin: 0; color: #1e293b; font-weight: 600;">E-commerce: NeuraStore ($29)</p>
          <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">Cart, Stripe payments, admin dashboard.</p>
        </div>
        <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
          <p style="margin: 0; color: #1e293b; font-weight: 600;">Blog: NeuraBlog ($19)</p>
          <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">SEO optimization, commenting, newsletter.</p>
        </div>
        <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <p style="margin: 0; color: #1e293b; font-weight: 600;">Portfolio: NeuraPortfolio ($29)</p>
          <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">Animations, forms, dark mode.</p>
        </div>
        <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
          <p style="margin: 0; color: #7c3aed; font-weight: 600;">Use code WELCOME10 for 10% off</p>
        </div>
        <a href="${appUrl}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Discover templates</a>
      `)
    case 'saas':
      return base(`
        <h2 style="margin: 0 0 16px; color: #1e293b;">How to launch a SaaS quickly with AI Empire</h2>
        <p style="color: #64748b; margin: 0 0 16px;">Launching a SaaS no longer requires months of development.</p>
        <ul style="color: #64748b; padding-left: 20px; margin: 0 0 24px;">
          <li style="margin-bottom: 8px;">Complete e-commerce site in 24h with NeuraStore ($29)</li>
          <li style="margin-bottom: 8px;">Stripe integrated and ready for payments</li>
          <li style="margin-bottom: 8px;">Deploy on Vercel in a few clicks</li>
          <li style="margin-bottom: 8px;">Admin dashboard included</li>
        </ul>
        <a href="${appUrl}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">See templates</a>
      `)
    case 'discount':
      return base(`
        <h2 style="margin: 0 0 16px; color: #1e293b;">20% off your first template</h2>
        <p style="color: #64748b; margin: 0 0 16px;">Thanks for your loyalty! Here's a welcome discount:</p>
        <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
          <p style="margin: 0; color: #c2410c; font-weight: 600; font-size: 18px;">20% off your first template</p>
          <p style="margin: 8px 0 0; color: #c2410c;">Code: WELCOME20</p>
        </div>
        <a href="${appUrl}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Get 20% off</a>
      `)
    default:
      return base(`<p style="color: #64748b;">Check out what's new at AI Empire.</p>`)
  }
}
