"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CarCard from "./Card";

const SwiperCustom = ({swiperData }) => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next.custom-nav",
          prevEl: ".swiper-button-prev.custom-nav",
        }}
        pagination={{ clickable: true }}
        className="w-[90%] mx-auto !pb-10"
      >
        {swiperData.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="pb-[80px]">
              <CarCard
                image={car.image}
                title={car.title}
                buttonText={car.buttonText}
                prices={car.prices}
                href={car.href}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="swiper-button-prev custom-nav !text-red-600 left-0 !top-1/2 !-translate-y-1/2 absolute z-10" />
      <div className="swiper-button-next custom-nav !text-red-600 right-0 !top-1/2 !-translate-y-1/2 absolute z-10" />
    </div>
  );
};

export default SwiperCustom;