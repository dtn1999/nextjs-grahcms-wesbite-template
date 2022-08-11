import React from "react";
import { default as NextLink } from "next/link";
import cn from "classnames";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BaseProps } from "../../../types/components";

interface Props extends BaseProps {
  label: string;
  href: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Link: React.FC<Props> = React.memo(function link({ ...props }) {
  const { className, label, href, isExternal, icon, iconPosition } = props;
  const style = cn(
    {
      "flex items-center space-x-[8px] first-letter:capitalize underline-offset-2 hover:underline hover:text-primary cursor-pointer":
        true,
      "flex-row-reverse space-x-reverse": iconPosition === "left",
    },
    className
  );

  if (isExternal) {
    return (
      <a href={href} rel="noreferrer" target="_blank" className={style}>
        <span>{label}</span>
        <span>
          <FaExternalLinkAlt size={14} />
        </span>
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={style}>
        <span>{label}</span>
        {icon && icon}
      </a>
    </NextLink>
  );
});

export default Link;
