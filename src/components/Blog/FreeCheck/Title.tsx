import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-16 text-center text-lg font-medium text-white md:text-left md:text-2xl xl:text-4xl">
      {children}
    </h2>
  )
}
