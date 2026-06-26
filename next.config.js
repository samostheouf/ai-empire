/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production'
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
  { key: 'Cross-Origin-Embedder-Policy', value: 'unsafe-none' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  { key: 'Content-Security-Policy', value: [
    "default-src 'self'",
    "script-src 'self' 'strict-dynamic' https://js.stripe.com https://fonts.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' https://images.unsplash.com https://*.stripe.com data: blob:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://api.stripe.com https://js.stripe.com https://checkout.stripe.com https://api.groq.com https://api.openai.com",
    "frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://checkout.stripe.com",
    "worker-src 'self' blob:",
    "child-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
    "report-uri /api/csp-report",
  ].join('; ') },
]

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.stripe.com' },
    ],
  },
  optimizePackageImports: ['lucide-react', 'stripe', 'openai'],
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/docs', destination: '/api-docs', permanent: false },
    ]
  },
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          ...securityHeaders,
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
        ],
      },
      {
        source: '/admin/(.*)',
        headers: [
          ...securityHeaders,
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
        ],
      },
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
