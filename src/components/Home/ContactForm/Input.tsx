import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="mx-auto h-12 w-[350px] rounded-lg border-2 border-white bg-red-500 font-semibold text-white placeholder:uppercase placeholder:text-gray-100 md:w-full"
      {...props}
    />
  )
}
