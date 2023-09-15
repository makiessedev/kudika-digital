import { Input } from './Input'
import { Title } from './Title'
import { Button } from './Button'
import { Container } from './Container'

export function ContactForm() {
  return (
    <Container>
      <Title>fale com o nosso especialista</Title>
      <form className="mt-10 flex flex-col items-center gap-6 md:gap-8">
        <div className="grid gap-3 md:grid-cols-2">
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Telefone" />
          <Input type="text" placeholder="Empresa" />

          <select
            name=""
            id=""
            className="rounded-lg border-2 border-white bg-red-500 font-semibold"
          >
            <option value="">SEGMENTO DA SUA EMPRESA</option>
            <option value="1">Agência de Marketing e Publicidade</option>
            <option value="2">Agronegócio</option>
            <option value="3">Atacado Distribuidor</option>
            <option value="4">Consultoria e Treinamentos</option>
            <option value="5">E-commerce</option>
            <option value="6">Educação e ensino</option>
            <option value="7">Engenharia e Indústria Geral</option>
            <option value="8">Eventos</option>
            <option value="9">Financeiro/Jurídico ou Relacionados</option>
            <option value="10">Imobiliárias</option>
            <option value="11">Mídia e Comunicação</option>
            <option value="12">ONGs</option>
            <option value="13">Saúde e Estética</option>
            <option value="14">Serviços em RH e Coaching</option>
            <option value="15">Turismo e Lazer</option>
            <option value="16">Varejo</option>
            <option value="1">Outros</option>
          </select>

          <Input type="text" placeholder="Assunto" />
        </div>
        <Button>Entrar em contacto</Button>
      </form>
    </Container>
  )
}
