import { ReactNode } from 'react'

export function ServiceContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mb-10 space-y-2 rounded-lg border-b-8 border-red-500 bg-[#F1E3E3]/20 p-7 md:m-6">
      {children}
    </div>
  )
}
