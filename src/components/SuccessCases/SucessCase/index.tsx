import Image from "next/image";
import { Button } from "../Button";

export function SucessCase() {
  return (
    <section
      className="md:flex md:flex-row md:mt-20 md:gap-20 md:justify-center"
    >
      <div
       className="flex flex-col space-y-3 pt-3 items-center justify-center md:items-center md:space-y-5"
      >
        <h3
          className="font-bold text-2xl md:text-4xl text-gray-500 uppercase"
        >bminds</h3>

        <p
          className="font-bold text-center text-base md:text-lg text-gray-500 md:w-[378px]"
        >Lançamento da maior plataforma de networking de Angola.</p>

        <p
          className="font-regular text-base md:text-lg text-center text-gray-500 mb-1"
        >Estratégia, UI/UX, Social Midia, Website</p>
        <Button>conheça esse case</Button>
      </div>
      <Image
        className="hidden md:block" 
        src='/success-case-bmind.png' 
        width={683} 
        height={365} 
        alt="girl"
      />
    </section>
  )
}