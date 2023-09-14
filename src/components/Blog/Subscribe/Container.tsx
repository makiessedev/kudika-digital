import { ReactNode } from 'react'
import Image from 'next/image'

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <section className="flex items-center justify-center bg-red-500 px-6 md:py-8 lg:px-20">
        <Image
          className="absolute left-0 right-0 top-0 block w-full"
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
