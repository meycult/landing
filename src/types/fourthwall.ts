export interface ProductImage {
  id: string
  url: string
  width: number
  height: number
  transformedUrl: string
}

export interface ProductVariantAttribute {
  description: string
  color?: { name: string; swatch: string }
  size?: { name: string }
}

export interface ProductVariant {
  id: string
  name: string
  sku: string
  unitPrice: { value: number; currency: string }
  compareAtPrice?: { value: number; currency: string }
  attributes: ProductVariantAttribute
  stock: { type: 'UNLIMITED' } | { type: 'LIMITED'; inStock: number }
  images: ProductImage[]
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  state: { type: 'AVAILABLE' | 'SOLD_OUT' }
  access: { type: 'PUBLIC' | 'HIDDEN' | 'PRIVATE' | 'ARCHIVED' }
  images: ProductImage[]
  variants: ProductVariant[]
}

export interface CartItem {
  id: string
  variantId: string
  variantName?: string
  productName?: string
  productImage?: string
  quantity: number
  unitPrice?: { value: number; currency: string }
}

export interface Cart {
  id: string
  items: CartItem[]
  totals?: {
    subtotal: { value: number; currency: string }
  }
}

export interface ProductsResponse {
  results: Product[]
  paging: { hasNextPage: boolean }
}
