/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { GetStaticProps, NextPage } from "next";
import { FiSearch } from "react-icons/fi";
import { createHygraphClient } from "@/lib/client";
import { PAGE_REQUEST } from "@/lib/requests/pages";
import BlockManager, { extractBlocs } from "src/components/BlockManager";
import Layout from "src/components/Layout";
import { HomeCarousel } from "src/components/Carousel/HomeCarousel";
import { PageProps } from "src/types/components";
import Hero from "src/components/Hero";
import { EVENTS_REQUEST } from "@/lib/requests/events";
import {
  BigEventCard,
  EventCard,
  SmallEventCard,
} from "src/components/Cards/EventCard";
import { Title } from "src/components/Section";
import { FaChevronRight } from "react-icons/fa";
import cn from "classnames";
import FormSelectComponent from "src/components/FormSelect";
import PaginatorComponent from "src/components/Paginator";

const EventPage: NextPage<PageProps> = ({ globalData, pageData }) => {
  const { blocs, events = [] } = pageData;
  const { hero, arrayOfBlocs } = React.useMemo(
    () => extractBlocs(blocs),
    [blocs]
  );

  if (!globalData) {
    return <div>something when wrong </div>;
  }

  const { navigation, footer } = globalData;
  console.log(events);
  return (
    <Layout navigation={navigation} footer={footer}>
      {hero && <Hero {...hero} />}
      <main className={cn("py-[100px]")}>
        <BlockManager blocs={arrayOfBlocs} />
        <div className="mt-[90px] flex flex-col-reverse justify-between px-4 md:px-8 lg:flex-row  xl:px-[180px]">
          <div className="space-y-[74px]">
            {events.map((event: any) => (
              <BigEventCard key={event.id} {...event} />
            ))}
          </div>
          <div className="mb-8 w-full lg:max-w-[532px]">
            <div className="flex w-full flex-col py-[33px] px-[23px] shadow-xl">
              <h1 className="text-[33px] font-bold capitalize">search</h1>
              <div className="relative flex w-full items-center rounded-md border bg-white pr-[10px]">
                <input
                  type="text"
                  placeholder="enter keywords"
                  className="h-[66px] w-full rounded-md pl-[23px] capitalize placeholder:text-[22px] placeholder:font-light focus:outline-none"
                />
                <button className="absolute right-0 top-0 mt-3 mr-4">
                  <FiSearch size={40} />
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Title
                value="Recent posts"
                lineAlign="left"
                withUnderline
                className="mt-[32px] text-[30px]"
              />
              <div className="mt-[53px] space-y-[65px]">
                {events.slice(2).map((event: any) => (
                  <SmallEventCard key={event.id} {...event} />
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <Title
                value="Categories"
                withUnderline
                className="mt-[50px]"
                lineAlign="left"
              />
              <div className="mt-[39px] space-y-[25px]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className="group flex cursor-pointer items-center space-x-[12px] text-[22px] text-[#626262]"
                  >
                    <FaChevronRight color="#626262" />
                    <span className="capitalize text-[#626262] transition-transform duration-700 group-hover:translate-x-[8px]">{`category ${i}`}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <Title
                value="Archives"
                withUnderline
                lineAlign="left"
                className="mt-[85px]"
              />
              <div className="mt-[39px] space-y-[25px]">
                <FormSelectComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[92px] flex w-full items-center justify-center">
          <PaginatorComponent />
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale, preview = false } = context;
  const hygraphClient = createHygraphClient(preview);
  const { data: page } = await hygraphClient.request(PAGE_REQUEST, {
    slug: "events",
    locale,
  });

  const { data: events } = await hygraphClient.request(EVENTS_REQUEST, {
    locale,
  });

  return {
    props: {
      pageData: {
        ...page,
        events,
      },
    },
    revalidate: 60,
  };
};

export default EventPage;
