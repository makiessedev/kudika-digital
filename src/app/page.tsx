import Welcome from '@/components/Welcome'
import HumanizingBrands from '@/components/HumanizingBrands'
import SuccessCases from '@/components/SuccessCases'
import Services from '@/components/Services'
import { MarketingTransform } from '@/components/MarketingTransform'
import { AllServices } from '@/components/AllServices'
import { TalkToUsNow } from '@/components/TalkToUsNow'
import { LearningToday } from '@/components/LearningToday'

export default function index() {
  return (
    <>
      <Welcome/>
      <HumanizingBrands/>
      <SuccessCases/>
      <Services />
      <MarketingTransform />
      <AllServices />
      <TalkToUsNow />
      <LearningToday />
    </>
  )
}
