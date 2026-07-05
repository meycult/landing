'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import BrandName from '@/components/BrandName'
import { getProducts } from '@/lib/fourthwall'
import { getLocalProducts } from '@/lib/local-products'
import { formatPrice } from '@/lib/fourthwall'
import type { Product } from '@/types/fourthwall'

export default function MerchSection() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducts()
      .then((res) => {
        const filtered = res.results.filter((p) => p.access.type === 'PUBLIC')
        if (filtered.length > 0) {
           const order = ['tee', 'mug', 'hoodie', 'beanie', 'jogger']
          filtered.sort((a, b) => {
            const ai = order.findIndex((k) => a.slug.includes(k))
            const bi = order.findIndex((k) => b.slug.includes(k))
            return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
          })
          setProducts(filtered)
        } else {
          setProducts(getLocalProducts().slice(0, 5))
        }
      })
      .catch(() => setProducts(getLocalProducts().slice(0, 5)))
  }, [])

  if (products.length === 0) {
    return (
      <section id="shop" className="section text-center">
        <div className="landing-card p-10 inline-block">
          <div className="w-8 h-8 rounded-full border-2 border-line/30 border-t-accent animate-spin mx-auto mb-3" />
          <p className="text-sm text-text-muted">Loading gear...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="shop" className="section">
      <h2 className="text-center mb-2"
        style={{ color: '#ffffff', fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.1em', textShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
        Official <BrandName /> Gear
      </h2>

      <div className="text-center mb-6">
        <p className="text-lg font-bold text-white mb-3"
          style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>
          Every purchase enters you in the upcoming ownership pull.
        </p>
        <p className="text-sm text-text-muted max-w-xl mx-auto leading-relaxed mb-3">
          We&apos;re building this in public — and the people who wear the sigil early get first access. 
          Each item you buy is a ticket into the community crowdfunding round. Own a piece of the prophecy. 
          No purchase necessary — free entry via email below.
        </p>
        <span className="inline-block rounded-lg p-[2px] hover:scale-[1.02] transition-all"
          style={{ background: 'linear-gradient(135deg, #22e06a, #6effa0)' }}>
          <Link
            href="/shop"
            className="block px-8 py-2.5 rounded-[6px] font-bold text-sm tracking-wider hover:opacity-90 transition-all"
            style={{
              background: 'linear-gradient(135deg, #030d07, #0d5c35)',
              color: '#ffffff',
              boxShadow: '0 0 80px rgba(34,224,106,0.08), 0 0 120px rgba(34,224,106,0.05)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}>Join </span>
            <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, textTransform: 'none' }}>Mey</span>
            <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, color: 'var(--color-accent)' }}>Cult</span>
          </Link>
        </span>
        <p className="text-center text-text-muted text-xs mt-3">Wear the sigil. Earn your stake.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
        {products.slice(0, 5).map((product) => {
          const isBeanie = product.slug.includes('beanie')
          const imgIdx = isBeanie && product.images.length > 1 ? 1 : 0
          const image = product.images?.[imgIdx]?.transformedUrl || product.images?.[imgIdx]?.url || ''
          const price = product.variants?.length
            ? Math.min(...product.variants.map((v) => v.unitPrice.value))
            : 0
          const currency = product.variants?.[0]?.unitPrice.currency || 'USD'

          return (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="landing-card flex flex-col overflow-hidden group w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1.111rem)]"
            >
              <div className="aspect-square bg-surface/10 flex items-center justify-center p-4 overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-5xl opacity-30">🧥</div>
                )}
              </div>
              <div className="p-4 flex items-center justify-between gap-2 border-t border-line/10">
                <h3 className="text-sm font-bold text-text uppercase tracking-wider leading-snug truncate" style={{ fontFamily: 'var(--font-heading)' }}>
                  {product.name.replace(' — MeyCult', '').replace(' - MeyCult', '').trim()}
                </h3>
                <span className="text-sm font-bold text-accent flex-shrink-0" style={{ fontFamily: 'var(--font-body)', fontVariantNumeric: 'tabular-nums' }}>{formatPrice(price, currency)}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
