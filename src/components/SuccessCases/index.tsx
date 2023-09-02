import Image from "next/image";

import { Container } from "./Container";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { SucessCase } from "./SucessCase"

export default function index() {
  return (
    <Container>
      <div
        className="flex flex-col justify-center items-center md:-mt-2 space-y-4 md:space-y-6 py-9 md:py-0"
      >
        <Title>
          Casos de sucesso
        </Title>
        
        <Paragraph>
              Confia em nos
              e vê os resultados com seus proprios olhos.
        </Paragraph>

        <div 
          className="w-48 md:w-[180px] h-[10px] md:h-[14px] rounded bg-red-500"
        />

      </div>{/* 
      <div
        className="md:flex md:flex-row md:mt-20 md:gap-20 md:justify-center"
      > */}
      <SucessCase />
      
    </Container>
  )
}
