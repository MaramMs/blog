import Image from "next/image";
import React from "react";
import { FaCarOn } from "react-icons/fa6";
import { RiMagicLine } from "react-icons/ri";
import SwiperCustom from "../components/SwiperCustom";

const AdsCar = () => {
  return (
    <div className="container mx-auto">
      <div
        className="w-full relative h-[494px] mt-[85px] mb-[157px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/cars/adsCar.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#1B2532] opacity-[50%] z-20" />
      </div>
      <div class="flex gap-[32px] flex-col">
        <div class="!flex !flex-col !gap-[16px]">
          <div class="flex flex-col gap-[8px]">
            <span class="!text-[#B7B7B7] font-500 text-[16px]">
              الرئيسية / المقال
            </span>
            <h1 class="text-[50px] font-bold !text-[#DD3B4A]">
              تمويل السيارات
              <span class="font-500 text-[18px] text-[#1B2532]">
                (دليلك الشامل لتمويل السيارات)
              </span>
            </h1>
          </div>
          <span class="text-[#B7B7B7] font-500 text-[16px] underline ">
            أبريل 28, 2025
          </span>
          <p class="text-[18px] text-[#1B2532] font-normal leading-[150%]">
            كيف تشتري سيارتك بالتقسيط بدون ما ترهق ميزانيتك , شراء سيارة جديدة
            أو مستعملة هو قرار كبير، خاصة إذا كان الدفع نقدًا مش وارد حاليًا.
            هون بيجي دور تمويل السيارات، كخيار ذكي ومريح بيساعدك تقتني السيارة
            اللي بدك ياها، بدون ما تضغط على ميزانيتك.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <FaCarOn class="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              شو يعني تمويل سيارات؟
            </h3>
          </div>
          <p className="text-[#1B2532] font-500 text-[18px] leading-[150%]">
            تمويل السيارة ببساطة هو إنك تشتري سيارة بالتقسيط، بدفع دفعة أولى
            بسيطة، والباقي بتسدده على أقساط شهرية مريحة من خلال بنك، شركة تمويل،
            أو حتى المعرض نفسه.
          </p>
        </div>
        <div class="flex flex-col gap-[16px]">
          <div class="flex flex-col gap-[16px]">
            <h4 class="!text-[#1B2532] font-bold text-[30px]">
              مميزات تمويل السيارات:
            </h4>
            <ul class="flex flex-col gap-[8px]">
              <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>تملك سيارة الآن، وادفع لاحقًا</span>
              </li>
              <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>أقساط شهرية مريحة حسب دخلك</span>
              </li>
              <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>خدمات تأمين شاملة مضافة أحيانًا</span>
              </li>
              <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>خيارات كثيرة حسب مدة التمويل والفائدة</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col gap-[16px]">
          <div class="flex flex-col gap-[16px]">
            <h4 class="!text-[#1B2532] font-bold text-[30px]">
              مميزات تمويل السيارات:
            </h4>
            <ul class="flex flex-col gap-[8px]">
              <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>تملك سيارة الآن، وادفع لاحقًا</span>
              </li>
              <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>أقساط شهرية مريحة حسب دخلك</span>
              </li>
              <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>خدمات تأمين شاملة مضافة أحيانًا</span>
              </li>
              <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>خيارات كثيرة حسب مدة التمويل والفائدة</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <RiMagicLine className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#DD3B4A] font-bold text-[30px] underline">
              جاهز تبدأ؟
            </h3>
          </div>
          <p className="text-[#000000] font-normal text-[18px] leading-[150%]">
            معنا، بنساعدك تختار السيارة المناسبة، ونوصلك بأفضل جهات التمويل في
            السوق.
          </p>
        </div>
      </div>


      <SwiperCustom />
    </div>
  );
};

export default AdsCar;
