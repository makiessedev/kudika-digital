import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-black text-center text-5xl md:text-7xl text-red-500 uppercase"
    >{ children }</h2>
  )
}