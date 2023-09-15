import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className="h-full px-6 py-10 md:mt-1 lg:px-20">{children}</section>
  )
}
