import { ReactNode } from "react";

export function PostContainer({ children }: { children: ReactNode }) {
  return (
    <div 
      className="space-y-2 mb-4 md:m-6"
    >{ children }</div>
  )
}