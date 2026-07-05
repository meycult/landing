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
          <h1 className="text-4xl font-light uppercase tracking-[0.1em] mt-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
            <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, textTransform: 'none' }}>
              <span style={{ color: 'var(--color-text)' }}>Mey</span>
              <span style={{ color: 'var(--color-accent)' }}>Cult</span>
            </span>{' '}Whitepaper
          </h1>
          <p className="text-sm text-text-muted mt-2">Version 1.0 — July 2026 — <GodEmperorBrand /></p>
        </div>

        <div className="space-y-10">

          <Section title="Abstract">
            <p><BrandName /> is a gamified prediction market where players (&quot;Oracles&quot;) bet on real-world event outcomes through an RPG lens. It uses a dual-currency system — <InfluenceText /> (CLTINF) as a free-to-earn utility token and <FateText /> (CLTFTE) as a $1-pegged premium currency — built on Base (Coinbase L2). A sweepstakes legal model avoids gambling classification by removing consideration via free Alternative Methods of Entry. Prediction outcomes are represented as QuestFragment NFTs (ERC-1155) that are tradeable, collectible, and eventually redeemable for rewards. The platform is built open-source, solo + AI, as part of the 12 Labors of <GodEmperorBrand /> series.</p>
          </Section>

          <Section title="1. Introduction">
            <h3 className="text-sm font-bold text-white mb-2">1.1 The Problem</h3>
            <p>Prediction markets are a revolutionary tool for aggregating information, forecasting outcomes, and hedging risk. Polymarket processed $5B+ in trading volume in 2025. Kalshi operates a CFTC-regulated exchange. Yet these platforms share a critical flaw: <strong className="text-text">they are boring</strong>.</p>
            <p className="mt-2">The user experience is pure DeFi — charts, order books, probability bars. There is no identity, no progression, no story. Users don&apos;t form emotional attachments to their positions. They don&apos;t level up. They don&apos;t collect trophies from their wins. The prediction market industry is a $25B market with zero gamification.</p>
            <h3 className="text-sm font-bold text-white mt-4 mb-2">1.2 The Solution</h3>
            <p><BrandName /> reframes prediction markets as an <strong className="text-text">RPG adventure</strong>. Instead of placing a bet, you accept a Quest. Instead of being a trader, you are an Oracle. Currency isn&apos;t just money — it&apos;s <InfluenceText /> (earned through wisdom) and <FateText /> (your stake in destiny).</p>
            <div className="landing-card p-4 my-4">
              <table className="table-glass">
                <thead><tr><th>Traditional Prediction Market</th><th><BrandName /></th></tr></thead>
                <tbody>
                  <tr><td>Charts and order books</td><td className="text-text">Quest board with lore</td></tr>
                  <tr><td>Trader</td><td className="text-text">Oracle</td></tr>
                  <tr><td>Position</td><td className="text-text">Quest resolution</td></tr>
                  <tr><td>USDC</td><td className="text-text"><InfluenceText /> + <FateText /></td></tr>
                  <tr><td>P&amp;L statement</td><td className="text-text">Virtues, levels, badges</td></tr>
                  <tr><td>Wallet address</td><td className="text-text">Cult alias + faction</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-sm font-bold text-white mt-4 mb-2">1.3 Vision</h3>
            <p>To become the default interface for real-world event speculation — making prediction markets as approachable as playing a game, while retaining all the economic power of on-chain settlement.</p>
          </Section>

          <Section title="2. Market Opportunity">
            <div className="landing-card p-4 mb-4">
              <table className="table-glass">
                <thead><tr><th>Segment</th><th>Size (2025)</th><th>Projected (2028)</th></tr></thead>
                <tbody>
                  <tr><td>Prediction markets</td><td>$5B volume</td><td>$25B+ volume</td></tr>
                  <tr><td>Social casinos</td><td>$5.2B revenue</td><td>$15B revenue</td></tr>
                  <tr><td>Gaming tokens</td><td>$20B market cap</td><td>$50B market cap</td></tr>
                  <tr><td className="text-text">Intersection (gamified markets)</td><td className="text-text">$0</td><td className="text-text">$5B+</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="3. Game Mechanics">
            <h3 className="text-sm font-bold text-white mb-2">Oracles</h3>
            <p>Every player is an Oracle with a handle, alias, cult faction, six virtues (Wisdom, Courage, Prudence, Skill, Temperance, Justice), levels, and badges across 8 chains.</p>
            <h3 className="text-sm font-bold text-white mt-4 mb-2">Quests</h3>
            <p className="mb-2">Binary YES/NO prediction questions about real-world events. Each Quest displays probability bars, volume, category tags, associated Heroes, quest effects, loot tables, and comment threads.</p>
            <h3 className="text-sm font-bold text-white mt-4 mb-2">Six Cults</h3>
            <div className="landing-card p-4 my-3">
              <table className="table-glass">
                <thead><tr><th>Cult</th><th>Virtue</th><th>Bonus</th></tr></thead>
                <tbody>
                  <tr><td>Architects</td><td>Wisdom</td><td>+10% payout on quests held &gt;48h</td></tr>
                  <tr><td>Wardens</td><td>Prudence</td><td>-10% loss on failed predictions</td></tr>
                  <tr><td>Legion</td><td>Courage</td><td>+25% on bets &gt;300, -10% on bets &lt;100</td></tr>
                  <tr><td>Operatives</td><td>Skill</td><td>+5 per quest regardless of outcome</td></tr>
                  <tr><td>Tribunal</td><td>Justice</td><td>+15% payout against 70%+ consensus</td></tr>
                  <tr><td>Monastics</td><td>Temperance</td><td>+15% on most-consistent category</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-sm font-bold text-white mt-4 mb-2">Virtues</h3>
            <p>Six RPG attributes (1-20) across four tiers: Novice to Initiate to Adept to Master. Each virtue modifies prediction outcomes.</p>
          </Section>

          <Section title="4. Token Economy">
            <h3 className="text-sm font-bold text-white mb-2"><InfluenceText size={15} /> (CLTINF) — Tier 1</h3>
            <p>Free-to-earn engagement currency. Unlimited supply, soulbound initially. Earned through daily faucets, correct predictions, and achievements. SEC classification: Digital Tool — not a security.</p>
            <h3 className="text-sm font-bold text-white mt-4 mb-2"><FateText size={15} /> (CLTFTE) — Tier 2</h3>
            <p>$1-pegged premium currency. 1:1 USDC-backed, mint-on-demand. Never sold directly — always a free bonus with <InfluenceText /> pack purchases. Open-loop redemption with 3× playthrough requirement and $50 minimum. Admin protected by 2-day timelock.</p>
          </Section>

          <Section title="5. Economic Model">
            <p className="mb-2"><strong>Influence flows:</strong> Faucet → Predictions → Rewards → Quest fees (burned)</p>
            <p className="mb-2"><strong>Fate flows:</strong> Pack purchase (bonus Fate) → Premium predictions → Winnings → Redemption (after 3× playthrough)</p>
            <p className="mb-2"><strong>Revenue:</strong> Fate pack sales (80%), platform rake (15%), NFT mint fees (5%)</p>
            <p><strong>Inflation control:</strong> Tiered faucet decay on Influence. Fate strictly limited by USDC reserves.</p>
          </Section>

          <Section title="6. Legal Architecture">
            <p className="mb-3"><BrandName /> operates as a <strong className="text-text">promotional sweepstakes</strong>, not a gambling platform. The &quot;consideration&quot; prong of gambling is removed via free Alternative Methods of Entry (AMOE): daily Influence faucet, mail-in postcard entry, registration bonuses, and social promotions.</p>
            <p>Legal in ~35 US states. Fate is closed-loop to avoid money transmitter licensing. No CFTC DCM required. SEC: Digital Tools / Collectibles.</p>
          </Section>

          <Section title="7. Blockchain Architecture">
            <p className="mb-2"><strong>Network:</strong> Base L2 (Coinbase, OP Stack). Chain ID 8453. ~2s block time. ~$0.002/tx gas.</p>
            <div className="landing-card p-4 my-3">
              <table className="table-glass">
                <thead><tr><th>Contract</th><th>Standard</th><th>Lines</th><th>Deploy Cost</th></tr></thead>
                <tbody>
                  <tr><td>CultInfluence.sol</td><td>ERC-20 + ERC-5192 (soulbound)</td><td>52</td><td>~$0.50</td></tr>
                  <tr><td>CultFate.sol</td><td>ERC-20 + Timelock</td><td>34</td><td>~$0.60</td></tr>
                  <tr><td>QuestFragment.sol</td><td>ERC-1155 + Lazy Mint + EIP-712</td><td>98</td><td>~$0.80</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="8. NFTs: QuestFragments">
            <p>ERC-1155 tokens representing prediction outcomes. Token ID = questId × 10 + outcomeCode. Lazy mint via EIP-712 vouchers with nonce replay protection and expiry. 5% royalties via ERC-2981. IPFS metadata via Pinata.</p>
          </Section>

          <Section title="9. Technology Stack">
            <div className="landing-card p-4 my-3">
              <table className="table-glass">
                <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
                <tbody>
                  <tr><td>Smart contracts</td><td>Solidity 0.8.28 + Foundry</td></tr>
                  <tr><td>Chain</td><td>Base L2 (OP Stack)</td></tr>
                  <tr><td>Frontend</td><td>React 19 + TypeScript 6 + Vite 8</td></tr>
                  <tr><td>Auth</td><td>Supabase Auth + Privy.io wallets</td></tr>
                  <tr><td>DB</td><td>Supabase PostgreSQL</td></tr>
                  <tr><td>Gas</td><td>Coinbase Paymaster + ERC-4337</td></tr>
                  <tr><td>Indexing</td><td>The Graph Subgraph</td></tr>
                  <tr><td>IPFS</td><td>Pinata</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="10. Roadmap">
            <div className="space-y-4">
              <PhaseCard phase="1" title="Prototype" details="Design system, branding, visual theme exploration. Created the Holomancer theme with green-on-black holographic glass aesthetic, Chakra Petch wordmark, Sigil iconography, and full brand identity. Built the initial React prototype with all game pages, mock data, and full visual design system ready for production." />
              <PhaseCard phase="2" title="Core MVP" details="Frontend application built with React 19, TypeScript 6, and Vite 8. Integrated Supabase for authentication (email + Google OAuth) and PostgreSQL for game state. Implemented zustand state management with localStorage persistence. Built all core pages: Network, Profile, Hero Profile, Account, Onboarding with faction selection. Integrated Supabase Row Level Security. Live at app.meycult.com." />
              <PhaseCard phase="3" title="Contracts" details={<>Smart contract development and deployment on Base L2 (Coinbase OP Stack). <InfluenceText /> (CLTINF) — ERC-20 soulbound token via ERC-5192 with MINTER, BURNER, PAUSER, UNLOCKER roles. <FateText /> (CLTFTE) — ERC-20 with 2-day admin timelock via AccessControlDefaultAdminRules, MINTER restricted to multisig only. QuestFragment (ERC-1155) with EIP-712 lazy mint vouchers, ERC-2981 5% royalties, nonce replay protection, and IPFS metadata via Pinata. All contracts written in Solidity 0.8.28, tested with Foundry (21 tests at 10K fuzz runs), with Slither static analysis passing. Privy.io embedded non-custodial wallets for seamless onboarding. Coinbase Paymaster + ERC-4337 for gasless transactions (~$0.002/bet).</>} />
              <PhaseCard phase="4" title="Quest Markets" details="Live prediction market engine. Binary YES/NO quest board with real-world event questions. Hero roster system — real-world figures as game characters with D&D alignment, virtue scores, and equipment slots. Tarot card deck system with passive modifiers per virtue. Quest resolution engine with payout calculations based on hero equipment, virtue bonuses, and item effects. Voting system for hero fate and reward distribution. Tier multipliers and badge progression. Category-weighted scoring and streak mechanics." />
              <PhaseCard phase="5" title="Launch" details="Professional security audit via Code4rena or Sherlock ($15-50K budget). Gnosis Safe 3/5 multisig deployment for admin operations. Base Mainnet deployment. Full open source release under MIT license on GitHub. Immunefi bug bounty program ($10K+). YouTube launch stream as part of the 12 Labors of GodEmperor series. Post-launch: cosmetics store, merchandise integration, The Graph subgraph indexing, community governance parameters." />
            </div>
          </Section>

          <Section title="11. Team & Philosophy">
            <p>Solo founder (<GodEmperorBrand />). 12 Labors of <GodEmperorBrand /> series on YouTube. Built open source (MIT). AI-powered. No VC money. No pre-sales. No ICOs. Built in public.</p>
          </Section>

          <Section title="12. Risk Factors">
            <ul className="text-sm text-text-muted space-y-1.5 list-disc pl-5">
              <li><strong className="text-text">Regulatory:</strong> 14 US states ban sweepstakes. Federal regulation evolving. SA status unresolved.</li>
              <li><strong className="text-text">Smart contract:</strong> Unaudited in prototype. Bugs could lose funds. Base L2 depends on Ethereum.</li>
              <li><strong className="text-text">Market:</strong> CLTFTE peg depends on reserves. CLTINF could hyperinflate. Adoption may not materialize.</li>
              <li><strong className="text-text">Operational:</strong> Solo developer (bus factor 1). AI tools may produce bugs. 30-day window is aggressive.</li>
            </ul>
          </Section>

          <Section title="13. Disclaimer">
            <blockquote className="text-xs text-text-muted border-l-2 border-line pl-4 italic leading-relaxed">
              THIS WHITEPAPER IS FOR INFORMATIONAL PURPOSES ONLY. IT DOES NOT CONSTITUTE AN OFFER TO SELL, A SOLICITATION OF AN OFFER TO BUY, OR A RECOMMENDATION OF ANY SECURITY, TOKEN, OR FINANCIAL INSTRUMENT. TOKENS DESCRIBED HEREIN ARE NOT SECURITIES AND ARE NOT INTENDED FOR INVESTMENT PURPOSES. THEY ARE IN-GAME UTILITY ITEMS WITH NO GUARANTEE OF VALUE, LIQUIDITY, OR APPRECIATION. PREDICTION MARKETS INVOLVE RISK — YOU MAY LOSE ALL FUNDS DEPOSITED. COMPLY WITH ALL APPLICABLE LAWS IN YOUR JURISDICTION.
            </blockquote>
          </Section>

          <Section title="14. Conclusion">
            <p><BrandName /> sits at the intersection of prediction markets ($25B to $100B+), gamification, and sweepstakes-legal play (proven at $5B+ revenue). By combining a free-to-earn influence token, $1-pegged premium currency, ERC-1155 NFTs, RPG layer, and clean legal structure on Base L2 — <BrandName /> makes prediction markets approachable for everyone.</p>
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
