import React from "react";
import Hero from "../components/Hero";
import serCard from "../../../public/assets/cars/servCar.jpg";
import one from "../../../public/assets/cars/one.png";
import two from "../../../public/assets/cars/two.png";
import { Col, Row } from "react-bootstrap";
import CarCard from "../components/Card";

const Services = () => {
  const classes = "line-height: 150%";
  const items = [
    {
      href:'/adsCar',
      // slug: "car-financing",
      question: "تمولهـــــــا ",
      image: one,
      title: "تمويل السيارات",
      date: "24 فبراير، 2025",
      description:
        "تمويل مرن يناسب دخلك، مع أقل نسبة فائدة وإجراءات موافقة سريعة، لتقتني سيارتك بأسرع وقت وبأقل التكاليف......",
    },
    {
            href:'/sellCar',

      // slug: "buy-and-sell",
      question: "تبيعها",
      image: two,
      title: "بيع وشراء السيارات",
      date: "24 فبراير، 2025",
      description:
        "صبح العثور على أفضل العروض أسهل من أي وقت مضى. سواء كنت ترغب في بيع سيارتك بسعر عادل أو شراء....",
    },
    {
            href:'/adsCar',

      // slug: "test-drive",
      question: "تجربها ",
      image: two,
      title: " حجز تجربة قيادة",
      date: "24 فبراير، 2025",
      description:
        "قبل أن تتخذ قرار شراء سيارتك الجديدة، تمنحك كارزفد فرصة مميزة لحجز تجربة قيادة بكل سهولة. جرب السيارة بنفسك، وتأكد من راحتها وأدائها......",
    },
  ];
  return (
    <div className="mb-[120px]">
      <Hero
        minHeight={537}
        classes={classes}
        width={474}
        shadow="linear-gradient(270deg, rgba(0, 0, 0, 0.6) 50%, rgba(102, 102, 102, 0.3) 202.36%)"
        bg={serCard}
        title="كل خدمات السيـارات فــــي مكـــان واحـــد"
        description="نوفر لك كل ما تحتاجه لشراء وبيـــع وتمويـــل السيـــارات، بخطــــوات بسيطة وتجربة موثوقة. اكتشف خدماتنا الآن واستمتع بتجربـــــــة لا مثيــــــل لها!"
      />

      <div className="container mx-auto">
        <Row>
          {items.map((item, index) => {
              console.log(item.href )

            
            return(
            <Col key={index} md={4}>
              <CarCard
                question={item.question}
                image={item.image}
                title={item.title}
                date={item.date}
                padding="28px"
                description={item.description}
                buttonText="اقرأ المزيد"
                href={item.href}
              />
            </Col>
          )})}
        </Row>
      </div>
    </div>
  );
};

export default Services;
