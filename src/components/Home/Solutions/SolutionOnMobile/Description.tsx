import { ReactNode } from 'react'

export function Description({ children }: { children: ReactNode }) {
  return (
    <p className="text-gray-400 w-[369px] text-base font-normal">{children}</p>
  )
}
