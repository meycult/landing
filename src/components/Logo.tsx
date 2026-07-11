import Sigil from './Sigil'

export default function Logo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-3 ${className || ''}`}>
      <Sigil size={size} />
      <div>
        <div
          className="text-lg font-bold tracking-wider leading-none"
          style={{ fontFamily: 'var(--font-logo)' }}
        >
          <span style={{ color: 'var(--color-text)' }}>Mey</span>
          <span style={{ color: 'var(--color-accent)', textShadow: '0 0 12px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.2)' }}>Cult</span>
        </div>
        <div
          className="text-[10px] uppercase tracking-widest mt-0.5"
          style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-logo)' }}
        >
          Wager &amp; Join
        </div>
      </div>
    </a>
  )
}
