import DashboardNav from '@/components/DashboardNav'
import AdminGuard from '@/components/Auth/AdminGuard'
import React from 'react'

export default function DashboardLayout({children} : {children : React.ReactNode}) {
  return (
    <AdminGuard>
      <div className="flex min-h-screen bg-[#020202] relative overflow-x-hidden">
        <DashboardNav />
        <main className="flex-1 lg:ml-72 p-6 md:p-12 pt-24 lg:pt-16">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
        
        {/* Subtle Background Glows */}
        <div className="fixed top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[-10%] left-[20%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </AdminGuard>
  )
}
