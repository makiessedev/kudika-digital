import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-black uppercase text-red-500 md:text-5xl xl:text-7xl">
      {children}
    </h2>
  )
}
