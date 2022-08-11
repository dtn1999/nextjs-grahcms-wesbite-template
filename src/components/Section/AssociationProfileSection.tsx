import React from "react";
import cn from "classnames";
import Image from "next/image";
import { BaseProps } from "src/types/components";
import { AssociationProfile } from "src/types/common";
import FactCard from "src/components/common/Cards/FactCard";
import BackgroundImage from "src/components/common/BgImage/BackgroundImage";

interface Props extends BaseProps {
  details: AssociationProfile;
}

const AssociationProfileSection: React.FC<Props> = React.memo(({ details }) => {
  const { slogan, facts, backgroundImage: bgImage } = details;
  return (
    <div className={cn("relative pb-[68px]")}>
      <BackgroundImage src={bgImage.url} alt={bgImage.url} />
      <div className="">
        <div className="flex w-full items-center justify-center bg-primary px-4 py-[71px] md:max-w-[1166px] md:px-[241px]">
          <p className="text-[22px] text-white">{slogan}</p>
        </div>
      </div>
      <div className="mt-[133px] grid gap-[65px] px-4 py-[1rem] md:grid-cols-3 md:px-[10rem]">
        {facts.map((fact) => (
          <FactCard key={fact.id} {...fact} />
        ))}
      </div>
    </div>
  );
});

export default AssociationProfileSection;
