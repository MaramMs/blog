"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CarCard from "./Card";

const SwiperCustom = ({ image, prices }) => {
  return (
    // <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        className="w-full m-0 !pb-10"
      >
        <SwiperSlide>
          <div className="pb-[80px]">
            {/* <CarCard
              image={image}
              title="شيفروليه تاهو"
              buttonText="المزيد من التفاصيل"
              prices={prices}
            /> */}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <CarCard
            image={image}
            title="تويوتا لاندكروزر"
            buttonText="المزيد من التفاصيل"
            prices={prices}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard
            image={image}
            title="نيسان باترول"
            buttonText="المزيد من التفاصيل"
            prices={prices}
          />
        </SwiperSlide> */}
      </Swiper>
    // </div>
  );
};

export default SwiperCustom;
