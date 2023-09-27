import { ReactNode } from 'react'

export function Description({ children }: { children: ReactNode }) {
  return (
    <p className="text-gray-400 w-[350px] text-center text-base font-normal">{children}</p>
  )
}
