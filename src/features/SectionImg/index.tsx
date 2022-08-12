import React from "react";
import cn from "classnames";
import BlurringImage from "@app/components/BgImage/BlurringImage";
import { BaseProps } from "@app/types";

interface Props extends BaseProps {
  url: string;
}
const SectionImage: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { url } = props;
  return (
    <div className="relative flex h-[504px] w-[559px] items-start justify-start">
        <div className="absolute inset-0 left-1 top-1 bg-primary"></div>
      <div className="relative h-fit w-fit">
        <BlurringImage
          url={url}
          width="555px"
          height="500px"
          objectFit="cover"
          layout="fixed"
        />
      </div>
    </div>
  );
});
export default SectionImage;
