import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";

export interface TText {
  id: string;
  value: string;
  color?: "primary" | "secondary";
}

interface Props extends BaseProps {
  underline?: boolean;
  underlineAlign?: "left" | "center";
  underlineColor?: "primary" | "secondary";
  value: TText[];
}

const Headline: React.FC<Props> = React.memo(
  ({ underline, underlineAlign, value = [], underlineColor }) => {
    return (
      <h2
        className={cn({
          "text-5xl font-bold capitalize leading-11 ": true,
          "after:block after:w-5 after:h-[1px] after:text-xs after:content-[' ']":
            underline,
          "after:bg-black": !underline,
          "after:bg-primary": underlineColor === "primary",
          "after:mx-auto after:mt-4": underlineAlign === "center",
          "after:mt-8": underlineAlign && underlineAlign === "left",
        })}
      >
        <p className="">
          {value.map((text) => (
            <span
              key={text.id}
              className={cn({
                "after:text-transparent after:content-['-'] capitalize": true,
                "text-primary": text.color === "primary",
              })}
            >
              {`${text.value.trim()}`}
            </span>
          ))}
        </p>
      </h2>
    );
  }
);
export default Headline;
