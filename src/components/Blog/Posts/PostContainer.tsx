import { ReactNode } from "react";

export function PostContainer({ children }: { children: ReactNode }) {
  return (
    <div 
      className="mb-4 md:m-6 space-y-4"
    >{ children }</div>
  )
}