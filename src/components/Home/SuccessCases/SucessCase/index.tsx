import Image from 'next/image'
import { Button } from '../Button'
import { Container } from './Container'
import { Title } from './Title'
import { StrongText } from './StrongText'
import { Text } from './Text'

type SuccessCaseProps = {
  imagePosition: string | 'left' | 'right'
  title: string
  strongText: string
  text: string
  imgSrc: string
}

export function SucessCase({
  imagePosition,
  imgSrc,
  strongText,
  text,
  title,
}: SuccessCaseProps) {
  return (
    <Container imagePosition={imagePosition}>
      <div className="flex flex-col items-center justify-center space-y-3 pt-3 md:items-start md:space-y-3">
        <Title>{title}</Title>
        <StrongText>{strongText}</StrongText>
        <Text>{text}</Text>
        <Button>conheça esse case</Button>
      </div>
      <Image
        className="hidden lg:block"
        src={imgSrc}
        width={553}
        height={365}
        alt="girl"
      />
    </Container>
  )
}
