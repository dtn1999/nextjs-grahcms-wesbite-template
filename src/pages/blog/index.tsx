import React from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import { motion } from "framer-motion";
import { HiArrowSmLeft } from "react-icons/hi";
import NavBar from "@app/components/Navigation";
import Container from "@app/features/Container";
import RichText from "@app/features/RichText";
import { dummyContent } from "@app/features/RichText/dummy";
import Headline from "@app/components/Headline";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const categories = [
  "science",
  "business academy",
  "mentoring and consulting",
  "Development policy",
  "Empowerment & Participation",
];

const tags =
  `fashion (6) # lifestyle (13) # music (3) # nature (11) # portraits (12) # studio (14)`
    .split("#")
    .map((tag) => tag.trim());

const BogPageCOmponent: NextPage<any> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <div className="h-full w-full">
        <NavBar />
        <div className="mb-8 w-full">
          <Container>
            <div className="mt-4 pb-8">
              <Headline
                underline
                underlineAlign="left"
                value={[
                  {
                    id: "1_latest",
                    value: "Johnny B Goode",
                  },
                ]}
              />
            </div>
            <div className="-mx-4 flex items-start">
              <div className="px-4">
                <span className="mb-8 inline-block text-xs font-bold text-primary">
                  September 15, 2017
                </span>
                <RichText value={dummyContent} />
                <div className="flex w-full justify-end border-t border-t-black py-5">
                  <div className="inline-flex items-center">
                    <span className="my-2 flex items-center">
                      <BsChevronLeft />
                      <span className="ml-3 underline">previous post</span>
                    </span>
                    <span className="my-2 flex items-center">
                      <span className="mx-3 border-l border-black pl-5 underline">
                        next post
                      </span>
                      <BsChevronRight />
                    </span>
                  </div>
                </div>
              </div>
              <div className="border border-[#eeeeee] px-9 pt-6">
                <div className="mt-4 mb-6">
                  <Headline
                    underline
                    underlineAlign="left"
                    underlineColor="primary"
                    value={[
                      {
                        id: "1_latest",
                        value: "Categories",
                      },
                    ]}
                  />
                </div>
                <div>
                  {categories.map((category) => (
                    <div key={category}>
                      <div className="flex cursor-pointer items-center justify-start border-b border-[#e8e8e8] py-3 text-base font-light text-[#A8A8A8] hover:text-primary">
                        <span>
                          <HiArrowSmLeft />
                        </span>
                        <span className="pl-9 lowercase first-letter:uppercase">
                          {category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <section className="mb-6">
                  <div className="mt-4 mb-6 text-lg">
                    <Headline
                      underline
                      underlineAlign="left"
                      underlineColor="primary"
                      value={[
                        {
                          id: "1_recent",
                          value: "recent posts",
                        },
                      ]}
                    />
                  </div>
                </section>
                <section className="mb-6">
                  <div className="mt-4 mb-6 text-lg">
                    <Headline
                      underline
                      underlineAlign="left"
                      underlineColor="primary"
                      value={[
                        {
                          id: "1_tags",
                          value: "Tags",
                        },
                      ]}
                    />
                  </div>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="mb-3 mr-1 inline-block cursor-pointer border bg-[#F0F0F0] py-2 px-5 text-sm font-normal hover:text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </SWRConfig>
  );
};

export default BogPageCOmponent;
