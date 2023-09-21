import { Image } from '../Image'
import { About } from '../About'
import { Title } from '../Title'
import { Paragraph } from '../Paragraph'
import { content } from './content'
import { randomUUID } from 'crypto'

export function Inefor() {
  const ContentAbout = [
    'inefor Corporate, um centro de excelência em Engenharia, Gestão e Negócios, buscava aumentar sua presença online e expandir sua base de clientes.',
    'Eles enfrentaram o desafio de criar uma estratégia digital eficaz para atrair novos públicos, melhorar a experiência do usuário no site e fortalecer sua marca no mercado.',
  ]
  return (
    <>
      <section className="mt-10 space-y-6 overflow-hidden md:space-y-20">
        <About
          imageSrc="/success-case-bmind.png"
          paragraphs={ContentAbout}
          title="inefor corporate"
        />
        {content.map(({ description, imagePosition, paragraphs, title }) => (
          <>
            {description ? (
              <div className="flex-col items-center md:flex">
                <Title>{title}</Title>
                <p className="text-center md:text-left">{description}</p>
              </div>
            ) : (
              <Title>{title}</Title>
            )}
            <div
              key={randomUUID()}
              className="space-y-4 md:grid md:grid-flow-col md:space-x-10"
            >
              {imagePosition === 'left' && (
                <Image src="/success-case-bmind.png" alt="bmind" />
              )}

              <div className="space-y-2 md:my-auto">
                {paragraphs.map((text) => (
                  <Paragraph key={randomUUID()}>{text}</Paragraph>
                ))}
              </div>
              {imagePosition === 'right' && (
                <Image src="/success-case-bmind.png" alt="bmind" />
              )}
            </div>
          </>
        ))}
      </section>
    </>
  )
}
