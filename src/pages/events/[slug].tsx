import { createHygraphClient } from "@/lib/client";
import { EVENTS_SLUGS_REQUEST, EVENT_REQUEST } from "@/lib/requests/events";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { SmallEventCard } from "src/components/Cards/EventCard";

import { extractBlocs } from "src/components/BlockManager";
import Hero from "src/components/Hero";
import { Title } from "src/components/Section";
import Layout from "src/components/Layout";
import RichTextComponent from "src/components/RichText";
import { PageProps } from "src/types/components";

const SinglePageEvent: NextPage<PageProps> = ({ ...props }) => {
  const { globalData, pageData } = props;
  const { event, page, events = [] } = pageData;

  const { hero, arrayOfBlocs } = React.useMemo(
    () => extractBlocs(page.blocs),
    [page.blocs]
  );
  if (!globalData) {
    return <div>something when wrong </div>;
  }

  const { navigation, footer } = globalData;

  return (
    <Layout navigation={navigation} footer={footer}>
      {hero && <Hero {...hero} />}

      <main className="pb-[90px]">
        <div className="mt-[90px] flex justify-between px-[120px]">
          <RichTextComponent
            value={event.description}
            className="max-w-[1040px]"
          />
          <div className="w-full max-w-[532px]">
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
            <div>
              <Title
                value="Similar events"
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
            <div>
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
            <div>
              <Title
                value="Archives"
                withUnderline
                lineAlign="left"
                className="mt-[85px]"
              />
              <div className="mt-[39px] space-y-[25px]">
                {/* <FormSelectComponent /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale, params } = context;
  const { slug } = params as any;
  const hygraph = createHygraphClient(false);
  const {
    data: event,
    page,
    events,
  } = await hygraph.request(EVENT_REQUEST, {
    locale,
    slug,
  });
  console.log("list of events", events);
  return {
    props: {
      pageData: {
        event,
        page,
        events,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { locales } = context;
  const hygraph = createHygraphClient(false);
  const { data: eventsSlugs } = await hygraph.request(EVENTS_SLUGS_REQUEST);
  const paths = [];
  for (const locale of locales as string[]) {
    const params = (eventsSlugs as any[]).map((event) => ({
      params: { slug: event.slug },
      locale,
    }));
    paths.push(...params);
  }
  return {
    paths,
    fallback: false,
  };
};
export default SinglePageEvent;
