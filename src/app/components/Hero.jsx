// "use client";
// import Image from "next/image";
// import React from "react";
// import { CiSearch } from "react-icons/ci";

// const Hero = ({ bg, title, minHeight,description, image, tags = [] }) => {
//   return (
//     <div
//       className="relative w-full bg-center bg-cover  mb-[120px] rounded-lg overflow-hidden"
//       style={{ backgroundImage: `url(${bg.src})`, minHeight:minHeight }}
//     >
//       <div className="absolute inset-0 bg-black/80 z-10" />

//       <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-6 gap-6 max-w-7xl mx-auto">

//         <div className="text-center lg:text-right flex flex-col gap-4 max-w-full lg:max-w-[55%]">
//           <h1 className="text-white font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[50px] leading-[1.6]">
//             {title}
//           </h1>
//           <p className="text-white text-[14px] sm:text-[16px] md:text-[18px]">
//             {description}
//           </p>
//         </div>

//         <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-auto">
//           <div className="flex items-end justify-center gap-2 w-full">
//             <Image
//               src="/assets/arrow.svg"
//               width={80}
//               height={40}
//               alt="arrow"
//               className="hidden sm:block"
//             />
//             {image && (
//               <Image
//                 src={image}
//                 width={240}
//                 height={160}
//                 alt="hero"
//                 className="h-auto object-contain mx-auto"
//               />
//             )}
//           </div>

//           <div className="relative w-full max-w-sm">
//             <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-4 text-[#B7B7B7] text-lg" />
//             <input
//               type="text"
//               placeholder="بحث"
//               className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] py-[10px] pr-[40px] pl-[14px] bg-white shadow-md text-sm"
//             />
//           </div>

//           <div className="flex flex-wrap justify-center lg:justify-start gap-2">
//             {tags.map((tag, index) => (
//               <div
//                 key={index}
//                 className={`rounded-[8px] px-3 py-2 ${
//                   index === 0
//                     ? "bg-[#DD3B4A] text-white"
//                     : "border border-[#D0D5DD] text-white"
//                 }`}
//               >
//                 <p className="text-sm font-normal">{tag}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import arrow from "../../../public/assets/arrow.svg";
import carHero from "../../../public/assets/hero-car.png";

const Hero = ({
  bg,
  minHeight = 400,
  shadow = "rgba(0, 0, 0, 0.6)",
  title,
  description,
  image,
  width,
  classes
}) => {
  return (
    <div
      className="relative w-full bg-center bg-cover  mb-[155px] rounded-lg overflow-hidden flex"
      style={{
        backgroundImage: `url(${bg.src})`,
        minHeight,
      }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          background: shadow,
        }}
      />

      <div className={`${width} relative z-20 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-6 gap-6  mx-auto`}>
        <div className="text-center lg:text-right flex flex-col gap-[16px] max-w-full lg:max-w-[45%]">
          <h1 className="classes text-white  font-bold text-[20px] sm:text-[26px] md:text-[32px] lg:text-[50px] leading-[.3]">
            {title}
          </h1>
          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed w-full m-0">
            {description}
          </p>
        </div>

        {image && (
          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-auto">
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

            <div className="relative w-full max-w-sm">
              <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-4 text-[#B7B7B7] text-lg" />
              <input
                type="text"
                placeholder="بحث"
                className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] py-[10px] pr-[40px] pl-[14px] bg-white shadow-md text-sm"
              />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              <div className="rounded-[8px] bg-[#DD3B4A] px-3 py-2">
                <p className="text-white text-sm font-normal">سيارات هجينة</p>
              </div>
              <div className="rounded-[8px] border border-[#D0D5DD] px-3 py-2">
                <p className="text-white text-sm font-normal">
                  سيارات دفع رباعي
                </p>
              </div>
              <div className="rounded-[8px] border border-[#D0D5DD] px-3 py-2">
                <p className="text-white text-sm font-normal">
                  سيارات كهربائية
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
