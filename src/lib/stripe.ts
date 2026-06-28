import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey) {
  throw new Error(
    'Missing STRIPE_SECRET_KEY environment variable. ' +
    'Set it in your .env file or environment configuration.'
  )
}

/**
 * Stripe client instance configured with the project's secret key and API version.
 *
 * Used for checkout sessions, coupon management, and payment processing.
 * Throws at module load if `STRIPE_SECRET_KEY` is not set.
 *
 * @see https://docs.stripe.com/payments/accept-a-payment
 */
export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-10-28.acacia',
  typescript: true,
})
