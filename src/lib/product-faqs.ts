/**
 * Wrapper de re-export pour FrenchProductFAQs.
 * Les pages produits importent depuis @/lib/product-faqs.
 */
import { FrenchProductFAQs } from '@/lib/jsonld'

export { FrenchProductFAQs }

export function getFaqsForProduct(slug: string) {
  return FrenchProductFAQs[slug] ?? FrenchProductFAQs['default'] ?? []
}
