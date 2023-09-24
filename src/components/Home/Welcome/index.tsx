import Image from 'next/image'
import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Button } from './Button'

export default function index() {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 pb-9 font-montserrat md:-mt-2 md:items-start md:space-y-6 md:py-0">
          <Title>Marketing e Publicidade</Title>
          <Paragraph>
            <span className="font-bold">
              Transforme sua marca em um sucesso online{' '}
            </span>{' '}
            com nossos serviços de marketing e publicidade.
          </Paragraph>
          <Button>Consulta grátis</Button>
        </div>
        <Image
          className="mx-auto w-96 md:w-[550px]"
          src="/girl.png"
          width={550}
          height={420}
          alt="girl"
        />
      </Container>
    </>
  )
}
