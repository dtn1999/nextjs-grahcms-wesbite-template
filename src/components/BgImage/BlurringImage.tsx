import React from "react";
import cn from "classnames";
import Image, { ImageProps } from "next/image";
import { useBase64BlurringImage } from "@app/hooks/useRandomImage";

interface Props extends Omit<ImageProps, "src"> {
  url: string;
}

const BlurringImage: React.FC<Props> = React.memo(({ ...props }) => {
  const { url, ...rest } = props;
  const imageProps = useBase64BlurringImage(url);

  return (
    <React.Fragment>
      {imageProps && (
        <Image
          alt={imageProps.alt}
          {...imageProps}
          placeholder={imageProps.blurDataURL ? "blur" : "empty"}
        />
      )}
    </React.Fragment>
  );
});
export default BlurringImage;
