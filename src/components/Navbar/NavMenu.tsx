import Link from "next/link";
import React, { useEffect } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Separator } from "../ui/separator";
function NavMenu({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  useEffect(() => {
    disableScroll();

    return () => {
      enableScroll(); // Cleanup when component unmounts or toggle changes
    };
  }, [toggle]);
  return (
    <div className="w-full mx-auto max-w-[1440px] overflow-hidden fixed inset-0 bg-white z-40 ">
      <div className="px-2 md:px-12 lg:px-16  xl:px-48 py-4 max-w-screen h-full bg-white ">
        <div className="px-2 pt-20 relative w-full h-full flex flex-col justify-between  gap-16">
          <button
            className="absolute right-0 md:right-2 md:top-4 xl:right-3 lg:top-4 top-0  "
            onClick={() => setToggle(!toggle)}
          >
            <RxCross1 className=" text-black w-4 h-4" />
          </button>
          <div className="flex md:items-center justify-between my-2">
            <div className="flex flex-col gap-8 text-4xl  custom-912:text-6xl   lg:text-4xl text-[#C5C3C3] ">
              <Link href="" className="hover:text-[#296D59]">
                {" "}
                HOME
              </Link>
              <Link href="" className="hover:text-[#296D59]">
                PLANT{" "}
              </Link>
              <Link href="" className="hover:text-[#296D59]">
                FISH{" "}
              </Link>
              <Link href="" className="hover:text-[#296D59]">
                {" "}
                AQUARIUM
              </Link>
              <Link href="" className="hover:text-[#296D59]">
                BLOG{" "}
              </Link>
              <Link href="" className="hover:text-[#296D59]">
                CONTACT{" "}
              </Link>
            </div>
            <div className="hidden md:block">
              <p className="text-xs custom-912:text-sm lg:text-sm text-[#717171] py-4 leading-5">
                we are here to help!
              </p>
              <h2 className="text-3xl  lg:text-4xl font-normal text-[#296D59] leading-10 pb-12  ">
                Need Assistance? <br />
                {"We're Just a Click Away!"}
              </h2>
              <button className="bg-[#296D59] px-2 py-1 text-white rounded-3xl flex items-center justify-between w-36">
                <p className="mr-auto"> Contact Us</p>
                <div className=" p-2  text-black bg-[#37846D] rounded-full ">
                  {" "}
                  <IoArrowForwardSharp className=" text-white rounded-full m-0 p-0" />
                </div>
              </button>
            </div>
          </div>
          <div className="">
            <Separator />
            <div className="flex text-xs gap-6 md:gap-8 lg:text-base mt-2 uppercase text-[#4F4F4F] ">
              <Link href="">Instagram</Link>
              <Link href="">Facebook</Link>
              <Link href="">Tiktok</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
