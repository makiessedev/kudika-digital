import { ReactNode } from 'react'

export function Position({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[300px] w-[130px] items-center justify-center bg-red-500 text-6xl font-black text-gray-100 ">
      {children}
    </div>
  )
}
