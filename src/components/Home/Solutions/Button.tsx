import Link from 'next/link'
import { ReactNode } from 'react'

export function Button({ children }: { children: ReactNode }) {
  return (
    <Link
      className="flex h-12 w-72 items-center justify-center rounded-full bg-red-500 text-lg font-black uppercase text-white md:h-14 md:w-80"
      href="#!"
    >
      {children}
    </Link>
  )
}
