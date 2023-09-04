import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
      <div
        className="relative"
      >
      <section
        className="md:gap-10 bg-red-500 md:h-[677px] lg:px-20 mx-auto px-6 md:grid md:grid-cols-2 md:grid-flow-col md:py-8"
      >
        <img 
          className="absolute block w-full top-0 left-0 right-0"
          src='/background/bottom-white-wave.png' 
          alt=""
          width={1280}
          height={163}
        />
        { children }
        <img 
          className="absolute block w-full left-0 right-0 -bottom-[1px]"
          src='/background/top-white-wave.png' 
          alt=""
          width={1280}
          height={163}
        />
      </section>
      </div>
  )
}