import React from "react";
import Image from "next/image";
import { MemberProfile } from "src/types/common";

const PersonCard: React.FC<MemberProfile> = React.memo(({ ...props }) => {
  const { name, position, roleDescription, photo } = props;
  console.log("props is ", name, position, roleDescription, photo);
  return (
    <div className="rounded-[15px] bg-white px-4 pt-[26px] pb-[44px] shadow-[0px_1px_18px_#0000001A] md:px-[47px]">
      <div className="relative min-h-[438px] w-full overflow-hidden rounded-md">
        <Image
          src={photo.url}
          alt={`Photo of ${name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="mt-[23px] text-[35px]">{name}</h2>
      <h3 className="text-[#1D1D1D96] ">{position}</h3>
      {!roleDescription && (
        <p className="mt-[23px]">
          Der Verein Kamerunischer Ingenieure und Informatiker e.V. (VKII) freut
          sich immer über Interessenten und neue potentielle Mitglieder.
        </p>
      )}
    </div>
  );
});

export default PersonCard;
