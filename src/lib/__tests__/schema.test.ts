import {
  generateArticleSchema,
  generateProductSchema,
  generateBreadcrumbSchema,
} from '../schema'

describe('schema helpers', () => {
  describe('generateArticleSchema', () => {
    it('returns valid Article schema object', () => {
      const schema = generateArticleSchema({
        title: 'Test Article',
        description: 'A test article description',
        slug: 'test-article',
        datePublished: '2024-01-01',
      })

      expect(schema).toHaveProperty('@context', 'https://schema.org')
      expect(schema).toHaveProperty('@type', 'Article')
      expect(schema).toHaveProperty('headline', 'Test Article')
      expect(schema).toHaveProperty('description', 'A test article description')
    })

    it('uses dateModified fallback to datePublished', () => {
      const schema = generateArticleSchema({
        title: 'Test',
        description: 'Desc',
        slug: 'test',
        datePublished: '2024-01-01',
      })

      expect((schema as Record<string, unknown>).dateModified).toBe('2024-01-01')
    })

    it('uses provided dateModified when given', () => {
      const schema = generateArticleSchema({
        title: 'Test',
        description: 'Desc',
        slug: 'test',
        datePublished: '2024-01-01',
        dateModified: '2024-06-15',
      })

      expect((schema as Record<string, unknown>).dateModified).toBe('2024-06-15')
    })
  })

  describe('generateProductSchema', () => {
    it('returns valid Product schema object', () => {
      const schema = generateProductSchema({
        name: 'Test Product',
        description: 'A test product',
        image: 'https://example.com/img.png',
        price: 999,
      })

      expect(schema).toHaveProperty('@context', 'https://schema.org')
      expect(schema).toHaveProperty('@type', 'Product')
      expect((schema as Record<string, unknown>).name).toBe('Test Product')
    })

    it('includes aggregateRating when provided', () => {
      const schema = generateProductSchema({
        name: 'Product',
        description: 'Desc',
        image: 'img.png',
        price: 500,
        rating: 4.5,
        reviewCount: 200,
      })

      const product = schema as Record<string, unknown>
      expect(product.aggregateRating).toBeDefined()
      const rating = product.aggregateRating as Record<string, unknown>
      expect(rating.ratingValue).toBe(4.5)
      expect(rating.reviewCount).toBe(200)
    })

    it('omits aggregateRating when not provided', () => {
      const schema = generateProductSchema({
        name: 'Product',
        description: 'Desc',
        image: 'img.png',
        price: 500,
      })

      expect((schema as Record<string, unknown>).aggregateRating).toBeUndefined()
    })
  })

  describe('generateBreadcrumbSchema', () => {
    it('returns valid BreadcrumbList schema', () => {
      const schema = generateBreadcrumbSchema({
        items: [
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ],
      })

      expect(schema).toHaveProperty('@type', 'BreadcrumbList')
      const list = (schema as Record<string, unknown>).itemListElement as Array<Record<string, unknown>>
      expect(list).toHaveLength(3)
      expect(list[0].name).toBe('Accueil')
      expect(list[1].name).toBe('Blog')
    })
  })
})
