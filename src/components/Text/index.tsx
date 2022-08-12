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
    <p
      className={cn({
        "text-primary": color === "primary",
      })}
    >
      {value}
    </p>
  );
});
export default Text;
