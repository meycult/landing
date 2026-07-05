'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Product } from '@/types/fourthwall'
import { formatPrice } from '@/lib/fourthwall'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductCard({
  product,
  onAddToCart,
  usingLocal,
}: {
  product: Product
  onAddToCart: (product: Product) => void
  usingLocal?: boolean
}) {
  const images = usingLocal
    ? (product.images?.[0]?.url ? [product.images[0].url] : [])
    : (product.images || []).slice(0, 8).map((_, i) => `/products/${product.slug}-${i}.jpg`)
  const [imgIndex, setImgIndex] = useState(0)

  const price = product.variants?.length
    ? Math.min(...product.variants.map((v) => v.unitPrice.value))
    : 0
  const currency = product.variants?.[0]?.unitPrice.currency || 'USD'
  const soldOut = product.state.type === 'SOLD_OUT'

  return (
    <div className="landing-card flex flex-col overflow-hidden group">
      <Link href={`/shop/${product.slug}`} className="block relative aspect-square bg-surface/10 overflow-hidden">
        {images.length > 0 ? (
          <img
            src={images[imgIndex]}
            alt={product.name}
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl opacity-30">🧥</div>
        )}

        {images.length > 1 && (
          <>
            {imgIndex > 0 && (
              <button
                onClick={(e) => { e.preventDefault(); setImgIndex(imgIndex - 1) }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full glass border border-line/30 flex items-center justify-center text-text-muted hover:text-text hover:border-accent/40 transition-colors"
              >
                <ChevronLeft size={12} />
              </button>
            )}
            {imgIndex < images.length - 1 && (
              <button
                onClick={(e) => { e.preventDefault(); setImgIndex(imgIndex + 1) }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full glass border border-line/30 flex items-center justify-center text-text-muted hover:text-text hover:border-accent/40 transition-colors"
              >
                <ChevronRight size={12} />
              </button>
            )}
          </>
        )}
      </Link>

      {images.length > 1 && (
        <div className="flex justify-center gap-1 px-4 pt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setImgIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === imgIndex ? 'bg-accent w-3' : 'bg-text-muted/30 hover:bg-text-muted/50'
              }`}
            />
          ))}
        </div>
      )}

      <div className="p-4 flex flex-col gap-2">
        <Link href={`/shop/${product.slug}`} className="text-sm font-medium text-text leading-snug line-clamp-2 hover:text-accent transition-colors">
          {product.name}
        </Link>
        <div className="flex items-center justify-between mt-auto">
          {soldOut ? (
            <span className="text-xs font-bold text-danger uppercase tracking-wider">Sold Out</span>
          ) : (
            <span className="text-sm font-bold text-accent" style={{ fontFamily: 'var(--font-body)', fontVariantNumeric: 'tabular-nums' }}>{formatPrice(price, currency)}</span>
          )}
          <a
            href={`https://meyempire-shop.fourthwall.com/products/${product.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-accent text-bg font-bold text-[10px] uppercase tracking-wider hover:bg-accent/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            BUY
          </a>
        </div>
      </div>
    </div>
  )
}
