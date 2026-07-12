import Sigil from '@/components/Sigil'
import { Users, LayoutGrid, Swords, Coins, Trophy } from 'lucide-react'

const nodes = [
  {
    icon: Users,
    title: 'Choose Your Cult',
    text: 'Four cults, four virtues — Driftless, Leviathan, Masonry, Recurrence. Each grants a passive bonus that shapes your playstyle.',
  },
  {
    icon: LayoutGrid,
    title: 'Browse Quests',
    text: 'Real-world prediction markets, auto-seeded every hour from Polymarket and reforged as quests.',
  },
  {
    icon: Swords,
    title: 'Back a Hero',
    text: 'People, nations, teams and cryptos become heroes. Choose who you ride with on each quest.',
  },
  {
    icon: Coins,
    title: 'Wager & Win',
    text: 'Parimutuel: winners split the losing pool (5% house fee). Play free with MeyInfluence or stake $1-pegged MeyFate.',
  },
  {
    icon: Trophy,
    title: 'Reap & Ascend',
    text: 'The quest resolves from its source market. Winners reap the pool, cash out to USDC, and climb their cult\u2019s ranks.',
  },
]

export default function OracleSection() {
  return (
    <section id="oracle" className="section">
      <div className="relative max-w-2xl mx-auto">

        <div className="flex items-center gap-5 landing-card p-6 mb-6 relative">
          <div className="flex-shrink-0">
            <Sigil size={56} />
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

        <div className="relative pl-[68px] mt-4">
          <div className="absolute left-[30px] top-0 bottom-2 w-px"
            style={{ background: 'linear-gradient(180deg, rgba(34,224,106,0.4), rgba(34,224,106,0.1), transparent)' }}
          />

          <div className="space-y-6">
            {nodes.map((node) => {
              const Icon = node.icon
              return (
                <div key={node.title} className="relative">
                  <div className="absolute left-[-28px] top-4 w-[13px] h-[13px] rounded-full"
                    style={{ border: '2px solid rgba(34,224,106,0.4)', backgroundColor: 'var(--color-surface)' }}
                  />
                  <div className="landing-card p-4">
                    <h3 className="text-sm font-bold text-text uppercase tracking-wider flex items-center gap-2">
                      <Icon size={15} className="text-accent flex-shrink-0" />
                      {node.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">{node.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
