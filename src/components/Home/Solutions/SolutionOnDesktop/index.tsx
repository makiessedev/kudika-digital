'use client'

import { Position } from './Position'
import { Title } from './Title'
import { Description } from './Description'
import { content } from '../Content'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function SolutionOnDesktop() {
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
        className={`first flex max-h-[300px] max-w-[700px] overflow-hidden rounded-lg`}
      >
        {content.map(({ coverSrc, description, id, title }) => (
          <div
            className={`flex h-full w-full ${
              slideNumber === 1
                ? 'first:ml-0'
                : slideNumber === 2
                ? 'first:-ml-[700px]'
                : slideNumber === 3
                ? 'first:-ml-[1400px]'
                : slideNumber === 4
                ? 'first:-ml-[2100px]'
                : slideNumber === 5
                ? 'first:-ml-[2800px]'
                : 'first:-ml-[3500px]'
            }`}
            key={id}
          >
            <Position>{id}</Position>
            <div
              style={{ backgroundImage: `url(${coverSrc})` }}
              className={`flex w-[570px] flex-col items-center justify-center gap-5 bg-cover px-6`}
            >
              <span className="space-y-2 rounded-lg bg-white/90 p-4">
                <Title>{title}</Title>
                <Description>{description}</Description>
              </span>
            </div>
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
