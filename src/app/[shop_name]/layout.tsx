import Image from "next/image"
import Link from "next/link"

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className=''>{children}</div>
    </>
  )
}
