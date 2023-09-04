import { Container } from "../Subscribe/Container";
import { Paragraph } from "./Paragraph";
import { RedLine } from "./RedLine";
import { Title } from "./Title";

export function Header() {
  return (
    <Container>
      <Title> Blog </Title>
      <Paragraph> Fique ligado aos nossos artigos </Paragraph>
      <RedLine/>
    </Container>
  )
}