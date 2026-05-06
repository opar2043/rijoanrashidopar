import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function PublicLayout({children} : {children : React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
