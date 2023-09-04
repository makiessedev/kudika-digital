import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
      <div
        className="relative"
      >
      <section
        className="flex justify-center items-center bg-red-500 lg:px-20 px-6 md:py-8"
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