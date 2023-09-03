import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {} 

export function Input({...props}: InputProps) {
  return (
    <input 
      className="rounded-lg bg-red-500 border-2 border-white placeholder:text-gray-100 placeholder:uppercase text-white"
      { ...props }
    />
  )
}