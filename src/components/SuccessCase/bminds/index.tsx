import { Image } from '../Image'
import { About } from '../About'
import { Title } from '../Title'
import { Paragraph } from '../Paragraph'
import { content } from './content'
import { randomUUID } from 'crypto'

export function Bminds() {
  const ContentAbout = [
    'O BMinds é um case de sucesso excepcional, onde nós Kudika Digita tivemos um papel fundamental em seu lançamento bem-sucedido.',
    'Com foco em estratégia, UI/UX, design visual (IDV), mídia social e website, trabalhamos para criar uma experiência única e impactante para os participantes.',
  ]
  return (
    <>
      <section className="mt-10 space-y-6 overflow-hidden md:space-y-20">
        <About
          imageSrc="/success-case-bmind.png"
          paragraphs={ContentAbout}
          title="bminds - brilliant minds"
        />
        {content.map(({ description, imagePosition, paragraphs, title }) => (
          <div key={randomUUID()} className="flex flex-col items-center gap-8">
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
              className="md-space-y-auto space-y-4 md:grid md:grid-flow-col md:space-x-10"
            >
              {imagePosition === 'left' && (
                <Image src="/success-case-bmind.png" alt="bmind" />
              )}

              <div className="space-y-2 md:my-auto md:flex md:w-[460px] md:flex-col md:justify-center">
                {paragraphs.map((text) => (
                  <Paragraph key={randomUUID()}>{text}</Paragraph>
                ))}
              </div>
              {imagePosition === 'right' && (
                <Image src="/success-case-bmind.png" alt="bmind" />
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
