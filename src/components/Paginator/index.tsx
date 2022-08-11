import React from "react";
import { FaChevronRight } from "react-icons/fa";
import cn from "classnames";
import { BaseProps } from "src/types/components";

interface Props extends BaseProps {}
const PaginatorComponent: React.FC<Props> = React.memo(({ ...props }) => {
  return (
    <div className="flex items-center justify-center space-x-[17px]">
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={cn("py-[7px] px-[13px] rounded-[8px]", {
            "bg-primary text-white": i === 1,
          })}
        >
          {i}
        </span>
      ))}
      <FaChevronRight size={25} className="text-primary" />
    </div>
  );
});

export default PaginatorComponent;
