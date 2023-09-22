import SectionPartners from './SectionPartners'
import SectionProdcts from './SectionProdcts'
import { Title } from './Title'
import { data } from './data'
import { randomUUID } from 'crypto'

export function Partners() {
  return (
    <section className="gap-6 space-y-10 px-6 py-12 md:flex md:flex-col md:items-center md:justify-center">
      <section className="flex flex-col items-center justify-center">
        <Title>Parceiros</Title>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {data.map(({ image, link, title }) => (
            <SectionPartners
              key={randomUUID()}
              imagePartners={image}
              link={link}
              title={title}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center">
        <Title>Produtos</Title>
        <SectionProdcts />
      </section>
    </section>
  )
}
