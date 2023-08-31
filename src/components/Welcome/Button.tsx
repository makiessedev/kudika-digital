import Link from "next/link";
import { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <Link 
      className="flex items-center justify-center rounded-full uppercase text-white w-80 h-14 bg-red-500 font-black text-lg"
      href='#!'
    >
      { children }
    </Link>
  )
}