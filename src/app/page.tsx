import Welcome from '@/components/Welcome'
import HumanizingBrands from '@/components/HumanizingBrands'
import SuccessCases from '@/components/SuccessCases'
import Services from '@/components/Services'
import { MarketingTransform } from '@/components/MarketingTransform'

export default function index() {
  return (
    <>
      <Welcome/>
      <HumanizingBrands/>
      <SuccessCases/>
      <Services />
      <MarketingTransform />
      {/* <div className='bg-gray-500 h-9'></div> */}
    </>
  )
}
