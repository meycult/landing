import Sigil from '@/components/Sigil'
import BrandName from '@/components/BrandName'
import GodEmperorBrand from '@/components/GodEmperor'
import { InfluenceText, FateText } from '@/components/TokenIcons'

export default function WhitepaperPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        <div className="flex flex-col items-center mb-12 pt-4">
          <Sigil size={48} />
          <h1 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em] mt-4 text-center"
            style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
            <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, textTransform: 'none' }}>
              <span style={{ color: 'var(--color-text)' }}>Mey</span>
              <span style={{ color: 'var(--color-accent)' }}>Cult</span>
            </span>{' '}Whitepaper
          </h1>
          <p className="text-sm text-text-muted mt-2">Version 2.0 — July 2026 — <GodEmperorBrand /></p>
          <p className="text-xs text-text-muted mt-1">Currently live on Base Sepolia testnet · Mainnet at cut-over</p>
        </div>

        <div className="space-y-10">

          <Section title="Abstract">
            <p><BrandName /> is a gamified, sweepstakes-legal prediction market. Quests are seeded automatically every hour from <strong className="text-text">Polymarket</strong> via an AI extraction pipeline, then wagered on through an RPG lens. It runs a dual-currency system — <InfluenceText /> (MEYINF), a purchasable free-to-play token, and <FateText /> (MEYFTE), a $1-pegged sweepstakes prize token that is never sold directly and is redeemable for USDC. Wagers settle <strong className="text-text">parimutuel</strong> (winners split the losing pool) with a flat <strong className="text-text">5% house fee</strong>. Built on Base (Coinbase L2) with a custodial treasury, Supabase auth, and Privy embedded wallets. Part of the 12 Labors of <GodEmperorBrand /> series — solo + AI, built in public.</p>
          </Section>

          <Section title="1. Introduction">
            <h3 className="text-sm font-bold text-white mb-2">1.1 The Problem</h3>
            <p>Prediction markets are a powerful tool for forecasting and hedging. Polymarket processed billions in volume. Yet these platforms share a flaw: <strong className="text-text">they are boring</strong> — charts, order books, probability bars. No identity, no progression, no story, and a US legal posture that keeps most people out.</p>
            <h3 className="text-sm font-bold text-white mt-4 mb-2">1.2 The Solution</h3>
            <p><BrandName /> reframes prediction markets as an <strong className="text-text">RPG</strong> and wraps them in a <strong className="text-text">sweepstakes</strong> model that is playable in most US states. Instead of placing a bet, you accept a Quest. Instead of a trader, you are an Oracle. You play with <InfluenceText /> for free, or with <FateText /> won or received as a bonus — and redeemable Fate cashes out to USDC.</p>
            <div className="landing-card p-4 my-4">
              <table className="table-glass">
                <thead><tr><th>Traditional Prediction Market</th><th><BrandName /></th></tr></thead>
                <tbody>
                  <tr><td>Charts and order books</td><td className="text-text">Quest board with lore</td></tr>
                  <tr><td>Trader</td><td className="text-text">Oracle</td></tr>
                  <tr><td>Fixed-odds house risk</td><td className="text-text">Parimutuel pools (no house risk)</td></tr>
                  <tr><td>USDC deposit = wager</td><td className="text-text"><InfluenceText /> (play) + <FateText /> (sweeps)</td></tr>
                  <tr><td>Gambling / CFTC posture</td><td className="text-text">Sweepstakes (free entry)</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="2. How It Works">
            <h3 className="text-sm font-bold text-white mb-2">2.1 Quest Seeding (AI)</h3>
            <p>An hourly pipeline pulls top events from the Polymarket Gamma API, filters to binary YES/NO markets, and uses a DeepSeek LLM to extract a clean question, description, category, and the real-world <strong className="text-text">Heroes</strong> (people, nations, teams, cryptos, corporations, organizations) involved. Live odds, volume, and close dates are synced from the source market; high-confidence quests auto-activate.</p>
            <h3 className="text-sm font-bold text-white mt-4 mb-2">2.2 Wagering (Parimutuel)</h3>
            <p className="mb-2">Each quest has independent <FateText /> and <InfluenceText /> pools per outcome. When a quest resolves, the losing pool is distributed to the winning side proportional to stake, after a flat <strong className="text-text">5% fee</strong>. Winners always get their stake back plus 95% of the losing pool; the house never takes market risk and the pool is always solvent.</p>
            <div className="landing-card p-4 my-3">
              <table className="table-glass">
                <thead><tr><th>Currency</th><th>Escrow</th><th>Payout</th></tr></thead>
                <tbody>
                  <tr><td><FateText /> (primary)</td><td className="text-text">Transferred to treasury</td><td className="text-text">Treasury transfers winnings</td></tr>
                  <tr><td><InfluenceText /> (soulbound)</td><td className="text-text">Burned on wager (gasless)</td><td className="text-text">Minted to winners</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-sm font-bold text-white mt-4 mb-2">2.3 Resolution</h3>
            <p>Quests resolve from the underlying Polymarket market (UMA/closed status + final prices). An admin fallback can resolve or re-run settlement. Payouts are executed automatically from the custodial treasury.</p>
          </Section>

          <Section title="3. Token Economy">
            <h3 className="text-sm font-bold text-white mb-2"><InfluenceText size={15} /> (MEYINF) — Play Token</h3>
            <p>Free-to-play engagement currency. Soulbound (non-transferable), unlimited supply, purchasable in Store packs and earned through play. <strong className="text-text">Never redeemable for cash</strong> — this is the &quot;Gold Coin&quot; tier. Wagered via gasless burn/mint. SEC posture: digital tool, not a security.</p>
            <h3 className="text-sm font-bold text-white mt-4 mb-2"><FateText size={15} /> (MEYFTE) — Sweeps Prize Token</h3>
            <p>$1-pegged, 1:1 USDC-backed. <strong className="text-text">Never sold directly</strong> — only received as a free bonus with Influence pack purchases or via free Alternative Methods of Entry (AMOE). Redeemable for USDC 1:1 after a playthrough requirement and a $50 minimum. Fate minting is reserve-controlled; the reserve is segregated from house revenue.</p>
          </Section>

          <Section title="4. The Store">
            <p className="mb-2">Players buy <InfluenceText /> packs; each pack includes a free <FateText /> bonus. Supporter packs add one-time physical merch and accrue digital cosmetic loot over time — including retroactively for prior buyers.</p>
            <div className="landing-card p-4 my-3">
              <table className="table-glass">
                <thead><tr><th>Pack</th><th>Price</th><th>Influence</th><th>Fate bonus</th></tr></thead>
                <tbody>
                  <tr><td>Base</td><td>$5 / $10 / $20</td><td>5k / 11k / 24k</td><td>5 / 10 / 20</td></tr>
                  <tr><td>Supporter</td><td>$30–$400</td><td>45k – 1M</td><td>30 – 400 + merch</td></tr>
                </tbody>
              </table>
            </div>
            <p>Payment is in USDC on Base. Merch is fulfilled manually during early access.</p>
          </Section>

          <Section title="5. Economic Model">
            <p className="mb-2"><strong>Revenue:</strong> 5% parimutuel fee on Fate wagers (withdrawable as USDC), plus Influence pack sales. The Influence-pool fee is a deflationary sink.</p>
            <p className="mb-2"><strong>Reserve integrity:</strong> Every Fate is backed 1:1 by USDC on entry. Wagering only redistributes escrow, so the reserve always covers redeemable Fate. House fee revenue is tracked separately and can only be withdrawn up to accrued fees — never the user-backing reserve.</p>
            <p><strong>Redemption:</strong> Burn Fate → release its USDC backing → pay the holder. Gated by playthrough + $50 minimum + KYC.</p>
          </Section>

          <Section title="6. Legal Architecture">
            <p className="mb-3"><BrandName /> operates as a <strong className="text-text">promotional sweepstakes</strong>, not a gambling platform. The &quot;consideration&quot; prong is removed via free Alternative Methods of Entry (AMOE): a free daily <FateText /> faucet and a mail-in postal request. <FateText /> is never sold — purchases buy <InfluenceText />, with Fate as a free bonus.</p>
            <p className="mb-3"><strong className="text-text">Redemption:</strong> only Fate that has been played through (wagered at least once) is redeemable, subject to a $50 minimum and KYC. <InfluenceText /> is never redeemable.</p>
            <p>Intended to be legal in ~35 US states. Fate redemption is 1:1 USDC. This is not legal advice; independent counsel is being engaged prior to mainnet, real-money launch.</p>
          </Section>

          <Section title="7. Blockchain Architecture">
            <p className="mb-2"><strong>Network:</strong> Base L2 (Coinbase, OP Stack). Live on Base Sepolia testnet; Base mainnet (Chain ID 8453) at cut-over. Custodial treasury holds escrow, pays winners, and executes redemptions.</p>
            <div className="landing-card p-4 my-3">
              <table className="table-glass">
                <thead><tr><th>Contract</th><th>Standard</th><th>Role</th></tr></thead>
                <tbody>
                  <tr><td>MeyInfluence.sol</td><td>ERC-20 + ERC-5192 (soulbound)</td><td>Play token · mint/burn by role</td></tr>
                  <tr><td>MeyFate.sol</td><td>ERC-20 + Burnable + Timelock</td><td>Sweeps token · reserve-minted</td></tr>
                  <tr><td>QuestFragment.sol</td><td>ERC-1155 + EIP-712</td><td>Outcome collectibles (roadmap)</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="8. Technology Stack">
            <div className="landing-card p-4 my-3">
              <table className="table-glass">
                <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
                <tbody>
                  <tr><td>Smart contracts</td><td>Solidity 0.8.28 + Foundry</td></tr>
                  <tr><td>Chain</td><td>Base L2 (OP Stack)</td></tr>
                  <tr><td>Seeding API</td><td>Python FastAPI + web3.py on Vercel</td></tr>
                  <tr><td>AI extraction</td><td>DeepSeek LLM · Polymarket Gamma API</td></tr>
                  <tr><td>Frontend</td><td>React 19 + TypeScript + Vite</td></tr>
                  <tr><td>Auth / Wallets</td><td>Supabase Auth · Privy embedded wallets</td></tr>
                  <tr><td>Database</td><td>Supabase PostgreSQL (RLS)</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="9. Roadmap">
            <div className="space-y-4">
              <PhaseCard phase="1" title="Foundation" details="Brand, design system, React app, Supabase auth + Privy wallets. Live at app.meycult.com." />
              <PhaseCard phase="2" title="Contracts & Seeding" details={<>MEYINF, MEYFTE, and QuestFragment deployed to Base Sepolia and tested with Foundry. Hourly Polymarket auto-seeding via a Python FastAPI service with DeepSeek LLM extraction, six Hero types, and live odds/volume/deadline sync.</>} />
              <PhaseCard phase="3" title="Markets & Crypto" details={<>Live parimutuel wagering with a custodial treasury. <FateText /> (primary, USDC-backed) and <InfluenceText /> (gasless burn/mint) pools, 5% fee, automatic resolution + payout from Polymarket. Store with Influence packs, Fate bonuses, and supporter tiers.</>} />
              <PhaseCard phase="4" title="Sweepstakes & Redemption" details="Free daily Fate faucet + mail-in AMOE, playthrough-gated redemption to USDC ($50 min), fee-revenue withdrawal, and treasury accounting with strict reserve segregation." />
              <PhaseCard phase="5" title="Mainnet Launch" details="Security audit (Code4rena/Sherlock), Gnosis Safe multisig, Base mainnet deploy, KYC provider, legal sign-off, and the RPG progression layer (heroes, cosmetics, collectible QuestFragments)." />
            </div>
          </Section>

          <Section title="10. Team & Philosophy">
            <p>Solo founder (<GodEmperorBrand />). 12 Labors of <GodEmperorBrand /> series on YouTube. Built open source, AI-powered, in public. No VC, no pre-sale, no ICO.</p>
          </Section>

          <Section title="11. Risk Factors">
            <ul className="text-sm text-text-muted space-y-1.5 list-disc pl-5">
              <li><strong className="text-text">Regulatory:</strong> Sweepstakes law varies by state; some states restrict or ban it. Real-money launch pending legal review.</li>
              <li><strong className="text-text">Custodial:</strong> The treasury holds user funds during early access. Key security and reserve solvency are critical.</li>
              <li><strong className="text-text">Smart contract:</strong> Unaudited during testnet. Audit required before mainnet.</li>
              <li><strong className="text-text">Market:</strong> Fate peg depends on the USDC reserve. Influence can inflate. Adoption may not materialize.</li>
              <li><strong className="text-text">Operational:</strong> Solo developer (bus factor 1). AI tooling may introduce bugs.</li>
            </ul>
          </Section>

          <Section title="12. Disclaimer">
            <blockquote className="text-xs text-text-muted border-l-2 border-line pl-4 italic leading-relaxed">
              THIS WHITEPAPER IS FOR INFORMATIONAL PURPOSES ONLY. IT DOES NOT CONSTITUTE AN OFFER TO SELL, A SOLICITATION OF AN OFFER TO BUY, OR A RECOMMENDATION OF ANY SECURITY, TOKEN, OR FINANCIAL INSTRUMENT. TOKENS DESCRIBED HEREIN ARE IN-GAME / PROMOTIONAL UTILITY ITEMS WITH NO GUARANTEE OF VALUE. MEYCULT IS CURRENTLY A TESTNET PREVIEW AND IS NOT YET OPEN FOR REAL-MONEY PLAY. NOTHING HEREIN IS LEGAL ADVICE. COMPLY WITH ALL APPLICABLE LAWS IN YOUR JURISDICTION.
            </blockquote>
          </Section>

          <Section title="13. Conclusion">
            <p><BrandName /> combines AI-seeded prediction markets, parimutuel settlement, a dual-currency sweepstakes economy, and an RPG layer on Base L2 — making real-world speculation approachable and legal for everyone.</p>
            <p className="mt-3 font-bold text-lg text-center" style={{ fontFamily: 'var(--font-logo)', color: 'var(--color-accent)', textShadow: '0 0 12px rgba(34,224,106,0.5)' }}>Welcome to the Cult. Your quest awaits.</p>
          </Section>

        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-light uppercase tracking-[0.08em] mb-4"
        style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
        {title}
      </h2>
      <div className="text-sm text-text-muted leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}

function PhaseCard({ phase, title, details }: { phase: string; title: string; details: React.ReactNode }) {
  return (
    <div className="landing-card p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
          style={{ backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-accent)', color: 'var(--color-accent)' }}>
          {phase}
        </div>
        <h3 className="text-sm font-bold text-white uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h3>
      </div>
      <p className="text-xs text-text-muted leading-relaxed">{details}</p>
    </div>
  )
}
