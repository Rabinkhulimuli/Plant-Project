

import React from 'react'
import { Separator } from './ui/separator'

function PlantCopyright() {
  return (
    <div 
    className='mt-16 md:mt-36'
    >
        <Separator/>
        <div
        className='flex flex-col gap-2 text-xs md:text-base md:flex-row items-center mt-3 justify-between text-[#8B8B8B]'
        >
            <p>@Florista 2024. All rights reserved</p>
            <p>Privacy policy | Term of service | Cookie policy</p>
        </div>
    </div>
  )
}

export default PlantCopyright
