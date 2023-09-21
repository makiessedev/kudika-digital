import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Case } from './Case'
import { cases } from './Case/cases'
import { randomUUID } from 'crypto'
import RedBar from '../../Global/RedBar'

export default function index() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center space-y-4 py-9 md:-mt-2 md:space-y-6 md:py-0">
        <Title>Casos de sucesso</Title>

        <Paragraph>
          Confia em nos e vê os resultados com seus proprios olhos.
        </Paragraph>

        <RedBar />
      </div>
      {cases.map(({ imagePosition, imgSrc, strongText, link, text, title }) => (
        <Case
          key={randomUUID()}
          title={title}
          link={link}
          strongText={strongText}
          text={text}
          imgSrc={imgSrc}
          imagePosition={imagePosition}
        />
      ))}
    </Container>
  )
}
