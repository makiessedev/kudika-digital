import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className="flex h-full flex-col-reverse justify-center pt-28 md:grid md:grid-flow-col md:grid-cols-2 md:px-6 lg:px-20">
      {children}
    </section>
  )
}
