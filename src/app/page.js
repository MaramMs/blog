"use client";
import Card from "./components/Card";
import CategoryTabs from "./components/CategoryTab";
import Hero from "./components/Hero";
import { FiFilter } from "react-icons/fi";
import YearRangeSlider from "./components/YearRangeSlider";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  const [openModel, setOpenModel] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-[40px] mb-[120px]">
        <div className="flex">
          <CategoryTabs />
        </div>
        <div className="flex flex-col md:flex-row gap-[19px]">
          <div className="flex gap-[20px] flex-1">
            <Card />
            <Card />
          </div>

          <div className="bg-[#F8F8F8] rounded-[8px] shadow-[0px_1px_2px_0px_#0000000D] w-full px-[16px] py-[26px] relative z-0 flex flex-col">
            {/* العنوان */}
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
                  setOpenYear(false); // اقفل الثاني
                }}
              >
                <p className="text-[#1B2532] font-medium text-[14px]">
                  موديل السيارة
                </p>
                <IoIosArrowDown className="text-[#1B253280]" />
              </div>

              {openModel && (
                <div className="mt-2 w-full rounded-[8px] bg-white p-[8px] flex flex-col gap-[19px] mx-auto">
                  <label className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-600"
                    />
                    <span>سيارات فاخرة</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-600"
                    />
                    <span>سيارات كهربائية</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-600"
                    />
                    <span>سيارات كهربائية</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-600"
                    />
                    <span>سيارات كهربائية</span>
                  </label>
                </div>
              )}
            </div>

            <div className="relative z-10 mb-[24px]">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                  setOpenYear(!openYear);
                }}
              >
                <p className="text-[#1B2532] font-medium text-[14px]">
                  سنة الصنع
                </p>
                <IoIosArrowDown className="text-[#1B253280]" />
              </div>

              {openYear && (
                <div className="mt-4 z-20 relative ">
                  <YearRangeSlider />
                </div>
              )}
            </div>
            <div className="mt-auto pt-4">
              <button className="bg-[#1B2532] rounded-[8px] w-[169px] text-white text-[18px] font-bold py-2 m-auto flex justify-center items-center">
                فلترة
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
