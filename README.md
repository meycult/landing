# <img src="public/favicon.svg" width="28" /> MeyCult — Landing

**meycult.com** — The marketing site, whitepaper, and merch shop for the MeyCult prediction market.

---

## <img src="public/products/influence.png" width="20" /> <img src="public/products/fate.png" width="20" /> What Is MeyCult?

A gamified prediction market on Base L2. Players are **Oracles** — part of a cult, preparing heroes for quests, staking <img src="public/products/influence.png" width="14" /> **Cult Influence** and <img src="public/products/fate.png" width="14" /> **Cult Fate** on real-world event outcomes. Built public by [<img src="public/products/fate.png" width="14" /> GodEmperor](https://youtube.com/@godemperorbuddy) as part of the **12 Labors** series.

---

## Site Sections

| Section | Description |
|---|---|
| Hero | Sigil, brand, WELCOME TO THE CULT, Launch MeyCult CTA |
| Merch | Product showcase with live <img src="public/products/influence.png" width="12" /> <img src="public/products/fate.png" width="12" /> images from Fourthwall, ownership pull callout |
| The Mission | "Prediction markets are boring." → "We made them an RPG." |
| How It Works | Oracle role, choose a cult, equip heroes, vote on rewards — vertical flow diagram |
| Dual Currency | <img src="public/products/influence.png" width="14" /> Cult Influence (free-to-earn) + <img src="public/products/fate.png" width="14" /> Cult Fate ($1-pegged premium) |
| Quest Map | 5-phase roadmap: Prototype → Core MVP → Contracts → Quest Markets → Launch |
| Crowdfunding | Email capture for community ownership round |
| Watch Live | YouTube live stream detection + embed |
| Built In Public | YouTube, GitHub, X, Discord, Instagram, TikTok |
| Footer | Legal disclaimer + links |

### Sub-pages

| Route | Page |
|---|---|
| `/shop` | Product grid with image carousels, cart drawer, Fourthwall checkout |
| `/shop/[slug]` | Product detail with variant selector |
| `/whitepaper` | Full 14-section whitepaper |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 4 |
| Fonts | Rajdhani (headings), Space Grotesk (body), Chakra Petch (brand) |
| Icons | Lucide React |
| State | Zustand 5 (cart persistence) |
| Shop API | Fourthwall Storefront API |
| Email Capture | Supabase |
| Stream | YouTube Data API v3 |
| Package Manager | pnpm |

---

## Get Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FOURTHWALL_STOREFRONT_TOKEN` | Publishable token from Fourthwall dashboard |
| `NEXT_PUBLIC_FOURTHWALL_CHECKOUT_DOMAIN` | Your Fourthwall checkout domain |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (for email capture) |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable key |
| `YOUTUBE_API_KEY` | YouTube Data API v3 key (for live detection) |

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--color-accent` | `#22e06a` | Primary jade green |
| `--color-bg` | `#030d07` | Background black |
| `--color-text` | `#d6ffe2` | Body text |
| `--color-premium-400` | `#f0c040` | <img src="public/products/fate.png" width="12" /> Fate gold |
| `--font-heading` | Rajdhani | Section titles |
| `--font-logo` | Chakra Petch | Brand names |

Cards use glassmorphism (`blur(24px) saturate(160%)`) matching the navbar. Background has 4 animated corner glow blobs drifting across the viewport.

---

## Deploy

```bash
pnpm build
```

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## Related

- **App**: [meycult-app](https://github.com/meycult/meycult-app) — The prediction market SPA
- **Merch**: Fourthwall shop at [meyempire-shop.fourthwall.com](https://meyempire-shop.fourthwall.com)
- **YouTube**: [@godemperorbuddy](https://youtube.com/@godemperorbuddy) — 12 Labors of GodEmperor
- **Discord**: [discord.gg/meycult](https://discord.gg/meycult)
- **X**: [@meycult](https://x.com/meycult)

---

Built in public by [GodEmperor](https://youtube.com/@godemperorbuddy). MIT license.
