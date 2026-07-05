import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem } from '@/types/fourthwall'
import { createCart, getCart, addToCart, updateCartItem, removeCartItem, getCheckoutUrl } from '@/lib/fourthwall'

interface ShopState {
  cartId: string | null
  items: CartItem[]
  isOpen: boolean

  openCart: () => void
  closeCart: () => void
  toggleCart: () => void

  ensureCart: () => Promise<string>
  addItem: (variantId: string, quantity: number) => Promise<void>
  updateQty: (itemId: string, quantity: number) => Promise<void>
  removeItem: (itemId: string) => Promise<void>
  refreshCart: () => Promise<void>
  checkout: () => void
}

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      cartId: null,
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

      ensureCart: async () => {
        let { cartId } = get()
        if (cartId) {
          try {
            await getCart(cartId)
            return cartId
          } catch {
            cartId = null
          }
        }
        const cart = await createCart()
        set({ cartId: cart.id, items: [] })
        return cart.id
      },

      addItem: async (variantId, quantity) => {
        const cartId = await get().ensureCart()
        await addToCart(cartId, variantId, quantity)
        await get().refreshCart()
        set({ isOpen: true })
      },

      updateQty: async (itemId, quantity) => {
        const { cartId } = get()
        if (!cartId) return
        if (quantity <= 0) {
          await get().removeItem(itemId)
          return
        }
        await updateCartItem(cartId, itemId, quantity)
        await get().refreshCart()
      },

      removeItem: async (itemId) => {
        const { cartId } = get()
        if (!cartId) return
        await removeCartItem(cartId, itemId)
        await get().refreshCart()
      },

      refreshCart: async () => {
        const { cartId } = get()
        if (!cartId) return
        try {
          const cart = await getCart(cartId)
          set({ items: cart.items })
        } catch {
          set({ cartId: null, items: [] })
        }
      },

      checkout: () => {
        const { cartId } = get()
        if (!cartId) return
        window.location.href = getCheckoutUrl(cartId)
      },
    }),
    {
      name: 'meycult-shop-cart',
      partialize: (state) => ({ cartId: state.cartId }),
    }
  )
)
