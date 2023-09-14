import { ReactNode } from 'react'

export function Button({ children }: { children: ReactNode }) {
  return (
    <button className="mx-auto h-12 w-[356px] rounded-lg bg-gray-500 font-semibold uppercase text-gray-100">
      {children}
    </button>
  )
}
