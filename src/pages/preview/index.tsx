import React from "react";
import { NextPage } from "next";
import cn from "classnames";
import BackgroundImage from "@app/components/BgImage";
import { useMeasure } from "react-use";
import Button from "@app/components/Button";

const PreviewPageComponent: NextPage<{}> = ({}) => {
  const [ref, { height, width }] = useMeasure<any>();
  return (
    <div ref={ref} className={cn("px-16")}>
      <div className="mb-16 flex flex-col items-start">
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
      <div className="flex flex-col items-start">
        <h1 className="mb-4 text-5xl capitalize">
          {" "}
          Background Image component{" "}
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
  );
};

export default PreviewPageComponent;
