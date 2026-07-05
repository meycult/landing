'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from './Logo'
import LaunchButton from './LaunchButton'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Whitepaper', href: '/whitepaper' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isHome = pathname === '/'

  return (
    <nav
      className="fixed z-50 left-1/2 -translate-x-1/2 flex items-center rounded-[20px] px-6"
      style={{
        top: '20px',
        height: '68px',
        width: 'calc(100% - 48px)',
        maxWidth: '1200px',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(24px) saturate(160%)',
        WebkitBackdropFilter: 'blur(24px) saturate(160%)',
        border: '1px solid rgba(34,224,106,0.12)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 40px rgba(34,224,106,0.2)',
      }}
    >
      <div
        className="absolute top-0 left-[15%] right-[15%] h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(34,224,106,0.4), rgba(110,255,160,0.5), transparent)',
        }}
      />
      <Logo size={24} className="!gap-2" />

      <div className="hidden sm:flex items-center ml-6 gap-1" suppressHydrationWarning>
        {links.map((link) => {
          const active = link.href === '/' ? isHome : pathname.startsWith(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-xs font-medium uppercase tracking-wider py-2 px-3 rounded-lg transition-colors ${
                mounted && active
                  ? 'text-text bg-accent/8'
                  : 'text-text-muted hover:text-text hover:bg-accent/5'
              }`}
            >
              {link.label}
              {mounted && active && (
                <span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)', boxShadow: '0 0 8px var(--color-accent)' }}
                />
              )}
            </Link>
          )
        })}
      </div>

      <div className="flex-1" />

      <LaunchButton label="Enter" />
    </nav>
  )
}
