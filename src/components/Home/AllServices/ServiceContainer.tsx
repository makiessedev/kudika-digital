import { ReactNode } from "react";

export function ServiceContainer({ children }: { children: ReactNode }) {
  return (
    <div 
      className="bg-[#F1E3E3]/20 border-b-8 border-red-500 rounded p-7 space-y-2 mb-4 md:m-6"
    >{ children }</div>
  )
}