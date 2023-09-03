import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-white text-center uppercase max-w-[400px] font-bold text-2xl md:text-4xl"
    >
      { children }
    </h2>
  )
}