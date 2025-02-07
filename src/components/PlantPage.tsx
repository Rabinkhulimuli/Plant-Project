import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import PlantCategory from "./PlantCategory";
import CaresolPlant from "./CaresolPlant";
import MidPlantImage from "./MidPlantImage";
import MobilePlantCategory from "./MobilePlantCategory";
import LastPlant from "./LastPlant";
import SortPlant from "./SortPlant";

function PlantPage() {
  return (
    <div className="w-full mx-auto max-w-[1440px]">
      <div className="px-2 md:px-12 xl:px-48">
        <div className="h-[200px] md:h-auto">
          <Image
            src={"/Frame 567.png"}
            width={1024}
            height={340}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className=" my-[48px] w-full">
          <div className="w-full flex flex-col gap-2 md:flex-row md:items-center justify-between  md:gap-10 py-1">
            <div className=" w-full flex flex-row xs:flex-col items-center justify-between">
              <p className="text-xs text-gray-500 text-nowrap ">
                420 result found
              </p>
              <div className="mx-1 flex w-full p-1 items-center bg-white max-w-[526px]  rounded-md   ">
                <input
                  className="w-full"
                  type="text"
                  placeholder="Search for anything"
                />
                <div className="w-[36px] bg-[#CBF4E8] h-[30px] flex items-center justify-center rounded-md">
                  <CiSearch />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 w-full md:w-fit justify-between">
              <SortPlant/>
              <div className=" w-full flex gap-2 justify-between md:hidden bg-white shadow px-4 py-1 rounded-lg items-center ">
                <div>Category</div>
                <MobilePlantCategory />
              </div>
            </div>
          </div>
        </div>
        <PlantCategory />

        <div className="space-y-8  lg:space-y-32">
          <CaresolPlant
          title={"Our Best Selling"}
          />
          <MidPlantImage />
          <LastPlant />
        </div>
      </div>
    </div>
  );
}

export default PlantPage;
