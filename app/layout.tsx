import { Stint_Ultra_Condensed } from 'next/font/google'
import './globals.css'
import styles from './page.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DopeFish',
  description: 'DopeFish Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <h1>
            My Navbar
          </h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
