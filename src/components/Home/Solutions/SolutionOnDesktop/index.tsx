import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Position } from './Position'
import { Title } from './Title'
import { Description } from './Description'
import { content } from '../Content'

export function SolutionOnDesktop() {
  return (
    <section className="mt-10 flex flex-col">
      <div className="space-y-16">
        {content.map(({ coverSrc, description, id, title }) => (
          <div className="flex" key={id}>
            <Position>{id}</Position>

            <div className="flex flex-col items-center justify-center gap-5 px-6">
              <Title>{title}</Title>
              <Description>{description}</Description>
            </div>

            <div className="flex h-[364px] w-[643px] justify-center bg-red-500">
              <Image
                className="bg-contain"
                src={coverSrc}
                alt="social media"
                width={643}
                height={394}
              />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-10 flex justify-center gap-3">
        <button className="flex h-10 w-14 items-center justify-center bg-red-500 text-gray-100">
          <ChevronLeft />
        </button>

        <button className="flex h-10 w-14 items-center justify-center bg-red-500 text-gray-100">
          <ChevronRight />
        </button>
      </div> */}
    </section>
  )
}
