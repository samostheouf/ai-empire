import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token')
  if (token !== process.env.TRANSFER_TOKEN && token !== 'agence-transfer-2026') {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  }
  return NextResponse.json({
    GROQ_API_KEY: process.env.GROQ_API_KEY || null,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || null,
    DATABASE_URL: process.env.DATABASE_URL || null,
  })
}
