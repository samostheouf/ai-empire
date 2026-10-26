import { validateEmail, validatePassword, validateString, validateId, sanitizeInput } from '../input-validation'

describe('input validation', () => {
  it('validates email', () => {
    expect(validateEmail('test@example.com')).toBe('test@example.com')
    expect(validateEmail('invalid')).toBeNull()
    expect(validateEmail('')).toBeNull()
  })
  it('validates password length', () => {
    expect(validatePassword('12345678')).toBe('12345678')
    expect(validatePassword('short')).toBeNull()
  })
  it('validates string max length', () => {
    expect(validateString('abc', 5)).toBe('abc')
    expect(validateString('abcdef', 5)).toBeNull()
  })
  it('validates id', () => {
    expect(validateId('abc-123')).toBe('abc-123')
    expect(validateId('a b')).toBeNull()
  })
  it('sanitizes input', () => {
    expect(sanitizeInput('<script>alert(1)</script>')).not.toContain('<script>')
  })
})
