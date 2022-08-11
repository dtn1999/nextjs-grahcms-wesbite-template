import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { MdOutlineLocationOn, MdMailOutline, MdPhone } from "react-icons/md";

const contactDetails = [
  {
    icon: MdOutlineLocationOn,
    title: " VKII-Ruhrbezirk e.V. Leuthardstraße 1-7 44135 Dortmund",
  },
  {
    icon: MdPhone,
    title: "Tel : (732) 803-01 03, (732) 806-01 04",
  },
  {
    icon: MdMailOutline,
    title: "vkii.admin@email.de",
  },
];

const ContactUsPage: NextPage = () => {
  return (
    <React.Fragment>
      {/* <Hero
        title="Contact"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n sed do eiusmod tempor incididunt`}
        image={{
          src: "/images/pexels-andrea-piacquadio-789822.jpg",
          alt: "pexels-jopwell-2422278 1.png",
        }}
      />
      <SectionHeader
        title="We are based in Germany"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n sed do eiusmod tempor incididunt`}
      />
      <section className="flex justify-between px-[400px] pt-[2rem] pb-[4rem]">
        {contactDetails.map(({ icon, title }, index) => (
          <TooltipComponent
            key={index}
            content="Click to copy"
            position="TopCenter"
            className="bg-white"
          >
            <article
              key={index}
              className="flex cursor-pointer flex-col items-center justify-center"
            >
              <span data-for={title} className="block text-primary">
                <Icon
                  as={icon}
                  width={12}
                  height={12}
                  className="text-primary"
                />
              </span>
              <p className="py-[0.8rem] text-black">{title}</p>
            </article>
          </TooltipComponent>
        ))}
      </section> */}
      {/*  */}
      <section className="mb-[2rem] flex justify-between space-x-[4rem] bg-background-extralight px-[207px] py-[2rem] pb-[3rem]">
        <article className="flex-1 space-y-[1rem] pt-[1rem]">
          <h2 className="text-center text-[46px] font-bold">
            You can Contact us Here
          </h2>
          <div>
            <p className="text-center text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <form className="flex flex-col space-y-[12px] text-[#B7B7B7]">
            <div className="flex space-x-[15px]">
              <input
                type="text"
                placeholder="Vorname"
                className="h-[66px] flex-1 rounded-[8px] border-background-light p-[0.5rem]"
              />
              <input
                type="text"
                placeholder="Lastname"
                className="h-[66px] flex-1 rounded-[8px] border-background-light p-[0.5rem]"
              />
            </div>
            <input
              type="text"
              placeholder="E-Mail"
              className="h-[66px] rounded-[8px] border-background-light p-[0.5rem]"
            />
            <input
              type="text"
              placeholder="Subject (optional)"
              className="h-[66px] rounded-[8px] border-background-light p-[0.5rem]"
            />
            <textarea
              rows={5}
              placeholder="Subject (optional)"
              className="rounded-[8px] border-background-light p-[0.5rem]"
            />
            <button className="bg-primary py-[1rem] font-bold capitalize text-white">
              submit
            </button>
          </form>
        </article>
        {/*  */}
        <article className="flex w-full flex-1 justify-end">
          <div className="relative h-full">
            <div className="absolute left-[20px] top-[28px] h-full w-full bg-primary-light"></div>
            <Image
              src="/images/pexels-jep-gambardella-7690094.jpg"
              alt=""
              width={518}
              height={776}
              layout="fixed"
              className=""
            />
          </div>
        </article>
      </section>
    </React.Fragment>
  );
};

export default ContactUsPage;
