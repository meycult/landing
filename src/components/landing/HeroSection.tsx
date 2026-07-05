import Sigil from '@/components/Sigil'
import BrandName from '@/components/BrandName'
import LaunchButton from '@/components/LaunchButton'

export default function HeroSection() {
  return (
    <section id="hero" className="section section--hero">
      <div className="relative flex flex-col items-center">
        <div
          className="absolute"
          style={{
            width: '450px',
            height: '400px',
            background: 'radial-gradient(circle at 50% 40%, rgba(34,224,106,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-70px',
          }}
        />
        <div
          className="absolute"
          style={{
            width: 0,
            height: 0,
            borderLeft: '260px solid transparent',
            borderRight: '260px solid transparent',
            borderBottom: '320px solid rgba(34,224,106,0.08)',
            filter: 'blur(50px)',
            top: '-40px',
          }}
        />
        <div className="relative">
          <Sigil size={240} />
        </div>
      </div>

      <div className="relative text-[5rem] leading-none mt-6 tracking-wider font-bold">
        <span className="relative">
          <BrandName />
        </span>
      </div>

      <div className="relative mt-4">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            filter: 'blur(20px)',
            opacity: 0.3,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 80%)',
            width: '105%',
            left: '-2.5%',
            height: '100%',
            top: '0',
          }}
          aria-hidden="true"
        />
        <h1 className="relative text-[2.5rem] font-light uppercase tracking-[0.12em]"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#ffffff',
          }}
        >
          WELCOME TO THE CULT
        </h1>
      </div>
      <p className="text-sm text-text-muted max-w-md mt-6">
        A gamified prediction market on Base L2. Turn real-world event predictions into an RPG adventure.
      </p>
      <LaunchButton className="mt-8" />
    </section>
  )
}
