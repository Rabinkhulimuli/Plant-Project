import React from 'react'
import Image from 'next/image'
function NavImage() {
  return (
    <div
    className='w-2/5  flex items-center justify-start'
    >
      <Image
      className='w-12 h-full object-cover'
      src={"/florista.png"}
      width={400}
      height={400}
      alt=""
      />
    </div>
  )
}

export default NavImage
