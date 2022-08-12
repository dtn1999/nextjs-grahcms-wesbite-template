import React from "react";
import cn from "classnames";

interface Props {
  value: string;
  color?: "primary" | "secondary";
  marginBottom?: number;
  marginTop?: number;
}
const Text: React.FC<Props> = React.memo(({ value, color }) => {
  return (
    <span
      className={cn({
        "text-primary": color === "primary",
      })}
    >
      {value}
    </span>
  );
});
export default Text;
