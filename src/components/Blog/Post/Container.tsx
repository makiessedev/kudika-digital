import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-4xl px-6 pt-28 md:mx-auto md:flex md:flex-col lg:px-20">
      {children}
    </section>
  )
}
