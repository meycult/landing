'use client'

import { useShopStore } from '@/stores/shopStore'
import { formatPrice } from '@/lib/fourthwall'
import { X, Minus, Plus, ShoppingCart } from 'lucide-react'

export default function CartDrawer({ onClose }: { onClose: () => void }) {
  const items = useShopStore((s) => s.items)
  const updateQty = useShopStore((s) => s.updateQty)
  const removeItem = useShopStore((s) => s.removeItem)
  const checkout = useShopStore((s) => s.checkout)

  const subtotal = items.reduce((sum, item) => sum + (item.unitPrice?.value || 0) * item.quantity, 0)

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm glass border-l border-line/20 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-line/10">
          <h2 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
            <ShoppingCart size={16} />
            Cart ({items.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-surface/50 transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-3">
          {items.length === 0 ? (
            <p className="text-center text-text-muted text-sm py-10">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="landing-card !rounded-xl p-3 flex gap-3">
                {item.productImage && (
                  <img src={item.productImage} alt="" className="w-16 h-16 rounded-lg object-contain bg-black/20" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-text truncate">{item.productName || item.variantName || 'Item'}</p>
                  <p className="text-[10px] text-text-muted">{item.variantName}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <button onClick={() => updateQty(item.id, item.quantity - 1)} className="w-6 h-6 rounded flex items-center justify-center bg-surface border border-line/20 text-text-muted hover:border-line/40 transition-colors">
                        <Minus size={10} />
                      </button>
                      <span className="w-7 text-center text-xs ui-num">{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, item.quantity + 1)} className="w-6 h-6 rounded flex items-center justify-center bg-surface border border-line/20 text-text-muted hover:border-line/40 transition-colors">
                        <Plus size={10} />
                      </button>
                    </div>
                    {item.unitPrice && (
                      <span className="text-xs font-bold text-accent" style={{ fontFamily: 'var(--font-body)', fontVariantNumeric: 'tabular-nums' }}>{formatPrice(item.unitPrice.value * item.quantity)}</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-line/10 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Subtotal</span>
              <span className="font-bold text-accent" style={{ fontFamily: 'var(--font-body)', fontVariantNumeric: 'tabular-nums' }}>{formatPrice(subtotal)}</span>
            </div>
            <button onClick={checkout} className="w-full py-2.5 rounded-lg bg-accent text-bg font-bold text-sm uppercase tracking-wider hover:bg-accent/80 transition-colors">
              Checkout
            </button>
            <p className="text-[9px] text-text-muted text-center">
              You&apos;ll be redirected to our secure checkout. Shipping &amp; tax calculated there.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
