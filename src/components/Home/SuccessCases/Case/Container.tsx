import { ReactNode } from 'react'

type ContainerProps = {
  imagePosition: string
  children: ReactNode
}

export function Container({ imagePosition, children }: ContainerProps) {
  return (
    <section
      className={`py-8 md:flex md:flex-row md:justify-center lg:gap-20 ${
        imagePosition === 'left' && 'md:flex-row-reverse'
      }`}
    >
      {children}
    </section>
  )
}
