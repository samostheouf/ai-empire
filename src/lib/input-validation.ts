export function validateEmail(email: unknown): string | null {
  if (!email || typeof email !== 'string') return null
  if (email.length > 254) return null
  const normalized = email.trim().toLowerCase()
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(normalized)) return null
  const parts = normalized.split('@')
  if (parts.length !== 2) return null
  const [local, domain] = parts
  if (local.length > 64) return null
  if (!domain.includes('.')) return null
  return normalized
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
    .replace(/data\s*:/gi, '')
    .replace(/vbscript\s*:/gi, '')
    .trim()
}

export function sanitizeForHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
}

export function validateId(id: unknown): string | null {
  if (!id || typeof id !== 'string') return null
  if (id.length > 100) return null
  if (!/^[a-zA-Z0-9_-]+$/.test(id)) return null
  return id
}

export function validateNumber(value: unknown, min?: number, max?: number): number | null {
  const num = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : null
  if (num === null || isNaN(num)) return null
  if (min !== undefined && num < min) return null
  if (max !== undefined && num > max) return null
  return num
}

export function validateUrl(url: unknown, allowedProtocols: string[] = ['https:']): string | null {
  if (!url || typeof url !== 'string') return null
  try {
    const parsed = new URL(url)
    if (!allowedProtocols.includes(parsed.protocol)) return null
    if (url.length > 2048) return null
    return url
  } catch {
    return null
  }
}
