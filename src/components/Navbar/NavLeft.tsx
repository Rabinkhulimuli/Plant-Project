"use client";
import { Menu } from "lucide-react";
import React from "react";
import { HiShoppingBag } from "react-icons/hi2";
function NavLeft({toggle,setToggle}:{toggle:boolean,setToggle: React.Dispatch<React.SetStateAction<boolean>>}) {

  return (
    <div className="flex gap-8 items-center  w-2/5 justify-end">
      <HiShoppingBag />
      <div
      onClick={()=> setToggle(!toggle)}
      >
         <Menu 
         
         />
      </div>
       
     

      
    </div>
  );
}

export default NavLeft;
