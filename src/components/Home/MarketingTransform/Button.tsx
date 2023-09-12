import Link from "next/link";
import { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <Link 
      className="flex items-center justify-center rounded-full w-[307px] uppercase text-white px-8 py-2 bg-red-500 border-2 border-gray-100 font-bold text-[0.88rem] mx-auto"
      href='#!'
    >
      { children }
    </Link>
  )
}