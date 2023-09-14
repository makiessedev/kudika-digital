import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return <section className="h-full px-6 md:mt-1 lg:px-20">{children}</section>
}
