import { PiCarLight } from "react-icons/pi";
import { TbColorSwatch } from "react-icons/tb";
import { FaCarOn } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiMagicLine } from "react-icons/ri";
import SwiperCustom from "@/app/components/SwiperCustom";
import carOne from '../../../../public/assets/cars/car1.jpg'

export default async function BlogPostPage({ params }) {
const prices =[
 {
   title:'سعر السيارة',
  price:'2222'
 },
  {
   title:'سعر القسط',
  price:'888'
 }
]
  return (
    <div className="container mx-auto  my-[120px]">

      
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

            <span
            className="text-[#DD3B4A]"
            >
              
             تصفحها الآن وشوف أي
            وحدة بتناسبك!
            </span>
          </p>
        </div>


      <SwiperCustom image={carOne} prices={prices}/>
      </div>
    </div>
  );
}
