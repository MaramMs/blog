// import Image from "next/image";
// import React, { useState } from "react";
// import logo from "../../../public/assets/logo.jpg";
// import Link from "next/link";
// import { useLanguage } from "../contexts/LanguageContext";
// import { MdMenu,MdClose } from "react-icons/md";


// const NavBar = () => {
//     const {language ,toggleLanguage} = useLanguage();
//     const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white  shadow-[0px_0px_10px_0px_#00000012]">

//   <div className="flex justify-between items-center container mx-auto px-[138px] py-[19px] ">
//   <Image
//         src={logo}
//         className="w-[98px] h-[42px] max-w-full max-h-full object-cover"
//       />

//       <ul className="flex items-center gap-[40px]">
//         <li>
//           <Link href="/" className="text-[#1B2532] font-normal text-[18px]">home</Link>
//         </li>
//         <li>
//           <Link href="/" className="text-[#1B2532] font-normal text-[18px]">خدمات كارزفد</Link>
//         </li>
//         <li>
//           <Link href="/" className="text-[#1B2532] font-normal text-[18px]">قصص و تجارب المستخدمين</Link>
//         </li>

//         <li>
//           <Link href="/"className="text-[#1B2532] font-normal text-[18px]">اتصل بنا</Link>
//         </li>
//       </ul>


//       <button
//           className="md:hidden text-gray-800"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <MdClose />
//  : <MdMenu />}

//         </button>

//       <div className="relative">
//         <select
//             value={language}
//             onChange={(e) => toggleLanguage(e.target.value)}
//           className=" rounded px-2 py-1 text-sm focus:outline-none"
//         >
//           <option value="ar">
            
//             العربية</option>
//           <option value="en">English</option>
//         </select>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-white border-t px-4 pb-4 space-y-4 text-right">
//           <Link href="/" className="block">الرئيسية</Link>
//           <Link href="/" className="block">خدمات كارزفد</Link>
//           <Link href="/" className="block">قصص وتجارب المستخدمين</Link>
//           <Link href="/" className="block">اتصل بنا</Link>
//           <select className="mt-2 border border-gray-300 rounded px-2 py-1 text-sm w-full">
//             <option value="ar">العربية</option>
//             <option value="en">English</option>
//           </select>
//         </div>
//       )}
//   </div>
//     </nav>
//   );
// };

// export default NavBar;


"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/assets/logo.jpg";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { MdMenu, MdClose } from "react-icons/md";

const NavBar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-[0px_0px_10px_0px_#00000012]">
      <div className="container mx-auto px-6 md:px-[138px] py-[19px] flex justify-between items-center">
        {/* Logo */}
        <Image
          src={logo}
          alt="logo"
          className="w-[98px] h-[42px] object-cover"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link href="/" className="text-[#1B2532] text-[18px]">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#1B2532] text-[18px]">
              خدمات كارزفد
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#1B2532] text-[18px]">
              قصص وتجارب المستخدمين
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#1B2532] text-[18px]">
              اتصل بنا
            </Link>
          </li>
        </ul>

        {/* Language Switcher - Desktop */}
        <div className="hidden md:block">
          <select
            value={language}
            onChange={(e) => toggleLanguage(e.target.value)}
            className=" rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white text-right">
          <Link href="/" className="block text-[#1B2532]">
            الرئيسية
          </Link>
          <Link href="/" className="block text-[#1B2532]">
            خدمات كارزفد
          </Link>
          <Link href="/" className="block text-[#1B2532]">
            قصص وتجارب المستخدمين
          </Link>
          <Link href="/" className="block text-[#1B2532]">
            اتصل بنا
          </Link>
          <select
            value={language}
            onChange={(e) => toggleLanguage(e.target.value)}
            className="mt-2 border border-gray-300 rounded px-2 py-1 text-sm w-full"
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

