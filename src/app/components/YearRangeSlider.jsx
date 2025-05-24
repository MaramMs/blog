"use client";
import { useState } from "react";

const YearRangeSlider = () => {
  const [minYear, setMinYear] = useState(2005);
  const [maxYear, setMaxYear] = useState(2022);

  return (
    <div className="w-full max-w-md mx-auto bg-white p-[8px]">
      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>{minYear}</span>
        <span>{maxYear}</span>
      </div>

      <div className="relative h-10">
        <input
          type="range"
          min="2000"
          max="2025"
          value={minYear}
          onChange={(e) => setMinYear(Number(e.target.value))}
          className="absolute z-10 w-full h-2 bg-transparent appearance-none pointer-events-auto"
        />
        <input
          type="range"
          min="2000"
          max="2025"
          value={maxYear}
          onChange={(e) => setMaxYear(Number(e.target.value))}
          className="absolute z-10 w-full h-2 bg-transparent appearance-none pointer-events-auto"
        />

        <div className="h-2 bg-gray-300 rounded relative z-0" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-[4px]">
          <span className="text-[18px] font-normal text-[#1B2532]">من:</span>
          <p className="border border-[#D8D8D8] rounded-[5px] p-[4px] text-[#A5A5A5]">
            2015
          </p>

          {/* <input value='2015' className="border"/> */}
        </div>
        <div className="flex gap-[4px]">
          <span className="text-[18px] font-normal text-[#1B2532]">إلى:</span>
          <p className="border border-[#D8D8D8] rounded-[5px] p-[4px] text-[#A5A5A5]">
            2025
          </p>
          {/* <input value='2025' className="border"/> */}
        </div>
      </div>
    </div>
  );
};

export default YearRangeSlider;
