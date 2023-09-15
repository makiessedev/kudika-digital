import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className="h-full px-6 pt-28 md:grid md:grid-flow-col md:grid-cols-2 lg:px-20">
      {children}
    </section>
  )
}
