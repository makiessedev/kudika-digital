import { ReactNode } from 'react'

export function CopyrightWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="mt-10 flex items-center justify-center text-white md:mt-20">
      {children}
    </section>
  )
}
