import Sigil from '@/components/Sigil'
import BrandName from '@/components/BrandName'
import LaunchButton from '@/components/LaunchButton'

export default function HeroSection() {
  return (
    <section id="hero" className="section section--hero">
      <div className="relative flex flex-col items-center">
        <div
          className="absolute"
          style={{
            width: '450px',
            height: '400px',
            background: 'radial-gradient(circle at 50% 40%, rgba(34,224,106,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-70px',
          }}
        />
        <div
          className="absolute"
          style={{
            width: 0,
            height: 0,
            borderLeft: '260px solid transparent',
            borderRight: '260px solid transparent',
            borderBottom: '320px solid rgba(34,224,106,0.08)',
            filter: 'blur(50px)',
            top: '-40px',
          }}
        />
        <div className="relative scale-[0.7] sm:scale-100">
          <Sigil size={240} />
        </div>
      </div>

      <div className="relative text-[5rem] leading-none mt-2 tracking-wider font-bold">
        <span className="relative">
          <BrandName />
        </span>
      </div>

      <div className="relative mt-2">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            filter: 'blur(20px)',
            opacity: 0.3,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 80%)',
            width: '105%',
            left: '-2.5%',
            height: '100%',
            top: '0',
          }}
          aria-hidden="true"
        />
        <h1 className="relative text-[2.5rem] font-light uppercase tracking-[0.12em]"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#ffffff',
          }}
        >
          WELCOME TO THE CULT
        </h1>
      </div>
      <p className="text-base text-text max-w-md mt-3 font-medium">
        Bet on real-world events. Win crypto. Free to play.
      </p>
      <p className="text-xs text-text-muted max-w-md mt-1.5">
        AI-seeded prediction markets, reimagined as an RPG on Base L2.
      </p>
      <LaunchButton className="mt-4" />
      <p className="text-[11px] text-text-muted mt-3 tracking-wide">
        Free daily <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}><span style={{ color: 'var(--color-text)' }}>Mey</span><span style={{ color: 'var(--color-accent)' }}>Influence</span></span> · real USDC cash-out · sweepstakes-legal
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 w-full max-w-2xl">
        {[
          { n: '1', t: 'Pick a quest', d: 'Real-world events, seeded hourly from Polymarket.' },
          { n: '2', t: 'Wager MeyFate', d: 'Back YES or NO with free or premium tokens.' },
          { n: '3', t: 'Win the pool', d: 'Winners split the pot. Cash out to USDC.' },
        ].map((s) => (
          <div key={s.n} className="landing-card p-4 text-center">
            <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-bold"
              style={{ border: '2px solid var(--color-accent)', color: 'var(--color-accent)' }}>{s.n}</div>
            <h3 className="text-sm font-bold text-text uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>{s.t}</h3>
            <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
