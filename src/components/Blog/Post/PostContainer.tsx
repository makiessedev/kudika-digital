import { ReactNode } from 'react'

export function PostContainer({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-3xl space-y-4 pt-10 md:pt-20">{children}</section>
  )
}
