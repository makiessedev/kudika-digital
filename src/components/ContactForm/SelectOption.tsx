import { OptionHTMLAttributes, ReactNode } from "react";

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode
}

export function SelectOption({ children, ...props }: OptionProps) {
  return (
    <option 
      className="text-white"
    { ...props }>{ children }</option>
  )
}