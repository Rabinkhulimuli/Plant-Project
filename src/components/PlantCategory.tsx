import React from 'react'
import Link from 'next/link'
import PlantsArray from './plantsArray'

function PlantCategory() {
  return (
    <div
    className='md:flex  gap-2 w-full justify-between'
    >
      <div 
      className=' md:flex p-4  custom-912:pr-24 flex-col hidden w-fit  h-fit lg:pr-16 bg-white gap-6 rounded-lg  text-nowrap ' 
      >
        <h2>Plant</h2>
        <Link
        className='text-xs text-gray-400'
        href="/">All Plants</Link>
        <Link
        className='text-xs text-gray-400'
        href="">Indoor Plant</Link>
        <Link
        className='text-xs text-gray-400'
        href="">Outdoor Plant</Link>
        <Link
        className='text-xs text-gray-400'
        href="">Aquatic Plant</Link>
        <Link
        className='text-xs text-gray-400'
        href="">Succulents & Cacti</Link>
        <Link
        className='text-xs text-gray-400'
        href="">Herbs & Edibles</Link>
        <Link
        className='text-xs text-gray-400'
        href="">Tropical Plants</Link>
      </div>
      <div>
        
      </div>


      <div>
        
      </div>
      <PlantsArray/>
    </div>
  )
}

export default PlantCategory
