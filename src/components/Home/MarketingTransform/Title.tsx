import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-white text-center uppercase font-black text-lg md:text-3xl xl:text-4xl md:w-[700px]"
    >
      { children }
    </h2>
  )
}