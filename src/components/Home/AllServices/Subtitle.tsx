import { ReactNode } from "react";

export function Subtitle({ children }: { children: ReactNode }) {
  return (
    <h3
      className="text-xl text-gray-500 font-black uppercase"
    >{ children }</h3>
  )
}