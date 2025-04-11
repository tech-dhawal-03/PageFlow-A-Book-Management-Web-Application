import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

function Layout({children} : {children:ReactNode}) {
  return (
   
    <main className='min-h-screen bg-[#0B0F1E]  overflow-x-hidden'>

      <div>
        <Navbar/>
      </div>
      
      {children}
    </main>
    
   
  )
}

export default Layout