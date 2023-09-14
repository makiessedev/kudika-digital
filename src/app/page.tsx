import Welcome from '@/components/Home/Welcome'
import HumanizingBrands from '@/components/Home/HumanizingBrands'
import SuccessCases from '@/components/Home/SuccessCases'
import Services from '@/components/Home/Services'
import { MarketingTransform } from '@/components/Home/MarketingTransform'
import { AllServices } from '@/components/Home/AllServices'
import { TalkToUsNow } from '@/components/Home/TalkToUsNow'
import { LearningToday } from '@/components/Home/LearningToday'
import { ContactForm } from '@/components/Home/ContactForm'

export default function index() {
  return (
    <>
      <Welcome />
      <HumanizingBrands />
      <SuccessCases />
      <Services />
      <MarketingTransform />
      <AllServices />
      <TalkToUsNow />
      <LearningToday />
      <ContactForm />
    </>
  )
}
