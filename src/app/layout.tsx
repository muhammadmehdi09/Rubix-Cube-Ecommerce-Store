import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import favicon from './favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MRUBIKS',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={`${inter.className}`}>
        <div className='w-[97%] max-w-[2300px] mx-auto'>
      <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>

    </html>
  )
}
