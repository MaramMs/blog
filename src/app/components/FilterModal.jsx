import React, { useState } from 'react'
import { FiFilter } from "react-icons/fi";
import YearRangeSlider from "./YearRangeSlider";
import { IoIosArrowDown } from "react-icons/io";

const FilterModal = () => {
      const [openModel, setOpenModel] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  return (
      <div className="bg-[#F8F8F8] rounded-[8px] shadow-[0px_1px_2px_0px_#0000000D]  px-[16px] py-[26px] relative z-0 flex flex-col ">
      <div className="flex gap-[4px] items-center mb-[24px]">
        <FiFilter className="text-[#DD3B4A] text-[24px]" />
        <span className="text-[#DD3B4A] text-[18px] font-medium">
          فلترة النتائج
        </span>
      </div>

      <div className="relative z-10 mb-[24px]">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            setOpenModel(!openModel);
            setOpenYear(false);
          }}
        >
          <p className="text-[#1B2532] font-medium text-[14px]">موديل السيارة</p>
          <IoIosArrowDown className="text-[#1B253280]" />
        </div>

        {openModel && (
          <div className="mt-2 w-full rounded-[8px] bg-white p-[8px] flex flex-col gap-[19px] mx-auto">
            {["سيارات فاخرة", "سيارات كهربائية", "سيارات كهربائية", "سيارات كهربائية"].map((label, idx) => (
              <label key={idx} className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="form-checkbox text-red-600" />
                <span>{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 mb-[24px]">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenYear(!openYear)}
        >
          <p className="text-[#1B2532] font-medium text-[14px]">سنة الصنع</p>
          <IoIosArrowDown className="text-[#1B253280]" />
        </div>

        {openYear && (
          <div className="mt-4 z-20 relative">
            <YearRangeSlider />
          </div>
        )}
      </div>

      <div className="mt-auto pt-4">
        <button className="bg-[#1B2532] rounded-[8px] w-full text-white text-[18px] font-bold py-2 m-auto flex justify-center items-center">
          فلترة
        </button>
      </div>
    </div>
  )
}

export default FilterModal