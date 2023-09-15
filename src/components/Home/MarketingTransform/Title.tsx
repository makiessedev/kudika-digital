import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-lg font-black uppercase text-white md:w-[700px] md:text-2xl xl:text-3xl">
      {children}
    </h2>
  )
}
