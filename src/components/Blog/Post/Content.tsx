import { ReactNode } from 'react'

export function Content({content}: {content: any}) {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} className="text-base font-normal text-gray-500/90 md:text-base" />
  )
}
