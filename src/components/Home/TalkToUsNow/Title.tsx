import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-xl font-black uppercase text-gray-100 md:text-left md:text-xl xl:text-3xl">
      {children}
    </h2>
  )
}
