import { OptionHTMLAttributes, ReactNode } from 'react'

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode
}

export function Option({ children, ...props }: OptionProps) {
  return (
    <option {...props} className="max-w-full bg-white text-gray-500">
      {children}
    </option>
  )
}
