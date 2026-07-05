import type { Metadata } from 'next'
import { Rajdhani, Space_Grotesk, Space_Mono, Chakra_Petch } from 'next/font/google'
import Navbar from '@/components/Navbar'
import MobileNavbar from '@/components/MobileNavbar'
import Footer from '@/components/Footer'
import CornerGlow from '@/components/CornerGlow'
import './globals.css'

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

const chakraPetch = Chakra_Petch({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-logo',
})

export const metadata: Metadata = {
  title: 'MeyCult',
  description: 'A gamified prediction market on Base L2. Turn real-world predictions into an RPG adventure. Welcome to the Cult.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'MeyCult',
    description: 'Where Foresight Becomes Fortune. Gamified prediction market on Base L2.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${rajdhani.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${chakraPetch.variable} min-h-screen bg-bg text-text font-sans antialiased`}>
        <CornerGlow />
        <MobileNavbar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
