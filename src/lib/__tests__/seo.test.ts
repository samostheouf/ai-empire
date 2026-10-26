import { generateProductSchema, generateArticleSchema, generateFAQSchema, generateOrganizationSchema, generateWebSiteSchema } from '../seo'

describe('seo schemas', () => {
  it('product schema', () => {
    const s: any = generateProductSchema({ name: 'Test', description: 'desc', image: 'img', price: 10, rating: 4.5, reviewCount: 10 })
    expect(s['@type']).toBe('Product')
    expect(s.aggregateRating).toBeTruthy()
    const s2: any = generateProductSchema({ name: 'Test', description: 'desc', image: 'img', price: 10 })
    expect(s2.aggregateRating).toBeUndefined()
  })
  it('article schema', () => {
    const s: any = generateArticleSchema({ title: 'T', description: 'd', slug: 's', datePublished: '2024-01-01' })
    expect(s['@type']).toBe('Article')
    expect(s.headline).toBe('T')
  })
  it('faq schema', () => {
    const s: any = generateFAQSchema([{ question: 'Q', answer: 'A' }])
    expect(s.mainEntity).toHaveLength(1)
  })
  it('organization schema', () => {
    const s: any = generateOrganizationSchema()
    expect(s['@type']).toBe('Organization')
  })
  it('website schema', () => {
    const s: any = generateWebSiteSchema()
    expect(s['@type']).toBe('WebSite')
  })
})
