import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
function CaresolPlant({title}:{title:string}) {
  const plantArray = [
    {
      id: 0,
      imageUrl: "/plant.png",
      price: 100,
      name: "plant",
    },
    {
      id: 1,
      imageUrl: "/plant.png",
      price: 100,
      name: "plant",
    },
    {
      id: 2,
      imageUrl: "/plant.png",
      price: 100,
      name: "plant",
    },
    {
      id: 21,
      imageUrl: "/plant.png",
      price: 100,
      name: "plant",
    },
    {
      id: 211,
      imageUrl: "/plant.png",
      price: 100,
      name: "plant",
    },
    {
      id: 2111,
      imageUrl: "/plant.png",
      price: 100,
      name: "plant",
    },
    {
      id: 222,
      imageUrl: "/plant.png",
      price: 100,
      name: "plant",
    },
  ];
  const renderPlant = plantArray.map((eh) => {
    return (
      <CarouselItem key={eh.id} className=" basis-1/1 md:basis-1/2 custom-912:basis-1/3 lg:basis-1/4 cursor-pointer ">
        <div className="relative">
          <div className="w-full max-w-60 h-[360px] relative ">
            <Image
              src={`${eh.imageUrl}`}
              width={250}
              height={360}
              alt=""
              className=" w-full h-full object-cover rounded-lg"
            />

            <div className="absolute bottom-0 w-full">
              <div className="flex items-center justify-between gap-3 py-1  px-1">
                <Button
                  className="sm:block w-full max-w-48 bg-[#00000033] backdrop-blur-4 text-white rounded-2xl p-0 lg:px-1   "
                  variant={"outline"}
                >
                  <div className="flex w-full  items-center justify-between text-xs gap-2 px-1">
                    <div
                    className="pl-2"
                    >Add to wishlist</div>
                    <div
                    className=" p-2 text-black bg-white rounded-full"
                    >
                      {" "}
                      <IoArrowForwardSharp  className="  bg-white rounded-full" />
                    </div>{" "}
                  </div>
                </Button>
                <span className="bg-black text-white p-2 rounded-xl text-nowrap text-xs ">
                  Nrs. {eh.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-60 bg-white p-4 rounded-lg my-2 space-y-2">
          <h2>Coffee arabica</h2>

          <span className="text-xs text-gray-400 flex  items-center gap-2">
            view products{" "}
            <span>
              <IoArrowForwardSharp />
            </span>{" "}
          </span>
        </div>
      </CarouselItem>
    );
  });
  return (
    <div className="mx-6 my-16">
      <div
      className="pb-12"
      >
       <h2 className="w-full text-center text-xl font-semibold">
        {title}
      </h2> 
      </div>
      
      <div
      className=""
      >
      <Carousel
      opts={{
        align:"start",
        loop:true
      }}
      >
        <CarouselPrevious 
         className="hidden lg:flex lg:self-center"
        />
        <CarouselContent>{renderPlant}</CarouselContent>

        <CarouselNext 
        className="hidden lg:flex lg:self-center"
        />
      </Carousel>
      </div>
      
    </div>
  );
}

export default CaresolPlant;
