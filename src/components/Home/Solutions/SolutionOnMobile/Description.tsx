import { ReactNode } from 'react'

export function Description({ children }: { children: ReactNode }) {
  return (
    <p className="text-gray-400 w-[310px] mx-auto text-center text-sm font-normal">{children}</p>
  )
}
