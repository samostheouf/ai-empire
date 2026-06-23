import { prisma } from '@/lib/db'

interface ABTestConfig {
  testId: string
  variants: string[]
  weights?: number[]
}

function hashVisitorId(visitorId: string, testId: string): number {
  let hash = 0
  const str = visitorId + testId
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}

export async function assignVariant(config: ABTestConfig, visitorId: string): Promise<string> {
  const { testId, variants, weights } = config

  const existing = await prisma.aBTestVariant.findUnique({
    where: { testId_visitorId: { testId, visitorId } },
  })

  if (existing) return existing.variantName

  const totalWeight = weights ? weights.reduce((a, b) => a + b, 0) : variants.length
  const hash = hashVisitorId(visitorId, testId)
  const slot = hash % totalWeight

  let cumulative = 0
  let selectedVariant = variants[0]
  for (let i = 0; i < variants.length; i++) {
    cumulative += weights ? weights[i] : 1
    if (slot < cumulative) {
      selectedVariant = variants[i]
      break
    }
  }

  await prisma.aBTestVariant.create({
    data: { testId, variantName: selectedVariant, visitorId },
  })

  return selectedVariant
}

export async function recordConversion(testId: string, visitorId: string): Promise<boolean> {
  try {
    const updated = await prisma.aBTestVariant.updateMany({
      where: { testId, visitorId, converted: false },
      data: { converted: true, convertedAt: new Date() },
    })
    return updated.count > 0
  } catch {
    return false
  }
}

function standardNormalCDF(x: number): number {
  const a1 = 0.254829592
  const a2 = -0.284496736
  const a3 = 1.421413741
  const a4 = -1.453152027
  const a5 = 1.061405429
  const p = 0.3275911
  const sign = x < 0 ? -1 : 1
  const absX = Math.abs(x) / Math.sqrt(2)
  const t = 1.0 / (1.0 + p * absX)
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX)
  return 0.5 * (1.0 + sign * y)
}

function normalInverseCDF(p: number): number {
  if (p <= 0) return -Infinity
  if (p >= 1) return Infinity
  if (p === 0.5) return 0

  const a = [
    -3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02,
    1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00,
  ]
  const b = [
    -5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02,
    6.680131188771972e+01, -1.328068155288572e+01,
  ]
  const c = [
    -7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00,
    -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00,
  ]
  const d = [
    7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00,
    3.754408661907416e+00,
  ]

  const pLow = 0.02425
  const pHigh = 1 - pLow
  let q: number, r: number

  if (p < pLow) {
    q = Math.sqrt(-2 * Math.log(p))
    return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) /
           ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1)
  } else if (p <= pHigh) {
    q = p - 0.5
    r = q * q
    return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q /
           (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1)
  } else {
    q = Math.sqrt(-2 * Math.log(1 - p))
    return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) /
            ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1)
  }
}

interface ConversionInterval {
  rate: number
  ci95Lower: number
  ci95Upper: number
}

function calculateConfidenceInterval(conversions: number, visitors: number): ConversionInterval {
  if (visitors === 0) return { rate: 0, ci95Lower: 0, ci95Upper: 0 }
  const p = conversions / visitors
  const z = normalInverseCDF(0.975)
  const se = Math.sqrt((p * (1 - p)) / visitors)
  return {
    rate: p,
    ci95Lower: Math.max(0, p - z * se),
    ci95Upper: Math.min(1, p + z * se),
  }
}

function calculatePValue(
  conversionsA: number, visitorsA: number,
  conversionsB: number, visitorsB: number
): number {
  if (visitorsA === 0 || visitorsB === 0) return 1
  const pA = conversionsA / visitorsA
  const pB = conversionsB / visitorsB
  const pPool = (conversionsA + conversionsB) / (visitorsA + visitorsB)
  if (pPool === 0 || pPool === 1) return 1
  const se = Math.sqrt(pPool * (1 - pPool) * (1/visitorsA + 1/visitorsB))
  if (se === 0) return 1
  const z = Math.abs(pA - pB) / se
  return 2 * (1 - standardNormalCDF(z))
}

interface VariantResult {
  variant: string
  totalVisitors: number
  conversions: number
  conversionRate: string
  confidenceInterval: ConversionInterval
}

interface SignificanceResult {
  variants: VariantResult[]
  isSignificant: boolean
  pValue: number
  winner: string | null
  confidenceLevel: number
}

export async function getTestResults(testId: string): Promise<VariantResult[]> {
  const variants = await prisma.aBTestVariant.findMany({
    where: { testId },
  })

  const grouped: Record<string, { total: number; converted: number }> = {}
  for (const v of variants) {
    if (!grouped[v.variantName]) grouped[v.variantName] = { total: 0, converted: 0 }
    grouped[v.variantName].total++
    if (v.converted) grouped[v.variantName].converted++
  }

  return Object.entries(grouped).map(([variantName, stats]) => {
    const ci = calculateConfidenceInterval(stats.converted, stats.total)
    return {
      variant: variantName,
      totalVisitors: stats.total,
      conversions: stats.converted,
      conversionRate: stats.total > 0
        ? ((stats.converted / stats.total) * 100).toFixed(2) + '%'
        : '0%',
      confidenceInterval: {
        rate: +(ci.rate * 100).toFixed(2),
        ci95Lower: +(ci.ci95Lower * 100).toFixed(2),
        ci95Upper: +(ci.ci95Upper * 100).toFixed(2),
      },
    }
  })
}

export async function getSignificanceResult(
  testId: string,
  significanceLevel: number = 0.05
): Promise<SignificanceResult> {
  const variants = await getTestResults(testId)
  if (variants.length < 2) {
    return { variants, isSignificant: false, pValue: 1, winner: null, confidenceLevel: 0 }
  }

  let bestPValue = 1
  let winner: string | null = null
  let bestRate = -1

  for (const v of variants) {
    if (v.conversionRate !== '0%' && parseFloat(v.confidenceInterval.rate as unknown as string) > bestRate) {
      bestRate = v.confidenceInterval.rate as unknown as number
      winner = v.variant
    }
  }

  for (let i = 0; i < variants.length; i++) {
    for (let j = i + 1; j < variants.length; j++) {
      const pValue = calculatePValue(
        variants[i].conversions, variants[i].totalVisitors,
        variants[j].conversions, variants[j].totalVisitors
      )
      if (pValue < bestPValue) bestPValue = pValue
    }
  }

  const isSignificant = bestPValue < significanceLevel
  const confidenceLevel = +((1 - bestPValue) * 100).toFixed(1)

  if (!isSignificant) winner = null

  return { variants, isSignificant, pValue: +bestPValue.toFixed(6), winner, confidenceLevel }
}
