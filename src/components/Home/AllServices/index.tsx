import Image from 'next/image'
import { Title } from './Title'
import { Subtitle } from './Subtitle'
import { ListItem } from './ListItem'
import { ServiceContainer } from './ServiceContainer'
import { services } from './content'
import { randomUUID } from 'crypto'

export function AllServices() {
  return (
    <section className="flex flex-col items-center px-6 md:mt-6 lg:px-20">
      <Title>
        O que <br className="md:hidden" /> oferecemos
      </Title>
      <section className="md:grid md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, imgSrc, descriptions }) => (
          <ServiceContainer key={randomUUID()}>
            <Image src={imgSrc} alt="icon" width={60} height={60} />
            <Subtitle>{title}</Subtitle>

            <ul>
              {descriptions.map((value) => (
                <ListItem key={randomUUID()}>{value}</ListItem>
              ))}
            </ul>
          </ServiceContainer>
        ))}
      </section>
    </section>
  )
}
