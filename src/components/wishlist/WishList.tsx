import React from "react";
import SortPlant from "../SortPlant";
import Image from "next/image";
import QuantityPage from "../singlePage/QuantityPage";
import SocialMedia from "../singlePage/SocialMedia";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Separator } from "../ui/separator";
function WishList() {
  return (
    <div className="pt-36 w-full mx-auto font-caudex">
      <div className="w-full flex flex-col gap-12">
        <div className=" w-full flex flex-row items-center justify-between">
          <h2
          className="font-bold text-3xl"
          >Wishlist</h2>
          <div>
            <SortPlant />
          </div>
        </div>
        <div className=" ">
          <div className="flex items-center justify-between">
            <div className="flex gap-8">
              <div className="max-w-52 max-h-64">
                <Image
                  src={"/singleProduct/s3.png"}
                  alt=""
                  width={213}
                  height={254}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-8 py-4">
                <h2 className="font-bold text-xl text-nowrap">
                  Aloe Vera: The Versatile Healing Plant
                </h2>
                <h2 className="font-bold text-2xl">NRs. 340</h2>
                <QuantityPage />
                <SocialMedia />
              </div>
            </div>
            <div className="">
              <button className="flex items-center gap-1 p-3 text-white rounded-2xl bg-[#E00000]">
                <RiDeleteBin6Line />
                <span> Delete</span>
              </button>
            </div>
          </div>
        </div>
        <Separator/>
        <div className=" ">
          <div className="flex items-center justify-between">
            <div className="flex gap-8">
              <div className="max-w-52 max-h-64">
                <Image
                  src={"/singleProduct/s3.png"}
                  alt=""
                  width={213}
                  height={254}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-8 py-4">
                <h2 className="font-bold text-xl text-nowrap">
                  Aloe Vera: The Versatile Healing Plant
                </h2>
                <h2 className="font-bold text-2xl">NRs. 340</h2>
                <QuantityPage />
                <SocialMedia />
              </div>
            </div>
            <div className="">
              <button className="flex items-center gap-1 p-3 text-white rounded-2xl bg-[#E00000]">
                <RiDeleteBin6Line />
                <span> Delete</span>
              </button>
            </div>
          </div>
        </div>
        <Separator/>
        <div className=" ">
          <div className="flex items-center justify-between">
            <div className="flex gap-8">
              <div className="max-w-52 max-h-64">
                <Image
                  src={"/singleProduct/s3.png"}
                  alt=""
                  width={213}
                  height={254}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-8 py-4">
                <h2 className="font-bold text-xl text-nowrap">
                  Aloe Vera: The Versatile Healing Plant
                </h2>
                <h2 className="font-bold text-2xl">NRs. 340</h2>
                <QuantityPage />
                <SocialMedia />
              </div>
            </div>
            <div className="">
              <button className="flex items-center gap-1 p-3 text-white rounded-2xl bg-[#E00000]">
                <RiDeleteBin6Line />
                <span> Delete</span>
              </button>
            </div>
          </div>
        </div>
        <Separator/>
      </div>
    </div>
  );
}

export default WishList;
