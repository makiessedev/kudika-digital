import { OptionHTMLAttributes, ReactNode } from 'react'

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode
}

export function SelectOption({ children, ...props }: OptionProps) {
  return (
    <option className="mx-auto h-12 w-[356px] text-white" {...props}>
      {children}
    </option>
  )
}
