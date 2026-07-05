interface LaunchButtonProps {
  label?: string
  href?: string
  className?: string
  small?: boolean
}

export default function LaunchButton({ label = 'Launch', href = 'https://app.meycult.com', className = '', small }: LaunchButtonProps) {
  return (
    <span className={`inline-block rounded-lg p-[2px] hover:scale-[1.02] transition-all ${className}`}
      style={{ background: 'linear-gradient(135deg, #22e06a, #6effa0)' }}>
      <a
        href={href}
        className={`block font-bold tracking-wider rounded-[6px] hover:opacity-90 transition-all ${small ? 'px-3 py-1.5 text-[10px]' : 'px-8 py-2.5 text-sm'}`}
        style={{
          background: 'linear-gradient(135deg, #030d07, #0d5c35)',
          color: '#ffffff',
          boxShadow: '0 0 80px rgba(34,224,106,0.08), 0 0 120px rgba(34,224,106,0.05)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}>{label} </span>
        <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, textTransform: 'none', color: '#ffffff' }}>Mey</span>
        <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, color: 'var(--color-accent)' }}>Cult</span>
      </a>
    </span>
  )
}
