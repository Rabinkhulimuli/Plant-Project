"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem} from "../ui/carousel";
import { plantImages } from "@/config/photo-config";
function ImageCard() {
  const[image,setImage]= useState("/singleProduct/singleProduct.png")
  const renderPlant=()=> plantImages.map((eh)=> {
    return(<CarouselItem
      key={eh.id}
      className="basis-1/3 md:basis-1/4 cursor-pointer md:pl-[24]"
      onClick={()=> setImage(eh.imageUrl)}
      >
          <div
          className=" w-full h-32"
          >
            <Image
            src={`${eh.imageUrl}`}
            alt=""
            width={530}
            height={580}
            className="w-full h-full object-cover rounded-lg"
            />
          </div>
      </CarouselItem>)
  })
  return (
    <div className="flex flex-col gap-3 max-w-[530px]">
      <div>
        <p>{"Plant > Aleo vera"}</p>
      </div>
      <div
      className="h-[580px] max-w-[530px] w-full"
      >
        <Image
          src={image}
          alt=""
          width={530}
          height={580}
          className="w-full h-full rounded-lg object-stretch"
        />
      </div>
      <div className="flex w-full items-center justify-between  ">
        <Carousel
      opts={{
        align:"start",
        loop:true
      }}
      >
       
        <CarouselContent>{renderPlant()}</CarouselContent>

        
      </Carousel>
      </div>
    </div>
  );
}

export default ImageCard;
