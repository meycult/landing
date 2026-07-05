import Link from 'next/link'
import BrandName from '@/components/BrandName'
import GodEmperorBrand from '@/components/GodEmperor'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line/10 py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs text-text-muted">
          <Link href="/whitepaper" className="hover:text-text transition-colors uppercase tracking-wider">
            Whitepaper
          </Link>
          <a href="https://github.com/meycult" className="hover:text-text transition-colors uppercase tracking-wider">
            GitHub
          </a>
          <a href="https://x.com/meycult" className="hover:text-text transition-colors uppercase tracking-wider">
            X
          </a>
          <a href="https://discord.gg/meycult" className="hover:text-text transition-colors uppercase tracking-wider">
            Discord
          </a>
          <a href="https://instagram.com/meycult" className="hover:text-text transition-colors uppercase tracking-wider">
            Instagram
          </a>
          <a href="https://tiktok.com/@meycult" className="hover:text-text transition-colors uppercase tracking-wider">
            TikTok
          </a>
        </div>
        <p className="text-[10px] text-text-muted max-w-2xl leading-relaxed">
          THIS WHITEPAPER IS FOR INFORMATIONAL PURPOSES ONLY. IT DOES NOT CONSTITUTE AN OFFER TO SELL, A SOLICITATION OF AN OFFER TO BUY, OR A RECOMMENDATION OF ANY SECURITY, TOKEN, OR FINANCIAL INSTRUMENT. TOKENS DESCRIBED HEREIN ARE NOT SECURITIES. NO PURCHASE NECESSARY TO ENTER OR WIN. VOID WHERE PROHIBITED. NOT FINANCIAL ADVICE.
        </p>
        <p className="text-[10px] text-text-muted">
          &copy; 2026 <BrandName />. This is a work in progress. Built in public by <GodEmperorBrand />.
        </p>
      </div>
    </footer>
  )
}
