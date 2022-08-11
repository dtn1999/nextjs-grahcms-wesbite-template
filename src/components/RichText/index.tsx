import React from "react";
import cn from "classnames";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextWrapper } from "src/types/graphql";
import { BaseProps } from "src/types/components";
import { parseStyle } from "src/utils/parse";
import Image from "next/image";

interface Props extends BaseProps, Pick<RichTextWrapper, "value" | "style"> {}
const RichTextComponent: React.FC<Props> = ({ ...props }) => {
  const { style, value, className } = props;
  return (
    <div className={cn(style && parseStyle(style), className)}>
      {value && value.raw && (
        <RichText
          content={value.raw}
          renderers={{
            embed: {
              MdText: ({ ...props }) => {
                return <div>{props.value}</div>;
              },
            },
            h1: ({ ...props }) => {
              return (
                <h1 className="mb-[20px] text-[55px] font-bold text-[#1D1D1D]">
                  {props.children}
                </h1>
              );
            },
            p: ({ ...props }) => {
              return (
                <p className="text-[24px] text-[#1D1D1D]">{props.children}</p>
              );
            },
            img: ({ ...props }) => {
              return (
                <div className="my-[50px]">
                  <Image
                    src={props.src as string}
                    alt={props.altText}
                    width={props.width}
                    height={props.height}
                    layout="responsive"
                  />
                </div>
              );
            },
          }}
        />
      )}
    </div>
  );
};

export default RichTextComponent;
