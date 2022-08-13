import React from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import { motion } from "framer-motion";
import NavBar from "@app/components/Navigation";
import Container from "@app/features/Container";
import RichText from "@app/features/RichText";
import { dummyContent } from "@app/features/RichText/dummy";
import Headline from "@app/components/Headline";

const BogPageCOmponent: NextPage<any> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <div className="h-full w-full">
        <NavBar />
        <div className="w-full">
          <Container>
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
            <span className="mb-8 text-xs font-bold text-primary">
              September 15, 2017
            </span>
            <RichText value={dummyContent} />
          </Container>
        </div>
      </div>
    </SWRConfig>
  );
};

export default BogPageCOmponent;
