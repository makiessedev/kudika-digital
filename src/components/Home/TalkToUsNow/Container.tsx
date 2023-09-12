import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative"
    >
      <section
        className="flex flex-col justify-center items-center lg:items-start px-6 lg:px-20 bg-gray-500 h-[450px] md:h-[680px] gap-6"
      >
        <img 
          className="absolute block w-full -top-1 left-0 right-0"
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