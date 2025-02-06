"use client"
import React, { useEffect, useState } from 'react'
import NavImage from './NavImage'
import MainNav from './MainNav'
import NavLeft from './NavLeft'
import NavMenu from './NavMenu'

function Navbar() {
  const[toggle,setToggle]=useState(false)
  const[isVisible,setIsvisible]= useState(true)
  const[lastScrollY,setLastScrollY]= useState(0)
  useEffect(()=>{
    const handleScroll = ()=> {
      if(window.scrollY > lastScrollY){
        setIsvisible(false)

      }else{
        setIsvisible(true)
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll)
  },[lastScrollY])

  return (
    <div
    className={`max-w-[1440px] mx-auto fixed bg-[#F6F6F6] z-50  top-0 left-0 right-0 w-full transition-transform diration-300 ${isVisible?"translate-y-0":"-translate-y-full"}`}
    >
      <div
    className='relative flex px-2 md:px-12 xl:px-48  items-center justify-between border-b-[0.6px] border-[#D5D5D5] '
    >
      <NavImage/>
      <div
      ></div>
      <MainNav/>
      <NavLeft
      toggle={toggle}
      setToggle={setToggle}
      />
    {toggle &&<NavMenu
    toggle={toggle}
    setToggle={setToggle}
    />}
    </div>
    </div>
  )
}

export default Navbar
