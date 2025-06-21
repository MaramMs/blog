"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CarCard from "./Card";

const SwiperCustom = ({ image, prices,swiperData }) => {
  return (
    // <div className="relative">
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
      navigation={true}
      pagination={{ clickable: true }}
      className="w-full m-0 !pb-10"
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
    // </div>
  );
};

export default SwiperCustom;