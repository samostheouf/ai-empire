import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/admin/',
          '/api/',
          '/checkout/success',
          '/login',
          '/register',
          '/beta/',
          '/launch/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
