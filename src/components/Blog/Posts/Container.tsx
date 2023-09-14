import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col items-center px-6">{children}</section>
  )
}
