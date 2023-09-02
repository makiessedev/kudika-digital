import Image from "next/image";
import { Button } from "../Button";

type SuccessCaseProps = {
  imagePosition: string | 'left' | 'right' ,
  title: string,
  strongText: string,
  text: string,
  imgSrc: string,
}

export function SucessCase(
  { imagePosition, imgSrc, strongText, text, title }: SuccessCaseProps) {

  return (
    <section
      className={`md:flex md:flex-row md:my-20 mb-6 xl:gap-20 md:justify-center ${ imagePosition === 'left' && 'md:flex-row-reverse' }`}
    >
      <div
       className="flex flex-col space-y-3 pt-3 items-center justify-center md:items-center md:space-y-5"
      >
        <h3
          className="font-bold text-2xl md:text-4xl text-gray-500 uppercase"
        >{title}</h3>

        <p
          className="font-bold text-center text-base md:text-lg text-gray-500 md:w-[378px]"
        >{strongText}</p>

        <p
          className="font-regular text-base md:text-lg text-center text-gray-500 mb-1"
        >{text}</p>
        <Button>conheça esse case</Button>
      </div>
      <Image
        className="hidden lg:block" 
        src={imgSrc} 
        width={683} 
        height={365} 
        alt="girl"
      />
    </section>
  )
}