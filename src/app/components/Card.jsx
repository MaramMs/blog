import Image from 'next/image'
import React from 'react'
import carOne from '../../../public/assets/cars/car1.jpg'
import { PiCalendarDots } from "react-icons/pi";


const Card = () => {
  return (
    <div className='w-[454px] rounded-[8px] border border-[#D0D5DD] p-[24px] flex flex-col gap-[10px] bg-[#fff] shadow-[2px_4px_8px_0px_#00000029]'>
        <Image src={carOne} alt='car' width={406} height={231} className='rounded-[24px]'/>
        <h2 className='text-[#DD3B4A] font-bold text-[30px] '>شفروليه تاهو 2024 </h2>
        <div className='flex gap-[4px] items-center'>
            <PiCalendarDots className='text-[#B7B7B7] text-[24px]'/>
            <p className='text-[#B7B7B7] text-[14px] font-medium'>
                24 فبراير، 2025
            </p>


        </div>
        <p className='text-[#707070] font-normal text-[18px] mb-[32px]'> توفر سيارات شفروليه تاهو – chevrolet  tahoe تجربة قيادة مختلفة مليئة بالمغامرات مع متعة قوة المحركات الامريكية الـv8......</p>
        <button className='bg-[#DD3B4A] h-[48px] rounded-[8px] py-[12px] text-[#FFFFFF] font-bold text-[18px] flex justify-center items-center'>
اقرأ المزيد
        </button>
    </div>
  )
}

export default Card