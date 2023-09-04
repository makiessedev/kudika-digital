import { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-normal text-base text-gray-500/50"
    >
      { children }
    </p>
  )
}