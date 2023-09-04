import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h3
      className="font-bold text-2xl md:text-4xl text-gray-500 uppercase"
    >{children}</h3>
  )
}