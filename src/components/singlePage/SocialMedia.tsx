import React from 'react'

import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

function SocialMedia() {
  return (
    <div
        className="flex justify-between  gap-3 "
        >
          <button className="hover:bg-[#296D59] w-full border-[#296D59] border-2  px-3 h-11 rounded-lg flex gap-3 items-center hover:text-white text-[#296D59]">
            <FaWhatsapp 
            className="w-5 h-5"
            />
            <p
            className="inline-flex gap-2"
            > <span
            className="hidden md:block "
            >Chat on</span> Whatsapp</p>
          </button>
          <button
          className="flex gap-3 px-3 h-11 rounded-lg w-full items-center text-[#296D59] border-2 border-[#296D59] hover:bg-[#296D59] hover:text-white"
          >
            <FaFacebookMessenger 
             className="w-5 h-5"
            />
            <p
            className="inline-flex gap-2"
            > <span
            className="hidden md:block text-nowrap"
            >Chat on</span> Messenger</p>
          </button>
        </div>
  )
}

export default SocialMedia
