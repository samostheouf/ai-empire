import { formatPrice, slugify, parseJsonField, generateApiKey } from '../utils'

describe('utils', () => {
  it('formats price', () => {
    expect(formatPrice(1234)).toContain('12,34')
  })
  it('slugifies', () => {
    expect(slugify('Hello World!')).toBe('hello-world')
    expect(slugify('Café & Thé')).toBe('cafe-the')
  })
  it('parses json field', () => {
    expect(parseJsonField('{"a":1}')).toEqual({ a: 1 })
    expect(parseJsonField(42)).toBe(42)
  })
  it('generates api key', () => {
    const k = generateApiKey()
    expect(k.startsWith('napi_')).toBe(true)
    expect(k.length).toBeGreaterThan(10)
  })
})
