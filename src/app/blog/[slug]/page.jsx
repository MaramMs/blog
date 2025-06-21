"use client";
import { PiCarLight } from "react-icons/pi";
import { TbColorSwatch } from "react-icons/tb";
import { FaCarOn } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiMagicLine } from "react-icons/ri";
import SwiperCustom from "@/app/components/SwiperCustom";
import carOne from "../../../../public/assets/cars/car1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const swiperData = [
  {
    id: 1,
    image: "/assets/cars/adsCar.jpg",
    title: "شيفروليه تاهو",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/1",
    prices: [
      { title: "سعر الكاش", price: "150,000" },
      { title: "دفعة أولى", price: "30,000" },
      { title: "قسط شهري", price: "2,500" },
    ],
    description: "سيارة عائلية قوية ومريحة للرحلات الطويلة.",
    user: "شركة شيفروليه",
    date: "2025-04-28",
  },
  {
    id: 2,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا لاندكروزر",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/2",
    prices: [
      { title: "سعر الكاش", price: "200,000" },
      { title: "دفعة أولى", price: "40,000" },
      { title: "قسط شهري", price: "3,200" },
    ],
    description: "أداء ممتاز في الطرق الوعرة مع فخامة داخلية.",
    user: "شركة تويوتا",
    date: "2025-04-28",
  },
  {
    id: 3,
    image: "/assets/cars/adsCar.jpg",
    title: "نيسان باترول",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/3",
    prices: [
      { title: "سعر الكاش", price: "180,000" },
      { title: "دفعة أولى", price: "36,000" },
      { title: "قسط شهري", price: "2,900" },
    ],
    description: "سيارة دفع رباعي قوية وواسعة.",
    user: "شركة نيسان",
    date: "2025-04-28",
  },
  {
    id: 4,
    image: "/assets/cars/adsCar.jpg",
    title: "كيا سبورتاج",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/4",
    prices: [
      { title: "سعر الكاش", price: "95,000" },
      { title: "دفعة أولى", price: "19,000" },
      { title: "قسط شهري", price: "1,600" },
    ],
    description: "سيارة اقتصادية وعملية للاستخدام اليومي.",
    user: "شركة كيا",
    date: "2025-04-28",
  },
  {
    id: 5,
    image: "/assets/cars/adsCar.jpg",
    title: "هيونداي سنتافي",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/5",
    prices: [
      { title: "سعر الكاش", price: "110,000" },
      { title: "دفعة أولى", price: "22,000" },
      { title: "قسط شهري", price: "1,900" },
    ],
    description: "راحة وفخامة مع تقنيات حديثة.",
    user: "شركة هيونداي",
    date: "2025-04-28",
  },
  {
    id: 6,
    image: "/assets/cars/adsCar.jpg",
    title: "فورد اكسبلورر",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/6",
    prices: [
      { title: "سعر الكاش", price: "130,000" },
      { title: "دفعة أولى", price: "26,000" },
      { title: "قسط شهري", price: "2,200" },
    ],
    description: "سيارة عائلية متعددة الاستخدامات.",
    user: "شركة فورد",
    date: "2025-04-28",
  },
  {
    id: 7,
    image: "/assets/cars/adsCar.jpg",
    title: "مرسيدس GLC",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/7",
    prices: [
      { title: "سعر الكاش", price: "250,000" },
      { title: "دفعة أولى", price: "50,000" },
      { title: "قسط شهري", price: "4,000" },
    ],
    description: "فخامة ألمانية وتقنيات متطورة.",
    user: "شركة مرسيدس",
    date: "2025-04-28",
  },
  {
    id: 8,
    image: "/assets/cars/adsCar.jpg",
    title: "بي ام دبليو X5",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/8",
    prices: [
      { title: "سعر الكاش", price: "270,000" },
      { title: "دفعة أولى", price: "54,000" },
      { title: "قسط شهري", price: "4,400" },
    ],
    description: "أداء رياضي مع رفاهية عالية.",
    user: "شركة بي ام دبليو",
    date: "2025-04-28",
  },
  {
    id: 9,
    image: "/assets/cars/adsCar.jpg",
    title: "هونداي النترا",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/9",
    prices: [
      { title: "سعر الكاش", price: "75,000" },
      { title: "دفعة أولى", price: "15,000" },
      { title: "قسط شهري", price: "1,200" },
    ],
    description: "سيارة سيدان اقتصادية وعملية.",
    user: "شركة هيونداي",
    date: "2025-04-28",
  },
  {
    id: 10,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا كامري",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/10",
    prices: [
      { title: "سعر الكاش", price: "105,000" },
      { title: "دفعة أولى", price: "21,000" },
      { title: "قسط شهري", price: "1,800" },
    ],
    description: "سيارة متوسطة الحجم بموثوقية عالية.",
    user: "شركة تويوتا",
    date: "2025-04-28",
  },
  {
    id: 11,
    image: "/assets/cars/adsCar.jpg",
    title: "جيب رانجلر",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/11",
    prices: [
      { title: "سعر الكاش", price: "210,000" },
      { title: "دفعة أولى", price: "42,000" },
      { title: "قسط شهري", price: "3,500" },
    ],
    description: "مغامرات لا حدود لها على الطرق الوعرة.",
    user: "شركة جيب",
    date: "2025-04-28",
  },
  {
    id: 12,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "المزيد من التفاصيل",
    href: "/adsCar/12",
    prices: [
      { title: "سعر الكاش", price: "60,000" },
      { title: "دفعة أولى", price: "12,000" },
      { title: "قسط شهري", price: "950" },
    ],
    description: "سيارة صغيرة واقتصادية للمدينة.",
    user: "شركة تويوتا",
    date: "2025-04-28",
  },
];

