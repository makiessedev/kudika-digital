import { Header } from '@/components/SuccessCase/Header'
import { Bmind } from '@/components/SuccessCase/bmind'

export default async function index() {
  return (
    <>
      <section className="px-6 pt-32 lg:px-20">
        <Header />
        <Bmind />
      </section>
    </>
  )
}
