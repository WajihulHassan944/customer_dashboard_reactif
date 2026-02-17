import type { Metadata } from 'next'
import './globals.css'
import { onest } from '@/lib/fonts'
import Navbar from '@/components/navbar/navbar'
import Sidebar from '@/components/sidebar'
import Container from '@/components/container'

export const metadata: Metadata = {
  title: 'Super Admin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} bg-neutral-800 h-screen overflow-hidden flex`}>
        {/* Left Side: Sidebar */}
        <Sidebar />

        {/* Right Side: Navbar + Content */}
        <div className="flex flex-col flex-1 h-full">
          <Navbar />
           <div className="absolute w-40 h-44 top-0 left-90 bg-indigo-600 rounded-full blur-[200px] opacity-70 pointer-events-none" />
      <div className="absolute w-40 h-44 bottom-10 right-30 bg-purple-600 rounded-full blur-[200px] opacity-70 pointer-events-none" />

          <main className="flex-1 overflow-y-auto">
            <Container>
              {children}
            </Container>
          </main>
        </div>
      </body>
    </html>
  )
}
