'use client'

import { Title } from './Title'
import { Description } from './Description'
import { content } from '../Content'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function SolutionOnMobile() {
  const [slideNumber, setSlideNumber] = useState(1)

  function incrementSlideNumber() {
    if (slideNumber < content.length) {
      setSlideNumber(slideNumber + 1)
    }
  }

  function decrementSlideNumber() {
    if (slideNumber > 1) {
      setSlideNumber(slideNumber - 1)
    }
  }

  return (
    <section className="mt-10 flex flex-col items-center">
      <div
        className={`first flex h-[300px] w-[400px] overflow-hidden rounded-lg`}
      >
        {content.map(({ coverSrc, description, id, title }) => (
          <div
            key={id}
            style={{
              backgroundImage: `url(${coverSrc})`,
            }}
            className={`flex h-full w-full flex-col items-center justify-center gap-5 bg-cover transition-all ${
              slideNumber === 1
                ? 'first:ml-0'
                : slideNumber === 2
                ? 'first:-ml-[400px]'
                : slideNumber === 3
                ? 'first:-ml-[800px]'
                : slideNumber === 4
                ? 'first:-ml-[1200px]'
                : slideNumber === 5
                ? 'first:-ml-[1600px]'
                : 'first:-ml-[2000px]'
            } `}
          >
            <span className="space-y-2 bg-white/90 p-4">
              <Title>{title}</Title>
              <Description>{description}</Description>
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-3">
        <button
          onClick={decrementSlideNumber}
          className="flex h-10 w-14 items-center justify-center bg-red-500 text-gray-100"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={incrementSlideNumber}
          className="flex h-10 w-14 items-center justify-center bg-red-500 text-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}
