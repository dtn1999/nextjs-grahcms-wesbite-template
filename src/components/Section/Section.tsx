import cn from "classnames";
import React from "react";
import { BaseProps } from "../../../../types/components";
import SectionTitle from "./Title";

interface Props extends BaseProps {
  title: string;
  description?: string;
}

const Section: React.FC<Props> = React.memo(function header({
  title,
  description,
  className,
  children,
}) {
  return (
    <section
      className={cn(
        "flex flex-col justify-start items-center px-4 xl:px-[10rem]",
        className
      )}
    >
      <SectionTitle value={title} lineAlign="center" withUnderline/>
      {description && description.trim() && (
        <p className="mt-6 max-w-[50rem] whitespace-pre-line text-center md:text-[26px]">
          {description}
        </p>
      )}
      {children}
    </section>
  );
});

export default Section;
