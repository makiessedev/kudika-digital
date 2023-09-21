import NextImage from 'next/image'

export function Image({ alt, src }: { src: string; alt: string }) {
  return (
    <NextImage
      className="hidden md:block"
      src={src}
      width={683}
      height={365}
      alt={alt}
    />
  )
}
