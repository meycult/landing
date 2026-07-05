import Sigil from '@/components/Sigil'

const nodes = [
  {
    title: 'Choose Your Cult',
    text: 'Six factions. Each grants a unique virtue and passive bonus that shapes your playstyle.',
  },
  {
    title: 'Build Your Tarot Deck',
    text: 'Cards grant passives across all quests. Your permanent loadout. Upgrade as you level.',
  },
  {
    title: 'Equip Heroes for Quests',
    text: 'Real-world figures become heroes. Equip them — your build weights the outcome odds.',
  },
  {
    title: 'Vote on Rewards & Hero Fate',
    text: 'Stronger builds get heavier votes. Shape what rewards drop and what happens to the hero after.',
  },
  {
    title: 'Quest Resolves',
    text: 'Outcome decided. Rewards distributed. Items and cards mint at quest milestones. Your legend grows.',
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
                Your foresight shapes the outcome. Your build determines your power.
              </p>
            </div>
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
  return (
    <div className="relative pl-[68px] pb-5">
      <div className="absolute left-[26px] top-5 w-[17px] h-[17px] rounded-full"
        style={{ border: '2px solid rgba(34,224,106,0.4)', backgroundColor: 'var(--color-surface)' }}
      />
      <div className="landing-card p-4">
        <h3 className="text-sm font-bold text-text uppercase tracking-wider">{title}</h3>
        <p className="text-xs text-text-muted mt-1 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
