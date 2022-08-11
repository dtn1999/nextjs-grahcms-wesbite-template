import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { createHygraphClient } from "../lib/client";
import { PAGES_SLUG_REQUEST, PAGE_REQUEST } from "../lib/requests/pages";
import Layout from "src/components/Layout";
import { PageProps } from "src/types/components";
import BlockManager, {
  extractBlocs,
} from "src/components/containers/blocs/BlockManager";
import Hero from "src/components/Hero";

const SitePage: NextPage<PageProps> = ({ pageData, globalData }) => {
  const { blocs } = pageData;
  const { hero, arrayOfBlocs } = React.useMemo(
    () => extractBlocs(blocs),
    [blocs]
  );
  if (!globalData) {
    return <div> something when wrong </div>;
  }
  const { navigation, footer } = globalData;
  return (
    <Layout navigation={navigation} footer={footer}>
      {hero && <Hero {...hero} />}
      <main className="pb-[90px]">
        <BlockManager blocs={arrayOfBlocs} />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale, params, preview = false } = context;
  const hygraphClient = createHygraphClient(preview);
  const { slug } = params as any;
  const { data: page } = await hygraphClient.request(PAGE_REQUEST, {
    slug,
    locale,
  });
  console.log("Page =>", page);
  return {
    props: {
      pageData: {
        ...page,
      },
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { locales } = context;
  const hygraphClient = createHygraphClient(false);
  const { data: pagesSlug } = await hygraphClient.request(PAGES_SLUG_REQUEST);
  const paths = [];
  for (const locale of locales as string[]) {
    const params = (pagesSlug as any[]).map((page) => ({
      params: { slug: page.slug },
      locale,
    }));
    paths.push(...params);
  }

  return {
    paths,
    fallback: false,
  };
};

export default SitePage;
