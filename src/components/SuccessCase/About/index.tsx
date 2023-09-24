import Image from 'next/image'
import { Title } from '../Title'
import { Paragraph } from '../Paragraph'
import { randomUUID } from 'crypto'

interface AboutProps {
  title: string
  paragraphs: string[]
  imageSrc: string
}

export function About({ imageSrc, paragraphs, title }: AboutProps) {
  return (
    <div className="justify-center space-y-4 md:flex md:space-x-48">
      <div className="space-y-8 md:my-auto md:w-[300px]">
        <Title>{title}</Title>
        <Image
          className="md:hidden"
          src={imageSrc}
          width={683}
          height={365}
          alt=""
        />
        <div className="space-y-2 lg:w-[461px]">
          {paragraphs.map((text) => (
            <Paragraph key={randomUUID()}>{text}</Paragraph>
          ))}
        </div>
      </div>
      <Image
        className="hidden md:block"
        src="/success-case-bmind.png"
        width={623}
        height={345}
        alt="bmind"
      />
    </div>
  )
}
