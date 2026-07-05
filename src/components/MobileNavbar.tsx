'use client'

import Link from 'next/link'
import Sigil from './Sigil'
import { ShoppingBag } from 'lucide-react'

export default function MobileNavbar() {
  return (
    <div className="sm:hidden fixed z-50 inset-x-2 top-3">
      <nav
        className="flex items-center justify-between rounded-2xl px-3 py-2.5 w-full overflow-hidden"
        style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(24px) saturate(160%)',
        WebkitBackdropFilter: 'blur(24px) saturate(160%)',
        border: '1px solid rgba(34,224,106,0.12)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 40px rgba(34,224,106,0.2)',
      }}
    >
      <Link href="/" className="flex items-center gap-2 flex-shrink-0">
        <Sigil size={18} />
        <div className="leading-none">
          <div className="text-sm font-bold tracking-wider" style={{ fontFamily: 'var(--font-logo)' }}>
            <span style={{ color: 'var(--color-text)' }}>Mey</span>
            <span style={{ color: 'var(--color-accent)', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>Cult</span>
          </div>
          <div className="text-[8px] uppercase tracking-widest text-text-muted" style={{ fontFamily: 'var(--font-logo)' }}>Quest Markets</div>
        </div>
      </Link>

      <div className="flex items-center gap-2">
        <Link
          href="/shop"
          className="text-[10px] font-medium uppercase tracking-wider text-text-muted hover:text-text flex-shrink-0"
        >
          <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, textTransform: 'none' }}>
            <span style={{ color: 'var(--color-text)' }}>Mey</span>
            <span style={{ color: 'var(--color-accent)' }}>Cult</span>
          </span>{' '}
          <span style={{ fontFamily: 'var(--font-heading)' }}>SHOP</span>
        </Link>

        <span className="inline-block rounded-lg p-[2px] flex-shrink-0" style={{ background: 'linear-gradient(135deg, #22e06a, #6effa0)' }}>
          <a
            href="https://app.meycult.com"
            className="block px-2.5 py-1.5 rounded-[6px] font-bold text-[9px] uppercase tracking-wider"
            style={{ background: 'linear-gradient(135deg, #030d07, #0d5c35)', color: '#ffffff' }}>
            Enter
          </a>
        </span>
      </div>
    </nav>
    </div>
  )
}
