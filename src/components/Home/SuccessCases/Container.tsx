import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section id="cases" className="h-full px-6 py-10 md:pb-0 md:pt-6 lg:px-20">
      {children}
    </section>
  )
}
