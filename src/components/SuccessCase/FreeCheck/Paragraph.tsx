import { ReactNode } from 'react'

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="w-[300px] text-center text-base font-normal text-white md:w-[370px]">
      {children}
    </p>
  )
}
