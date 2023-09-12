import { Button } from "./Button";
import { Container } from "./Container";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

export function TalkToUsNow() {
  return (
    <Container>
      <Title>
        PRONTO PARA FALAR COM A Kudika?
      </Title>
      <Paragraph>
        Estamos prontos para falar contigo. Entre em contacto connosco e teremos todo o prazer em ajudar.
      </Paragraph>
      <Button>Fale com kudika</Button>
    </Container>
  )
}