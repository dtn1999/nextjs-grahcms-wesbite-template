import React from "react";
import cn from "classnames";
import { BaseProps, TAsset } from "@app/types";
import Image, { ImageProps } from "next/image";

interface Props extends BaseProps, TAsset {
  objectFit?: ImageProps["objectFit"];
}

const BackgroundImage: React.FC<Props> = React.memo(({ url, objectFit }) => {
  return (
    <div className={cn("absolute -z-10 inset-0")}>
      <Image src={url} alt="background" layout="fill" objectFit={objectFit} />
    </div>
  );
});
export default BackgroundImage;
