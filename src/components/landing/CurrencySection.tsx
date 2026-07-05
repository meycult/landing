export default function CurrencySection() {
  return (
    <section id="currency" className="section">
      <h2 className="section-title text-center mb-2">Dual Currency</h2>
      <p className="section-subtitle">Two tokens. Two roles. One economy.</p>

      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
        <div className="landing-card flex-1 text-center relative overflow-hidden flex flex-col items-center">
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent/5 blur-2xl" />
          <div className="relative w-full pt-0">
            <img src="/products/influence.png" alt="" className="w-36 h-36 object-contain mx-auto -mt-10" />
          </div>
          <div className="px-2 pb-5">
            <h3 className="text-lg font-bold mt-0 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-text">Cult </span>
              <span className="text-accent" style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}>Influence</span>
            </h3>
            <span className="ui-label text-accent/60 block mb-2">CLTINF · Free-to-Earn</span>
            <p className="text-xs text-text-muted leading-relaxed">
              Earned through daily faucets and correct predictions. Soulbound initially. Unlimited supply. Zero barrier to entry.
            </p>
          </div>
        </div>

        <div className="landing-card flex-1 text-center relative overflow-hidden flex flex-col items-center">
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent/5 blur-2xl" />
          <div className="relative w-full pt-0">
            <img src="/products/fate.png" alt="" className="w-36 h-36 object-contain mx-auto -mt-10" />
          </div>
          <div className="px-2 pb-5">
            <h3 className="text-lg font-bold mt-0 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-text">Cult </span>
              <span className="text-accent" style={{ fontFamily: 'var(--font-logo)', fontWeight: 700 }}>Fate</span>
            </h3>
            <span className="ui-label text-accent/60 block mb-2">CLTFTE · $1-Pegged</span>
            <p className="text-xs text-text-muted leading-relaxed">
              Never sold directly — always a free bonus with Cult Influence packs. USDC-backed. Redeemable after 3× playthrough.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
