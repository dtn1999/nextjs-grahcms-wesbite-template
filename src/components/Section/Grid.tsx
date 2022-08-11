import React from "react";
import cn from "classnames";
import ComponentSwitch from "src/components";

import { GridSection } from "src/types/common";
import Section from "./Section";

interface Props {
  type: "TeamSection" | "SponsorSection" | "SERVICES" | "EVENTS";
  data: GridSection;
}

const GridComponent: React.FC<Props> = React.memo(({ ...props }) => {
  const { type, data } = props;
  const { title, description, children, bgColor } = data;
  const componentsToRender: any[] = [];
  if (Array.isArray(children)) {
    componentsToRender.push(...children);
  } else {
    componentsToRender.push(children);
  }
  console.log("Components to render are ", data);
  return (
    <div
      className={cn("mt-[90px] flex flex-col items-center py-[71px]", {
        "bg-[#4AFF9624]": bgColor,
      })}
    >
      <Section title={title} description={description} />
      <div
        className={cn(
          "grid w-full md:grid-cols-3 gap-[71px] px-4 md:px-[229px] mt-[90px]"
        )}
      >
        {componentsToRender.map((component) => {
          console.log(component);
          return (
            component && (
              <div key={component.id} className="flex w-full justify-start">
                <ComponentSwitch
                  key={component.key}
                  typename={component.typename}
                  data={{ ...component }}
                />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
});

export default GridComponent;
