"use client";

import React from "react";
import { SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";

const ContactUs = () => {
  return (
    <div className="bg-[#F8F8F8] p-[8px] md:p-[24px]  mx-auto  shadow-md mt-[32px] w-[100%] md:w-[926px] rounded-[8px]">
      <form className="w-[100%] md:w-[878px] flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[8px]">
          <input
            type="text"
            id="email"
            placeholder="الاسم"
            className="w-full px-[8px] py-[12px] shadow-[0px 1px 2px 0px #1018280D] border !border-[#B7B7B7] rounded-[8px] focus:outline-none focus:ring-2 "
          />

          <input
            type="text"
            id="email"
            placeholder="الاسم"
            className="w-full px-[8px] py-[12px] shadow-[0px 1px 2px 0px #1018280D] border !border-[#B7B7B7] rounded-[8px] focus:outline-none focus:ring-2 "
          />
          <input
            type="text"
            id="email"
            placeholder="الاسم"
            className="w-full px-[8px] py-[12px] shadow-[0px 1px 2px 0px #1018280D] border !border-[#B7B7B7] rounded-[8px] focus:outline-none focus:ring-2 "
          />
          <input
            type="text"
            id="email"
            placeholder="الاسم"
            className="w-full px-[8px] py-[12px] shadow-[0px 1px 2px 0px #1018280D] border !border-[#B7B7B7] rounded-[8px] focus:outline-none focus:ring-2 "
          />

          <textarea
            placeholder="موضوع الرسالة"
            className="w-full h-[183px] px-[8px] py-[12px] shadow-[0px 1px 2px 0px #1018280D] border !border-[#B7B7B7] rounded-[8px] focus:outline-none focus:ring-2 "
          />
        </div>

        <div className="flex flex-col gap-[45px]">
          <button
            type="submit"
            className="w-full font-bold text-[18px] !rounded-[8px] bg-[#DD3B4A]  shadow-[0px 1px 2px 0px #1018280D] hover:bg-[#DD3B4A] text-white font-medium py-[10px] px-[14px]  transition-colors duration-300"
          >
            ارسل
          </button>

          <div className="  flex flex-col gap-[8px] md:flex items-center md:justify-between">
            <div className="flex items-center gap-[4px]">
              <p className="font-medium text-[16px] text-[#1B2532] m-0">
                راسلنا و تابعنا عبر:
              </p>
              <div className="flex items-center gap-[16px]">
                <SiInstagram className="text-[#DD3B4A] text-[20px]" />
                <SlSocialTwitter className="text-[#DD3B4A] text-[20px]" />
                <CiFacebook className="text-[#DD3B4A] text-[20px]" />
              </div>
            </div>

            <p className="text-[#1B2532] font-medium text-[16px] text-center">
              للاستفسارات العامة أو الدعم الفني:
              <span className="text-[#DD3B4A] font-medium text-[16px]">
                Carvised@gmail.com
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
