import { ReactNode } from "react";

export function PostContainer({ children }: { children: ReactNode }) {
  return (
    <div 
      className="p-7 space-y-2 mb-4 md:m-6"
    >{ children }</div>
  )
}