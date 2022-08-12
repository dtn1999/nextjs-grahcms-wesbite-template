import React from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import Headline from "@app/components/Headline";
import Text from "@app/components/Text";
import Section from "@app/features/Section";
import SimpleSection from "@app/features/SimpleSection";

const HomePageComponent: NextPage<any> = ({ fallback }) => {
  const isLoading = true;
  return (
    <SWRConfig value={{ fallback }}>
      <div className="flex flex-col items-center justify-start bg-white py-[5rem] px-8 text-lg">
        <h1 className="mb-8 text-3xl text-yellow-600">
          Welcome the nextjs with Graphcms starter
        </h1>
        <p className="mb-2 text-lg font-light">
          {" "}
          change the code in the{" "}
          <span className="font-black text-green-500 underline underline-offset-2">
            index.tsx
          </span>{" "}
          file to remove the annoying spinner{" "}
        </p>
        <Section
          imagePosition="right"
          url="https://images.pexels.com/photos/12548883/pexels-photo-12548883.jpeg"
        >
          <SimpleSection>
            <Headline underline underlineAlign="left" className="mt-4">
              <Text value="About us" />
            </Headline>
          </SimpleSection>
        </Section>
      </div>
    </SWRConfig>
  );
};

export default HomePageComponent;
