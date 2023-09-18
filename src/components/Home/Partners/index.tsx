import SectionPartners from './SectionPartners'
import SectionProdcts from './SectionProdcts'
import { Title } from './Title'
import { data } from './data'
import { randomUUID } from 'crypto'

export function Partners() {
  return (
    <section className="flex flex-col items-center px-6 py-12 md:mt-6 lg:px-20">
      <section className="flex flex-col items-center justify-center">
        <Title>Parceiros</Title>
        <div className="lg:flxe-row flex flex-col items-center justify-center gap-16 py-16 md:flex-row xl:flex-row">
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
      <section>
        <Title>Produtos</Title>
        <SectionProdcts />
      </section>
    </section>
  )
}
