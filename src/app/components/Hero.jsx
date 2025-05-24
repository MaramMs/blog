
"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

import carHero from "../../../public/assets/hero-car.png";
import arrow from "../../../public/assets/arrow.svg";

const Hero = () => {
  return (
    <div className="relative w-full bg-[url('/assets/hero.jpg')] bg-center bg-cover mt-[96px] mb-[120px] rounded-lg overflow-hidden">
      {/* تغطية داكنة */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* المحتوى */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-6 gap-6 max-w-7xl mx-auto">
        
        {/* النص */}
        <div className="text-center lg:text-right flex flex-col gap-4 max-w-full lg:max-w-[55%]">
          <h1 className="text-white font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[50px] leading-[1.6]">
            مدونة كارزفــــــــــــــــــد نحو تجربة سيارات أذكى و أكثر وعياً
          </h1>
          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px]">
            أخبار، مقالات، تحليلات حول عالم السيارات و خدمات كارزفد الذكية
          </p>
        </div>

        {/* الجانب الثاني: صورة + بحث + تصنيفات */}
        <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-auto">
          {/* صورة السيارة والسهم */}
          <div className="flex items-end justify-center gap-2 w-full">
            <Image
              src={arrow}
              width={80}
              height={40}
              alt="arrow"
              className="hidden sm:block"
            />
            <Image
              src={carHero}
              width={240}
              height={160}
              alt="hero car"
              className="h-auto object-contain mx-auto"
            />
          </div>

          {/* مربع البحث */}
          <div className="relative w-full max-w-sm">
            <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-4 text-[#B7B7B7] text-lg" />
            <input
              type="text"
              placeholder="بحث"
              className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] py-[10px] pr-[40px] pl-[14px] bg-white shadow-md text-sm"
            />
          </div>

          {/* التصنيفات */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            <div className="rounded-[8px] bg-[#DD3B4A] px-3 py-2">
              <p className="text-white text-sm font-normal">سيارات هجينة</p>
            </div>
            <div className="rounded-[8px] border border-[#D0D5DD] px-3 py-2">
              <p className="text-white text-sm font-normal">سيارات دفع رباعي</p>
            </div>
            <div className="rounded-[8px] border border-[#D0D5DD] px-3 py-2">
              <p className="text-white text-sm font-normal">سيارات كهربائية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
