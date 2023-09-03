import { Button } from "./Button";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

export function TalkToUsNow() {
  return (
    <section
      className="flex flex-col justify-center items-center lg:items-start px-6 lg:px-20 bg-[url('/background/bg-speak-with.svg')] min-h-[480px] bg-cover gap-6"
    >
      <Title>
        PRONTO PARA FALAR COM A Kudika?
      </Title>
      <Paragraph>
        Estamos prontos para falar contigo. Entre em contacto connosco e teremos todo o prazer em ajudar.
      </Paragraph>
      <Button>Fale com kudika</Button>
    </section>
  )
}