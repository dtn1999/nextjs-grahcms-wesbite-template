import React from "react";
import { NextPage } from "next";
import cn from "classnames";
import BackgroundImage from "@app/components/BgImage";
import {
  usePicSumRandomImage,
  useUnsplashRandomImage,
} from "@app/hooks/useRandomImage";
import { useMeasure } from "react-use";
import Button from "@app/components/Button";
import LinkComponent from "@app/components/Link";
import ReactIconsComponent from "@app/components/Icons";
import SearchInput from "@app/components/SearchInput";

const PreviewPageComponent: NextPage<{}> = ({}) => {
  const [ref, { height, width }] = useMeasure<any>();
  const image = useUnsplashRandomImage("full");
  console.log(image);
  return (
    <div ref={ref} className={cn("px-16")}>
      <div className="flex flex-col items-start">
        <h1 className="mb-4 text-5xl capitalize"> Button component </h1>
        <div className="relative flex space-x-8 py-8">
          <Button variant="Outline">start free trial</Button>
          <Button variant="Solid">start free trial</Button>
          <Button variant="Outline" disabled>
          start free trial
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="mb-4 text-5xl capitalize"> Link component </h1>
        <div className="relative flex space-x-8 py-8">
          <LinkComponent href="#">Internal</LinkComponent>
          <LinkComponent isExternal>External</LinkComponent>
        </div>
      </div>
      <div className="mb-8 flex flex-col items-start">
        <h1 className="mb-4 text-5xl capitalize"> React Icons Loader </h1>
        <div className="relative flex space-x-16 py-8">
          <ReactIconsComponent
            icon="FaHome"
            size={45}
            className="text-green-600"
          />
          <ReactIconsComponent
            icon="FaUsers"
            size={45}
            className="text-blue-800"
          />
          <ReactIconsComponent
            icon="MdWork"
            size={45}
            className="text-yellow-600"
          />
          <ReactIconsComponent
            icon="MdSchool"
            size={45}
            className="text-red-600"
          />
          <ReactIconsComponent
            icon="GiTeacher"
            size={45}
            className="text-primary"
          />
          <ReactIconsComponent
            icon="RiParentFill"
            size={45}
            className="text-black"
          />
        </div>
      </div>
      <div className="mb-8 flex flex-col items-start">
        <h1 className="mb-4 text-5xl capitalize"> Search bar component </h1>
        <div className="relative flex w-full space-x-16 py-8">
          <div className="w-3/12">
            <SearchInput />
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col items-start">
        <h1 className="mb-4 text-5xl capitalize"> Form components </h1>
        <div className="relative flex w-full space-x-16 py-8">
          <div className="w-3/12">
            <SearchInput />
          </div>
        </div>
      </div>

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
