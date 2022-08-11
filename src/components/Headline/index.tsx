import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
interface Props extends BaseProps {
  underline?: boolean;
  underlineAlign?: "left" | "center";
}
const Headline: React.FC<Props> = React.memo(
  ({ children, underline, underlineAlign }) => {
    return (
      <h2
        className={cn({
          "text-5xl font-bold capitalize leading-10 ": true,
          "after:block after:bg-black after:w-5 after:h-[1px] after:text-xs after:content-[' ']":
            underline,
          "after:mx-auto after:mt-4": underlineAlign === "center",
          "after:mt-8": underlineAlign && underlineAlign === "left",
        })}
      >
        <div className="flex flex-wrap">
          {React.Children.map(children, (child, index) => (
            <>
              {child}
              {index !== React.Children.count(children) - 1 && (
                <span className="after:text-transparent after:content-['-']"></span>
              )}
            </>
          ))}
        </div>
      </h2>
    );
  }
);
export default Headline;
