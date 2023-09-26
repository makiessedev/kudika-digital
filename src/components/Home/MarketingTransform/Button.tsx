import Link from 'next/link'
import { ReactNode } from 'react'

export function Button({ children }: { children: ReactNode }) {
  return (
    <Link
      className="flex items-center justify-center rounded-full border-2 px-8 py-2 text-[0.88rem] font-bold uppercase text-white"
      href="/#bugdet"
    >
      {children}
    </Link>
  )
}
