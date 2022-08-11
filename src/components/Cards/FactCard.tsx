import React from "react";
import { Fact } from "src/types/common";

const FactCard: React.FC<Fact> = React.memo(({ ...props }) => {
  const { title, description } = props;
  return (
    <div className="mt:px-[71px] flex flex-col justify-center rounded bg-white bg-opacity-[84%] px-4 pb-[96px]">
      <h2 className="mt-[56px] text-center text-[40px] font-bold capitalize text-primary">
        {title}
      </h2>
      <p className="mt-[43px]">{description}</p>
    </div>
  );
});

export default FactCard;
