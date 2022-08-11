import React from "react";
import Button from "src/components/common/Button";
import { BaseProps } from "src/types/components";

interface Props extends BaseProps {
  title: string;
  description: string;
}

const JoinUsSection: React.FC<Props> = React.memo(({ ...props }) => {
  const { title, description } = props;
  return (
    <div className="relative mt-[122px] flex w-full flex-col bg-[#EEFFF6] space-y-4 p-8 text-center md:items-center md:py-[56px]">
      <h1 className="max-w-[908px] text-4xl font-bold lg:text-[60px]">
      {title}
      </h1>
      <p className="max-w-[850px] md:text-[22px]">{description}</p>
      <div className="-mt-8 flex flex-col justify-center md:space-x-[92px]">
        <Button className="mt-12 w-full rounded border-primary bg-transparent text-primary hover:bg-primary hover:text-white">
          work with us
        </Button>
      </div>
    </div>
  );
});

export default JoinUsSection;
