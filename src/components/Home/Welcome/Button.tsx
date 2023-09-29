import Link from 'next/link'
import { ReactNode } from 'react'

export function Button({ children }: { children: ReactNode }) {

  return (
    <Link
      className={`hover:brightness-90 focus:brightness-90 flex items-center justify-center transition-all rounded-full bg-red-500 px-8 py-2 text-[0.88rem] font-bold uppercase text-white`}
      href="/#bugdet"
    >
      {children}
    </Link>
  )
}
