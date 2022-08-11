import React from "react";
import cn from "classnames";
import Image from "next/image";
import { SectionWithImage } from "src/types/common";

const ImageSection: React.FC<SectionWithImage> = React.memo(({ ...props }) => {
  const { title, description, image } = props;
  return (
    <div
      className={cn(
        "relative grid grid-cols-1 md:grid-cols-2 md:px-[10rem] py-[4rem] bg-white"
      )}
    >
      <div className="relative h-full w-full md:w-[808px]">
        <div className="absolute left-[25px] top-[30px] h-full w-full bg-primary-light"></div>
        <Image
          src={image.url}
          alt={"image describing what the association do"}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="mt-[30px] px-6 md:ml-[25px] md:pl-[46px]">
        <h2 className="text-[36px] font-bold text-primary md:text-[48px]">
          {title}
        </h2>
        <p className="text-lg md:text-[22px]">{description}</p>
      </div>
    </div>
  );
});

export default ImageSection;
