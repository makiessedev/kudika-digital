import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h3
      className="font-bold text-xl text-gray-500"
    >
      { children }
    </h3>
  )
}