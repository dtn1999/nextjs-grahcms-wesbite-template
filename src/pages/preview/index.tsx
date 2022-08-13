import React from "react";
import { NextPage } from "next";
import cn from "classnames";
import BackgroundImage from "@app/components/BgImage";
import { useMeasure } from "react-use";
import Button from "@app/components/Button";
import Headline from "@app/components/Headline";
import Text from "@app/components/Text";
import BlurringImage from "@app/components/BgImage/BlurringImage";

import Section from "@app/features/Section";
import TabComponent from "@app/features/Tabs";
import SimpleSection from "@app/features/SimpleSection";
import Accordion from "@app/features/Accordion";
import NavBar from "@app/components/Navigation";
import Carousel from "@app/features/Carousel";
import { carouselSlides, socialHandles } from "@app/features/Carousel/dummy";
import LanguageSwitch from "@app/features/Switch";

const PreviewPageComponent: NextPage<{}> = ({}) => {
  const [ref, { height }] = useMeasure<any>();
  return (
    <div ref={ref} className={cn("w-full h-screen")}>
      <div className="w-full overflow-x-hidden">
        <div className="mb-16 flex flex-col items-start px-[340px]">
          <h1 className="mb-4 text-5xl capitalize">Button component</h1>
          <div className="flex items-center space-x-8">
            <Button variant="Outline">Outline Button </Button>
            <Button variant="Solid">Solid Button </Button>
            <Button variant="Outline" disabled>
              Outline Disabled
            </Button>
            <Button variant="Solid" disabled>
              Solid Disabled
            </Button>
          </div>
        </div>

        <div className="mb-16 flex flex-col items-start px-[340px]">
          <h1 className="mb-4 text-5xl capitalize">Headline component</h1>
          <div className="flex flex-col items-start space-y-16 py-8">
            <Headline
              underline
              underlineAlign="center"
              className="mt-4"
              value={[
                {
                  id: "1_latest",
                  value: "latest works",
                },
              ]}
            />

            <Headline
              underline
              underlineAlign="center"
              className="mt-4"
              value={[
                {
                  id: "OUR",
                  value: "OUR",
                },
                {
                  id: "team",
                  value: "team",
                  color: "primary",
                },
              ]}
            />
          </div>
        </div>

        <div className="mb-16 flex flex-col items-start px-[340px]">
          <h1 className="mb-4 text-5xl capitalize">Section Image Component</h1>
          <div className="flex flex-col items-start space-y-16 py-8">
            <div className="relative flex h-[504px] w-[559px] items-start justify-start">
              <div className="relative h-fit w-fit">
                <BlurringImage
                  url="https://images.pexels.com/photos/12548883/pexels-photo-12548883.jpeg"
                  width="555px"
                  height="500px"
                  objectFit="cover"
                  layout="fixed"
                />
              </div>
              <div className="absolute inset-0 left-1 top-1 -z-20  bg-primary/30"></div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col bg-[#F0F0F0] px-[340px]">
          <h1 className="mb-4 text-5xl capitalize">
            Feature: Section component
          </h1>

          <Section
            imagePosition="right"
            url="https://images.pexels.com/photos/12548883/pexels-photo-12548883.jpeg"
          >
            <SimpleSection>
              <Headline
                underline
                underlineAlign="left"
                className="mt-4"
                value={[
                  {
                    id: "1_non_primary_about us",
                    value: "about us",
                  },
                ]}
              />
            </SimpleSection>
          </Section>
          <Section url="https://images.pexels.com/photos/12604653/pexels-photo-12604653.jpeg">
            <SimpleSection>
              <div className="max-w-lg">
                <Headline
                  underline
                  underlineAlign="left"
                  className="mt-4"
                  value={[
                    {
                      id: "We Are Novo ",
                      value: "We Are Novo ",
                    },
                    {
                      id: "Creative Studio.",
                      value: "Creative Studio.",
                      color: "primary",
                    },
                  ]}
                />
              </div>
            </SimpleSection>
          </Section>

          <Section
            key={Math.random()}
            imagePosition="right"
            url="https://images.pexels.com/photos/12548883/pexels-photo-12548883.jpeg"
          >
            <Headline
              underline
              underlineAlign="left"
              className="mt-4"
              value={[
                {
                  id: "non_primary_about us",
                  value: "about us",
                },
              ]}
            />
            <TabComponent />
          </Section>
        </div>

        <div className="flex w-full flex-col bg-white px-[340px]">
          <Section
            key={Math.random()}
            imagePosition="left"
            url="https://images.pexels.com/photos/12548883/pexels-photo-12548883.jpeg"
          >
            <div className="mb-8 max-w-lg">
              <Headline
                underline
                underlineAlign="left"
                className=""
                value={[
                  {
                    id: "What can we tell you",
                    value: "What can we tell you",
                  },
                  {
                    id: "about us",
                    value: "about us",
                    color: "primary",
                  },
                ]}
              />
            </div>
            <Accordion />
          </Section>
        </div>
        <div className="mb-16 flex flex-col items-start">
          <NavBar />
        </div>

        <div className="mb-16 flex flex-col items-start">
          <div style={{ height }} className="w-full">
            <Carousel slides={carouselSlides} socials={socialHandles} />
          </div>
        </div>
        <div className="fixed top-0 left-0 z-[9999] flex h-screen items-start justify-start">
          <div className="mt-[170px] ml-[-11px]">
            <LanguageSwitch />
          </div>
        </div>
        <div className="flex w-full flex-col px-[340px]">
          <h1 className="mb-4 text-5xl capitalize">
            Background Image component
          </h1>
          <div
            style={{ height: height / 2 }}
            className="relative grid h-[40rem] w-full grid-cols-3 gap-4"
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <BackgroundImage
                url="https://images.pexels.com/photos/12604653/pexels-photo-12604653.jpeg"
                objectFit="cover"
              />
            </div>
            <div className="relative flex h-full w-full items-center justify-center">
              <BackgroundImage
                url="https://images.pexels.com/photos/12548883/pexels-photo-12548883.jpeg"
                objectFit="cover"
              />
            </div>
            <div className="relative flex h-full w-full items-center justify-center">
              <BackgroundImage
                url="https://i.imgur.com/gf3TZMr.jpeg"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPageComponent;
