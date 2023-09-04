import { ReactNode } from "react";

export function StrongText({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-bold text-center text-base md:text-lg text-gray-500 md:w-[378px]"
    >{children}</p>
  )
}