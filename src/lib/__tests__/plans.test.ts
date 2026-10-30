import { SUBSCRIPTION_PLANS, FREE_PLAN, planPriceEuros } from '@/lib/plans'

describe('plans', () => {
  it('pro price is 4900 cents', () => {
    expect(SUBSCRIPTION_PLANS.pro.price).toBe(4900)
  })
  it('business price is 14900 cents', () => {
    expect(SUBSCRIPTION_PLANS.business.price).toBe(14900)
  })
  it('free plan price is 0', () => {
    expect(FREE_PLAN.price).toBe(0)
  })
  it('planPriceEuros converts cents to euros', () => {
    expect(planPriceEuros(SUBSCRIPTION_PLANS.pro)).toBe(49)
    expect(planPriceEuros(SUBSCRIPTION_PLANS.business)).toBe(149)
    expect(planPriceEuros(undefined)).toBe(0)
  })
  it('all plans have required fields', () => {
    for (const key of Object.keys(SUBSCRIPTION_PLANS)) {
      const p = SUBSCRIPTION_PLANS[key]
      expect(p.id).toBeTruthy()
      expect(p.name).toBeTruthy()
      expect(p.price).toBeGreaterThanOrEqual(0)
      expect(p.interval).toBe('month')
    }
  })
})