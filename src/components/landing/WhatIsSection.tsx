import Sigil from '@/components/Sigil'

export default function WhatIsSection() {
  return (
    <section id="about" className="section">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="mb-6">
          <Sigil size={80} />
        </div>

        <p className="text-4xl text-text-muted line-through opacity-60 mb-2"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 300,
            textShadow: '0 0 40px rgba(255,255,255,0.7), 0 0 80px rgba(255,255,255,0.35)',
          }}>
          Prediction markets are boring.
        </p>

        <h2 className="text-5xl font-light uppercase tracking-[0.08em]"
          style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', textShadow: '0 0 20px rgba(34,224,106,0.3)' }}>
          We made them an RPG.
        </h2>

        <p className="text-sm text-text-muted mt-6 max-w-md leading-relaxed">
          Instead of charts and order books — quests, heroes, and cults. Instead of traders — Oracles. Instead of P&amp;L statements — virtues, levels, and badges. Prediction markets never felt like this.
        </p>
      </div>
    </section>
  )
}
