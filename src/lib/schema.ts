import {
  generateArticleSchema as genArticle,
  generateProductSchema as genProduct,
  generateBreadcrumbSchema as genBreadcrumb,
  type ArticleSchemaData,
  type ProductSchemaData,
  type BreadcrumbItem,
} from './seo'

export function generateArticleSchema(data: ArticleSchemaData): object {
  return genArticle(data)
}

export function generateProductSchema(data: ProductSchemaData): object {
  return genProduct(data)
}

export function generateBreadcrumbSchema({ items }: { items: Array<{ name: string; path: string }> }): object {
  const breadcrumbItems: BreadcrumbItem[] = items.map((item) => ({
    name: item.name,
    url: item.path,
  }))
  return genBreadcrumb(breadcrumbItems)
}
