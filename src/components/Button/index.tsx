import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";

type ButtonVariant = "Outline" | "Solid";
type Theme = "Primary" | "Secondary";

interface Props
  extends BaseProps,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  variant?: ButtonVariant;
  theme?: Theme;
}

const Button: React.FC<Props> = React.memo(
  ({ children, variant, disabled }) => {
    return (
      <div
        className={cn({
          "border px-5 py-3 leading-5 outline-none lg:text-sm xl:text-base font-normal uppercase first-letter:uppercase cursor-pointer duration-700 group hover:decoration-0 border-primary":
            true,
          "bg-transparent text-black hover:bg-primary hover:text-white hover:border-transparent":
            variant && variant === "Outline" && !disabled,
          "bg-primary hover:bg-primary-dark text-white border-transparent hover:bg-primary-hover":
            variant === "Solid",
          "opacity-50 cursor-not-allowed":
            disabled,
        })}
      >
        {" "}
        {children}{" "}
      </div>
    );
  }
);
export default Button;
