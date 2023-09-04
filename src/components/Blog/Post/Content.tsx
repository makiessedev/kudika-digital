import { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-normal text-base md:text-lg text-gray-500/90"
    >
      { children }
    </p>
  )
}