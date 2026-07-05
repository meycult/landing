'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import BrandName from '@/components/BrandName'

export default function CrowdfundingSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')

    try {
      const { createClient } = await import('@supabase/supabase-js')
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
      )
      const { error } = await supabase.from('crowdfunding_signups').insert({
        email: email.trim(),
        source: 'landing',
      })
      if (error && error.code !== '23505') throw error
      setStatus('done')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="crowdfunding" className="section">
      <h2 className="section-title text-center mb-2">Own a Piece of <BrandName /></h2>
      <p className="section-subtitle">
        Coming soon: the community crowdfunding round. Be first in line to own a stake in the prophecy.
      </p>

      <div className="landing-card p-8 max-w-lg mx-auto text-center">
        {status === 'done' ? (
          <div>
            <p className="text-accent font-bold text-lg mb-2">You&apos;re on the list.</p>
            <p className="text-sm text-text-muted">We&apos;ll email you when the round opens. No spam. No password. Just your stake in the prophecy.</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" required className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-surface border border-line/30 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors" />
              </div>
              <button type="submit" disabled={status === 'submitting'} className="px-6 py-2.5 rounded-lg bg-accent text-bg font-bold text-sm uppercase tracking-wider hover:bg-accent/80 transition-colors disabled:opacity-50">
                {status === 'submitting' ? 'Joining...' : 'Claim Your Stake'}
              </button>
            </form>
            {status === 'error' && <p className="text-danger text-xs mt-3">Something went wrong. Try again.</p>}
            <p className="text-[11px] text-text-muted mt-4 leading-relaxed">
              Merch buyers get priority + bonus entries. No purchase necessary — enter your email for free entry.
              Void where prohibited.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
