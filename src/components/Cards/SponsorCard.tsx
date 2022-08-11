import React from "react";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { Sponsor } from "src/types/common";

const SponsorCard: React.FC<Sponsor> = React.memo(({ ...props }) => {
  const { name, description, link, logo } = props;
  return (
    <div className="max-w-[353px] overflow-hidden rounded-[10px] border pt-[2px] shadow-md">
      <div className="relative min-h-[166px] w-full">
        <Image
          src={logo.url}
          alt={`Logo of ${name}`}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="h-full rounded bg-[#70707033] px-[26px] pt-[14px] pb-[24px] text-left">
        <h3 className="text-[25px] font-bold">{name}</h3>
        <p className="text-[18px]">{description}</p>
        <span className="mt-[26px] flex space-x-[8px] text-[18px]">
          <span className="underline">{link}</span>
          <span>
            <BiLinkExternal size={25} />
          </span>
        </span>
      </div>
    </div>
  );
});

export default SponsorCard;
