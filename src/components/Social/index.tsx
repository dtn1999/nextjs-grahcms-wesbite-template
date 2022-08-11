import React from "react";
import cn from "classnames";
import { BaseProps } from "../../../types/components";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
interface Props extends BaseProps {
  links: any[];
}

const SocialNetWorks: React.FC<Props> = React.memo(function socials({
  ...props
}) {
  const { className } = props;
  return (
    <div
      className={cn(
        {
          "flex space-x-[2rem]": true,
        },
        className
      )}
    >
      <span className="cursor-pointer  text-white">
        <FaFacebookF size={25} />
      </span>
      {/*  */}
      <span className="cursor-pointer text-white">
        <FaInstagram size={25} />
      </span>
      {/*  */}
      <span className="cursor-pointer text-white">
        <FaTwitter size={25} />
      </span>
      {/*  */}
      <span className="cursor-pointer text-white">
        <FaTiktok size={25} />
      </span>
    </div>
  );
});

export default SocialNetWorks;
