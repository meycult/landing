export function InfluenceIcon({ size = 14 }: { size?: number }) {
  return (
    <img
      src="/products/influence.png"
      alt=""
      className="inline-block align-middle"
      style={{ width: size, height: size }}
    />
  )
}

export function FateIcon({ size = 14 }: { size?: number }) {
  return (
    <img
      src="/products/fate.png"
      alt=""
      className="inline-block align-middle"
      style={{ width: size, height: size }}
    />
  )
}

export function InfluenceText({ size = 13 }: { size?: number }) {
  return (
    <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, whiteSpace: 'nowrap' }}>
      <InfluenceIcon size={size} />{' '}
      <span style={{ color: 'var(--color-text)' }}>Cult </span>
      <span style={{ color: 'var(--color-accent)' }}>Influence</span>
    </span>
  )
}

export function FateText({ size = 13 }: { size?: number }) {
  return (
    <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, whiteSpace: 'nowrap' }}>
      <FateIcon size={size} />{' '}
      <span style={{ color: 'var(--color-text)' }}>Cult </span>
      <span style={{ color: 'var(--color-accent)' }}>Fate</span>
    </span>
  )
}
