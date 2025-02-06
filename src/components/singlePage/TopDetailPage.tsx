"use client";
import React, { useState } from "react";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
function TopDetailPage() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-3xl text-[#296D59] mb-4">
          Aloe Vera: The Versatile <br /> Healing Plant
        </h2>
        <p className="text-base text-[#4B4B4B]">
          Enhance Your Space with This Low-Maintenance,
          <br /> Health-Boosting Wonder—Perfect for Indoors <br />
          or Outdoor
        </p>
      </div>

      <p className="text-2xl">NRs. 340</p>
      <div className="flex gap-5 items-center justify-start">
        <div>Quantity:</div>
        <div className="flex border-2 rounded-lg">
          <button
            onClick={() =>
              setCount((prev) => {
                if (prev < 1) return 0;
                return prev - 1;
              })
            }
            className=" w-8 h-8 bg-[#EBEBEB] flex items-center justify-center rounded-bl-md rounded-tl-md"
          >
            <FaMinus />{" "}
          </button>
          <div className="w-16 flex items-center justify-center">{count}</div>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className=" w-8 h-8 bg-[#EBEBEB] flex items-center justify-center rounded-br-md rounded-tr-md"
          >
            <FaPlus />{" "}
          </button>
        </div>
      </div>
      <div
      className="flex flex-col gap-6"
      >
        <div
        className="flex gap-3 "
        >
          <button className="bg-[#296D59] px-3 h-11 rounded-lg flex gap-3 items-center text-white">
            <FaWhatsapp 
            className="w-5 h-5"
            />
            <p> Chat on Whatsapp</p>
          </button>
          <button
          className="flex gap-3 px-3 h-11 rounded-lg items-center bg-[#296D59] text-white"
          >
            <FaFacebookMessenger 
             className="w-5 h-5"
            />
            <p>Chat on Messenger</p>
          </button>
        </div>
        <button
        className="w-full border-2 h-11 border-[#296D59] rounded-lg flex  justify-between items-center px-6 "
        >
            <HiShoppingBag />
           <p> Add to wishlist</p>
            <BsArrowRight />
            </button>
      </div>
    </div>
  );
}

export default TopDetailPage;
