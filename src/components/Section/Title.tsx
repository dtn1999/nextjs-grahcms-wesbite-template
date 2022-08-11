import React from "react";
import cn from "classnames";
import { BaseProps } from "../../types/components";
import { Title } from "src/types/graphql";
import { parseStyle } from "src/utils/parse";

interface Props
  extends BaseProps,
    Pick<Title, "value" | "style" | "withUnderline"> {
  lineAlign?: "left" | "center" | "right";
}

const Title: React.FC<Props> = React.memo(function title({
  value,
  style,
  lineAlign,
  className,
  withUnderline,
}) {
  const additionalStyle = style && parseStyle(style);
  const defaultStyle = `w-fit inline-flex flex-col ${additionalStyle}`;
  return (
    <div
      className={cn(
        defaultStyle,
        {
          "items-center": !lineAlign || lineAlign === "center",
          "items-start": lineAlign === "left",
          "items-end": lineAlign === "right",
        },
        className
      )}
    >
      <h1 className="text-4xl font-black lowercase first-letter:uppercase md:text-[48px]">
        {value}
      </h1>
      {withUnderline && (
        <hr
          className={cn({
            "w-[48%] bg-primary h-[5px] rounded": true,
          })}
        />
      )}
    </div>
  );
});

export default Title;
