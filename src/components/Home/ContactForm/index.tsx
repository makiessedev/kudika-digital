import { Input } from './Input'
import { Title } from './Title'
import { Button } from './Button'
import { Option } from './Option'
import { Container } from './Container'

export function ContactForm() {
  return (
    <Container>
      <Title>fale com o nosso especialista</Title>
      <form className="mt-10 flex flex-col items-center gap-6 md:gap-8">
        <div className="grid gap-3 md:grid-cols-2">
          <Input type="text" placeholder="Digite seu nome" />
          <Input type="email" placeholder="Digite seu email" />
          <Input type="text" placeholder="Digite seu número de telefone" />
          <Input type="text" placeholder="Digite o nome da sua empresa" />

          <select
            name=""
            id=""
            className="w-[350px] rounded-lg border-2 border-white bg-red-500 font-black text-gray-100"
          >
            <option className="max-w-full bg-white uppercase text-gray-500">
              Área de atuação da sua empresa
            </option>
            <Option>Agência de Marketing e Publicidade</Option>
            <Option>Agronegócio</Option>
            <Option>Atacado Distribuidor</Option>
            <Option>Consultoria e Treinamentos</Option>
            <Option>E-commerce</Option>
            <Option>Educação e ensino</Option>
            <Option>Engenharia e Indústria Geral</Option>
            <Option>Eventos</Option>
            <Option>Financeiro/Jurídico ou Relacionados</Option>
            <Option>Imobiliárias</Option>
            <Option>Mídia e Comunicação</Option>
            <Option>ONGs</Option>
            <Option>Saúde e Estética</Option>
            <Option>Serviços em RH e Coaching</Option>
            <Option>Turismo e Lazer</Option>
            <Option>Varejo</Option>
            <Option>Outros</Option>
          </select>

          <Input type="text" placeholder="Assunto" />
        </div>
        <Button>Entrar em contacto</Button>
      </form>
    </Container>
  )
}
