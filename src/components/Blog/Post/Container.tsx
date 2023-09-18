import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className="px-6 pt-28 md:flex md:flex-col lg:px-20">
      {children}
    </section>
  )
}
