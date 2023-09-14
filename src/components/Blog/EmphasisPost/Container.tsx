import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className="grid grid-flow-row gap-6 space-y-reverse md:grid-cols-2 md:gap-20 md:pt-5">
      {children}
    </section>
  )
}
