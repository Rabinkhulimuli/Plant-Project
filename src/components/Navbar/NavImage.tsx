import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function NavImage() {
  return (
    <div
    className='w-2/5  flex items-center justify-start'
    >
      <Link href="/">
       <Image
      className='w-12 h-full object-cover'
      src={"/florista.png"}
      width={400}
      height={400}
      alt=""
      />
      </Link>
     
    </div>
  )
}

export default NavImage
