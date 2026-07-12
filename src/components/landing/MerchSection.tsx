import BrandName from '@/components/BrandName'

const MERCH_URL = 'https://merch.meycult.com'

const items = [
  { name: 'Cult Tee', img: '/products/cult-tee-meycult-0.jpg', desc: 'The sigil. Wear it.' },
  { name: 'Cult Mug', img: '/products/cult-mug-meycult-0.jpg', desc: 'Your morning ritual. Your quest awaits.' },
  { name: 'Cult Beanie', img: '/products/cult-beanie-meycult-0.jpg', desc: 'Quiet. Devout. Warm.' },
  { name: 'Cult Hoodie', img: '/products/cult-hoodie-meycult-0.jpg', desc: 'For the deep hours.' },
  { name: 'Cult Joggers', img: '/products/cult-joggers-meycult-0.jpg', desc: 'Ascended comfort.' },
]

export default function MerchSection() {
  return (
    <section id="shop" className="section">
      <h2 className="text-center mb-2"
        style={{ color: '#ffffff', fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.1em', textShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
        Official <BrandName /> Gear
      </h2>
      <p className="section-subtitle">
        Physical merch — shipped worldwide. Visit the <a href={MERCH_URL} target="_blank" rel="noopener noreferrer" className="text-accent underline">MeyCult Merch Store</a>.
      </p>

      <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto mt-6">
        {items.map((item) => (
          <a
            key={item.name}
            href={MERCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="landing-card flex flex-col overflow-hidden group w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
          >
            <div className="aspect-square bg-surface/10 flex items-center justify-center p-4 overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-4 border-t border-line/10 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-text uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>{item.name}</h3>
                <p className="text-[10px] text-text-muted">{item.desc}</p>
              </div>
              <span className="text-xs text-accent font-medium">Buy →</span>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href={MERCH_URL} target="_blank" rel="noopener noreferrer"
          className="inline-block rounded-lg p-[2px] hover:scale-[1.02] transition-all" style={{ background: 'linear-gradient(135deg, #22e06a, #6effa0)' }}>
          <span className="block px-8 py-3 rounded-[6px] font-bold text-sm tracking-wider"
            style={{ background: 'linear-gradient(135deg, #030d07, #0d5c35)', color: '#fff' }}>
            Shop <span style={{ fontFamily: 'var(--font-logo)', textTransform: 'none' }}><span style={{ color: '#fff' }}>Mey</span><span style={{ color: 'var(--color-accent)' }}>Cult</span></span> Gear
          </span>
        </a>
      </div>
    </section>
  )
}
