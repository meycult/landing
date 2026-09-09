export default function BrandName({ className }: { className?: string }) {
  return (
    <span className={className} style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, textTransform: 'none' }}>
      <span style={{
        color: 'var(--color-text)',
        textShadow: '0 0 40px rgba(255,255,255,0.35), 0 0 80px rgba(255,255,255,0.15), 0 0 120px rgba(255,255,255,0.08)',
      }}>Mey</span>
      <span className="brand-cult" style={{
        textShadow: '0 0 40px rgba(255,230,0,0.35), 0 0 80px rgba(255,230,0,0.18), 0 0 120px rgba(255,230,0,0.08)',
      }}>Cult</span>
    </span>
  )
}
