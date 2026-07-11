import Sigil from '@/components/Sigil'
import { InfluenceIcon, FateIcon } from '@/components/TokenIcons'

const cults = [
  { name: 'Driftless', virtue: 'Clarity', color: '#06b6d4' },
  { name: 'Leviathan', virtue: 'Humility', color: '#3b82f6' },
  { name: 'Masonry', virtue: 'Endurance', color: '#f59e0b' },
  { name: 'Recurrence', virtue: 'Overcoming', color: '#ef4444' },
]

const nodes = [
  {
    title: 'Choose Your Cult',
    text: 'Four cults, four virtues. Each shapes your playstyle and the lens you see quests through.',
  },
  {
    title: 'Browse Quests',
    text: 'Real-world prediction markets, auto-seeded every hour from Polymarket and reforged as quests.',
  },
  {
    title: 'Back a Hero',
    text: 'People, nations, teams, cryptos and more become heroes. Choose who you ride with on each quest.',
  },
  {
    title: 'Wager MeyFate or MeyInfluence',
    text: 'Parimutuel: winners split the losing pool (5% house fee). Play free with MeyInfluence or stake $1-pegged MeyFate.',
  },
  {
    title: 'Reap & Ascend',
    text: 'The quest resolves from its source market. Winners reap the pool, cash out MeyFate to USDC, and climb their cult\u2019s ranks.',
  },
]

export default function OracleSection() {
  return (
    <section id="oracle" className="section">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-[34px] top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(180deg, rgba(34,224,106,0.4), rgba(34,224,106,0.1), rgba(34,224,106,0.4))' }}
        />

        <div className="landing-card p-6 mb-0 relative">
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 -ml-1">
              <Sigil size={52} />
            </div>
            <div>
              <h2 className="text-2xl font-light uppercase tracking-[0.08em]"
                style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', textShadow: '0 0 12px rgba(34,224,106,0.2)' }}>
                You Are an Oracle
              </h2>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Your foresight shapes the outcome. Your cult shapes your power.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {cults.map((c) => (
              <span key={c.name} className="text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 border"
                style={{ color: c.color, borderColor: c.color + '55', backgroundColor: c.color + '14' }}>
                {c.name} · {c.virtue}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-0 mt-0">
          {nodes.map((node) => (
            <FlowCard key={node.title} title={node.title} text={node.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FlowCard({ title, text }: { title: string; text: string }) {
  const isWager = title.startsWith('Wager')
  return (
    <div className="relative pl-[68px] pb-5">
      <div className="absolute left-[26px] top-5 w-[17px] h-[17px] rounded-full"
        style={{ border: '2px solid rgba(34,224,106,0.4)', backgroundColor: 'var(--color-surface)' }}
      />
      <div className="landing-card p-4">
        <h3 className="text-sm font-bold text-text uppercase tracking-wider flex items-center gap-1.5">
          {isWager && <><FateIcon size={13} /><InfluenceIcon size={13} /></>}
          {title}
        </h3>
        <p className="text-xs text-text-muted mt-1 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
