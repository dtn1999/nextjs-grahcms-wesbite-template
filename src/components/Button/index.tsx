import React from "react";
import cn from "classnames";
import { BaseProps } from "../../types/components";

interface Props
  extends BaseProps,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  mode?: "filled" | "outlined" | "text";
  color?: "primary" | "secondary";
}

const Button: React.FC<Props> = React.memo(function button({
  children,
  ...props
}) {
  const { className, mode, color, ...restProps } = props;
  return (
    <button
      className={cn(
        {
          "relative min-h-[50px] min-w-[64px] border-2 px-[30px] py-[11px] outline-none lg:text-[14px] xl:text-[16px] font-medium capitalize cursor-pointer duration-700 group":
            true,
        },
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default Button;
