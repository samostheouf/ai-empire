import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey) {
  throw new Error(
    'Missing STRIPE_SECRET_KEY environment variable. ' +
    'Set it in your .env file or environment configuration.'
  )
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-10-28.acacia',
  typescript: true,
})
