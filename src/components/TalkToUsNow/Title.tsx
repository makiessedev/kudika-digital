import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-gray-100 text-center md:text-left uppercase font-black text-xl md:text-3xl xl:text-5xl"
    >
      { children }
    </h2>
  )
}