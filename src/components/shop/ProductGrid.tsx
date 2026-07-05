'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Product } from '@/types/fourthwall'
import { getProducts } from '@/lib/fourthwall'
import { getLocalProducts } from '@/lib/local-products'
import { useShopStore } from '@/stores/shopStore'
import ProductCard from './ProductCard'
import CartDrawer from './CartDrawer'
import Sigil from '@/components/Sigil'
import BrandName from '@/components/BrandName'

export default function ProductGrid() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [usingLocal, setUsingLocal] = useState(false)

  const addItem = useShopStore((s) => s.addItem)
  const isOpen = useShopStore((s) => s.isOpen)
  const closeCart = useShopStore((s) => s.closeCart)
  const itemCount = useShopStore((s) => s.items.reduce((sum, i) => sum + i.quantity, 0))

  useEffect(() => {
    getProducts()
      .then((res) => {
        const filtered = res.results.filter((p) => p.access.type === 'PUBLIC')
        setProducts(filtered.length > 0 ? filtered : getLocalProducts())
        setUsingLocal(filtered.length === 0)
      })
      .catch(() => {
        setProducts(getLocalProducts())
        setUsingLocal(true)
      })
      .finally(() => setLoading(false))
  }, [])

  function handleAddToCart(product: Product) {
    if (usingLocal) {
      router.push(`/shop/${product.slug}`)
      return
    }
    if (product.variants.length === 1) {
      addItem(product.variants[0].id, 1)
    } else {
      router.push(`/shop/${product.slug}`)
    }
  }

  return (
    <>
      <div className="pt-28 pb-10 px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center mb-8 pt-4">
          <Sigil size={96} />
          <h1 className="text-4xl font-light uppercase tracking-[0.1em] mt-4"
            style={{ fontFamily: 'var(--font-heading)', textShadow: '0 0 12px var(--color-accent)' }}>
            <BrandName /> Shop
          </h1>
          <p className="text-sm text-text-muted mt-2">
            {usingLocal ? 'Official gear. Available on Fourthwall.' : 'Wear the sigil. Earn your stake.'}
          </p>
          {!usingLocal && (
            <button
              onClick={() => useShopStore.getState().openCart()}
              className="absolute top-28 right-6 p-2 rounded-lg glass border border-line/30 text-text hover:border-line/60 transition-colors"
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

        <div className="landing-card p-6 mt-10 text-center">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3"
            style={{ fontFamily: 'var(--font-heading)', textShadow: '0 0 8px rgba(255,255,255,0.1)' }}>
            How It Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-bold text-accent ui-num">1</span>
              </div>
              <p className="text-xs font-medium text-text mb-1">Pick Your Gear</p>
              <p className="text-[10px] text-text-muted">Browse the collection. Each piece is limited, made on demand.</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-bold text-accent ui-num">2</span>
              </div>
              <p className="text-xs font-medium text-text mb-1">Secure Checkout</p>
              <p className="text-[10px] text-text-muted">Powered by Fourthwall. Print-on-demand. Ships worldwide.</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-bold text-accent ui-num">3</span>
              </div>
              <p className="text-xs font-medium text-text mb-1">Get Your Ticket</p>
              <p className="text-[10px] text-text-muted">Each purchase = entry into the ownership round. Wear the sigil.</p>
            </div>
          </div>
        </div>

        <div className="landing-card p-6 mt-6 mb-8 flex flex-col sm:flex-row items-center gap-5">
          <Sigil size={48} />
          <div className="text-center sm:text-left">
            <p className="text-base font-bold text-white mb-1"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>
              Every purchase enters you in the upcoming ownership pull.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              We&apos;re building this in public. Each item you buy is a ticket into the community crowdfunding round. 
              Wear the sigil early, own a piece of the prophecy. No purchase necessary — free entry available below.
            </p>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="glass rounded-2xl aspect-[3/4] animate-pulse" />
            ))}
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} usingLocal={usingLocal} />
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted text-sm">No products available yet.</p>
            <a
              href="https://meyempire-shop.fourthwall.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2.5 rounded-lg bg-accent text-bg font-bold text-sm uppercase tracking-wider hover:bg-accent/80 transition-colors"
            >
              Visit Fourthwall Shop
            </a>
          </div>
        )}

      </div>

      {isOpen && <CartDrawer onClose={closeCart} />}
    </>
  )
}
