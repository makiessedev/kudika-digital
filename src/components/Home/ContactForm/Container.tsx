import { ReactNode } from 'react'
import Image from 'next/image'

export function Container({ children }: { children: ReactNode }) {
  return (
    <div id='bugdet' className="relative">
      <section className="flex h-[700px] flex-col items-center justify-center gap-4 bg-red-500 px-6 lg:px-20">
        <Image
          className="absolute -top-1 left-0 right-0 block w-full"
          src="/background/bottom-white-wave.png"
          alt=""
          width={1280}
          height={163}
        />
        {children}
        <Image
          className="absolute -bottom-[2px] left-0 right-0 block w-full lg:-bottom-[4px]"
          src="/background/bottom-black-wave.png"
          alt=""
          width={1280}
          height={163}
        />
      </section>
    </div>
  )
}
