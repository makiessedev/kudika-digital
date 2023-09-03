import { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <button 
      className="mx-auto bg-gray-500 uppercase text-gray-100 font-semibold w-[356px] h-12 rounded-lg"
    >
      { children }
    </button>
  )
}