"use client";
import { TbCategory } from "react-icons/tb";
import { useState } from "react";

const categories = [
  { label: "الكل", icon: <TbCategory /> },
  { label: "سيارات صغيرة" },
  { label: " سيدان" },
  { label: " سيارات فاخرة" },
  { label: "سيارات رياضية" },
  { label: "كروس أوفر" },
  { label: "بيك أب" },
  { label: "ميني فان" },
  { label: "سيارات كهربائية" },
];

const CategoryTabs = () => {
  const [active, setActive] = useState("الكل");

  return (
    <div className="flex  overflow-x-auto gap-[10px] md:gap-[18px] border-b-[2px] border-b-[#D0D5DD]  pb-[8px]">
      {categories.map((cat) => (
        <div
          key={cat.label}
          onClick={() => setActive(cat.label)}
          className={`cursor-pointer   text-sm font-medium flex items-center gap-[18px] 
            ${
              active === cat.label
                ? "border-b-2 border-[#DD3B4A] text-[#DD3B4A] font-medium text-[12px] md:text-[18px]"
                : "text-[#A5A5A5] font-medium text-[12px] md:text-[18px] hover:text-[#DD3B4A]"
            }
          `}
        >
          {cat.icon && <span className="text-lg">{cat.icon}</span>}
          {cat.label}
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
