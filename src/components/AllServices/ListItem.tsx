import { ReactNode } from "react";

export function ListItem({ children }: { children: ReactNode }) {
  return (
    <li className="text-base font-medium text-gray-500">
      { children }
    </li>
  )
}