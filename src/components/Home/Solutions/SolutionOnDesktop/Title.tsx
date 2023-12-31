import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h3 className="w-[369px] text-2xl font-black uppercase text-gray-500">
      {children}
    </h3>
  )
}
