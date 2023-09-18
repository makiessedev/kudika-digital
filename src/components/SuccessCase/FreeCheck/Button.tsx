import Link from 'next/link'
import { ReactNode } from 'react'

export function Button({ children }: { children: ReactNode }) {
  return (
    <Link
      className="bg-red flex h-12 w-72 items-center justify-center rounded-full border-2 border-white text-lg font-black uppercase text-white md:h-14 md:w-80"
      href="#!"
    >
      {children}
    </Link>
  )
}
