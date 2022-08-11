import React from "react";
import type { GetStaticProps, NextPage } from "next";
import { createHygraphClient } from "@/lib/client";
import { PAGE_REQUEST } from "@/request/queries/*";
import BlockManager, { extractBlocs } from "src/components/BlockManager";
import Layout from "src/components/Layout";
import { HomeCarousel } from "src/components/Carousel/HomeCarousel";
import { PageProps } from "src/types/components";

const HomePage: NextPage<PageProps> = ({ globalData, pageData }) => {
  const { blocs } = pageData;
  const { carousel, arrayOfBlocs } = React.useMemo(
    () => extractBlocs(blocs),
    [blocs]
  );
  console.log(blocs);
  if (!globalData) {
    return <div>something when wrong </div>;
  }

  const { navigation, footer } = globalData;

  return (
    <Layout navigation={navigation} footer={footer}>
      {carousel && <HomeCarousel key={carousel.id} slides={carousel.slides} />}
      <main className="py-8 md:py-[90px]">
        <BlockManager blocs={arrayOfBlocs} />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale, preview = false } = context;
  const hygraphClient = createHygraphClient(preview);
  const { data: page } = await hygraphClient.request(PAGE_REQUEST, {
    slug: "home",
    locale,
  });

  return {
    props: {
      pageData: {
        ...page,
      },
    },
    revalidate: 60,
  };
};

export default HomePage;
