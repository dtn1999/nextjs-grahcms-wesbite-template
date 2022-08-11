import React from "react";
import Image from "next/image";
import { BaseProps } from "src/types/components";

interface Props extends BaseProps {
  src: string;
  alt?: string;
}
const BackgroundImage: React.FC<Props> = React.memo(({ ...props }) => {
  const { src, alt } = props;
  return (
    <div className="absolute -z-10 h-full w-full">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
});

export default BackgroundImage;
