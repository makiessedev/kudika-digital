import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-xl font-black uppercase text-gray-100 md:text-left md:text-3xl xl:text-5xl">
      {children}
    </h2>
  )
}
