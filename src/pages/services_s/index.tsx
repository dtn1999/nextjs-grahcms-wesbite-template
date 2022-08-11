import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

const ServicePage: NextPage = (props: any) => {
  console.log(props);
  return (
    <React.Fragment>
      {/* <NavBar />
      <Hero
        title="Services"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n eiusmod tempor incididunt`}
        image={{
          src: "/images/pexels-photomix-company-518244 (1).jpg",
          alt: "pexels-jopwell-2422278 1.png",
        }}
      />
      <motion.section className="flex flex-col items-center justify-center py-[5rem]">
        <SectionHeader
          title="That is what we offer"
          description={` Lorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt`}
        />
      </motion.section>
      <motion.section
        transition={{
          staggerChildren: 0.1,
        }}
        className="grid grid-cols-3 gap-[33px] px-[229px]"
      >
        {services.map(({ ...props }, index) => (
          <ServiceCard key={index} {...props} />
        ))}
      </motion.section>
      <motion.section className="my-[79px] bg-[#4AFF9624] px-[229px] py-[71px]">
        <div className="flex flex-col items-center justify-center">
          <SectionTitle title="Recent Events" />
        </div>
        <div className="grid grid-cols-3 gap-[3rem] py-[2rem]">
          {events.map(({ ...props }, index) => (
            <EventCard key={index} {...props} />
          ))}
        </div>
      </motion.section> */}
    </React.Fragment>
  );
};

export async function getStaticProps() {
  // const { posts } = await graphCmsClient.request(QUERY);

  return {
    props: {
      posts: [],
    },
  };
}

export default ServicePage;
