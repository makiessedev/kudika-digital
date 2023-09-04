import { ReactNode } from "react";

export function FooterContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex font-normal justify-between text-sm text-gray-500/50"
    >
      { children }
    </div>
  )
}