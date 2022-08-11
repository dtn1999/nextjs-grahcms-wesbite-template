import React from "react";
import { NextPage } from "next";
import cn from "classnames";
import Image from "next/image";
import BackgroundImage from "@app/components/BgImage";
import {
  usePexelsRandomImage,
} from "@app/hooks/useRandomImage";
import { useMeasure } from "react-use";
import SpinnerComponent from "@app/components/Spinner";

const PreviewPageComponent: NextPage<{}> = ({}) => {
  const [ref, { height, width }] = useMeasure<any>();
  const image = usePexelsRandomImage();
  const image2 = usePexelsRandomImage({ query: "people" });
  return (
    <div ref={ref} className={cn("px-16")}>
      <div className="flex flex-col items-start">
        <h1 className="mb-4 text-5xl capitalize">
          {" "}
          Background Image component{" "}
        </h1>
        <div
          style={{ height }}
          className="relative grid h-[40rem] w-full grid-cols-3 gap-4"
        >
          <div className="relative flex h-full w-full items-center justify-center">
            {!image ? (
              <SpinnerComponent />
            ) : (
              <BackgroundImage objectFit="cover" {...image} />
            )}
          </div>
          <div className="relative flex h-full w-full items-center justify-center">
            {!image2 ? (
              <SpinnerComponent />
            ) : (
              <BackgroundImage objectFit="cover" {...image2} />
            )}
          </div>
          <div className="relative flex h-full w-full items-center justify-center">
            {!image2 ? (
              <SpinnerComponent />
            ) : (
              <BackgroundImage objectFit="cover" {...image2} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPageComponent;
