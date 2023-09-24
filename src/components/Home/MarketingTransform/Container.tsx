import { ReactNode } from 'react'
import Image from 'next/image'

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <section className="flex h-[500px] flex-col items-center justify-center gap-4 bg-red-500 bg-[url('/background/stars-bg-red.png')] bg-cover px-6 md:h-[700px] lg:px-20">
        <Image
          className="absolute -top-1 left-0 right-0 block w-full"
          src="/background/bottom-white-wave.png"
          alt=""
          width={1280}
          height={163}
        />
        {children}
        <Image
          className="absolute -bottom-[1px] left-0 right-0 block w-full"
          src="/background/top-white-wave.png"
          alt=""
          width={1280}
          height={163}
        />
      </section>
    </div>
  )
}
