// app/services/[slug]/page.jsx
import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/servicesData";
import SwiperCustom from "@/app/components/SwiperCustom";
import carOne from '../../../../public/assets/cars/car1.jpg'

export default function ServicePage({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) return notFound();
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
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <img
        src={service.image}
        alt={service.title}
        className="rounded-lg w-full h-auto mb-6"
      />
      <div dangerouslySetInnerHTML={{ __html: service.content }} />
      <SwiperCustom image={carOne} prices={prices} />
    </div>
  );
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}
