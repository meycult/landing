export default function BrandName({ className }: { className?: string }) {
  return (
    <span className={className} style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, textTransform: 'none' }}>
      <span style={{
        color: 'var(--color-text)',
        textShadow: '0 0 40px rgba(255,255,255,0.35), 0 0 80px rgba(255,255,255,0.15), 0 0 120px rgba(255,255,255,0.08)',
      }}>Mey</span>
      <span style={{
        color: 'var(--color-accent)',
        textShadow: '0 0 40px rgba(34,224,106,0.5), 0 0 80px rgba(34,224,106,0.25), 0 0 120px rgba(34,224,106,0.12)',
      }}>Cult</span>
    </span>
  )
}
