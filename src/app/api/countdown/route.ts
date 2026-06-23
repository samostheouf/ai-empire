import { NextResponse } from 'next/server'

export async function GET() {
  const now = new Date()
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
  const endOfWeek = new Date(now)
  endOfWeek.setDate(now.getDate() + (7 - now.getDay()))
  endOfWeek.setHours(23, 59, 59, 0)

  const deadline = endOfWeek < endOfMonth ? endOfWeek : endOfMonth

  return NextResponse.json({
    deadline: deadline.toISOString(),
    label: 'Offre de lancement',
  }, {
    headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
  })
}
