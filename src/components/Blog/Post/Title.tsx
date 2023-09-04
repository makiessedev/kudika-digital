import { ReactNode } from "react";

export function Title({ children }: {children: ReactNode}) {
  return (
    <h3
      className="font-bold text-gray-500 text-2xl"
    >{ children }</h3>
  )
}