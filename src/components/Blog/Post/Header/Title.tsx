import { ReactNode } from "react";

export function Title({ children }: {children: ReactNode}) {
  return (
    <h1
      className="font-black text-7xl text-gray-500/30 uppercase"
    >
      { children }
    </h1>
  )
}