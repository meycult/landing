import type { ProductsResponse, Product, Cart } from '@/types/fourthwall'

const BASE = 'https://storefront-api.fourthwall.com/v1'

function token() {
  if (typeof window === 'undefined') return ''
  return process.env.NEXT_PUBLIC_FOURTHWALL_STOREFRONT_TOKEN || ''
}

function checkoutDomain() {
  if (typeof window === 'undefined') return ''
  return process.env.NEXT_PUBLIC_FOURTHWALL_CHECKOUT_DOMAIN || ''
}

async function fwFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const separator = path.includes('?') ? '&' : '?'
  const res = await fetch(`${BASE}${path}${separator}storefront_token=${token()}`, {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    ...init,
  })
  if (!res.ok) throw new Error(`Fourthwall API error: ${res.status} ${res.statusText}`)
  return res.json()
}

export function getProducts(page = 0, size = 50): Promise<ProductsResponse> {
  return fwFetch(`/collections/all/products?page=${page}&size=${size}`)
}

export function getProduct(slug: string): Promise<Product> {
  return fwFetch(`/products/${slug}?currency=USD`)
}

export function createCart(): Promise<Cart> {
  return fwFetch('/carts', {
    method: 'POST',
    body: JSON.stringify({ currency: 'USD' }),
  })
}

export function getCart(cartId: string): Promise<Cart> {
  return fwFetch(`/carts/${cartId}`)
}

export function addToCart(cartId: string, variantId: string, quantity = 1): Promise<Cart> {
  return fwFetch(`/carts/${cartId}/items`, {
    method: 'POST',
    body: JSON.stringify({ variantId, quantity }),
  })
}

export function updateCartItem(cartId: string, itemId: string, quantity: number): Promise<Cart> {
  return fwFetch(`/carts/${cartId}/items/${itemId}`, {
    method: 'PATCH',
    body: JSON.stringify({ quantity }),
  })
}

export function removeCartItem(cartId: string, itemId: string): Promise<void> {
  return fwFetch(`/carts/${cartId}/items/${itemId}`, { method: 'DELETE' })
}

export function getCheckoutUrl(cartId: string): string {
  return `https://${checkoutDomain()}/checkout/?cartCurrency=USD&cartId=${cartId}`
}

export function formatPrice(value: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value)
}
