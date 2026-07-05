import Sigil from '@/components/Sigil'
import { Users, LayoutGrid, Swords, ThumbsUp, Trophy } from 'lucide-react'
import { InfluenceIcon, FateIcon } from '@/components/TokenIcons'

const nodes = [
  {
    icon: Users,
    title: 'Choose Your Cult',
    text: 'Six factions. Each grants a unique virtue and passive bonus that shapes your playstyle.',
  },
  {
    icon: LayoutGrid,
    title: 'Build Your Tarot Deck',
    text: 'Cards grant passives across all quests. Your permanent loadout. Upgrade as you level.',
  },
  {
    icon: Swords,
    title: 'Equip Heroes for Quests',
    text: 'Real-world figures become heroes. Equip them — your build weights the outcome odds.',
  },
  {
    icon: ThumbsUp,
    title: 'Vote on Rewards & Hero Fate',
    text: 'Stronger builds get heavier votes. Shape what rewards drop and what happens to the hero after.',
  },
  {
    icon: Trophy,
    title: 'Quest Resolves',
    text: 'Outcome decided. Rewards distributed. Items and cards mint at quest milestones. Your legend grows.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section">
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
              Your foresight shapes the outcome. Stake your{' '}
              <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, color: 'var(--color-accent)' }}>
                <InfluenceIcon size={12} /> Influence
              </span>
              {' '}and{' '}
              <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, color: 'var(--color-accent)' }}>
                <FateIcon size={12} /> Fate
              </span>
              {' '}— your build determines your power.
            </p>
          </div>
        </div>

        <div className="relative pl-[68px] mt-4">
          <div className="absolute left-[30px] top-0 bottom-2 w-px"
            style={{ background: 'linear-gradient(180deg, rgba(34,224,106,0.4), rgba(34,224,106,0.1), transparent)' }}
          />

          <div className="space-y-6">
            {nodes.map((node, i) => {
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
