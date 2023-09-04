import Image from "next/image";

import { Container } from "./Container";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { SucessCase } from "./SucessCase"
import { cases } from "./SucessCase/cases" 
import { randomUUID } from "crypto";

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

      </div>
      {
        cases.map(({imagePosition, imgSrc, strongText, text, title}) => (
          <SucessCase 
            key={randomUUID()}
            title={title} 
            strongText={strongText} 
            text={text}
            imgSrc={imgSrc} 
            imagePosition={imagePosition} 
          />
        ))
      }
    </Container>
  )
}
