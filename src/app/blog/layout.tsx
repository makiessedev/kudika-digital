import { Subscribe } from "@/components/Blog/Subscribe"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      { children }
      <Subscribe />
    </>
  )
}
