// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import CarCard from "../components/Card";
// import carStory from "../../../public/assets/cars/storyCar.jpg";
// import { CiUser } from "react-icons/ci";
// import Filter from "../components/Filter";

// const StoryUsers = () => {
//   const storyUsersItems = [
//     {
//       image: carStory,
//       icon: CiUser,
//       user: "أحمد العلي",
//       date: "2023-10-01",
//       description:
//         "بحثت عن سيارة مستعملة لفترة طويلة، لكن من خلال كارزفد لقيت سيارة تويوتا بحالة ممتازة وسعر مناسب جدًا. التواصل مع البائع كان سهل وسريع. أنصح أي أحد يستخدم كارزفد!",
//     },

//     {
//       image: carStory,
//       icon: CiUser,
//       user: "أحمد العلي",
//       date: "2023-10-01",
//       description:
//         "بحثت عن سيارة مستعملة لفترة طويلة، لكن من خلال كارزفد لقيت سيارة تويوتا بحالة ممتازة وسعر مناسب جدًا. التواصل مع البائع كان سهل وسريع. أنصح أي أحد يستخدم كارزفد!",
//     },

//     {
//       image: carStory,
//       icon: CiUser,
//       user: "أحمد العلي",
//       date: "2023-10-01",
//       description:
//         "بحثت عن سيارة مستعملة لفترة طويلة، لكن من خلال كارزفد لقيت سيارة تويوتا بحالة ممتازة وسعر مناسب جدًا. التواصل مع البائع كان سهل وسريع. أنصح أي أحد يستخدم كارزفد!",
//     },
//     {
//       image: carStory,
//       icon: CiUser,
//       user: "أحمد العلي",
//       date: "2023-10-01",
//       description:
//         "بحثت عن سيارة مستعملة لفترة طويلة، لكن من خلال كارزفد لقيت سيارة تويوتا بحالة ممتازة وسعر مناسب جدًا. التواصل مع البائع كان سهل وسريع. أنصح أي أحد يستخدم كارزفد!",
//     },
//     {
//       image: carStory,
//       icon: CiUser,
//       user: "أحمد العلي",
//       date: "2023-10-01",
//       description:
//         "بحثت عن سيارة مستعملة لفترة طويلة، لكن من خلال كارزفد لقيت سيارة تويوتا بحالة ممتازة وسعر مناسب جدًا. التواصل مع البائع كان سهل وسريع. أنصح أي أحد يستخدم كارزفد!",
//     },
//     {
//       image: carStory,
//       icon: CiUser,
//       user: "أحمد العلي",
//       date: "2023-10-01",
//       description:
//         "بحثت عن سيارة مستعملة لفترة طويلة، لكن من خلال كارزفد لقيت سيارة تويوتا بحالة ممتازة وسعر مناسب جدًا. التواصل مع البائع كان سهل وسريع. أنصح أي أحد يستخدم كارزفد!",
//     },
//   ];
//   return (
//     <div className="container mx-auto mt-[30px] md:mt-[120px] md:pb-[119px]  pb-[100px]">
//       <div className="flex flex-wrap justify-between items-center mb-[47px]">
//         <p className="text-[#DD3B4A] font-bold text-[20px] md:text-[40px]">
//           قصص و تجارب المستخدمين
//         </p>

//         <Filter />
//       </div>

//       <Container>
//         <Row className="g-4">
//           {storyUsersItems.map((item, index) => (
//             <Col key={index} md={4}>
//               <CarCard
//                 padding="p-0"
//                 image={item.image}
//                 title={item.title}
//                 user={item.user}
//                 date={item.date}
//                 description={item.description}
//                 icon={item.icon}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default StoryUsers;




'use client'; 

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import CarCard from "../components/Card";
import Filter from "../components/Filter";
import { getClients } from "../../sanity/lib/getClients"; 

const StoryUsers = () => {
  const [clients, setClients] = useState([]);

  console.log(clients,'clients')

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getClients();
      setClients(data);
    };

    fetchClients();
  }, []);

  return (
    <div className="container mx-auto mt-[30px] md:mt-[120px] md:pb-[119px] pb-[100px]">
      <div className="flex flex-wrap justify-between items-center mb-[47px]">
        <p className="text-[#DD3B4A] font-bold text-[20px] md:text-[40px]">
          قصص و تجارب المستخدمين
        </p>

        <Filter />
      </div>

      <Container>
        <Row className="g-4">
          {clients.map((client, index) => (
            <Col key={index} md={4}>
              <CarCard
                padding="p-0"
                image={client.mainImage?.asset?.url} 
                title="" 
                user={client?.name}
                date={client?.publishedAt}
                description={client?.message}
                icon={CiUser}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StoryUsers;
