import Stripe from 'stripe'

// Lazily construct the Stripe client so that merely importing this module
// (e.g. during Next.js "collect page data" at build time) does not throw
// when STRIPE_SECRET_KEY is absent. The client is created on first access.
let _stripe: Stripe | null = null
function getStripe(): Stripe {
  if (!_stripe) {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    if (!stripeSecretKey) {
      throw new Error(
        'Missing STRIPE_SECRET_KEY environment variable. ' +
          'Set it in your .env file or environment configuration.'
      )
    }
    _stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-10-28.acacia',
      typescript: true,
    })
  }
  return _stripe
}

/**
 * Stripe client instance configured with the project's secret key and API version.
 *
 * Used for checkout sessions, coupon management, and payment processing.
 * Throws on first use if `STRIPE_SECRET_KEY` is not set.
 *
 * @see https://docs.stripe.com/payments/accept-a-payment
 */
export const stripe: Stripe = new Proxy({} as Stripe, {
  get(_target, prop, receiver) {
    return Reflect.get(getStripe(), prop, receiver)
  },
})
