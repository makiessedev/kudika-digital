import { Button } from "./Button";
import { Container } from "./Container";
import { Title } from "./Title";

export function MarketingTransform() {
  return (
    <Container>
      <Title>
        Transforme seu marketing connosco juntos podemos fazer a diferença
      </Title>
      <p
        className="font-normal text-center text-base text-white uppercase md:w-[649px]"
      >
        Entre em contacto connosco, vamos trabalhar juntos para descobrir as tuas necessidades e alcançar os teus objetivos da forma mais eficaz e inovadora possível
      </p>
      <Button> Consulta Grátis </Button>
    </Container>
  )
}