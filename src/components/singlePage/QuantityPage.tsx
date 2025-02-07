"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
function QuantityPage() {
  const [count, setCount] = useState(0);
  return (
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
  );
}

export default QuantityPage;
