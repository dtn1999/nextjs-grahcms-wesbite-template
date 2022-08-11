import React from "react";
import { BaseProps } from "../../../types/components";

interface Props extends BaseProps {}

const Logo: React.FC<Props> = React.memo(function logo({ ...props }) {
  const { className } = props;
  return <div className="text-[36px]">Logo</div>;
});

export default Logo;
