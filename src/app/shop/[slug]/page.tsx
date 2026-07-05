'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { ChevronLeft, ShoppingCart, ExternalLink } from 'lucide-react'
import type { Product, ProductVariant } from '@/types/fourthwall'
import { getProduct, formatPrice } from '@/lib/fourthwall'
import { getLocalProduct } from '@/lib/local-products'
import { useShopStore } from '@/stores/shopStore'
import VariantSelector from '@/components/shop/VariantSelector'
import CartDrawer from '@/components/shop/CartDrawer'
import Link from 'next/link'

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
  const [added, setAdded] = useState(false)
  const [usingLocal, setUsingLocal] = useState(false)

  const addItem = useShopStore((s) => s.addItem)
  const isOpen = useShopStore((s) => s.isOpen)
  const closeCart = useShopStore((s) => s.closeCart)
  const itemCount = useShopStore((s) => s.items.reduce((sum, i) => sum + i.quantity, 0))

  useEffect(() => {
    if (!slug) return
    getProduct(slug)
      .then((p) => {
        setProduct(p)
        if (p.variants.length === 1) setSelectedVariant(p.variants[0].id)
      })
      .catch(() => {
        const local = getLocalProduct(slug)
        if (local) {
          setProduct(local)
          setUsingLocal(true)
          if (local.variants.length === 1) setSelectedVariant(local.variants[0].id)
        } else {
          setError('Product not found')
        }
      })
      .finally(() => setLoading(false))
  }, [slug])

  const variant = product?.variants.find((v) => v.id === selectedVariant) || product?.variants[0]
  const soldOut = product?.state.type === 'SOLD_OUT'
  const variantSoldOut = variant?.stock.type === 'LIMITED' && variant.stock.inStock <= 0

  function handleAddToCart() {
    if (!selectedVariant) return
    addItem(selectedVariant, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (loading) {
    return (
      <div className="pt-28 pb-10 px-6 max-w-[1200px] mx-auto">
        <div className="glass rounded-2xl animate-pulse aspect-square max-w-md mx-auto" />
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="pt-28 pb-10 px-6 max-w-[1200px] mx-auto text-center">
        <p className="text-danger text-sm">{error}</p>
        <Link href="/shop" className="text-accent text-sm mt-4 inline-block hover:underline">Back to Shop</Link>
      </div>
    )
  }

  return (
    <>
      <div className="pt-28 pb-10 px-6 max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link href="/shop" className="flex items-center gap-1 text-xs text-text-muted hover:text-text transition-colors uppercase tracking-wider">
            <ChevronLeft size={14} />
            Shop
          </Link>
          {!usingLocal && (
            <button
              onClick={() => useShopStore.getState().openCart()}
              className="relative p-2 rounded-lg glass border border-line/30 text-text hover:border-line/60 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-bg text-[9px] font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {product.images?.[0] ? (
              <img
                src={`/products/${product.slug}-0.jpg`}
                alt={product.name}
                className="w-full aspect-square object-contain rounded-2xl landing-card p-8"
              />
            ) : (
              <div className="w-full aspect-square rounded-2xl landing-card flex items-center justify-center text-6xl">🧥</div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-light uppercase tracking-[0.08em] mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}>
                {product.name}
              </h1>
              {variant && (
                <p className="text-xl font-bold text-accent" style={{ fontFamily: 'var(--font-body)', fontVariantNumeric: 'tabular-nums' }}>
                  {formatPrice(variant.unitPrice.value, variant.unitPrice.currency)}
                  {variant.compareAtPrice && (
                    <span className="ml-2 text-sm text-text-muted line-through">
                      {formatPrice(variant.compareAtPrice.value, variant.compareAtPrice.currency)}
                    </span>
                  )}
                </p>
              )}
            </div>

            {product.description && (
              <div
                className="text-sm text-text-muted leading-relaxed space-y-2"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}

            {product.variants.length > 1 && (
              <VariantSelector
                variants={product.variants}
                selected={selectedVariant}
                onSelect={setSelectedVariant}
              />
            )}

            {usingLocal ? (
              <a
                href="https://meyempire-shop.fourthwall.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-accent text-bg font-bold text-sm uppercase tracking-wider hover:bg-accent/80 transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} />
                Buy on Fourthwall
              </a>
            ) : (
              <button
                onClick={handleAddToCart}
                disabled={soldOut || variantSoldOut || !selectedVariant}
                className="w-full py-3 rounded-lg bg-accent text-bg font-bold text-sm uppercase tracking-wider hover:bg-accent/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ShoppingCart size={16} />
                {soldOut || variantSoldOut ? 'Sold Out' : added ? 'Added!' : 'Add to Cart'}
              </button>
            )}

            <p className="text-[10px] text-text-muted text-center">
              Every purchase enters you in the upcoming ownership pull.
            </p>
          </div>
        </div>
      </div>

      {isOpen && <CartDrawer onClose={closeCart} />}
    </>
  )
}
