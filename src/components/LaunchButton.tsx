interface LaunchButtonProps {
  label?: string
  href?: string
  className?: string
  small?: boolean
}

export default function LaunchButton({ label = 'Launch', href = 'https://app.meycult.com', className = '', small }: LaunchButtonProps) {
  return (
    <span className={`inline-block rounded-lg p-[2px] hover:scale-[1.02] transition-all ${className}`}
      style={{ background: 'linear-gradient(135deg, #FFE600, #FFF7A1)' }}>
      <a
        href={href}
        className={`block font-bold tracking-wider rounded-[6px] hover:opacity-90 transition-all whitespace-nowrap ${small ? 'px-3 py-1.5 text-[10px]' : 'px-8 py-2.5 text-sm'}`}
        style={{
          background: 'linear-gradient(135deg, #0B0A02, #4A3D00)',
          color: '#ffffff',
          boxShadow: '0 0 80px rgba(255,230,0,0.08), 0 0 120px rgba(255,230,0,0.05)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}>{label} </span>
        <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, textTransform: 'none', color: '#ffffff' }}>Mey</span>
        <span className="brand-cult" style={{ fontWeight: 700 }}>Cult</span>
      </a>
    </span>
  )
}
