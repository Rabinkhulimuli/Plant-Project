import React from "react";

function SortPlant() {
  return (
    <div className="w-full flex items-center gap-2">
      <p className="text-xs text-gray-500 text-nowrap ">Sort By:</p>
      <form action="">
        <select name="dropdown" id="dropdown" className="px-4 p-2 rounded-md">
          <option value="" disabled>
            {" "}
            A-Z{" "}
          </option>
          <option value="">Indoor</option>
          <option value="">Indoor</option>
          <option value="">Indoor</option>
          <option value="">Indoor</option>
          <option value="">Indoor</option>
        </select>
      </form>
    </div>
  );
}

export default SortPlant;
