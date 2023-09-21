import { Header } from '@/components/SuccessCase/Header'
import { Inefor } from '@/components/SuccessCase/inefor'

export default async function index() {
  return (
    <>
      <section className="px-6 pt-32 lg:px-20">
        <Header
          title="inefor"
          text="17.000 seguidores no facebook e 25.354 visitas no site em 7 meses"
        />
        <Inefor />
      </section>
    </>
  )
}
