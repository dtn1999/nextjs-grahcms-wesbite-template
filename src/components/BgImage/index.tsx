import React from "react";
import cn from "classnames";
import { BaseProps, TAsset } from "@app/types";
import Image, { ImageProps } from "next/image";
import { getPlaiceholder } from "plaiceholder";
import BlurringImage from "./BlurringImage";

interface Props extends BaseProps, TAsset, Pick<ImageProps, "blurDataURL"> {
  objectFit?: ImageProps["objectFit"];
}

const BackgroundImage: React.FC<Props> = React.memo(
  ({ url, objectFit, blurDataURL }) => {
    return (
      <div className={cn("absolute -z-10 inset-0")}>
        <BlurringImage
          url={url}
          alt="background"
          layout="fill"
          objectFit={objectFit}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
        />
      </div>
    );
  }
);
export default BackgroundImage;
