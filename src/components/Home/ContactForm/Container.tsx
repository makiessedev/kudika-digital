import { ReactNode } from "react";


export function Container({ children }: { children: ReactNode}) {
  return (
    <div
      className="relative"
    >
      <section
        className="bg-red-500 lg:px-20 px-6 flex flex-col justify-center items-center gap-4 h-[700px]"
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
          className="absolute block w-full left-0 right-0 -bottom-[2px] lg:-bottom-[4px]"
          src='/background/bottom-black-wave.png' 
          alt=""
          width={1280}
          height={163}
        />
      </section>
    </div>
  )
}