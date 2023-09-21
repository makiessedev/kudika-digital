import { Header } from '@/components/SuccessCase/Header'
import { Bminds } from '@/components/SuccessCase/bminds'

export default async function index() {
  return (
    <>
      <section className="px-6 pt-32 lg:px-20">
        <Header
          title="bminds"
          text=" O Lançamento da Maior Plataforma de Networking de Angola"
        />
        <Bminds />
      </section>
    </>
  )
}
