import React from "react";
import Image from "next/image";
function MidPlantImage() {
  return (
    <div>
      <div className=" rounded-md w-full md:max-h-[560px] relative overflow-hidden">
        <Image
          src={"/midPlant.jpg"}
          width={1052}
          height={560}
          alt=""
          style={{}}
          className=" rounded-lg w-full h-full  object-cover object-center scale-150    relative"
        />
       <div
       className="absolute inset-0 flex flex-col items-center justify-center"
       >

       
        <h2
        className=" w-full text-lg p-4 text-center text-[#296D59]"
        > <span>Discover the Perfect</span><br /> Greenery for Every Space</h2>
        <p
        className="text-xs text-gray-800 text-center "
        >From Home Interiors to Garden Landscapes,<br /> We Have What You Need</p>
   </div>
      </div>
      
    </div>
  );
}

export default MidPlantImage;
