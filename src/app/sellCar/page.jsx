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
          backgroundImage: "url('/assets/hero.jpg')",
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
              بيع وشراء السيارات
              <span class="font-500 text-[18px] text-[#1B2532]">
                (دليل شامل للتعامل الذكي)
              </span>
            </h1>
          </div>
          <span class="text-[#B7B7B7] font-500 text-[16px] underline ">
            أبريل 28, 2025
          </span>
          <p class="text-[18px] text-[#1B2532] font-normal leading-[150%]">
            تُعتبر عملية بيع وشراء السيارات من الأنشطة الشائعة في كل المجتمعات،
            سواء كان الهدف منها تحديث السيارة الحالية أو شراء أول سيارة في
            الحياة. ومع تنوع الخيارات وتفاوت الأسعار، يحتاج المشتري أو البائع
            إلى وعي كامل بالسوق لضمان صفقة ناجحة وآمنة.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              <span className="text-[#DD3B4A] "> 1.</span> نصائح لشراء سيارة
            </h3>
          </div>
          <ul class="flex flex-col gap-[8px]">
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  {" "}
                  تحديد الاحتياجات والميزانية :{" "}
                </span>
                قبل التوجه إلى السوق، يجب أن تعرف ما تحتاجه. هل تريد سيارة
                اقتصادية للاستخدام اليومي؟ أم سيارة دفع رباعي للرحلات؟ كما يجب
                وضع ميزانية محددة تشمل سعر السيارة والتكاليف الإضافية (مثل
                التأمين، الضرائب، الصيانة).
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  البحث والمقارنة :
                </span>
                من الضروري البحث عن أنواع السيارات المناسبة وقراءة مراجعات
                المستخدمين، بالإضافة إلى مقارنة الأسعار في المعارض ومواقع البيع
                الإلكترونية
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  الفحص الفني والتجربة:
                </span>
                لا تشتري سيارة مستعملة دون فحصها من قبل ميكانيكي مختص. ويفضل
                دائمًا تجربة القيادة قبل الشراء للتأكد من سلامة الأداء.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px]">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  التحقق من الأوراق القانونية:
                </span>
                يجب التأكد من ملكية السيارة، وخلوها من المخالفات أو الحجز،
                بالإضافة إلى مطابقة رقم الهيكل مع الوثائق.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              <span className="text-[#DD3B4A] "> 2.</span>نصائح لبيع سيارة
            </h3>
          </div>
          <ul class="flex flex-col gap-[8px]">
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  تحضير السيارة للبيع:
                </span>
                نظّف السيارة جيدًا وأصلح الأعطال البسيطة. الشكل العام يؤثر
                كثيرًا في قرار الشراء.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  تحديد السعر المناسب:
                </span>
                لا تبالغ في السعر، ولكن تأكد من أن يعكس حالة السيارة ومواصفاتها.
                يمكنك الاستعانة بمواقع تقييم السيارات للحصول على سعر تقريبي
                عادل.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  عرض السيارة بوضوح:
                </span>
                استخدم صورًا واضحة من عدة زوايا، واذكر التفاصيل المهمة مثل سنة
                الصنع، عدد الكيلومترات، نوع الوقود، وحالة الصيانة.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px]">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  التفاوض ونقل الملكية:
                </span>
                كن مستعدًا للتفاوض، ولكن لا تتنازل عن السعر المناسب. وعند
                الاتفاق، تأكد من توثيق عملية البيع رسميًا عبر الدوائر المختصة.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              <span className="text-[#DD3B4A] "> 3.</span>خيارات البيع والشراء
            </h3>
          </div>
          <ul class="flex flex-col gap-[8px]">
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  المعارض:
                </span>
                توفر خيارات متعددة لكنها قد تتقاضى عمولة.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  المنصات الإلكترونية:
                </span>
                مثل "كارزفد"، "حراج"، أو "أوليكس"، وهي وسيلة شائعة وسهلة.
              </p>
            </li>
            <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  الشراء من الوكالات:
                </span>
                يضمن الجودة وخدمة ما بعد البيع، لكنه غالبًا أغلى.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              <span className="text-[#DD3B4A] "> 4.</span>احصل على سيارة أحلامك
            </h3>
          </div>
          <p className="text-[#000000] font-normal text-[18px] leading-[150%]">
            هل أعجبتك مواصفات السيارة اللي حكينا عنها؟ جمعنالك مجموعة من
            السيارات المشابهة بأسعار منافسة ومواصفات ممتازة, شوف أفضل العروض على
            السيارات الجديدة والمستعملة من خلال موقعنا الآن!
            <span className="text-[#DD3B4A] text-[18px] font-bold">
              تصفحها الآن وشوف أي وحدة بتناسبك!
            </span>
          </p>
        </div>
      </div>
      <SwiperCustom />
    </div>
  );
};

export default AdsCar;
