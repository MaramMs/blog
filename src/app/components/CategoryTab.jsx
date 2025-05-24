'use client'
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
    <div className="flex border-b-[2px] border-[#D0D5DD]  overflow-x-auto">
      {categories.map((cat) => (
        <div
          key={cat.label}
          onClick={() => setActive(cat.label)}
          className={`cursor-pointer px-4 py-2 text-sm font-medium flex items-center gap-1 
            ${
              active === cat.label
                ? "border-b-2 border-[#DD3B4A] text-[#DD3B4A] font-medium text-[18px]"
                : "text-[#A5A5A5] font-medium text-[18px] hover:text-[#DD3B4A]"
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
