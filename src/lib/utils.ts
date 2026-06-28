export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(priceInCents / 100)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export function parseJsonField<T>(field: unknown): T {
  if (typeof field === 'string') {
    try {
      return JSON.parse(field) as T
    } catch { return field as T }
  }
  return field as T
}

export function generateApiKey(): string {
  return 'napi_' + crypto.randomUUID().replace(/-/g, '')
}