import React from "react";
import { NextPage } from "next";
import cn from "classnames";
import BackgroundImage from "@app/components/BgImage";
import { usePexelsRandomImage } from "@app/hooks/useRandomImage";
import { useMeasure } from "react-use";

const PreviewPageComponent: NextPage<{}> = ({}) => {
  const [ref, { height, width }] = useMeasure<any>();
  const image = usePexelsRandomImage("large");
  console.log(image);
  return (
    <div ref={ref} className={cn("px-16")}>
      <div className="flex flex-col items-start">
        <h1 className="mb-4 text-5xl capitalize">
          {" "}
          Background Image component{" "}
        </h1>
        <div style={{ height }} className="relative h-[40rem] w-full ">
          {image && <BackgroundImage objectFit="cover" {...image} />}
        </div>
      </div>
    </div>
  );
};
export default PreviewPageComponent;
