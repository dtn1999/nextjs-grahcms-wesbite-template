import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
interface Props extends BaseProps {}
const Headline: React.FC<Props> = React.memo(({ children }) => {
  return <h2 className={cn("text-5xl font-bold capitalize")}>{children}</h2>;
});
export default Headline;
