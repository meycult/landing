import { InfluenceIcon, FateIcon } from '@/components/TokenIcons'

const stops = [
  { phase: '1', title: 'Prototype', text: 'Design system, branding, theme exploration', filled: true },
  { phase: '2', title: 'Core MVP', text: 'Frontend app, Supabase, auth, game store', filled: true },
  { phase: '3', title: 'Contracts', text: <>Smart contracts: <InfluenceIcon size={11} /> <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, color: 'var(--color-accent)' }}>Influence</span> + <FateIcon size={11} /> <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, color: 'var(--color-accent)' }}>Fate</span> tokens + QuestFragment NFTs on Base L2</>, filled: false },
  { phase: '4', title: 'Quest Markets', text: 'Betting engine, hero roster, live quest board', filled: false },
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
    </section>
  )
}
