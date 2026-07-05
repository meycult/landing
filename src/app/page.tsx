import HeroSection from '@/components/landing/HeroSection'
import MerchSection from '@/components/landing/MerchSection'
import WhatIsSection from '@/components/landing/WhatIsSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import CurrencySection from '@/components/landing/CurrencySection'
import RoadmapSection from '@/components/landing/RoadmapSection'
import CrowdfundingSection from '@/components/landing/CrowdfundingSection'
import StreamSection from '@/components/landing/StreamSection'
import SocialSection from '@/components/landing/SocialSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MerchSection />
      <WhatIsSection />
      <HowItWorksSection />
      <CurrencySection />
      <RoadmapSection />
      <StreamSection />
      <CrowdfundingSection />
      <SocialSection />
    </>
  )
}
