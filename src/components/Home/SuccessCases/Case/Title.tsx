import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 text-xl font-bold uppercase text-gray-500 md:text-4xl">
      {children}
    </h3>
  )
}
