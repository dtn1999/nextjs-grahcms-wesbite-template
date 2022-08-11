import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import Link, { LinkProps } from "next/link";

type BuiltInLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
type AppLinkProps = BuiltInLinkProps | LinkProps;

interface Props extends BaseProps {
  isExternal?: boolean;
}
const LinkComponent: React.FC<Props & AppLinkProps> = React.memo(
  ({ isExternal, children, className, ...props }) => {
    if (isExternal) {
      return (
        <a className={className} {...(props as BuiltInLinkProps)}>
          {children}
        </a>
      );
    }
    return (
      <Link {...(props as LinkProps)}>
        <a className={className}>{children}</a>
      </Link>
    );
  }
);

export default LinkComponent;
