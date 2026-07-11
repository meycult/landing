import Link from 'next/link'
import { InfluenceIcon, FateIcon } from '@/components/TokenIcons'

const stops = [
  { phase: '1', title: 'Prototype', text: 'Design system, branding, theme exploration', filled: true },
  { phase: '2', title: 'Core MVP', text: 'Frontend app, Supabase auth, embedded wallets', filled: true },
  { phase: '3', title: 'Markets & Crypto', text: <>AI-seeded prediction markets + parimutuel wagering with <InfluenceIcon size={11} /> <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}><span style={{ color: 'var(--color-text)' }}>Mey</span><span style={{ color: 'var(--color-accent)' }}>Influence</span></span> + <FateIcon size={11} /> <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}><span style={{ color: 'var(--color-text)' }}>Mey</span><span style={{ color: 'var(--color-accent)' }}>Fate</span></span> on Base L2</>, filled: true },
  { phase: '4', title: 'Gamification', text: 'Cults, heroes, tarot decks, virtues & badges', filled: false },
  { phase: '5', title: 'Launch', text: 'Audit, mainnet, open source, YouTube stream', filled: false },
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="section">
      <h2 className="section-title text-center mb-2">Quest Map</h2>
      <p className="section-subtitle">The journey ahead. Five phases to launch.</p>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(34,224,106,0.4), rgba(34,224,106,0.2), rgba(34,224,106,0.4), transparent)' }}
        />

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-stretch">
          {stops.map((stop, i) => (
            <div key={stop.phase} className="flex md:flex-col items-center gap-3 md:gap-2 md:text-center flex-1 relative">
              <div className="flex-shrink-0 w-14 h-14 rounded-full landing-card flex items-center justify-center"
                style={stop.filled ? { borderColor: 'var(--color-accent)', borderWidth: '2px', boxShadow: '0 0 30px rgba(34,224,106,0.35), 0 0 60px rgba(34,224,106,0.15)' } : {}}
              >
                <span className="text-lg font-bold text-text" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stop.phase}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-text uppercase tracking-wider">{stop.title}</h3>
                <div className="text-[10px] text-text-muted mt-0.5">{stop.text}</div>
              </div>
              {i < stops.length - 1 && (
                <div className="md:hidden absolute left-[26px] top-16 bottom-0 w-px bg-line/30" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/whitepaper"
          className="inline-block rounded-lg p-[2px] hover:scale-[1.02] transition-all"
          style={{ background: 'linear-gradient(135deg, #22e06a, #6effa0)' }}
        >
          <span
            className="block px-8 py-3 rounded-[6px] font-bold text-sm tracking-wider hover:opacity-90 transition-all"
            style={{
              background: 'linear-gradient(135deg, #030d07, #0d5c35)',
              color: '#ffffff',
              boxShadow: '0 0 80px rgba(34,224,106,0.08), 0 0 120px rgba(34,224,106,0.05)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, textTransform: 'none' }}>
              <span style={{ color: '#ffffff' }}>Mey</span>
              <span style={{ color: 'var(--color-accent)' }}>Cult</span>
            </span>{' '}
            <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}>Whitepaper</span>
          </span>
        </Link>
      </div>
    </section>
  )
}
