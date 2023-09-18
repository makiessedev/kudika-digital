import { ReactNode } from 'react'

export function ServiceContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mb-10 cursor-pointer space-y-2 rounded-lg border-b-8 border-red-500 bg-[#e6d8d8]/20 p-7 transition-all duration-300 hover:border-gray-500 hover:bg-red-500 md:m-6">
      {children}
    </div>
  )
}
