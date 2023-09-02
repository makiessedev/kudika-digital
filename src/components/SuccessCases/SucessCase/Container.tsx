import { ReactNode } from "react"

type ContainerProps = {
  imagePosition: string,
  children: ReactNode
}

export function Container({ imagePosition, children }: ContainerProps) {
  return (
    <section
      className={`md:flex md:flex-row md:my-20 mb-6 xl:gap-20 md:justify-center ${ imagePosition === 'left' && 'md:flex-row-reverse' }`}
    >
      { children }
    </section>
  )
}