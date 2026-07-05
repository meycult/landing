'use client'

import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import GodEmperorBrand from '@/components/GodEmperor'
import BrandName from '@/components/BrandName'

function formatStreamTitle(title: string) {
  const parts = title.split(/(GodEmperor|MeyCult)/g)
  return parts.map((part, i) => {
    if (part === 'GodEmperor') return <GodEmperorBrand key={i} />
    if (part === 'MeyCult') return <BrandName key={i} />
    return part
  })
}

interface LiveStatus {
  isLive: boolean
  videoId?: string
  channelId?: string
  title?: string
  channelThumbnail?: string
}

export default function StreamSection() {
  const [status, setStatus] = useState<LiveStatus | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch('/api/youtube?handle=godemperorbuddy')
        const data = await res.json()
        setStatus(data)
      } catch {
        setStatus({ isLive: false })
      } finally {
        setLoading(false)
      }
    }
    check()
    const interval = setInterval(check, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section">
      <h2 className="text-center mb-2 flex items-center justify-center gap-1 flex-wrap"
        style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff' }}>
        WATCH{' '}
        <span className="relative inline-flex">
          <span className="relative inline-block">
            <span className="absolute inset-0 rounded-full blur-xl" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)' }} />
            <span className="relative" style={{ textTransform: 'none', fontFamily: 'var(--font-logo)', fontWeight: 700, color: '#ffffff', textShadow: '0 0 20px rgba(255,255,255,0.4)', letterSpacing: '0' }}>God</span>
          </span>
          <span className="relative inline-block">
            <span className="absolute inset-0 rounded-full blur-xl" style={{ background: 'radial-gradient(circle, rgba(240,192,64,0.6) 0%, transparent 70%)' }} />
            <span className="relative" style={{ textTransform: 'none', fontFamily: 'var(--font-logo)', fontWeight: 700, color: '#f0c040', textShadow: '0 0 20px rgba(240,192,64,0.4)', letterSpacing: '0' }}>Emperor</span>
          </span>
        </span>
        {' '}LIVE
      </h2>
      <p className="section-subtitle">
        {loading
          ? 'Checking stream status...'
          : status?.isLive
          ? 'Live now — building the future in real time'
          : 'Catch the 12 Labors series on YouTube'}
      </p>

      <div className="max-w-2xl mx-auto">
        {loading ? (
          <div className="landing-card aspect-video rounded-2xl animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-line/30 border-t-accent animate-spin" />
          </div>
        ) : status?.isLive && status.videoId ? (
          <a
            href={`https://www.youtube.com/watch?v=${status.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="landing-card overflow-hidden rounded-2xl block group"
          >
            <div className="relative aspect-video bg-surface/20 flex items-center justify-center">
              <img
                src={`https://img.youtube.com/vi/${status.videoId}/hqdefault.jpg`}
                alt={status.title || 'Live stream'}
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />
              <span className="relative rounded-full p-[2px] group-hover:scale-110 transition-transform"
                style={{ background: 'linear-gradient(135deg, #22e06a, #6effa0)' }}>
                <span className="flex items-center justify-center w-16 h-16 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #030d07, #0d5c35)' }}>
                  <Play size={28} className="text-accent fill-accent ml-1" />
                </span>
              </span>
            </div>
            {status.title && (
              <div className="px-4 py-2 border-t border-line/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-danger animate-pulse" />
                <span className="ui-label text-danger">Live Now</span>
                <span className="text-xs text-text-muted ml-2 truncate">{formatStreamTitle(status.title)}</span>
              </div>
            )}
          </a>
        ) : (
          <a
            href="https://youtube.com/@godemperorbuddy"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-card p-8 flex flex-col items-center gap-4 text-center hover:border-accent/30 transition-colors block"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Play size={28} className="text-accent ml-0.5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-text mb-1">12 Labors of <GodEmperorBrand /></h3>
              <p className="text-xs text-text-muted">
                Watch the full build series on YouTube. New videos every stream.
              </p>
            </div>
            <span className="text-xs font-bold text-accent uppercase tracking-wider mt-2">
              youtube.com/@godemperorbuddy
            </span>
          </a>
        )}
      </div>
    </section>
  )
}
