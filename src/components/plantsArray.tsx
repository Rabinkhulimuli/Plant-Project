import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { IoArrowForwardSharp } from "react-icons/io5";
import Link from "next/link";

/* type plantType={
    imageUrl:string 
    price:string  
    name:string

} */
function PlantsArray() {
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
  ];
  const renderPlant = plantArray.map((eh) => {
    return (
      <div key={eh.id} className="lg:w-[250px]">
        <div className="relative">
          <div className=" lg:max-w-[250px] lg:h-[360px] relative ">
            <Image
              src={`${eh.imageUrl}`}
              width={250}
              height={360}
              alt=""
              className=" w-full h-full object-cover rounded-lg"
            />

            <div className="w-full absolute bottom-0">
              <div className="flex items-center justify-between gap-4 px-2   md:gap-1 lg:gap-6 py-2 lg:px-4 ">
                <Button
                  className="hidden sm:block w-full bg-[#00000033] backdrop-blur-4 text-white rounded-2xl p-0 lg:px-1 "
                  variant={"outline"}
                >
                  <div
                    className="sm:flex items-center justify-between sm:px-1 
             hidden
             text-xs gap-2 lg:p-1"
                  >
                    <div className="pl-2">Add to wishlist</div>
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      {" "}
                      <IoArrowForwardSharp className=" bg-white   text-black" />
                    </div>{" "}
                  </div>
                </Button>
                <div className="bg-black text-white p-2 rounded-xl text-nowrap text-xs ">
                  Nrs. {eh.price}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href={`singleProduct/${eh.id}`}>
          <div className="w-full  bg-white p-4 rounded-lg my-2 space-y-2">
            <h2>Coffee arabica</h2>

            <div className="text-xs text-gray-400 flex  items-center gap-2">
              view products{" "}
              <div>
                <IoArrowForwardSharp />
              </div>{" "}
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-2   xl:grid-cols-3 gap-4 items-center justify-center  ">
      {renderPlant}
    </div>
  );
}

export default PlantsArray;
