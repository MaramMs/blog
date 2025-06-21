"use client";
import CarCard from "./components/Card";
import CategoryTabs from "./components/CategoryTab";
import Hero from "./components/Hero";
import hero from "../../public/assets/hero.jpg";
import carOne from "../../public/assets/cars/car1.jpg";
import { Col, Row } from "react-bootstrap";
import FilterModal from "./components/FilterModal";
import Filter from "./components/Filter";

export default function Home() {
  const homeCardsItems = [
    {
      image: carOne,
      title: "شفروليه تاهو 2024 ",
      slug: "chevrolet-tahoe-2024",
      date: "2023-10-01",
      description:
        "بحثت عن سيارة مستعملة لفترة طويلة، لكن من خلال كارزفد لقيت سيارة تويوتا بحالة ممتازة وسعر مناسب جدًا. التواصل مع البائع كان سهل وسريع. أنصح أي أحد يستخدم كارزفد!",
    },
    {
      image: carOne,
      title: "شفروليه تاهو 2024 ",
      date: "2023-10-01",
      slug: "chevrolet-tahoe-2024",
      description:
        "بحثت عن سيارة مستعملة لفترة طويلة، لكن من خلال كارزفد لقيت سيارة تويوتا بحالة ممتازة وسعر مناسب جدًا. التواصل مع البائع كان سهل وسريع. أنصح أي أحد يستخدم كارزفد!",
    },
    {
      image: carOne,
      title: "شفروليه تاهو 2024 ",
      date: "2023-10-01",
      slug: "chevrolet-tahoe-2024",
      description:
        "بحثت عن سيارة مستعملة لفترة طويلة، لكن من خلال كارزفد لقيت سيارة تويوتا بحالة ممتازة وسعر مناسب جدًا. التواصل مع البائع كان سهل وسريع. أنصح أي أحد يستخدم كارزفد!",
    },
    {
      image: carOne,
      title: "شفروليه تاهو 2024 ",
      date: "2023-10-01",
      slug: "chevrolet-tahoe-2024",
      description:
        "بحثت عن سيارة مستعملة لفترة طويلة، لكن من خلال كارزفد لقيت سيارة تويوتا بحالة ممتازة وسعر مناسب جدًا. التواصل مع البائع كان سهل وسريع. أنصح أي أحد يستخدم كارزفد!",
    },
  ];
  return (
    <div className="container mx-auto mt-[50px] md:mt-[96px]">
      <Hero
        bg={hero}
        title="مدونة كارزفــــــــــــــــــد نحو تجربة سيارات  أذكى و أكثر وعياً"
        description="أخبار,مقالات,تحليلات حول عالم السيارات و خدمات كارزفد الذكية"
        image="/assets/hero-car.png"
        tags={["سيارات هجينة", "سيارات دفع رباعي", "سيارات كهربائية"]}
      />
      <div className="flex flex-col gap-[40px] mb-[120px]">
        <Row className="gap-2 align-items-start ">
          <Row>
            <Col sm={10} md={10}>
              <CategoryTabs />
            </Col>
            <Col sm={2} md={2}>
              <Filter />
            </Col>
          </Row>
          {/* <Row>
            <Col md={10} className="w-full bg-red h-[2px]"></Col>
          </Row> */}
        </Row>

        <Row className="g-4 align-items-start">
          <Col md={10}>
            <Row className="g-4">
              {homeCardsItems.map((item, index) => (
                <Col md={6} key={index}>
                  <CarCard
                    image={item.image}
                    title={item.title}
                    date={item.date}
                    slug={item.slug}
                    description={item.description}
                    buttonText="اقرأ المزيد"
                    padding="p-0"
                    href={`/blog/${item.slug}`}
                  />
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={2}>
            <FilterModal />
          </Col>
        </Row>
      </div>
    </div>
  );
}
