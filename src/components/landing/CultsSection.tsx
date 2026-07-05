const cults = [
  { name: 'Architects', virtue: 'Wisdom', bonus: '+10% payout on quests held &gt;48h', color: '#06b6d4' },
  { name: 'Wardens', virtue: 'Prudence', bonus: '-10% loss on failed predictions', color: '#f59e0b' },
  { name: 'Legion', virtue: 'Courage', bonus: '+25% on bets &gt;300, -10% on bets &lt;100', color: '#ef4444' },
  { name: 'Operatives', virtue: 'Skill', bonus: '+5 per quest regardless of outcome', color: '#10b981' },
  { name: 'Tribunal', virtue: 'Justice', bonus: '+15% payout against 70%+ consensus', color: '#cbd5e1' },
  { name: 'Monastics', virtue: 'Temperance', bonus: '+15% on most-consistent category', color: '#8b5cf6' },
]

export default function CultsSection() {
  return (
    <section id="cults" className="section">
      <h2 className="section-title text-center mb-2">The Six Cults</h2>
      <p className="section-subtitle">Choose your faction during onboarding. Your cult shapes your destiny.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {cults.map((cult) => (
          <div key={cult.name} className="landing-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: cult.color, boxShadow: `0 0 8px ${cult.color}80` }} />
              <h3 className="text-sm font-bold text-text">{cult.name}</h3>
            </div>
            <p className="ui-label mb-1" style={{ color: cult.color }}>{cult.virtue}</p>
            <p className="text-xs text-text-muted leading-relaxed">{cult.bonus}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
