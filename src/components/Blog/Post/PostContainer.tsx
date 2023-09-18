import { ReactNode } from 'react'

export function PostContainer({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-6xl space-y-4 pt-10 md:pb-10 md:pt-10">
      {children}
    </section>
  )
}
