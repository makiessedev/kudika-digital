import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section id="solutions" className="mb-20 h-full px-6 lg:px-20">
      {children}
    </section>
  )
}
