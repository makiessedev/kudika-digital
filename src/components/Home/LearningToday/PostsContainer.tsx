import { ReactNode } from 'react'

export function PostsContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 space-y-2 rounded border-b-8 border-red-500 bg-[#F1E3E3]/20 p-7 md:m-6">
      {children}
    </div>
  )
}
