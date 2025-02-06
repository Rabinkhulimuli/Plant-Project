import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

function Layout({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <>
        <main
        className='bg-[#F6F6F6] max-w-[1440px] mx-auto font-serif'
        >
            <Navbar/>
            {children}
        </main>
    </>
  )
}

export default Layout