export default async function BlogPostPage({ params }) {


  const images = [
    "/assets/cars/car1.jpg",
    "/assets/cars/car1.jpg",
    "/assets/cars/car1.jpg",
  ];
  return (
    <div className="container mx-auto  my-[120px]">
      <div className="mb-[120px] home-swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          pagination={{ clickable: true }}
          className="w-full m-0 !pb-10"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className='h-[494px] py-[16px]'>
              <img src={image}  className="h-[494px] w-full object-cover"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <span className="text-[#B7B7B7] font-medium text-[16px]">
              الرئيسية / المقال
            </span>
            <h1 className="text-[50px] font-bold text-[#DD3B4A]">
              شيفروليه تاو 2024
            </h1>
          </div>
          <span className="text-[#B7B7B7] font-normal text-[18px] underline ">
            أبريل 28, 2025
          </span>
          <p className="text-[18px] text-[#1B2532] font-normal leading-[150%]">
            شيفروليه تاهو 2024 هي سيارة دفع رباعي كبيرة الحجم، تجمع بين الأداء
            القوي، الراحة، والتكنولوجيا المتقدمة، مما يجعلها من أبرز الخيارات في
            فئتها. تأتي هذه السيارة لتلبي تطلعات العائلات والمسافرين الذين
            يبحثون عن مساحة داخلية رحبة وتجربة قيادة مريحة وآمنة على مختلف أنواع
            الطرق.تصميمها الخارجي يبرز بشكله القوي والجريء، بينما توفر المقصورة
            الداخلية مستويات عالية من الراحة، مع مقاعد قابلة للتعديل، ومساحات
            تخزين مرنة، بالإضافة إلى تقنيات ترفيه ومعلومات متقدمة تناسب كل أفراد
            العائلة. كما تتوفر بعدة خيارات من المحركات القوية التي توفر أداءً
            متميزًا سواء في المدينة أو على الطرق الوعرة.اختصار، شيفروليه تاهو
            2024 ليست مجرد سيارة عائلية، بل هي رفيق مثالي لكل من يبحث عن الأمان،
            الاعتمادية، والفخامة في مركبة واحدة.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <PiCarLight className="text-[#DD3B4A] text-[24px]" />

            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              {" "}
              المواصفات الفنية
            </h3>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className="!text-[#DD3B4A] font-bold text-[18px]">
              المحركات المتاحة:
            </h4>
            <ul className="flex flex-col gap-[8px]">
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>
                  نظام الدفع: ثنائي الدفع (2WD) أو رباعي الدفع (4WD) حسب الفئة.
                </span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>
                  نظام الدفع: ثنائي الدفع (2WD) أو رباعي الدفع (4WD) حسب الفئة.
                </span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>
                  نظام الدفع: ثنائي الدفع (2WD) أو رباعي الدفع (4WD) حسب الفئة.
                </span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>
                  نظام الدفع: ثنائي الدفع (2WD) أو رباعي الدفع (4WD) حسب الفئة.
                </span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>
                  نظام الدفع: ثنائي الدفع (2WD) أو رباعي الدفع (4WD) حسب الفئة.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h4 className="!text-[#DD3B4A] font-bold text-[18px]">
              استهلاك الوقود:
            </h4>
            <ul className="flex flex-col gap-[8px]">
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#D9D9D94D] opacity-[30%] rounded-full block"></span>
                <span>المحركات البنزين: تقريبًا 17 ميل/جالون.</span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#D9D9D94D] opacity-[30%] rounded-full block"></span>
                <span>المحرك الديزل: تقريبًا 25 ميل/جالون.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <TbColorSwatch className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              التصميم الداخلي والراحة
            </h3>
          </div>
          <ul className="flex flex-col gap-[8px]">
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <FaCarOn className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              السلامة والتكنولوجيا{" "}
            </h3>
          </div>
          <ul className="flex flex-col gap-[8px]">
            <p className="text-[18px] font-normal text-[#1B2532]">
              تأتي تاهو 2024 مزودة بأحدث تقنيات الأمان:​
            </p>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <AiOutlineDollarCircle className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              الأسعار في السعودية
            </h3>
          </div>
          <p className="text-[#1B2532] font-normal text-[18px] leading-[150%]">
            تتوفر تاهو 2024 في السعودية بأسعار تبدأ من 221,625 ريال سعودي،
            وتختلف حسب الفئة والتجهيزات. على سبيل المثال، فئة LS تبدأ من 221,625
            ريال، بينما فئة RST تبدأ من 269,680 ريال سعودي , تتدرج باقي الفئات
            في السعر حسب أنظمة الدفع والتقنيات المضافة، مما يمنح العملاء حرية
            الاختيار حسب احتياجاتهم وميزانياتهم.
          </p>
          <p className="text-[#1B2532] font-normal text-[18px] leading-[150%]">
            تُعتبر شيفروليه تاهو 2024 خيارًا مثاليًا لمن يبحث عن سيارة دفع رباعي
            كبيرة تجمع بين القوة، الفخامة، والراحة العائلية. مع مجموعة متنوعة من
            المحركات، تجهيزات داخلية متميزة، وتقنيات أمان متطورة، تظل تاهو 2024
            من أبرز الخيارات في فئتها.
          </p>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <RiMagicLine className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              احصل على سيارة أحلامك{" "}
            </h3>
          </div>
          <p className="text-[#000000] font-normal text-[18px] leading-[150%]">
            هل أعجبتك مواصفات السيارة اللي حكينا عنها؟ جمعنالك مجموعة من
            السيارات المشابهة بأسعار منافسة ومواصفات ممتازة, شوف أفضل العروض على
            السيارات الجديدة والمستعملة من خلال موقعنا الآن!
            <span className="text-[#DD3B4A]">
              تصفحها الآن وشوف أي وحدة بتناسبك!
            </span>
          </p>
        </div>

        <SwiperCustom swiperData={swiperData} />
      </div>
    </div>
  );
}
