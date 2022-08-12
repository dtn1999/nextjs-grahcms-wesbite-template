import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";

interface Text {
  id: string;
  value: string;
  color?: "primary" | "secondary";
}

interface Props extends BaseProps {
  underline?: boolean;
  underlineAlign?: "left" | "center";
  value: Text[];
}
const Headline: React.FC<Props> = React.memo(
  ({ children, underline, underlineAlign, value = [] }) => {
    return (
      <h2
        className={cn({
          "text-5xl font-bold capitalize leading-11 ": true,
          "after:block after:bg-black after:w-5 after:h-[1px] after:text-xs after:content-[' ']":
            underline,
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
        <div className="flex flex-wrap">
          {React.Children.map(children, (child, index) => {
            console.log(child);
            return (
              <>
                {child}
                {index !== React.Children.count(children) - 1 && (
                  <span className="after:text-transparent after:content-['-']"></span>
                )}
              </>
            );
          })}
        </div>
      </h2>
    );
  }
);
export default Headline;
