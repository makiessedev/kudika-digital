import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { SucessCase } from './SucessCase'
import { cases } from './SucessCase/cases'
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
      {cases.map(({ imagePosition, imgSrc, strongText, text, title }) => (
        <SucessCase
          key={randomUUID()}
          title={title}
          strongText={strongText}
          text={text}
          imgSrc={imgSrc}
          imagePosition={imagePosition}
        />
      ))}
    </Container>
  )
}
