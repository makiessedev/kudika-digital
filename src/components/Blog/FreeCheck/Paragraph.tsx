import { ReactNode } from 'react'

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="w-[300px] text-center text-lg font-normal text-white md:w-[500px] md:text-left">
      {children}
    </p>
  )
}
