import Image from "next/image";
import React from "react";
import { FaCarOn } from "react-icons/fa6";
import { RiMagicLine } from "react-icons/ri";
import SwiperCustom from "../components/SwiperCustom";

const Reservation = () => {
  return (
    <div className="container mx-auto">
      <div
        className="w-full relative h-[494px] mt-[85px] mb-[157px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/cars/resCar.jpg')",
        }}
      ></div>
      <div class="flex gap-[32px] flex-col">
        <div class="!flex !flex-col !gap-[16px]">
          <div class="flex flex-col gap-[8px]">
            <span class="!text-[#B7B7B7] font-500 text-[16px]">
              الرئيسية / المقال
            </span>
            <h1 class="text-[50px] font-bold !text-[#DD3B4A]">
              حجز تجرية قيادة
              <span class="font-500 text-[18px] text-[#1B2532]">
                ( أهمية حجز تجربة قيادة قبل شراء السيارة)
              </span>
            </h1>
          </div>
          <span class="text-[#B7B7B7] font-500 text-[16px] underline ">
            أبريل 28, 2025
          </span>
          <p class="text-[18px] text-[#1B2532] font-normal leading-[150%]">
            يُعد حجز تجربة قيادة خطوة ضرورية ومهمة لأي شخص يخطط لشراء سيارة
            جديدة أو مستعملة. فمهما كانت مواصفات السيارة مغرية على الورق، فإن
            الشعور الفعلي خلف عجلة القيادة لا يمكن تقييمه إلا من خلال التجربة
            المباشرة.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="text-[#DD3B4A] font-bold text-[30px] underline">
              ما هي تجربة القيادة؟
            </h3>
          </div>

          <p class="text-[18px] text-[#1B2532] font-normal leading-[150%]">
            تجربة القيادة هي فرصة تمنحها معارض السيارات أو الشركات المصنعة
            للعملاء لاختبار السيارة على الطريق، والتعرف على أدائها، وراحتها،
            ومستوى استجابتها أثناء القيادة. غالبًا ما تكون التجربة مجانية، وتتم
            بعد حجز مسبق عبر الموقع الإلكتروني للشركة أو من خلال الاتصال المباشر
            بأحد الموزعين المعتمدين.
          </p>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="text-[#DD3B4A] font-bold text-[18px] underline">
              فوائد حجز تجربة قيادة:
            </h3>
          </div>
          <ul class="flex flex-col gap-[8px]">
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  معرفة مدى راحة السيارة:
                </span>
                من حيث المقاعد، مساحة الأرجل، وأنظمة الراحة الداخلية.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  تجربة الأداء الحقيقي:
                </span>
                تسارع السيارة، استجابتها للفرامل، والثبات على الطريق.{" "}
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  اختبار التقنيات الحديثة:
                </span>
                مثل أنظمة المساعدة على القيادة، الملاحة، والكاميرات.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px]">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  اتخاذ قرار مدروس:
                </span>
                يساعدك ذلك في تقليل فرص الندم على الشراء.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="text-[#DD3B4A] font-bold text-[30px] underline">
              كيف تقوم بحجز تجربة قيادة؟
            </h3>
          </div>
          <ul class="flex flex-col gap-[8px]">
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                زيارة الموقع الرسمي للشركة المصنعة أو الوكيل.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                اختيار الطراز الذي ترغب في تجربته.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                ملء نموذج الحجز ببياناتك الشخصية.{" "}
              </p>
            </li>

            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                تحديد التاريخ والمكان المناسبين لك.{" "}
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="text-[#DD3B4A] font-bold text-[30px] underline">
              نصائح عند تجربة القيادة:
            </h3>
          </div>
          <ul class="flex flex-col gap-[8px]">
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                خذ وقتك في الفحص والقيادة.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                اطرح الأسئلة على ممثل المبيعات.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                قارن أكثر من طراز إذا كنت مترددًا.
              </p>
            </li>

            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                تحديد التاريخ والمكان المناسبين لك.
              </p>
            </li>
          </ul>
        </div>

        
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <RiMagicLine className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#DD3B4A] font-bold text-[30px] underline">
                ودك تجربها؟
            </h3>
          </div>
          <p className="text-[#000000] font-normal text-[18px] leading-[150%]">
         معنا، بنساعدك تختار السيارة المناسبة، ونوصلك بأفضل السيارات في السوق.
          </p>
        </div>
      </div>
      <SwiperCustom />
    </div>
  );
};

export default Reservation;
