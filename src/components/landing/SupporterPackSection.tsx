import BrandName from '@/components/BrandName'
import { InfluenceIcon, FateIcon } from '@/components/TokenIcons'

const SHOP_URL = 'https://shop.meycult.com'

const packs = [
  { name: 'Acolyte', price: 30, influence: '45,000', fate: 30, merch: 'Cult Beanie', img: '/products/cult-beanie-meycult-0.jpg' },
  { name: 'Oracle', price: 60, influence: '90,000', fate: 60, merch: 'Cult Mug', img: '/products/cult-mug-meycult-0.jpg' },
  { name: 'High Oracle', price: 100, influence: '150,000', fate: 100, merch: 'Cult Tee', img: '/products/cult-tee-meycult-0.jpg' },
  { name: 'Prophet', price: 200, influence: '400,000', fate: 200, merch: 'Cult Joggers + Cult Tee', img: '/products/cult-joggers-meycult-0.jpg' },
  { name: 'Ascendant', price: 400, influence: '1,000,000', fate: 400, merch: 'Full Cult Set (5 pieces)', img: '/products/cult-hoodie-meycult-0.jpg', featured: true },
]

function MeyInfluenceName() {
  return <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}><span style={{ color: 'var(--color-text)' }}>Mey</span><span style={{ color: 'var(--color-accent)' }}>Influence</span></span>
}
function MeyFateName() {
  return <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}><span style={{ color: 'var(--color-text)' }}>Mey</span><span style={{ color: 'var(--color-accent)' }}>Fate</span></span>
}

export default function SupporterPackSection() {
  return (
    <section id="shop" className="section">
      <h2 className="text-center mb-2"
        style={{ color: '#ffffff', fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.1em', textShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
        Supporter Packs
      </h2>
      <p className="section-subtitle">
        Buy <MeyInfluenceName /> to play — every pack throws in bonus <MeyFateName />, exclusive merch, and future loot drops.
      </p>

      <div className="text-center mt-4 mb-8">
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer"
          className="inline-block rounded-lg p-[2px] hover:scale-[1.02] transition-all" style={{ background: 'linear-gradient(135deg, #22e06a, #6effa0)' }}>
          <span className="block px-8 py-3 rounded-[6px] font-bold text-sm tracking-wider"
            style={{ background: 'linear-gradient(135deg, #030d07, #0d5c35)', color: '#fff' }}>
            Visit the <BrandName /> Shop
          </span>
        </a>
        <p className="text-xs text-text-muted mt-3">No purchase necessary — claim free <MeyInfluenceName /> daily in the app.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
        {packs.map((p) => (
          <div key={p.name} className="landing-card flex flex-col overflow-hidden group w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            style={p.featured ? { borderColor: 'var(--color-accent)', boxShadow: '0 0 30px rgba(34,224,106,0.18)' } : {}}>
            <div className="aspect-square bg-surface/10 flex items-center justify-center p-4 overflow-hidden">
              <img src={p.img} alt={p.merch} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-4 border-t border-line/10 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-accent uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>{p.name}</h3>
                <span className="text-lg font-bold text-white" style={{ fontVariantNumeric: 'tabular-nums' }}>${p.price}</span>
              </div>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-1.5"><InfluenceIcon size={14} /> {p.influence} <MeyInfluenceName /></p>
                <p className="flex items-center gap-1.5"><FateIcon size={14} /> {p.fate} <MeyFateName /></p>
                <p className="text-text-muted text-xs">{p.merch} <span className="opacity-60">(one-time)</span></p>
              </div>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer"
                className="mt-1 block text-center px-4 py-2 rounded-lg text-xs font-bold tracking-wider transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #030d07, #0d5c35)', border: '1px solid rgba(34,224,106,0.4)', color: '#fff' }}>
                Get it on <span style={{ fontFamily: 'var(--font-logo)', textTransform: 'none' }}><span style={{ color: '#fff' }}>Mey</span><span style={{ color: 'var(--color-accent)' }}>Cult</span></span> Shop
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
