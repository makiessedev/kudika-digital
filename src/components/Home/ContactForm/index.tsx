import { Input } from './Input'
import { Title } from './Title'
import { Button } from './Button'
import { Option } from './Option'
import { Container } from './Container'

export function ContactForm() {
  return (
    <Container>
      <Title>fale com o nosso especialista</Title>
      <form 
        action='https://formsubmit.co/makiesse.dev@gmail.com' 
        method='POST' 
        className="mt-10 flex flex-col items-center gap-6 md:gap-8"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <input type="hidden" name='_next' value={ process.env.NODE_ENV === 'production' ? 'https://kudika-digital.vercel.app/' : 'http://localhost:3000/#bugdet' } />
          <input type="hidden" name='_captcha' value='false' />
          <input 
            type="hidden" 
            name='_autoresponse' 
            value='Recebemos a sua mensagem, entraremos em contacto!' 
          />

          <Input type="text" name='name' placeholder="Digite seu nome" />
          <Input type="email" name='email' placeholder="Digite seu email" />
          <Input type="text" name='number' placeholder="Digite seu número de telefone" />
          <Input type="text" name='company' placeholder="Digite o nome da sua empresa" />

          <select
            name="segment"
            id="segment"
            className="w-[300px] rounded-lg border-2 border-white bg-red-500 font-black text-gray-100"
          >
            <option className="max-w-full bg-white uppercase text-gray-500">
              Área de atuação da sua empresa
            </option>
            <Option value='Agência de Marketing e Publicidade'>Agência de Marketing e Publicidade</Option>
            <Option value='Agronegócio'>Agronegócio</Option>
            <Option value='Atacado Distribuidor'>Atacado Distribuidor</Option>
            <Option value='Consultoria e Treinamentos'>Consultoria e Treinamentos</Option>
            <Option value='E-commerce'>E-commerce</Option>
            <Option value='Educação e ensino'>Educação e ensino</Option>
            <Option value='Engenharia e Indústria Geral'>Engenharia e Indústria Geral</Option>
            <Option value='Eventos'>Eventos</Option>
            <Option value='Financeiro/Jurídico ou Relacionados'>Financeiro/Jurídico ou Relacionados</Option>
            <Option value='Imobiliárias'>Imobiliárias</Option>
            <Option value='Mídia e Comunicação'>Mídia e Comunicação</Option>
            <Option value='ONGs'>ONGs</Option>
            <Option value='Saúde e Estética'>Saúde e Estética</Option>
            <Option value='Serviços em RH e Coaching'>Serviços em RH e Coaching</Option>
            <Option value='Turismo e Lazer'>Turismo e Lazer</Option>
            <Option value='Varejo'>Varejo</Option>
            <Option value='Outros'>Outros</Option>
          </select>

          <Input type="text" placeholder="Assunto" />
        </div>
        <textarea 
          className='mx-auto md:h-[100px] w-[300px] rounded-lg border-2 border-white bg-red-500 font-semibold text-white placeholder:text-white/60 md:w-full'
          name="message" 
          cols={30} 
          rows={3}
          placeholder='Escreva sua mensagem'
        />
        <Button type='submit'>Entrar em contacto</Button>
      </form>
    </Container>
  )
}
