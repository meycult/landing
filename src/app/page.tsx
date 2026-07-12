import HeroSection from '@/components/landing/HeroSection'
import WhatIsSection from '@/components/landing/WhatIsSection'
import OracleSection from '@/components/landing/OracleSection'
import CurrencySection from '@/components/landing/CurrencySection'
import RoadmapSection from '@/components/landing/RoadmapSection'
import MerchSection from '@/components/landing/MerchSection'
import StreamSection from '@/components/landing/StreamSection'
import CrowdfundingSection from '@/components/landing/CrowdfundingSection'
import SocialSection from '@/components/landing/SocialSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <OracleSection />
      <CurrencySection />
      <RoadmapSection />
      <MerchSection />
      <StreamSection />
      <CrowdfundingSection />
      <SocialSection />
    </>
  )
}
