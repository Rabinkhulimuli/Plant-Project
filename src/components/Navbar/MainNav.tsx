import Link from 'next/link'
import React from 'react'

function MainNav() {
  return (
    <div
    className='hidden sm:flex h-20 gap-2 md:gap-12 items-center border-l-[0.6px] border-r-[0.6px] border-[#D5D5D5]  w-full  justify-center self-center'
    >
      <Link href="/">Home</Link>
      <Link href="/plant">Plant</Link>
      <Link href="">Fish</Link>
      <Link href="">Aquarium</Link>
      <Link href="">Contact</Link>

    </div>
  )
}

export default MainNav
