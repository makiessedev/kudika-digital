import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2
      className="flex justify-center text-red-500 text-center md:text-left uppercase font-black text-3xl md:text-5xl xl:text-7xl py-6"
    >
      { children }
    </h2>
  )
}