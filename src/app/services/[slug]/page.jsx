import Image from "next/image";
import React from "react";
import { FaCarOn } from "react-icons/fa6";
import { RiMagicLine } from "react-icons/ri";
import SwiperCustom from "../../components/SwiperCustom";
import { client } from "../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";

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

const components = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[#1B2532] font-bold text-[30px] underline">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="!text-[#1B2532] font-bold text-[30px]">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base text-gray-700 mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 flex flex-col gap-[8px]">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
        <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <img
        src={value.asset.url}
        alt={value.alt || "صورة"}
        className="rounded-md my-4"
      />
    ),
  },
};

export function PortableTextComponent({ value }) {
  return <PortableText value={value} components={components} />;
}
export async function generateStaticParams() {
  const query = `*[_type == "services"]{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  return slugs.map((slug) => ({ slug: slug.slug }));
}

export default async function ServiceDetails({ params }) {
  const slug = params.slug;
  const query = `*[_type == "services" && slug.current == $slug][0]{
    title,
      question,
      description,
      publishedAt,
      slug,
      mainImage{
      asset->{
      url
      }
      },
  body,
  }`;
  const service = await client.fetch(query, { slug });
  console.log("service", service);
  if (!service) return <div>الخدمة غير موجودة</div>;
    const queryLatest = `
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    title,
    slug,
    price,
    installment,
    buttonText,
    mainImage {
      asset->{
        url
      }
    }
  }
`;

const latestPosts = await client.fetch(queryLatest);
  return (
    <div className="container mx-auto">
      <div
        className="w-full relative h-[494px] mt-[85px] mb-[157px] bg-cover"
        style={{
          backgroundImage: `url('${service.mainImage?.asset?.url}')`,
          backgroundPosition: "center 80%",
        }}
      >
        <div className="absolute inset-0 bg-[#1B2532] opacity-[50%] z-20" />
      </div>
      <div className="flex gap-[32px] flex-col">
        <div className="!flex !flex-col !gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <span className="!text-[#B7B7B7] font-500 text-[16px]">
              الرئيسية / المقال
            </span>
            <h1 className="text-[50px] font-bold !text-[#DD3B4A]">
              {service?.title}
              <span className="font-500 text-[18px] text-[#1B2532]">
                (دليلك الشامل لتمويل السيارات)
              </span>
            </h1>
          </div>
          <span className="text-[#B7B7B7] font-500 text-[16px] underline ">
            {service.publishedAt
              ? new Date(service.publishedAt).toLocaleDateString("en-EG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "تاريخ غير متوفر"}
          </span>
          <p className="text-[18px] text-[#1B2532] font-normal leading-[150%]">
            {service?.description}
          </p>
        </div>
        {service.body && (
  <div className="prose max-w-none text-[#1B2532] text-[18px] leading-[150%]">
    <PortableTextComponent value={service.body} />
  </div>
)}


        {/* <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <FaCarOn className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              شو يعني تمويل سيارات؟
            </h3>
          </div>
          <p className="text-[#1B2532] font-500 text-[18px] leading-[150%]">
            تمويل السيارة ببساطة هو إنك تشتري سيارة بالتقسيط، بدفع دفعة أولى
            بسيطة، والباقي بتسدده على أقساط شهرية مريحة من خلال بنك، شركة تمويل،
            أو حتى المعرض نفسه.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[16px]">
            <h4 className="!text-[#1B2532] font-bold text-[30px]">
              مميزات تمويل السيارات:
            </h4>
            <ul className="flex flex-col gap-[8px]">
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>تملك سيارة الآن، وادفع لاحقًا</span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>أقساط شهرية مريحة حسب دخلك</span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>خدمات تأمين شاملة مضافة أحيانًا</span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>خيارات كثيرة حسب مدة التمويل والفائدة</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[16px]">
            <h4 className="!text-[#1B2532] font-bold text-[30px]">
              مميزات تمويل السيارات:
            </h4>
            <ul className="flex flex-col gap-[8px]">
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>تملك سيارة الآن، وادفع لاحقًا</span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>أقساط شهرية مريحة حسب دخلك</span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>خدمات تأمين شاملة مضافة أحيانًا</span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>خيارات كثيرة حسب مدة التمويل والفائدة</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <RiMagicLine className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#DD3B4A] font-bold text-[30px] underline">
              جاهز تبدأ؟
            </h3>
          </div>
          <p className="text-[#000000] font-normal text-[18px] leading-[150%]">
            معنا، بنساعدك تختار السيارة المناسبة، ونوصلك بأفضل جهات التمويل في
            السوق.
          </p>
        </div>
      </div> */}
        <SwiperCustom swiperData={latestPosts} />
      </div>
    </div>
  );
}
