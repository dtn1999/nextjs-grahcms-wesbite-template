import React from "react";
import Image, { ImageProps } from "next/image";
import { useBase64BlurringImage } from "@app/hooks/useRandomImage";
import classNames from "classnames";
import { BaseProps } from "@app/types";

interface Props extends BaseProps, Omit<ImageProps, "src"> {
  url: string;
}

const BlurringImage: React.FC<Props> = React.memo(({ ...props }) => {
  const { className, url, layout, objectFit, ...rest } = props;
  const imageProps = useBase64BlurringImage(url);
  return (
    <div className={classNames("relative h-full w-full", className)}>
      {imageProps && (
        <Image
          alt={imageProps.alt}
          layout={layout}
          objectFit={objectFit}
          {...imageProps}
          placeholder={imageProps.blurDataURL ? "blur" : "empty"}
        />
      )}
    </div>
  );
});
export default BlurringImage;
