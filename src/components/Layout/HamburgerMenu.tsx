import React from "react";
import { BaseProps } from "src/types/components";

interface Props extends BaseProps {
  onClick: () => void;
}
const HamburgerMenu: React.FC<Props> = React.memo(function icon({ ...props }) {
  const { className, onClick } = props;
  return (
    <div className={className || "HAMBURGER-ICON space-y-2"} onClick={onClick}>
      <span className={"block h-0.5 w-8 bg-white"}></span>
      <span className={"block h-0.5 w-8 bg-white"}></span>
      <span className={"block h-0.5 w-8 bg-white"}></span>
    </div>
  );
});

export default HamburgerMenu;
