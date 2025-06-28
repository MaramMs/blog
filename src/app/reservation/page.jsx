import React from "react";
import { RiMagicLine } from "react-icons/ri";
import SwiperCustom from "../components/SwiperCustom";
const swiperData = [
  {
    id: 1,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 2,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 3,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 4,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 5,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },

  {
    id: 6,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 7,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 8,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 9,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 10,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
];
const Reservation = () => {
  return (
    <div className="container mx-auto my-[120px]">
      <div
        className="w-full relative h-[494px] mt-[85px] mb-[157px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/cars/resCar.jpg')",
        }}
      ></div>
      <div className="flex gap-[32px] flex-col">
        <div className="!flex !flex-col !gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <span className="!text-[#B7B7B7] font-500 text-[16px]">
              الرئيسية / المقال
            </span>
            <h1 className="text-[50px] font-bold !text-[#DD3B4A]">
              حجز تجرية قيادة
              <span className="font-500 text-[18px] text-[#1B2532]">
                ( أهمية حجز تجربة قيادة قبل شراء السيارة)
              </span>
            </h1>
          </div>
          <span className="text-[#B7B7B7] font-500 text-[16px] underline ">
            أبريل 28, 2025
          </span>
          <p className="text-[18px] text-[#1B2532] font-normal leading-[150%]">
            يُعد حجز تجربة قيادة خطوة ضرورية ومهمة لأي شخص يخطط لشراء سيارة
            جديدة أو مستعملة. فمهما كانت مواصفات السيارة مغرية على الورق، فإن
            الشعور الفعلي خلف عجلة القيادة لا يمكن تقييمه إلا من خلال التجربة
            المباشرة.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="!text-[#DD3B4A] font-bold !text-[30px] ">
              ما هي تجربة القيادة؟
            </h3>
          </div>

          <p className="text-[18px] text-[#1B2532] font-normal leading-[150%]">
            تجربة القيادة هي فرصة تمنحها معارض السيارات أو الشركات المصنعة
            للعملاء لاختبار السيارة على الطريق، والتعرف على أدائها، وراحتها،
            ومستوى استجابتها أثناء القيادة. غالبًا ما تكون التجربة مجانية، وتتم
            بعد حجز مسبق عبر الموقع الإلكتروني للشركة أو من خلال الاتصال المباشر
            بأحد الموزعين المعتمدين.
          </p>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="!text-[#DD3B4A] font-bold !text-[18px] ">
              فوائد حجز تجربة قيادة:
            </h3>
          </div>
          <ul className="flex flex-col gap-[8px]">
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  معرفة مدى راحة السيارة:
                </span>
                من حيث المقاعد، مساحة الأرجل، وأنظمة الراحة الداخلية.
              </p>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  تجربة الأداء الحقيقي:
                </span>
                تسارع السيارة، استجابتها للفرامل، والثبات على الطريق.{" "}
              </p>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                <span className="text-[#1B2532] font-bold text-[18px]">
                  اختبار التقنيات الحديثة:
                </span>
                مثل أنظمة المساعدة على القيادة، الملاحة، والكاميرات.
              </p>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

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
            <h3 className="!text-[#DD3B4A] font-bold !text-[30px] ">
              كيف تقوم بحجز تجربة قيادة؟
            </h3>
          </div>
          <ul className="flex flex-col gap-[8px]">
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                زيارة الموقع الرسمي للشركة المصنعة أو الوكيل.
              </p>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                اختيار الطراز الذي ترغب في تجربته.
              </p>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                ملء نموذج الحجز ببياناتك الشخصية.{" "}
              </p>
            </li>

            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                تحديد التاريخ والمكان المناسبين لك.{" "}
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <h3 className="!text-[#DD3B4A] font-bold !text-[30px] ">
              نصائح عند تجربة القيادة:
            </h3>
          </div>
          <ul className="flex flex-col gap-[8px]">
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                خذ وقتك في الفحص والقيادة.
              </p>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                اطرح الأسئلة على ممثل المبيعات.
              </p>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                قارن أكثر من طراز إذا كنت مترددًا.
              </p>
            </li>

            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>

              <p className="font-normal text-[#1B2532] text-[18px] m-0">
                تحديد التاريخ والمكان المناسبين لك.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <RiMagicLine className="text-[#DD3B4A] text-[24px]" />
            <h3 className="!text-[#DD3B4A] font-bold !text-[30px]">
              ودك تجربها؟
            </h3>
          </div>
          <p className="text-[#000000] font-normal text-[18px] leading-[150%]">
            معنا، بنساعدك تختار السيارة المناسبة، ونوصلك بأفضل السيارات في
            السوق.
          </p>
        </div>
        <SwiperCustom swiperData={swiperData} />
      </div>
    </div>
  );
};

export default Reservation;
