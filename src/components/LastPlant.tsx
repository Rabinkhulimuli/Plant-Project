import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PlantCopyright from "./PlantCopyright";
function LastPlant() {
  return (
    <div>
      <div className="w-full space-y-6 lg:space-y-12 ">
        <div className="relative  flex items-center justify-center ">
          <Image
            src={"/florista.png"}
            className="w-16 object-cover"
            width={104}
            height={76}
            alt=""
          />
        </div>
        <div className="w-full flex items-center justify-center gap-3 ">
          <Link href="">
            <FaInstagram />
          </Link>
          <Link href="">
            <FaFacebookF />
          </Link>
          <Link href="">
            <FaXTwitter />
          </Link>
          <Link href="">
            <FaLinkedin />
          </Link>
        </div>
        <div className="flex justify-center align-center  gap-5 md:gap-6 lg:gap-12">
          <Link href="">Home</Link>
          <Link href="">Plant</Link>
          <Link href="">Fish</Link>
          <Link href="">Aquarium</Link>
          <Link href="">Contact</Link>
        </div>
      </div>
     <PlantCopyright />
    </div>
  );
}

export default LastPlant;
