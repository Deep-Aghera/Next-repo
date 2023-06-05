import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({
   subsets: ['latin'],
   weight : ['400','700']
  })

export const metadata = {
  title: 'Traversy course',
  description: 'web developement tutorials',
  keywords : 'web development,webdesing, javascript, vue,css'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
         <main className='container'>{children} </main>
      </body>
    </html>
  )
}
