import { FreeCheck } from '@/components/SuccessCase/FreeCheck'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <FreeCheck />
    </>
  )
}
