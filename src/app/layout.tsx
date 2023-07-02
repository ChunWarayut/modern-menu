import './globals.css'
import { K2D } from 'next/font/google'

const k2d = K2D({
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap'
})

export const metadata = {
  title: 'Modern Menu Restaurant',
  description: 'ระบบเมนูอาหารยุคใหม่'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${k2d.className} bg-slate-50`}>{children}</body>
    </html>
  )
}
