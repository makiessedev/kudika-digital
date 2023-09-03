import { Input } from "./Input";
import { Title } from "./Title";
import { SelectOption as Option } from "./SelectOption";
import { Button } from "./Button";

export function ContactForm() {
  return (
    <section
      className="flex justify-center items-center gap-8 flex-col bg-[url('/background/bg-form.svg')] bg-cover px-6 lg:px-20 h-[600px]"
    >
      <Title>
        fale com o nosso especialista
      </Title>
      <form 
        className="flex flex-col items-center gap-6 md:gap-8"
      >
        <div 
          className="grid md:grid-cols-2 gap-3"
        >
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Telefone" />
          <Input type="text" placeholder="Empresa" />

          <select name="" id=""
            className="rounded-lg bg-red-500 border-2 border-white"
          >
            <Option value="">Em qual segmento a sua empresa atua?</Option>
            <Option value="">Agência de Marketing e Publicidade</Option>
            <Option value="">Consultoria e treinamentos</Option>
            <Option value="">Eventos</Option>
            <Option value="">Turismo e lazer</Option>
          </select>
          <Input type="text" placeholder="Assunto" />
        </div>
        <Button>Entrar em contacto</Button>
      </form>
    </section>
  )
}