export function validateEmail(email: unknown): string | null {
  if (!email || typeof email !== 'string') return null
  if (email.length > 254) return null
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null
  return email
}

export function validatePassword(password: unknown): string | null {
  if (!password || typeof password !== 'string') return null
  if (password.length < 8 || password.length > 128) return null
  return password
}

export function validateString(value: unknown, maxLength: number = 1000): string | null {
  if (!value || typeof value !== 'string') return null
  if (value.length > maxLength) return null
  return value
}

export function validateArray(value: unknown, maxItems: number = 100): unknown[] | null {
  if (!Array.isArray(value)) return null
  if (value.length > maxItems) return null
  return value
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
}

export function validateId(id: unknown): string | null {
  if (!id || typeof id !== 'string') return null
  if (id.length > 100) return null
  if (!/^[a-zA-Z0-9_-]+$/.test(id)) return null
  return id
}
