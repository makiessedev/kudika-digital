import { ReactNode } from 'react'
import Image from 'next/image'

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="relative my-2">
      <section className="mx-auto bg-red-500 px-6 md:grid md:h-[677px] md:grid-flow-col md:py-8 lg:px-20">
        <Image
          className="absolute -top-[2px] left-0 right-0 block w-full"
          src="/background/bottom-white-wave.png"
          alt=""
          width={1280}
          height={163}
        />
        {children}
        <Image
          className="absolute -bottom-[10px] left-0 right-0 block w-full lg:-bottom-[20px]"
          src="/background/bottom-black-wave.png"
          alt=""
          width={1280}
          height={163}
        />
      </section>
    </div>
  )
}
