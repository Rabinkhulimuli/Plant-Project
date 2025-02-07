
import { HiShoppingBag } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import QuantityPage from "./QuantityPage";
import SocialMedia from "./SocialMedia";
function TopDetailPage() {
  
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
      <QuantityPage/>
      <div
      className="flex flex-col gap-6"
      >
        <SocialMedia/>
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
