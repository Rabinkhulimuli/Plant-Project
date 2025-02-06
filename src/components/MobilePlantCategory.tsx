import React from 'react'
import { DropdownMenu, DropdownMenuSeparator } from './ui/dropdown-menu'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import Link from 'next/link'
function MobilePlantCategory() {
  return (
    <div
    className='z-10 '
    >
      <DropdownMenu>
          <DropdownMenuTrigger>

            <Menu/>
          </DropdownMenuTrigger>
          <DropdownMenuContent
          className='backdrop:blur-lg bg-white p-4 w-52  rounded-lg my-4 mr-2 shadow-md'
          >
            <DropdownMenuLabel>Plants</DropdownMenuLabel>
            <DropdownMenuItem> <Link
        className='text-xs text-gray-400'
        href="/">All Plants</Link></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem> <Link
        className='text-xs text-gray-400'
        href="">Indoor Plant</Link></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem> <Link
        className='text-xs text-gray-400'
        href="">Outdoor Plant</Link></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link
        className='text-xs text-gray-400'
        href="">Aquatic Plant</Link></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link
        className='text-xs text-gray-400'
        href="">Succulents & Cacti</Link></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link
        className='text-xs text-gray-400'
        href="">Herbs & Edibles</Link></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link
        className='text-xs text-gray-400'
        href="">Tropical Plants</Link></DropdownMenuItem>
        <DropdownMenuSeparator />
        
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default MobilePlantCategory
