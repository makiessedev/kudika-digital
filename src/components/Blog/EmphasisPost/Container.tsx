import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col gap-6 md:flex-row md:gap-20 md:pt-5">
      {children}
    </section>
  )
}
