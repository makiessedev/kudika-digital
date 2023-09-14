import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-lg font-black uppercase text-white md:w-[700px] md:text-3xl xl:text-4xl">
      {children}
    </h2>
  )
}
