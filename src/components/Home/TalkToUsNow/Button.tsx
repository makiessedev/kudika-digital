'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

export function Button({ children }: { children: ReactNode }) {

  return (
    <Link
      className="hover:translate-x-1 transition-all focus:border-red-500 flex items-center justify-center rounded-full border-2 border-gray-100 px-8 py-2 text-[0.88rem] font-bold uppercase text-white"
      href="#!"
    >
      {children}
    </Link>
  )
}
